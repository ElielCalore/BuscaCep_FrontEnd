import { useState } from "react";
import { SearchBar } from "../src/components/search/index";
import { Table } from "./components/table/table";
import { message } from "./utils/utils";
import { Title} from "./components/title/title";

function App() {
  const [search, setSearch] = useState();
  const [cep, setCep] = useState({});

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Title message={message}/>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setCep={setCep}
      />
      <Table cep={cep} />
    </div>
  );
}

export default App;
