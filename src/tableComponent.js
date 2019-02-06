import React, { Component } from 'react';

class Table extends Component{
	render(){
		return(

			<div>

			<table>
               <tr>
                    <th>ID</th>
                    <th>Trainer Name</th>
                    <th>Speciality</th>
                </tr>
                 <tr>
                    <td>1</td>
                    <td>Joe Bloggs</td>
                    <td>Java</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jane Bloggs</td>
                    <td>SpringBoot, Java</td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>John Bloggs</td>
                    <td>Python, Java</td>
                </tr>

			</table>

			</div>

			);
	}

}


export default Table;