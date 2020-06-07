import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      board: null,
      gameOver: false,
      message: null,
      corRows:[false,false,false,false],
      r1:false,
      r2:false,
      r3:false,
      r4:false
      
    };
    
    this.move = this.move.bind(this);
  }
  
  initBoard() {
    let board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    board = this.placeNumbers(board);
    
    this.setState({
      board,
      gameOver: false,
      message: null
    });
  }
  
  placeNumbers(board) {
    const allCoordinates = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        allCoordinates.push([i, j]);
      }
    }
    console.log(allCoordinates[0])
    // const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const numbers = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4];
    numbers.forEach(n => {
      const randomIndex = Math.floor(Math.random() * allCoordinates.length);
      const randomCoordinate = allCoordinates.splice(randomIndex, 1);
      board[randomCoordinate[0][0]][randomCoordinate[0][1]] = n;
    });
    
    return board;
  }

  move(r, c, value,event) {
   console.log(event.target)
   var table = document.getElementById('mytable');

    const board = this.state.board;
 
    // Move up
    if (board[r - 1] && board[r - 1][c] === 0) {
      board[r - 1][c] = value;// color
      board[r][c] = 0; //grey
      
      table.rows[r-1].cells[c].style.backgroundColor = table.rows[r].cells[c].style.backgroundColor;
      table.rows[r].cells[c].style.backgroundColor='white';
      if(this.checkRow(r-1,c,table)){
        this.setRowState(r);
      }
       
      
    }
    
    // Move right
    if (board[r][c + 1] === 0) {
      board[r][c + 1] = value;
      board[r][c] = 0;
     
      table.rows[r].cells[c+1].style.backgroundColor = table.rows[r].cells[c].style.backgroundColor;
      table.rows[r].cells[c].style.backgroundColor='white';
      if(this.checkRow(r,c+1,table)){
        this.setRowState(r);
      }
    }
    
    // Move down
    if (board[r + 1]) {
      if (board[r + 1][c] === 0) {
        board[r + 1][c] = value;
        board[r][c] = 0;
     
        table.rows[r+1].cells[c].style.backgroundColor = table.rows[r].cells[c].style.backgroundColor;
        table.rows[r].cells[c].style.backgroundColor='white';
        if(this.checkRow(r+1,c,table)){
          this.setRowState(r);
        }
      
      }      
    }
    
    // Move left
    if (board[r][c - 1] === 0) {
      board[r][c - 1] = value;
      board[r][c] = 0;
      

      table.rows[r].cells[c-1].style.backgroundColor = table.rows[r].cells[c].style.backgroundColor;
      table.rows[r].cells[c].style.backgroundColor='white';
      if(this.checkRow(r,c-1,table)){
       this.setRowState(r);
      }
      
    }
    console.log(this.state)

    
    if (this.checkComplete(board)) {
      this.setState({ board, gameOver: true, message: 'You win!' });
    } else {
      this.setState({ board });      
    }
   
      
  
  }
  checkRow(r,c,table){
    const arr = [];
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
         arr.push(table.rows[r].cells[c].style.backgroundColor);
  }
  console.log(arr);
  return arr.every( (val, i, arr) => val === arr[0] )
  //console.log(arr.every( (val, i, arr) => val === arr[0] ));
  }
  
  checkComplete(board) {
    const finishedBoard = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
    return JSON.stringify(finishedBoard) === JSON.stringify(board);
  }
  
  componentWillMount() {
    this.initBoard();
    this.forceUpdate();
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
setRowState(r){
  switch(r) {
    case 0:
      if(this.state.corRows[0]!==true){
        this.setState(pervState=>({
          r1:true
        }))
    }
    
      break;
    case 1:
      if(this.state.corRows[1]!==true){
        this.setState(pervState=>({
          r2:true
        }))
    }
    
      break;
    case 2 :
      if(this.state.corRows[2]!==true){
        this.setState(pervState=>({
          r3:false
        }))
    }
    
      break;
    case 3 :
      if(this.state.corRows[3]!==true){
        this.setState(pervState=>({
          r4:true
        }))
    }
    
    default:
      // code block
  }
}

componentDidMount(){
  var x = document.getElementsByTagName('td');
  console.log(x)
  var colors = ['red', 'blue', 'green','teal'];
      var colors = colors.reduce(function (res, current) {
          return res.concat([current, current, current, current]);
      }, []);
     this.shuffleArray(colors)
  for(let i=0;i<colors.length;i++){
    x[i].style.backgroundColor = colors[i]
  }
  this.forceUpdate()
}
  render() {
   
    {
      
    
    }
    return (
      <div className="main">
        
        
        <table id = "mytable">
          {this.state.board.map((row, i) => (<Row key={i} rowIndex={i} row={row} move={this.move}  />))}
        </table>
        <div class="flex-container">
          <div>
            {this.state.r1 ? '✔' :''}
          </div>
          <div>{this.state.r2 ? '✔' :''}</div>
          <div>{this.state.r3 ? '✔' :''}</div>
          <div>{this.state.r4 ? '✔' :''}</div> 
            
        </div>
        
        <p>{ this.state.message }</p>
        {}
      </div>
    );
  }
};

const Row = ({ row, rowIndex, move , bg ,}) => {
  return (
    <tr id = {rowIndex}>
      { row.map((cell, i) => <Cell key={i} rowIndex={rowIndex} columnIndex={i} cellValue={cell} move={move} bg={bg} />) }
    </tr>
  );
};

const Cell = ({ rowIndex, columnIndex, cellValue, move ,bg ,}) => {
  
  const value = (cellValue > 0) ? cellValue : null;
  
  return (
    <td id={columnIndex}>
      <div   className="cell" onClick={(event) => {move(rowIndex, columnIndex, cellValue, event); }  } bg={bg} >
        {value}
        {}
      </div>
    </td>
    
  );
};


export default App;
