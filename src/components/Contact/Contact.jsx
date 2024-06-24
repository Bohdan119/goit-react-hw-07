import { useEffect } from "react";
import css from "../Contact/Contact.module.css";

import { useDispatch, useSelector } from "react-redux"
import { fetchItems, deleteItem } from "../../redux/contactOps";
import { selectItems } from "../../redux/contactsSlice";


const Contact = () => {
  const items = useSelector(selectItems)
  console.dir(items);
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      fetchItems(fetchItems())
    );
  }, [dispatch])
  
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  

  return (
    <div>
      {items.map((item) => (
        <li key={item.id} className={css["contact-item"]}>
          <span className={css["contact-name"]}>{item.name}</span>
          <span className={css["contact-number"]}>tel.{item.number}</span>
          <button className={css["button-delete"]} onClick={()=>handleDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default Contact;