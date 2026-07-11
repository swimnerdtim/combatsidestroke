#!/usr/bin/env python3
"""
Fetch TikToks and convert directly to videos.json
"""

import json
import subprocess
from pathlib import Path

def fetch_tiktoks():
    """Fetch TikTok metadata using yt-dlp"""
    print("🔄 Fetching TikTok videos...")
    result = subprocess.run(
        ['yt-dlp', '--no-warnings', '--flat-playlist', '--print-json', 'https://www.tiktok.com/@combatsidestroke'],
        capture_output=True,
        text=True
    )
    
    if result.returncode != 0:
        print(f"❌ Error fetching TikToks: {result.stderr}")
        return []
    
    videos = []
    for line in result.stdout.strip().split('\n'):
        if line.strip():
            videos.append(json.loads(line))
    
    print(f"   Found {len(videos)} videos")
    return videos

def categorize(description, title):
    """Auto-categorize based on content"""
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

def convert_to_videos_format(tiktoks):
    """Convert TikTok data to videos.json format"""
    videos = []
    
    for tk in tiktoks:
        video_id = tk.get('id', '')
        title = tk.get('title', '').strip()
        description = tk.get('description', '').strip()
        url = tk.get('webpage_url', '')
        views = tk.get('view_count', 0)
        likes = tk.get('like_count', 0)
        
        # Skip if no description
        if not description or len(description) < 10:
            continue
        
        # Use description as title if title is empty
        if not title or len(title) < 5:
            title = description.split('.')[0][:80]
        
        category = categorize(description, title)
        
        video = {
            "id": video_id,
            "tiktok_id": video_id,
            "title": title[:100] if len(title) > 10 else "",
            "description": description[:200] if len(description) <= 200 else description[:197] + "...",
            "url": url,
            "category": category,
            "views": views,
            "likes": likes
        }
        videos.append(video)
    
    # Sort by views (most popular first)
    videos.sort(key=lambda x: x['views'], reverse=True)
    
    return videos

def main():
    tiktoks = fetch_tiktoks()
    
    if not tiktoks:
        print("❌ No TikToks found")
        return
    
    print("\n🔄 Converting to videos format...")
    videos = convert_to_videos_format(tiktoks)
    
    print(f"   Converted {len(videos)} videos")
    
    # Save
    output_file = Path(__file__).parent.parent / 'src/data/videos.json'
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_file, 'w') as f:
        json.dump(videos, f, indent=2)
    
    print(f"\n✅ Saved to: {output_file}")
    
    # Show breakdown
    categories = {}
    for v in videos:
        cat = v['category']
        categories[cat] = categories.get(cat, 0) + 1
    
    print("\n📊 Category breakdown:")
    for cat, count in sorted(categories.items()):
        print(f"   - {cat}: {count} videos")

if __name__ == '__main__':
    main()
