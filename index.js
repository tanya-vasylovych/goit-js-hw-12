import{a as f,S as m,i as a}from"./assets/vendor-Cip_4kvj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(s){const o={key:"51362272-d48daa27a05223f6096b84303",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get("https://pixabay.com/api/",{params:o}).then(t=>t.data).catch(t=>{throw console.log(t),t})}const c=document.querySelector(".gallery"),h=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),l=document.querySelector(".js-loader");function y(s){const o=s.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:i,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${t}" alt="${e}" loading="lazy"/>
      </a>
      <div class="info">
        <p>Likes: ${r}</p>
        <p>Views: ${i}</p>
        <p>Comments: ${u}</p>
        <p>Downloads: ${d}</p>
      </div>
    </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){c.innerHTML=""}function L(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const q=document.querySelector(".form"),S=s=>{s.preventDefault(),g();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){a.info({message:"Insert the search request."});return}L(),p(o).then(t=>{t.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!"}):y(t.hits)}).catch(t=>{a.error({message:`Error: ${t.message}`})}).finally(()=>{b()})};q.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
