import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { api } from "../../services/api";

export function Search({ search, setCep, setSearch }) {
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    const limit = 8;
    setSearch(e.target.value.slice(0, limit));
  }

  async function handleSubmit() {
    try {
      setTimeout(async () => {
        setLoading((prevState) => !prevState);

        const response = await api.get(`/cep/read/${search}`);
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
        <Input handleChange={handleChange} search={search} />
        <Button search={search} handleSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
}
