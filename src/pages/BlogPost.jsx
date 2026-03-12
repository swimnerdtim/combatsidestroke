import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blog-posts.json';
import { pstContent, openWaterContent, buddyTowContent } from '../data/blog-content';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="not-found">
            <h1>Post Not Found</h1>
            <Link to="/blog" className="btn-primary">Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }
  
  let content;
  switch(slug) {
    case 'navy-seal-pst-swim':
      content = pstContent;
      break;
    case 'open-water-training':
      content = openWaterContent;
      break;
    case 'buddy-towing':
      content = buddyTowContent;
      break;
    default:
      content = null;
  }
  
  return (
    <div className="blog-post-page">
      <section className="post-header">
        <div className="container">
          <Link to="/blog" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back to Blog
          </Link>
          <div className="post-category">{post.category}</div>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-date">
            {new Date(post.date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="post-content">
            {content}
          </div>
          
          <div className="post-cta">
            <h3>What's Next?</h3>
            <p>Join the Combat Side Stroke Workout Group</p>
            <p>
              To enhance your combat side stroke and make the most of your preparation, 
              the Swimnerd app can be an invaluable tool. Receive custom workouts, upload your stroke technique videos for evaluation, 
              and learn everything there is to know about CSS from Coach Nate.
            </p>
            <a href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              Download Swimnerd App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;
