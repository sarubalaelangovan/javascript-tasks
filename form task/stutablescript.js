let array=[];
let  edittext; 
let obj={};

window.onload=()=>{
  addTable();
}
 async function addTable() {
//   array = JSON.parse(localStorage.getItem('array')) || [];
let url = "https://6511661e829fa0248e3ffe87.mockapi.io/student";
 await fetch(url, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((Result) => Result.json())
  .then((res) => {
    console.log(res);
    array=res;
    console.log(array);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
 });

          let v=""
         for(i=0; i<array.length; i++){
          v += "<tr>"
         v+= "<td>"+ array[i].Name + "</td>"
          v+= "<td>"+ array[i].email + "</td>"
          v+= "<td>"+ array[i].PhoneNo+ "</td>"
          v+= "<td>"+ array[i].Password + "</td>"
          v+= "<td>"+ array[i].CPassword + "</td>"
          v+= "<td>"+ array[i].gender+ "</td>"
          v+= "<td>"+ array[i].Language + "</td>"
          v+= "<td>"+ array[i].Dateofbirth+ "</td>"
          v+= '<td><button type="button" class="btn btn-success me-3" onclick="Edit(' +array[i].id+')">Edit</button><button type="button" class="btn btn-danger"  onclick="Delete('+array[i].id+')">Delete</button></td>';
           v+= "</tr>"
  }
       document.getElementById("tableData").innerHTML = v;
    }

    function Edit(id){
      edittext = id;
      window.location.href = "stuform.html?id=" + id;
  }
    function btn(){
      window.location.replace(`stuform.html`);
    }
    function go(){
      window.location.replace(`card.html`);
    }
function Delete(id) {
    // array.splice(id, 1);
    // localStorage.setItem('array', JSON.stringify(array));
    // addTable();
    let url = "https://6511661e829fa0248e3ffe87.mockapi.io/student";
    fetch(url + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      addTable();
      console.log(`Title of our response :  ${string.Name}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });

  }
  
