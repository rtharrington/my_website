//Example 2.4 line 25...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
    var tr = document.createElement("tr");

    var city = document.createElement("td");

        if (cityPop[i].city == 'Madison'){
            city.innerHTML = 'State Capital';
        } else if (cityPop[i].city == 'Green Bay'){
            city.innerHTML = 'Packerville';
        } else {
            city.innerHTML = cityPop[i].city;
        }

        tr.appendChild(city);

        var pop = document.createElement("td");

        if (cityPop[i].population < 500000){
            pop.innerHTML = cityPop[i].population;
        } else {
            pop.innerHTML = 'Too big!';
        };

        tr.appendChild(pop);

        table.appendChild(tr);
    };
