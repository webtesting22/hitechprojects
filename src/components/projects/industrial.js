import { Col, Image, Row, Modal } from "antd";
import React, { useState } from "react";
import Header from "../header/header";

const industriallist = [

  {
    src: "Sources/images/prouctlist/industrial/ongoing/KHS.jpeg",
    title: "KHS MACHINERY EXPANSION WORKS",
    segment: "Industrial",
    client: "KHS Machinery PVT. LTD.",
    location: "Near Hirapur cross road, vatva-mahemdavad highway ",
    architect: "S3M Design Consultants LLP",
    consultant: "S3M Design Consultants LLP",
    projectSize: "-",
    projectDes: "-",
    projectYear: "2024 - Current",
    scope: "Civil work, with all Finishing include Plumbing, Flooring, Painting, Door & Window & Infrastructure development work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/ongoing/Asset1.png",
    title: "CONSTRUCTION OF 66kV SS AT KATARGAM",
    segment: "Industrial",
    client: "Torrent Power Ltd",
    location: "Katargam, Surat",
    architect: "Munjal Bhatt Architects",
    consultant: "S3M Design Consultants LLP",
    projectSize: "69,481  Sq. ft.",
    projectDes: "30 Meters",
    projectYear: "2022-Current",
    scope: "Civil, Plumbing and Finishing works for Substation",
  },
  {
    src: "/Sources/images/prouctlist/industrial/ongoing/HarshaEngine.png",
    title: "Harsha Enginners Manufactuing Plant",
    segment: "Industrial",
    client: "Harsha Engineers Advantek Limited.",
    location: "Moraiya, Ahmedabad",
    projectSize:
      "1,00,000 sq. ft.",
    projectDes: "-",
    projectYear: "2024 - Current ",
    architect: "Shah & Talati",
    consultant: "Shah & Talati",
    scope: "Civil work, with all Finishing include Plumbing, Flooring, Painting, Door & Window & Infrastructure development work.",
  },
  // {
  //   src: "",
  //   title: "Construction of Packaging Unit for Urmin Products",
  //   segment: "Industrial",
  //   client: "Urmin Product Pvt. Ltd.",
  //   location: "Surat",
  //   projectSize:
  //     "75,000 Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2024-Current",
  //   architect: "Taknik Consultants",
  //   consultant: "Taknik Consultants",
  //   scope: "Civil work, with all Finishing include Plumbing, Flooring, Painting, Door & Window & Infrastructure development work.",
  // },
  // {
  //   src: "",
  //   title: "New VCB and GIS Building for 66 kV Substation ",
  //   segment: "Industrial",

  //   client: "Torrent Power Ltd",
  //   location: "Surat",
  //   projectSize:
  //     "-",
  //   projectDes: "-",
  //   projectYear: "2024-Current",
  //   architect: "-",
  //   consultant: "-",
  //   scope: "Civil and Structural works for Construction of New VCB and GIS Building for 66 kV Substation ",
  // },
  // {
  //   src: "",
  //   title: "Civil and Structural works for Construction of VCB and GIS Building at 66 kV",
  //   segment: "Industrial",
  //   client: "Torrent Power Ltd",
  //   location: "Surat",
  //   architect: "",
  //   consultant: "",
  //   projectSize: "- Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2022-Current",
  //   scope: "Civil and Structural works for Construction of New VCB and GIS Building for 66 kV Substation ",
  // },

  // {
  //   src: "Sources/images/prouctlist/industrial/ongoing/1-2.jpeg",
  //   title: "TORRENT POWER “B” STATION",
  //   segment: "Industrial",
  //   client: "Torrent Power Ltd",
  //   location: "Katargam, Surat",
  //   architect: "Munjal Bhatt Architects",
  //   consultant: "S3M Design Consultants LLP",
  //   projectSize: "111,000  Sq. ft.",
  //   projectDes: "30 Meters",
  //   projectYear: "2022-Current",
  //   scope: "RCC Framework, Plumbing, Finishing Work.",
  // },
];
const industrialcompleted = [
  {
    src: "Sources/images/prouctlist/industrial/ongoing/1-2.jpeg",
    title: "TORRENT B STATION ",
    imageGallery: [
      "/Sources/images/prouctlist/industrial/completed/Torrent Katargam/Main Photos/Torrent Katargam - Main-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Katargam/Main Photos/Picture2-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Katargam/Main Photos/Picture3-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Katargam/Main Photos/Picture4-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Katargam/Main Photos/Picture5-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Katargam/Main Photos/Picture6-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Katargam/Main Photos/Picture7-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Katargam/Main Photos/Picture8-min.png",
      "/Sources/images/prouctlist/industrial/completed/Torrent Katargam/Main Photos/Picture9-min.jpg",

    ],
    segment: "Industrial",
    client: "Torrent Power Ltd.",
    location: "Surat",
    architect: "Munjal Bhatt Architects",
    consultant: "S3M Design Consultants LLP",
    projectSize: "1,11,000  Sq. ft.",
    projectDes: "30 Meters",
    projectYear: "2022",
    scope: "RCC works, Masonary, Plaster works, Plumbing, Finishing work, Structural Steel work & Infrastructure Development. ",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/17.jpg",
    title: "Torrent E Station",
    imageGallery: [
      "/Sources/images/prouctlist/industrial/completed/Torrent Varachha/Torrent Varacha - Main.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Varachha/Torrent Varacha - 1.jpg"
    ],
    content:
      "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center, TSD Workshop, Plug point and other applied work at 'E' station premises, Varachha Surat.",
    client: "Torrent Power Ltd",
    location: "Surat",
    projectSize: "50,000 Sq. ft.",
    projectDes: "25.44 Meters",
    projectYear: "2022",
    architect: "Munjal Bhatt",
    consultant: "S3M Design Consultants LLP",
    scope: "RCC works, Masonary, Plaster works, Plumbing, Finishing work, Structural Steel work & Infrastructure Development. ",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/4.png",
    title: "Torrent PSC Building",
    imageGallery: [
      "/Sources/images/prouctlist/industrial/completed/Torrent Naranpura/Picture1.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Naranpura/Picture2.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Naranpura/Picture3.jpg"
    ],
    content:
      "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its HT PSC building and meter Lab building at Naranpura, Ahmedabad.",
    client: "Torrent Power Ltd.",
    location: "Naranpura,Ahmedabad",
    projectSize: "1,70,000 Sq. ft.",
    projectDes: "45 Meters",

    projectYear: "2022",
    architect: "Munjal Bhatt",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "RCC works, Masonary, Plaster works, Plumbing, Finishing work, Structural Steel work & Infrastructure Development. ",
  },
  {
    src: "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Main Photos/Torrent Odhav - Main.jpg",
    title: "Torrent PSC Building",
    imageGallery: [
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Main Photos/Torrent Odhav - Main.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Main Photos/Torrent Odhav - 2.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Main Photos/Torrent Odhav - 1.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0008.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0009.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0010.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0011.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0013.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0016.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0017.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0018.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0022.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0023.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0024.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0025.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0030.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0032.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0035.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0040.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0043.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Odhav/Nisarg 05.04.2022/IMG-20220405-WA0044.jpg",

    ],
    content:
      "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its PSC building And Plug point building at Odhav.",
    client: "Torrent Power Ltd.",
    location: "Odhav, Ahmedabad",
    projectSize: "1,10,000 Sq. ft.",
    projectDes: "25.44 Meters",
    projectYear: "2022",
    architect: "Munjal Bhatt",
    consultant: " Ducon Consultant Pvt Ltd",
    scope: "RCC works, Masonary, Plaster works, Plumbing, Finishing work, Structural Steel work & Infrastructure Development. ",
  },

  {
    src: "Sources/images/prouctlist/industrial/completed/1.png",
    title: "TORRENT SUBSTATION",
    imageGallery: [
      "/Sources/images/prouctlist/industrial/completed/Torrent Dholera/Tpda Photos/Main Photos/Torrent Dholera - Main.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Dholera/Tpda Photos/Main Photos/Torrent Dholera - 1.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Dholera/Tpda Photos/IMG_0319-min.JPG",
      "/Sources/images/prouctlist/industrial/completed/Torrent Dholera/Tpda Photos/IMG_0322-min.JPG",
      "/Sources/images/prouctlist/industrial/completed/Torrent Dholera/Tpda Photos/IMG_0330-min.JPG",
      "/Sources/images/prouctlist/industrial/completed/Torrent Dholera/Tpda Photos/IMG20220113163710-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Dholera/Tpda Photos/IMG20220119171701-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Torrent Dholera/Tpda Photos/IMG20220129154549-min.jpg"
    ],
    content:
      "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its 400KV and 200KV GIS building at Dholera.",
    client: "Torrent Power Ltd",
    location: "Dholera, Gujarat",
    segment: "Industrial",
    projectSize: "75,000 Sq. ft.",
    projectDes: "15 Meters",
    projectYear: "2022",
    architect: "Munjal Bhatt Architects",
    consultant: "TCS Consultant",
    scope: "Construction Civil & Finishing work for 400kV & 220kV GIS Building  with Infrastructure Work.",
  },
  {
    src: "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_140520-min.jpg",

    title: "FINECURE PHARMACEUTICALS LTD",
    imageGallery: [
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_140520-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_140604-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_140710-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_140718-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_140739-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_140745-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_140851-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_140932-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_103108-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_103116-min.jpg",
      "/Sources/images/prouctlist/industrial/completed/Finecure Pharma/IMG_20220109_103127-min.jpg"
    ],
    content:
      "Finecure Pharmaceuticals Limited is leading manufacturers and marketers of Pharmaceutical formulations and Nutraceuticals and its coming up with its Pharma building at Arvind Mega Park, Ahmedabad.",
    segment: "Industrial",
    client: "Finecure Pharmaceuticals Ltd.",
    location: "Arvind Megapark, Changodar",
    projectSize: "35,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2019",
    architect: "N.K. Shah Consulting Engineers LLP",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope:
      "Construction Civil & Finishing work for Production unit with Infrastructure Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/Picture4.jpg",
    title: "HARSHA ENGINEERING",
    content:
      "Harsha Engineering opened its new plant of 50,000 Sqft designed by VMS Engineering.",
    segment: "Industrial",
    client: "Harsha Engineers Advantek Limited.",
    location: "Ahmedabad",
    projectSize: " 50,000 Sq. ft.",
    projectDes: "12 Meters",
    projectYear: "2019",
    architect: "VMS Engineering & Design Services Pvt. Ltd.",
    consultant: "VMS Engineering & Design Services Pvt. Ltd.",
    scope: "Construction Civil & Finishing work for TRB Building with Infrastructure Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/4.png",
    title: "HIGH TEMP FURNACES",
    content:
      "HIGHTEMP, a leading manufacturer of furnaces opens its plant of 1,00,000 Sq ft in Sanand, Gujarat designed by VBT Consortium.",
    segment: "Furnace Plant",
    client: "HighTemp Furnaces Ltd.",
    location: "Ahmedabad",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2018",
    architect: "VBT Consortium",
    consultant: "Base Engineering Services",
    scope:
      "Construction Civil & Finishing work for Factory Building with Infrastructure Work & PEB work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/5.png",
    title: "TECHNICO INDUSTRIES",
    imageGallery: [
      "Sources/images/prouctlist/industrial/completed/Technico/Picture10.png"
    ],
    content:
      "Technico, a class-leading manufacturer of high-quality automotive component is opening a new plant of 1,00,000 Sq ft in Vanod.",
    segment: "Automotive",
    client: "Technico Industries Ltd.",
    location: "Surendranagar",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2018",
    architect: "S3M Design Consultants LLP",
    consultant: "S3M Design Consultants LLP",
    scope:
      "Construction Civil & Finishing work for Manufacturing Unit with Infrastructure Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/6.png",
    title: "UNICHARM INDIA PVT LTD.",
    content:
      "Sanitary products supplier Unicharm is opening its third disposable diaper plant in Sanand.",
    segment: "Disposable Diaper Plant",
    client: "Kajima India Pvt. Ltd.",
    location: "Ahmedabad",
    projectSize: "7,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2018",
    architect: "Kajima India Pvt. Ltd.",
    consultant: "Kajima India Pvt. Ltd.",
    scope:
      "Construction Civil & Finishing work for Unicharm Factory Unit with Infrastructure Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/7.png",
    title: "JBM AUTO SYSTEM",
    imageGallery: [
      "/Sources/images/prouctlist/industrial/completed/jbm/4.jpeg",
      "/Sources/images/prouctlist/industrial/completed/jbm/1.jpeg",
      "/Sources/images/prouctlist/industrial/completed/jbm/2.jpg",
      "/Sources/images/prouctlist/industrial/completed/jbm/3.jpg"
    ],
    content:
      "Plant designed for the Press Shop And Weld Shop, equipped with presses up to 1200 ton capacity and a total built up area of 7,800 m2.",
    segment: "Automotive",
    client: "JBM Auto System Pvt. Ltd.",
    location: "Sanand, Ahmedabad",
    projectSize: "2,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2015",
    architect: "VMS Engineering & Design Services Pvt. Ltd.",
    consultant: "VMS Engineering & Design Services Pvt. Ltd.",
    scope:
      "Construction Civil & Finishing work for Factory Unit & Site development Work.",
  },
  // {
  //   src: "Sources/images/prouctlist/industrial/completed/7.png",
  //   title: " Ford Vendor Park",
  //   content:
  //     "Plant designed for the Press Shop And Weld Shop, equipped with presses up to 1200 ton capacity and a total built up area of 7,800 m2.",
  //   segment: "Automotive",
  //   client: "JBM Auto System Pvt. Ltd.",
  //   location: "Sanand, Ahmedabad",
  //   projectSize: "2,00,000 Sqft.",
  //   projectYear: "2015",
  //   architect: "VMS Engineering Consultant",
  //   consultant: "VMS Engineering Consultant",
  //   scope: "Civil, Structural, Finishing, Services and Infrastructural Work",
  // },
  {
    src: "Sources/images/prouctlist/industrial/completed/8.png",
    title: "URMIN PRODUCTS PVT LTD.",
    imageGallery: [
      "Sources/images/prouctlist/industrial/completed/urmin-sari/Picture8.jpg",
    ],
    content:
      "Urmin Sari has a state-of-the-art facility spread over a 10,000 sq. m. area to cater to the production, warehousing and cold storage needs at Changodar.",
    segment: "Food Industry",
    client: "Urmin Product Pvt. Ltd.",
    location: "Sari, Ahmedabad",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2017",
    architect: "Taknik Consultants",
    consultant: "Taknik Consultants",
    scope:
      "Construction Civil & Finishing work for Warehouse Building with Infrastructure Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/urmin-bavla/Picture9.jpg",
    title: "URMIN PRODUCTS PVT LTD.",
    imageGallery: [
      "Sources/images/prouctlist/industrial/completed/9.png",
    ],
    content:
      "Urmin Bavla is spread across 80000 sqft area to set up its production facility in the city.",
    segment: "Food Industry",
    client: "Urmin Product Pvt. Ltd..",
    location: "Bavla, Ahmedabad",
    projectSize: "80,000 Sq. ft.",
    projectDes: "1 Floor",
    projectYear: "2016",
    architect: "Taknik Consultants, Ahmedabad",
    consultant: "Taknik Consultants",
    scope:
      "Construction Civil & Finishing work for Factory Building with Infrastructure Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/Nirmiti/Picture11.jpg",
    title: "NIRMITI PRECISION",
    imageGallery: [
      "Sources/images/prouctlist/industrial/completed/10.png",
    ],
    content:
      "Nirmiti precision is one of the leading engineering and manufacturing companies of of metal nut, metal bolt and metal bush which opened its factory in Sanand.",
    segment: "Automotive",
    client: "Nirmiti Precision Pvt Ltd.",
    location: "Sanand, Ahmedabad",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2016",
    architect: " L. J. Purani Architect",
    consultant: " L. J. Purani Architect",
    scope:
      "Construction Civil & Finishing work for Plant Building with Infrastructure Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/11.png",
    title: "RELIABLE AUTO TECH",
    imageGallery: [
      "Sources/images/prouctlist/industrial/completed/Reliable/Picture12.png",
    ],
    content:
      "Reliable established a new manufacturing setup in Sanand GIDC catering to the automobile OEMs in the western region.",
    segment: "Automotive",
    client: "Reliable Autotech Pvt Ltd.",
    location: "Sanand, Ahmedabad",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2016",
    architect: "M. R. Fegde And Associate",
    consultant: "Chhaya Consulting Engineers",
    scope:
      "Construction Civil & Finishing work for Factory Unit and Anciliary Buildings with Infrastructure Work.",
  },

  {
    src: "Sources/images/prouctlist/industrial/completed/13.png",
    title: "TATA NANO WELD SHOP",
    content:
      "A high level of economy was achieved in the development of this project and was benchmarked by TATA Motors for similar projects in future.",
    segment: "Automotive",
    client: "TATA Motors",
    projectSize: "2,50,000 Sq. ft.",
    projectDes: "-",
    location: "Sanand, Ahmedabad",
    projectYear: "2008",
    architect: "Tata Motors",
    consultant: "Tata Motors",
    scope:
      "Construction Civil & Finishing work for Weld Shop Unit & Site development Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/14.png",
    title: "JEKSON HYDRAULICS",
    content:
      "Jekson Hydraulics, manufacturer and Exporter of Hydraulic Presses, opened its new plant of 70,000 Sqft in Changodar, Ahmedabad.",
    segment: "Hydraulic Plant",
    client: "Jekson Hydraulics",
    location: "Changodar, Ahmedabad",
    projectSize: "70,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2009",
    architect: "N.K. Shah Consulting Engineers LLP",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope:
      "Construction Civil & Finishing work for Plant Building & Site development Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/15.png",
    title: "HARSHA ENGINEERS",
    content:
      "Harsha Engineers, a global solution provider of Bearing Cages opened its new plant of 22,000 Sqft in 2008 designed by SMPS Consultants.",
    segment: " Mechanical Plant",
    client: "Harsha Engineers Advantek Limited.",
    location: "Sanand, Ahmedabad",
    projectSize: "22,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2008",
    architect: "SMPS, Ahmedababad",
    consultant: "SMPS, Ahmedababad",
    scope:
      "Construction Civil & Finishing work for TRB Building with Infrastructure Work.",
  },
  {
    src: "Sources/images/prouctlist/industrial/completed/16.png",
    title: "SAFEXPRESS WAREHOUSE",
    imageGallery: [
      "/Sources/images/prouctlist/industrial/completed/safeexpress/3.jpeg",
      "/Sources/images/prouctlist/industrial/completed/safeexpress/2.jpeg",
      "/Sources/images/prouctlist/industrial/completed/safeexpress/1.webp"
    ],
    content:
      "Safexpress,a Pan India supply chain services provider opened its Warehouse in 2008 at Changodar measuring 75,000 Sqft designed by CivTech Consultants.",
    segment: "Logistics Warehouse Plant",
    client: "Safexpress Warehouse",
    location: "Changodar, Ahmedabad",
    projectDes: "-",
    projectSize: "75,000 Sq. ft.",
    projectYear: "2009",
    architect: "CivTech Consultants",
    consultant: "CivTech Consultants",
    scope:
      "Construction Civil & Finishing work for Ware House & Site development Work.",
  },
  //  {
  //   src: "Sources/images/prouctlist/commercial/ongoing/2.png",
  //   title: "TORRENT POWER “B” STATION",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center (PSC), Customer service (CS), Plug point and other applied work at 'B' station premises, Katargam Surat.",
  //   client: "Torrent Power Ltd",
  //   projectSize: "1,11,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: "S3M Design Consultants LLP",
  //   scope: "Civil Structure Work",
  // },

  // {
  //   src: "Sources/images/prouctlist/industrial/ongoing/1-2.jpeg",
  //   title: "TORRENT POWER 66 KV SS",
  //   segment: "Industrial",
  //   client: "Torrent Power Ltd",
  //   location: "Katargam, Surat",
  //   architect: "SQFT",
  //   consultant: "S3M Design Consultants LLP",
  //   projectSize: "160,000  Sqft.",
  //   projectYear: "2022-Current",
  //   scope:
  //     "Plug Point, PSC and VCB building, outdoor store facility including civil and finishing work.",
  // },
];

