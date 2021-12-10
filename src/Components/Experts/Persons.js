import React from "react";
import { Twitter, Google, Youtube } from "react-bootstrap-icons";

export default function Persons({ imgUrl, personName, job }) {
  return (
    <div className="col-md-3 col-sm-6 main-person">
      <div className="person-area">
        <img className="img-fluid person-img" src={imgUrl} alt="Loading..." />
        <div className="person-info text-center">
          <h6 className="name">{personName}</h6>
          <p className="position">{job}</p>
        </div>
        <div className="person-social">
          <div className="d-flex justify-content-center align-items-center social-icons">
            <Twitter size="30px" />
            <Youtube size="30px" />
            <Google size="30px" />
          </div>
        </div>
      </div>
    </div>
  );
}
