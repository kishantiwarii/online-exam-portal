document.getElementById('toggleForms').addEventListener('click', function() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const modalTitle = document.getElementById('loginModalLabel');
    const toggleButton = document.getElementById('toggleForms');
    

    if (signInForm.style.display === 'none') {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        modalTitle.textContent = 'Sign In';
        toggleButton.textContent = "Don't have an account? Sign Up";
    } else {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        modalTitle.textContent = 'Sign Up';
        toggleButton.textContent = 'Already have an account? Sign In';
    }

});
