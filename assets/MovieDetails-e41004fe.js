import{a as f,r as a,u as _,j as e,L as r,O as k}from"./index-bf82bc95.js";import{I as b,a as L}from"./fetchMovies-019772f4.js";const M=s=>Array.isArray(s)?s.map(i=>i.name).join(" "):"No genres available",w=()=>{const{movieId:s}=f(),[i,d]=a.useState({}),[o,h]=a.useState(""),v=async()=>{const t=await L(s);d(t)},c=_();a.useEffect(()=>{var t,l;h(((t=c.state)==null?void 0:t.from.pathname)+((l=c.state)==null?void 0:l.from.search)||"/"),console.log(o)},[]),a.useEffect(()=>{v()},[s]);const{title:n,release_date:m,overview:x,vote_average:j,genres:u,poster_path:p}=i;return e.jsxs("div",{className:"movie_container",children:[e.jsx(r,{to:o,children:e.jsx("button",{className:"back_button",children:"Go back"})}),e.jsxs("div",{className:"movie",children:[e.jsx("img",{src:`${b}/${p}`,alt:n}),e.jsxs("div",{className:"movie_details",children:[e.jsxs("h2",{children:[n," (",m,")"]}),e.jsxs("p",{children:["User score: ",j]}),e.jsx("h3",{children:"Overview"}),e.jsx("p",{children:x}),e.jsx("h3",{children:"Genres"}),e.jsx("p",{children:M(u)})]})]}),e.jsxs("div",{className:"movie_additional",children:[e.jsx(r,{to:"cast",children:e.jsx("p",{children:" Cast "})}),e.jsx(r,{to:"reviews",children:e.jsx("p",{children:" Reviews "})}),e.jsx(k,{})]})]})};export{w as default};