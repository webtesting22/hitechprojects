import { Modal, Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../header/header";
import { Container } from "@mui/material";

const industriallist = [
  {
    src: "Sources/images/prouctlist/residential/ongoing/dharohar.avif",
    title: "Dharohar",
    content: "...",
    segment: "Residential",
    client: "MAHICA PROCON PRIVATE LIMITED",
    location: "Vaishnovdevi Circle, Ahmedabad",
    projectSize: "16,92,477 Sq. ft.",
    projectDes: "3B+GF+22 Floor",
    projectYear: "2023-Current",
    architect: "Hiren Patel & Associates",
    consultant: "Setu Infrastructure",
    scope: "RCC Frame works, masonary & Plaster work.",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/supercity.jpeg",
    title: "SUPERCITY LUXURIA 3",
    content: "...",
    segment: "Residential",
    client: "Shrinivas Organisors Pvt ltd.",
    location: "Bhadaj, Ahmedabad",
    projectSize: "4,44,723 Sq. ft.",
    projectDes: "3B+GF+20 Floor",
    projectYear: "2024-Current",
    architect: "9th Street Architech",
    consultant: "NK shah Consultant",
    scope: "RCC Frame works, masonary & Plaster work.",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/Ikaria.png",
    title: "IKARIA - EASY LIVING",
    content: "...",
    segment: "Residential",
    client: "Alinea Properties LLP",
    location: "Adani Shantigram, Ahmedabad",
    projectSize: "2,24,000 Sq. ft.",
    projectDes: "1B+GF+13 floor",
    projectYear: "2022-Current",
    architect: "Studio ARA",
    consultant: "N K Shah Consulting LLP",
    scope: "Civil Structure (Core & Shell) and Finishing works.",
  },
  // {
  //   src: "Sources/images/prouctlist/residential/ongoing/Gharana.png",
  //   title: "Gharana",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Sheetal Infrastructure",
  //   location: "Ambli, S G Highway, Ahmedabad",
  //   projectSize: "4,93,802 Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2021-Current",
  //   architect: "ADS Architect P L",
  //   consultant: "Ducon Consultants P L",
  //   scope: "Civil works for R.C.C. Core and shell work Package which shal1 be include Excavation and backfilling, Capping beam and finishing of D wall, RCC works , Block work, Plaster.",
  // },
  // {
  //   src: "Sources/images/prouctlist/residential/ongoing/VenusPashmina.png",
  //   title: "Venus Pashmina",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Venus Lifespace Creators",
  //   location: "Rajpath Club, Bodakdev, Amedabad",
  //   projectSize: "8,89,160 Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2020-Current",
  //   architect: "HM Architects",
  //   consultant: "Setu Infrastructure",
  //   scope: "Civil works for Earthwork ( Excavation, Dressing and Back Filling) , Capping Beam on Diaphragm Wall, PCC Work, RCC Frame Structure including Shuttering & Reinforcement steel work with coupler joint,Block Masonry work with single RCC Bend,Plaster & Rendering work.",
  // },
  {
    src: "Sources/images/prouctlist/residential/ongoing/1-4.png",
    title: "ARANYAM",
    content: "...",
    segment: "Residential",
    client: "Aaryan Developers",
    location: "Shilaj, Ahmedabad",
    projectSize: "18,61,168 Sq. ft.",
    projectDes: "2B+GF+21 Floor",
    projectYear: "2023-Current",
    architect: "AAA Architects",
    consultant: "HNBS Associates",
    scope: "RCC Frame works, masonary & Plaster work.",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/2-2.jpg",
    title: "THE BELLAGIO",
    content: "...",
    segment: "Residential",
    client: "Palak Group",
    location: "S.G. Highway, Ahmedabad",
    projectSize: "1,060,422 Sq. ft.",
    projectDes: "2B+GF+22 Floor",
    projectYear: "2023-Current",
    architect: "Studio Mansi Shah",
    consultant: "HNBS Associates",
    scope: "RCC Frame works, masonary & Plaster work.",
  },
  // {
  //   // src: "Sources/images/prouctlist/residential/ongoing/1.png",
  //   title: "Secuirty Housing for RIL",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Reliance Industries Ltd.",
  //   location: "Moti Khavdi, Jamnagar",
  //   projectSize: "115,000 Sq. ft.",
  //   projectYear: "2022-Current",
  //   architect: "PVDRS",
  //   consultant: "PVDRS",
  //   scope:
  //     "Civil works for RCC Core and Shell , waterproofing, masonry, all in-building MEP, interior finishing works",
  // },
  // {
  //   src: "Sources/images/prouctlist/residential/ongoing/1.png",
  //   title: "Secuirty Housing for RIL",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Reliance Industries Ltd.",
  //   location: "Moti Khavdi, Jamnagar",
  //   projectSize: "36,338 Sq. ft.",
  //   projectYear: "2021-Current",
  //   architect: "PVDRS",
  //   consultant: "PVDRS",
  //   scope:
  //     "Civil works for RCC Core and Shell , waterproofing, masonry, all in-building MEP, interior finishing works",
  // },
  // {
  //   src: "Sources/images/prouctlist/residential/ongoing/1-2.png",
  //   title: "CELESTE@GODREJ",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Shree Siddhi Group",
  //   location: "Godrej Garden City, Ahmedabad",
  //   projectSize: "1,550,196 Sq. ft.",
  //   projectDes: "14 Floors, 55 Meters",
  //   projectYear: "2022-Current",
  //   architect: "Placekinesis Associates",
  //   consultant: "Japan Shah Consulting Engineers",
  //   scope: "RCC Framework, Masonry ,Plaster.",
  // },
  // {
  //   src: "Sources/images/prouctlist/residential/ongoing/1-3.png",
  //   title: "IKARIA - EASY LIVING",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Alinea Properties LLP",
  //   location: "Adani Shantigram",
  //   projectSize: "2,24,000 Sq. ft.",
  //   projectDes: "13 Floors, 45 Meters",
  //   projectYear: "2022-Current",
  //   architect: "Studio ARA, Ahmedabad",
  //   consultant: "N K Shah Consulting LLP",
  //   scope: "Structural Work, RCC Framework, Finishing Work",
  // },

  
  
  
  

];
const industrialcompleted = [
  {
    src: "Sources/images/prouctlist/residential/ongoing/Oeuvre.png",
    title: "Oeuvre -2",
    content: "...",
    segment: "Residential",
    client: "Madhav Associates",
    location: "Rajpath Club, Bodakdev, Amedabad",
    projectSize: "6,05,957 Sq. ft.",
    projectDes: "22 Floors",
    projectYear: "2021",
    architect: "HM Architects",
    consultant: "Setu Infrastructure",
    scope: "Civil Construction work of RCC Frame, Block & Plaster work.",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/2.png",
    title: "GHARANA",
    content: "5 and 6 BHK Sky Villas of 22 floored structure.",
    segment: "Residential",
    client: "Sheetal Infrastructure",
    location: "Ambli, Ahmedabad",
    projectSize: "5,00,000 Sqft.",
    projectDes: "21 Floors, 75 Meters",
    projectYear: "2024",
    architect: "ADS Architect",
    consultant: "Ducon Consultants",
    scope:
      "Civil Construction work of RCC Frame, Block & Plaster work.",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/4.png",
    title: "Venush Pashmina",
    content: "4 and 5 BHK regal Appartments.",
    segment: "Residential",
    client: "Sarthi Prospace LLP- Venus Lifespace Creators",
    location: "Bodakdev, Amedabad",
    projectSize: "8,89,160 Sq. ft.",
    projectDes: "21 Floors, 70 Meters",
    projectYear: "2024",
    architect: "H M Architects",
    consultant: "Setu Infrastructure",
    scope:
      "Civil Construction work of RCC Frame, Block & Plaster work.",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/sunatmosphere.png",
    title: "SUN ATMOSPHERE",
    content: "Sun Atmosphere are 2 to 3 BHK Appartments And Retail at Shela.",
    segment: "Residential",
    client: "Sun Realty",
    location: "Shela, Ahmedabad",
    projectSize: "1,25,000 Sq. ft.",
    projectDes: "14 Floors, 50 Meters",
    projectYear: "2024",
    architect: "H M Architects",
    consultant: "Setu Infrastructure",
    scope:
      "Civil Construction work of RCC Frame, Block Masonry Plaster work, MEPF work, Waterproofing and Finishing Works",
  },

  {
    src: "Sources/images/prouctlist/residential/completed/SecurityStaff/Picture1.jpg",
    title: "SECURITY STAFF HOUSING",
    imageGallery: [
      "Sources/images/prouctlist/residential/completed/12.jpeg",
      "Sources/images/prouctlist/residential/completed/SecurityStaff/Picture2.jpg"
    ],
    content:
      "Security Staff Housing Complex project at Jamnagar-LC 01, LC 04 and LC 10",
    segment: "Residential",
    client: "Reliance Industries Ltd",
    location: "Jamnagar,Gujarat",
    projectSize: "2,81,000 Sq. ft.",
    projectDes: "2 Floors, 12 Meters",
    projectYear: "2023",
    architect: "PVDRS, Ahmedabad",
    consultant: "PVDRS, Ahmedabad",
    scope:
      "Structural Work, RCC Framework, Masonry, Plaster, MEP, Finishing Work",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/The Water Fall/The waterfall- Main.jpg",
    title: "THE WATERFALL",
    imageGallery: [
      "/Sources/images/prouctlist/residential/completed/The Water Fall/The waterfall- Main.jpg",
      "/Sources/images/prouctlist/residential/completed/The Water Fall/The waterfall- 1.jpg",
    ],
    content:
      "The waterfall project by Armaan Infrastucture is a high-end luxurious apartment scheme constructed at Ambli Road",
    segment: "Residential",
    client: "Armaan Developer",
    location: "Ambli, Ahmedabad",
    projectSize: "4,55,000 Sq. ft.",
    projectDes: "11 Floors, 45 Meters",
    projectYear: "2022",
    architect: "Scarlett Design",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "Structural Work, RCC Framework, MEP, Finishing Work",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/6.png",
    title: "ALPHABET A",
    imageGallery: [
      "/Sources/images/prouctlist/residential/completed/Alphabet/Picture 3.jfif",
      "/Sources/images/prouctlist/residential/completed/Alphabet/Picture 5.gif",
      "/Sources/images/prouctlist/residential/completed/Alphabet/Picture 6.webp",
    ],
    content: "4 BHK, 5 BHK class-apart lifestyle apartments",
    segment: "Residential",
    client: "Jaydeep Buildcon LLP",
    location: "Bhat, Gandhinagar",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "9 Floors, 33 Meters",
    projectYear: "2022",
    architect: "9th Street Architects",
    consultant: "Bhoomi Consultants",
    scope: "Earthwork, Structural Work, RCC Framework, Masonry, Plaster",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/1.png",
    title: "ARVIND AAVISHKAR",
    imageGallery: [
      "/Sources/images//prouctlist/residential/completed/Arvind Aavishkar/Arvind-5.jpg",
      "/Sources/images/prouctlist/residential/completed/Arvind Aavishkar/Arvind-3.jpg",
      "/Sources/images/prouctlist/residential/completed/Arvind Aavishkar/Arvind-6.jpg",
      "/Sources/images/prouctlist/residential/completed/Arvind Aavishkar/Arvind-1.jpg"
    ],
    content:
      "Arvind Aavishkaar is a residential development constructed by Arvind Smartspaces.",
    client: "Arvind Smartspaces",
    location: "Naroda, Ahmedabad",
    projectSize: "6,10,000 Sqft.",
    projectDes: "14 Floors, 44 Meters",
    projectYear: "2022",
    architect: "Jagrut And Partners LLP",
    consultant: "Alpha consultancy services",
    scope: "Structural Work, RCC Framework, MEP, Finishing Work",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/SUN SKY PARK & CENTRAL PLACE/Edits/01-min.jpg",
    title: "SUN SKY PARK",
    imageGallery: [
      "Sources/images/prouctlist/residential/completed/SUN SKY PARK & CENTRAL PLACE/Edits/01-min.jpg",
      // "/Sources/images/NewImages/From Raj Sir/Sun Sky Park/Sun Sky Park.jpg",
      "/Sources/images/prouctlist/residential/completed/SUN SKY PARK & CENTRAL PLACE/Main Photos/Sun Sky Park - 8-min.jpg",
      "/Sources/images/prouctlist/residential/completed/SUN SKY PARK & CENTRAL PLACE/Main Photos/Sun Sky Park - 7-min.jpg",
      "/Sources/images/prouctlist/residential/completed/SUN SKY PARK & CENTRAL PLACE/Edits 2/23-min.jpg",
      "/Sources/images/prouctlist/residential/completed/SUN SKY PARK & CENTRAL PLACE/Edits 2/24-min.jpg",
      "/Sources/images/prouctlist/residential/completed/SUN SKY PARK & CENTRAL PLACE/Edits 2/32-min.jpg",
      "/Sources/images/prouctlist/residential/completed/SUN SKY PARK & CENTRAL PLACE/Edits 2/81-min.jpg"
    ],
    content:
      "Welcome to a new perspective to city living in Ahmedabad through Community, Central Park, Club, Homes, Penthouse etc.",
    client: "Shilp Developers - Sun Builders",
    location: "Ambli, Ahmedabad",
    projectSize: " 8,41,464 Sq. ft.",
    projectDes: "22 Floors, 70 Meters",
    projectYear: "2020",
    architect: "Placekinesis Associates",
    consultant: "Setu Infrastructure",
    scope: "RCC Framework, Masonry ,Plaster, MEP, Finishing Work",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/3.png",
    title: "INDRAPRASTH GULMOHAR",
    imageGallery: [
      "/Sources/images/prouctlist/residential/completed/Indraprastha Gulmohar/Picture2.png",
      "/Sources/images/prouctlist/residential/completed/Indraprastha Gulmohar/Indraprastha Gulmohar - Main.png",
    ],
    content:
      "Indraprasth Gulmohar is a name that will make the difference between elite and everyone else.",
    client: "Deep Group",
    location: "Vastrapur, Ahmedabad",
    projectSize: "5,00,000 Sq. ft.",
    projectDes: "14 Floors, 45 Meters",
    projectYear: "2019",
    architect: "Hiren Patel Architects",
    consultant: "Setu Infrastructure",
    scope: "RCC Framework, Masonry, Plaster",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/4.png",
    title: "THE BANYAN",
    imageGallery: [
      "/Sources/images/prouctlist/residential/completed/The Banyan/The Banyan - Main.jpg",
      "/Sources/images/prouctlist/residential/completed/The Banyan/The Banyan - 1.jpg",
      "/Sources/images/prouctlist/residential/completed/The Banyan/The Banyan - 2.jpg"
    ],
    content:
      "For the first time in Gujarat, Quintessentially, the world’s leading luxury lifestyle concierge service is now at ‘The Banyan’.",
    client: "Suryam Group",
    location: "BodakDev, Ahmedabad",
    projectSize: "2,10,000 Sq. ft.",
    projectDes: "12 Floors, 45 Meters",
    projectYear: "2018",
    architect: "Design Module",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry , Plaster, Finishing Work",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/One 49/One 49 - Main.jpg",
    title: "ONE49",
    imageGallery: [
      "/Sources/images/prouctlist/residential/completed/One 49/One 49 - Main.jpg",
      "/Sources/images/prouctlist/residential/completed/One 49/One 49 - 1.jpg",
      "/Sources/images/prouctlist/residential/completed/One 49/One 49 - 2.png",
    ],
    content:
      "ONE49, an iconic high-rise residential development is one of the most sought after neighborhoods in Ahmedabad today.",
    client: "Amaya Properties Group",
    location: "Ambli, Ahmedabad",
    projectSize: "4,00,000 Sq. ft.",
    projectDes: "19 Floors, 70 Meters",
    projectYear: "2018",
    architect: "ONG AND ONGS",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry , Plaster, Finishing Work",
  },
  {
    src: "/Sources/images/prouctlist/residential/completed/SUN EVOQ/IMG_20170527_161857-min.jpg",
    title: "SUN EVOQ",
    imageGallery: [
      "/Sources/images/prouctlist/residential/completed/SUN EVOQ/1518241082__16R1706-min.jpg",
      "/Sources/images/prouctlist/residential/completed/SUN EVOQ/Sun Evoq - 6-min.JPG",
      "/Sources/images/prouctlist/residential/completed/SUN EVOQ/DSC_3950-min.JPG",
      "/Sources/images/prouctlist/residential/completed/SUN EVOQ/DSC_3963-min.JPG",
      "/Sources/images/prouctlist/residential/completed/SUN EVOQ/DSC_3972-min.JPG",
      "/Sources/images/prouctlist/residential/completed/SUN EVOQ/DSC_4086-min.JPG",

    ],
    content:
      "The project offers residential units with top class specifications that meet the expectations of the lifestyle of the urban.",
    client: "Shilp Developers",
    location: "Bodakdev, Ahmedabad",
    projectSize: "1,25,000 Sq. ft.",
    projectDes: "13 Floors, 45 Meters",
    projectYear: "2017",
    architect: "MODO Designs",
    consultant: "Umang Patel",
    scope: "RCC Framework, Masonry, Plaster, MEP, Finishing Work",
  },
  {
    src: "/Sources/images/prouctlist/residential/completed/yash arian/003.jpg",
    title: "YASH ARIAN",
    imageGallery: [
      "/Sources/images/prouctlist/residential/completed/yash arian/002.jpg",
      "/Sources/images/prouctlist/residential/completed/yash arian/003.jpg",
      "/Sources/images/prouctlist/residential/completed/yash arian/1.jpg"
    ],
    content:
      "Yash Arian is a project with several modern amenities.It comes with a total of 204 spacious and luxurious apartments.",
    client: "Yash Arian Infra LLP",
    location: "Memnagar, Ahmedabad",
    projectSize: "4,50,000 Sq. ft.",
    projectDes: "14 Floors, 42 Meters",
    projectYear: "2017",
    architect: "Design Studio",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/8.png",
    title: "SLUM REHABILITATION",
    content:
      "A 2,10,000 Sqft project to help nearly 1200 families living in the slums of Amraiwadi with a one-BHK flat with good drainage and supply of drinking water.",
    client: "H N Safal",
    location: "Amraiwadi, Ahmedabad",
    projectSize: "2,10,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2015",
    architect: "Design Module",
    consultant: "Design Module",
    scope: "Structural Work, RCC Framework, MEP, Finishing Work",
  },
  {
    src: "/Sources/images/prouctlist/residential/completed/Applewoods/Main Photos/Applewoods-Main.jpg",
    title: "APPLEWOODS",
    imageGallery: [
      "/Sources/images/prouctlist/residential/completed/Applewoods/Main Photos/Applewoods-Main.jpg",
      "/Sources/images/prouctlist/residential/completed/Applewoods/Main Photos/Orchid Greenfield - Applewoods -1.jpg",
      "/Sources/images/prouctlist/residential/completed/Applewoods/Main Photos/Orchid Greenfield - Applewoods -2.jpg",
      "/Sources/images/prouctlist/residential/completed/Applewoods/Main Photos/Orchid Greenfield - Applewoods -3.jpg",
      "/Sources/images/prouctlist/residential/completed/Applewoods/Main Photos/Orchid Greenfield - Applewoods -4.jpg",
      "/Sources/images/prouctlist/residential/completed/Applewoods/Orchid Greenfield-Applewoods -1.jfif"
    ],
    content:
      "The Applewoods township consists of 400 luxurious bungalows accommodated in a plush green environment occupied with open garden spaces, parks and lakes.",
    client: "Goyal Safal Developers",
    location: "Shela, Ahmedabad",
    projectSize: "9,00,000 Sq. ft.",
    projectDes: "16 Floors, 60 Meters",
    projectYear: "2013",
    architect: "Apurva Amin",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/10.png",
    title: "SHALVIK SHUKAN",
    content:
      "Shalvik Shukan by Aakar Developers offers a total of 132 well-planned and world class residential units with top line specifications.",
    client: "Aakar Developers",
    location: "Vavol, Gandhinagar",
    projectSize: "3,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2013",
    architect: "Neha Consultants",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Structural Work",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/11.png",
    title: "SHALVIK HOMES",
    imageGallery: [
      "/Sources/images/prouctlist/residential/completed/shalvik homes/1.webp",
      "/Sources/images/prouctlist/residential/completed/shalvik homes/2.jpg"
    ],
    content:
      "Shalvik Homes by Aakar Developers offers 53 residential bungalows with common plots and play area.",
    client: "Aakar Developers",
    location: "Vavol, Gandhinagar",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2010",
    architect: "Consultants",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Structural Work",
  },
];

const Residential = () => {
  const [isOngoing, setIsOngoing] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);
  const showModal = (item) => {
    setModalDetails(item);
    setIsModalOpen(true);
    // console.log("open")

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
        src="Sources/images/prouctlist/residential/1-1-1.JPG"
        alt="404 -Not Given"
        className="about_img"
      />
      <div className="projects-bg">
        <Header />
        <section className="residential py-5">
          <div className="container">
            <p className="is-size-1 has-text-weight-semibold has-text-centered blue_color is-uppercase">
              Residential Projects
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
            <div>
              <Row>
                {isOngoing &&
                  industriallist.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24} key={key}>
                        <div
                          className="property_list"
                          style={{ minHeight: "200px" }}
                        >
                          <div className="propertylist_image">
                            <Image src={item.src} alt="404 - Not Given" preview={{
                              getContainer: '#root', // This ensures the image preview is rendered within the root element
                            }} />
                          </div>

                          <div className="propertylist_content p-4">
                            <div className="pt-2">
                              <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                                {item.title}
                              </p>
                            </div>
                            {/* <div className="pt-3">
                          <p className="is-size-6">{item.content}</p>
                        </div> */}
                            {/* <div className="pt-3">
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
            </div>
            <div>
              <Row>
                {isCompleted &&
                  industrialcompleted.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24} key={key}>
                        <div
                          className="property_list"
                          style={{ minHeight: "200px" }}
                        >
                          <div className="propertylist_image">
                            <img src={item.src} alt="404 - Not Given" onClick={() => showModal(item)} />


                          </div>

                          <div className="propertylist_content p-4">
                            <div className="pt-2">
                              <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold text-uppercase">
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
                              Residential
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
              <div >
                {modalDetails && (
                  <Modal getContainer="#root" title={modalDetails.title} open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel} mask={true} style={{ boxShadow: "none" }} width={1000} className="CompletedModal">
                    <Row>
                      {/* Check if imageGallery exists and has images */}
                      {modalDetails.imageGallery && modalDetails.imageGallery.length > 0 ? (
                        modalDetails.imageGallery.map((imgSrc, idx) => (
                          <Col lg={8} md={12}>
                            <div className="image_position">

                              <Image
                                key={idx}
                                src={imgSrc}
                                alt={`Gallery Image ${idx + 1}`}
                                style={{ cursor: "pointer", }}
                                preview={{
                                  getContainer: '#root',
                                }}
                              />
                            </div>
                          </Col>
                        ))
                      ) : (
                        <Col lg={24} style={{ textAlign: 'center', padding: '20px' }}>
                          <p>No Images Found</p>
                        </Col>
                        /* Show this if imageGallery is empty */
                      )}
                    </Row>
                  </Modal>)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Residential;
