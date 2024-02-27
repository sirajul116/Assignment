fetch('https://fakestoreapi.com/products')
  .then((data) => {
    return data.json(); //json_data to object
  })
  .then((objdata) => {
    console.log(objdata);
    let tabledata = '';
    objdata.map((values) => {
      tabledata += `<tr>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
      <td><img src="${values.image}"></td>
    </tr>`;
    });
    document.querySelector('#table_body').innerHTML = tabledata;
  })
  .catch((err) => {
    console.log(err);
  });
