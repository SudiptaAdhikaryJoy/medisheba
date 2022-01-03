import axios from "axios";
import React from "react";
import Rating from "react-rating";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Preloader from "../../Shared/Preloader/Preloader";

const OrderItem = ({ url }) => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const { id } = useParams();
  const location = useLocation();

  React.useState(() => {
    setLoading(true);
    axios.get(`${url}/${id}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    document.title = `${data.name ? data.name : "Order"} | MediSheba`;
  }, [data]);

  console.log(data);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div className="mr-5 flex">
              <img
                src={data?.image}
                alt={data?.name}
                style={{ width: "100%" }}
              />
            </div>
            <div className="self-center">
              <p className="text-5xl mb-2">{data?.name}</p>
              <p className="text-2xl mb-2">
                &#36; <span className="text-3xl mb-2">{data?.price}</span>
              </p>
              {location.pathname.split("/")[1] === "orderMedicine" && (
                <p className="text-2xl mb-2">Published At: {data?.published}</p>
              )}
              <div className="flex align-center mb-2">
                <Rating
                  initialRating={data?.rating?.rate}
                  readonly
                  fullSymbol="fas fa-star"
                  emptySymbol="far fa-star"
                  style={{
                    color: "#FFDF00",
                    marginRight: "5px",
                    fontSize: "18px",
                  }}
                />
                <p style={{ fontSize: "18px" }}>({data?.rating?.count})</p>
              </div>
              <p className="text-slate-700 mb-5">{data?.description}</p>
              <button className="regular-btn">Order Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
