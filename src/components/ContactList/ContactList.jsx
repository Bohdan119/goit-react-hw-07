import css from "../ContactList/ContactList.module.css";

import { useSelector,useDispatch } from "react-redux";
import { fetchItems } from "../../redux/contactOps";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
// selectFilteredContacts; 
import { selectItems, selectLoading, selectError, } from "../../redux/contactsSlice";
import {deleteItem} from '../../redux/contactOps'

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
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error: {error.message}</h2>}
      {items && (
        <ul className={css["contact-list"]}>
          <Contact handleDelete={handleDelete} items={items} />
        </ul>
      )}
    </div>
  );
}

export default ContactList;
