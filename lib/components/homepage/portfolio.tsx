import {PortfolioProps} from "../../types/storyblok-components";


import Image from "next/image";
import Icon from "../icon";

const Portfolio = ({title, projects}: PortfolioProps) => {
    return (
        <>
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                        {title}
                    </h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"/>
                        <div className="divider-custom-icon">
                            {/*<i className="fas fa-star"/>*/}
                            <Icon name={"Star"} color={"currentColor"} size={40} fill={"currentColor"}/>
                        </div>
                        <div className="divider-custom-line"/>
                    </div>
                    <div className="row">
                        {projects.map(p => (
                            <div key={p.image.id} className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-toggle="modal"
                                     data-target="#portfolioModal{{ .modalID }}">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white">
                                            <i className="fas fa-plus fa-3x"/>
                                        </div>
                                    </div>
                                    <Image alt={"Project"} src={p.image.filename} height={650} width={900}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Portfolio
