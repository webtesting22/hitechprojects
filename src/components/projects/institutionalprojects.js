
import { Col, Image, Row, Modal } from "antd";
import React, { useState } from "react";
import Header from "../header/header";

const institutionalprojectslist = [
  {
    src: "",
    title: "ANUBHAV SCHOOL",
    content:  "----------------------------------------------",
    client: "----------",
    location: "Sanand, Ahmedabad",
    projectSize: "75,000 Sq. ft.",
    projectDes: "----------",
    projectYear: "2024 - Current",
    architect: "------------",
    consultant: "------------------",
    scope:
      "Civil Works Excavation, Backfiling, pile Foundation work, masonary, plaster, flooring, painting for School Building",
  },

];
const institutionalprojectscompleted = [
  {
    src: "Sources/images/prouctlist/Institutional_projects/ongoing/1-1.jpg",
    title: "ANAND NIKETAN SCHOOL",
    content:
      "Anand Niketan is a School having 50,000 Sqft built up area in Sughad, Ahmedabad with various facilities including Special Room, Sports Arenas & Activity Rooms.",
    segment: "Education",
    client: "Utthan Sewa Trust",
    location: "Sanand, Ahmedabad",
    projectSize: "349,062 Sq. ft.",
    projectDes: "8 Floors, 43 Meters",
    projectYear: "2022 - Current",
    architect: "Kakani Associates",
    consultant: "DELF Consulting Engineers (India) Private Limited",
    scope:
      "Civil works, Masonry & Plaster, Painting, Flooring, and Waterproofing.",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/ongoing/2.png",
    title: "MUSEUM KOBA",
    imageGallery: [
      "/Sources/images/prouctlist/Institutional_projects/completed/Museum/Main Photos/Jain Museum - Main.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Museum/Main Photos/Jain Museum - 1.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Museum/IMG_20220310_105045.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Museum/IMG_20220310_105252.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Museum/IMG_20220310_105319.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Museum/IMG_20220310_105459.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Museum/IMG-20220310-WA0012.jpg"

    ],
    content:
      "The Museum- Samrat Samprati Sangrahalaya of Shri Mahavir Jain Aradhana Kendra,Koba preserves and nourishes the rare heritage of Jain Art and architecture",
    segment: "Corporate",
    client: "Shri Mahavir Jain Aradhana Kendra, Koba (SMJAK Trust)",
    location: "Koba, Gandhinagar",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "16 Meters",
    projectYear: "2022",
    architect: "SJK Architects",
    consultant: "Global Engineering Services",
    scope: "RCC Framework,Structural Work , Finishing Work.",
  },

  {
    src: "Sources/images/prouctlist/Institutional_projects/ongoing/1.png",
    title: "JITO HOSTEL",
    imageGallery: [
      "/Sources/images/prouctlist/Institutional_projects/completed/JITO Hostel/IMG-20220309-WA0003.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/JITO Hostel/IMG-20220309-WA0004.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/JITO Hostel/IMG-20220309-WA0008.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/JITO Hostel/IMG-20220309-WA0005.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/JITO Hostel/IMG-20220309-WA0011.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/JITO Hostel/IMG-20220309-WA0012.jpg"

    ],
    content:
      "Hostel building work for Jain International Trade organisation-An Educational Trust",
    segment: "Residential",
    client: "JITO Ahmedabad Educational Trust",
    location: "CG Road, Ahmedabad",
    projectSize: "37,200 Sq. ft.",
    projectDes: "5 Floors, 24 Meters",
    projectYear: "2022",
    architect: "PVDRS, Ahmedabad",
    consultant: "P-CUBE Consultant",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/lubi corporate.jpg",
    title: "LUBI CORPORATE",
    imageGallery: [
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main photos/corporate-park-ahmedabad3.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main photos/Lubi - Main.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main photos/Lubi - 1.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main photos/Lubi - 2.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main photos/Lubi - 3.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0010.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0016.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0021.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0018.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0020.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0021.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0012.jpg",

    ],
    content: "Corporate office at Tragad, Ahmedabad",
    segment: "Corporate",
    client: "Lubi Industries LLP",
    location: "Tragad, Ahmedabad",
    projectSize: "1,68,400 Sq. ft.",
    projectDes: "7 Floors, 36 Meters",
    projectYear: "2022",
    architect: "DSP Design Associates",
    consultant: "KMH Engineering",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/2.png",
    title: "ANAND NIKETAN JOEY'S CAMPUS",
    imageGallery: [
      "/Sources/images/prouctlist/Institutional_projects/completed/Anand Niketan School/Best Photos/Anand Niketan -Main.JPG",
      "/Sources/images/prouctlist/Institutional_projects/completed/Anand Niketan School/Best Photos/Anand Niketan -1.JPG",
      "/Sources/images/prouctlist/Institutional_projects/completed/Anand Niketan School/Best Photos/Anand Niketan -2.JPG",
      "/Sources/images/prouctlist/Institutional_projects/completed/Anand Niketan School/NDT_4579.JPG",
      "/Sources/images/prouctlist/Institutional_projects/completed/Anand Niketan School/NDT_4580.JPG"
    ],
    content:
      "Anand Niketan is a School having 50,000 Sqft built up area in Sughad, Ahmedabad with various facilities including Special Room, Sports Arenas & Activity Rooms.",
    segment: "Education",
    client: "Anand Niketan",
    location: "Sindhu Bhavan road, Ahmedabad",
    projectSize: "50,000 Sq. ft.",
    projectDes: "4 Floors, 20 Meters",
    projectYear: "2015",
    architect: "Kakani Associates",
    consultant: "Himanshu Parikh Consulting Engineers",
    scope: "RCC Framework,Structural Work , Finishing Work.",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/3.png",
    title: "NARAYANA HRUDALAYA HOSPITAL",
    imageGallery: [
      "/Sources/images/prouctlist/Institutional_projects/completed/Narayana Hrudalaya Hsopital/Narayana Hrudalaya - Main.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Narayana Hrudalaya Hsopital/Narayana Hrudalaya - 1.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Narayana Hrudalaya Hsopital/Narayana Hrudalaya - 2.jpg",
      "/Sources/images/prouctlist/Institutional_projects/completed/Narayana Hrudalaya Hsopital/Narayana Hrudalaya - 3.webp",
    ],
    content: "NARAYANA HRUDALAYA HOSPITAL",
    segment: "Healthcare",
    client: "Narayana Hrudalaya Hospital",
    location: "Rakhial, Ahmedabad",
    projectSize: "2,00,000 Sq. ft.",
    projectDes: "4 Floors, 20 Meters",
    projectYear: "2011",
    architect: "Shapoorji Pallonji & Co. Ltd, Umesh & Co.",
    consultant: "Umesh & Co",
    scope: "Earthwork,RCC Framework,Masonry, Plaster.",
  },
  
];

