fetch("http://sonarscapedesigns.com/2sem/T9/wp-json/wp/v2/property?_embed")
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
    console.log(property._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)

    const template = document.querySelector("#properties-temp").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h3").textContent = property.title.rendered;
    copy.querySelector(".rooms").textContent = property.bedroom;
    copy.querySelector(".bath").textContent = property.bathroom;
    copy.querySelector(".size").textContent = property.feet;
    copy.querySelector("img").src = property._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;


    document.querySelector("#popular").appendChild(copy)
}

//pop up//

//function showPropertyInfo(info) {
//
//    clone.querySelector("button").addEventListener("click", () => {
//        console.log("click", jsonDatabase)
//        fetch(`http://sonarscapedesigns.com/2sem/T9/wp-json/wp/v2/property?id=${info.id}`)
//            .then(res => res.json())
//            .then(showDetails);
//    });
//
//
//    console.log(`#${info}`)
//    document.querySelector(`#${property}`).appendChild(clone);
//}
//
//
//function showDetails(data) {
//    modal.querySelector(".modal-title").textContent = data.title.rendered;
//    modal.querySelector(".modal-description").textContent = data.longdescription;
//    modal.querySelector(".modal-price").textContent = data.price;
//
//    modal.classList.remove("hide");
//}


