import videosData from '../data/videos.json';
import './Videos.css';

function Videos() {
  
  return (
    <div className="videos-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">TRAINING VIDEOS</h1>
          <p className="page-subtitle">Combat side stroke technique, drills, and workouts from @combatsidestroke</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Videos Grid */}
          <div className="videos-grid">
            {videosData.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-embed">
                  <blockquote 
                    className="tiktok-embed" 
                    cite={video.url} 
                    data-video-id={video.tiktok_id}
                    style={{ maxWidth: '605px', minWidth: '325px' }}
                  >
                    <section>
                      <a target="_blank" rel="noopener noreferrer" href={video.url}>
                        @combatsidestroke
                      </a>
                    </section>
                  </blockquote>
                </div>
                <div className="video-info">
                  {video.title && video.title.length > 10 && (
                    <h3 className="video-title">{video.title}</h3>
                  )}
                  {video.description && (
                    <p className="video-description">{video.description}</p>
                  )}
                  <div className="video-stats">
                    <span>📅 {video.upload_date}</span>
                    <span>👁 {video.views.toLocaleString()}</span>
                    <span>❤️ {video.likes.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Load TikTok embed script */}
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
}

export default Videos;
