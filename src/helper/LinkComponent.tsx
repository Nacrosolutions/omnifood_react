import { ReactNode } from "react";
import { Link } from "react-router-dom";

type LinkProps = {
    to:string;
    children:ReactNode;
    className:string;
}

const LinkComponent =({to,children,className}:LinkProps)=>{
return (
    <Link to={to} className={className}>{children}</Link>
)
}


export default LinkComponent;