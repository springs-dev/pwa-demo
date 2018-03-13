import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <div>
                <header>
                <nav className="navbar navbar-default navbar-spacing-top-fixed">
                    <div className="container">
                     
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand scroll-top" href="#">Rolla</a><span className="navbar-tagline hidden-sm">Multi</span>
                        </div>

                     
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span >Home</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-first">
                                        <li><a href="multipage-top-default.html">Default</a></li>
                                        <li><a href="multipage-top-slider-image.html">Image Slider</a></li>
                                        <li><a href="multipage-top-text-rotater.html">Rotate</a></li>
                                        <li><a href="multipage-top-slider-transparent.html">No BG Slider</a></li>
                                    </ul>
                                </li>
                            <li><Link to="/service">Services</Link></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span>Pages</span></a>
                            <ul className="dropdown-menu dropdown-menu-first">
                                <li><a href="multipage-about.html">About</a></li>
                                <li><a href="multipage-pricing.html">Pricing</a></li>
                                <li><a href="multipage-experience.html">Experience</a></li>
                            </ul>
                        </li>
                        <li><a href="multipage-team.html">Team</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span>Work</span></a>
                        <ul className="dropdown-menu dropdown-menu-first">
                            <li className="dropdown-submenu">
                                <a tabindex="-1" href="#">Masonry &nbsp;<span className="ion-ios-arrow-right"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a tabindex="-1" href="multipage-portfolio-masonry-2col.html">2 Columns</a></li>
                                    <li><a tabindex="-1" href="multipage-portfolio-masonry-3col.html">3 Columns</a></li>
                                    <li><a tabindex="-1" href="multipage-portfolio-masonry-4col.html">4 Columns</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu">
                                <a href="#">Regular &nbsp;<span className="ion-ios-arrow-right"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a tabindex="-1" href="multipage-portfolio-aligned-2col.html">2 Columns</a></li>
                                    <li><a tabindex="-1" href="multipage-portfolio-aligned-3col.html">3 Columns</a></li>
                                    <li><a tabindex="-1" href="multipage-portfolio-aligned-4col.html">4 Columns</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="multipage-contact.html">Contact</a></li>
                    <li className="btn-navbar"><a href="#"><span className="btn btn-primary btn-lg">Buy Now</span></a></li>
                </ul>
            </div>
    </div>
    </nav>
    </header>
            </div>
        )
    }
}