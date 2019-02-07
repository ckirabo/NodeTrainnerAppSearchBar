import React, { Component } from 'react';

class Table extends Component {

    render() {

        //Loop through the array of data, convert it into an array of div elements.
        let outputData = this.props.skillprop.map((element) => {
            return (
    

          <div key={element.id}>
          <tr>
          <td><strong>{element.id}</strong>  {element.myData}</td>
          <td><strong>{element.name}</strong> {element.myData}</td>
          <td><strong>{element.Speciality}</strong>  {element.myData}</td>
          </tr>
          </div>


            );
        });

        return (
            <div>
        {outputData}
      </div>
        );

    }
}

export default Table;