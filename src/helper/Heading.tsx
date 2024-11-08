import  {ReactNode } from "react";
import styled from 'styled-components';

const StyledHeading = styled.h1`
font-family: "Rubik";
  font-style: normal;
`;


type HeadingProps = {
    level:string;
    className?:string;
 children:ReactNode;
}

const Heading = ({level,className,children}:HeadingProps) => {
  return (
    <StyledHeading
      as={`h${level}`}
      className={className}
    >
        {children}
        </StyledHeading>
  )
};


export default Heading;