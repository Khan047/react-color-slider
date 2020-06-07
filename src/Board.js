import React, { Component } from 'react'
import './board.css'
 class Board extends Component {
    
    constructor (props) {
		super(props);
		
		this.state = {
            empty: false,
            rowsame: false,
            row: [],
          		};
		
		 this.moveBox = this.moveBox.bind(this);
         this.isMovable = this.isMovable.bind(this);
         this.checkRow = this.checkRow.bind(this);
      
    }
    
   checkRow(startid){
       console.log(startid);
       var emp = [];
       var boxes = document.querySelectorAll(".grid-item");
      if(startid<5){
          for(let i=0;i<4;i++){
              emp.push(boxes[i].style.backgroundColor);
          }
          
      }
      else if(startid>=5&&startid<9){
        for(let i=5;i<9;i++){
            emp.push(boxes[i].style.backgroundColor);
        }
              
    }
      else if(startid>=9&&startid<13){
            for(let i=9;i<13;i++){
                emp.push(boxes[i].style.backgroundColor);
            }
        }
      else if(startid>=13&&startid<=16){
        for(let i=13;i<16;i++){
         //   alert(i)
            emp.push(boxes[i].style.backgroundColor);
        }
     }       
        
      console.log(emp.every( (val, i, arr) => val === arr[0] ));
      if(emp.every( (val, i, arr) => val === arr[0] )){
     this.setState({
        row: this.state.row.push(emp)
     })
    }
     console.log(emp);
   }
    componentDidMount(){
    
       
    }
    isMovable(id,bg){
       if(id==1){
        let up = document.getElementById(id);
        let left = document.getElementById(id);
        let right = document.getElementById(id).nextSibling;
        id = id-4;
        id = id+8;
        let down = document.getElementById(id);
        console.log(down.id,up.id,right.id,left.id);
        if(this.findBg(up)=='rgb(128, 128, 128)'){
            up.style.backgroundColor=bg;
            return true;
        }
        else if(this.findBg(down)=='rgb(128, 128, 128)'){
            down.style.backgroundColor=bg;
            return true;
        }
        else if(this.findBg(left)=='rgb(128, 128, 128)'){
            left.style.backgroundColor=bg;
            return true;
        }
        else if(this.findBg(right)=='rgb(128, 128, 128)'){
            right.style.backgroundColor=bg;
            return true;
        }
       }
       if(id==16){
        let up = document.getElementById(id-4);
        let left = document.getElementById(id-1);
        let right = document.getElementById(id);
        let down = document.getElementById(id);
        console.log(down.id,up.id,right.id,left.id);
        if(this.findBg(up)=='rgb(128, 128, 128)'){
            up.style.backgroundColor=bg;
            return true;
        }
        else if(this.findBg(down)=='rgb(128, 128, 128)'){
            down.style.backgroundColor=bg;
            return true;
        }
        else if(this.findBg(left)=='rgb(128, 128, 128)'){
            left.style.backgroundColor=bg;
            return true;
        }
        else if(this.findBg(right)=='rgb(128, 128, 128)'){
            right.style.backgroundColor=bg;
            return true;
        }
       }
        if(id==2||id==3||id==4){
            let up = document.getElementById(id);
            let left = document.getElementById(id-1);
            let right = document.getElementById(id).nextSibling;
            id = id-4;
            id = id+8;
            let down = document.getElementById(id);
            console.log(down.id,up.id,right.id,left.id);
            if(this.findBg(up)=='rgb(128, 128, 128)'){
                up.style.backgroundColor=bg;
                return true;
            }
            else if(this.findBg(down)=='rgb(128, 128, 128)'){
                down.style.backgroundColor=bg;
                return true;
            }
            else if(this.findBg(left)=='rgb(128, 128, 128)'){
                left.style.backgroundColor=bg;
                return true;
            }
            else if(this.findBg(right)=='rgb(128, 128, 128)'){
                right.style.backgroundColor=bg;
                return true;
            }
        }
        if(id==13||id==15||id==16||id==14){
            let up = document.getElementById(id-4);
            let left = document.getElementById(id-1);
            let right = document.getElementById(id).nextSibling;
            let down = document.getElementById(id);
            console.log(down.id,up.id,right.id,left.id);
            if(this.findBg(up)=='rgb(128, 128, 128)'){
                up.style.backgroundColor=bg;
                return true;
            }
            else if(this.findBg(down)=='rgb(128, 128, 128)'){
                down.style.backgroundColor=bg;
                return true;
            }
            else if(this.findBg(left)=='rgb(128, 128, 128)'){
                left.style.backgroundColor=bg;
                return true;
            }
            else if(this.findBg(right)=='rgb(128, 128, 128)'){
                right.style.backgroundColor=bg;
                return true;
            }
        }
        let up = document.getElementById(id-4);
        let left = document.getElementById(id-1);
        let right = document.getElementById(id).nextSibling;
        id = id-4;
        id = id+8;
        let down = document.getElementById(id);
               
        console.log(down.id,up.id,right.id,left.id);
        if(this.findBg(up)=='rgb(128, 128, 128)'){
            up.style.backgroundColor=bg;
            return true;
        }
        else if(this.findBg(down)=='rgb(128, 128, 128)'){
            down.style.backgroundColor=bg;
            return true;
        }
        else if(this.findBg(left)=='rgb(128, 128, 128)'){
            left.style.backgroundColor=bg;
            return true;
        }
        else if(this.findBg(right)=='rgb(128, 128, 128)'){
            right.style.backgroundColor=bg;
            return true;
        }
  


    //    }
    }
    findBg(x){
        return window.getComputedStyle(x, null).getPropertyValue("background-color");
     }
moveBox(e){
    
    const id = e.target.id;
    const backgroundStyle = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
    console.log(backgroundStyle)
    
    if(this.isMovable(id,backgroundStyle)){
      e.target.style.backgroundColor = 'rgb(128, 128, 128)';

    }
    this.checkRow(id);
}
shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
    render() {
        let gems= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        // var colors = ['red','red','red','red', 'blue','blue','blue','blue', 'green','green','green','green', 'teal','teal','teal','teal'];
        var colors = ['red', 'blue', 'green','teal'];
        var colors = colors.reduce(function (res, current) {
            return res.concat([current, current, current, current]);
        }, []);
        {this.shuffleArray(colors)}
        return (
            <div className="main">
            <div className="parent">
                {
                    
                }
                
                {
                    gems.map((gem, i) => <div key ={i} id = {gem} className="grid-item" onClick={this.moveBox} style={{backgroundColor:colors[i]}}>{gem}</div> )
                }
                <div id ="16" className="grid-item mover" onClick={this.moveBox}>mover</div>
            </div>

            {/* <div className="tick"><img src = 'https://png.pngtree.com/png-vector/20191113/ourlarge/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg' width="100" height="100"></img></div>
            <div className="tick"><img src = 'https://png.pngtree.com/png-vector/20191113/ourlarge/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg' width="100" height="100"></img></div>
            <div className="tick"><img src = 'https://png.pngtree.com/png-vector/20191113/ourlarge/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg' width="100" height="100"></img></div>
            <div className="tick"><img src = 'https://png.pngtree.com/png-vector/20191113/ourlarge/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg' width="100" height="100"></img></div> */}
            </div>
        )
    }
}

export default Board;