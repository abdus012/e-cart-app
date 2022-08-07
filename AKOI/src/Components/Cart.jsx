import React from "react";
// import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import { removeCart } from "../redux/Cart/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  Container,
  ItemsInCart,
  TotalPayable,
  LeftButton,
  RightButton,
  MRPDiscount,
  PercentDiscoutMsg,
  PercentMsg,
  TotalMRP,
  DiscountCalc,
  TextPayable,
  TotalSaved,
  MRPTotalDiscountShipping,
  Spacing,
  DustbinBtn,
  TextCheckout,
  TextViewCart,
  CheckoutProductCard,
  CheckoutProductDetails,
  CheckoutProductDetail,
  CheckoutProductList,
  CheckoutProductPic,
} from "../Style/Cart";

function Cart(setShowMenu) {
  const data = useSelector((state) => state.Cart.cart);
  let AverageDiscount = 0;

  const remove = (id) => {
    dispatch(removeCart(id));
  };
  let totalSaving = 0;
  let PriceWithoutDiscount = 0;
  let totalCartVal = 0;
  data.forEach((element, i) => {
    PriceWithoutDiscount += data[i].id.price;
    totalCartVal +=
      data[i].id.price - (data[i].id.price * data[i].id.off) / 100;
  });
  AverageDiscount =
    (100 * (PriceWithoutDiscount - totalCartVal)) / PriceWithoutDiscount;
  if (isNaN(AverageDiscount)) {
    AverageDiscount = 0;
  }
  totalSaving = PriceWithoutDiscount - totalCartVal;
  const navigate = useNavigate();

  // const done = () => {
  //   alert("Congratulation your order is placed");
  // };
  const dispatch = useDispatch();
  function handleClick() {
    navigate("/");
  }
  return (
    <Container>
      <ItemsInCart>
        {data.map((item) => {
          console.log(item);
          return (
            <CheckoutProductList>
              <CheckoutProductPic>
                <img className="CheckoutProdPic" src={item.id.images} />
              </CheckoutProductPic>
              <CheckoutProductCard>
                <CheckoutProductDetails>
                  <CheckoutProductDetail>
                    <p className="ProductTitle">{item.id.name}</p>
                  </CheckoutProductDetail>
                  <p className="ProductPrice">
                    {item.id.price - (item.id.price * item.id.off) / 100}
                  </p>
                </CheckoutProductDetails>
                <DustbinBtn className="" onClick={() => remove(item.id)}>
                  Remove
                </DustbinBtn>
              </CheckoutProductCard>
            </CheckoutProductList>
          );
        })}
      </ItemsInCart>
      <Spacing></Spacing>
      <MRPTotalDiscountShipping>
        <TotalMRP>
          <p className="TextTotalMRP">Total MRP</p>
          <p className="TextMRP">{totalCartVal}</p>
        </TotalMRP>
        <DiscountCalc>
          <p className="RedMsg">-{Math.ceil(totalSaving)}</p>
          <PercentDiscoutMsg>
            <p className="TitleDiscount">Total Discount</p>
            <PercentMsg>
              <p className="PercentageMsg">
                {Math.ceil(AverageDiscount)}% Discount on MRP
              </p>
            </PercentMsg>
          </PercentDiscoutMsg>
        </DiscountCalc>
        <MRPDiscount>
          <p className="TextShipping">Shipping Charges </p>
          <p className="TextFree">FREE</p>
        </MRPDiscount>
      </MRPTotalDiscountShipping>

      <TotalPayable>
        <p className="price">{totalCartVal}</p>
        <TextPayable>
          <p className="TextTotalPayable">Total Payable</p>

          <TotalSaved>
            <p className="TextSavings">You save ₹{Math.ceil(totalSaving)}</p>
          </TotalSaved>
        </TextPayable>
      </TotalPayable>

      <LeftButton>
        <TextViewCart>
          <p className="BtnViewCart">View Cart</p>
        </TextViewCart>
      </LeftButton>
      <RightButton>
        <TextCheckout>
          <p className="BtnCheckout">Checkout</p>
        </TextCheckout>
      </RightButton>
    </Container>
  );
}

export default Cart;
