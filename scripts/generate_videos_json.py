#!/usr/bin/env python3
"""
Convert TikTok JSONL to videos.json for Videos page (chronological, no categories)
"""

import json
from pathlib import Path
from datetime import datetime

def main():
    # Load TikTok JSONL
    jsonl_file = Path(__file__).parent.parent / 'tiktok_videos.jsonl'
    
    videos = []
    with open(jsonl_file) as f:
        for line in f:
            if not line.strip():
                continue
            data = json.loads(line)
            
            # Get upload date
            upload_date = data.get('upload_date', '20000101')
            try:
                date_obj = datetime.strptime(upload_date, '%Y%m%d')
                date_str = date_obj.strftime('%Y-%m-%d')
            except:
                date_str = '2000-01-01'
            
            title = data.get('title', '').strip()
            description = data.get('description', '').strip()
            
            video = {
                "id": data['id'],
                "tiktok_id": data['id'],
                "title": title[:100] if len(title) > 10 else "",
                "description": description[:200] if len(description) <= 200 else description[:197] + "...",
                "url": data['webpage_url'],
                "upload_date": date_str,
                "timestamp": data.get('timestamp', 0),
                "views": data.get('view_count', 0),
                "likes": data.get('like_count', 0)
            }
            videos.append(video)
    
    # Sort by timestamp descending (newest first)
    videos.sort(key=lambda x: x.get('timestamp', 0), reverse=True)
    
    # Remove timestamp (was just for sorting)
    for video in videos:
        del video['timestamp']
    
    # Save
    output_file = Path(__file__).parent.parent / 'src/data/videos.json'
    with open(output_file, 'w') as f:
        json.dump(videos, f, indent=2)
    
    print(f"✅ Generated {len(videos)} videos")
    print(f"📝 Saved to: {output_file}")
    print(f"📅 Date range: {videos[-1]['upload_date']} to {videos[0]['upload_date']}")

if __name__ == '__main__':
    main()
