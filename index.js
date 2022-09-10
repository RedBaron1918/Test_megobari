
function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
let w = document.documentElement.clientWidth;
    
    if(w < 740){
        document.getElementById("heading").innerHTML = `
        <h1>All-in-one massager that works like <span class="span">magic!
        </span>  
        <img id="arrow" src="./images/ArrowReverse.svg" alt="arrow" style="width: 60px; height: 50px;" >
        </h1>
        <div class="header-image">
            <img src="./images/magic.png" alt="roomba" />

        </div>`
        console.log(document.documentElement.clientWidth)
        console.log(w)
        document.getElementById('main-img').style.display = "none";
        document.getElementById('Main-text').innerText = "MagicMassage™ provides relief from head tensions, muscle aches, sleep irregularities and more"
    }else{
        document.getElementById("heading").innerHTML =`
        <h1>All-in-one massager that works like <span class="span">magic!
        </span>  
        <img id="arrow" src="./images/Arrow.svg" alt="arrow" style="width: 60px; height: 50px;" >
        </h1>
        `
        document.getElementById('main-img').style.display = "block";
        document.getElementById('Main-text').innerText = `
        MagicMassage™ provides relief from head tensions, muscle aches, sleep irregularities and more - suitable for adults, kids, and pets!
        `
    }
}

displayWindowSize()
window.addEventListener('resize',displayWindowSize);
