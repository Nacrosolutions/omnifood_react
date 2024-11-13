import styled from "styled-components";
import Heading from "../helper/Heading";

const SectionFeatured=styled.section`
    padding: 4.8rem 0 3.2rem 0;

    .heading-featured-in{
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 24px;
    color: #888;
    
}

.logos img {
    height: 3.2rem;
    filter: brightness(0);
    opacity: 50%;
}

.logos {
    display: flex;
   justify-content: space-around;
}


`

const Featured=()=>{


    return (
<SectionFeatured>
    <div className="container">
        <Heading level="2" className="heading-featured-in">As featured in</Heading>
        <div className="logos">
<img src={`../src/assets/img/logos/techcrunch.png`} alt="techCrunch logo"/>
<img src={`../src/assets/img/logos/business-insider.png`} alt="Business Insider logo"/>
<img src={`../src/assets/img/logos/the-new-york-times.png`} alt="New York logo"/>
<img src={`../src/assets/img/logos/forbes.png`} alt="FORBS"/>
<img src={`../src/assets/img/logos/usa-today.png`} alt="techCrunch logo"/>
        </div>
    </div>
</SectionFeatured>
    )
}


export default Featured;