import{a as S,S as $,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(o){const s={key:"51362272-d48daa27a05223f6096b84303",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15};return S.get("https://pixabay.com/api/",{params:s}).then(t=>t.data).catch(t=>{throw console.log(t),t})}const m=document.querySelector(".gallery"),w=new $(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),h=document.querySelector(".js-loader"),y=document.querySelector(".load-more-button");function p(o){const s=o.map(({webformatURL:t,largeImageURL:l,tags:e,likes:r,views:n,comments:q,downloads:v})=>`
    <li class="gallery-item">
      <a href="${l}">
        <img src="${t}" alt="${e}" loading="lazy"/>
      </a>
      <div class="info">
        <p>Likes: ${r}</p>
        <p>Views: ${n}</p>
        <p>Comments: ${q}</p>
        <p>Downloads: ${v}</p>
      </div>
    </li>
    `).join("");m.insertAdjacentHTML("beforeend",s),w.refresh()}function M(){m.innerHTML=""}function g(){h.classList.remove("is-hidden")}function L(){h.classList.add("is-hidden")}function b(){y.classList.remove("is-hidden")}function c(){y.classList.add("is-hidden")}const P=document.querySelector(".form"),B=document.querySelector(".load-more-button");let a=1,d="";c();let u=0;const O=async o=>{o.preventDefault(),M(),c(),a=1;const s=o.currentTarget.elements["search-text"].value.trim();if(s===""){i.info({message:"Insert the search request."});return}d=s;try{g();const t=await f(d,a);if(u=Math.ceil(t.totalHits/15),t.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}p(t.hits),a<u?b():c()}catch(t){i.error({message:`Error: ${t.message}`})}finally{L()}},x=async()=>{a+=1,g();try{const o=await f(d,a);if(p(o.hits),a>=u)return c(),i.info({message:"We're sorry, but you've reached the end of search results."});b()}catch(o){i.error({message:`Error: ${o.message}`})}finally{L()}};P.addEventListener("submit",O);B.addEventListener("click",x);
//# sourceMappingURL=index.js.map
