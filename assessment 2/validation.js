
var err1=document.getElementById("err1");
var email= document.getElementById("field1");
 var pwd=document.getElementById("field2");
var err2=document.getElementById("err2");
var err=document.getElementById('err');
var x=document.getElementById('user');
var no=document.getElementById("no");
var er=document.getElementById("er");
//sample1.3@domain.com.in
var regex = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/ 
function validatename(){
    //alert("clicked")
    if(x.value.trim()==""){
        err.innerText="username empty"
        x.style.border="1px  solid red"
        return false
    }
    else if(x.value.length<3){
err.innerText="username should be more than 3 chara"
x.style.border="1px solid red"
return false
    }
        
        err.innerText=''
        x.style.border="2px solid green"
    return true

}
function validateEmail(){
   // alert("hi")
   if(email.value.trim()==''){
    err1.innerText="Field cannot be empty"
    email.style.border=" 1px solid red"
    return false
   }
else if(!email.value.match(regex)){
    err1.innerText="Email is not in correct format" ;
    email.style.border=" 1px solid red";
    return false

}
else{
    err1.innerText="";
    email.style.border="1px solid green";
    
    return true
}
}
function validatePass(){
    if(pwd.value.trim()==''){
        err2.innerText="password cannot be empty";
        pwd.style.border=" 1px solid red";
        return false
       }
       else if(pwd.value.length<8){
        err2.innerText="Minimum 8 character ";
        return false
       }

       else{
        err2.innerText="";
        pwd.style.border="2px solid green";
        return true
       }
    }
       function validateNo(){
        if(no.value.trim()==''){
            er.innerText="phone no cannot be empty";
            no.style.border=" 1px solid red";  
            return false
        }

        else if(no.value.length>10){
            er.innerText="phone number incorrect";
            return false
        }
        
        else{
            er.innerText="";
            no.style.border="2px solid green";

            return true

        }
       }


function varify(){
    if(!validateEmail()||!validatePass()||!validatename()||!validateNo()){
        return false
    }
    else{
        return true
    }
}
