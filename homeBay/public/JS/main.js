let loggedIn = false;
async function login() {
    let username = document.getElementById('uname').value

    let result = await $.ajax({
        url: '/api/administradores/login/' + username,
        method: 'get',
    });
    console.log(result);
    if (result == true) {
        sessionStorage.setItem('admin', true);
        window.location = '/Lista.html';
    }
    else alert('Username errado');

}

window.addEventListener('load', function () {

    let admin = sessionStorage.getItem('admin');
    if (admin == 'true')
        loggedIn = true;
    if (loggedIn) {
        document.getElementById('btnLogin').innerHTML = 'Logout';
    }
    else {
        document.getElementById('btnLogin').innerHTML = 'Login';
    }
    if (!loggedIn) {
        document.getElementById('historico').classList.add('hidden');
    }
    else {
        document.getElementById('historico').classList.remove('hidden');
    }
});

function clickLogin() {
    if (loggedIn) {
        sessionStorage.clear();
        window.location = '/index.html';
    }
    else {
        document.getElementById('id01').style.display = 'block';
    }
}