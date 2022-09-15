import {useState } from "react";
import {SearchBar} from "../src/components/search/index";
import "./app.css"

function App() {
  const [search, setSearch] = useState();
  const [cep, setCep] = useState({
    localidade: "",
    logradouro: "",
    cep: "",
    uf:"",
    ibge:"",
    ddd:""
  });
  
  return (
    
    
    <div className="d-flex flex-column align-items-center mt-5">
      
      <div className="d-flex flex-row mb-3">
          <h1 className="text-primary">B</h1>
          <h1 className="text-danger">u</h1>
          <h1 className="text-info">s</h1>
          <h1 className="text-primary">c</h1>
          <h1 className="text-danger">a</h1>
          <h1 className="text-primary">r</h1>
          <h1 className="text-danger">C</h1>
          <h1 className="text-info">e</h1>
          <h1 className="text-primary">p</h1>
      </div>

      <div className="search mb-5">
        <SearchBar search={search} setSearch={setSearch} setCep={setCep} cep={cep} />
      </div>
      
      <div>
    
        <table className="table ">

        <thead> 
            <tr className="table-dark text-white text-center">
            <th>Localidade</th>
            <th>Logradouro</th>
            <th>Cep</th>
            <th>UF</th>
            <th>IBGE</th>
            <th>DDD</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{cep.localidade}</td>
            <td>{cep.logradouro}</td>
            <td>{cep.bairro}</td>
            <td>{cep.uf}</td>
            <td>{cep.ibge}</td>
            <td>{cep.ddd}</td>
          </tr>
        </tbody>
      </table>
      
      </div>
      
    </div>
    

    
  );
}

export default App;
