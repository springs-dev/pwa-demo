import React, { Component } from 'react';

export default class Services extends Component{
    render(){
        return(
            <div>
                <section id="services" className="section-padding section-border-bottom">
                    <div className="container">
                        <!-- Title -->
                        <div className="row mb60">
                            <div className="col-sm-12 col-md-6 col-md-offset-3 text-center">
                                <h2>Services</h2>
                                <span className="divider divider-center divider-dark" />
                                <p className="lead-sm no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Itaque sensibus rationem.</p>
                            </div><!-- /.column -->
                        </div><!-- /.row -->

                        <!-- Row 1 - Boxes -->
                        <div className="row mb30">
                            <!-- Box 1 -->
                            <div className="col-md-4 leftReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-monitor"></span>
                                    <h4 className="spaced mt20 mb20">Web/Ui Design</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div><!-- /.column -->

                            <!-- Box 2 -->
                            <div className="col-md-4 mt30-xs mt30-sm topReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-phone"></span>
                                    <h4 className="spaced mt20 mb20">App Design</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div><!-- /.column -->

                            <!-- Box 3 -->
                            <div className="col-md-4 mt30-xs mt30-sm rightReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-wine"></span>
                                    <h4 className="spaced mt20 mb20">Branding</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div><!-- /.column -->
                        </div><!-- /.row -->

                        <!-- Row 2 - Boxes -->
                        <div className="row">
                            <!-- Box 4 -->
                            <div className="col-md-4 leftReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-lock"></span>
                                    <h4 className="spaced mt20 mb20">Security</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div><!-- /.column -->

                            <!-- Box 5 -->
                            <div className="col-md-4 mt30-xs mt30-sm bottomReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-users"></span>
                                    <h4 className="spaced mt20 mb20">Support</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div><!-- /.column -->

                            <!-- Box 6 -->
                            <div className="col-md-4 mt30-xs mt30-sm rightReveal">
                                <div className="services-box">
                                    <span className="light-icon pe-7s-server"></span>
                                    <h4 className="spaced mt20 mb20">Hosting</h4>
                                    <p className="no-margin">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus ratio nem adiunxit et ratione.</p>
                                </div>
                            </div><!-- /.column -->
                        </div><!-- /.row -->
                    </div><!-- /.container -->
                </section>
            </div>
        )
    }
}