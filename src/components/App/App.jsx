import ContactList from "../ContactList/ContactList.jsx";
// import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
// import PageCont from "../../PageCont";
import "./App.css";

function App() {
  
  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm/> */}
      <SearchBox />
      <ContactList/>
      {/* <PageCont/> */}
    </>
  );
}

export default App;
