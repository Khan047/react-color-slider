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
      r0:false,
      r1:false,
      r2:false,
      r3:false
      
    };
    
    this.move = this.move.bind(this);
  }
   matrix(m, n) {
    return Array.from({
      // generate array of length m
      length: m
      // inside map function generate array of size n
      // and fill it with `0`
    }, () => new Array(n).fill(0));
  };
  initBoard(r,c) {
    
  //   let board = [
  //   [0,0,0,0],
  //   [0,0,0,0],
  //   [0,0,0,0],
  //   [0,0,0,0],
  //  ];
  let board = this.matrix(r,c);
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
    
    
    const numbers = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4];
    numbers.forEach(n => {
      const randomIndex = Math.floor(Math.random() * allCoordinates.length);
      
      const randomCoordinate = allCoordinates.splice(randomIndex, 1);
  
      board[randomCoordinate[0][0]][randomCoordinate[0][1]] = n;
    });
    
    return board;
  }

  move(r, c, value,event) {
 
   var table = document.getElementById('mytable');

    const board = this.state.board;
 
   
    if (board[r - 1] && board[r - 1][c] === 0) {
      board[r - 1][c] = value;
      board[r][c] = 0; 
      
      table.rows[r-1].cells[c].style.backgroundColor = table.rows[r].cells[c].style.backgroundColor;
      table.rows[r].cells[c].style.backgroundColor='white';
 
      
    }
    
   
    if (board[r][c + 1] === 0) {
      board[r][c + 1] = value;
      board[r][c] = 0;
     
      table.rows[r].cells[c+1].style.backgroundColor = table.rows[r].cells[c].style.backgroundColor;
      table.rows[r].cells[c].style.backgroundColor='white';
   
    }
    
   
    if (board[r + 1]) {
      if (board[r + 1][c] === 0) {
        board[r + 1][c] = value;
        board[r][c] = 0;
     
        table.rows[r+1].cells[c].style.backgroundColor = table.rows[r].cells[c].style.backgroundColor;
        table.rows[r].cells[c].style.backgroundColor='white';
      
      
      }      
    }
    
  
    if (board[r][c - 1] === 0) {
      board[r][c - 1] = value;
      board[r][c] = 0;
      

      table.rows[r].cells[c-1].style.backgroundColor = table.rows[r].cells[c].style.backgroundColor;
      table.rows[r].cells[c].style.backgroundColor='white';
   
      
    }
    

    
    if (this.checkComplete(board)) {
      this.setState({ board, gameOver: true, message: 'You win!' });
    } else {
      this.setState({ board });      
    }
    var table = document.getElementById('mytable');
    for (var row = 0, n = table.rows.length; row < n-1; row++) {
      const arr = [];
      for (var c = 0, m = table.rows[row].cells.length; c < m; c++) {
          console.log(table.rows[row].cells[c].style.backgroundColor);
         arr.push(table.rows[row].cells[c].style.backgroundColor);
         
      }
      if(arr.every( (val, i, arr) => val === arr[0] )){
        this.setState({
          [`r${row}`]:true
        },()=>{
          console.log("adfgsd")
        })
  
      }
      else{
    
         this.setState({
          [`r${row}`]:false
        },()=>{
          console.log("abc")
        })
      }
  }
      
  
  }
  checkRow(r,c,table){

    const arr = [];
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
         arr.push(table.rows[r].cells[c].style.backgroundColor);
  }
  console.log(arr);
  return arr.every( (val, i, arr) => val === arr[0] )

  }
  
  checkComplete(board) {
    const finishedBoard = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
    return JSON.stringify(finishedBoard) === JSON.stringify(board);
  }
  
  componentWillMount() {
    this.initBoard(4,4);
    
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



componentDidMount(){
}

  render() {
   
 
    return (
      <div className="main">
        
        <input id ="row" placeholder="enter row"></input>
        <input id ="col" placeholder="enter col"></input>
        <button onClick={(event)=>{
          console.log(document.getElementById('row').value);
          console.log(document.getElementById('col').value);
          let row = parseInt(document.getElementById('row').value);
          let col = parseInt( document.getElementById('col').value);
          this.initBoard(row,col);
          console.log(this.matrix(row,col));
          let i=0;
        //   while(i<row){
        //   this.setState({
        //       [i]:false
        //   });
        // }
        var x = document.getElementsByTagName('td');
        // console.log(x)
         var colors = ['red', 'blue', 'green','teal'];
             var colors = colors.reduce(function (res, current) {
                
                 return res.concat([current, current, current, current]);
             }, []);
            this.shuffleArray(colors)
         for(let i=0;i<x.length;i++){
           x[i].style.backgroundColor = colors[i]
         }
       
       
      
      }
          }>Play Game</button>
        <table id = "mytable">
          {this.state.board.map((row, i) => (<Row key={i} rowIndex={i} row={row} move={this.move}  />))}
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
      <div   className="cell" onClick={(event) => {move(rowIndex, columnIndex, cellValue, event); }  } bg={bg}  style={{backgroundColor: value == null ? 'white':''}} >
        
        
      </div>
    </td>
    
  );
};


export default App;
