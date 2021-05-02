
const getElt = (selector = "") => {
    return document.querySelector(selector);
}

const getAllElt = (selector = "") => {
    return document.querySelectorAll(selector);
}

export {getElt, getAllElt};
