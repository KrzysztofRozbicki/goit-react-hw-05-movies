import{c as h,r,j as t,L as l}from"./index-27d478c7.js";import{f as p,e as d}from"./fetchMovies-019772f4.js";const j=()=>{const[a,c]=h(),s=a.get("query")??"",[i,n]=r.useState([]),o=async()=>{const e=await p(d(s));n(e)},u=e=>{e.preventDefault();const m=e.target.elements.input.value;c({query:m}),e.target.reset()};return r.useEffect(()=>{s!==""&&o()},[s]),t.jsxs(t.Fragment,{children:[t.jsxs("form",{onSubmit:u,children:[t.jsx("input",{type:"text",name:"input",className:"movie-search"}),t.jsx("button",{type:"submit",children:"Search"})]}),t.jsx("ul",{children:i.map(e=>t.jsx("li",{children:t.jsxs(l,{to:`/movies/${e.id}`,children:[" ",e.title]})},e.id))})]})};export{j as default};
