import React from "react";
import "./Home.css";
import Product from "./Product";
import db from "./images/mongoDb.png";
import ts from "./images/typescript.png";
import css from "./images/tailwind.png";
import node from "./images/node.png";
import next from "./images/nextauth.jpeg";
import astro from "./images/astro.png";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MzgyMjg2ZDEt/MzgyMjg2ZDEt-YmVkMzVmOTMt-w1500._CB408305216_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id={123432}
            title="JavaScript"
            price={399.99}
            rating={3}
            image={
              "https://www.miltonmarketing.com/wp-content/uploads/2018/04/Javascript_logo-1170x850.jpg"
            }
          />

          <Product
            title="React JS"
            id={123456}
            price={399.99}
            rating={4}
            image={
              "data:image/png;base64,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"
            }
          />

          <Product
            id={123789}
            title="Java"
            price={399.99}
            rating={5}
            image={
              "data:image/png;base64,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"
            }
          />
        </div>

        <div className="home_row">
          <Product
            title="TypeScript"
            id={123459}
            price={399.99}
            rating={3}
            image={ts}
          />
          <Product
            title="Mongo DB"
            id={123966789}
            price={399.99}
            rating={4}
            image={db}
          />
        </div>
        <div className="home_row">
          <Product
            title="NextAuth"
            id={123454569}
            price={399.99}
            rating={4}
            image={next}
          />
          <Product
            title="Node.JS"
            id={213489}
            price={399.99}
            rating={3}
            image={node}
          />
          <Product
            title="Tailwind CSS"
            id={196789}
            price={399.99}
            rating={5}
            image={css}
          />
          <Product
            title="Astro"
            id={154589}
            price={399.99}
            rating={4}
            image={astro}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
