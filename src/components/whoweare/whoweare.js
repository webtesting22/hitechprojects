import React, { useEffect, useState } from "react";
import { Card, Col, Row, Space } from "antd";
import { AiFillEye } from "react-icons/ai";
import { ImRocket } from "react-icons/im";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../header/header";
import img1 from "./images/quality.png";
import img2 from "./images/team.png";
import img3 from "./images/workforce.png";
import img4 from "./images/construction.png";
import img5 from "./images/completed-task.png";
import img6 from "./images/building.png";
const managementcard = [
  {
    icon: <AiFillEye className="is-size-1 service_mainicon" />,
    title: "Our VISION",
    des: "To be the preferred destination for comprehensive construction solutions.",
  },
  {
    icon: <ImRocket className="is-size-1" />,
    title: "Our MISSION",
    des: "We take pride in delivering reliable  construction solutions with agility.",
  },
];
const aboutlist = [
  {
    title: "Qualified Leadership",
    des: "Hitech’s top management includes highly qualified Civil Engineers who knows not only the business of construction but also the craft of building. This helps them understand the finer nuances of construction and turn clients’ visions into realities.",
  },
  {
    title: "Adopting the best",
    des: "Hitech has been quick to adopt best practices in the industry in systems and processes. It has excellent project planningand monitoring systems and well established quality and safety protocols.",
  },
  {
    title: "Qualified and Experienced Execution Team",
    des: "Qualified leaders make qualified teams. Hitech has invested in its people and created trained professionals from the smallest to highest levels of the organisation so that good decisions are made at each level.",
  },
  {
    title: "Project Specific Approach",
    des: "Even as it grows, Hitech retains some of the best advantages of being flexible. With a project-specific working approach, it is able to adapt to the needs of the clients and respond to emergent needs of the project.",
  },
  {
    title: "Constant Technological Upgradation",
    des: "Hitech has continually invested in upgrading its Construction Technology and Information Technology driven processes.",
  },
];

const statslist = [
  {
    src: "Sources/images/achievements/quality.png",
    title: "Years of Experience",
    content: "25+",
  },
  {
    src: "Sources/images/achievements/team.png",
    title: "Team Members",
    content: "500+",
  },
  {
    src: "Sources/images/achievements/workforce.png",
    title: "Workforce",
    content: "3000+",
  },
  {
    src: "Sources/images/achievements/construction.png",
    title: "Total Constructed Area",
    content: "25Mn+ Sqft",
  },
  {
    src: "Sources/images/achievements/completed-task.png",
    title: "Completed Projects",
    content: "100+",
  },
  {
    src: "Sources/images/achievements/building.png",
    title: "Ongoing Projects",
    content: "20+",
  },
];

