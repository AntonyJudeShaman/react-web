import React from "react";
import "./gallery.css";
import sand from "./sand.jpg";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import e1 from "./e1.jpg";
import e2 from "./e2.jpg";
import e3 from "./e3.jpg";
import e4 from "./e4.jpg";
import e5 from "./e5.jpg";
import e6 from "./e6.jpg";
import e7 from "./e7.jpg";
import e8 from "./e8.jpg";
import e9 from "./e9.jpg";
import cloud from "./cloud.jpg";
import Footer from "./footer";
import logo from "./logo1.png";
import { Helmet } from "react-helmet";
import "@appnest/masonry-layout";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Tri2champ</title>
        <link rel="icon" type="image/png" href="logo.png" />
      </Helmet>
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
      >
        <a
          href="App"
          className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
        >
          <img
            src={logo}
            alt="Logo"
            className="logo-image mx-auto b-block"
            style={{}}
          />
        </a>
        <div className="flex-grow ">
          <ul className="flex justify-end">
            <li className="pr-9 pl-5 pt-4 pb-4">
              <a href="./App" className="hov under size">
                Home
              </a>
            </li>

            <li className="pr-5 pt-4 pb-4">
              <a href="./team" className="hov under size">
                Team
              </a>
            </li>

            <li className="  pt-4 pb-4">
              <a href="#" className="hov under size"></a>
            </li>
          </ul>
        </div>
      </nav>
      <masonry-layout cols="3" gap="30" style={{ padding: "4%" }}>
        <div className="">
          <img
            src={sand}
            className="rounded-md hhov mx-auto d-block "
            alt="Sand"
          />
        </div>
        <div className="">
          <img
            src={p1}
            className="rounded-md hhov mx-auto d-block img-fluid"
            alt="P1"
          />
        </div>
        <div className="">
          <img
            src={p2}
            className="rounded-md hhov mx-auto d-block img-fluid"
            alt="P2"
          />
        </div>
        <div className="">
          <img
            src={p3}
            className="rounded-md hhov mx-auto d-block img-fluid"
            alt="P3"
          />
        </div>
        <div className="">
          <img
            src={p4}
            className="rounded-md hhov mx-auto d-block img-fluid"
            alt="P4"
          />
        </div>
        <div className="">
          <img
            src={cloud}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e1}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e2}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e3}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e4}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e5}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e7}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        
        <div className="">
          <img
            src={e6}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
       
        <div className="">
          <img
            src={e8}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e9}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
      </masonry-layout>
      <Footer />
    </>
  );
};

export default Gallery;
