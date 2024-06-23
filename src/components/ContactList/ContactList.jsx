import css from "../ContactList/ContactList.module.css";

import { useSelector,useDispatch } from "react-redux";
import { fetchItems } from "../../redux/contactOps";
import { useEffect } from "react";
import Contact from "../Contact/Contact";

import { selectItems, selectLoading, selectError, selectFilteredContacts } from "../../redux/contactsSlice";
import SearchBox from "../SearchBox/SearchBox";

const ContactList = () => {
  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filterItems = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchItems());
  }, [dispatch]);


  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error:{error.messege}</h2>}
      {items && (
        <ul className={css["contact-list"]}>
          {filterItems.map((item) => {
            <Contact key={item.id} item={item} />;
            <SearchBox />;

          })}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
