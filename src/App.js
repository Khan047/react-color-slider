import React from 'react';
import Table from './Table';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      board:null,
      gameOver: false,
      message: null,
      input:false,
      corRows:[false,false,false,false],
      r0:false,
      r1:false,
      r2:false,
      r3:false,
      rownos:null,
      imglist:null,
      default:false
    };
    
    this.move = this.move.bind(this);
    this.initBoard = this.initBoard.bind(this);
    this.setDefault = this.setDefault.bind(this);
    this.setZero = this.setZero.bind(this);
  }
   matrix(m, n) {
    return Array.from({
      
      length: m
     
    }, () => new Array(n).fill(0));
  };
  initBoard(r,c,event) {
    
  //   let board = [
  //   [0,0,0,0],
  //   [0,0,0,0],
  //   [0,0,0,0],
  //   [0,0,0,0],
  //  ];
  this.handleImage(event);
  let board = this.matrix(r,c);
    board = this.placeNumbers(board,c);
    
    this.setState({
      board:board,
      gameOver: false,
      message: null
    });
    let i=0;
    this.setState({
      rownos:r,
      input:true
    })
    while(i<r){
      this.setState({
          [i]:false
      });
    i++;
    }
  }

  
  placeNumbers(board,c) {
    const allCoordinates = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        allCoordinates.push([i, j]);
      }
    }
    
    var numbers=  new Array(c*c-1).fill(1);
    console.log('NUMS ARE'+numbers.length)
   // const numbers = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4];
    numbers.forEach(n => {
      const randomIndex = Math.floor(Math.random() * allCoordinates.length);
      
      const randomCoordinate = allCoordinates.splice(randomIndex, 1);
  
      board[randomCoordinate[0][0]][randomCoordinate[0][1]] = n;
    });
    console.log(board);
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
setZero(){
  let arr= this.state.board;
  let zero = arr.indexOf(0);
  for(let i=0;i<arr.length;i++){
    for(let j =0 ; j<arr[i].length;j++){
        if(arr[i][j]==0){
          zero = [i,j]
        }
    }
  }
  var table = document.getElementById('mytable');

      
        // table.rows[zero[0]].cells[zero[1]].lastChild.remove();
        // var x = table.rows[zero[0]].cells[zero[1]].childNodes[0];
       
        //  console.log(x)
          //table.rows[zero[0]].cells[zero[1]].childNodes[0].children='';
          
         
          
      
  
  
  console.log(zero);
}
handleImage(){
//  var finput = document.getElementById('images');
//  var flist = [];
 
//    flist = [];
//    for(var i=0;i<finput.files.length;i++){
//      flist[i] = finput.files[i];
//    }
//    console.log(flist);

// console.log(flist);
}


componentDidMount(){
  

//************************************** */
  // let row =4;
  // var x = document.getElementsByTagName('td');
  // // console.log(x)
  //  var colors = ['red', 'blue','green','teal'];
  //      var colors = colors.reduce(function (res, current) {
  //         var o=  new Array(row).fill(current);
  //         console.log(o)
          
  //          return res.concat(o);
  //      }, []);
       
  //     this.shuffleArray(colors)
  //     // colors.sort();
  //     // console.log(colors)
  //  for(let i=0;i<x.length;i++){
  //    x[i].style.backgroundColor = colors[i]
  //  }
}
setDefault(){
  this.initBoard(4,4);
  this.setState({
    default:true
  },()=>{
    console.log('asdad')
  });
}
handleChange=(event)=>{
  let row = 5; 
  console.log('changing')
  var finput = event.target.files;
  console.log(finput)
  var flist = [];
  
    flist = [];
    for(var i=0;i<finput.length;i++){
      flist[i] = finput[i];
    }
    var flist = flist.reduce(function (res, current) {
     let o=  new Array(row).fill(current);
     console.log(o)
     return res.concat(o);
 }, []);
 console.log('flist is '+flist);
    
 this.setState({
   imglist:flist
 },()=>{
   console.log('flist is '+flist);
 })
 
 var x = document.getElementsByTagName('td');
 for(let i=0;i<x.length;i++){
        setupReader(flist[i],x[i])
  
 }
function setupReader(flist,x){
  let reader = new FileReader();
  reader.readAsDataURL(flist);
 
  reader.onload = function() {
   let fileContent = reader.result;
   
     let img = document.createElement('img');
     img.src = fileContent;
    img.height = 100;
    img.width = 100;
    if(x.childNodes[0].style.backgroundColor!='white') x.childNodes[0].appendChild(img) ;
   }
  
}
this.setZero();
 }




  render() {
   
 
    return (
   <div>
        <input id ="row" placeholder="enter row"></input>
        <input id ="col" placeholder="enter col"></input>
        <button onClick={(event)=>{
          console.log(document.getElementById('row').value);
          console.log(document.getElementById('col').value);
          let row = parseInt(document.getElementById('row').value);
          let col = parseInt( document.getElementById('col').value);
          this.initBoard(row,col,event);
          console.log(this.matrix(row,col));
          //this.handleChange(row);
      }
          }>Play Game</button>
          <button onClick={
            this.setDefault
          }>Play default</button>
          {console.log(this.state)}
          <p>Upload {this.state.rownos} Images <input type="file" multiple name="submitfile" id="images" onChange={(e)=>this.handleChange(e)}/></p>
    <Table newboard={this.state.board} move={this.move}/>
    {console.log(this.state)}
    <div id = 'test'></div>
   </div>
    );
  }
};



export default App;
