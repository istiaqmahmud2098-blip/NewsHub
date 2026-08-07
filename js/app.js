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