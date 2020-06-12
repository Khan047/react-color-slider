import React from 'react';
import Row from './Row';
class Table extends React.Component {
    constructor(props) {
      super(props);

      this.state = {

         
      };


    }

    initBoard() {
      
     


    }







    componentWillMount() {
      this.initBoard();

    }

componentDidMount(){


}




    render() {

      {


      }
      return (
        <div className="main">
        
     
          {console.log(this.props)}
        <table id = "mytable">
          {this.props.newboard.map((row, i) => (<Row key={i} rowIndex={i} row={row} move={this.props.move}  />))}
        </table>
        <div class="flex-container">
        {console.log(this.state)}
          <div>
            {this.state.r0 ? '✔' :''}
          </div>
          <div>{this.state.r1 ? '✔' :''}</div>
          <div>{this.state.r2 ? '✔' :''}</div>
          <div>{this.state.r3 ? '✔' :''}</div> 
            {}
        </div>
        
        <p>{ this.state.message }</p>
        
      </div>
      );
    }
  };
export default Table;