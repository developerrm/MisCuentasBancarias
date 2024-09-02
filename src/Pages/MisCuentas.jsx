import "./MisCuentas.css";

import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc, updateDoc } from "firebase/firestore";

function cuentaBancaira({ cuenta, updateEvent }) {
  return (
    <div
      key={cuenta.id}
      className={`card__MisCuentas ${cuenta.Nombre.toLowerCase()}`}
    >
      <div
        className="card__banco "
        onClick={() => updateEvent(cuenta.id, { Saldo: cuenta.Saldo + 10 })}
      >
        <div className="card__banco-labels">
          <p className=" card__banco-header important">Banco {cuenta.Nombre}</p>
          <br />
          <p>Saldo Disponible</p>
          <p className="money important">${cuenta.Saldo}</p>
        </div>
      </div>
    </div>
  );
}

export function MisCuentas() {
  const [data, setData] = useState([]);

  const updateData = async (documentId, updatedData) => {
    try {
      const docRef = doc(db, "CuentasBancarias", documentId);
      await updateDoc(docRef, updatedData);
      console.log("Document updated successfully!");
      ObtenerCuentasBancarias();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const ObtenerCuentasBancarias = async () => {
    const querySnapshot = await getDocs(collection(db, "CuentasBancarias"));
    const dataArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(dataArray);
  };

  useEffect(() => {
    ObtenerCuentasBancarias();
    // console.log(data);
  }, []);

  return (
    <div style={{ display: "block" }}>
      <p className="header">Mis Cuentas</p>
      <div className="contenedor__MisCuentas">
        {data.map((cuenta) => {
          return cuentaBancaira({ cuenta, updateEvent: updateData });
        })}
        {/* <div className="card__MisCuentas pacifico">
          <div className="card__banco">
            <div className="card__banco-labels">
              <p className=" card__banco-header important">Banco Pacifico</p>
              <br />
              <p>Saldo Disponible</p>
              <p className="money important">$311.28</p>
            </div>
          </div>
        </div>
        <div className="card__MisCuentas produbanco">
          <div className="card__banco">
            <div className="card__banco-labels">
              <p className=" card__banco-header important">Banco Produbanco</p>
              <br />
              <p>Saldo Disponible</p>
              <p className="money important">$311.28</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
