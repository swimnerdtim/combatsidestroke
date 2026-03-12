import { Link } from 'react-router-dom';
import blogPosts from '../data/blog-posts.json';
import './Blog.css';

function Blog() {
  return (
    <div className="blog-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">BLOG</h1>
          <p className="page-subtitle">Navy SEAL swim training tips, techniques, and strategies</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card card">
                <div className="blog-category">{post.category}</div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span className="blog-read-more">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
