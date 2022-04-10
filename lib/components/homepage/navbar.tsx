import {NavComponent} from "../../types/homepage/storyblok-components";


import Image from "next/image";
import React from "react";
import Icon from "../icon";

const Navbar: React.FC<NavComponent> = ({logo, brand}: NavComponent) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger">

                        <Image src={logo.filename} alt="RingoDev logo" width={40} height={40}
                               style={{marginTop: "-4px"}}/>
                        {brand}
                    </a>
                    {/*<button aria-label="Subscription Button"*/}
                    {/*        // onClick="subscribeUser()" style="display:none"*/}
                    {/*        id="subscribe"*/}
                    {/*        className="ml-0 btn btn-secondary">*/}
                    {/*    <i className="far fa-bell fa-lg"></i>*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    // onClick="unSubscribeUser()" style="display:none"*/}
                    {/*    id="unsubscribe"*/}
                    {/*        className="btn btn-secondary">*/}
                    {/*    <i className="far fa-bell-slash fa-lg"></i>*/}
                    {/*</button>*/}
                    <button
                        className="ml-auto navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <Icon name={"Menu"} color={"white"} size={16} strokeWidth={3}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {/*{*/}
                            {/*    items.map(i =>*/}
                            {/*        (*/}
                            {/*            <li key={i.id} className="nav-item mx-0 mx-lg-1">*/}
                            {/*                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"*/}
                            {/*                   href={"#" + i.id}>{i.title}</a></li>*/}
                            {/*        ))*/}
                            {/*}*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar
