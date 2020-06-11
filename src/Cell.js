import React from 'react'

const Cell = ({ rowIndex, columnIndex, cellValue, move ,bg ,}) => {
  
   const value = (cellValue > 0) ? cellValue : null;
    
    return (
        <td id={columnIndex}>
        <div   className="cell" onClick={(event) => {move(rowIndex, columnIndex, cellValue, event); }  }move={move}  style={{backgroundColor: value == null ? 'white':''}} >
          
          
        </div>
      </td>
    );
  }

export default Cell;