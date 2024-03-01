import{s as A,a as I,b as M,i as h,d as H,c as P}from"./assets/support-ua-b9a9a02e.js";import{a as c}from"./assets/vendor-0cb09735.js";class w{async fetchCategories(){try{return(await c.get("https://books-backend.p.goit.global/books/category-list")).data}catch(t){throw console.error("Error fetching categories:",t),t}}async fetchTopCategories(){try{return(await c.get("https://books-backend.p.goit.global/books/top-books")).data}catch(t){throw console.error("Error fetching top categories:",t),t}}async fetchBooksByCategory(t){try{return(await c.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data}catch(o){throw console.error("Error fetching books by category:",o),o}}async fetchBookById(t){try{return(await c.get(`https://books-backend.p.goit.global/books/${t}`)).data}catch(o){throw console.error("Error fetching book by ID:",o),o}}}const L=document.querySelector(".category-list"),i=document.querySelector(".gallery-list"),_=document.querySelector("#all-categories"),k=document.querySelector(".category-title"),y=document.querySelector(".title-wrapper"),b=document.querySelector(".backdrop-loader"),f=document.querySelector(".loader"),m=new w;async function O(){try{const e=await m.fetchCategories();F(e)}catch(e){console.log("Failed to render show category list:",e)}}O();async function p(){T();try{d(!0);const e=await m.fetchTopCategories();d(!1);for(let o=0;o<4;o++)D(e[o]);document.querySelector(".category-list-item").classList.add("active")}catch(e){console.error("Failed to fetch all categories:",e)}document.querySelectorAll(".see-more-btn").forEach(e=>e.addEventListener("click",C))}p();function F(e){const t=e.map(({list_name:o})=>`
        <li class="category-list-item">
            <h4 class="category-name">${o}</h4>
        </li>`).join("");L.innerHTML+=t}function S(e){return e.map(({_id:o,book_image:s,author:r,title:l})=>`
        <li class="gallery-item" id="${o}">
            <div class="book-image-container">
              <img src="${s}" alt="${l}" class="book-cover" loading="lazy"/>
              <p class="quick-view-info">Quick view</p>
            </div>
            <h3 class="book-title">${v(l)}</h3>
            <h5 class="book-author">${v(r)}</h5>
        </li>`).join("")}function D(e){E("Best Sellers Books"),y.style.display="flex";const{list_name:o,books:s}=e,r=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${o}</h3>
        <ul class="gallery-list-item">
          ${S(s)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>`;i.innerHTML+=r}function z(e){const t=e[0].list_name;E(t);const o=S(e);i.innerHTML=o}async function C(e){const t=e.target.closest("li").children[0].textContent;try{d(!0),i.innerHTML="",y.style.display="none";const o=await m.fetchBooksByCategory(t);o.length!=0?(d(!1),i.style.cssText="flex-direction: row; flex-wrap: wrap",y.style.display="flex",z(o),T()):p(),e.target.closest("li").classList.add("active")}catch(o){console.error("Failed to render page by category:",o)}}function v(e){return e.length>=15?`${e.slice(0,15)}...`:e}function E(e){let t=e.split(" ");const o=t[t.length-1];t=t.slice(0,t.length-1);const s=t.join(" ");k.textContent=`${s}`,k.nextElementSibling.textContent=`${o}`}function T(){document.querySelectorAll(".category-list-item").forEach(e=>e.classList.remove("active"))}function d(e){e?(f.classList.remove("hidden"),b.classList.remove("hidden")):(f.classList.add("hidden"),b.classList.add("hidden"))}L.addEventListener("click",C);_.addEventListener("click",p);const N=new w,x=document.querySelector("body");document.querySelector(".gallery-list").addEventListener("click",async e=>{const t=e.target.closest("li").getAttribute("id"),o=await N.fetchBookById(t);W(o);const s=document.querySelector(".backdrop"),r=document.querySelector(".close-modal");x.style.overflow="hidden",r.addEventListener("click",u),s.addEventListener("click",$),document.addEventListener("keydown",q)});function W(e){const t=`<div class="backdrop">
  <div class="modal">
    <button class="close-modal">
      <svg class="modal-svg-close" width="24" height="24">
        <use href="${A}#icon-x-close"></use>
      </svg>
    </button>

    <div class="desctop">
      <img src="${e.book_image}" alt="${e.title}" class="img-modal" />
      <div class="lauch">
        <div class="tittle-books">
          <h2 class="boock-name">${e.title}</h2>
          <p class="author">${e.author}</p>
        </div>

        <p class="about-book">
         ${e.description}
        </p>

        <ul class="sale-place">
          <li>
            <a href="${e.amazon_product_url}" target="_blank"
              ><img

                class="amazon-link"
                              
                src="${I}"

                alt="amazon"
                width="62"
                height="19"
            /></a>
          </li>
          <li>
            <a href="${e.book_uri}" target="_blank"
              ><img

                class="apple-link"
                               
                src="${M}"

                alt="amazon"
                width="33"
                height="32"
            /></a>
          </li>
        </ul>
      </div>
    </div>

    <button class="add-lokalstorage" type="button"></button>
    <p class="congrat"></p>
  </div>
</div>
`;document.querySelector("main").insertAdjacentHTML("beforeend",t);const s=document.querySelector(".add-lokalstorage"),r=document.querySelector(".congrat");function l(){const n=h(e._id),a=n?"REMOVE FROM THE SHOPPING LIST":"ADD TO SHOPPING LIST",B=`Congratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".`;r.textContent=B,n?r.style.display="block":r.style.display="none",s.textContent=a,window.innerWidth<768&&(a==="ADD TO SHOPPING LIST"?(s.style.left="62px",s.style.top="695px"):a==="REMOVE FROM THE SHOPPING LIST"&&(s.style.padding="14px 23px 14px 23px"))}l(),s.addEventListener("click",n=>{n.preventDefault();const a=h(e._id);console.log(a),a?H(e._id):P(e),l()})}function u(){j(),document.querySelector(".backdrop").remove()}function j(){const e=document.querySelector(".backdrop"),t=document.querySelector(".close-modal");x.style.overflow="visible",t.removeEventListener("click",u),e.removeEventListener("click",$),document.removeEventListener("keydown",q)}function $(e){const t=document.querySelector(".backdrop");e.target===t&&u()}function q(e){e.key==="Escape"&&u()}const g=document.querySelector(".js-scroll-btn");g.addEventListener("click",R);window.addEventListener("scroll",G);function G(){scrollY>100?g.classList.remove("visually-hidden-scroll"):g.classList.add("visually-hidden-scroll")}function R(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
