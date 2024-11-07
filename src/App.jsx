import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import Nav from "./components/Nav/nav";

function App() {
  return (
    <>
      <Nav />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
