document.addEventListener('DOMContentLoaded', function () {
    const signupLink = document.getElementById('signupLink');
    const loginLink = document.getElementById('loginLink');
    const loginFormWrapper = document.getElementById('loginFormWrapper');
    const signupFormWrapper = document.getElementById('signupFormWrapper');
  
    signupLink.addEventListener('click', function () {
        loginFormWrapper.style.display = 'none';
        signupFormWrapper.style.display = 'block';
    });
  
    loginLink.addEventListener('click', function () {
        signupFormWrapper.style.display = 'none';
        loginFormWrapper.style.display = 'block';
    });
  });


 