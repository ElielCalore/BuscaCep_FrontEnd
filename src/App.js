import {useState } from "react";
import {SearchBar} from "../src/components/search/index";

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
    <div>
      <div className="search">
        <SearchBar search={search} setSearch={setSearch} setCep={setCep} cep={cep} />
      </div>
      <div>
        <h1>LOCALIDADE: {cep.localidade}</h1>
        <p>LOGRADOURO: {cep.logradouro}</p>
        <p>CEP: {cep.bairro}</p>
        <p>UF: {cep.uf}</p>
        <p>IBGE: {cep.ibge}</p>
        <p>DDD: {cep.ddd}</p>
      </div>
      
    </div>
  );
}

export default App;
