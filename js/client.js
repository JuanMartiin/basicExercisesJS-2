let button = document.getElementById("login-btn");
const user = document.getElementById('user');
const password = document.getElementById('password');


  async function login(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
  }

  button.addEventListener('click', () =>{
    init();
})

  async function init() {
    await login('http://localhost:3010/login', {
        user: user.value,
        password: password.value,
    }).then(res => {
        if(user.value && password.value ){
            document.querySelector('log').style.display = 'block';
        }else{
            let p = document.createElement('p');
            p.innerHTML = 'Campos vacios';
            document.querySelector('autenticacion').appendChild(p);
        }
    }).catch(error => {
        console.log(error);
    });
}