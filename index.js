var slideIndex = 1;
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
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
  

  function slide(){
    let w = document.documentElement.clientWidth;
    if(w < 900){
        document.getElementById('Reviews-Cards').innerHTML = `
        <div class="slideshow-container">
        <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="./images/test.svg" style="width:100%">
            <div class="Reviews-rating">
                    <div class="Reviews-name">
                        <p>Megan K.</p>
                        <div class="Reviews-Stars">
                            <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                            <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                            <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                            <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                            <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-circle-check" style="display: inline-block; color: #89C25F;"></i> <p style="display: inline-block; color: #89C25F;">verified buyer</p>
                    </div>
                </div>
                <div class="Reviews-Review">
                        <p>I love the MagicMassage! It’s simple to use, does not mess up my curly hair as many other similar products do, and the massage is relaxing as it is refreshing. I feel like it has been made for my scalp! It just feels right.</p>
                </div>
        </div>
        <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="./images/test2.svg" style="width:100%">
            <div class="Reviews-rating">
            <div class="Reviews-name">
                <p>Megan K.</p>
                <div class="Reviews-Stars">
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-circle-check" style="display: inline-block; color: #89C25F;"></i> <p style="display: inline-block; color: #89C25F;">verified buyer</p>
            </div>
        </div>
        <div class="Reviews-Review">
                <p>I could not be happier with this product! I use it at night to relax and it does wonders for me. My kids and dog also love it, they’ll sit and let me massage their scalp for hours. At first my Labrador was hesitant not knowing what it was, but now she gets excited as soon as I take the MagicMassage out.</p>
        </div>
        </div>
        <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="./images/test3.svg" style="width:100%">
            <div class="Reviews-rating">
            <div class="Reviews-name">
                <p>Megan K.</p>
                <div class="Reviews-Stars">
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-circle-check" style="display: inline-block; color: #89C25F;"></i> <p style="display: inline-block; color: #89C25F;">verified buyer</p>
            </div>
        </div>
        <div class="Reviews-Review">
                <p>It arrived in perfect condition, and the packaging was immaculate. It felt amazing on my head, like someone was massaging it with the perfect pressure and speed. My long hair doesn't get caught in it at all, and I feel relaxed after using it. Best purchase I’ve made in a LONG time!</p>
        </div>
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
   
    `
    showSlides(slideIndex)
    }else{
        document.getElementById('Reviews-Cards').innerHTML =`
        <div class="Reviews-Card">
        <div class="Reviews-Card-img">
            <img src="./images/cardimg1.png" alt="">
        </div>
        <div class="Reviews-rating">
            <div class="Reviews-name">
                <p>Megan K.</p>
                <div class="Reviews-Stars">
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-circle-check" style="display: inline-block; color: #89C25F;"></i> <p style="display: inline-block; color: #89C25F;">verified buyer</p>
            </div>
        </div>
        <div class="Reviews-Review">
                <p>I love the MagicMassage! It’s simple to use, does not mess up my curly hair as many other similar products do, and the massage is relaxing as it is refreshing. I feel like it has been made for my scalp! It just feels right.</p>
        </div>
    </div>



    <div class="Reviews-Card">
        <div class="Reviews-Card-img">
            <img src="./images/cardimg2.png" alt="">
        </div>
        <div class="Reviews-rating">
            <div class="Reviews-name">
                <p>Megan K.</p>
                <div class="Reviews-Stars">
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-circle-check" style="display: inline-block; color: #89C25F;"></i> <p style="display: inline-block; color: #89C25F;">verified buyer</p>
            </div>
        </div>
        <div class="Reviews-Review">
                <p>I could not be happier with this product! I use it at night to relax and it does wonders for me. My kids and dog also love it, they’ll sit and let me massage their scalp for hours. At first my Labrador was hesitant not knowing what it was, but now she gets excited as soon as I take the MagicMassage out.</p>
        </div>
    </div>




    <div class="Reviews-Card">
        <div class="Reviews-Card-img">
            <img src="./images/cardimg3.png" alt="">
        </div>
        <div class="Reviews-rating">
            <div class="Reviews-name">
                <p>Megan K.</p>
                <div class="Reviews-Stars">
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-circle-check" style="display: inline-block; color: #89C25F;"></i> <p style="display: inline-block; color: #89C25F;">verified buyer</p>
            </div>
        </div>
        <div class="Reviews-Review">
                <p>It arrived in perfect condition, and the packaging was immaculate. It felt amazing on my head, like someone was massaging it with the perfect pressure and speed. My long hair doesn't get caught in it at all, and I feel relaxed after using it. Best purchase I’ve made in a LONG time!</p>
        </div>
    </div>




    <div class="Reviews-Card">
        <div class="Reviews-Card-img">
            <img src="./images/cardimg4.png" alt="">
        </div>
        <div class="Reviews-rating">
            <div class="Reviews-name">
                <p>Megan K.</p>
                <div class="Reviews-Stars">
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                    <i class="fa-solid fa-star" style="color: #F6C644; font-size: 9px;"></i>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-circle-check" style="display: inline-block; color: #89C25F;"></i> <p style="display: inline-block; color: #89C25F;">verified buyer</p>
            </div>
        </div>
        <div class="Reviews-Review">
                <p>I could not love this massager more. I use it for scalp stimulation during showers as it feels great to massage with shampoo. I love that it's light enough to carry it with me when I travel and comfortable to use. The product looks luxurious and would recommend this to anyone looking for a high quality head massager.</p>
        </div>
    </div>
        `
    }
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}
  
slide()
displayWindowSize()
window.addEventListener('resize',displayWindowSize);
window.addEventListener('resize',slide);
