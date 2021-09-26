function getJSON( event ) {
    event.preventDefault(); 


    let city = document.querySelector('#city'); 

    fetch(`url`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

}