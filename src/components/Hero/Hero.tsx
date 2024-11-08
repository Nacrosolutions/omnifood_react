import styled from "styled-components";
import Heading from "../../helper/Heading";
import './Hero.css';
import LinkComponent from "../../helper/LinkComponent";
import Meals from "./Meals";

const SectionHero=styled.section`
       background-color: #fdf2e9;
       padding: 9.6rem 0;
`;


const HeroDiv=styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:9.6rem;
    align-items: center;


`

const HeroImgDiv=styled.div`

`

const Hero=()=>{
    return (
        <SectionHero>
            <HeroDiv>
                <div className="hero-text-box">
                <Heading className="heading-primary-hero" level="1">A healthy meal delivered to your door, every single day</Heading>
  <p className="hero-description">
The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. 

</p>
<LinkComponent to="/eating" className="btn btn--full margin-right-sm">Start eating well</LinkComponent>
<LinkComponent to="/eating" className="btn btn--outline">Learn more &darr;</LinkComponent>
<Meals/>
                </div>
                <HeroImgDiv>
<img src={`../src/assets/img/hero.png`} className="hero-img" alt="Woman enjoying food,mmels in storage and food bowls on a table"/>

</HeroImgDiv>
            </HeroDiv>



        </SectionHero>
    )
}

export default Hero;