let array=[];
let  edittext; 
let obj={};
window.onload=()=>{
    Edit();
  };
function submit(){
        let username=document.getElementById("username").value;
        let password=document.getElementById('password').value;
       

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
    
        let obj={username,password};
        if (edittext != undefined) {
            console.log(edittext);
            array[edittext].username = document.getElementById("username").value;
            array[edittext].password = document.getElementById("password").value;
          } else {
            array.push(obj);
          }

        localStorage.setItem("array", JSON.stringify(array));
        window.location.replace('list.html');
       }
       
 
      function Edit(){
        var url_string=window.location.href.toLocaleLowerCase();
        var url=new URL(url_string);
        var id=url.searchParams.get("id");
        edittext = id;
        array = JSON.parse(localStorage.getItem('array')) || [];
        console.log(edittext);
        document.getElementById("username").value= array[id].username;
        document.getElementById("password").value= array[id].password;
      }
//  