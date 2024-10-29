import React, { useState } from "react";

const FilterSidebar = () => {

  return (
    <div className="main">
      <div className="leftSide">
        <div className="leftText">
          <h3>Filters</h3>
        </div>
        <form>
          <label className="gsearch">
            <input
              className="input"
              type="search"
              name="gsearch"
              placeholder="search"
            />
          </label>
        </form>
        <div className="prices">
          <form>
            <div className="box">
              <fieldset className="inPrice">
                <legend className="left-head">Sort By Price</legend>
                <label>
                  <input
                    className="input1 inputs"
                    type="radio"
                    name="sortPrice"
                    value="lowToHigh" 
                  />
                  Low To High
                </label>
                <br />
                <label>
                  <input
                    className="input2 inputs"
                    type="radio"
                    name="sortPrice"
                    value="highToLow"
                  />
                  High To Low
                </label>
              </fieldset>
            </div>

            <div className="box">
              <fieldset className="inPrice">
                <legend className="left-head">Include Delivery Type</legend>
                <label>
                  <input
                    className="input1 inputs deliveryCheckbox ss"
                    type="checkbox"
                  />
                  Fast Delivery
                </label>
                <br />
                <label>
                  <input
                    className="input2 inputs dd"
                    type="checkbox"
                  />
                  In Stock
                </label>
              </fieldset>
            </div>

            <div className="box">
              <fieldset className="inPrice">
                <legend>Price Range</legend>
                <label className="price-range">
                  <p>Price Range</p>
                  <input
                    type="range"
                    className="slider"
                    min="5000"
                    max="200000"
                  />
                  <p>5000 -  ₹</p>
                </label>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
