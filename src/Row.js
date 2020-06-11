import React from 'react'
import Cell from './Cell'
const Row = ({ row,rowIndex,move}) => {
    return (
      <tr 
>
        { row.map((cell, i) => <Cell key={i} rowIndex={rowIndex} columnIndex={i} cellValue={cell}  move={move} />) }
          
      </tr>
      
    );
  };

export default Row;