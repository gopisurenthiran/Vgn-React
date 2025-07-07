import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../data/blogData';
import '../style/blog.css';

const categories = ['All', 'Investment', 'Guides', 'Project Updates', 'Lifestyle'];

export default function BlogDetail() {
  const { slug } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blog = blogData.find((item) => item.slug === slug);

  const filteredBlogs = blogData.filter((b) => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || b.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch && b.slug !== slug;
  });

  if (!blog) return <p className="text-center">Blog not found</p>;


  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {/* Left Column - Main Content */}
          <div className="col-lg-8">
            <Link to="/blogs" className="btn btn-sm btn-outline-secondary mb-3">← Back to Blogs</Link>
            <h1>{blog.title}</h1>
            <p className="text-muted">{blog.date}</p>
            <img src={blog.image} className="img-fluid rounded my-3" alt={blog.title} />
            <div className="blog-content">
              {blog.content}
            </div>

            <hr className="my-4" />
            <h5 className="mb-3">Related Blogs</h5>
            <div className="row">
              {filteredBlogs.map((item, idx) => (
                <div className="col-md-6 mb-4" key={idx}>
                  <div className="card h-100 shadow-sm">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                      <h6 className="card-title">{item.title}</h6>
                      <p className="card-text text-muted small">{item.date}</p>
                      <Link to={`/blog/${item.slug}`} className="site-btn">Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px' }}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <h5 className="mb-3">Categories</h5>
              <ul className="list-group">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    className={`list-group-item ${selectedCategory === cat ? 'active' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
