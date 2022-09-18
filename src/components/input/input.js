export function Input({ handleChange, search }) {
  return (
    <div>
      <input
        onChange={handleChange}
        type="number"
        className="form-control"
        placeholder="Digite seu Cep Aqui..."
        value={search || ""}
      />
    </div>
  );
}
