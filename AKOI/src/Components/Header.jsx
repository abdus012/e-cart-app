import React, { useState } from "react";
import Cart from "./Cart";
import "../Style/Navbar.css";
import { useSelector } from "react-redux";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import PersonSharpIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

import {
  Container,
  HeaderTop,
  HeaderMiddle,
  CartTrackProfile,
  Twitter,
  Facebook,
  Instagram,
  PhoneEmail,
  Phone,
  Email,
  NavBar,
  Menu,
} from "../Style/Header";

const Header = (props) => {
  const data = useSelector((state) => state.Cart.cart);

  const [showMenu, setShowMenu] = useState(false);
  let m;
  let menu;

  if (showMenu) {
    menu = <Cart setShowMenu={setShowMenu} />;
  }

  return (
    <>
      <Container>
        <HeaderTop>
          <Twitter fontSize="large" />
          <Instagram fontSize="large" />
          <Facebook fontSize="large" />
          <PhoneEmail>
            <Phone className="PhoneText" />
            <p>+919620217378</p>
            <Email className="EmailText" />
            <p>customercare@medmongers.com </p>
          </PhoneEmail>
        </HeaderTop>
        <HeaderMiddle>
          <CartTrackProfile className="Navbar2">
            <div className="">
              <PersonSharpIcon className="cursor-pointer" />
            </div>
            <p>Profile</p>
            <div
              className="mt cursor-pointer flex -ml-3 "
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <ShoppingCartIcon />
              <div className="-mt-2 -ml-1 text-white border bg-red-400 pl-1 pb-1 pr-1 rounded-xl font-bold h-6">
                {data.length}
              </div>
            </div>
            Cart
            <LocalShippingIcon className="cursor-pointer" />
            Trackorder
          </CartTrackProfile>
        </HeaderMiddle>
        <NavBar>
          <Menu>
            <a href="#">Shop</a>
            <a href="#">Brand</a>
            <a href="#">Warranty </a>
            <a href="#">Contact </a>
            <a href="#">About </a>
            <a href="#">Blog </a>
          </Menu>
        </NavBar>
      </Container>

      {menu}
      {m}
    </>
  );
};

export { Header };
