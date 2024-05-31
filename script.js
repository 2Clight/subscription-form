
document.addEventListener('DOMContentLoaded', (event) => {
    const btn = document.querySelector('.subscribe_btn');
    const email = document.querySelector('.email');
    const errorMsg = document.querySelector('.error_message');
    const container=document.querySelector('.container');
    const confirmationMsg=document.querySelector('.confirmation');
    const form = document.getElementById('form');
    const dismissBtn=document.querySelector('.dismiss_btn');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const emailValue = email.value.trim();
        if (emailValue === "" || !isValid(emailValue)) {
            errorMsg.style.display = "block";
            
            // Prevent default submission if there is an error
        } else {
            errorMsg.style.display = "none";
            container.classList.add('hidden');
            confirmationMsg.classList.remove('hidden');
        }
        
        
    });
    dismissBtn.addEventListener('click', () =>{
        confirmationMsg.classList.add('hidden');
        container.classList.remove('hidden');
    })

    function isValid(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
