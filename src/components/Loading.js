import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => ( //this displays the Loading Component while the LogIn processes are loading
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);


export default Loading;
