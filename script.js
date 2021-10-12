function getCoffees(temp) {
    fetch('https://api.sampleapis.com/coffee/' + temp)
    .then(response => response.json())
    .then(data => {
        const coffeeList = document.getElementById('coffees')
        const coffees = data.map(coffee => {
            const ingredients = coffee.ingredients.map(elem => '<li>' + elem + '</li>')
            return '<h2>' + coffee.title + '</h2><p>' + coffee.description + '</p><ol>'
                + ingredients.join('') + '</ol>'
        })
        coffeeList.innerHTML = coffees.join('')
    })
    .catch(err => console.error(err))
}