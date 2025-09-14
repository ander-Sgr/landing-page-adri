import Nav from "./components/navbar/Nav"
import Hero from "./components/hero/Hero"
import { Services } from "./components/services/Services"
import ContactForm from "./components/contact/ContactForm"

function App() {

  return (

    <div className=" mx-0 my-0">
      <Nav />

      <Hero />

      <Services />

      <ContactForm />
    </div>
  )
}

export default App
