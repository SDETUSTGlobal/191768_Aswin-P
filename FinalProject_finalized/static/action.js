const form = document.getElementById('form');
const UserName = document.getElementById('name');
const UID = document.getElementById('eid');
const Company_Name = document.getElementById('cname');
const Email_id = document.getElementById('eml');

function checkInputs(){
    //get values from the inputs
   const UserNameValue = UserName.value;
   const UIDValue = UID.value;
   const Company_NameValue = Company_Name.value;
   const Email_idValue = Email_id.value;

   if(UserNameValue === ''){
       //show error
       //add error class
       setErrorFor(UserName, 'Full name can not be blank');
   }
   else{
       //add success class
       setSuccessFor(UserName);
   }
   if(UIDValue === ''){
       setErrorFor(UID, 'UID can not be blank');
   } else{
       setSuccessFor(UID);
   }
   if(Company_NameValue === ''){
       setErrorFor(Company_Name, 'Company name can not be blank');
   }else{
       setSuccessFor(Company_Name);
   }
   if(Email_idValue === ''){
       setErrorFor(Email_id, 'Email ID can not be blank');
   }else if (!isEmail(Email_idValue)){
       setErrorFor(Email_id, 'Enter a valid Email ID');
       document.getElementById("eml").value = ''     
   }
   else{
       setSuccessFor(Email_id);
   }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small')
    // add error message
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function passvalues(){
    checkInputs();
    var rname=document.getElementById("name").value;
    var ruid=document.getElementById("eid").value;
    var rcname=document.getElementById("cname").value;
    var rcmail=document.getElementById("eml").value;
    localStorage.setItem("wName",rname)
    localStorage.setItem("wEnum",ruid)
    localStorage.setItem("wCname",rcname)
    localStorage.setItem("wEid",rcmail)
    return false;
}

document.getElementById("Name").innerHTML=localStorage.getItem("wName");
document.getElementById("Eid").innerHTML=localStorage.getItem("wEnum");
document.getElementById("Cname").innerHTML=localStorage.getItem("wCname");
document.getElementById("Eml").innerHTML=localStorage.getItem("wEid");
document.getElementById("welcome-message").innerHTML = "Hello " + localStorage.getItem("Name") + ". These are the details you have entered."
document.getElementById("welcome-message1").innerHTML = "Welcome " + localStorage.getItem("Name")

