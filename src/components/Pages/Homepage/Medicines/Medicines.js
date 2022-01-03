import axios from "axios";
import React from "react";
import Card from "../../../Shared/Card/Card";
import Preloader from "../../../Shared/Preloader/Preloader";
import "../../../../App.css";

const Medicines = () => {
  const [medicines, setMedicines] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [loadText, setLoadText] = React.useState("Load More");

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://medi-sheba-backend.herokuapp.com/medicines?limit=6`)
      .then((res) => {
        setMedicines(res.data);
        setLoading(false);
      });
  }, []);

  const loadRestMedicines = () => {
    setLoadText("Loading....");
    axios
      .get("https://medi-sheba-backend.herokuapp.com/medicines")
      .then((res) => setMedicines(res.data));
  };

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto py-5">
        <h1 className="text-5xl my-10">Medicines</h1>
        {loading ? (
          <Preloader></Preloader>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {medicines.map((data) => (
                <Card
                  key={data._id}
                  data={data}
                  url={`/orderMedicine/${data._id}`}
                ></Card>
              ))}
            </div>
            {medicines.length <= 6 && (
              <div className="flex justify-center py-5">
                <button className="regular-btn" onClick={loadRestMedicines}>
                  {loadText}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Medicines;
