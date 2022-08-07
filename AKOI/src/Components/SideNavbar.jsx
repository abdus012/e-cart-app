import React from "react";
import {
  SideNavbarCard,
  PopularityCollection,
  ArrowDropDown,
} from "../Style/SideNavbar";

function SideNavbar(setShowMenu) {
  return (
    <SideNavbarCard>
      <PopularityCollection>
        <p className="SortPopularity">Sort By: Popularity</p>
        <p className="Discount">Discount</p>
        <p className="NewArrivals">New Arrivals</p>
        <p className="LowtoHigh">Price -- Low to High</p>
        <p className="HightoLow">Price -- High to Low</p>
        <p className="Popularity">Popularity</p>
        <ArrowDropDown />
      </PopularityCollection>
    </SideNavbarCard>
  );
}

export { SideNavbar };
