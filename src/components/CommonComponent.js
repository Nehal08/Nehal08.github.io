import React, { Component,useState } from 'react';
import { Collapse, CardBody, Card, CardHeader  } from 'reactstrap';
import {Loading} from './LoadingComponent';
 
function RenderQuestion ({question}) {

	const [isOpen, setIsOpen] = useState(false);
  	const toggle = () => setIsOpen(!isOpen);

    return (
        <Card>
        	<CardHeader onClick={toggle}>{question.name}</CardHeader>
        	<Collapse isOpen={isOpen}>
 				<CardBody>{question.description}</CardBody>              
        	</Collapse>
        </Card>
    );
}

const Common = (props) =>{

	const [isOpen, setIsOpen] = useState(false);
  	const toggle = () => setIsOpen(!isOpen);

    const comm = props.questions.questions.map((question) => {
        return (
          <div key={question.id} className="col-12">
                <RenderQuestion question={question} />
          </div>
        );
    });

    if(props.questions.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    else if (props.questions.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.questions.errMess}</h4>
                </div>
            </div>
        );
    }   
    else
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    	<br/>
                        <h3 style={{textAlign: "center"}}>Common Questions</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                	<div className="col-12">
                    	{comm}
                    </div>
                </div>
                <hr />
                <br/>
                <br/>
            </div>
        );    
} 

export default Common;