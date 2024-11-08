/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";

const StyledMealDiv=styled.div`
   display: flex;
    margin-top: 8rem;
    align-items: center;
    gap:1.6rem;
`

const StyledMealImg=styled.div`
        display: flex;
    

`

const StyledImg=styled.img`
            height: 4.8rem;
    width: 4.8rem;
    border-radius:50% ;
    margin-right: -1.6rem;
    border: 3px solid #fdf2e9;
    
    &:last-child {
        margin: 0;

    }
        
`


const StyledPara=styled.p`
      font-size: 1.8rem;
      font-weight: 600;

      & span {
        color: #cf711f;
        font-weight: 700;
      }
`

const Meals=()=>{

    return (
        <StyledMealDiv>
<StyledMealImg>

{Array.from({ length: 6 }, (_, index) => (
    <StyledImg key={index} src={`../src/assets/img/customers/customer-${index+1}.jpg`}></StyledImg>
     ))}
</StyledMealImg>
<StyledPara>We have delivered <span>250,000+</span> meals last year!</StyledPara>

        </StyledMealDiv>
    )

}


export default Meals;