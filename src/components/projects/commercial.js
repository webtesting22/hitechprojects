import React, { useState } from "react";
import Header from "../header/header";
import { Row, Col, Modal, Image } from "antd";
const commerciallist = [


  {
    src: "/Sources/images/prouctlist/commercial/ongoing/sharnam sq/1.jpg",
    title: "Sharnam Square",
    content: "...",
    client: "Sharnam Group",
    location: "Khokhara, Ahmedabad",
    projectSize: "2,75,000 Sq. ft.",
    projectDes: "1B+GF+02 Floor",
    projectYear: "2023 - Current",
    architect: "99 Studio",
    consultant: "Shreeji Consultant",
    scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/Regalia2.jpeg",
    title: "REGALIA",
    content: "...",
    client: "Nakshtra Infraspace",
    location: "GIFT City",
    projectSize: "5,00,000 Sq. ft.",
    projectDes: "3B+GF+29 Floor",
    projectYear: "2022 - Current",
    architect: "Neha Consultants",
    consultant: "J W Consultants LLP",
    scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, Flooring works.",
  },

  {
    src: "Sources/images/prouctlist/commercial/ongoing/1-4.png",
    title: "FLEXONE",
    content: "...",
    client: "Collated Ventures",
    location: "GIFT City",
    projectSize: "5,63,000 Sq. ft.",
    projectDes: "3B+GF+28 Floor",
    projectYear: "2022 - Current",
    architect: "Studio ARA",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, Flooring works.",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/1-5.JPEG",
    title: "SHARNAM METROLINK",
    content: "Commercial projects at Khokhara, Ahmedabad",
    client: "Sharnam Group",
    location: "Khokhara, Ahmedabad",
    projectSize:
      "4,91,000 Sq. ft.",
    projectDes: "1B+GF+5/4 Floor",
    projectYear: "2022-Current",
    architect: "99 Studio",
    consultant: "S3M Design Consultants LLP",
    scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
  },
  {
    src: "/Sources/images/prouctlist/commercial/ongoing/devx/2.jpg",
    title: "DEVX",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/ongoing/devx/1.jpg",
      "/Sources/images/prouctlist/commercial/ongoing/devx/2.jpg",
      "/Sources/images/prouctlist/commercial/ongoing/devx/3.jpg",
      "/Sources/images/prouctlist/commercial/ongoing/devx/4.jpg"
    ],
    content: "Commercial",
    client: "DevX",
    location: "Ahmedabad",
    projectSize:
      "4,82,275 Sq. ft.",
    projectDes: "3B+GF+11 Floor",
    projectYear: "2024-Current",
    architect: "Upkrama Design LLP",
    consultant: "Ducon Consultant Private Limited",
    scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, LPS works.",
  },
  {
    src: "/Sources/images/prouctlist/commercial/ongoing/AdaniWilmarNew.png",
    title: "ADANI WILMAR HEADQUARTER",
    content: "Commercial",
    client: "Adani Realty",
    location: "Adani Shantigram, Ahmedabad",
    projectSize:
      "4,85,000 Sq. ft.",
    projectDes: "3B+GF+08 Floor",
    projectYear: "2024-Current",
    architect: "Eric Parry Architects",
    consultant: "Ducon Consultant Private Limited.",
    scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, LPS works.",
  },
  {
    src: "/Sources/images/prouctlist/commercial/ongoing/UCC.png",
    title: "UNIVERSAL COMMERCIAL CAPITAL",
    content: "Commercial",
    client: "UCC Infra",
    location: "Adajan, Surat",
    projectSize: "3,26,615 Sq. ft",
    projectDes: "3B+GF+11 Floor",
    projectYear: "2024-Current",
    architect: "Tathastu Architects Surat",
    consultant: "CBM Engineers",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },
  {
    src: "/Sources/images/prouctlist/commercial/ongoing/Citadel.png",
    title: "THE CITADEL",
    content: "Commercial",
    client: "Magnastar Realty",
    location: "Ahmedabad",
    projectSize: "7,12,279 Sq. ft",
    projectDes: "3B+GF+19 Floor",
    projectYear: "2024 - Current",
    architect: "Architect Mansi Shah",
    consultant: "Ducon Consultants Pvt Ltd",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },

  {
    src: "Sources/images/prouctlist/commercial/ongoing/Regalia2.png",
    title: "Regalia 2",
    imageGallery: [
      "Sources/images/prouctlist/commercial/ongoing/Regalia2.png",
    ],
    content: "...",
    client: "Nakshtra Infraspace",
    location: "GIFT City",
    projectSize: "15,90,000 Sq. ft.",
    projectDes: "5B+GF+28 Floor",
    projectYear: "2025 - Current",
    architect: "ARK - Reza Kabul Architects Pvt. Ltd.",
    consultant: "Sarjan Consultant",
    scope: "RCC Frame works, Masonary, Plaster works, waterproofing,  MEP work,Flooring works etc.",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/ShivalikWave.png",
    title: "Shivalik Wave",
    imageGallery: [
      "",
    ],
    content: "...",
    client: "Shivalik Group",
    location: "Vaishnodevi Circle, Ahmedabad",
    projectSize: "12,59,000 Sq. ft.",
    projectDes: "3B+GF+29 Floor",
    projectYear: "2025-Current",
    architect: "Apurva Amin",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/UniversalMajesty.png",
    title: "The Majesty",
    imageGallery: [
      "",
    ],
    content: "...",
    client: "Majesty Infra",
    location: "Surat",
    projectSize: "6,39,000 Sq. ft.",
    projectDes: "3B+GF+17 Floor",
    projectYear: "2025-Current",
    architect: "Tathastu Architect Surat",
    consultant: "CBM Engineers",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/WealthPicture.png",
    title: "Wealth City",
    imageGallery: [
      "",
    ],
    content: "...",
    client: "Wealth City Devlopers",
    location: "Surat",
    projectSize: "5,97,000 Sq. ft.",
    projectDes: "3B+GF+11 Floor",
    projectYear: "2025-Current",
    architect: "Tathastu Architect Surat",
    consultant: "SNV Engineers",
    scope: "Excavation work, RCC Frame works, Masonary & Plaster works.",
  },
  // {
  //   src: "",
  //   title: "Sharnam Navkar",
  //   imageGallery: [
  //     "",
  //   ],
  //   content: "...",
  //   client: "Sharnam Group",
  //   location: "Ahmedabad",
  //   projectSize: "7,16,687 Sq. ft.",
  //   projectDes: "3B+GF+07/05 Floor",
  //   projectYear: "2025 - Current",
  //   architect: "99 Studio",
  //   consultant: "Shreeji Structure",
  //   scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
  // },
];
const commercialcompleted = [
  {
    src: "Sources/images/prouctlist/commercial/completed/SharnamMetrolink.webp",
    title: "Sharanam Metrolink",
    content: "...",
    client: "Sharanam Metrolink LLP",
    location: "Khokhara, Ahmedabad",
    projectSize: "4,91,032 Sq. ft.",
    projectDes: "2 Floors, 12 Meters",
    projectYear: "2024",
    architect: "99 Studio",
    consultant: "Shreeji Consultant",
    scope: "Civil Construction work of RCC Frame, Block & Plaster work, Flooring Work, painting Work, Fabrication work.",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/TheProfit.jpeg",
    title: "THE PROFIT",
    imageGallery: [
      "Sources/images/prouctlist/commercial/completed/TheProfit/Picture3.jpg",
    ],
    content: "...",
    client: "The Building Company",
    location: "Surat",
    projectSize: "1,59,174 Sq. ft.",
    projectDes: "2B+GF+10 Floor",
    projectYear: "2024",
    architect: "Tathastu Architect Surat",
    consultant: "SNV Engineers",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },

  // {
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
  //   src: "Sources/images/prouctlist/commercial/ongoing/3.png",
  //   title: "TORRENT POWER 'E' STATION",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center, TSD Workshop, Plug point and other applied work at 'E' station premises, Varachha Surat.",
  //   client: "Torrent Power Ltd",
  //   location: "Varachha, Surat",
  //   projectSize: "50,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: "S3M Design Consultants LLP",
  //   scope: "Civil Structure Work",
  // },
  // {
  //   src: "Sources/images/prouctlist/commercial/ongoing/4.png",
  //   title: "TORRENT POWER LTD. ",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its HT PSC building and meter Lab building at Naranpura, Ahmedabad.",
  //   client: "Torrent Power Ltd",
  //   location: "NARANPURA",
  //   projectSize: "1,70,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: "Ducon Consultant Pvt Ltd",
  //   scope: "Civil Structure Work with all services",
  // },
  // {
  //   src: "Sources/images/prouctlist/commercial/ongoing/5.png",
  //   title: "TORRENT POWER LTD.",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its PSC building And Plug point building at Odhav.",
  //   client: "Torrent Power Ltd",
  //   location:"Odhav, Gujarat",
  //   projectSize: "1,10,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: " Ducon Consultant Pvt Ltd",
  //   scope: "Civil Structure Work with all services",
  // },
  // {
  //   src: "Sources/images/prouctlist/commercial/ongoing/6.png",
  //   title: "WEST GATE 'E' BLOCK",
  //   client: "AADHAN BUILDERS LLP.",
  //   projectSize: "35,000 SQFT. (3B+GF +07 Floors)",
  //   projectYear: "2022-Current",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "-",
  //   scope: "Civil Structure Work with all services",
  // },
  {
    src: "Sources/images/prouctlist/commercial/completed/1.png",
    title: "Ahmedabad One Mall - Phase 2",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/Best photos/One Mall - Main.jpeg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG_20210315_184912.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0015.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0021.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0016.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0017.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/WhatsApp Image 2022-03-16 at 16.33.23 (1).jpeg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0013.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0014.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0018.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0019.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0020.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0021.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0022.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0023.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0024.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0025.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0026.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0027.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0028.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/IMG-20210508-WA0029.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/Best photos/One mall - Others/One Mall -1.jpeg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/Best photos/One mall - Others/One Mall -2.jpeg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/Best photos/One mall - Others/One Mall -3.jpeg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/Best photos/One mall - Others/One Mall -4.jpeg",
      "/Sources/images/prouctlist/commercial/completed/Ahmedabad One Alpha Mall/Best photos/One mall - Others/One Mall -5.jpeg"
    ],
    content:
      "Ahmedabad One mall (Nexus Malls, A group of Blackstone), is the city's iconic shopping destination and it entered into constructing phase2 building with wellknown F&B and Retail brands.",
    segment: "Corporate",
    client: "Nexus Mall",
    location: "Ahmedabad",
    projectSize: " 2,00,000 Sq. ft.",
    projectDes: "2B+GF+4 Floor",
    projectYear: "2022",
    architect: "Bentel Associates",
    consultant: "TPC Technical Projects Consultants",
    scope: "RCC Frame works, Masonary, Plaster works & Structural Steel Work & Structural  Retrofitting Work.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/2.png",
    title: "KP EPITOME",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/kp epitome/1.jpg"
    ],
    content:
      "KP Epitome is a commercial development, providing perfectly built work spaces and commercial shops having 3 towers of 2B+G+14 And 8 towers of 2B+G+3.",
    segment: "Commercial",
    client: "KP Sanghvi Group",
    location: "Ahmedabad",
    projectSize: "6,00,000 Sq. ft.",
    projectDes: "2B+GF+14 Floor",
    projectYear: "2021",
    architect: "99 Studio",
    consultant: "P-Cube Consultant",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/13.jpg",
    title: "SUN WEST BANK",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/West Bank Drone Photos/DJI_0240-min.JPG",
      "/Sources/images/prouctlist/commercial/completed/West Bank Drone Photos/DJI_0250-min.JPG",
      "/Sources/images/prouctlist/commercial/completed/West Bank Drone Photos/DJI_0196-min.JPG",
      "/Sources/images/prouctlist/commercial/completed/West Bank Drone Photos/DJI_0045-min.JPG",
      "/Sources/images/prouctlist/commercial/completed/West Bank Drone Photos/Sun West Bank - 1-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Bank Drone Photos/Sun West Bank - Main-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Bank Drone Photos/Sun West Bank - 2-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Bank Drone Photos/25-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Bank Drone Photos/26-min.jpg"
    ],
    content:
      "Sun Westbank is one of the commercial developments offering spacious and skillfully designed office spaces and commercial shops.",
    segment: "Commercial",
    client: "Sun Builders",
    location: "Ahmedabad",
    projectSize: "6,85,000 Sq. ft.",
    projectDes: "3B+GF+13 Floor",
    projectYear: "2021",
    architect: "HM Architect",
    consultant: "SETU Infrastructure",
    scope: "RCC Frame works, Masonary, Plaster works, waterproofing,  MEP work, All finishing works etc.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/14.jpg",
    title: "SHARNAM SOLITAIRE",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9125-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9151-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9173-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9183-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9187-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9196-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9197-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9200-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9207-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9213-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9217-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9220-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9232-min.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Solitare/Jpg/IMG_9242-min.jpg",
    ],
    content:
      "A world class business centre designed to harness opportunities with its 3 Towers comprising of 1B+G+4 measuring upto a total of 2,80,000 sq ft.",
    segment: "Commercial",
    client: "Sharnam Group",
    location: "Ahmedabad",
    projectSize: "2,25,000 Sq. ft.",
    projectDes: "1B+GF+4 Floor",
    projectYear: "2021",
    architect: "99 Studio",
    consultant: "Millimeter Designs",
    scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/5.png",
    title: "SHARNAM SMART SPACE",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/SH.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/Main Photos/Sharnam Smart Space - Main.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/Main Photos/Sharnam Smart Space - 1.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/Main Photos/Sharnam Smart Space - 2.jfif",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/Smart Space 1.jfif",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/Smart Space 2.jfif",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/Smart Space 3.jfif",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/Smart Space 4.jfif",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/Smart Space 5.jfif",
      "/Sources/images/prouctlist/commercial/completed/Sharnam Smart Space/Smart Space 6.jpg"

    ],
    content:
      "A world class business centre designed to harness opportunities with its five Towers comprising of 2B+G+4 measuring upto a total of 4,25,000 sq ft.",
    segment: "Commercial",
    client: "Sharnam Group",
    location: "Ahmedabad",
    projectSize: "4,25,000 Sq. ft.",
    projectDes: "2B+GF+4 Floor",
    projectYear: "2019",
    architect: "99 studio",
    consultant: "Millimeter designs",
    scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
  },
  {
    src: "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture12.jpg",
    title: "West Gate - D Block",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 1.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 2.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 3.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 4.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 5.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 6.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 7.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 8.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 9.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate D Block/Picture 10.JPG"
    ],
    content:
      "Westgate brings all the goodness from the heavenly powers to its occupants, a 20 storey building with 70 mt. height, 8 high speed Mitsubishi lifts and ample car parking.",
    segment: "Commercial",
    client: "Aadhan Builders",
    location: "Ahmedabad",
    projectSize: "4,85,000 Sq. ft.",
    projectDes: "3B+GF+23 Floor",
    projectYear: "2019",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },
  {
    src: "/Sources/images/prouctlist/commercial/completed/shivalik-shilp2/2.jpg",
    title: "SHIVALIK SHILP 2",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/shivalik-shilp2/2.jpg",
      "/Sources/images/prouctlist/commercial/completed/shivalik-shilp2/1.jpg",
      "/Sources/images/prouctlist/commercial/completed/shivalik-shilp2/Front.png"
    ],
    content:
      "Shivalik Shilp II, a magnificient architecture for the city is a perfect commercial place near Keshavbaug, Ahmedabad having 588 sqft of offices and 2289 sqft of showrooms.",
    segment: "Commercial",
    client: "Shilp Developers",
    location: "Ahmedabad",
    projectSize: "3B+GF+13 Floor",
    projectDes: "13 Floors, 48 Meters",
    projectYear: "2019",
    architect: "INI Design Studio",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },
  {
    src: "/Sources/images/prouctlist/commercial/completed/Ratnakar Nine Square/Ratnakar Nine - Main.jpg",
    title: "RATNAAKAR NINE SQUARE",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/Ratnakar Nine Square/2.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ratnakar Nine Square/3.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ratnakar Nine Square/4.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ratnakar Nine Square/1.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ratnakar Nine Square/Ratnakar Nine - 1.jpg",
      "/Sources/images/prouctlist/commercial/completed/Ratnakar Nine Square/Ratnakar Nine - 2.jpg",

    ],
    content:
      "Experience a fully furnished business center enabled with the best of form and function, to deliver everything you need.",
    segment: "Commercial",
    client: "Ratnakar Group",
    location: "Ahmedabad",
    projectSize: "6,00,000 Sq. ft.",
    projectDes: "3B+GF+13 Floor",
    projectYear: "2018",
    architect: "ADS Architect Pvt Ltd",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },
  {
    src: "/Sources/images/prouctlist/commercial/completed/West Gate Business Bay/Picture11.jpg",
    title: "West Gate Business Bay",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/West Gate Business Bay/Picture -1.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate Business Bay/Picture -2.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate Business Bay/Picture -3.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate Business Bay/Picture -4.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate Business Bay/Picture 5.jpg",
      "/Sources/images/prouctlist/commercial/completed/West Gate Business Bay/Picture 6.png",

    ],
    content:
      "Spread across two towers, Westgate Business Bay is a sought-after commercial project loaded with all the conveniences.",
    segment: "Commercial",
    client: "Aadhan Builders",
    location: "Ahmedabad",
    projectSize: "5,36,000 Sq. ft.",
    projectDes: "3B+GF+16 Floor",
    projectYear: "2018",
    architect: "ADS Architect Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },
  // {
  //   src: "Sources/images/prouctlist/commercial/completed/10.png",
  //   title: "YASH ARIAN",
  //   content:
  //     "Yash Arian comes with a total of 204 luxurious apartments measuring 4,50,000 Sq ft designed by Perkins Eastman, US.",
  //   segment: "Commercial",
  //   client: "Yash Arian Infra LLP",
  //   projectSize: "4,50,000 Sq. ft.",
  //   projectDes: "14 Floors, 42 Meters",
  //   projectYear: "2017",
  //   architect: "Design Studio",
  //   consultant: "N.K. Shah Consulting Engineers LLP",
  //   scope: "RCC Framework, Masonry ,Plaster",
  // },
  {
    src: "Sources/images/prouctlist/commercial/completed/11.png",
    title: "SUMEL 8",
    imageGallery: [
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/Main photos/Sumel 8 - Main.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/Main photos/Sumel 8 - 1.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/Main photos/Sumel 8 - 2.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/Main photos/Sumel 8 - 3.jfif",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/Main photos/Sumel 8 - 4.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/Main photos/5.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/1.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/2.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/4.jpg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/WhatsApp Image 2018-04-13 at 3.29.00 PM.jpeg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/WhatsApp Image 2018-04-13 at 3.29.01 PM.jpeg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/WhatsApp Image 2018-04-13 at 3.29.10 PM.jpeg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/WhatsApp Image 2018-04-13 at 3.29.12 PM.jpeg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/WhatsApp Image 2018-04-13 at 3.29.16 PM (1).jpeg",
      "/Sources/images/prouctlist/commercial/completed/Sumel 8/WhatsApp Image 2018-04-13 at 3.28.57 PM (1).jpeg"
    ],
    content:
      "Well designed by H N Safal, Sumel 8 shelters 11 high rise towers with 1983 units that are highly impressive.",
    segment: "Commercial",
    client: "HN Safal",
    location: "Ahmedabad",
    projectSize: "16,00,000 Sq. ft.",
    projectDes: "1B+GF+5 Floor",
    projectYear: "2017",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
  },
  // {
  //   src: "Sources/images/prouctlist/commercial/completed/11.png",
  //   title: "SUMEL Business Park V9",
  //   content:
  //     "Well designed by H N Safal, Sumel 8 shelters 11 high rise towers with 1983 units that are highly impressive.",
  //   segment: "Commercial",
  //   client: "H N Safal",
  //   location: "Asarva, Ahmedabad",
  //   projectSize: "16,00,000 Sqft. 11 Commercial buildings (B+G+5 Floors)",
  //   projectYear: "2014",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "N.K. Shah Consulting Engineers LLP",
  //   scope:
  //     "Civil Construction work of RCC Frame, Block Masonry Plaster work & Finishing Works of Commercial Building of B+G+4 Storey (9 Blocks).",
  // },


  {
    src: "Sources/images/prouctlist/commercial/completed/12.jpg",
    title: "West Gate",
    content:
      "Conceptualized by True Value Nirman, West Gate, Ahmedabad, Gujarat offers a total of 273 fully functional commercial offices with ultra-modern facilities.",
    segment: "Commercial",
    client: "Aadhan Builders",
    location: "Ahmedabad",
    projectSize: "5,00,000 Sq. ft.",
    projectDes: "3B+GF+23/14 Floor",
    projectYear: "2014",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Frame works, Masonary & Plaster works.",
  },
  // {
  //   src: "Sources/images/prouctlist/commercial/completed/12.png",
  //   title: "SUMEL BUSINESS PARK IV 5 ",
  //   content: "...",
  //   segment: "Commercial",
  //   client: "Aadhan Builders Pvt Ltd",
  //   location: "Saraspur, Ahmedabad",
  //   projectSize: "5,00,000 Sqft.",
  //   projectYear: "2014",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "N.K. Shah Consulting Engineers LLP",
  //   scope:
  //     "Civil Construction work of RCC Frame, Block Masonry Plaster work & Finishing Works of Commercial Building of B+G+4 Storey (5 Blocks).",
  // },

  // {
  //   src: "Sources/images/prouctlist/commercial/completed/12.png",
  //   title: "Mondeal Business Park",
  //   content: "...",
  //   segment: "Commercial",
  //   client: "Aadhan Builders Pvt Ltd",
  //   location: "SG Highway, Ahmedabad",
  //   projectSize: "5,00,000 Sqft.",
  //   projectYear: "2011",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "N.K. Shah Consulting Engineers LLP",
  //   scope:
  //     "Civil Construction work of RCC Frame, Block Masonry Plaster works of Commercial Building.",
  // },
];

