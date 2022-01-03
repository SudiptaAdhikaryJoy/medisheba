import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://medi-sheba-backend.herokuapp.com/services?fbclid=IwAR3Eu13S7AEHpqDK5LGGwROc8wfX6F83yv2cOLfq4m4gYibjUDZoEVarNkg"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="grid justify-items-center items-start md:px-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 md:space-y-0 container">
        {services.map((service) => {
          return (
            <section class="text-gray-600 body-font hover:border hover:border-cyan-900 drop-shadow-md">
              <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                  <div class="mb-10 px-4">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src={service?.image}
                      />
                    </div>
                    <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                      {service?.name}
                    </h2>
                    <p class="leading-relaxed text-base">
                      {service?.description}
                    </p>
                    <p>
                      {service?.rating?.rate}{" "}
                      <span>{service?.rating?.count}</span>
                    </p>

                    <NavLink
                      to={`/requestService/${service?._id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      <button class="flex mx-auto mt-6 text-white bg-cyan-500 border-0 py-2 px-5 focus:outline-none hover:bg-cyan-600 rounded">
                        Details
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
