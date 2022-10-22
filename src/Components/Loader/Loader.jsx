import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="mt-5">
      <div className="loader-card d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
