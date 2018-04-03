var section = document.querySelector('section');
var requestURL = 'data/servicedata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var serviceData = request.response;
    showData(serviceData);
}
function showData(jsonObj) {
    var data = jsonObj['services'];

    for (var i = 0; i < data.length; i++) {
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('h4');
        var myPara2 = document.createElement('p');
        var myList = document.createElement('ul');
        var myPara3 = document.createElement('p');

        myH3.textContent = data[i].name;
        myPara1.textContent = data[i].type;
        myPara2.textContent = data[i].price;
        myPara3.textContent = data[i].disclaimer;

        var bikeService = data[i].items;
        for (var j = 0; j < bikeService.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = bikeService[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myList);
        myArticle.appendChild(myPara3);
        section.appendChild(myArticle);
    }
}
