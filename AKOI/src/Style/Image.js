import styled from "styled-components";

export const NavPhoto = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 28px;
  height: 10px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  .p {
    box-sizing: border-box;

    width: 10px;
    height: 10px;

    border: 2px solid #116568;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const FramePhoto = styled.div`
  width: 90%;
  height: 300px;

  background-image: url("logo192.png");

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 95%;
  height: 322px;
  left: 31px;
  top: 259px;
`;
