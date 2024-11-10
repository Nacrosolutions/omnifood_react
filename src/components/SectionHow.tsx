import styled from "styled-components";

const StyledSectionHow=styled.section`
        padding: 9.6px 0;
        background-color: orangered;

        & div div {
            padding: 100px;
font-size: 50px;
background-color: aqua;
        }

        & div.container {
            max-width: 120rem;
    margin: 0 auto;
    padding: 0 3.2rem;
        }

        & div.grid {
            display: grid;
            gap:9.6rem;
        }

        & div.grid--2-cols {
            grid-template-columns: repeat(2,1fr);

        }
`

const SectionHow=()=>{
return (
    <StyledSectionHow>
        <div className="container grid grid--2-cols">
        <div>Test 1</div>
<div>Test 2</div>
<div>Test 3</div>
<div>Test 4</div>
</div>
    </StyledSectionHow>
    
)
}


export default SectionHow;