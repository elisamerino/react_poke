import React from 'react';
//with the props should be more efficient
const Card = (props) => {
	return (
		<div className="card">
			<img src={props.img} alt="pic" />
			<h3>Lorem Ipsum</h3>
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt
			</p>
			<button>NEW PIC</button>
		</div>
	);
};

// class Card extends React.Component {
// 	render() {
// 		return (
// 			<div className="card">
// 				<img src="https://picsum.photos/200" alr="pic" />
// 				<h3>Lorem Ipsum</h3>
// 				<p>
// 					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
// 					tempor invidunt
// 				</p>
// 			</div>
// 		);
// 	}
// }
export default Card;
