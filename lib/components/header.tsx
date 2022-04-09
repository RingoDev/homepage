import {HeaderProps} from "../types/storyblok-components";


import Image from "next/image";

const Header = ({title, subtitle, image}: HeaderProps) => {
    return (
        <>
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">

                    <Image alt={"RingoDev"} src={image.filename} height="240" width="240"/>
                    {/*<picture>*/}
                    {/*    <source*/}
                    {/*        srcSet="img/{{ with .Site.Params.header.image }}{{ . }}{{ end }}_320px.webp 1x, img/{{ with .Site.Params.header.image }}{{ . }}{{ end }}_640px.webp 2x"*/}
                    {/*        type="image/webp">*/}
                    {/*        <source*/}
                    {/*            srcSet="img/{{ with .Site.Params.header.image }}{{ . }}{{ end }}_320px.png 1x, img/{{ with .Site.Params.header.image }}{{ . }}{{ end }}_640px.png 2x"*/}
                    {/*            type="image/png">*/}
                    {/*            <img className="masthead-avatar mb-5" height="15rem" width="15rem"*/}
                    {/*                 style="border-radius: 50%"*/}
                    {/*                 src="img/{{ with .Site.Params.header.image }}{{ . }}{{ end }}_340px.png"*/}
                    {/*                 alt="">*/}
                    {/*</picture>*/}

                    <h1 className="masthead-heading text-uppercase mb-0">{title}</h1>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"/>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"/></div>
                        <div className="divider-custom-line"/>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">{subtitle}</p>
                </div>
            </header>
        </>
    )
}

export default Header
