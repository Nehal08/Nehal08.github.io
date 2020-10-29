// import React, { Component, useState } from 'react';
// //import { Card, CardText, CardBody, CardGroup, CardHeader  } from 'reactstrap';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';

// // class What extends Component {
// // 	render () {
// // 		return(
// // 			<div className="container">
// // 				<br />
// // 				<br />
// // 				<CardGroup>
// // 					<Card body inverse style={{ backgroundColor: '#202020', borderColor: '#202020' }} className=" col-6">
// // 						<CardHeader>What is Corona Virus?</CardHeader>
// // 				        <CardBody>
// // 				            <CardText>
// // 				            	Corona viruses are a large family of viruses which may cause
// // 					            illness in animals or humans. In humans, several coronaviruses are
// // 					           	known to cause respiratory infections ranging from the common cold
// // 					           	to more severe diseases such as Middle East Respiratory Syndrome
// // 					           	(MERS) and Severe Acute Respiratory Syndrome(SARS). The most 
// // 					           	recently discovered coronavirus causes coronavirus disease COVID-19.
// // 							</CardText>
// // 					    </CardBody>
// // 					</Card>
// // 					<Card body inverse style={{ backgroundColor: '#707070', borderColor: '#707070' }} className=" col-6">
// // 				        <CardHeader>What is COVID-19?</CardHeader>
// // 				        <CardBody>
// // 				            <CardText>
// // 				            	COVID-19 is the infectious disease caused by the most recently
// // 								discovered corona virus. This new virus and disease were unknown
// // 								before the outbreak began in Wuhan, China, in December 2019. 
// // 							</CardText>
// // 					    </CardBody>
// // 				    </Card>
// // 				</CardGroup>
// // 				<CardGroup>
// // 					<Card body inverse style={{ backgroundColor: '#707070', borderColor: '#707070' }} className=" col-6">
// // 						<CardHeader>Symptoms of COVID-19</CardHeader>
// // 				        <CardBody>
// // 				            <CardText>
// // 				            	<ul>
// // 				            		<li>Fever</li>
// // 				            		<li>Coughing</li>
// // 				            		<li>Shortness of breath</li>
// // 				            		<li>Trouble breathing</li>
// // 				            		<li>Fatigue</li>
// // 				            		<li>Chills, sometimes with shaking</li>
// // 				            		<li>Body aches</li>
// // 				            		<li>Headache</li>
// // 				            		<li>Sore throat</li>
// // 				            		<li>Congestion/runny nose</li>
// // 				            		<li>Loss of smell or taste</li>
// // 				            		<li>Nausea</li>
// // 				            		<li>Diarrhea</li>
// // 				            	</ul>
// // 							</CardText>
// // 					    </CardBody>
// // 					</Card>
// // 					<Card body inverse style={{ backgroundColor: '#202020', borderColor: '#202020' }} className=" col-6">
// // 						<CardHeader>How does COVID-19 spread</CardHeader>
// // 				        <CardBody>
// // 				            <CardText>
// // 				            	People can catch COVID-19 from others who have the virus. The
// // 								disease can spread from person to person through small droplets
// // 								from the nose or mouth which are spread when a person with 
// // 								COVID-19 coughs or exhales. These droplets land on objects and
// // 								surfaces around the person. Other people then catch COVID-19 by
// // 								touching these objects or surfaces, then touching their eyes, 
// // 								nose or mouth.People can also catch COVID-19 if they breathe in
// // 								droplets from a person with COVID-19 who coughs out or exhales 
// // 								droplets. This is why it is important to stay more than 1 meter
// // 								(3 feet) away from a person who is sick. 
// // 							</CardText>
// // 					    </CardBody>
// // 				    </Card>
// // 				</CardGroup>
// // 				<br />
// // 				<br />
// // 			</div>
// // 		);
// // 	}
// // }
// // export default What;




import React, { Component, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Card, CardText, CardBody, CardGroup, CardHeader  } from 'reactstrap';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


class What extends Component {
	render () {
	 	return(
	 		<div className="container">
	 			<br />
				<Carousel
					swipeable={true}
					arrows={true}
					draggable={false}
					autoPlay={true}
					infinite={true}
					autoPlaySpeed={5000}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					itemClass="carousel-item-padding-40-px"
				>
				    <div>
				    	<Card body inverse style={{ borderColor: 'white', height:"500px" }} className=" col-12">
	 						<CardHeader style={{color: 'black'}}>What is Corona Virus?</CardHeader>
	 				        <CardBody>
	 				            <CardText style={{color: 'black'}}>
	 				            	Corona viruses are a large family of viruses which may cause
	 					            illness in animals or humans. In humans, several coronaviruses are
	 					           	known to cause respiratory infections ranging from the common cold
	 					           	to more severe diseases such as Middle East Respiratory Syndrome
	 					           	(MERS) and Severe Acute Respiratory Syndrome(SARS). The most 
	 					           	recently discovered coronavirus causes coronavirus disease COVID-19.
	 							</CardText>
	 					    </CardBody>
 						</Card>
				    </div>
				    <div>
				    	<Card body inverse style={{ borderColor: 'white', height:"500px"}} className=" col-12">
	 				        <CardHeader style={{color: 'black'}}>What is COVID-19?</CardHeader>
	 				        <CardBody>
	 				            <CardText style={{color: 'black'}}>
	 				            	COVID-19 is the infectious disease caused by the most recently
	 								discovered corona virus. This new virus and disease were unknown
	 								before the outbreak began in Wuhan, China, in December 2019. 
	 							</CardText>
	 					    </CardBody>
	 				    </Card>
				    </div>
				    <div>
				    	<Card body inverse style={{ borderColor: 'white', height:"500px" }} className=" col-12">
							<CardHeader style={{color: 'black'}}>How does COVID-19 spread</CardHeader>
					        <CardBody>
					            <CardText style={{color: 'black'}}>
					            	People can catch COVID-19 from others who have the virus. The
									disease can spread from person to person through small droplets
									from the nose or mouth which are spread when a person with 
									COVID-19 coughs or exhales. These droplets land on objects and
									surfaces around the person. Other people then catch COVID-19 by
									touching these objects or surfaces, then touching their eyes, 
									nose or mouth.People can also catch COVID-19 if they breathe in
									droplets from a person with COVID-19 who coughs out or exhales 
									droplets. This is why it is important to stay more than 1 meter
									(3 feet) away from a person who is sick. 
								</CardText>
						    </CardBody>
					    </Card>
				    </div>
				    <div>
				    	<Card body inverse style={{ borderColor: 'black', height:"500px", borderRadius:"20px" , border: "50px" }} className=" col-12">
							<CardHeader style={{color: 'black'}}>Symptoms of COVID-19</CardHeader>
					        <CardBody>
					            <CardText style={{color: 'black'}}>
					            	<ul>
					            		<li>Fever</li>
					            		<li>Coughing</li>
					            		<li>Shortness of breath</li>
					            		<li>Fatigue</li>
					            		<li>Chills, sometimes with shaking</li>
					            		<li>Body aches</li>
					            		<li>Headache</li>
					            		<li>Sore throat</li>
					            		<li>Congestion/runny nose</li>
					            		<li>Loss of smell or taste</li>
					            		<li>Nausea</li>
					            		<li>Diarrhea</li>
					            	</ul>
								</CardText>
						    </CardBody>
						</Card>
				    </div>
				</Carousel>
				<br />
			</div>
		);
	}
}

export default What;