import styled from "styled-components";
import Navigation from "../Navigation";

const StyledHeader=styled.header`
        display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fdf2e9;
    /* Because we ant it ot e sticky later */
height: 9.6rem;
padding: 0 4.8rem;
& img.logo {
    height: 2.2rem;

}
`

const Header=()=>{

    return (
        <StyledHeader>
            <img src={`../src/assets/img/omnifood-logo.png`} alt="Omnifood logo" className="logo"></img>
 <Navigation/>
        </StyledHeader>
    )
}



export default Header;