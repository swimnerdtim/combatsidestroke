#!/usr/bin/env python3
"""
Convert TikTok videos to blog posts with embedded videos + descriptions
"""

import json
import re
import sys
from pathlib import Path

def slug_from_title(title, video_id):
    """Generate slug from title or video ID"""
    if title and len(title) > 3:
        # Clean title for slug
        slug = title.lower()
        slug = re.sub(r'[^a-z0-9\s-]', '', slug)
        slug = re.sub(r'\s+', '-', slug.strip())
        slug = slug[:50]  # Max 50 chars
        return slug if slug else f"video-{video_id}"
    return f"video-{video_id}"

def determine_category(description, title):
    """Categorize based on content"""
    text = f"{title} {description}".lower()
    
    if any(word in text for word in ['buddy tow', 'lifesaving', 'rescue']):
        return 'Lifesaving'
    elif any(word in text for word in ['pst', 'test', '450', '500']):
        return 'PST'
    elif any(word in text for word in ['technique', 'rotate', 'arm', 'kick', 'streamline']):
        return 'Technique'
    elif any(word in text for word in ['workout', 'set', 'training', 'practice']):
        return 'Training'
    elif any(word in text for word in ['drown proof', 'bob', 'breath', 'knot']):
        return 'Training'
    else:
        return 'Training'

def convert_tiktoks_to_blog(jsonl_file):
    """Convert TikTok JSONL to blog post data"""
    
    videos = []
    with open(jsonl_file) as f:
        for line in f:
            if line.strip():
                videos.append(json.loads(line))
    
    print(f"Found {len(videos)} TikTok videos")
    
    blog_posts = []
    
    for video in videos:
        video_id = video.get('id', '')
        title = video.get('title', '').strip()
        description = video.get('description', '').strip()
        url = video.get('webpage_url', '')
        views = video.get('view_count', 0)
        likes = video.get('like_count', 0)
        
        # Skip if no description
        if not description or len(description) < 10:
            print(f"⚠️  Skipping {video_id}: No meaningful description")
            continue
        
        # Use description as title if title is empty
        if not title or len(title) < 5:
            # Use first sentence of description as title
            title = description.split('.')[0][:80]
        
        slug = slug_from_title(title, video_id)
        category = determine_category(description, title)
        
        # Create excerpt (first 150 chars of description)
        excerpt = description[:150]
        if len(description) > 150:
            excerpt += "..."
        
        blog_post = {
            "id": slug,
            "title": title,
            "slug": slug,
            "excerpt": excerpt,
            "category": category,
            "tiktok_url": url,
            "tiktok_id": video_id,
            "description": description,
            "views": views,
            "likes": likes
        }
        
        blog_posts.append(blog_post)
    
    return blog_posts

def main():
    jsonl_file = Path(__file__).parent.parent / 'tiktok_videos.jsonl'
    output_file = Path(__file__).parent.parent / 'tiktok_blog_posts.json'
    
    blog_posts = convert_tiktoks_to_blog(jsonl_file)
    
    # Sort by views (most popular first)
    blog_posts.sort(key=lambda x: x['views'], reverse=True)
    
    # Save to JSON
    with open(output_file, 'w') as f:
        json.dump(blog_posts, f, indent=2)
    
    print(f"\n✅ Created {len(blog_posts)} blog posts")
    print(f"📝 Saved to: {output_file}")
    
    # Show preview
    print("\n📊 Top 5 by views:")
    for post in blog_posts[:5]:
        print(f"  - {post['title'][:60]}... ({post['views']} views)")
    
    print(f"\n📂 Category breakdown:")
    categories = {}
    for post in blog_posts:
        cat = post['category']
        categories[cat] = categories.get(cat, 0) + 1
    for cat, count in sorted(categories.items()):
        print(f"  - {cat}: {count} posts")

if __name__ == '__main__':
    main()
