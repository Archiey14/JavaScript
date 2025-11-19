const rootNode = document.getRootNode();
console.log(rootNode.childNodes);//returns an array of all the child nodes

const htmlElementNode = rootNode.childNodes[0];

console.log(htmlElementNode.childNodes);

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];

console.log(headElementNode.parentNode)
// console.log(headElementNode.nextSibling)

console.log(headElementNode.childNodes) 