$(function() {
    if (!sessionStorage.getItem('token')) {
        alert('กรุณาเข้าสู่ระแบบก่อน.')
        location.href = 'index.html'
    }

    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');

});


var gameWindow;

function checkWindow() {
    if (gameWindow && !gameWindow.closed) {
        gameWindow.close();
    }

    gameWindow = window.open('', "popup", "fullscreen");
    gameWindow.moveTo(0, 0);
    gameWindow.resizeTo(screen.width, screen.height);
    gameWindow.document.write('Loading...');
    return;
}

function isLine() {
    return /Line/i.test(navigator.userAgent);
}

async function ufax() {

    let uri = 'https://ufax24.com';

    if (isLine()) {
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'https://ufax24.com'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
    }else{

        checkWindow();

        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'https://ufax24.com'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
     }

}
async function ufapro() {

    let uri = 'https://ufapro888s.co';

    if (isLine()) {
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'https://ufapro888s.co'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
    }else{

        checkWindow();

        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'https://ufapro888s.co'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
     }

}

async function ag() {

    let uri = 'login.html';

    if (isLine()) {
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
          }
        }
    }else{

        checkWindow();

        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
     }

}

