import React, { Component } from 'react';
import Searchbar from './searchbar.js';
import Table from './tableComponent.js';

class LinkTwo extends Component {

render(){
	return(
	    <div>

	       <Searchbar/>
	        <div class="table">
           <Table/>
            </div>

		</div>
		);
}

}

export default LinkTwo;