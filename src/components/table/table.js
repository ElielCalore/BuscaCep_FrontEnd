export function Table({ cep, messageBody }) {
  return (
    <div className=" d-flex flex-column justify-content-around w-75">
      <div className="bg-dark h5 p-2 text-white d-flex flex-row justify-content-between">
        {messageBody.map((current) => {
          return (
            <div key={current.info} className="m-1">
              {current.info}
            </div>
          );
        })}
      </div>
      <div className="bg-light p-2 text-dark d-flex flex-row justify-content-between align-items-center p-1 ">
        <div>{cep.logradouro !== "" ? cep.logradouro : " not found "} </div>
        <div>{cep.bairro !== "" ? cep.bairro : "not found"}</div>
        <div>{cep.localidade}</div>
        <div>{cep.uf}</div>
        <div>{cep.ibge}</div>
        <div>{cep.ddd}</div>
      </div>
    </div>
  );
}
