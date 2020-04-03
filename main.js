


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
    console.log(property)

    const template = document.querySelector("#properties-temp").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h3").textContent = property.title.rendered;
    copy.querySelector(".rooms").textContent = property.bedroom;
    copy.querySelector(".bath").textContent = property.bathroom;
    copy.querySelector(".size").textContent = property.feet;
    copy.querySelector(".properties-info").textContent = property.content.rendered;

    document.querySelector("#popular").appendChild(copy)
}

//add images

//const imageName = property.source_url;
//    const base = "http://sonarscapedesigns.com/2sem/T9/wp-json/wp/v2/property?_embed";
//    const smallImg = base + "small/" + imageName + "-sm.jpg";
//    const mediumImg = base + "medium/" + imageName + "-md.jpg";
//    const largeImg = base + "large/" + imageName + ".jpg";
//    clone.querySelector("img").src = smallImg;


//fetch("http://sonarscapedesigns.com/2sem/T9/wp-json/wp/v2/property?_embed")
//    .then(function (response) {
//        return response.json()
//    })
//    .then(function (data) {
//        showImages(data)
//    })
//
//
//function showImages(jsonData) {
//    //        console.log(jsonData)
//    jsonData.forEach(showEachProperty)
//}
//
//function showEachImage(image) {
//    console.log(property)
//
////    const template = document.querySelector("#properties-temp").content;
////    const copy = template.cloneNode(true);
////
////    copy.querySelector("img").src = image.source_url;
////
//    var img = document.createElement('img');
//    img.src = images[i].source_url;
//
//    document.querySelector(".info").appendChild(copy)
//    console.log(image)
//}
