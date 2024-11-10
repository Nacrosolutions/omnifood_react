import styled from "styled-components";

const StyledNav=styled.nav`
    
`


const StyledList=styled.ul`
     list-style: none;
    display: flex;
    align-items: center;
    gap:3.2rem; 

    li .main-nav-link {
        &:link,
        &:visited {
     display: inline-block;
text-decoration: none;
color: #333;
font-weight: 500;
font-size:1.8rem;
transition: all 0.3s;

        }


        &:hover,
        &:active {
            color: #cf711f;
        }

    }

    & .main-nav-link.nav-cta{
&:link,
&:visited{
    padding: 1.2rem 2.4rem;
    border-radius: 9px;
    color: #fff;
    background-color: #e67e22;


&:hover,
&:active{
    background-color: #cf711f;

}} 
}
`

const Navigation=()=>{
return(
    <StyledNav>
        <StyledList>
            <li><a href="#" className="main-nav-link">Section 1</a> </li>
            <li><a href="#" className="main-nav-link">Section 2</a> </li>
            <li><a href="#" className="main-nav-link">Section 3</a> </li>
            <li><a href="#" className="main-nav-link">Section 4</a> </li>
            <li><a href="#" className="main-nav-link nav-cta">Section 5</a> </li>
        </StyledList>

    </StyledNav>
)
}

export default Navigation;