const Industrial = () => {
  const [isOngoing, setIsOngoing] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [expandedOngoing, setExpandedOngoing] = useState(null);
  // State for completed projects
  const [expandedCompleted, setExpandedCompleted] = useState(null);
  const toggleOngoing = (key) => {
    if (expandedOngoing === key) {
      setExpandedOngoing(null);
    } else {
      setExpandedOngoing(key);
    }
  };

  // Toggle function for completed projects
  const toggleCompleted = (key) => {
    if (expandedCompleted === key) {
      setExpandedCompleted(null);
    } else {
      setExpandedCompleted(key);
    }
  };
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
        src="Sources/images/prouctlist/industrial/industrial.JPG"
        alt="404 -Not Given"
        className="about_img"
      />

      <div className="projects-bg">
        <Header />
        <section className="residential py-5">
          <div className="container">
            <p className="is-size-1 has-text-weight-semibold has-text-centered blue_color is-uppercase">
              Industrial Projects
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
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "200px" }}
                        >
                          <div
                            className="propertylist_image"
                          // style={{ minHeight: "300px" }}

                          >
                            <Image src={item.src} alt="404 - Not Given"
                              preview={{
                                getContainer: '#root', // This ensures the image preview is rendered within the root element
                              }} />
                          </div>

                          <div className="propertylist_content p-4">
                            <div className="pt-2">
                              <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold text-uppercase">
                                {item.title}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">{item.content}</p>
                            </div>
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
                          {/*  <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">Project Description:&nbsp;</span>
                                {item.projectDes}
                              </p>
                            </div>
                             */}
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
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "200px" }}
                        >
                          <div className="propertylist_image">
                            <img src={item.src} alt="404 - Not Given" onClick={() => showModal(item)}
                            />
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
                            {/* <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">Project Description:&nbsp;</span>
                                {item.projectDes}
                              </p>
                            </div> */}
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
                <Modal getContainer="#root" title={modalDetails.title} open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel} mask={true} style={{ boxShadow: "none" }} width={1000}>
                  <Row>
                    {/* Check if imageGallery exists and has images */}
                    {modalDetails.imageGallery && modalDetails.imageGallery.length > 0 ? (
                      modalDetails.imageGallery.map((imgSrc, idx) => (
                        <Col lg={8}>
                          <div className="image_position">
                            <Image
                              key={idx}
                              src={imgSrc}
                              alt={`Gallery Image ${idx + 1}`}
                              style={{ cursor: "pointer" }}
                              preview={{
                                getContainer: '#root', // This ensures the image preview is rendered within the root element
                              }}
                            />
                          </div>
                        </Col>
                      ))
                    ) : (
                      <p>No images found</p>
                      /* Show this if imageGallery is empty */
                    )}
                  </Row>
                </Modal>)}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Industrial;
