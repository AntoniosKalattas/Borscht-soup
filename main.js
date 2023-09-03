const { spawn } = require('child_process');
//const bootstrap = require('bootstrap')
let elements_to_find = 0;
//https://www.ucy.ac.cy/aasw/studies/undergraduate-studies/schedule-classes/
function exec_py() {
    const pyscript = spawn('python', ['main_script.py', elements_to_find, url, element]);

    pyscript.stdout.on('data', (data) => {
        console.log(`output: ${data}`);
    });

    pyscript.stderr.on('data', (data) => {
        console.error(`error: ${data}`);
    });

    pyscript.on('close', (code) => {
        console.log(`script exited with code ${code}`);
    });
}

function add_element(){
  elements_to_find++;
  const li = document.createElement('li');
  li.id=elements_to_find
  li.innerHTML = `<a id=${elements_to_find} class="fill-in"><input id="s${elements_to_find}" class="text-box" type="text" placeholder="elements to search"><br>
  <button id="option_btn${elements_to_find}" onclick=option("option_btn${elements_to_find}")>option</button>
  <button onclick=Delete1(${elements_to_find})>delete</button></button></a>`;
  document.querySelector('.add').appendChild(li);
}

//when clicking on the button options
function option(id){
  element = document.getElementById(id);
  value=document.getElementById(id).textContent;
  if(value=="option"){
    element.textContent="Click";
    const ul = document.createElement('ul');
    //button for click
    ul.innerHTML=`<li><input id= "c${elements_to_find}" type="number" name="number of clicks" min="1" max="1000" onclick="stopPropagation(event)"></li>`;
    document.querySelector(`#${id}`).appendChild(ul);
  }
  else if(value=="Click"){
    element.textContent="Type";
    const ul = document.createElement('ul');
    //button for typing
    ul.innerHTML=`<li><input id="t${elements_to_find}" class="type_box" type="text" placeholder="what to type" onclick="stopPropagation(event)"><br></li>`;
    document.querySelector(`#${id}`).appendChild(ul);
  }
  else if(value=="Type"){
    element.textContent="Click";
    const ul = document.createElement('ul');
    //button for click
    ul.innerHTML=`<li><input id="c${elements_to_find}" type="number" name="number of clicks" min="1" max="1000" onclick="stopPropagation(event)"></li>`;
    document.querySelector(`#${id}`).appendChild(ul);
  }
  
}

//to stop a click on a button when trying to input data to change
function stopPropagation(event) {
  event.stopPropagation();
}

//to remove an input of an element
function Delete1(id){
  elements_to_find--;
    element= document.getElementById(id)
    element.remove()

}

function collect_data(){
  let url = document.getElementById("url").value;
    let element = [];
    let type =[];
    let clicks=[];

    //grap the element path
    for (let i = 0; i < elements_to_find; i++) {
      console.log(type , clicks)
        element[i] = document.getElementById(`s${i+1}`).value;
        //split the elements
        element[i] += "!__!";  
        if(document.getElementById("c"+[i]))
          clicks[i] = document.getElementById("c"+[i]).textContent;
          if(document.getElementById("c"+[i])==false){
          type[i] = document.getElementById("t"+[i]).textContent;
          console.log("in");
          }
    }
    console.log(type , clicks)
    //exec_py(url, element)
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
