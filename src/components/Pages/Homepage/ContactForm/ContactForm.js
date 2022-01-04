import React from "react";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import './ContactForm.css';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="hello" />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}

























// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';



// const ContactForm = (props) => {
//     const form = useRef();
//     const [result, showResult] = useState(false);

//     const Result = () ={
//     return ( <p>Messsage Sent Succcessfully </p> )
// }

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_cloayx8', 'template_hwhkh9s', form.current, 'user_XUx2hs4Z7T8AVDRMbbqDr')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset();
//       showResult(true);
//   };
//     return (
//         <>
//           <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>  
//         </>
//     );
// };

// export default ContactForm;