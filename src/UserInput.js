import React, { Component } from "react";

class UserInput extends Component {
	constructor() {
		super();
		this.state = { text: "" };
	}

	handleTextChange = event => {
		console.log(event.target.value);
		this.setState({ text: event.target.value });
	};

	buttonHandler = () => {
		this.setState({ text: "" });
		let form = document.getElementById("textForm");
		form.reset();
	};

	clearForm = () => {
		this.value = "";
	};

	render() {
		return (
			<div>
				<h1> Your code goes here</h1>
				<div>
					<button type="button" onClick={this.buttonHandler}>
						Clear
					</button>
				</div>
				<form id="textForm">
					Type here{" "}
					<input type="text" name="typeHere" onChange={this.handleTextChange} />
				</form>
				<h1>
					Heres your text: <br />
				</h1>
				<h3>{this.state.text}</h3>
			</div>
		);
	}
}

export default UserInput;
