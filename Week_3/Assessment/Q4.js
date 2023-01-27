/**
 * A funtion that when given a DOM Element on the page, 
 * will visit the the element itself and all it's descendants(
 * not just its intermediate children).
 * For each element visited, the function should pass the element
 * to a provided callback function
 * 
 * @param {*} element 
 * @param {*} callback 
 */
function traverseDOM(element, callback) {
    callback(element);
    for(let child of element.children) {
        traverseDOM(child, callback);
    }
};


/*
 * 
 * @param {*} element 
 */

const callback = (element) => {
    console.log(element.tagName);
}

/*
    call it as the following: traverseDOM(document.body, callback);
*/
