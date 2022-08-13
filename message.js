// navlink click sound

let username=document.getElementById("username");
let namelabel=document.querySelector(".namelabel");
username.addEventListener("blur",()=>{
    if(username.value){
        namelabel.style.transform="translate(0,-20px) scale(.8)";
    }
})

let mail=document.getElementById("mail");
let maillabel=document.querySelector(".mail_label");
mail.addEventListener("blur",()=>{
    if(mail.value){
        maillabel.style.transform="translate(0,-20px) scale(.8)";
    }
})

let message=document.getElementById("message");
let message_label=document.querySelector(".text_area_label");
message.addEventListener("blur",()=>{
    if(message.value){
        message_label.style.transform="translate(0,-20px) scale(.8)";
    }
})


// username
let usernamevalidate = document.getElementById("username");
let validusername = false;
username.addEventListener("blur", function () {
    let regx = /^[a-zA-Z0-9_.\s]{3,25}$/;
    let namevalue = usernamevalidate.value;
    if (regx.test(namevalue)) {
        console.log('true');
        validusername = true;
        usernamevalidate.style.outline="2px solid  #4d7aff"

    }
    else {
        console.log('false');
        usernamevalidate.style.outline="2px solid  red"
    }

})


let useremail = document.getElementById("mail");
let validusermail = false;
useremail.addEventListener("blur", function () {
    let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.[a-zA-Z]{2,7}$/;
    let emailvalue = useremail.value;
    if (regx.test(emailvalue)) {
        validusermail = true;
        useremail.style.outline="2px solid  #4d7aff"

    }
    else {
        useremail.style.outline="2px solid  red"

    }
})



let input_message = document.getElementById("message");
let valid_message = false;
input_message.addEventListener("blur", function () {
    
    if(input_message.value.length>=5){
        valid_message=true;
        input_message.style.outline="2px solid  #4d7aff"

    }
    else{
        valid_message=false;
        input_message.style.outline="2px solid  red"

    }
})

document.querySelector(".mail_thanks2").style.display="none";

let confirm_mail=document.getElementById("confirm_mail");
confirm_mail.addEventListener("click",function(){
    if(validusername&&validusermail&&valid_message){
        let from_name=document.getElementById("username").value
        console.log(from_name.value);
        let mail=document.getElementById("mail").value
        console.log(mail);
        let text=document.getElementById("message").value
        console.log(text);
        emailjs.send("service_60kwm66","template_y7vi5zj",{
            from_name:document.getElementById("username").value,
            email_id: document.getElementById("mail").value,
            message: document.getElementById("message").value,
            }).then(function(res){
            })

            document.querySelector(".mail_thanks2").style.display="flex";
            document.querySelector(".box2").style.display="none";




    }
    else{
        document.getElementById("btn_pm").click();
    }
})