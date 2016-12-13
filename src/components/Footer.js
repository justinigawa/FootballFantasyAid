import React, {Component} from "react"
import {Link} from "react-router"

const Footer = props => (
    <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-push-6 item text">
                        <h3>FOOTBALL Fantasy Aid</h3>
                        <p>We are here to help you decide between two players that will give you the best chance to win that week. Using our own algorithm, we take in multiple variables and calculate about how many points each player will give you, then you make the choice for yourself on who to play.</p>
                    </div>
                    <div className="col-md-3 col-md-pull-6 col-sm-4 item">
                        <h3>Services</h3>
                        <ul>
                            <li>
                                <a href="#">Web design</a>
                            </li>
                            <li>
                                <a href="#">Development</a>
                            </li>
                            <li>
                                <a href="#">Hosting</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-md-pull-6 col-sm-4 item">
                        <h3>About</h3>
                        <ul>
                            <li>
                                <a href="#">Company</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-sm-4 item social">
                        <a href="#">
                            <i className="icon ion-social-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="icon ion-social-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="icon ion-social-snapchat"></i>
                        </a>
                        <a href="#">
                            <i className="icon ion-social-instagram"></i>
                        </a>
                    </div>
                </div>
                <p className="copyright">FOOTBALL Fantasy Aid © 2016</p>
            </div>
        </footer>
    </div>
)

export default Footer
