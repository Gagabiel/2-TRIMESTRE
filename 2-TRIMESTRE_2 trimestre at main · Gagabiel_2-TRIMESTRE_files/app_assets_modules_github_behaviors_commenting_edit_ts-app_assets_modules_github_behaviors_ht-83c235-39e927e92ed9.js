"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235"],{2392:(e,t,s)=>{s.d(t,{O:()=>y});var n=s(97797),i=s(47563),o=s(41150),r=s(60341),l=s(10686),a=s(6792),m=s(21403),c=s(13937),u=s(3458);let d=[];function f(e){e.querySelector(".js-write-tab").click();let t=e.querySelector(".js-comment-field");t.focus(),(0,n.h)(t,"change")}function j(e){return e.querySelector(".js-comment-edit-form-deferred-include-fragment")}function g(e){j(e)?.setAttribute("loading","eager")}function y(e){let t=e.currentTarget.closest("form"),s=e.currentTarget.getAttribute("data-confirm-text");if((0,a.Av)(t)&&!confirm(s))return!1;for(let e of t.querySelectorAll("input, textarea"))e.value=e.defaultValue,e.classList.contains("session-resumable-canceled")&&(e.classList.add("js-session-resumable"),e.classList.remove("session-resumable-canceled"));let n=e.currentTarget.closest(".js-comment");return n&&n.classList.remove("is-comment-editing"),!0}function p(e){let t=e.querySelector("ol");if(t)for(let e of(t.textContent="",d.map(e=>{let t=document.createElement("li");return t.textContent=e,t})))t.appendChild(e);e.hidden=!1}function h(e,t){let s=e.querySelector(".js-comment-show-on-error");s&&(s.hidden=!t);let n=e.querySelector(".js-comment-hide-on-error");n&&(n.hidden=t)}(0,m.lB)(".js-comment-header-actions-deferred-include-fragment",{subscribe:e=>(0,l.Rt)(e,"loadstart",()=>{g(e.closest(".js-comment"))},{capture:!1,once:!0})}),(0,m.lB)(".js-comment .contains-task-list",{add:e=>{g(e.closest(".js-comment"))}}),(0,n.on)("click",".js-comment-edit-button",function(e){let t=e.currentTarget.closest(".js-comment");t.classList.add("is-comment-editing");let s=j(t);s?s.addEventListener("include-fragment-replaced",()=>f(t),{once:!0}):f(t);let n=e.currentTarget.closest(".js-dropdown-details");n&&n.removeAttribute("open")}),(0,n.on)("click",".js-comment-hide-button",function(e){let t=e.currentTarget.closest(".js-comment");h(t,!1);let s=t.querySelector(".js-minimize-comment");s&&s.classList.remove("d-none");let n=e.currentTarget.closest(".js-dropdown-details");n&&n.removeAttribute("open")}),(0,n.on)("click",".js-comment-hide-minimize-form",function(e){e.currentTarget.closest(".js-minimize-comment").classList.add("d-none")}),(0,n.on)("click",".js-comment-cancel-button",y),(0,n.on)("click",".js-cancel-issue-edit",function(e){e.currentTarget.closest(".js-details-container").querySelector(".js-comment-form-error").hidden=!0}),(0,c.JW)(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize",function(e,t,s){let n=e.closest(".js-comment");n.classList.add("is-comment-loading");let i=n.getAttribute("data-body-version");i&&s.headers.set("X-Body-Version",i)}),(0,c.JW)(".js-comment .js-comment-update",async function(e,t){let s;let n=e.closest(".js-comment"),o=n.querySelector(".js-comment-update-error"),l=n.querySelector(".js-comment-body-error");o instanceof HTMLElement&&(o.hidden=!0),l instanceof HTMLElement&&(l.hidden=!0),d=[],e.classList.add("is-dirty");try{s=await t.json()}catch(e){if(422===e.response.status){let t=JSON.parse(e.response.text);if(t.errors){o instanceof HTMLElement&&(o.textContent=`There was an error posting your comment: ${t.errors.join(", ")}`,o.hidden=!1);return}}else throw e}finally{e.classList.remove("is-dirty")}if(!s)return;let m=s.json;m.errors&&m.errors.length>0&&(d=m.errors,p(l));let c=n.querySelector(".js-comment-body"),u=null!=c&&"async"===e.getAttribute("data-submitting-tracking-block-update")&&(0,a.it)(c,!0,!0);if(c&&m.body&&!u&&(0,i.Eu)(c,m.body,{keepInputValues:!0}),null!=m.source){let e=n.querySelector(".js-comment-field");if(e&&(e.defaultValue=m.source,u||(e.value=m.source)),m.default_merge_commit_message){if(document.querySelector(".js-merge-pr.is-merging")){let e=document.querySelector(".js-merge-pull-request textarea");e instanceof HTMLTextAreaElement&&e.value===e.defaultValue&&(e.value=e.defaultValue=m.default_merge_commit_message)}if(m.default_squash_commit_message&&document.querySelector(".js-merge-pr.is-squashing")){let e=document.querySelector(".js-merge-pull-request textarea");e instanceof HTMLTextAreaElement&&e.value===e.defaultValue&&(e.value=e.defaultValue=m.default_squash_commit_message)}}document.querySelector(".js-merge-box-button-merge")?.setAttribute("data-input-message-value",m.default_merge_commit_message),document.querySelector(".js-merge-box-button-squash")?.setAttribute("data-input-message-value",m.default_squash_commit_message)}n.setAttribute("data-body-version",m.newBodyVersion);let f=n.querySelector(".js-body-version");f instanceof HTMLInputElement&&(f.value=m.newBodyVersion);let j=n.querySelector(".js-discussion-poll");for(let e of(j&&m.poll&&(j.innerHTML=m.poll),n.querySelectorAll("input, textarea")))e.defaultValue=e.value;n.classList.remove("is-comment-stale"),e.hasAttribute("data-submitting-tracking-block-update")||n.classList.remove("is-comment-editing");let g=n.querySelector(".js-comment-edit-history");if(g){let e=await (0,r.Ts)(document,m.editUrl);(0,i.r9)(g,e)}}),(0,m.lB)(".js-comment-body-error",{add:e=>{d&&d.length>0&&p(e)}}),(0,c.JW)(".js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize",async function(e,t){let s;let n=e.closest(".js-comment");try{await t.text()}catch(e){if(422===(s=e).response.status){let e;try{e=JSON.parse(s.response.text)}catch(e){}e&&e.stale&&n.classList.add("is-comment-stale")}else throw s}finally{e.dispatchEvent(new CustomEvent("submit:complete",{bubbles:!0,detail:{error:s}}))}n.classList.remove("is-comment-loading")}),(0,c.JW)(".js-timeline-comment-unminimize, .js-timeline-comment-minimize",async function(e,t){let s=e.closest(".js-minimize-container");try{let e=await t.html();s.replaceWith(e.html)}catch(e){h(s,!0)}}),(0,c.JW)(".js-discussion-comment-unminimize, .js-discussion-comment-minimize",async function(e,t){let s=e.closest(".js-discussion-comment"),n=s.querySelector(".js-discussion-comment-error");n&&(n.hidden=!0);try{let e=await t.html();s.replaceWith(e.html)}catch(e){if(e.response.status>=400&&e.response.status<500){if(e.response.html){let t=e.response.html.querySelector(".js-discussion-comment").getAttribute("data-error");n instanceof HTMLElement&&(n.textContent=t,n.hidden=!1)}}else throw e}}),(0,c.JW)(".js-comment-delete",async function(e,t){await t.json();let s=e.closest(".js-comment-container")||e.closest(".js-line-comments");s&&1!==s.querySelectorAll(".js-comment").length&&(s=e.closest(".js-comment"));let n=s?.closest(".js-comment-container")||s?.closest(".js-line-comments");if(s?.remove(),n&&1===n.querySelectorAll(".js-comment").length)for(let e of n.querySelectorAll(".js-delete-on-last-reply-deleted"))e.remove()}),(0,c.JW)(".js-issue-update",async function(e,t){let s;let n=e.closest(".js-details-container"),i=n.querySelector(".js-comment-form-error");try{s=await t.json()}catch(e){i.textContent=e.response?.json?.errors?.[0]||"Something went wrong. Please try again.",i.hidden=!1}if(!s)return;n.classList.remove("open"),i.hidden=!0;let o=s.json;if(null!=o.issue_title){n.querySelector(".js-issue-title").textContent=o.issue_title;let e=n.closest(".js-issues-results");if(e){if(e.querySelector(".js-merge-pr.is-merging")){let t=e.querySelector(".js-merge-pull-request .js-merge-title");t instanceof HTMLInputElement&&t.value===t.defaultValue&&(t.value=t.defaultValue=o.default_merge_commit_title)}else if(e.querySelector(".js-merge-pr.is-squashing")){let t=e.querySelector(".js-merge-pull-request .js-merge-title");t instanceof HTMLInputElement&&t.value===t.defaultValue&&(t.value=t.defaultValue=o.default_squash_commit_title)}let t=e.querySelector("button[value=merge]");t&&t.setAttribute("data-input-title-value",o.default_merge_commit_title);let s=e.querySelector("button[value=squash]");s&&s.setAttribute("data-input-title-value",o.default_squash_commit_title)}}for(let t of(document.title=o.page_title,e.elements))(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(t.defaultValue=t.value)}),(0,c.JW)(".js-comment-minimize",async function(e,t){await t.json();let s=e.closest(".js-comment"),n=s.querySelector(".js-minimize-comment");if(n&&n.classList.contains("js-update-minimized-content")){let t=e.querySelector("input[type=submit], button[type=submit]");t&&t.classList.add("disabled");let n=s.closest(".js-comment-container");n&&await (0,u.le)(n)}else{n&&n.classList.add("d-none");let t=e.closest(".unminimized-comment");t.classList.add("d-none"),t.classList.remove("js-comment");let s=e.closest(".js-minimizable-comment-group").querySelector(".minimized-comment");s&&s.classList.remove("d-none"),s&&s.classList.add("js-comment")}}),(0,c.JW)(".js-comment-unminimize",async function(e,t){await t.json();let s=e.closest(".js-minimizable-comment-group"),n=s.querySelector(".unminimized-comment"),i=s.querySelector(".minimized-comment");if(n)n.classList.remove("d-none"),n.classList.add("js-comment"),i&&i.classList.add("d-none"),i&&i.classList.remove("js-comment");else{if(i){let e=i.querySelector(".timeline-comment-actions");e&&e.classList.add("d-none"),i.classList.remove("js-comment")}let e=s.closest(".js-comment-container");await (0,u.le)(e)}}),(0,n.on)("details-menu-select",".js-comment-edit-history-menu",e=>{let t=e.detail.relatedTarget.getAttribute("data-edit-history-url");if(!t)return;e.preventDefault();let s=(0,r.Ts)(document,t);(0,o.r)({content:s,dialogClass:"Box-overlay--wide overflow-visible",errorMessage:"Couldn't display edit history diff"})},{capture:!0})},42403:(e,t,s)=>{s.d(t,{t:()=>a});var n=s(92059),i=s(21403),o=s(97797);function r(e){let t=e.getAttribute("data-required-value"),s=e.getAttribute("data-required-value-prefix");if(e.value===t)e.setCustomValidity("");else{let n=t;s&&(n=s+n),e.setCustomValidity(n)}}(0,n.eC)("[data-required-value]",function(e){r(e.currentTarget)}),(0,o.on)("change","[data-required-value]",function(e){let t=e.currentTarget;r(t),a(t.form)}),(0,n.eC)("[data-required-trimmed]",function(e){let t=e.currentTarget;""===t.value.trim()?t.setCustomValidity(t.getAttribute("data-required-trimmed")):t.setCustomValidity("")}),(0,o.on)("change","[data-required-trimmed]",function(e){let t=e.currentTarget;""===t.value.trim()?t.setCustomValidity(t.getAttribute("data-required-trimmed")):t.setCustomValidity(""),a(t.form)}),(0,n.uE)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]",e=>{let t=e.checkValidity();function s(){let s=e.checkValidity();s!==t&&e.form&&a(e.form),t=s}e.addEventListener("input",s),e.addEventListener("blur",function t(){e.removeEventListener("input",s),e.removeEventListener("blur",t)})});let l=new WeakMap;function a(e){let t=e.checkValidity();for(let s of e.querySelectorAll("button[data-disable-invalid]"))s.disabled=!t}(0,i.lB)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(e){let t=e.form;t&&(l.get(t)||(t.addEventListener("change",()=>a(t)),l.set(t,!0)),e.disabled=!t.checkValidity())}}),(0,i.lB)("input[data-required-change], textarea[data-required-change]",function(e){let t="radio"===e.type&&e.form?e.form.elements.namedItem(e.name).value:null;function s(s){let n=e.form;if(s&&"radio"===e.type&&n&&t)for(let s of n.elements.namedItem(e.name))s instanceof HTMLInputElement&&s.setCustomValidity(e.value===t?"unchanged":"");else e.setCustomValidity(e.value===(t||e.defaultValue)?"unchanged":"")}e.addEventListener("input",s),e.addEventListener("change",s),s(),e.form&&a(e.form)}),document.addEventListener("reset",function(e){if(e.target instanceof HTMLFormElement){let t=e.target;setTimeout(()=>a(t))}})}}]);
//# sourceMappingURL=app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-7f09a18053a1.js.map