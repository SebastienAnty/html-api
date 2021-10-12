function handleForm(event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const gender = document.getElementById('gender').value
    const age = Number(document.getElementById('age').value)
    console.log({ name, age, gender })
    fetch('https://myapi.com/users', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age, gender }),

    })
        .then(req => req.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}