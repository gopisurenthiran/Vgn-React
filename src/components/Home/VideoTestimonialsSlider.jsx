import "./videoMarquee.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const videos = [
    { id: 0, youtubeId: "gDjVR5IP1VE", name: "Mr. Krishnakumar", },
    { id: 1, youtubeId: "fsCGZukV5OA", name: "Mr. Balakrishnan", },
    { id: 2, youtubeId: "RkMiaRNJP-0", name: "Mr. Perumal", },
    { id: 3, youtubeId: "6BETPp1epxg", name: "Mrs. Chandrika Suresh", },
    { id: 4, youtubeId: "T59U3mNCtvM", name: "Mrs. Rohini Srivatsan", },
    { id: 5, youtubeId: "Pu2GpAQAMuA", name: "Mr. Senthil", },
    { id: 6, youtubeId: "76BawUYsqpc", name: "Ms. Subbaraj", },
    { id: 7, youtubeId: "2qj99sUdFuE", name: "Mrs. Arulmary Jaral", },
    { id: 8, youtubeId: "BA5ULwcS1oQ", name: "Mr. Sukumar & Banupriya", },
    { id: 9, youtubeId: "b6t8vDUUmhM", name: "Customer", },
    { id: 10, youtubeId: "5n2MCQqvSX4", name: "Mr. Ramesh Kumar", },
    { id: 11, youtubeId: "wWWWX0yoX8M", name: "Ms. Akshya", },
    { id: 12, youtubeId: "ueBtV7HzhDE", name: "Mr. Vinoth", },
    { id: 13, youtubeId: "ihLaBGuyjg8", name: "Mr. Jagankumar", },
    { id: 14, youtubeId: "qzCMbRWJhB8", name: "Mr. Kumar", },
    { id: 15, youtubeId: "o13vjRajCws", name: "Mr. Ramprasath", },
];

const VISIBLE_COUNT = 3;

const VideoSliderThreeCols = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [activeVideo, setActiveVideo] = useState(null);

    const getPreview = (id) =>
        `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&controls=0&loop=1&playlist=${id}`;

    const getModalVideo = (id) =>
        `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&controls=1`;

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % videos.length);
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    // Auto-slide every 7 seconds
    useEffect(() => {
        if (activeVideo) return;
        const timer = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % videos.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [activeVideo]);

    const visibleVideos = Array.from({ length: VISIBLE_COUNT }, (_, idx) => {
        const index = (startIndex + idx) % videos.length;
        return videos[index];
    });

    return (
        <>
            <section className="aw-3col-section py-5">
                <Container>
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <div className="heading">
                                <h4>
                                    <span className="head-border me-2">
                                        <img src="/head-border.png" alt="border" />
                                    </span>
                                    What our client says?
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="aw-3col-header ">
                        <div>
                            {/* <h2
                                className="aw-3col-title"
                                style={{ fontFamily: "'Mulish', sans-serif" }}
                            >
                                What our clients say?
                            </h2> */}

                            {/* <p className="aw-3col-subtitle">16+ Real client stories</p> */}
                        </div>

                        <div className="aw-3col-arrows">
                            <button className="aw-3col-arrow-btn" onClick={handlePrev}>
                                <FaChevronLeft size={14} />
                            </button>
                            <button className="aw-3col-arrow-btn" onClick={handleNext}>
                                <FaChevronRight size={14} />
                            </button>
                        </div>
                    </div>

                    <Row className="g-4">
                        {visibleVideos.map((video) => (
                            <Col lg={4} md={4} sm={12} key={video.id}>
                                <div
                                    className="aw-3col-card"
                                    onClick={() => setActiveVideo(video.youtubeId)}
                                >
                                    <div className="aw-3col-thumb-wrap">

                                        {/* 🔥 LIVE autoplaying preview */}
                                        <iframe
                                            className="aw-3col-preview-video"
                                            src={getPreview(video.youtubeId)}
                                            allow="autoplay; muted; playsinline"
                                            frameBorder="0"
                                        ></iframe>

                                    </div>

                                    <div className="aw-3col-info">
                                        <p className="aw-3col-name">{video.name}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center">
                        <Link
                            to="/testimonial"
                            className="site-btn5 px-4 py-2"
                            style={{ textDecoration: "none" }}
                        >
                            VIEW ALL TESTIMONIALS
                        </Link>
                    </div>



                </Container>
            </section>

            {/* 🔥 Modal with sound */}
            <Modal
                show={!!activeVideo}
                onHide={() => setActiveVideo(null)}
                centered
                size="lg"
            >
                <Modal.Body className="p-0">
                    {activeVideo && (
                        <iframe
                            key={activeVideo}
                            src={getModalVideo(activeVideo)}
                            allow="autoplay; encrypted-media"
                            frameBorder="0"
                            style={{ width: "100%", height: "450px" }}
                        ></iframe>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default VideoSliderThreeCols;
