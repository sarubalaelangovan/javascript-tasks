window.onload=()=>{
   
    addTable();
  };
  let array=[];
  let  edittext; 
  let obj={};

  function addTable() {
    array = JSON.parse(localStorage.getItem('array')) || [];
            let v=""
           for(i=0; i<array.length; i++){
            v += "<tr>"
           v+= "<td>"+ array[i].username + "</td>"
            v+= "<td>"+ array[i].password + "</td>"
            v+= '<td><button type="button" class="btn btn-success me-3" onclick="Edit(' +i +')">Edit</button><button type="button" class="btn btn-danger"  onclick="Delete('+i+')">Delete</button></td>';
             v+= "</tr>"
    }
         document.getElementById("tableData").innerHTML = v;
      }

      function Edit(id){
        window.location.href = "index.html?id=" + id;
    }
      function btn(){
        window.location.replace(`index.html`);
      }
  function Delete(id) {
      array.splice(id, 1);
      localStorage.setItem('array', JSON.stringify(array));
      addTable();
  
    }