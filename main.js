let Sidebar = document.querySelector(".mygallery");
let ZoomImg = document.getElementById("zoom-img");

Sidebar.addEventListener("click", function (item) {
    if (item.target.getAttribute("class") == "preview")
        ZoomImg.style.backgroundImage = `url(${item.target.currentSrc})`
})

ZoomImg.addEventListener("mouseenter", () => {
    ZoomImg.style.backgroundSize = "200%"
})

ZoomImg.addEventListener("mouseout", () => {
    ZoomImg.style.backgroundSize = "100%"
})

ZoomImg.addEventListener("mousemove" , (event)=> {
    let dimensions = event.target.getBoundingClientRect();
    let x = event.clientX - dimensions.left
    let y = event.clientY - dimensions.top
    x = Math.round(100 / (dimensions.width / x));
    y = Math.round(100 / (dimensions.height / y));

    ZoomImg.style.backgroundPosition = `${x}% ${y}%`
})