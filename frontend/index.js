const getBD = async ()=>{
  const DB = await fetch('http://localhost:3000/backend/api').then(data => data.json())

  const fragment = document.createDocumentFragment()
  const table = document.createElement('table')
  table.innerHTML = `
    <tr>
      <th colspan="4" style="text-align: center">tabela Pessoas</th>
    </tr>
    <tr>
      <td>id</td>
      <td>nome</td>
      <td>idade</td>
      <td>sexo</td>
    </tr>
    ${DB.map(person => (
      `
        <tr>
          <td>${person.id_pessoa}</td>
          <td>${person.nome}</td>
          <td>${person.idade}</td>
          <td>${person.sexo}</td>
        </tr>
      `
    )).join(" ")}
    `
    
  fragment.appendChild(table)
    
  dados.appendChild(fragment)
}

getBD()