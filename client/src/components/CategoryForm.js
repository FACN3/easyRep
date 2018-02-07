import React from 'react';

const CategoryForm = props => {
  return (
    <div className="mw7 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-50 w-50-ns pa2 ">
          <button className="hover-bg-orange bg-white pv4 h4 w4 br4">
            <label className="f4 black">Fire</label>
            <br />

            <img
              alt=""
              className="h3 w3 tc"
              src="https://cdn0.iconfinder.com/data/icons/large-weather-icons/512/Heat.png"
            />
          </button>
        </div>
        <div className="fl w-50 w-50-ns pa2">
          <button className=" hover-bg-orange bg-white pv4 h4 w4 br4">
            <label className="f4 black">Fire</label>
            <br />

            <img
              alt=""
              className=" h3 w3 tc"
              src="https://cdn0.iconfinder.com/data/icons/large-weather-icons/512/Heat.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
