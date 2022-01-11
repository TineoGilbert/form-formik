import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const MyForm = () => {
  const sendedForm = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Submitted form!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  /*const validate = (values) =>{
        const errors = {};

        if(!values.name){
            errors.name = 'Required';
        }

        return errors;
    }
*/

  //const nameRegExp = /^[a-zA-ZÀ-ÿ/s]{1,40}$/;

  // const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("The name field is required")
        .min(5, "Minimum 5 Characters")
        .max(25, "Maximum 25 Characters"),

      email: Yup.string()
        .required("The email field is required")
        .email("Enter a valid email"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      sendedForm();
      resetForm();
    },
  });

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            placeholder="Gilbert E. Tineo"
          />

          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="email@email.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit"> Send</button>
      </form>
    </>
  );
};

export default MyForm;
