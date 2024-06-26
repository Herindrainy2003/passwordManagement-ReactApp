import { BiLogInCircle } from "react-icons/bi";
import "./Displaypassword.css";
import DisplayPassword from "../DisplayPassword/Components/DisplayPassword";
import AddPassword from "../AddPassword";
import PasswordGenerate from "../PasswordGenerate";
import { useState } from "react";



function Layouts() {
  const [Form, setForm] = useState(false);
  const [card, setCard] = useState(false);
  return (

    <aside>

      {/**L'affichage des mot de passe */}
      <div className="container">
        <DisplayPassword />
      </div>

      {/**Les deux boutons */}
      <section>
        <button onClick={() => setForm(!Form)}>AJOUTEZ</button>
        <button onClick={() => setCard(!card)}  >GENERER</button>
      </section>

      {/**Les formulaires d'ajout */}
      <div className="form-container">
        {
          (Form ? <AddPassword  /> : null)
        }
      </div>


      {/**Les mot de passe generer  */}

      <article>
        {
          (card ? <PasswordGenerate /> : null)
        }
      </article>
    
      
    </aside>

  )
}

export default Layouts;
