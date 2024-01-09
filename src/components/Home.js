import React from 'react';
import "./Home.css";
import Product from './Product';
import Footer from './Footer';
const Home = () => {
  return (
    <div className="home">
      <img
        className="home_img"
        src="https://m.media-amazon.com/images/I/71Q+c4-cnjL._SX3000_.jpg"
        alt=""
      />
      <div className="row_arrangement">
        {" "}
        <Product
          id="12"
          title="title here"
          price={100}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"
        />
        <Product
          id="12"
          title="title here"
          price={1628}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg"
        />
      </div>
      <div className="row_arrangement">
        {" "}
        <Product
          id="12"
          title="title here"
          price={999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg"
        />
        <Product
          id="12"
          title="title here"
          price={1500}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg"
        />
        <Product
          id="12"
          title="title here"
          price={5000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg"
        />
      </div>
      <div className="row_arrangement">
        {" "}
        <Product
          id="12"
          title="title here"
          price={2999}
          rating={4}
          image="https://m.media-amazon.com/images/I/4134F8em5JL._SY160_.jpg"
        />
        <Product
          id="12"
          title="title here"
          price={2300}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Winter23/WIN23_HostessGifts_Glassware_QuadCard_D_03_186x116._SY116_CB577074175_.jpg"
        />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home