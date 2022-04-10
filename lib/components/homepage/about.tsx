import Icon from "../icon";
import {AboutComponent} from "../../types/homepage/storyblok-components";
import ReactMarkdown from "react-markdown";

const About = ({title, leftText, rightText}: AboutComponent) => {
    return (
        <>
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">
                        {title}
                    </h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"/>
                        <div className="divider-custom-icon">
                            <Icon name={"Star"} color={"currentColor"} size={40} fill={"currentColor"}/>
                        </div>
                        <div className="divider-custom-line"/>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ml-auto lead">
                            {/*<p className="lead">*/}
                            <ReactMarkdown>{leftText}</ReactMarkdown>
                            {/*</p>*/}
                        </div>

                        <div className="col-lg-4 mr-auto lead">
                            {/*<p className="lead">*/}
                            <ReactMarkdown>{rightText}</ReactMarkdown>
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
