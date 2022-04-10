const Header = () => {
    return (
        <>
            <section className="page-section" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"/>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"/>
                        </div>
                        <div className="divider-custom-line"/>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <form data-netlify="true" id="contactForm" name="sentMessage">
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label htmlFor="name">Name</label>
                                        <input className="form-control" name="Name" id="name" type="text"
                                               placeholder="Name"
                                               data-validation-required-message="{{ with .Site.Params.contact.form.name.error }}{{.}}{{ end }}"/>
                                        <p className="help-block text-danger"/>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label htmlFor="email">E-Mail</label>
                                        <input className="form-control" name="Email" id="email" type="email"
                                               placeholder="E-Mail"
                                               data-validation-required-message=""/>
                                        <p className="help-block text-danger"/>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label htmlFor="phone">Phone</label>
                                        <input className="form-control" name="Phone" id="phone" type="tel"
                                               placeholder="Phone"/>
                                        <p className="help-block text-danger"/>
                                    </div>
                                </div>
                                <div>
                                    <input type="hidden" name="_subject" value="New submission!"/>
                                    <input type="text" style={{display: "none"}}/>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" name="Message" id="message" rows={5}
                                                  placeholder="Message"
                                                  data-validation-required-message="{{ with .Site.Params.contact.form.message.error }}{{.}}{{ end }}"/>
                                        <p className="help-block text-danger"/>
                                    </div>
                                </div>
                                <br/>
                                <div id="success"/>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-xl" id="sendMessageButton"
                                            type="submit">Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header
