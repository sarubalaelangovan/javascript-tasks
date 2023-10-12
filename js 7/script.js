let array=[];
let  edittext; 
let obj={};
window.onload=()=>{
    Edit();
  };
function submit(){
      //  console.log(submit)
        let Name = document.getElementById('Name').value;
        let Age = document.getElementById('Age').value;
        let PhoneNo = document.getElementById('PhoneNo').value;
        let Gender= document.getElementById('Gender').value;
        let Email = document.getElementById('Email').value;

        if ( Name == "") {
            document.getElementById("name0").innerHTML = "Name required";
            
          } else {
            document.getElementById("name0").innerHTML = "";
          }
          if (Age == "") {
            document.getElementById("name1").innerHTML = "Age required";
          } else {
            document.getElementById("name1").innerHTML = "";
          }
          if ( PhoneNo == "") {
            document.getElementById("name2").innerHTML = "PhoneNo required";
          } else {
            document.getElementById("name2").innerHTML = "";
          }
          if ( Gender == "") {
            document.getElementById("name3").innerHTML = "Gender required";
          } else {
            document.getElementById("name3").innerHTML = "";
          }
          if ( Email == "") {
            document.getElementById("name4").innerHTML = "Email required";
          } else {
            document.getElementById("name4").innerHTML = "";
          }
          if (
            Name == ""||
            Age== ""||
            PhoneNo==""||
            Gender ==""||
            Email==""
          ) {
            return false;
          }
    
        let obj={Name,Age,PhoneNo,Gender,Email};

        if (edittext != undefined) {
          //   console.log(edittext);
          //   array[edittext].Name = document.getElementById("Name").value;
          //   array[edittext].Age = document.getElementById("Age").value;
          //   array[edittext].PhoneNo = document.getElementById("PhoneNo").value;
          //   array[edittext].Gender = document.getElementById("Gender").value; 
          //   array[edittext].Email = document.getElementById("Email").value;
          // } else {
            let url = "https://6509263ef6553137159b0044.mockapi.io/school";
            fetch(url, "/" + edittext, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(obj),
            })
              .then((Result) => Result.json())
              .then((string) => {
                console.log(string);
                window.location.replace("list.html");
                console.log(`Title of our response :  ${string.Name}`)
              })
              .catch((errorMsg) => {
                console.log(errorMsg);
              });
           
        
          } else {
            let url = "https://6509263ef6553137159b0044.mockapi.io/School";
            fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(obj),
            })
              .then((Result) => Result.json())
              .then((string) => {
                console.log(string);
                window.location.replace("list.html")
                console.log(`Title of our response :  ${string.Name}`)
              })
              .catch((errorMsg) => {
                console.log(errorMsg);
              });
          }
          

        // localStorage.setItem("array", JSON.stringify(array));
        // window.location.replace('list.html');
       }
       
 
      function Edit(){
        console.log(window);
        var url_string=window.location.href.toLocaleLowerCase();
        console.log(url_string);
        var url=new URL(url_string);
        console.log(url);
        var id=url.searchParams.get("id");
        console.log(edittext);
        if(id){
          let url = "https://6509263ef6553137159b0044.mockapi.io/school";
          fetch(url + "/" + id, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          })
            .then((Result) => Result.json())
            .then((string) => {
              console.log(string);
              array= string;
      //   edittext = id;
      //   array = JSON.parse(localStorage.getItem('array')) || [];
      //   console.log(edittext);
      //   if(id){
        document.getElementById("Name").value= array.Name;
        document.getElementById("Age").value= array.Age;
        document.getElementById("PhoneNo").value= array.PhoneNo;
        document.getElementById("Gender").value= array.Gender;
        document.getElementById("Email").value= array.Email;
      // }
      console.log(`Title of our response :  ${string.Name}`)
      array = string;
      console.log(array);
     
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
  

}
}
