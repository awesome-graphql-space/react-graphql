import React from 'react';
import styled from 'styled-components';
import onClickOutside from "react-onclickoutside";
import { Mutation } from 'react-apollo';
import { POST } from '../graphql/mutation';
import { AuthUtil } from '../common/utils';
import { AUTH_TOKEN } from '../constant';
import {
  NavLink
} from 'react-router-dom'

const Button = styled.button`
	display: inline-block;
	border: 1px solid #1da1f2;
	color: #fff;
	border-radius: 100px;
	box-shadow: none;
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	line-height: 20px;
	padding: 6px 16px;
	position: relative;
	text-align: center;
	white-space: nowrap;
	background-color: #EC4972;
  border-color: transparent;
  margin: 12px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
`
const Section = styled.section`
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
	background-color: #E81C4F;
	background: rgba(232,28,79,0.1);
`;

export const Flex = styled.div`
  display: flex;
	flex: grow;
	justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
	justify-content: center;
	direction: row;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
	border-radius: 4px;
	border-color: #F5A4B8;
	box-shadow: 0 0 0 1px #F5A4B8;
`

class Tweet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			remainingChar: 140,
			addPhotoStatus: false,
			showButtons: false
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
  
  handleClickOutside(evt) {
    const { showButtons } = this.state;

    if(showButtons){
      this.setState({showButtons: false});
    }
  }

	render() {
		const { showButtons, text } = this.state;

		return (
			<div>
        <Mutation mutation={POST}>
        {(mutate, {loading, error}) => (
          <Section id="twitter">
            {this.overflowAlert() }
            <div>
              <TextArea
                placeholder="Write something new ..."
                style={{ height: showButtons ? 100 : 10 }}
                onChange={this.handleChange.bind(this)}
                onFocus={() => this.setState({showButtons: true})}
              />
              {
                showButtons ?
                <React.Fragment>
                  <br/>
                  <Flex>
                  <span>Characters Left:  {this.remainingChar()}</span>
                  <Row>
                  <Button
                    disabled={this.remainingChar() === 140 || this.remainingChar() < 0}
                    onClick={()=>{
                      if(text){
                        mutate({
                          variables: {
                            text
                          }
                        })
                        .then(res => {
                          this.setState({text: '', showButtons: false});
                        })
                        .catch(err => console.log(err));
                      }
                    }}
                  >Tweet</Button>
                  </Row>
                  </Flex>
                </React.Fragment>
                :
                null
              }
            </div>
          </Section>
        )}
       </Mutation>
       </div>
		);
	}
}

export default onClickOutside(Tweet);

// <Button onClick={this.addPhoto.bind(this)} >{this.state.addPhotoStatus ? '✓ Photo Added' : 'Add Photo'}</Button>