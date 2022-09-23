
let storePlugin = null;

export function saveStore(s) {
    console.log("saving...")
    console.log(s)
    storePlugin = s;
}

export function getStore(store) {
    console.log("Returning store plugin")
    console.log(storePlugin)
    return storePlugin(store);
}