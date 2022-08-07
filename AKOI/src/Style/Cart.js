import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import styled from "styled-components";

export const DustbinBtn = styled(DeleteOutlineOutlinedIcon)`
  width: 14px;
  height: 14px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const TextPayable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  gap: 2px;
  .TextTotalPayable {
    width: 83px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #678182;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  width: 128px;
  height: 45px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const TotalSaved = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
  gap: 10px;

  width: 148px;
  height: 26px;

  background: #ecfdf5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  .TextSavings {
    width: 108px;
    height: 14px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    color: #34d399;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const CheckoutProductList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 400px;
  height: 105px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const TotalPayable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 219px;

  position: absolute;
  width: 400px;
  height: 45px;
  left: 17px;
  top: 749px;
  .price {
    width: 33px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #344141;

    mix-blend-mode: normal;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const MRPDiscount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 258px;

  width: 0px;
  height: 17px;
  .TextFree {
    width: 14px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height */

    color: #34d399;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
  .TextShipping {
    width: 100px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height */

    color: #678182;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const ItemsInCart = styled.div`
  display: flex;
  /* background-color: blue; */
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  position: absolute;
  width: 400px;
  height: 516px;
  left: 11px;
  top: 28px;
`;

export const Spacing = styled.div`
  position: absolute;
  height: 0px;
  left: 2.61%;
  right: 2.61%;
  top: 574px;

  border: 1px solid rgba(185, 199, 200, 0.38);
`;
export const Container = styled.div`
  z-index: 1;
  position: absolute;
  width: 422px;
  height: 900px;
  left: 870px;
  top: 109px;

  background-color: #e8eced;
  box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.12);
`;

export const LeftButton = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 11px 15px;
  gap: 10px;

  position: absolute;
  width: 186px;
  height: 48px;
  right: 219px;
  top: 824px;

  border: 1px solid #116568;
  border-radius: 6px;
`;

export const TextViewCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 66px;
  height: 18px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .BtnViewCart {
    width: 80px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.03em;

    color: #116568;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const RightButton = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 11px 15px;
  gap: 10px;

  position: absolute;
  width: 186px;
  height: 48px;
  right: 5px;
  top: 823px;

  background: #23cacf;
  border-radius: 6px;
`;

export const TextCheckout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 63px;
  height: 18px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .BtnCheckout {
    width: 63px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.03em;

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const MRPTotalDiscountShipping = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;

  position: absolute;
  width: 400px;
  height: 123px;
  left: 11px;
  top: 604px;
`;

export const TotalMRP = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 302px;

  width: 400px;
  height: 17px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .TextTotalMRP {
    width: 50px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #678182;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .TextMRP {
    width: 33px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #344141;

    mix-blend-mode: normal;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const DiscountCalc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 222px;

  width: 400px;
  height: 45px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  .RedMsg {
    width: 30px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #f87171;

    mix-blend-mode: normal;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const PercentDiscoutMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;

  width: 148px;
  height: 45px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .TitleDiscount {
    width: 190px;
    height: 17px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #678182;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const PercentMsg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
  gap: 10px;

  width: 198px;
  height: 26px;

  background: #ecfdf5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  .PercentageMsg {
    width: 130px;
    height: 14px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    color: #34d399;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const CheckoutProductPic = styled.div`
  width: 114px;
  height: 105px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .CheckoutProdPic {
    position: absolute;
    width: 105px;
    height: 105px;
    left: 4px;
    top: 0px;

    position: absolute;
    width: 114px;
    height: 104px;
    left: 0px;
    top: 1px;

    background: #f5f5f5;
    border-radius: 6px;
  }
`;

export const CheckoutProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 25px;

  width: 282px;
  height: 103px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CheckoutProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-right: 0px;
  gap: 49px;

  width: 282px;
  height: 56px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .ProductPrice {
    width: 35px;
    height: 14px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 14px;

    color: rgba(0, 0, 0, 0.42);

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const CheckoutProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 200px;
  height: 56px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  .ProductTitle {
    width: 219px;
    height: 32px;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    /* or 16px */

    letter-spacing: 0.03em;

    color: #344141;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
