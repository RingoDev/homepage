import Link from "next/link";
import Icon from "../icon";
import React from "react";

export const NavbarPost = () => {

    return (

        <div style={{
            position: "fixed",
            width: "100%",
            height: "56px",
            backgroundColor: "white",
            zIndex: "10",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxShadow: "0 2px 5px #aaaaaa",
            paddingLeft: "2rem",
        }}>
            <Link href={"/blog"} passHref={true}>
                <a>
                    <Icon name={"ChevronLeft"} color={"currentColor"} size={40}/>
                </a>
            </Link>
        </div>
    )
}

export default NavbarPost
