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

 // Supprimer une donnée du localStorage
 const handleDelete = (index) => {
  const newData = [...data]; // Créer une copie des données
  newData.splice(index, 1); // Supprimer l'élément à l'index spécifié
  localStorage.setItem('mydata', JSON.stringify(newData)); // Mettre à jour les données dans le localStorage
  setData(newData); // Mettre à jour l'état avec les nouvelles données
};


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
            <Link className="delete-btn" onClick={()=>handleDelete(index)}>Delete</Link>
          </div>
        ))
      ) : (
        
        <p>Pour le moment Aucun Mot de Passe</p>
      )}
    </div>
  );
}

export default DisplayPassword
