import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CloseIcon from "@material-ui/icons/Close";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

export const PhoneEmail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  color: white;
  position: absolute;
  width: 406px;
  height: 18px;
  left: 775px;
  top: 6px;
`;

export const HeaderTop = styled.div`
  position: fixed;
  width: 100%;
  height: 31px;
  left: 0px;
  top: 0px;

  background: #1a979b;
`;

export const CartTrackProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 307px;
  height: 28px;
  right: 100.1px;
  top: 35px;
`;

export const Twitter = styled(TwitterIcon)`
  position: fixed;
  top: 0;
  bottom: 0;
  color: white;
  left: 10%;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 5px;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const Phone = styled(PhoneIcon)`
  width: 15px;
  height: 15px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .PhoneText {
    width: 144px;
    height: 18px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const Email = styled(EmailIcon)`
  width: 15px;
  height: 15px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .EmailText {
    width: 221px;
    height: 18px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const Instagram = styled(InstagramIcon)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 15%;
  width: 300px;
  color: white;
  z-index: 100;
  list-style: none;
  padding: 5px;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const Facebook = styled(FacebookIcon)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 20%;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const HeaderMiddle = styled.div`
  position: absolute;
  width: 100%;
  height: 98px;
  left: 0px;
  top: 31px;

  background: #ffffff;
`;

export const NavBar = styled.div`
  position: absolute;
  width: 100%;
  height: 62px;
  left: 0px;
  top: 129px;
  background: #ffffff;
  border: 0.5px solid #116568;
`;

export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  // z-index: 1;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 54px;

  position: absolute;
  width: 633px;
  height: 17px;
  left: 160px;
  top: 22px;
`;
