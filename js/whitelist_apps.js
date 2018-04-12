function addToWhitelist (image) {
    console.log(image.style);
    if (image.style.opacity==0.25) {
        image.style.opacity=1.0 
    }
    else {
        image.style.opacity=0.25
    }
}
console.log(addToWhitelist);

