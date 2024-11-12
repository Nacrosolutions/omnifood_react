import styled from "styled-components";
import Heading from "../helper/Heading";

const StyledSectionHow=styled.section`
        padding: 9.6px 0;
    

    
      


        .grid {
    display: grid;
    column-gap: 6.4rem;
    gap:9.6rem;
}


.grid--2-cols {
            grid-template-columns: repeat(2,1fr);

        }
        .container {

/*1140px */
max-width: 120rem;
padding: 0 3.2rem;
margin: 0 auto;
}

.extra-margin {
    padding-top:2.8rem;
}

.grid-center-v {
    align-self: center;
}
        .heading-secondary {
    font-size: 4.4rem;
    line-height: 1.2rem;
    margin-bottom: 7.2rem;
        }

        .step-img {
width: 50%;
}

.subheading {
        display: block;
    font-size:1.6rem;
    font-weight: 500;
    color: #cf711f;
    text-transform: uppercase;
    margin-bottom: 4.8rem;
    letter-spacing: 0.75px;
    margin-top: 4.4rem;
}


.step-number {
    font-size: 8.6rem;
    font-weight: 600;
    color: #ddd;
    margin-bottom: 1.2rem;
}

.step-img {
width: 35%;
}

.step-description{
    font-size: 1.8rem;
    line-height: 1.8;
}


.step-img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}


.step-img-box::before {
    content: "";
    display: block;
    width:60%;padding-bottom: 60%;
    background-color: #fdf2e9;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: -1;
}



.step-img-box::after  {
    content: "";
    display: block;
    /* //Changed */
    width:45%; 
    padding-bottom: 50%;
    background-color: #fae5d3;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: -1;
}

.heading-tertiary{
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 3.2rem;
}
`

const SectionHow=()=>{
return (
    <StyledSectionHow>
        <div className="container">
        <span className="subheading">How it works</span>
            <Heading level="2" className="heading-secondary" >Your daily dose of health in 3 simple steps</Heading>

</div>


<div className="container grid  grid-center-v grid--2-cols extra-margin">

    {/* STEP1 */}  
<div className="step-text-box">
    <p className="step-number">
        01
    </p>

    <h3 className="heading-tertiary"> Tell us what you like (and what not)</h3>
   <p className=" step-description">   Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!
</p>

</div>
<div className="step-img-box">
    <img src={`../src/assets/img/app/app-screen-1.png`} className="step-img" alt="iPhone App Preferences selection screen"/>
</div>

{/* //STEP2 */}

<div className="step-img-box">
    <img src={`../src/assets/img/app/app-screen-2.png`} className="step-img" alt="iPhone App meal approving plan"/>
</div>

<div className="step-text-box">
    <p className="step-number">
        02
    </p>

    <h3 className="heading-tertiary"> Approve your weekly meal plan</h3>
   <p className=" step-description"> Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.

</p>

</div>


<div className="step-text-box">
    <p className="step-number">
        03
    </p>

    <h3 className="heading-tertiary">Receive meals at convenient time</h3>
   <p className=" step-description">  Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!
</p>

</div>
<div className="step-img-box">
    <img src={`../src/assets/img/app/app-screen-3.png`} className="step-img" alt="iPhone App Delivery screen"/>
</div>



</div>

    </StyledSectionHow>
    
)
}


export default SectionHow;