//components for Tic Tac Toe - JSX version
import { useState } from "react";


function Square(props)
{
    return <button className = 'ttt-square' onClick={props.onclick} >&nbsp;</button>
}

function Squares()
    {
        var bunchOfSquares = [];
        for (let i = 0; i<9; i++)
            bunchOfSquares.push(<Square key= {i} value= {i} 
                                    onclick = {()=>alert(i)}
                            />) 
        return <div className="ttt-board">{bunchOfSquares}</div>;
    }
	
function Board()
{
	   return (<div id='game'>
	        version 3
            <Squares />           
           </div>
           );
}


export function TTT()
{
		return <Board />  
}