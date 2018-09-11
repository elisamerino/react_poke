import React from 'react';
import Card from './Card';

class Application extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this._changePicture = this._changePicture.bind(this);
	}

	componentWillUnmount() {
		clearInterval(this.timeInterval);
	}

	_changePicture() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div className="application">
				<h1>card</h1>
				<div className="container">
					<Card img="https://picsum.photos/200/200" />
					<Card img="https://picsum.photos/100/200" />
					<Card img="https://picsum.photos/200" />
				</div>
			</div>
		);
		const mappedCards = this.state.cards.maps((card, index) => {
			<Card>
				img={card.img}
				heading={card.heading}
				caption={card.captiom}
				index={index}
				key={index}
				chantePicture={this._changePicture}
			</Card>;
		});
		return <div className="container card-flex" />{mappedCards}</div>;
	}
}

export default Application;
