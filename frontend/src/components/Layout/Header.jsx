import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAkCAMAAABCFAMdAAAA0lBMVEX///8iMVUAyJZYY3/Hy9Q5RmcvPV8pOFvm6Ozc3uTT1t2Ql6ny8/UKypri5OnEyNGHj6N7hJmepbU2RGWXnq+yuMQ/TGt0fZROWndeaYNpc4vs7fDW2d+Di59IVHKvtMG17+Dj+fNg3b3y/Pot0aia6dWM5s8czqFkb4ikqrm9wcxP2bbZ9++p7Ntr38LV7OiQtbhpqKZEcX9JkJBEeILL9OpBgoZMh4yx4dg5Z3dQnJk0X3JPpJzV4eMuVGpUuqhIwKgsSmU1yadZyLGLz8OtxcnfVLenAAAELElEQVRYhc2X22KjNhCGxdkGDNiAORnjxIkPeDdtt5u229O22/b9X6lohNBI4O1NE2duDDNC8zHzS8KEjO1+N+F8A3bRF3e3Zpiw/UXX9ftbU4wNuHR9PxF6tzs87m5Vy/0DcOm7UeT9kUUe3r0+leDSH9XARee2ONyQSwUTgdsIUJRlJ/nvMNfT63M9iuyS+O+Or8ZVme5s5NwvcLeCdOVFyTnsViPmUgUWRoalrYtkLnk3XrGm3kDOuiq3jp0vU3mKdJnb1opeuaXWWRwpbAeh72+Stdab8+1XuDYGH6YtfQGQDd7TRgz2HO5dh8Lb9pkqQsrhsdpHSYgQ0neasA8LxKWsidRBA9e8aK6FvFrCaY0pL/G4pyI1ipcoy35I/z0a8RFzvZe5zppkNquOyWitvC8FNInM1vLgiE3Ba9u1MmCTGFv4bUSaZ97HH65x7WSuFkYUbXfZwGw2bUAAXCWVSZXY9Nqlg2FA7IVVkGYiM9Rr3VT0OqED6NgNfYelyLOb4PrxK1wsFxdyzctQ4ved0xxrXtxTrxw37r0z4JqJGTz2lCPmHcAWHzEXwlo8K1whHXEebk+0ZF2VRPeobeityV4ilx9t+4K5vZPe1OzS9FqUCFq5+IC4fsZcPylcZNmNMMTtjCE0tCGmMAMKCfpBC7RkEDl+CVDG2ZT3HWpU/ItP17g+Rer4XJYoJEsAV7UTSeWX4Pc0WA1OpnrNKfCs1B704y9oul8lLs1SwdaoDdQSkGypjW1LVqJNQ3ljaLsjnPNhm7FMKdPh+PsVLgBWjwpLAVsBWKaNbQnaR+uMKRHwbOyt+b7oSGS/Ya7PmAsCIZHNUlpJm+iBhG1DMo/pB7fSnAQjxE/rHNLHaOuf24jrD8z1J7iUEw7AcjSnDfCQcnQOw8pA5S2vgIG1tvTK7jWuB8alqZK0ZGcGsmHSy0bJ6OLMhyrAdjECWxX95uPhxrvOf3BNtlJz+IYT0Ts6Md0vtKxnmGfFXKD016Sxp8CoDqPhHflSMRGX8wVxfRkKKdY1Auv2gmbum+xjZAv+gl7a9TlsvdPghP23SxyaZlr0Eypg8Gp565sZKkN7jeuvIbBVuyN9Q1CLmbR85bgmk94xWBWjWC/eFrmcv4fz8fj0jwD2psCwLofPHr9A3mFnr/BGQp9zVI2FYjabLZQUP9K5dk/3l8v94RkHHLWTbB9L+GSxhxZ4O6AZaCmGW+4tghy2j5ieCsIC/tiWffk2mAsfVTiQENUo2Jz4bZIZxkndS4IkK4wy2ched7UsSq/pWh4s6y65adTyzjKjA6JeX/hzL8Yf6TiQk5HFAPZytsIyCa4ErFEjXx6sEfouqiuBfPyX6uXBuqOTCdholcCs//vgrCafe3EwiuCac3/Cv0k8z2umIoSL/w1adxCPvtHehPlRNiW9/8v+BXphQyWnmOdyAAAAAElFTkSuQmCC"
                alt=""
              />
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Something..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">                                           
                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}  {/* This curly brace only used to give a space before the arrow  */}    
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#DFB74F] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAkCAMAAABCFAMdAAAA0lBMVEX///8iMVUAyJZYY3/Hy9Q5RmcvPV8pOFvm6Ozc3uTT1t2Ql6ny8/UKypri5OnEyNGHj6N7hJmepbU2RGWXnq+yuMQ/TGt0fZROWndeaYNpc4vs7fDW2d+Di59IVHKvtMG17+Dj+fNg3b3y/Pot0aia6dWM5s8czqFkb4ikqrm9wcxP2bbZ9++p7Ntr38LV7OiQtbhpqKZEcX9JkJBEeILL9OpBgoZMh4yx4dg5Z3dQnJk0X3JPpJzV4eMuVGpUuqhIwKgsSmU1yadZyLGLz8OtxcnfVLenAAAELElEQVRYhc2X22KjNhCGxdkGDNiAORnjxIkPeDdtt5u229O22/b9X6lohNBI4O1NE2duDDNC8zHzS8KEjO1+N+F8A3bRF3e3Zpiw/UXX9ftbU4wNuHR9PxF6tzs87m5Vy/0DcOm7UeT9kUUe3r0+leDSH9XARee2ONyQSwUTgdsIUJRlJ/nvMNfT63M9iuyS+O+Or8ZVme5s5NwvcLeCdOVFyTnsViPmUgUWRoalrYtkLnk3XrGm3kDOuiq3jp0vU3mKdJnb1opeuaXWWRwpbAeh72+Stdab8+1XuDYGH6YtfQGQDd7TRgz2HO5dh8Lb9pkqQsrhsdpHSYgQ0neasA8LxKWsidRBA9e8aK6FvFrCaY0pL/G4pyI1ipcoy35I/z0a8RFzvZe5zppkNquOyWitvC8FNInM1vLgiE3Ba9u1MmCTGFv4bUSaZ97HH65x7WSuFkYUbXfZwGw2bUAAXCWVSZXY9Nqlg2FA7IVVkGYiM9Rr3VT0OqED6NgNfYelyLOb4PrxK1wsFxdyzctQ4ved0xxrXtxTrxw37r0z4JqJGTz2lCPmHcAWHzEXwlo8K1whHXEebk+0ZF2VRPeobeityV4ilx9t+4K5vZPe1OzS9FqUCFq5+IC4fsZcPylcZNmNMMTtjCE0tCGmMAMKCfpBC7RkEDl+CVDG2ZT3HWpU/ItP17g+Rer4XJYoJEsAV7UTSeWX4Pc0WA1OpnrNKfCs1B704y9oul8lLs1SwdaoDdQSkGypjW1LVqJNQ3ljaLsjnPNhm7FMKdPh+PsVLgBWjwpLAVsBWKaNbQnaR+uMKRHwbOyt+b7oSGS/Ya7PmAsCIZHNUlpJm+iBhG1DMo/pB7fSnAQjxE/rHNLHaOuf24jrD8z1J7iUEw7AcjSnDfCQcnQOw8pA5S2vgIG1tvTK7jWuB8alqZK0ZGcGsmHSy0bJ6OLMhyrAdjECWxX95uPhxrvOf3BNtlJz+IYT0Ts6Md0vtKxnmGfFXKD016Sxp8CoDqPhHflSMRGX8wVxfRkKKdY1Auv2gmbum+xjZAv+gl7a9TlsvdPghP23SxyaZlr0Eypg8Gp565sZKkN7jeuvIbBVuyN9Q1CLmbR85bgmk94xWBWjWC/eFrmcv4fz8fj0jwD2psCwLofPHr9A3mFnr/BGQp9zVI2FYjabLZQUP9K5dk/3l8v94RkHHLWTbB9L+GSxhxZ4O6AZaCmGW+4tghy2j5ieCsIC/tiWffk2mAsfVTiQENUo2Jz4bZIZxkndS4IkK4wy2ched7UsSq/pWh4s6y65adTyzjKjA6JeX/hzL8Yf6TiQk5HFAPZytsIyCa4ErFEjXx6sEfouqiuBfPyX6uXBuqOTCdholcCs//vgrCafe3EwiuCac3/Cv0k8z2umIoSL/w1adxCPvtHehPlRNiW9/8v+BXphQyWnmOdyAAAAAElFTkSuQmCC"
                alt=""
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Something..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
