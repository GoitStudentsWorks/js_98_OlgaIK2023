import{l,s as b,a as g,b as k,d as $}from"./assets/support-ua-b9a9a02e.js";const v="/js_98_OlgaIK2023/assets/IMG_9606 1-0439e3af.png",r=document.querySelector(".shopping-list"),y=l();function c(s){r.innerHTML="";const a=`<div class="empty-wrapper">
    <p class="empty">This page is empty, add some books and proceed to order.</p>
        <img
        class="no-book"
        src="${v}"
        alt="Book"
        />
    </div>`,m=s.map(({book_image:o,title:t,author:n,_id:p,description:i,list_name:d,amazon_product_url:u,book_uri:h})=>`<li class="one-book">
            <img
                class="img-book"
                src="${o}"
                alt="Book"
            />
            <div class="discription">
                <div class="up-part">
                <h2 class="book-name">${e(t)}</h2>

                <button data-id="${p}" class="basket" type="button">
                    <svg class="trash" width="16" height="16">
                    <use href="${b}#icon-trash-031"></use>
                    </svg>
                </button>
                </div>
                <h3 class="type-name">${e(d)}</h3>
                <p class="text-discription">
                ${i?f(i):"no description"}
                </p>

                <div class="book-app">
                <h3 class="name-author">${e(n)}</h3>
                <div class="books-wrapper">
                    <a href="${u}" target="_blank"><img class="amazon" src="${g}" alt="amazon" /></a>
                    <a href="${h}" target="_blank"><img class="apple" src="${k}" alt="apple" /></a>
                </div>
                </div>
            </div>
            </li>`).join("");r.innerHTML=s.length>0?m:a,document.querySelectorAll(".shopping-list .basket").forEach(o=>{const t=o.getAttribute("data-id");o.addEventListener("click",()=>{$(t);const n=l();c(n)})})}c(y);function e(s){return window.innerWidth<768&&s.length>=15?`${s.slice(0,15)}...`:s}function f(s){return window.innerWidth<768&&s.length>=80?`${s.slice(0,80)}...`:s}
//# sourceMappingURL=commonHelpers2.js.map
