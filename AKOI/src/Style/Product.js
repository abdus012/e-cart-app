import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";
export const HeartLogo = styled(FavoriteBorderOutlinedIcon)``;

export const PhotoFrame = styled.div`
  position: absolute;
  width: 183px;
  height: 183px;
  left: 31.14px;
  top: 21px;

  background: url(logo192.png);
`;

export const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: absolute;
  width: 916px;
  height: 374px;
  left: 0px;
  top: 66px;
`;

export const PaginationCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;

  position: absolute;
  width: 390px;
  height: 32px;
  left: 324px;
  top: 95%;
`;

export const Offer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 94px;
  height: 17px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  .DiscountedPrice {
    width: 33px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #000000;

    mix-blend-mode: normal;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .offer {
    width: 53px;
    height: 14px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.03em;

    color: #10b981;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const MRP = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 9px;

  width: 71px;
  height: 14px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .MRP {
    width: 27px;
    height: 14px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    color: rgba(0, 0, 0, 0.42);

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .ActualPrice {
    width: 35px;
    height: 14px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: line-through;

    color: rgba(0, 0, 0, 0.42);

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const ProductName = styled.div``;
export const MRPCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 6px;

  width: 77px;
  height: 18px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .Lined {
    width: 18px;
    height: 0px;

    border: 1px solid #959d9d;
    transform: rotate(90deg);

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const PriceAndDiscountCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  gap: 18px;

  width: 189px;
  height: 18px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const ProductDescription2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 214px;
  height: 71px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .productname {
    width: 214px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.03em;

    color: #000000;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const RatingNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 5px;

  position: absolute;
  width: 36px;
  height: 16px;
  left: 8px;
  top: 2px;
  p {
    width: 17px;
    height: 14px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;

    mix-blend-mode: normal;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const RatingCard = styled.div`
  width: 52px;
  height: 20px;

  background: #10b981;
  border-radius: 2px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RactingReviewCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 11px;

  width: 130px;
  height: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ProductDescriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 214px;
  height: 71px;
  left: 8px;
  top: 204px;
`;

export const BuyNowBtnCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 20px;
  gap: 10px;
  position: absolute;
  height: 37px;
  left: 3.23%;
  right: 51.61%;
  bottom: 14px;
  cursor: pointer;
  background: #45c2c6;
  border-radius: 6px;
  .BuyNowText {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;

    letter-spacing: 0.03em;

    color: #ffffff;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const TextAddCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 75px;
  height: 17px;
  left: 9px;
  top: 10px;
  p {
    width: 74px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.03em;

    color: #23cacf;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const AddCartBtnCard = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  height: 37px;
  left: 51.21%;
  right: 3.63%;
  bottom: 14px;

  border: 0.839394px solid #23cacf;
  border-radius: 6px;
`;

export const LikedCard = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 0px;

  background: #e8eced;
`;

export const SingleProductCard = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 208px;
  height: 374px;

  background: #f7f9f9;
  border: 0.860294px solid #e8eced;
  border-radius: 6px;
`;

export const BestSellerHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 745px;

  position: absolute;
  width: 492px;
  height: 48px;
  left: 27px;
  top: 0px;
  h3 {
    width: 194px;
    height: 29px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    color: #363636;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const BestSeller = styled.div`
  position: absolute;
  width: 100%;
  height: 440px;
  left: 11px;
  top: 15px;
`;

export const Container = styled.div`
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;

  position: relative;
  width: 85%;
  height: 550px;
  left: 132px;
  top: 633px;

  background: #ffffff;
  border: 1px solid #e8eced;
  border-radius: 6px;
`;
