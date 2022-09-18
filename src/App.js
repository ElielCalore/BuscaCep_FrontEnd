import { useState } from "react";
import { Search } from "../src/components/search/index";
import { Table } from "./components/table/table";
import { Title } from "./components/title/title";
import { messageBody } from "./utils/body";
import { message } from "./utils/utils";

function App() {
  const [search, setSearch] = useState();
  const [cep, setCep] = useState({});

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Title message={message} />
      <Search search={search} setSearch={setSearch} setCep={setCep} />
      <Table cep={cep} messageBody={messageBody} />
    </div>
  );
}

export default App;
