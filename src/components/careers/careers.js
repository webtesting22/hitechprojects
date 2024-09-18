import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Col, Image, Row, Space } from "antd";
import { MdArrowForwardIos } from "react-icons/md";
import { Button, Form, Input } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import TextArea from "antd/lib/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import Header from "../header/header";
import emailjs from '@emailjs/browser';
import img1 from "../careers/173.jpg"
import img2 from "../careers/174.jpg"
import { ContactUs } from "../contactForm/contact";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import "./careers.css"
const Careers = () => {
  const form = useRef();




  function scrollToForm() {
    // Get the heading element by its 'id'
    const headingElement = document.getElementById("form_heading");

    // Scroll to the heading using the 'scrollIntoView' method
    headingElement.scrollIntoView({
      behavior: "smooth", // You can use "auto" for immediate scrolling
      block: "start", // Scroll to the top of the heading
    });
  }
  // ... rest of your component ...
  return (
    <>
      <img
        src="Sources/images/career/careers.JPG"
        alt="404 -Not Given"
        className="about_img"
      // style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />

      <div className="about-us-bg">
        <Header />
        <section className="career">
          <div className="section_padding"></div>
          <div className="container">
            <Row style={{ justifyContent: "center" }}>
              {/* <Col
                xxl={8}
                lg={8}
                md={12}
                sm={24}
                xs={24}
                style={{ justifyContent: "center" }}
              >
                <div className="card_outer">
                  <div className="career_card">
                    <div className="content">
                      <Image
                        src="Sources/images/career/3.png"
                        alt="404 - Not Given"
                        className="pt-2"
                      />
                      <div className="career_text has-text-centered">
                        <a>
                          <Space direction="horizontal">
                            <p className="has-text-centered blue_color has-text-weight-semibold">
                              APPLY NOW
                            </p>
                            <MdArrowForwardIos className="arrow_icon blue_color" />
                          </Space>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col> */}
             {/* <Col
                xxl={8}
                lg={8}
                md={12}
                sm={24}
                xs={24}
                style={{ justifyContent: "center" }}
              >
                <div className="card_outer">
                  <div className="career_card">
                    <div className="content">
                      <Image
                        src={img1}
                        alt="404 - Not Given"
                        className="pt-2"
                      />
                      <div className="career_text has-text-centered">
                        <a onClick={scrollToForm}>
                          <Space direction="horizontal">
                            <p className="has-text-centered blue_color has-text-weight-semibold ">
                              APPLY NOW
                            </p>
                            <MdArrowForwardIos className="arrow_icon blue_color" />
                          </Space>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xxl={8}
                lg={8}
                md={12}
                sm={24}
                xs={24}
                style={{ justifyContent: "center" }}
              >
                <div className="card_outer">
                  <div className="career_card">
                    <div className="content">
                      <Image
                        src={img2}
                        alt="404 - Not Given"
                        className="pt-2"
                      />
                      <div className="career_text has-text-centered">
                        <a onClick={scrollToForm}>
                          <Space direction="horizontal">
                            <p className="has-text-centered blue_color has-text-weight-semibold ">
                              APPLY NOW
                            </p>
                            <MdArrowForwardIos className="arrow_icon blue_color" />
                          </Space>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            */}
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>
        <section className="contact_box" id="form_heading">
          <div className="section_padding"></div>
          <div className="container">
            <div className="mb-5 pb-2">
              <p className="is-size-2 mb-2 has-text-weight-semibold blue_color has-text-centered">
                Didn't Find anything suitable to You ?
              </p>
              <p className="is-size-5 has-text-weight-semibold has-text-black has-text-centered">
                Upload Your Resume and we will get back to you, if something
                comes suitable for you.
              </p>
            </div>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                // background: "#f4f4f4",
              }}
            >
              {/* <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              style={{ background: "#0d2e61" }}
            >
              <div className="loca_wrapper">
                <div className="section_heading">
                  <p className="is-size-4 has-text-centered has-text-white has-text-weight-semibold">
                    CONTACT US
                  </p>
                </div>
                <div
                  className="pt-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Row>
                    <Col xxl={24} md={24} lg={24} sm={24} xs={24}>
                      <div className="py-5" style={{ display: "flex" }}>
                        <Space direction="horizontal" size="small"></Space>
                        <Row>
                          <Col xxl={2} lg={2} md={2} sm={2} xs={3}>
                            <ImLocation className="arrow_icon has-text-white contact_icon" />
                          </Col>
                          <Col
                            xxl={22}
                            lg={22}
                            md={22}
                            sm={22}
                            xs={21}
                            className="pl-3"
                          >
                            <a
                              href="https://www.google.com/maps/place/Hitech+Projects+Private+Limited/@22.9975806,72.4969546,17z/data=!3m1!4b1!4m5!3m4!1s0x395e9b475ef7e48d:0x922a96c8de37de3a!8m2!3d22.9975739!4d72.4991428"
                              target="_blank"
                              className="has-text-white contact_content"
                            >
                              <p className="my-auto">
                                Hitech Projects Pvt. Ltd.
                              </p>
                              <p>A-1401, Block-A, </p>
                              <p>West Gate Business Bay,</p>
                              <p>Besides Signature - 1, S.G. Highway,</p>
                              <p> Makarba, Ahmedabad - 380051. </p>
                              <p>Gujarat, India</p>
                            </a>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col xxl={24} md={24} lg={24} sm={24} xs={24}>
                      <div className="py-5" style={{ display: "flex" }}>
                        <Space
                          direction="horizontal"
                          size="small"
                          style={{ display: "flex" }}
                        >
                          <BiPhoneCall className="arrow_icon has-text-white contact_icon" />
                          <div>
                            <a
                              href="tel:+91 9904592200"
                              className="has-text-white contact_content"
                            >
                              <span className="pl-2">+91 990 4592 200</span> /
                              <br />
                            </a>

                            <a
                              href="tel:+91 990 4288 900"
                              className="has-text-white contact_content"
                            >
                              <span className="pl-2">+91 990 4288 900</span>
                              <br />
                            </a>
                          </div>
                        </Space>
                      </div>
                    </Col>
                    <Col xxl={24} md={24} lg={24} sm={24} xs={24}>
                      <div className="py-5" style={{ display: "flex" }}>
                        <Space
                          direction="horizontal"
                          size="small"
                          style={{ display: "flex" }}
                        >
                          <AiOutlineMail className="arrow_icon has-text-white contact_icon" />
                          <a
                            href="mailto:info@hitechprojects.co.in"
                            className="has-text-white contact_content"
                          >
                            <span className="pl-2">
                              info@hitechprojects.co.in
                            </span>
                          </a>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col> */}
              <Col
                xs={24}
                sm={20}
                md={22}
                lg={24}
                xl={24}
                className="my-auto"
                style={{
                  boxShadow: "0 0 10px 0 rgb(43 52 59 / 32%)",
                  // background: "#f4f4f4",
                }}
              >
                <div
                  className="form_wrapper"
                  style={{
                    background: "#f4f4f4",
                  }}
                >
                  {/* <Form >
                    <Form.Item
                      className="form_hover"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter valid name",
                          pattern: /^[A-Za-z\s\b]+$/,
                        },
                      ]}
                    >
                      <Input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        onc
                        className="form_item"
                      />
                    </Form.Item>
                    <Form.Item
                      name="mobile"
                      rules={[
                        {
                          required: true,
                          message: "Please enter valid Mobile",
                          pattern: /^[0-9]{10}$/,
                        },
                      ]}
                    >
                      <Input placeholder="Your Mobile" className="form_item" />
                    </Form.Item>
                    <Form.Item
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter valid email",
                          pattern: /^[A-Za-z0-9._-]+@[A-Za-z]+.[A-Za-z]+$/,
                        },
                      ]}
                    >
                      <Input
                        placeholder="Your Email"
                        type="email"
                        name="user_email"
                        className="form_item"
                      />
                    </Form.Item>
                    <Form.Item
                      className="form_hover"
                      name="Position applied for"
                      rules={[
                        {
                          required: true,
                          message: "Please enter position",
                          pattern: /^[A-Za-z\s\b]+$/,
                        },
                      ]}
                    >
                      <Input
                        placeholder="Position applied for"
                        onc
                        className="form_item"
                      />
                    </Form.Item>
                    <Form.Item name="message">
                      <TextArea name="message" placeholder="Message" rows={1} />
                    </Form.Item>
                    <div className="mb-4">
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        directory
                      >
                        <Button icon={<UploadOutlined />} type="submit">
                          Upload Resume
                        </Button>
                      </Upload>
                    </div>
                    <Form.Item>
                      <Button
                        type="submit"
                        value="Send"
                        className="btn btn-color submit_button"
                        size="large"
                      >
                        Apply Now
                      </Button>
                    </Form.Item>
                  </Form> */}
                  <ApplicationForm/>
                  {/* <ContactUs /> */}
                </div>
              </Col>
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>
      </div>
    </>
  );
};

export default Careers;
