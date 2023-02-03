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
    document.getElementById('log').style.display = 'none';
    document.getElementById('error').style.display = 'none';
})

  async function init() {
    await login('http://localhost:3010/login', {
        user: user.value,
        password: password.value,
    }).then(res => {
        if( res.data == true ){
            document.getElementById('log').style.display = 'block';
        }else{
            document.getElementById('error').style.display = 'block';
        }
    }).catch(error => {
        console.log(error);
    });
}