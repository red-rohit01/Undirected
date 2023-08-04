import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex} bg-cover bg-center`}
      style={{
        backgroundImage:
          "url(https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/81892502/1667736339996.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] backdrop-blur-sm`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#FFFFFF] font-[600] capitalize z-20`}
        >
          UNDIRECTED For <br />NIT Raipur
        </h1>
        <p className="pt-5 text-[30px] font-[Amaranth] font-[400] text-[#DFB74F] z-20">
          The ideal spot for buy or sell or Renting for students at NIT Raipur <br />
          Due to the limited supply,the first-come,first-served policy is in effect.{" "}
          <br /> Making your life little easier.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 z-20`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Check Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
