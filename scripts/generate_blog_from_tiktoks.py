#!/usr/bin/env python3
"""
Generate blog posts from TikTok data and merge with existing posts
"""

import json
import re
from pathlib import Path

def load_tiktok_posts():
    """Load TikTok blog posts JSON"""
    tiktok_file = Path(__file__).parent.parent / 'tiktok_blog_posts.json'
    with open(tiktok_file) as f:
        return json.load(f)

def load_existing_posts():
    """Load existing blog posts"""
    blog_file = Path(__file__).parent.parent / 'src/data/blog-posts.json'
    with open(blog_file) as f:
        return json.load(f)

def sanitize_var_name(slug):
    """Convert slug to valid JavaScript variable name"""
    var_name = slug.replace('-', '_')
    # If starts with number, prefix with 'tiktok_'
    if var_name[0].isdigit():
        var_name = f'tiktok_{var_name}'
    return var_name

def generate_jsx_content(tiktok_posts):
    """Generate JSX content for each TikTok post"""
    jsx_exports = []
    
    for post in tiktok_posts:
        slug = post['slug']
        description = post['description']
        tiktok_url = post['tiktok_url']
        tiktok_id = post['tiktok_id']
        
        # Split description into paragraphs
        paragraphs = [p.strip() for p in description.split('\n\n') if p.strip()]
        if not paragraphs:
            paragraphs = [description]
        
        # Generate JSX
        jsx_paragraphs = []
        for para in paragraphs:
            # Escape quotes and special chars
            para_escaped = para.replace('"', '\\"').replace("'", "\\'")
            jsx_paragraphs.append(f'    <p>{para_escaped}</p>')
        
        # Create TikTok embed
        embed_code = f'''    <div className="tiktok-embed-container" style={{{{margin: "2rem 0"}}}}>
      <blockquote 
        className="tiktok-embed" 
        cite="{tiktok_url}" 
        data-video-id="{tiktok_id}" 
        style={{{{maxWidth: "605px", minWidth: "325px"}}}}
      >
        <section>
          <a target="_blank" href="{tiktok_url}">Watch on TikTok</a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>'''
        
        # Combine into full content
        var_name = sanitize_var_name(slug)
        content = f'''export const {var_name}Content = (
  <>
{embed_code}

{chr(10).join(jsx_paragraphs)}
  </>
);

'''
        jsx_exports.append({
            'slug': slug,
            'var_name': f"{var_name}Content",
            'content': content
        })
    
    return jsx_exports

def update_blog_posts_json(existing_posts, tiktok_posts):
    """Merge TikTok posts with existing posts"""
    # Keep existing posts
    merged = existing_posts.copy()
    
    # Add TikTok posts (they don't have 'date' field)
    for tiktok_post in tiktok_posts:
        # Create blog post entry
        blog_entry = {
            "id": tiktok_post['id'],
            "title": tiktok_post['title'],
            "slug": tiktok_post['slug'],
            "excerpt": tiktok_post['excerpt'],
            "category": tiktok_post['category']
        }
        merged.append(blog_entry)
    
    return merged

def update_blog_content_jsx(jsx_exports):
    """Read existing blog-content.jsx and append new exports"""
    content_file = Path(__file__).parent.parent / 'src/data/blog-content.jsx'
    
    # Read existing content
    with open(content_file) as f:
        existing_content = f.read()
    
    # Append new exports
    new_exports = '\n'.join([ex['content'] for ex in jsx_exports])
    
    updated_content = existing_content + '\n' + new_exports
    
    return updated_content

def update_blog_post_jsx(existing_posts, jsx_exports):
    """Update BlogPost.jsx with new import and switch cases"""
    blogpost_file = Path(__file__).parent.parent / 'src/pages/BlogPost.jsx'
    
    with open(blogpost_file) as f:
        content = f.read()
    
    # Find the import line
    import_match = re.search(r"import \{([^}]+)\} from '../data/blog-content';", content)
    if not import_match:
        print("⚠️  Could not find import line in BlogPost.jsx")
        return content
    
    existing_imports = [x.strip() for x in import_match.group(1).split(',')]
    
    # Add new imports
    all_imports = existing_imports + [ex['var_name'] for ex in jsx_exports]
    new_import_line = f"import {{ {', '.join(all_imports)} }} from '../data/blog-content';"
    
    content = content.replace(import_match.group(0), new_import_line)
    
    # Find the switch statement
    switch_match = re.search(r'let content;\s+switch\(slug\) \{(.*?)\n  \}', content, re.DOTALL)
    if not switch_match:
        print("⚠️  Could not find switch statement in BlogPost.jsx")
        return content
    
    existing_cases = switch_match.group(1)
    
    # Generate new cases
    new_cases = []
    for ex in jsx_exports:
        case_code = f"\n    case '{ex['slug']}':\n      content = {ex['var_name']};\n      break;"
        new_cases.append(case_code)
    
    # Combine
    all_cases = existing_cases + ''.join(new_cases)
    new_switch = f"let content;\n  switch(slug) {{{all_cases}\n  }}"
    
    content = content.replace(switch_match.group(0), new_switch)
    
    return content

def main():
    print("🔄 Loading TikTok posts...")
    tiktok_posts = load_tiktok_posts()
    print(f"   Found {len(tiktok_posts)} TikTok posts")
    
    print("\n🔄 Loading existing blog posts...")
    existing_posts = load_existing_posts()
    print(f"   Found {len(existing_posts)} existing posts")
    
    print("\n🔄 Generating JSX content...")
    jsx_exports = generate_jsx_content(tiktok_posts)
    print(f"   Generated {len(jsx_exports)} JSX exports")
    
    print("\n🔄 Updating blog-posts.json...")
    merged_posts = update_blog_posts_json(existing_posts, tiktok_posts)
    blog_posts_file = Path(__file__).parent.parent / 'src/data/blog-posts.json'
    with open(blog_posts_file, 'w') as f:
        json.dump(merged_posts, f, indent=2)
    print(f"   ✅ Updated with {len(merged_posts)} total posts")
    
    print("\n🔄 Updating blog-content.jsx...")
    updated_jsx = update_blog_content_jsx(jsx_exports)
    content_file = Path(__file__).parent.parent / 'src/data/blog-content.jsx'
    with open(content_file, 'w') as f:
        f.write(updated_jsx)
    print(f"   ✅ Added {len(jsx_exports)} exports")
    
    print("\n🔄 Updating BlogPost.jsx...")
    updated_blogpost = update_blog_post_jsx(existing_posts, jsx_exports)
    blogpost_file = Path(__file__).parent.parent / 'src/pages/BlogPost.jsx'
    with open(blogpost_file, 'w') as f:
        f.write(updated_blogpost)
    print(f"   ✅ Added {len(jsx_exports)} switch cases")
    
    print("\n✅ Done! Blog now has:")
    print(f"   - {len(existing_posts)} manual posts")
    print(f"   - {len(tiktok_posts)} TikTok posts")
    print(f"   - {len(merged_posts)} total posts")
    
    print("\n📊 Category breakdown:")
    categories = {}
    for post in merged_posts:
        cat = post['category']
        categories[cat] = categories.get(cat, 0) + 1
    for cat, count in sorted(categories.items()):
        print(f"   - {cat}: {count} posts")

if __name__ == '__main__':
    main()