const Commercial = () => {
  const [isOngoing, setIsOngoing] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);
  const showModal = (item) => {
    setModalDetails(item);
    setIsModalOpen(true);
    console.log("open");
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
        src="Sources/images/prouctlist/commercial/commercial.JPG"
        alt="404 -Not Given"
        className="about_img"
      />
      <div className="projects-bg">
        <Header />

        <div className="projects-bg">
          <section className="residential py-5">
            <div className="container">
              <p className="is-size-1 has-text-weight-semibold has-text-centered blue_color is-uppercase">
                Commercial Projects
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
                        borderBottom: isCompleted
                          ? "2px solid #0d2e61"
                          : "none",
                      }}
                    >
                      Completed
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </div>

        <section className="residential projects-bg pt-0">
          <div className="container">
            <div>
              <Row>
                {isOngoing &&
                  commerciallist.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "200px" }}
                        >
                          <div className="propertylist_image">
                            <Image src={item.src} alt="404 - Not Given"
                              preview={{
                                getContainer: '#root', // This ensures the image preview is rendered within the root element
                              }}
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
                            Commercial
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
                  commercialcompleted.map((item, key) => {
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
              {modalDetails && (
                <Modal getContainer="#root" title={modalDetails.title} open={isModalOpen} footer={null} mask={true} onOk={handleOk} onCancel={handleCancel} style={{ boxShadow: "none" }} width={1000}>
                  <Row>
                    {/* Check if imageGallery exists and has images */}
                    {modalDetails.imageGallery && modalDetails.imageGallery.length > 0 ? (
                      modalDetails.imageGallery.map((imgSrc, idx) => (
                        <Col lg={8}>
                          <div className="image_position">
                            <Image
                              preview={{
                                getContainer: '#root', // This ensures the image preview is rendered within the root element
                              }}
                              key={idx}
                              src={imgSrc}
                              alt={`Gallery Image ${idx + 1}`}
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </Col>
                      ))
                    ) : (
                      <Col lg={24} style={{ textAlign: 'center', padding: '20px' }}>
                        <p>No Images Found</p>
                      </Col>                      /* Show this if imageGallery is empty */
                    )}
                  </Row>
                </Modal>)}
            </div>
          </div>
        </section>
      </div>
    </>

  );

}
export default Commercial;
