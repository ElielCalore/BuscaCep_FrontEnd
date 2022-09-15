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
      <div className="col-lg-6">
          <div className="input-group">
           <input onChange={handleChange} match={"/^[0-9]{5}-[0-9]{3}$/"} maxLength="8" type="number" className="form-control" placeholder="Entre com a informação aqui..."/>
           <span className="input-group-btn">
            <button onClick={handleSubmit} className="btn btn-default" type="button">Pesquise</button>
           </span>
          </div>
      </div>

    </>
  );
}
