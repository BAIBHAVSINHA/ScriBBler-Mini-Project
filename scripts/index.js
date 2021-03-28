document
    .getElementById('signUpBtn')
    .addEventListener('click', (evt) => {
        const nm = document.getElementById('nm');
        const uname = document.getElementById('uname');
        const pwd = document.getElementById('pwd');
        const cpwd = document.getElementById('cpwd');

        //password check in signup modal whether password = confirm password
        if (nm.value.length > 0 && uname.value.length > 0) 
            if (pwd.value !== cpwd.value) {
                evt.preventDefault();
                alert('Passwors do not match');
            }
            }
        );