import {FooterProps} from "../types/storyblok-components";

const Footer = ({title, links}: FooterProps) => {
    return (
        <>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h3 className="text-uppercase mb-4">{title}</h3>
                            {
                                links.map(l => (
                                    <a key={l.label} aria-label={l.label} href={l.link}
                                       className="btn btn-outline-light btn-social mx-1">
                                        <i className={"fab fa-fw " + l.icon}>
                                        </i>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </footer>
            <div className="scroll-to-top d-lg-none position-fixed">
                <a aria-label="scroll-to-top" className="js-scroll-trigger d-block text-center text-white rounded"
                   href=""><i className="fa fa-chevron-up"/></a>
            </div>
        </>
    )
}

export default Footer
