import{j as e,a as o,r as a}from"./index-f97a826c.js";import{d as c}from"./fetchMovies-019772f4.js";const l=({review:s})=>{const{content:t}=s,{name:n,rating:r}=s.author_details;return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Author: ",n]}),e.jsxs("p",{children:[" Rating: ",r]}),e.jsx("p",{children:t})]})},d=()=>{const{movieId:s}=o(),[t,n]=a.useState([]),r=async()=>{const i=await c(s);n(i)};return a.useEffect(()=>{r()},[s]),e.jsx("ul",{children:t.length>0?t.map(i=>e.jsx("li",{className:"review-single",children:e.jsx(l,{review:i})},i.id)):e.jsx("p",{children:" There are no reviews for this movie "})})};export{d as default};