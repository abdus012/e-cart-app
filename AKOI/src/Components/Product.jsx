import { useState, useEffect } from "react";
import React from "react";
import "../Style/product.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../redux/storeData/action";
import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";
import {
  Container,
  BestSeller,
  BestSellerHeading,
  RowContainer,
  RatingNumber,
  PriceAndDiscountCard,
  MRP,
  MRPCard,
  ProductDescriptionCard,
  ProductDescription2,
  ProductName,
  Offer,
  RactingReviewCard,
  PaginationCard,
  AddCartBtnCard,
  TextAddCard,
  PhotoFrame,
  BuyNowBtnCard,
  SingleProductCard,
  LikedCard,
  HeartLogo,
  RatingCard,
} from "../Style/Product";
// import {useNavigate,useParams} from 'react-router';
import { addCart } from "../redux/Cart/action";

const ProductPage = () => {
  // const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  let discountedPriceArr = [];
  const fetchData = async () => {
    return axios({
      url: `http://localhost:5000/api/allProducts`,
      method: "GET",
      params: {},
    })
      .then((response) => {
        
        dispatch(storeData(response.data.product));
      })

      .catch((error) => {});
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  let data = [];
  data = useSelector((state) => state.Data.data);
  data.forEach((element, i) => {
    let discounted_price = element.price - (element.price * element.off) / 100;
    discountedPriceArr.push(discounted_price);
  });

  const Send = (e) => {
    console.log(e);
    dispatch(addCart(e));
  };

  return (
    <Container>
      <BestSeller>
        <BestSellerHeading>
          <h3>Best Seller</h3>
        </BestSellerHeading>
      </BestSeller>
      <RowContainer>
        {data.map((a, i) => {
          return (
            <SingleProductCard key={a.id}>
              <LikedCard>
                <HeartLogo></HeartLogo>
              </LikedCard>
              <PhotoFrame></PhotoFrame>
              <AddCartBtnCard
                onClick={() => {
                  Send(a);
                }}
              >
                <TextAddCard>
                  <p>Add to cart</p>
                </TextAddCard>
              </AddCartBtnCard>
              <BuyNowBtnCard>
                <p className="BuyNowText">BuyNow</p>
              </BuyNowBtnCard>
              <ProductDescriptionCard>
                <ProductDescription2>
                  <RactingReviewCard>
                    <RatingCard>
                      <RatingNumber>
                        <p>{a.rating}</p>
                      </RatingNumber>
                    </RatingCard>
                  </RactingReviewCard>
                  <p className="productname">{a.name}</p>
                  <PriceAndDiscountCard>
                    <MRPCard>
                      <MRP>
                        <p className="MRP">MRP</p>
                        <p className="ActualPrice">{a.price}</p>
                      </MRP>
                      <h5 className="Lined"></h5>
                    </MRPCard>
                    <Offer>
                      <p className="DiscountedPrice">{discountedPriceArr[i]}</p>
                      <p className="offer">{a.off}% OFF</p>
                    </Offer>
                  </PriceAndDiscountCard>
                </ProductDescription2>
              </ProductDescriptionCard>
              <ProductName></ProductName>
            </SingleProductCard>
          );
        })}
      </RowContainer>
      <PaginationCard>
        <Box py={4} display="flex" justifyContent="center">
          <Pagination count={5} shape="rounded" />
        </Box>
      </PaginationCard>
    </Container>
  );
};

export { ProductPage };
