import{r as s,u as a,j as e,L as c}from"./index-bf82bc95.js";import{f as d,c as f}from"./fetchMovies-019772f4.js";const x=()=>{const[n,i]=s.useState([]),o=async()=>{const t=await d(f());i(t)};s.useEffect(()=>{o()},[]);const r=a();return e.jsx("ul",{children:n.map(t=>e.jsx("li",{children:e.jsx(c,{to:`/movies/${t.id}`,state:{from:r},children:t.title})},t.id))})};export{x as default};
