var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a=o("kEUo3");const l=document.querySelector("input"),n=document.querySelector("textarea"),i=document.querySelector("form");var u;i.addEventListener("input",(0,a.throttle)((function(e){d[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(d))}),500)),i.addEventListener("submit",(function(e){if(e.preventDefault(),""===l.value||""===n.value)alert("Заполните все поля");else{const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),e.target.reset(),localStorage.removeItem("feedback-form-state"),d={}}}));let d=null!==(u=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==u?u:{};l.value=d.email||"",n.value=d.message||"";
//# sourceMappingURL=03-feedback.11dfef54.js.map