const Institutionalprojects = () => {
  const [isOngoing, setIsOngoing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);
  const showModal = (item) => {
    setModalDetails(item);
    setIsModalOpen(true);
    console.log("open")

  };

  const handleOk = () => {
    setIsModalOpen(false);
    setModalDetails(null);

  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModalDetails(null);

  };
  return (
    <>
      <img
        src="Sources/images/prouctlist/Institutional_projects/instititional.JPG"
        alt="404 -Not Given"
        className="about_img"
      />
      <div className="projects-bg">
        <Header />
        <section className="residential py-5">
          <div className="container">
            <p className="is-size-1 has-text-weight-semibold has-text-centered blue_color is-uppercase">
              Institutional And Corporate Projects
            </p>
            <div>
              <Row>
                <Col>
                  <p
                    className="is-size-5 has-text-weight-semibold blue_color mb-2 is-uppercase ongoing-projects"
                    onClick={() => {
                      setIsCompleted(false);
                      setIsOngoing(true);
                    }}
                    style={{
                      borderBottom: isOngoing ? "2px solid #0d2e61" : "none",
                    }}
                  >
                    Ongoing
                  </p>
                </Col>
                <Col>
                  <p
                    className="is-size-5 has-text-weight-semibold blue_color mb-2 is-uppercase completed-projects"
                    onClick={() => {
                      setIsOngoing(false);
                      setIsCompleted(true);
                    }}
                    style={{
                      borderBottom: isCompleted ? "2px solid #0d2e61" : "none",
                    }}
                  >
                    Completed
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section className="residential pt-0">
          <div className="container">
            {/* <div>
            <Row>
              {isOngoing && institutionalprojectslist.map((item, key) => {
                return (
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    <div className="property_list">
                      <div className="propertylist_image">
                        <Image src={item.src} alt="404 - Not Given" />
                      </div>

                      <div className="propertylist_content p-4">
                        <div className="pt-2">
                          <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                            {item.title}
                          </p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">{item.content}</p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Segment:&nbsp;
                            </span>
                            {item.segment}
                          </p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Client:&nbsp;
                            </span>
                            {item.client}
                          </p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Project Size:&nbsp;
                            </span>
                            {item.projectSize}
                          </p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Project Year:&nbsp;
                            </span>
                            {item.projectYear}
                          </p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Architect:&nbsp;
                            </span>
                            {item.architect}
                          </p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Str. Consultant:&nbsp;
                            </span>
                            {item.consultant}
                          </p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Scope:&nbsp;
                            </span>
                            {item.scope}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div> */}

            <div>
              <Row>
                {isOngoing &&
                  institutionalprojectslist.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "650px" }}
                        >
                          <div className="propertylist_image">
                            <Image src={item.src} alt="404 - Not Given" />
                          </div>

                          <div className="propertylist_content p-4">
                            <div className="pt-2">
                              <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                                {item.title}
                              </p>
                            </div>
                            {/* <div className="pt-3">
                            <p className="is-size-6">{item.content}</p>
                          </div>
                          <div className="pt-3">
                            <p className="is-size-6">
                              <span className="has-text-weight-semibold">
                                Segment:&nbsp;
                              </span>
                              {item.segment}
                            </p>
                          </div> */}
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Client:&nbsp;
                                </span>
                                {item.client}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Location:&nbsp;
                                </span>
                                {item.location}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Size:&nbsp;
                                </span>
                                {item.projectSize}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Description:&nbsp;
                                </span>
                                {item.projectDes}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Year:&nbsp;
                                </span>
                                {item.projectYear}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Architect:&nbsp;
                                </span>
                                {item.architect}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Str. Consultant:&nbsp;
                                </span>
                                {item.consultant}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Scope:&nbsp;
                                </span>
                                {item.scope}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>

              <Row>
                {isCompleted &&
                  institutionalprojectscompleted.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "200px" }}
                        >
                          <div className="propertylist_image">
                            <img src={item.src} alt="404 - Not Given" onClick={() => showModal(item)} />
                          </div>

                          <div className="propertylist_content p-4">
                            <div className="pt-2">
                              <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                                {item.title}
                              </p>
                            </div>
                            {/* <div className="pt-3">
                            <p className="is-size-6">{item.content}</p>
                          </div>
                          <div className="pt-3">
                            <p className="is-size-6">
                              <span className="has-text-weight-semibold">
                                Segment:&nbsp;
                              </span>
                              {item.segment}
                            </p>
                          </div> */}
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Client:&nbsp;
                                </span>
                                {item.client}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Location:&nbsp;
                                </span>
                                {item.location}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Size:&nbsp;
                                </span>
                                {item.projectSize}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">Project Description:&nbsp;</span>
                                {item.projectDes}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">Project Year:&nbsp;</span>
                                {item.projectYear}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">Architect:&nbsp;</span>
                                {item.architect}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">Str. Consultant:&nbsp;</span>
                                {item.consultant}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">Scope:&nbsp;</span>
                                {item.scope}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
              {modalDetails && (
                <Modal title={modalDetails.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} mask={true} style={{ boxShadow: "none" }} width={1000}>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {/* Check if imageGallery exists and has images */}
                    {modalDetails.imageGallery && modalDetails.imageGallery.length > 0 ? (
                      modalDetails.imageGallery.map((imgSrc, idx) => (
                        <div className="image_position">                        <Image
                          key={idx}
                          src={imgSrc}
                          alt={`Gallery Image ${idx + 1}`}
                          style={{cursor: "pointer" }}
                        />
                        </div>

                      ))
                    ) : (
                      <p>No images found</p>
                      /* Show this if imageGallery is empty */
                    )}
                  </div>
                </Modal>)}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Institutionalprojects;
