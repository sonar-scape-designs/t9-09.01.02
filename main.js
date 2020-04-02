fetch("http://sonarscapedesigns.com/2sem/T9/wp-json/wp/v2/property")
    .then(function (display) {
        return display.json()
    })
    .then(displayCategories)

function displayCategories(data) {
    //    console.log(data)
    data.forEach(function (eachItem) {
        console.log(eachItem)
        const a = document.createElement("li");
        //      a.textContent = eachItem.title.rendered;
        document.querySelector("#myPosts").appendChild(a);
        const section = document.createElement("section");
        section.innerHTML = eachItem.title.rendered;
        document.querySelector("body").appendChild(section);

    })

}
