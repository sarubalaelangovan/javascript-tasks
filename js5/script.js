let array=[];
let  edittext; 
let obj={};
window.onload=()=>{
  array = JSON.parse(localStorage.getItem('array')) || [];
}
function submit(){
        let username=document.getElementById("username").value
        let password=document.getElementById('password').value
       

        if ( username == "") {
            document.getElementById("name0").innerHTML = "name required";
            
          } else {
            document.getElementById("name0").innerHTML = "";
          }
          if ( password == "") {
            document.getElementById("name1").innerHTML = "password required";
          } else {
            document.getElementById("name1").innerHTML = "";
          }
        
          if (
           username == "" ||
            password == ""  
          ) {
            return false;
          }
         inserttable();
         document.getElementById("username").value = "";
         document.getElementById("password").value = "";
       
       }
       
       function inserttable() {
         let username = document.getElementById("username").value;
         let password = document.getElementById("password").value;
         let obj = { username, password };
         console.log(obj);
       
         if(edittext!=undefined){
           array[edittext].username=obj.name;
           array[edittext].password=obj.password;
           edittext=undefined;
         }
         else{
           array.push(obj);
         }
         addTable()
         localStorage.setItem('array', JSON.stringify(array))
     
         console.log('array')
        }
       
       function addTable() {
       
         console.log(array)
         
      
        let v=""
       for(i=0; i<array.length; i++){
        v += "<tr>"
       v+= "<td>"+ array[i].username + "</td>"
        v+= "<td>"+ array[i].password + "</td>"
        v+= '<td><button type="button" class="btn btn-success me-2ve-3vs-3" style="" onclick="Edit(' +i +')">Edit</button><button type="button" class="btn btn-danger"  onclick="Delete('+i+')">Delete</button></td>';
         v+= "</tr>"
}
     document.getElementById("tableData").innerHTML = v;
      }
      function edit(id){
        edittext = id;
        console.log(edittext);
        document.getElementById("username").value= array[id].username;
        document.getElementById("password").value= array[id].password;
    }
  function Delete(id) {
      array.splice(id, 1);
      console.log(id);
  
      addTable();
      localStorage.setItem('array', JSON.stringify(array))
    }