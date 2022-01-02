import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Preloader from "../../Shared/Preloader/Preloader";

const OrderItem = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const { id } = useParams();

  React.useState(() => {
    setLoading(true);
    axios
      .get(`https://medi-sheba-backend.herokuapp.com/getOneMedicine/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div className="mr-5 flex">
              <img src={data.image} alt={data.name} style={{ width: "100%" }} />
            </div>
            <div className="self-center">
              <p className="text-5xl mb-2">{data.name}</p>
              <p className="text-2xl mb-2">
                &#36; <span className="text-3xl mb-2">{data.price}</span>
              </p>
              <p className="text-2xl mb-2">Published At: {data.published}</p>
              <p className="text-slate-700 mb-5">{data.description}</p>
              <button className="regular-btn">Order Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
