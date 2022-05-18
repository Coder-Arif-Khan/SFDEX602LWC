import { LightningElement } from 'lwc';

export default class Challenge_dateTime extends LightningElement {
	currentDate = new Date();
	updateDate() {
		this.currentDate = new Date();
	}
	
	/*
	connectedCallback() {
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		setInterval(() => {
			this.currentDate = new Date();
		}, 1000);
	}
	*/
	/* 
	
	ES6 and 'this' TRIVIA: 
	Why doesn't the following work?
*/
	connectedCallback() {
    const self = this;   // lexical scope
    // eslint-disable-next-line @lwc/lwc/no-async-operation
		setInterval( function() {
			self.currentDate = new Date();
		}, 1000);
	}
	
	
}