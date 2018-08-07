import React, { Component } from 'react';
import styled from 'styled-components';

class Tweet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			remainingChar: 140,
			addPhotoStatus: false,
		}
	}

	handleChange(e) {
		
		this.setState({
			text: e.target.value,
		})
	}
	
addPhoto(e) {
		this.setState({
			addPhotoStatus: !this.state.addPhotoStatus,
		});
	}
	
	remainingChar () {
		if (this.state.addPhotoStatus) {
					return 140 - 23 - (this.state.text.length);
			} else {
					return 140 - (this.state.text.length);
				}
			}
	
	overflowAlert () {
	
		if (this.remainingChar() < 0) {
	  		let beforeOverflowText;
				let overflowText;
			
			if (this.state.addPhotoStatus) {
				beforeOverflowText = this.state.text.substring(140 - 10 - 23, 140 -23);
				overflowText = this.state.text.substring(140 - 23);
			} else {
			 	beforeOverflowText = this.state.text.substring(140 - 10, 140);
				overflowText = this.state.text.substring(140);
			}
	
			return (
				
				// console.log('before: ' + beforeOverflowText);
			 <div className="alert alert-warning">
        <strong>Oops! Too Long:</strong>
					&nbsp;...{beforeOverflowText} 
					<strong>{overflowText}</strong>
      </div>
			);
		}
	}

	render() {
		return (
			<section id="twitter">
				{this.overflowAlert() }
        <div className="well clearfix">
          <textarea onChange={this.handleChange.bind(this)} className="form-control"></textarea>
          <br/>
					<span>{this.remainingChar()}</span>
					<button onClick={this.addPhoto.bind(this)} className="btn btn-default pull-right">{this.state.addPhotoStatus ? '✓ Photo Added' : 'Add Photo'}</button>
          <button className="btn btn-primary pull-right" disabled={this.remainingChar() === 140 || this.remainingChar() < 0}>Tweet</button>
        </div>
       </section>
		);
	}
}

export default Tweet