

$('#form-handler').on('submit', function(event) {

    event.preventDefault();

    let city = $('#city').val();
    // let state = $('#state').val();
    let units = $('#units').val();

    // $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},{state}&units=${units}&appid=c6e2c2433130665a9454caa32099ba8f` function(res) {
        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=c6e2c2433130665a9454caa32099ba8f`, function(res) {

        let Weather;
        if (units == 'imperial') {
            Weather = 'F';
        } else { Weather = 'C'; }
        $('#cweather').text(res.weather[0].description.toUpperCase());
        $('#ctemp').text(parseInt(res.main.temp) + Weather);
        $('#high').text(parseInt(res.main.temp_max) + Weather);
        $('#low').text(parseInt(res.main.temp_min) + Weather);
        $('#humidity').text(res.main.humidity);
    })
})

