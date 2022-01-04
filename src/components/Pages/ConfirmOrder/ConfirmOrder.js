import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Preloader from "../../Shared/Preloader/Preloader";
import content from "./form";
import Styles from "./ConfirmOrder.module.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Please enter your name"),
    address: yup.string().required("Please enter your address"),
    number: yup.string().required("Please enter your contact number").min(11),
    gender: yup
      .object()
      .shape({
        label: yup.string().required("Please enter your gender"),
        value: yup.string().required("Please enter your gender"),
      })
      .nullable()
      .required("Please enter your gender"),
  })
  .required();

const ConfirmOrder = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderText, setOrderText] = useState("Confirm Order");
  const [success, setSuccess] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);

  const { confirmId } = useParams();

  useEffect(() => {
    document.title = "Confirm Order | MediSheba";
    setLoading(true);
    axios
      .get(
        `https://medi-sheba-backend.herokuapp.com/getOneMedicine/${confirmId}`
      )
      .then((res) => {
        setOrder(res.data);
        setLoading(false);
      });
  }, [confirmId]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setOrderText("Confirming Order...");
    setBtnDisable(true);

    const date = new Date();
    const newData = {
      ...data,
      find: {
        ...order,
      },
      date: date,
      orderId: data._id,
      gender: data.gender.value,
    };

    axios
      .post(`https://medi-sheba-backend.herokuapp.com/addMedicine`, newData)
      .then((res) => {
        if (res.status === 200) {
          reset();
          setOrderText("Order Confirmed!");
          setSuccess("Order added successfully!");
          setBtnDisable(true);
        } else {
          setOrderText("Error Occured!");
          setSuccess("There has been an error!");
          setBtnDisable(false);
        }
      });
  };

  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Prefer not to say", label: "Prefer not to say" },
  ];

  return (
    <>
      {loading ? (
        <>
          <div className="mt-16"></div>
          <Preloader></Preloader>
          <div className="mb-24"></div>
        </>
      ) : (
        <>
          <p className="text-4xl text-center mt-5">Please confirm Your Order</p>
          <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto my-10 gap-x-11">
            <div style={{ textAlign: "start" }}>
              <img
                src={order.image}
                alt={order.name}
                style={{ width: "100%" }}
              />
              <div className="mt-3">
                <p className="text-5xl">{order.name}</p>
                <div className="flex align-center mb-2">
                  <Rating
                    initialRating={order?.rating?.rate}
                    readonly
                    fullSymbol="fas fa-star"
                    emptySymbol="far fa-star"
                    style={{
                      color: "#FFDF00",
                      marginRight: "5px",
                      fontSize: "18px",
                    }}
                  />
                  <p style={{ fontSize: "18px" }}>({order?.rating?.count})</p>
                </div>
                <p className="text-gray-600">{order.description}</p>
              </div>
            </div>
            <div className="self-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                {content.inputs.map((input, key) => {
                  return (
                    <div key={key} style={{ marginTop: "10px" }}>
                      <p>
                        <label className={Styles.label}>{input.label} </label>
                      </p>
                      <p>
                        <input
                          type={input.type}
                          name={input.name}
                          className={Styles.input}
                          {...register(input.name)}
                          autoComplete="disabled"
                        />
                      </p>
                      <p className="text-rose-600 mt-1 text-base">
                        {errors[input.name]?.message}
                      </p>
                    </div>
                  );
                })}
                <div style={{ marginTop: "10px" }}>
                  <label className={Styles.label}>Gender</label>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isClearable
                        isSearchable={false}
                        className="react-dropdown"
                        classNamePrefix="dropdown"
                        options={options}
                      />
                    )}
                  />
                  <p className="text-rose-600 mt-1">
                    {errors.gender?.message || errors.gender?.label.message}
                  </p>
                </div>
                <button
                  className="regular-btn mt-5 "
                  type="submit"
                  disabled={btnDisable}
                >
                  {orderText}
                </button>
              </form>
              <p className="text-green-600 text-base  text-xl mt-3">
                {success}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmOrder;
