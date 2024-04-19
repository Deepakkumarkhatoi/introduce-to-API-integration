const registrationForm = document.getElementById('registrationForm');
const userInfo = document.getElementById('userInfo');

registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(registrationForm);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to register user');
        }

        const data = await response.json();
        userInfo.innerHTML = <p>Registration successful! User ID: ${data.id}</p>;

    } catch (error) {
        console.error('Error:', error);
        userInfo.innerHTML = <p>Error: ${error.message}</p>;
    }
});