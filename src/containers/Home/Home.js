import React, { Component } from 'react';
import work1ImgSrc from '../../img/work/1.jpg';
import work2ImgSrc from '../../img/work/2.jpg';
import work3ImgSrc from '../../img/work/3.jpg';
import work4ImgSrc from '../../img/work/4.jpg';
import work5ImgSrc from '../../img/work/5.jpg';
import work6ImgSrc from '../../img/work/6.jpg';
import work7ImgSrc from '../../img/work/7.jpg';
import work8ImgSrc from '../../img/work/8.jpg';
import work9ImgSrc from '../../img/work/9.jpg';

export default class Home extends Component{
    render(){
        return(
            <div>
                <div>
                    <div id="home" className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                                    <div className="top-content bottomReveal">
                                        <h2>I am a minimal portfolio</h2>
                                        <span className="divider" />
                                        <p>Con panna organic americano grinder single origin white mug chicory arabica breve cortado. In sit, aromatic lungo shop body redeye. Galão dripper mocha doppio seasonal aroma barista. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mauris felis.</p>
                                        <p className="no-margin">
                                            <a className="btn btn-primary btn-lg scroll-link" data-id="about"  role="button">About Us</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="work" className="section-padding-work">
                    <div className="container">
                        <div className="row mb50">
                            <div className="col-sm-12 col-md-6 col-md-offset-3 text-center filter-button-group">
                                <h2>Portfolio</h2>
                                <span className="divider divider-center divider-dark mb30" />
                                <span>Filter :</span>
                                <ul className="list-work-filter list-unstyled list-inline">
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".web">Web</li>
                                    <li data-filter=".print">Print</li>
                                    <li data-filter=".product">Product</li>
                                </ul>
                            </div>
                        </div>


                        <div className="row grid">

                            <div className="col-md-4 product web">
                                <a href={work1ImgSrc} className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Right &amp; Sand</h4>
                                                <span>Product</span>
                                            </div>
                                        </div>
                                        <img src={work1ImgSrc} className="img-responsive" alt="..." />
                                    </div>
                                </a>
                            </div>


                            <div className="col-md-4 print product">
                                <a href={work2ImgSrc} className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Polly Fox</h4>
                                                <span>Print</span>
                                            </div>
                                        </div>
                                        <img src={work2ImgSrc} className="img-responsive" alt="..." />
                                    </div>
                                </a>
                            </div>


                            <div className="col-md-4 print product">
                                <a href={work3ImgSrc} className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Roots</h4>
                                                <span>Print</span>
                                            </div>
                                        </div>
                                        <img src={work3ImgSrc} className="img-responsive" alt="..." />
                                    </div>
                                </a>
                            </div>


                            <div className="col-md-4 print product">
                                <a href={work4ImgSrc} className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Magazine</h4>
                                                <span>Print</span>
                                            </div>
                                        </div>
                                        <img src={work4ImgSrc} className="img-responsive" alt="..." />
                                    </div>
                                </a>
                            </div>


                            <div className="col-md-4 web">
                                <a href={work5ImgSrc} className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Bottle</h4>
                                                <span>Product</span>
                                            </div>
                                        </div>
                                        <img src={work5ImgSrc} className="img-responsive" alt="..." />
                                    </div>
                                </a>
                            </div>


                            <div className="col-md-4 product web">
                                <a href={work6ImgSrc} className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Triangle</h4>
                                                <span>Web</span>
                                            </div>
                                        </div>
                                        <img src={work6ImgSrc} className="img-responsive" alt="..." />
                                    </div>
                                </a>
                            </div>


                            <div className="col-md-4 product web">
                                <a href={work7ImgSrc} className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Hermes</h4>
                                                <span>Web</span>
                                            </div>
                                        </div>
                                        <img src={work7ImgSrc} className="img-responsive" alt="..." />
                                    </div>
                                </a>
                            </div>


                            <div className="col-md-4 web">
                                <a href={work8ImgSrc} className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Reasons</h4>
                                                <span>Web</span>
                                            </div>
                                        </div>
                                        <img src={work8ImgSrc} className="img-responsive" alt="..." />
                                    </div>
                                </a>
                            </div>


                            <div className="col-md-4 web">
                                <a href={work9ImgSrc} className="zoom">
                                    <div className="grid-item">
                                        <div className="overlay">
                                            <div className="inner-overlay">
                                                <h4>Cards</h4>
                                                <span>Print</span>
                                            </div>
                                        </div>
                                        <img src={work9ImgSrc} className="img-responsive" alt="..." />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}