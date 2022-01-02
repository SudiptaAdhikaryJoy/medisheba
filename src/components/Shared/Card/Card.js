import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

const Card = ({ data }) => {
  const history = useHistory();

  return (
    <div className="card-wrapper bg-white shadow-md">
      <img src={data.image} alt={data.name} className="card-img" />
      <div className="card-content">
        <p className="text-3xl mt-3">{data.name}</p>
        <p className="text-lg my-2">Published: {data.published}</p>
        <p className="text-xl">
          &#36; <span className="text-2xl">{data.price}</span>
        </p>
        <button
          className="regular-btn mt-3"
          onClick={() => history.push(`/order/${data._id}`)}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Card;
