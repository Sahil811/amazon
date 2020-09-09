import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="0001"
            title="The lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={5}
          />
          <Product
            id="0002"
            title="Funny Costumes Dinosaur Inflatable Costumes"
            price={34.84}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71J-YtSUd3L._AC_UX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="0003"
            title="Color Club Halographic Hues Nail Polish, Halo, Graphic.05 Ounce"
            price={11.29}
            rating={4}
            image="https://m.media-amazon.com/images/I/71FPuDUhfML._AC_UL480_QL65_.jpg"
          />
          <Product
            id="0004"
            title="Hamilton Beach Breakfast Sandwich Maker, Silver (25475A) "
            price={24.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41N8AxIJq4L._AC_SY200_.jpg"
          />
          <Product
            id="0005"
            title="Artist's Loft Acrylic Paint Value Pack 36 Piece"
            price={25.35}
            rating={5}
            image="https://m.media-amazon.com/images/I/61GEW-MekwL._AC_UL480_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="0006"
            title="FLY2SKY 28pcs Mochi Squishy Toys Mini Squishies Kawaii Animal Squishys Party Favors Easter Egg Fillers Easter Gifts for Kids Unicorn Cat Panda Animal Squeeze Toy Stress Relief Toy Class Prize, Random "
            price={8.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ZA1VRxLOL._AC_UL480_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
