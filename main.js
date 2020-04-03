fetch("http://sonarscapedesigns.com/2sem/T9/wp-json/wp/v2/property/")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        showProperties(data)
    })


function showProperties(jsonData) {
    //        console.log(jsonData)
    jsonData.forEach(showEachProperty)
}

function showEachProperty(property) {
    console.log(property)

    const template = document.querySelector("#propeties-temp").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h3").textContent = property.title.rendered;
    copy.querySelector(".rooms").textContent = property.bedroom;
    copy.querySelector(".bath").textContent = property.bathroom;
    copy.querySelector(".size").textContent = property.feet;

    document.querySelector("#popular").appendChild(copy)




}
