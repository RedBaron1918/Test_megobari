
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
        document.getElementById('main-img').style.display = "none";
        document.getElementById('Main-text').innerText = "MagicMassage™ provides relief from head tensions, muscle aches, sleep irregularities and more"
        document.getElementById('Main-btn').innerHTML=`
        <div class="main-img-div" style="margin-top:1rem;">
        <div class="div-img">
        <img src="./images/picture1.png" alt="">
    </div>
    <div class="div-text">
        <p>“It feels amazing on my head and it soothes muscle tension. “</p>
        <div class="div-rate">
            <div class="stars">
                <i class="fa-solid fa-star" style="color: #F6C644; font-size: 12px;"></i>
                 <i class="fa-solid fa-star" style="color: #F6C644; font-size: 12px;"></i>
                 <i class="fa-solid fa-star" style="color: #F6C644; font-size: 12px;"></i>
                 <i class="fa-solid fa-star" style="color: #F6C644; font-size: 12px;"></i>
                 <i class="fa-solid fa-star" style="color: #F6C644; font-size: 12px;"></i>
                 <p>Debra N.</p>
            </div>
            <div class="verify">
                <i class="fa-solid fa-circle-check" style="color: #197AFF;"></i>
                <p>VERIFIED BUYER</p>
            </div>
        `
        document.getElementById('get-div').style.display = 'none';

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
        document.getElementById('get-div').style.display = 'flex';
        document.getElementById('Main-btn').innerHTML=`
        `
    }
}
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
      
    });
  });

displayWindowSize()
window.addEventListener('resize',displayWindowSize);
