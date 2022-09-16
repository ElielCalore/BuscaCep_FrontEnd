

export function Table({cep}){

    return(
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
    )

}