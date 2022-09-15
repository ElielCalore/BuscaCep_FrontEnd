import React from "react";
import axios from "axios";

export function SearchBar({ search, setCep, setSearch}) {

  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
        try{
          const response= await axios.get(`http://localhost:3001/cep/read/${search}`);
          setCep(response.data)
        }
      catch (error) {
          console.log(error);
          alert("CEP INVALIDO");
      }
  }

  return (
    <>
      <div>
          <div className="d-flex flex-row">
           <input onChange={handleChange} type="number" className="form-control" placeholder="Digite seu Cep Aqui..."/>
           <button onClick={handleSubmit} className="btn btn-dark" type="button">Pesquise</button>
          </div>
      </div>

    </>
  );
}
