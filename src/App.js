import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return (
        <div className="notes-app">
            <header className="search-bar">
                <h1>React Notes App</h1>
                <input type="text" name="" id=""/>
            </header>
            
            <div className="document-list">
            </div>
        </div>
        );
    }
}

export default App;
