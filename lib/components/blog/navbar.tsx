import Link from "next/link";
import React from "react";

export const Navbar = () => {

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
            <Link href={"/"} passHref={true}>
                <a className="navbar-brand js-scroll-trigger" style={{fontWeight: "bold"}}>
                    RingoDev
                </a>
            </Link>
        </div>
    )
}

export default Navbar
