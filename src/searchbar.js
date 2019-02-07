import React, { Component } from 'react';



class Searchbar extends Component {

	constructor(props){
		super(props);


		this.streamTrainerSkill = () => {
		this.s
		}
	}



	render(){
	return (
	      <div>
          <input type="text" placeholder="Search for skill.." id="skillInput"
           onChange={this.streamTrainerSkill()}/>
          </div>
	);
	}

}

export default Searchbar;