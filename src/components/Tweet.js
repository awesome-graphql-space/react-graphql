import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 600px;
  margin: 20px auto;
`
const TextArea = styled.textarea`
  margin-top: 10px;
  margin-left: 50px;
  width: 500px;
  height: 100px;
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #FFFFFF #FFFFFF -moz-use-text-color;
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
`

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
			<Section id="twitter">
				{this.overflowAlert() }
        <div>
          <TextArea onChange={this.handleChange.bind(this)} ></TextArea>
          <br/>
					<span>Characters Left:  {this.remainingChar()}</span>
					<button onClick={this.addPhoto.bind(this)} >{this.state.addPhotoStatus ? '✓ Photo Added' : 'Add Photo'}</button>
          <button disabled={this.remainingChar() === 140 || this.remainingChar() < 0}>Tweet</button>
        </div>
       </Section>
		);
	}
}

export default Tweet