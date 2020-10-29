import React, {Component} from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import '../App.css';
import {NavLink} from 'react-router-dom';

class Header extends Component{

	constructor(props){
	    super(props);
	    this.state={
	        isNavOpen: false
	    };
	    this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav(){
        this.setState({
	        isNavOpen: !this.state.isNavOpen
	    });
	}
	
	render(){
		return(
			<>
			    <Navbar className="navc" expand="md">
                    <div className="container">
	                 	<NavbarBrand className="mr-auto yellowheads" href="/">Info@Covid</NavbarBrand>
	                 	<NavbarToggler onClick={this.toggleNav} />
		                <Collapse isOpen={this.state.isNavOpen} navbar>
		                    <Nav className="ml-auto" navbar>
	                      	    <NavItem>
		                            <NavLink className="nav-link"  to='/what' activeClassName="active">What is Covid??</NavLink>
		                        </NavItem>
		                        <NavItem>
		                            <NavLink className="nav-link" to='/questions'>Common Questions</NavLink>
		                        </NavItem>
	                      	</Nav>
                  		</Collapse>
              		</div>
          		</Navbar>
	          	<Jumbotron>
	        		<div className="container">
	            		<div className="row row-header">
	            			<div className="col-12 col-sm-6">
	            				<h1>Info@Covid</h1>
	       						<p>See your Area's and round the Globe COVID stats</p>
	          				</div>
	            		</div>
	          		</div>
	        	</Jumbotron>
			</>
		);
	}
}

export default Header;