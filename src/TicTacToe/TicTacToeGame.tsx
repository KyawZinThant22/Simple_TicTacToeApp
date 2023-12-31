/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import "./style.css"


const TicTacToeGame = () => {

    enum Players {
        X = "X",
        O = "O"
    }

    const initialCells = Array(9).fill("");
    const [turn  , setTurn] = useState<string | "">(Players.X)
    const [ cells , setCells ] = useState(initialCells)
    const [ winner , setWinner] = useState<Players | undefined >();


    const handleReset =()=> {
        setWinner(undefined);
        setCells(initialCells);
    }

    const handelCLick = (num : number)=>{
        if (winner === undefined){
            if ( cells[num] !== "") return ;
            const arr = [...cells];
            arr[num] = turn ;
            setTurn(turn === Players.X ? Players.O : Players.X)
            CheckWinner(arr);
            setCells(arr);
        }else {
            return;
        }
       
    }

    const CheckWinner = (arr:any) => {
        const combos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6], // Diagonals
          ];
        
          for (const patterns of combos) {
            const [a,b,c] = patterns;
            if(arr[a] !== "" && arr[a] === arr[b] && arr[b] === arr[c]){
                setWinner(arr[a]);
                return;
            }
          }
    }

    const Cells = ({num}:{num:number}) => {
        const cellValues = cells[num];
        const cellClassName = cellValues ? `cell cell-${cellValues}` : "cell";


        return (
            <td  className={cellClassName} onClick={()=> handelCLick(num)}>
                {cellValues}
            </td>
        )

    }
  return (
    <div className="container">
     <div className={`winner ${winner ? "show" : ""}`}>
        Winner is: {winner}
      </div>
      {winner == undefined && (
         <h1>Player {turn} turns :</h1>
      )} 
      <table>
        <tbody>
            {[0,1,2].map((row)=>(
                <tr key={row}>
                    {[0,1,2].map((col)=>(
                        <Cells key={col} num={row*3+col}/>
                    ))}
                </tr>
            ))}
        </tbody>
      </table>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

export default TicTacToeGame