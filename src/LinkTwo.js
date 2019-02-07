import React, { Component } from 'react';
import Searchbar from './searchbar.js';
import Table from './tableComponent.js';

class LinkTwo extends Component {

    constructor() {
        super();
        this.state = {
            trainers: [
                { id: 1, name: "Joe Bloggs", Speciality: "Java" },
                { id: 2, name: "Jane Bloggs", Speciality: "SpringBoot" },
                { id: 3, name: "Joe Bloggs", Speciality: "SpringBoot" },
                { id: 4, name: "Joe Bloggs", Speciality: "Python" }
            ]
        }
    }
    render() {
        return (
            <div>

	        <Searchbar trainersprop= {this.state.trainers}/>
	        <div class="table">
            <Table skillprop= {this.state.trainers} />
            </div>

		</div>
        );
    }

}

export default LinkTwo;