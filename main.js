const {spawn} = require('child_process');
const bootstrap = require('bootstrap')
let elements_to_find=0;

function exec_py(){

  let url = document.getElementById("url").value;
  let element = [];

  for(let i =0; i<elements_to_find;i++){
    element[i]=document.getElementById(`s${i+1}`).value;
    console.log(element[i])
  }
  const pyscript = spawn('python', ['main_script.py', elements_to_find, url, element]);

  pyscript.stdout.on('data', (data)=>{
     console.log(`stdot: ${data}`);
   });

  pyscript.stderr.on('data', (data)=>{
       console.error(`stderr: ${data}`);
   });

  pyscript.on('close', (code) =>{
     console.log(`script exited with code ${code}`);
   });
}

function add_element(){
  elements_to_find++;
  const li = document.createElement('li');
  li.innerHTML = `<input id="s${elements_to_find}" class="text-box" type="text" placeholder="elements to search"><br>`;
  document.querySelector('.add').appendChild(li);
}

//btn.addEventListener("click", exec_py);
//
//
//var pwd = document.getElementById('pwd');
//var eye = document.getElementById('eye');
//
//eye.addEventListener('click',togglePass);
//
//function togglePass(){
//
//   eye.classList.toggle('active');
//
//   (pwd.type == 'password') ? pwd.type = 'text' : pwd.type = 'password';
//}

// Form Validation
//
//function checkStuff() {
//  let status=0;  
//  var email = document.form1.email;
//  var password = document.form1.password;
//  var msg = document.getElementById('msg');
//  
//  if (email.value == "") {
//    msg.style.display = 'block';
//    msg.innerHTML = "Please enter your email";
//    email.focus();
//    return false;
//  } else {
//    //msg.innerHTML = "";---------------------------------------------------
//    status++;
//  }
//  
//   if (password.value == "") {
//    msg.innerHTML = "Please enter your password";
//    password.focus();
//    return false;
//  } else {
//    //msg.innerHTML = "";---------------------------------------------------
//    status++;
//  }
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//  if (!re.test(email.value)) {
//    msg.innerHTML = "Please enter a valid email";
//    email.focus();
//    return false;
//  } else {
//    //msg.innerHTML = "";------------------------------------------------------
//    status++;
//  }
//  console.log(status)
//  if(status==3){
//      windows.close();
//      window.open("main_screen.html", "_blank");
//  }
//}
//
//
