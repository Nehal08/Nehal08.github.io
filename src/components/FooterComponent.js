import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Footer(props){
	return(
		<div className="footer">
	        <div className="container">
	            <div className="row justify-content-center">             
	                <div className="col-4 offset-1 col-sm-2">
	                    <h5>Links</h5>
	                    <ul className="list-unstyled">
	                        <li><Link className="yellowheads" to="/home">Home</Link></li>
	                        <li><Link className="yellowheads" to="/what">What is Covid??</Link></li>
	                        <li><Link className="yellowheads" to="/questions">Common Questions</Link></li>
	                    </ul>
	                </div>
	                <div className="col-7 col-sm-5">
                     	<h5>Get in Touch</h5>
	                    <address>
			              	Mail us At<i className="fa fa-envelope fa-lg"></i>: <a className="yellowheads" href="mailto:confusion@food.net">
	                            Info@covid.net</a><br />
	                        Visit Us Here:<br /> 
	                        121, Clear Water Bay Road<br />
			              	Clear Water Bay, Kowloon<br />
			              	HONG KONG<br />
	                    </address>
	                </div>
	            </div>
	            <div className="row justify-content-center">             
	                <div className="col-auto">
	                    <p>© Copyright 2020 Info@Covid</p>
	                </div>
	            </div>
	        </div>
    	</div>
	);
}

export default Footer;
