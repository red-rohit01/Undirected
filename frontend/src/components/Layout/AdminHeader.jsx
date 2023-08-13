import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);

  return (
         <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAkCAMAAABCFAMdAAAA0lBMVEX///8iMVUAyJZYY3/Hy9Q5RmcvPV8pOFvm6Ozc3uTT1t2Ql6ny8/UKypri5OnEyNGHj6N7hJmepbU2RGWXnq+yuMQ/TGt0fZROWndeaYNpc4vs7fDW2d+Di59IVHKvtMG17+Dj+fNg3b3y/Pot0aia6dWM5s8czqFkb4ikqrm9wcxP2bbZ9++p7Ntr38LV7OiQtbhpqKZEcX9JkJBEeILL9OpBgoZMh4yx4dg5Z3dQnJk0X3JPpJzV4eMuVGpUuqhIwKgsSmU1yadZyLGLz8OtxcnfVLenAAAELElEQVRYhc2X22KjNhCGxdkGDNiAORnjxIkPeDdtt5u229O22/b9X6lohNBI4O1NE2duDDNC8zHzS8KEjO1+N+F8A3bRF3e3Zpiw/UXX9ftbU4wNuHR9PxF6tzs87m5Vy/0DcOm7UeT9kUUe3r0+leDSH9XARee2ONyQSwUTgdsIUJRlJ/nvMNfT63M9iuyS+O+Or8ZVme5s5NwvcLeCdOVFyTnsViPmUgUWRoalrYtkLnk3XrGm3kDOuiq3jp0vU3mKdJnb1opeuaXWWRwpbAeh72+Stdab8+1XuDYGH6YtfQGQDd7TRgz2HO5dh8Lb9pkqQsrhsdpHSYgQ0neasA8LxKWsidRBA9e8aK6FvFrCaY0pL/G4pyI1ipcoy35I/z0a8RFzvZe5zppkNquOyWitvC8FNInM1vLgiE3Ba9u1MmCTGFv4bUSaZ97HH65x7WSuFkYUbXfZwGw2bUAAXCWVSZXY9Nqlg2FA7IVVkGYiM9Rr3VT0OqED6NgNfYelyLOb4PrxK1wsFxdyzctQ4ved0xxrXtxTrxw37r0z4JqJGTz2lCPmHcAWHzEXwlo8K1whHXEebk+0ZF2VRPeobeityV4ilx9t+4K5vZPe1OzS9FqUCFq5+IC4fsZcPylcZNmNMMTtjCE0tCGmMAMKCfpBC7RkEDl+CVDG2ZT3HWpU/ItP17g+Rer4XJYoJEsAV7UTSeWX4Pc0WA1OpnrNKfCs1B704y9oul8lLs1SwdaoDdQSkGypjW1LVqJNQ3ljaLsjnPNhm7FMKdPh+PsVLgBWjwpLAVsBWKaNbQnaR+uMKRHwbOyt+b7oSGS/Ya7PmAsCIZHNUlpJm+iBhG1DMo/pB7fSnAQjxE/rHNLHaOuf24jrD8z1J7iUEw7AcjSnDfCQcnQOw8pA5S2vgIG1tvTK7jWuB8alqZK0ZGcGsmHSy0bJ6OLMhyrAdjECWxX95uPhxrvOf3BNtlJz+IYT0Ts6Md0vtKxnmGfFXKD016Sxp8CoDqPhHflSMRGX8wVxfRkKKdY1Auv2gmbum+xjZAv+gl7a9TlsvdPghP23SxyaZlr0Eypg8Gp565sZKkN7jeuvIbBVuyN9Q1CLmbR85bgmk94xWBWjWC/eFrmcv4fz8fj0jwD2psCwLofPHr9A3mFnr/BGQp9zVI2FYjabLZQUP9K5dk/3l8v94RkHHLWTbB9L+GSxhxZ4O6AZaCmGW+4tghy2j5ieCsIC/tiWffk2mAsfVTiQENUo2Jz4bZIZxkndS4IkK4wy2ched7UsSq/pWh4s6y65adTyzjKjA6JeX/hzL8Yf6TiQk5HFAPZytsIyCa4ErFEjXx6sEfouqiuBfPyX6uXBuqOTCdholcCs//vgrCafe3EwiuCac3/Cv0k8z2umIoSL/w1adxCPvtHehPlRNiW9/8v+BXphQyWnmOdyAAAAAElFTkSuQmCC"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/cupouns" className="800px:block hidden">
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
            <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader