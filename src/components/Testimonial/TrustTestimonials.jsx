import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import "./testimonials.css";

const testimonialVideos = [
  { id: 0, youtubeId: "gDjVR5IP1VE", name: "Mr. Krishnakumar", },
  { id: 1, youtubeId: "fsCGZukV5OA", name: "Mr. Balakrishnan", },
  { id: 2, youtubeId: "RkMiaRNJP-0", name: "Mr. Perumal", },
  { id: 3, youtubeId: "6BETPp1epxg", name: "Mrs. Chandrika Suresh", },
  { id: 4, youtubeId: "T59U3mNCtvM", name: "Mrs. Rohini Srivatsan",  },
  { id: 5, youtubeId: "Pu2GpAQAMuA", name: "Mr. Senthil", },
  { id: 6, youtubeId: "76BawUYsqpc", name: "Ms. Subbaraj",  },
  { id: 7, youtubeId: "2qj99sUdFuE", name: "Mrs. Arulmary Jaral", },
  { id: 8, youtubeId: "BA5ULwcS1oQ", name: "Mr. Sukumar & Banupriya",  },
  { id: 9, youtubeId: "b6t8vDUUmhM", name: "Customer", },
  { id: 10, youtubeId: "5n2MCQqvSX4", name: "Mr. Ramesh Kumar", },
  { id: 11, youtubeId: "wWWWX0yoX8M", name: "Ms. Akshya", },
  { id: 12, youtubeId: "ueBtV7HzhDE", name: "Mr. Vinoth",  },
  { id: 13, youtubeId: "ihLaBGuyjg8", name: "Mr. Jagankumar", },
  { id: 14, youtubeId: "qzCMbRWJhB8", name: "Mr. Kumar",  },
  { id: 15, youtubeId: "o13vjRajCws", name: "Mr. Ramprasath",  },
];

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(testimonialVideos[0]);

  const getEmbedUrl = (id) => `https://www.youtube.com/embed/${id}?rel=0`;

  return (
    <section className="aw-testimonials-section ">
      <Container>
        <Row className="g-4">
          {/* Left: Main Video */}
          <Col lg={8}>
            <div className="aw-main-video-card">
              <div className="aw-main-video-wrapper">
                <iframe
                  src={getEmbedUrl(activeVideo.youtubeId)}
                  title={activeVideo.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aw-main-video-info">
                <h3 className="aw-main-client-name">{activeVideo.name}</h3>
                <p className="aw-main-client-role">{activeVideo.role}</p>
                {/* <p className="aw-main-client-quote">
                  “Working with this team transformed our digital growth.”
                </p> */}
              </div>
            </div>
          </Col>

          {/* Right: Video List */}
          <Col lg={4}>
            <div className="aw-video-list">
              {testimonialVideos.map((video) => (
                <button
                  key={video.id}
                  className={`aw-video-item ${
                    activeVideo.id === video.id ? "active" : ""
                  }`}
                  onClick={() => setActiveVideo(video)}
                >
                  <div className="aw-video-thumb">
                    <span className="aw-play-icon">
                      <FaPlay size={10} />
                    </span>
                  </div>
                  <div className="aw-video-meta">
                    <span className="aw-video-name">{video.name}</span>
                    <span className="aw-video-role">{video.role}</span>
                  </div>
                </button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
