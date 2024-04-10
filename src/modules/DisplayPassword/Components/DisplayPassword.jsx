import React, { useEffect, useState } from 'react'
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";


function DisplayPassword() {
  const [type, setType] = useState('password');

  function typeSubmit() {
    (type == 'password') ? setType('text') : setType('password');
  }
  
 const [data ,setData] = useState([]);
 
  // Récupérer les données depuis le localStorage
 useEffect(() => {
  const storedData = JSON.parse(localStorage.getItem('mydata')) || [];
  setData(storedData);
}, []);

  return (
    <div>
      <h3>Vos Mot de Passe</h3>
      {/* Vérifier si les données sont disponibles */}
     
      {data && data.length > 0 ? (
        // Afficher les données si elles existent
        data.map((datas, index) => (
          <div className="item" key={index}>
            <p>{datas.domaine}</p>
            <input type={type} value={datas.password} readOnly />
            <AiFillEye className="eyes" onClick={typeSubmit} />
            <Link className="delete-btn">Delete</Link>
          </div>
        ))
      ) : (
        
        <p>Pour le moment Aucun Mot de Passe</p>
      )}
    </div>
  );
}

export default DisplayPassword
