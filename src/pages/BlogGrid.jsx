
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogData';
import '../style/blog.css';

const categories = ['All', 'Investment', 'Guides', 'Project Updates', 'Lifestyle'];

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogData.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Banner */}
      <section className="blog-banner position-relative">
           
           <div className="container">
             <div className="row">
               <div className="col-lg-12">
                 <div
                   className="breadcrumb-text position-absolute"
                   style={{ zIndex: 99, bottom: 20 }}
                 >
                   <h4 className="text-white">Blog</h4>
                 </div>
               </div>
             </div>
           </div>
         </section>

      {/* Blog Grid with Sidebar */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Left Column - Blog List */}
            <div className="col-lg-8">
              <div className="row">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, idx) => (
                    <div className="col-md-6 mb-4" key={idx}>
                      <div className="card h-100 shadow-sm blog-card">
                        <img
                          src={blog.image}
                          className="card-img-top"
                          alt={blog.title}
                          loading="lazy"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{blog.title}</h5>
                          <p className="text-muted small mb-2">{blog.date} | {blog.category}</p>
                          <p className="card-text">{blog.excerpt}</p>
                          <Link to={`/blog/${blog.slug}`} className="site-btn btn-sm">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <p>No blogs found matching your criteria.</p>
                  </div>
                )}
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
    </>
  );
}