const Whoweare = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const widthEvent = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <img
        src="Sources/images/whoarewe/whoarewe.JPG"
        alt="404 -Not Given"
        className="about_img"
      //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />

      <div className="about-us-bg">
        <Header />
        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <Row>
                <Col
                  xxl={12}
                  lg={12}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto about_content "
                  style={{ padding: width > 1024 ? "20px" : "0px" }}
                >
                  <div>
                    <div className="sectional_heading">
                      <p className="is-size-2 has-text-weight-semibold pt-3 blue_color">
                        We are Hitech
                      </p>
                    </div>
                    <p className=" pt-4">
                      {/* Since its inception in 1996, Hitech has been a cornerstone
                      in Ahmedabad's construction industry. With certifications
                      like ISO 9001:2015 and ISO 45001, we set the bar high for
                      quality and safety. Our portfolio is diverse, covering
                      industrial constructions, residential developments,
                      commercial properties, and institutional buildings. We are
                      honored to be classified as a 'AA' special category - I
                      (Buildings) contractor by the Government of Gujarat. Our
                      mission is to create enduring partnerships and
                      transformative projects that stand as testaments to our
                      commitment to excellence. We believe in not just building
                      structures, but also in building relationships and
                      communities. */}
                      Since its inception in 1996, Hitech has been a cornerstone
                      in Ahmedabad's construction industry. With certifications
                      like ISO 9001:2015 and ISO 45001, we set the bar high for
                      quality and safety. Our portfolio is diverse, covering
                      industrial constructions, residential developments,
                      commercial properties, and institutional buildings. <br />
                      <br />
                      We are honored to be classified as a 'AA' special category
                      - I (Buildings) contractor by the Government of Gujarat.
                      Our mission is to create enduring partnerships and
                      transformative projects that stand as testaments to our
                      commitment to excellence. We believe in not just building
                      structures, but also in building relationships and
                      communities.
                    </p>
                    <div className="mt-5">
                      {/* <li>
                      It has a proven track record of delivering quality on
                      time, for every project.
                    </li>
                    <li>
                      It is one of the few construction companies in Ahmedabad
                      with quality system certification ISO 9001:2015 and Govt.
                      of Gujarat approved ‘AA’ class special category – I
                      (Buildings)
                    </li>
                    <li>
                      With an army of labourers and 400+ experienced and well
                      trained professionals, Hitech is capable of responding to
                      complex challenges.
                    </li> */}
                      {/* <li>Industrial Structures</li>
                      <li>Residential Buildings</li>
                      <li>Commercial Buildings</li>
                      <li>Institutional &amp; Other Buildings</li>
                      <br /> */}
                    </div>
                    {/* Our dedication to delivering high-quality projects on time has
                  led to obtaining the ISO 9001 certification for quality
                  management. Additionally, we have achieved the ISO 45001
                  certification, demonstrating our commitment to upholding the
                  highest EHS standards in the industry. We have also been
                  recognized as a &#39;AA&#39; class special category - I
                  (Buildings) by the Govt. of Gujarat. <br /> */}
                    {/* <br /> */}
                    {/* We believe in forging lasting partnerships with our clients
                    to create landmark projects that contribute to long-term
                    progress and economic growth. Over the years, we have
                    successfully completed numerous extraordinary projects, many
                    of which were groundbreaking in their own right. */}
                  </div>
                </Col>
                <Col
                  xxl={12}
                  lg={12}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                  style={{ textAlign: "center" }}
                >
                  <img
                    src="Sources/images/home_img.png"
                    alt="404 -Not Given"
                    className="about_img"
                  />
                </Col>
              </Row>
            </div>
            <div className="section_padding"></div>
          </div>
        </section>
        {/* <section className="stats">
          <div className="container">
            <p
              className="is-size-2 has-text-weight-semibold has-text-centered mt-2"
              style={{ color: "white" }}
            >
              Our Achievements
            </p>
            {
              <Row>
                {statslist.map((item, key) => (
                  <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24} key={key}>
                    <div className="property_list">
                      <div data-aos="zoom-in" data-aos-delay="200">
                        <img
                          src={item.src}
                          alt="404 - Not Given"
                          className="property_list_image"
                        />
                      </div>
                      <div
                        className="property_list_content"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                      >
                        <p className="is-size-5 has-text-centered blue_color has-text-weight-semibold">
                          {item.title}
                        </p>
                        <p className="is-size-3 has-text-centered blue_color has-text-weight-semibold">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            }
          </div>
        </section> */}
        <section className="home_achievements">
          <p
            className="is-size-2 has-text-weight-semibold has-text-centered mt-2"
            style={{ color: "white" }}
          >
            Our Achievements
          </p>
          <Row
            style={{ textAlign: "center", marginTop: "1rem" }}
            className="container"
          >
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img1} alt="" className="mb-4" />

              <h6>Years of Experience</h6>
              <h6>25+</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img2} alt="" className="mb-4" />
              <h6> Team Members</h6>
              <h6>500+</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img3} alt="" className="mb-4" />
              <h6>Workforce</h6>
              <h6>3000+</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img4} alt="" className="mb-4" />
              <h6> Total Constructed Area</h6>
              <h6>25Mn+ Sqft</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img5} alt="" className="mb-4" />
              <h6>Completed Projects</h6>
              <h6>100+</h6>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="white_back"
            >
              <img src={img6} alt="" className="mb-4" />
              <h6> Ongoing Projects</h6>
              <h6>20+</h6>
            </Col>
          </Row>
        </section>

        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                {managementcard.map((item, key) => {
                  return (
                    <Col
                      xxl={8}
                      lg={8}
                      md={12}
                      sm={24}
                      xs={24}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card className="servicecard">
                        <div className="has-text-centered service_icon">
                          <div className="icon_border">{item.icon}</div>
                        </div>
                        <div>
                          <p className="is-size-4 has-text-weight-semibold has-text-centered is-uppercase service_title mt-3">
                            {item.title}
                          </p>
                          <p className="is-size-5 has-text-left mt-4">
                            {item.des}
                          </p>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>
        {/* <section>
        <div>
          <Row>
            <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
              <img
                src="Sources/images/about/about.png"
                alt="404 - Not Given"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col
              xxl={12}
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className="bluebg_color"
            >
              <div className="strength">
                <p className="is-size-3 has-text-white mb-5 has-text-centered">
                  Our Strengths
                </p>
                <Slider {...settings}>
                  {aboutlist.map((item, key) => {
                    return (
                      <div className="has-text-centered">
                        <p className="is-size-4 has-text-white mb-3">
                          {item.title}
                        </p>
                        <p className="is-size-5 has-text-white">{item.des}</p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Col>
          </Row>
        </div>
      </section> */}

        <section>
          <div className="container">
            <Row>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24}>
                <img
                  src="Sources/images/about/about.png"
                  alt="404 - Not Given"
                  style={{ width: "100%", height: "500px" }}
                />
              </Col>
              <Col
                xxl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="bluebg_color"
              >
                <div className="strength">
                  <p
                    className="is-size-3 has-text-white has-text-centered mb-3"
                    style={{
                      margin: width >= 992 ? "0% 5%" : "5% 0%",
                      paddingTop: "0px",
                    }}
                  >
                    Our Strengths
                  </p>
                  <Slider {...settings}>
                    {aboutlist.map((item, key) => (
                      <div className="has-text-centered" key={key}>
                        <p className="is-size-4 has-text-white mb-3">
                          <span className="responsive-text">{item.title}</span>
                        </p>
                        <p className="is-size-5 has-text-white">
                          <span className="responsive-text">{item.des}</span>
                        </p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="event residential_events">
          <div className="section_padding"></div>
          <div className="container">
            <div className="sectional_heading pb-5">
              <p className="is-size-2 has-text-weight-semibold blue_color has-text-centered">
                Our Journey
              </p>
            </div>
            {width > 767 && (
              <div className="mt-5">
                <Row>
                  <Col xxl={10} lg={8} md={8}>
                    <p className="mt-3 has-text-right timeline_number">19</p>
                  </Col>
                  {/* <Col xxl={1} lg={0} md={0}></Col> */}
                  <Col xxl={4} lg={8} md={8}>
                    <div className="main_timeline_text">
                      <p className="is-size-6 has-text-black mt-3 has-text-centered">
                        Childhood friends Munir Shah and Tejas Dalal founded Hi-Tech from their home office.
                        Their journey began with a unique opportunity: building a corporate office for Harsha Engineers.
                      </p>
                    </div>
                  </Col>
                  {/* <Col xxl={1} lg={0} md={0}></Col> */}
                  <Col xxl={10} lg={8} md={8}>
                    <p className="mt-3 has-text-left timeline_number">96</p>
                  </Col>
                </Row>
              </div>
            )}
            {width < 768 && (
              <div className="mt-5">
                <Row>
                  <Col md={8} sm={24} xs={24}>
                    <p className="mt-3 has-text-centered timeline_number">
                      1996
                    </p>
                  </Col>
                  <Col md={8} sm={24} xs={24}>
                    <div className="main_timeline_text">
                      <p className="is-size-6 has-text-black mt-3 has-text-centered">
                        Childhood friends Munir Shah and Tejas Dalal founded Hi-Tech from their home office.
                        Their journey began with a unique opportunity: building a corporate office for Harsha Engineers.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
          {/* <div className="container is-fluid timeline_wrapper"> */}
          <div className="timeline_wrapper">
            <div className="timeline-block timeline-block-left different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2000</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2000.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Successfully secured our first <b>Green Field Industrial Project</b>—an Export-Oriented Manufacturing Facility for Harsha <span>Engineers</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2003</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2003.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Successfully launched a range of commercial and residential projects as developers in <b>Ahmedabad</b> and <b><span>Gandhinagar</span></b>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-left different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2007</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2007.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Executed various industrial projects for <b>Jekson Hydraulics</b>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2008</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2008.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Completed the <b>Logistic Hub for Safexpress</b>, emphasizing precision and efficiency in industrial project <span>execution</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-left different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2008</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2008 (1).jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Procured the <b>First Concrete Batching <span>Plant</span></b>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2009</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2009.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Bagged a landmark hospital project, <b>Narayana Hrudayalaya</b>, in <span>Ahmedabad</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-left different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2010</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2010.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                A strong association with leading real estate developer HN Safal, having developed <b>5 million sq.ft.</b> for their commercial projects over the <span>years</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2012</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img
                                style={{ height: "30vh" }}
                                src="Sources/images/JourneyImages/2012.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Procured the <b>First Tower Crane</b>, marking significant <span>growth</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-left different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2013</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2013.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Collaborated with True Value for the execution of Ahmedabad's first <b>22-storey</b> commercial complex, <b>West Gate</b>, building <b>2 million sq. ft.</b> for them over the years
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2015</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2015.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Digital transformation initiative taken for development of <b>Enterprise Resource Planning (ERP)</b> tool with inhouse IT <span>team</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2016</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2016 (1).jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Continued association with Sun Builders, including the prestigious high-end residential complex,
                                <b>Sun Evoq</b>, with a track record of delivering <b>3 million sq.ft. of construction</b> for them to <span>date</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-right different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2016</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2016.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Transitioned from a Partnership
                                firm to a <b>Private Limited Company </b>
                                for enhanced operational efficiency and <span>credibility</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2017</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img

                                src="Sources/images/JourneyImages/2017.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Association with <b>Sharnam Group</b> for their commercial projects.
                                <b>1.5 million sq.ft.</b> built for them
                                in several <span>years</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-right different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2018</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2018.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Expanded the corporate segment of construction for clients like
                                <b>Torrent, Arvind & Nexus. </b>
                                Initiated geographical expansion by starting projects in <b>Dholera</b>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            {/* <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2020</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2020 (1).jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <p className="is-size-6 has-text-black mt-3">
                              Initiated geographical expansion by starting projects in <b>Surat</b>
                            </p>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div> */}
            <div className="timeline-block timeline-block-left different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2020</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2020.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Won <b>3 ICI- Ultratech Awards</b> at State & Regional levels in different categories for outstanding <span>structures</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2021</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2021.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Moved to state-of-the-art office premises of 25,000 sq.ft. at <b>Westgate Business Bay</b>, S.G. <span>Highway</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-left different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2021</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2021 (1).jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Started projects with <b>Reliance Indutries Ltd</b> at Jamnagar
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2021</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2021 (2).jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                <b>Added Concrete Boom Placer</b> in the feet of P&M <span>equipment</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-left different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2022</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2022.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Bagged several iconic projects like<b> Regalia & Flexone</b> at <b>GIFT city</b>, <span>Gandhinagar</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2023</p>
                <Row>
                  <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                    <div className="space-align-container">
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          {/* center1 */}
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2023.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Introduced <b>Gujarat's First Self-Climbing Boom Placer</b>, revolutionizing construction with faster and precise concrete placement and setting new benchmarks for efficiency and <span>innovation</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="timeline-block timeline-block-left different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2024</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2024.jpg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Installed <b>Gujarat’s First Safety Screen</b> at <span>Regalia</span>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="timeline-block timeline-block-right different_width">
              <div className="marker"></div>
              <div>
                <p className="is-size-4 timeline_year">2025</p>
                <div className="space-align-container">
                  <Row>
                    <Col xxl={12} lg={17} md={24} sm={24} xs={24}>
                      <div className="space-align-block">
                        <Space
                          align="center"
                          direction="horizontal"
                          className="mile_box"
                        >
                          <div>
                            <div>
                              <img
                                src="Sources/images/JourneyImages/2025.jpeg"
                                alt="404 - Not Given"
                              />
                            </div>
                            <div className="BeforeStyling">
                              <p className="is-size-6 has-text-black mt-3">
                                Our Three project Anubhav School, Aranyam and The bellagio, has been honoured with the 16th <b>Vishwakarma award by CIDC at New <span>Delhi</span></b>
                              </p>
                            </div>
                          </div>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>
      </div>
      {/* <section className="event residential_events">
        <div className="section_padding"></div>
        <div className="container">
          <div className="sectional_heading">
            <p className="is-size-2 has-text-weight-semibold blue_color has-text-centered">
              Our Milestones
            </p>
          </div>
        </div>
        <div className="timeline_wrapper">
          <div className="timeline-block timeline-block-left different_width">
            <div className="marker"></div>
            <div>
              <p className="is-size-4 timeline_year">2012</p>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        Applewoods
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/1.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div>
                    </div>
                  </Space>
                </div>
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        Narayana Hrudalay Hospital
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/2.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <p className="is-size-5 blue_color has-text-weight-semibold">
                        1,20,000 sqft
                      </p>
                      <p className="is-size-6 has-text-black">
                        Largest Built-up Residential project
                      </p>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <p className="is-size-4 timeline_year">2015</p>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        West Gate
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/3.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <p className="is-size-5 blue_color has-text-weight-semibold">
                        5,00,000 sqft
                      </p>
                      <p className="is-size-6 has-text-black">
                        Tallest Commercial Building in Ahmedabad
                      </p>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div>
              <p className="is-size-4 timeline_year">2016</p>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        Sun Evoq
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/4.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <p className="is-size-5 blue_color has-text-weight-semibold">
                        1,25,000 sqft
                      </p>
                      <p className="is-size-6 has-text-black">
                        First luxurious Residential project
                      </p>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <p className="is-size-4 timeline_year">2017</p>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        Sumel 8
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/5.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <p className="is-size-5 blue_color has-text-weight-semibold">
                        16,00,000 sqft
                      </p>
                      <p className="is-size-6 has-text-black">
                        Largest Built-up Commercial project
                      </p>
                    </div>
                  </Space>
                </div>
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        Unicharm Factory
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/6.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <p className="is-size-5 blue_color has-text-weight-semibold">
                        7,00,000 sqft
                      </p>
                      <p className="is-size-6 has-text-black">
                        Largest Built-up Industrial project
                      </p>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-left different_width">
            <div className="marker"></div>
            <div>
              <p className="is-size-4 timeline_year">2018</p>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        One49
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/7.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <p className="is-size-5 blue_color has-text-weight-semibold">
                        4,00,000 sqft
                      </p>
                      <p className="is-size-6 has-text-black">
                        First 70 meter tall Residential project
                      </p>
                    </div>
                  </Space>
                </div>
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        The Banyan
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/8.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <p className="is-size-5 blue_color has-text-weight-semibold">
                        2,10,000 sqft
                      </p>
                      <p className="is-size-6 has-text-black">
                        The most luxurious Residential property in Ahmedabad
                      </p>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <p className="is-size-4 timeline_year">2019</p>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        Ahmedabad One Mall Phase - II
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/9.png"
                          alt="404 - Not Given"
                        />
                      </div>

                      <p className="is-size-6 has-text-black mt-3">
                        Most Complex Retrofitting Project
                      </p>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-left different_width">
            <div className="marker"></div>
            <div>
              <p className="is-size-4 timeline_year">2020</p>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        Jain Heritage Museum
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/10.png"
                          alt="404 - Not Given"
                        />
                      </div>

                      <p className="is-size-6 has-text-black mt-3">
                        First Museum Project (Ongoing)
                      </p>
                    </div>
                  </Space>
                </div>
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        Sun Sky Park
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/11.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <p className="is-size-5 blue_color has-text-weight-semibold">
                        8,40,000 sqft
                      </p>
                      <p className="is-size-6 has-text-black">
                        Biggest Mix Development project
                      </p>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <p className="is-size-4 timeline_year">2021</p>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                        Sun Atmosphere
                      </p>
                      <div>
                        <img
                          src="Sources/images/milestone/12.png"
                          alt="404 - Not Given"
                        />
                      </div>
                      <p className="is-size-5 blue_color has-text-weight-semibold">
                        12,50,000 sqft
                      </p>
                      <p className="is-size-6 has-text-black">
                        Largest ticket size project (Ongoing)
                      </p>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section> */}
      {/* <Space direction="vertical">
                <h3 className="is-size-4 timeline_year">2021</h3>

                <Space direction="horizontal" className="mt-5">
                  <div className="timeline-contentL">
                   <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                      Applewoods
                    </p>
                    <div>
                      <img
                        src="Sources/images/milestone/1.png"
                        alt="404 - Not Given"
                      />
                    </div>
                    <p className="is-size-5 blue_color has-text-weight-semibold">9,00,000sqft</p>
                    <p className="is-size-6 has-text-black">
                      Largest Built-up Residential project
                    </p>
                  </div>
                  <div className="timeline-contentL">
                   <p className="is-size-4 is-uppercase has-text-weight-semibold blue_color">
                      Applewoods
                    </p>
                    <div>
                      <img
                        src="Sources/images/milestone/1.png"
                        alt="404 - Not Given"
                      />
                    </div>
                    <p className="is-size-5 blue_color has-text-weight-semibold">9,00,000sqft</p>
                    <p className="is-size-6 has-text-black">
                      Largest Built-up Residential project
                    </p>
                  </div>
                </Space>
              </Space> */}
      {/* <div className="space-align-container"> */}
      {/* <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2018</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Solunaris Sustainable fashion
              </p>
              <p className="is-size-6">(Ahmedabad)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2018</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Fashion Week
              </p>
              <p className="is-size-6">(Kochi) </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2017</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Vie Fashion Week
              </p>
              <p className="is-size-6"> (Kerala)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2016</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Faa ( Grand finale )
              </p>
              <p className="is-size-6"> (Ahmedabad) </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2016</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Ibfw
              </p>
              <p className="is-size-6">(Goa)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2016</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                ISLW
              </p>
              <p className="is-size-6">(Bangalore)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2014</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                FDCI
              </p>
              <p className="is-size-6">(FDCI)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2014</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Lakme Fashion Week
              </p>
              <p className="is-size-6">(Lakme Fashion Week)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2013</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Khadi india Taj Krishna
              </p>
              <p className="is-size-6">(Hyderabad)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2010</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Lakme Fashion Week
              </p>
              <p className="is-size-6">(Lakme Fashion Week)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2009</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Lakme Fashion Week
              </p>
              <p className="is-size-6">(Lakme Fashion Week)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2009</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Marie Claire Show
              </p>
              <p className="is-size-6">(Marie Claire Show)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2008</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Lakme Fashion Week
              </p>
              <p className="is-size-6">(Lakme Fashion Week)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2007</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Fashion Week
              </p>
              <p className="is-size-6">(Bangalore)</p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="is-size-5">2007</h3>
              <p className="is-size-5 is-uppercase has-text-weight-semibold green_color">
                Lakme Fashion Week
              </p>
              <p className="is-size-6">(Lakme Fashion Week)</p>
            </div>
          </div> */}
    </>
  );
};

export default Whoweare;
