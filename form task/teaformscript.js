let array=[];
let  edittext; 
let obj={};
window.onload=()=>{
    Edit();
  };
  function male() {
    let male = document.getElementById("male").checked;
    if (male === true) {
      document.getElementById("female").checked = false;
    }
  }
  function female() {
    let female = document.getElementById("female").checked;
    if (female === true) {
      document.getElementById("male").checked = false;
    }
  }
 function Cancel(){
  window.location.replace("card.html")
 }
 
function submit(){
      //  console.log(submit)
        let Name = document.getElementById('Name').value;
        let email = document.getElementById('email').value;
        let PhoneNo = document.getElementById('PhoneNo').value;
        let Password = document.getElementById('Password').value;
        let CPassword = document.getElementById('CPassword').value;
        let gender_value = document.querySelector('input[name="gender"]:checked');
        let gender;
        if(gender_value){
          gender=gender_value.value
        }
        let Language = document.getElementById('Language').value;
        let Dateofbirth = document.getElementById('Dateofbirth').value;
        let valid=true;
        if (Name.length<3) {
          document.getElementById("name0").innerHTML = "!Name required";
          document.getElementById("Name").style.border = "2px solid red";
          valid=false;

        } else {
          document.getElementById("name0").innerHTML = "";
          document.getElementById("Name").style.border = "2px solid green";
      
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          document.getElementById("name1").innerHTML = "";
          document.getElementById("email").style.border = "2px solid green";
         
        } else {
          document.getElementById("name1").innerHTML = "!Email required";
          document.getElementById("email").style.border = "2px solid red";
          valid=false;
          
        }
          
        if (PhoneNo.length===10) {
          document.getElementById("name2").innerHTML = " ";
          document.getElementById("PhoneNo").style.border = "2px solid green";
        } else {
          document.getElementById("name2").innerHTML = "!Phonenumber required ";
          document.getElementById("PhoneNo").style.border = "2px solid red";
          valid=false;
         
        }
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (passwordRegex.test(Password)) {
          document.getElementById("name3").  innerHTML = "";
          document.getElementById("Password").style.border = "2px solid green";
         
        } else {
          document.getElementById("name3").innerHTML = "!Password required";
          document.getElementById("Password").style.border = "2px solid red";
          valid=false;
       
        }
      
        if (Password===CPassword) {
          document.getElementById("name4").innerHTML = "";
          document.getElementById("CPassword").style.border = "2px solid green";
         
        } else {
          document.getElementById("name4").innerHTML = "!Password not matching";
          document.getElementById("CPassword").style.border = "2px solid red";
          valid=false;
      
        }
        if (Language==="") {
          document.getElementById("name6").innerHTML = "!language required";
          document.getElementById("Language").style.border = "2px solid red";
          valid=false;
        
   
  
        } else {
          document.getElementById("name6").innerHTML = "";
          document.getElementById("Language").style.border = "2px solid green";
  
        }
        
      if ( Dateofbirth==="") {
        document.getElementById("name7").innerHTML = "!Date of birth required";
        document.getElementById("Dateofbirth").style.border = "2px solid red";
        valid=false;

      } else {
        document.getElementById("name7").innerHTML =" ";
        document.getElementById("Dateofbirth").style.border = "2px solid green";
      }
      
        
          if (!valid) {
            return false;
          }
    
        let obj={Name,email,PhoneNo,Password,CPassword,gender,Language,Dateofbirth};

        if (edittext != undefined) {
            let url = "https://6511661e829fa0248e3ffe87.mockapi.io/teacher";
            obj.id=ed
            fetch(url, "/" + edittext, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(obj),
            })
              .then((Result) => Result.json())
              .then((string) => {
                console.log(string);
                window.location.replace("teatable.html");
                console.log(`Title of our response :  ${string.Name}`)
              })
              .catch((errorMsg) => {
                console.log(errorMsg);
              });
           
        
          } else {
            let url = "https://6511661e829fa0248e3ffe87.mockapi.io/teacher";
            fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(obj),
            })
              .then((Result) => Result.json())
              .then((string) => {
                console.log(string);
                window.location.replace("teatable.html")
          
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
        // console.log(window);
        var url_string=window.location.href.toLocaleLowerCase();
        // console.log(url_string);
        var url=new URL(url_string);
        // console.log(url);
        var id=url.searchParams.get("id");
        edittext=id
        console.log(edittext);
        if(id){
          let url = "https://6511661e829fa0248e3ffe87.mockapi.io/teacher";
          fetch(url + "/" + id, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          })
            .then((Result) => Result.json())
            .then((string) => {
              console.log(string);
              array= string;
        document.getElementById("Name").value= array.Name;
        document.getElementById("email").value= array.email;
        document.getElementById("PhoneNo").value= array.PhoneNo;
        document.getElementById("Password").value= array.Password;
        document.getElementById("CPassword").value= array.CPassword;
        if (array.gender === "male") {
          document.getElementById("male").checked = true;
        } else if (array.gender === "female") {
          document.getElementById("female").checked = true;
        } else {
          document.getElementById("male").checked = false;
          document.getElementById("female").checked = false;
      }
        document.getElementById("Language").value= array.Language;
        document.getElementById("Dateofbirth").value= array.Dateofbirth;
      // }
      // console.log(`Title of our response :  ${string.Name}`)
      // array = string;
      // console.log(array);
     
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
  

}
}
