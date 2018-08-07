import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header'

const Button = styled.button`
  display: inline-block;
  background:#87ceeb;
  padding: 6px 12px;
  margin: 12px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
`
const Section = styled.section`
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  background-color: white;
`
const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
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
      <div>
      <Header/>
			<Section id="twitter">
				{this.overflowAlert() }
        <div>
          <TextArea onChange={this.handleChange.bind(this)} ></TextArea>
          <br/>
					<span>Characters Left:  {this.remainingChar()}</span>
					<Button onClick={this.addPhoto.bind(this)} >{this.state.addPhotoStatus ? '✓ Photo Added' : 'Add Photo'}</Button>
          <Button disabled={this.remainingChar() === 140 || this.remainingChar() < 0}>Tweet</Button>
        </div>
       </Section>
       </div>
		);
	}
}

export default Tweet