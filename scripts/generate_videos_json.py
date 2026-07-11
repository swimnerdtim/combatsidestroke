#!/usr/bin/env python3
"""
Convert TikTok data to videos.json for Videos page
"""

import json
from pathlib import Path

def main():
    # Load TikTok blog posts
    tiktok_file = Path(__file__).parent.parent / 'tiktok_blog_posts.json'
    with open(tiktok_file) as f:
        tiktok_posts = json.load(f)
    
    # Convert to simpler videos format
    videos = []
    for post in tiktok_posts:
        video = {
            "id": post['tiktok_id'],
            "tiktok_id": post['tiktok_id'],
            "title": post['title'][:100] if len(post['title']) > 10 else "",
            "description": post['description'][:200] if len(post['description']) <= 200 else post['description'][:197] + "...",
            "url": post['tiktok_url'],
            "category": post['category'],
            "views": post['views'],
            "likes": post['likes']
        }
        videos.append(video)
    
    # Save
    output_file = Path(__file__).parent.parent / 'src/data/videos.json'
    with open(output_file, 'w') as f:
        json.dump(videos, f, indent=2)
    
    print(f"✅ Generated {len(videos)} videos")
    print(f"📝 Saved to: {output_file}")

if __name__ == '__main__':
    main()
