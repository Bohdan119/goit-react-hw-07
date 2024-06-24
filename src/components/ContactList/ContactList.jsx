import css from "../ContactList/ContactList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
// import ContactForm from "../ContactForm/ContactForm";

import {
  selectItems,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import {fetchItems, deleteItem} from '../../redux/contactOps'

const ContactList = () => {
  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();



  useEffect(() => { 
    dispatch(fetchItems());
  }, [dispatch]);

    const handleDelete = (id) => {
      dispatch(deleteItem(id));
  };

  return (
    <div>
      {/* <ContactForm/> */}
      {error && <h2>Error: {error.message}</h2>}
        <ul className={css["contact-list"]}>
          <Contact handleDelete={handleDelete} items={items} />
      {loading && <h2>Loading...</h2>}
        </ul>
      
    </div>
  );
}

export default ContactList;
