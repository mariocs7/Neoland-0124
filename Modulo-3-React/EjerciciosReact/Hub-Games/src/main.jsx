import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TicTacToe from './components/TicTacToe';
import Sudoku from './components/Sudoku';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/TicTacToe">Tic Tac Toe</Link>
            </li>
            <li>
              <Link to="/Sudoku">Sudoku</Link>
            </li>
          </ul>
        </nav>

        <Route path="/TicTacToe" component={TicTacToe} />
        <Route path="/Sudoku" component={Sudoku} />
      </div>
    </Router>
  );
}

export default App;