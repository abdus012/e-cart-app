import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export const ArrowDropDown = styled(ArrowDropDownIcon)`
position: absolute;
width: 22px;
height: 22px;
right: 14px;
top: 13px;
`;

export const PopularityCollection = styled.div`
width: 256px;
height: 100%;
background: #FFFFFF;
border-radius: 6px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
.SortPopularity{
    position: absolute;
width: 138px;
height: 19px;
left: 12px;
top: 15px;

font-family: 'Lato',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 19px;

color: #04191A;
}
.Discount{
    position: absolute;
width: 64px;
height: 19px;
left: 22px;
top: 246px;

font-family: 'Lato',sans-serif;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 19px;

color: #4D6162;
}
.NewArrivals{
    position: absolute;
    width: 91px;
    height: 19px;
    left: 22px;
    top: 199px;
    
    font-family: 'Lato',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    
    color: #4D6162;
}
.LowtoHigh{
position: absolute;
width: 141px;
height: 19px;
left: 22px;
top: 152px;

font-family: 'Lato',sans-serif;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 19px;

color: #4D6162;
}
.HightoLow{
    position: absolute;
    width: 142px;
    height: 19px;
    left: 22px;
    top: 105px;
    
    font-family: 'Lato',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    
    color: #4D6162;
}
.Popularity{
    position: absolute;
    width: 73px;
    height: 19px;
    left: 22px;
    top: 58px;
    
    font-family: 'Lato',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    
    color: #4D6162;
}
`;

export const SideNavbarCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;
position: absolute;
width: 256px;
height: 70%;
left: 70px;
top: 633px;
border: 1px solid #E8ECED;
border-radius: 6px;
`;

