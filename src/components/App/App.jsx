import ContactList from "../ContactList/ContactList.jsx";
// import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import "./App.css";

function App() {
  
  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm/> */}
      <SearchBox />
      <ContactList/>
    </>
  );
}

export default App;
