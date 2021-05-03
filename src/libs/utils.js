
const getElt = (selector = "") => {
    return document.querySelector(selector);
}

const getAllElt = (selector = "") => {
    return document.querySelectorAll(selector);
}

/**
 * Function that set the toast message.
 * @param {string} type
 * @param {string} title
 * @param {string} message
 * @param {boolean} dismiss
 * @param {string} direction
 */
const setToastMessage = (type,title, message, direction, dismiss= false) => {
    toastr[type](message, title, {
        closeButton: true,
        tapToDismiss: dismiss,
        rtl: direction
    });
}

export {getElt, getAllElt, setToastMessage};
