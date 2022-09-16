import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

export function SearchBar({ search, setCep, setSearch }) {
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    const limit = 8;
    setSearch(e.target.value.slice(0, limit));
  }

  async function handleSubmit() {
    try {
      setTimeout(async () => {
        setLoading((prevState) => !prevState);

        const response = await axios.get(
          `http://localhost:3001/cep/read/${search}`
        );
        setCep(response.data);
      }, 1000);
      
      setLoading((prevState) => !prevState);
    } catch (error) {
      console.error(error);
      toast.error("CEP INVÁLIDO !!!");
    }
  }

  return (
    <div className="search mb-5">
      <Toaster />
      <div className="d-flex flex-row">
        <input
          onChange={handleChange}
          type="number"
          className="form-control"
          placeholder="Digite seu Cep Aqui..."
          value={search || ""}
        />
        <button
          disabled={!search || search?.length !== 8}
          onClick={handleSubmit}
          className="btn btn-dark"
          type="button"
        >
          {loading ? <ClipLoader
          size={20}
          color={"#00000"}
          loading={loading}
          speedMultiplier={1.5}
        /> : "Pesquisar"}
        </button>
      </div>
    </div>
  );
}
