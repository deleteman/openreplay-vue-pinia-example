
let storeWrapper = null;

export function saveStore(s) {
    console.log("saving...")
    console.log(s)
    storeWrapper = s;
}

export function getStore(store) {
    console.log("Returning store plugin")
    console.log(storeWrapper)
    return storeWrapper(store);
}