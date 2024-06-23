import { useEffect } from "react";
import css from "../Contact/Contact.module.css";

import { useDispatch, useSelector } from "react-redux"
import { fetchItems } from "../../redux/contactOps";
import { selectItems } from "../../redux/contactsSlice";

const Contact = () => {
  const item = useSelector(selectItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItems());
  },[dispatch])

  return (
    <li className={css["contact-item"]}>
        <div className={css["contact-box"]}>
          <span className={css["contact-name"]}>{item.name}</span>
          <span className={css["contact-number"]}>tel. {item.number}</span>
        </div>
        <button className={css["button-delete"]}>
          Delete
        </button>
    </li>
  )
}

export default Contact;