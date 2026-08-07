const news = [
{
title: "বাংলাদেশে নতুন AI প্রযুক্তি",
category: "Technology",
image: "images/news/news1.jpg"
},
{
title: "বিশ্বকাপে বাংলাদেশের জয়",
category: "Sports",
image: "images/news/news2.jpg"
},
{
title: "শেয়ার বাজারে নতুন রেকর্ড",
category: "Business",
image: "images/news/news3.jpg"
}
];

const container = document.getElementById("news-container");

if(container){
news.forEach(item=>{
container.innerHTML += `
<div class="card">
<img src="${item.image}" alt="">
<h3>${item.title}</h3>
<p>${item.category}</p>
</div>
`;
});
}
/* =========================
   Dark Mode Script
========================= */

// Dark Mode Button নির্বাচন করা
const darkBtn = document.getElementById("darkModeBtn");

// Button পাওয়া গেলে
if (darkBtn) {

    // Button এ ক্লিক করলে
    darkBtn.addEventListener("click", function () {

        // body এর মধ্যে dark class যোগ/বাদ হবে
        document.body.classList.toggle("dark");

    });

}
/* ===========================================
   NewsHub
   Lesson 7 - Live Search
=========================================== */

// Search Box নির্বাচন
const searchInput = document.getElementById("searchInput");

// সব News Card নির্বাচন
const cards = document.querySelectorAll(".card");

// Search Box পাওয়া গেলে
if (searchInput) {

    // User টাইপ করলে
    searchInput.addEventListener("keyup", function () {

        // ছোট হাতের অক্ষরে রূপান্তর
        const keyword = this.value.toLowerCase();

        // প্রতিটি Card পরীক্ষা করা
        cards.forEach(function(card){

            // Card-এর সব লেখা নেওয়া
            const text = card.innerText.toLowerCase();

            // Keyword পাওয়া গেলে Card দেখাও
            if(text.includes(keyword)){

                card.style.display="block";

            }else{

                // না পাওয়া গেলে লুকিয়ে ফেলো
                card.style.display="none";

            }

        });

    });

}
/* =====================================
   Image Slider
====================================== */

const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let index = 0;

// Slide দেখানোর ফাংশন
function showSlide(i){

    slides.forEach(slide => slide.classList.remove("active"));

    slides[i].classList.add("active");

}

// Next Button
if(next){

next.addEventListener("click",()=>{

    index++;

    if(index>=slides.length){

        index=0;

    }

    showSlide(index);

});

}

// Previous Button
if(prev){

prev.addEventListener("click",()=>{

    index--;

    if(index<0){

        index=slides.length-1;

    }

    showSlide(index);

});

}

// Auto Slide (প্রতি ৪ সেকেন্ডে)
setInterval(()=>{

    index++;

    if(index>=slides.length){

        index=0;

    }

    showSlide(index);

},4000);