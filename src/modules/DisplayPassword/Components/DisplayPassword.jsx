import React, { useState } from 'react'
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import data from '../data/data';


function DisplayPassword() {
  const [type, setType] = useState('password');

  function typeSubmit() {
    (type == 'password') ? setType('text') : setType('password');
  }

  return (

    <div>
      <h3>Vos Mot de Passe</h3>

      {/* Item 1 */}

      {
        data.map((datas, index) => {
          return (
            <div className="item" key={index}>
              <p>{datas.domaine}</p>
              <input type={type} value={datas.password} />
              <AiFillEye className="eyes" onClick={typeSubmit} />
              <Link className="delete-btn">Delete</Link>
            </div>
            
          )

        })
      }

     

      {/* Item 2 */}
      {/* <div className="item">
        <p>Watsapp</p>
        <input type={type} value="djvfd454df4bd" />
        <AiFillEye className="eyes" onClick={typeSubmit} />
      </div>
      <Link className="delete-btn">Delete</Link> */}

      {/* Item3  */}
      {/* <div className="item">
        <p>GitHub</p>
        <input type={type} value="123456" />
        <AiFillEye className="eyes" onClick={typeSubmit} />
      </div>
      <Link className="delete-btn">Delete</Link> */}

    </div>
  )
}

export default DisplayPassword
