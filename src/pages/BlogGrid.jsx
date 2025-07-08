import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";
import "../style/blog.css";
import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  "All",
  "Investment",
  "Guides",
  "Project Updates",
  "Lifestyle",
];

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  const filteredBlogs = blogData.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <>
      {/* Banner */}
      <section className="blog-banner position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
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

      {/* Content */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4 order-1 order-lg-2 mb-4">
              <div className="sticky-top" style={{ top: "100px" }}>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <h5 className="mb-3">Categories</h5>
                <ul className="list-group">
                  {categories.map((cat, i) => (
                    <li
                      key={i}
                      className={`list-group-item ${
                        selectedCategory === cat ? "active" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCurrentPage(1);
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Blog Cards */}
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="row">
                {currentBlogs.length > 0 ? (
                  currentBlogs.map((blog, idx) => (
                    <div className="col-md-6 col-sm-12 mb-4" key={idx}>
                      <div className="card h-100 shadow-sm blog-card">
                        <img
                          src={blog.image}
                          className="card-img-top"
                          alt={blog.title}
                          loading="lazy"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{blog.title}</h5>
                          <p className="text-muted small mb-2">
                            {blog.date} | {blog.category}
                          </p>
                          <p className="card-text">{blog.excerpt}</p>
                          <Link
                            to={`/blog/${blog.slug}`}
                            className="site-btn btn-sm"
                          >
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                  <Pagination className="custom-pagination">
                    {/* Prev Button */}
                    <Pagination.Item
                      disabled={currentPage === 1}
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                    >
                      Prev
                    </Pagination.Item>

                    {/* Page Numbers */}
                    {[...Array(totalPages)].map((_, idx) => (
                      <Pagination.Item
                        key={idx + 1}
                        active={idx + 1 === currentPage}
                        onClick={() => setCurrentPage(idx + 1)}
                      >
                        {idx + 1}
                      </Pagination.Item>
                    ))}

                    {/* Next Button */}
                    <Pagination.Item
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                    >
                      Next
                    </Pagination.Item>
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
