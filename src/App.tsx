
import React, { useState } from 'react';
import './App.css';

type BLOCK = 'X' | 'O' | '_';

function App() {

  const [board, setBoard] = useState<BLOCK[]>([
    '_', '_', '_', '_', '_', '_', '_', '_', '_'
  ])
  const [isXTrun, setIsXTrun] = useState<boolean>(true);

  const handelClick = (index: number) => {
    const newBoard = [...board];
    newBoard[index] = isXTrun ? 'X' : 'O';
    setIsXTrun(!isXTrun);
    setBoard(newBoard);
  }

  return (
    <>
      <section className='GameBord'>
        <div className='Container'>
          <div className='Row'>
            <div className='Block' onClick={() => handelClick(0)}>
              {board[0] !== '_' && board[0]}
            </div>
            <div className='Block' onClick={() => handelClick(1)}>
              {board[1] !== '_' && board[1]}
            </div>
            <div className='Block' onClick={() => handelClick(2)}>
              {board[2] !== '_' && board[2]}
            </div>
          </div>
          <div className='Row'>
            <div className='Block' onClick={() => handelClick(3)}>
              {board[3] !== '_' && board[3]}
            </div>
            <div className='Block' onClick={() => handelClick(4)}>
              {board[4] !== '_' && board[4]}
            </div>
            <div className='Block' onClick={() => handelClick(5)}>
              {board[5] !== '_' && board[5]}
            </div>
          </div>
          <div className='Row'>
            <div className='Block' onClick={() => handelClick(6)}>
              {board[6] !== '_' && board[6]}
            </div>
            <div className='Block' onClick={() => handelClick(7)}>
              {board[7] !== '_' && board[7]}
            </div>
            <div className='Block' onClick={() => handelClick(8)}>
              {board[8] !== '_' && board[8]}
            </div>
          </div>
          <div className='commonButtonContainer'>
            <button className='commonBtn' onClick={() => setBoard(['_', '_', '_', '_', '_', '_', '_', '_', '_'])}>Reset</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
