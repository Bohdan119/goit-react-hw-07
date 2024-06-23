import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useId } from "react";



const ContactForm = () => {

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be at most 50 characters")
      .required("Number is required"),
  });
    
    
    const dispatch = useDispatch();
    const numberId = useId();
    const nameId = useId();


    const handleContactForm = (values, actions) => {
      
        dispatch(addContact(values.name, values.number));
        actions.resetForm()
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleContactForm}
    >
        <Form className={css["form"]}>
          <div className={css["input-box"]}>
            <div className={css["input-element"]}>
                <label className={css["label"]} htmlFor={nameId}>Name</label>
                      
                <Field
                className={css["input"]}
                id={nameId}
                type="text"
                name="name"
                />
        </div>
                  
            <div className={css["input-element"]}>
                      
                <label className={css["label"]} htmlFor={numberId}>
                Phone number
                </label>
                      
                <Field
                className={css["input"]}
                id={numberId}
                type="text"
                name="number"
                />
              </div>
                  
            </div>

          <div>
            <button type="submit">
              Add Contact
            </button>
          </div>
        </Form>
    </Formik>
  );
};



export default ContactForm;
