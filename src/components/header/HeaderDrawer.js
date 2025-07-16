import React, { useState } from "react";
import { Drawer, Button, Collapse } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { url } from "../../constants/navhome";

const { Panel } = Collapse;

const headeritemone = [
  { headname: "Who We Are", headlink: url.whoweare },
  { headname: "Our Management", headlink: url.management },
  { headname: "Our Standards", headlink: url.standards },
  { headname: "Awards & Certifications", headlink: url.award },
  { headname: "CSR", headlink: url.csr },
  { headname: "Careers", headlink: url.careers },
];

const headeritemtwo = [
  { headname: "Residential", headlink: url.residential },
  { headname: "Commercial", headlink: url.commercial },
  { headname: "Industrial", headlink: url.industrial },
  { headname: "Institutional And Corporate", headlink: url.institutionalprojects },
];

const headeritemthree = [
  { headname: "Plant And Machinery", headlink: url.machinery },
  { headname: "Formwork", headlink: url.formwork },
  { headname: "Technology", headlink: url.technology },
];

const headeritemfour = [
  {
    headname: "Clients",
    headlink: "/ourclients",
  },
  {
    headname: "Architect And Consultants",
    headlink: "/architech",
  }
];

const headeritemFive = [
  {
    headname: "Board and Committee",
    headlink: "",
  },
  {
    headname: "Financial Reports",
    headlink: "",
  },
  {
    headname: "Share Holding Pattern",
    headlink: "",
  },
  {
    headname: "Updates & Announcements",
    headlink: "",
  },
  {
    headname: "Corporate Governance",
    headlink: "",
  },
  {
    headname: "Annual Secretarial Compliance Report",
    headlink: "",
  },
  {
    headname: "Investor Grievance",
    headlink: "",
  },
  {
    headname: "Policies",
    headlink: "",
  },
  {
    headname: "Material Contract and Material Document",
    headlink: "",
  },
  {
    headname: "IPO Documents",
    headlink: "",
  },
  {
    headname: "MOA & AOA",
    headlink: "",
  },
  {
    headname: "DRHP",
    headlink: "",
  },
  {
    headname: "RHP",
    headlink: "",
  },
  {
    headname: "Prospectus",
    headlink: "",
  },
  {
    headname: "Group Companies",
    headlink: "",
  },
]

const HeaderDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const renderCollapsePanel = (title, items) => (
    <Panel header={<strong>{title}</strong>} key={title}>
      {items.map((item, index) => (
        <p key={index} style={{ margin: "8px 0" }}>
          <Link to={item.headlink} onClick={closeDrawer}>
            {item.headname}
          </Link>
        </p>
      ))}
    </Panel>
  );

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button
        type="primary"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        style={{ margin: 16, background: "#0d2e61", border: "none" }}
      >
      </Button>
      <Drawer
        title=""
        placement="left"
        onClose={closeDrawer}
        open={open}
      >
        <Collapse accordion>
          {renderCollapsePanel("Projects", headeritemtwo)}
          {renderCollapsePanel("Expertise", headeritemthree)}
          {renderCollapsePanel("About Us", headeritemone)}
          {renderCollapsePanel("Clients", headeritemfour)}
          
          {/* {renderCollapsePanel("Investors", headeritemFive)} */}
        </Collapse>
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
