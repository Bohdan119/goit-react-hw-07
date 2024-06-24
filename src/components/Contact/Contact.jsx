import css from "../Contact/Contact.module.css";
import PropTypes from 'prop-types'

import { selectFilteredItems } from '../../redux/contactsSlice';
import { useSelector } from "react-redux";


const Contact = ({ items, handleDelete }) => {

    const filteredItems = useSelector(selectFilteredItems);

  return (
    <div>
      {items &&
        filteredItems.map((item) => (
          <li key={item.id} className={css["contact-item"]}>
            <span className={css["contact-name"]}>{item.name}</span>
            <span className={css["contact-number"]}>tel.{item.number}</span>
            <button
              className={css["button-delete"]}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </div>
  );
}
Contact.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default Contact;