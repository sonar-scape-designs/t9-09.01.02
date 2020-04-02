function getCategories() {

    fetch("http://sonarscapedesigns.com/2sem/T9/wp-json/wp/v2/categories?parent=41")
        .then(res => res.json())
        .then(setupCategories);
}

function setupCategories(catArray) {
    const template = document.querySelector("template#categorytemplate").content;
    const parentElement = document.querySelector("main");
    catArray.forEach(cat => {
        const copy = template.cloneNode(true);
    })

}
