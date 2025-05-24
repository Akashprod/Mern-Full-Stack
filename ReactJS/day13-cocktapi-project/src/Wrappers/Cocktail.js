import styled from "styled-components";

const Wrapper = styled.div`
header{
text-align: center;
margin-bottom : 3rem;
.btn{
margin-bottom : 1rem;
}
}

.drink-info{
padding-top : 2rem;
}

.drink p{
font-weight : 700;
text-transform : Capitalize:
line-height:2px;
margin-bottom:1rem
}

.drink-data{
margin-right:0.5rem;
background:var(--primary-400);
padding : 0.25rem 0.5rem;
border-radius : 5px;
color : var(--primary-700)
letter-spacing : 2px;
}

.img{
display:inline-block;
margin-right:0.5rem;
}
@media(min-width:992px){
.drink{
display:grid;
grid-template-columns:2fr 3fr;
align-items:center
}

.drink-info{
padding-top:0}
}
`;

export default Wrapper;
