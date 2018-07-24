import React from 'react';
import './App.css';
import DocumentList from './DocumentList.js';
import SearchBar from './SearchBar.js';
import DocumentEditor from './DocumentEditor.js';

class App extends React.Component {
    render() {
        return (
        <div className="notes-app">
            <h1>React Notes App</h1>
            
            <SearchBar />
            
            <DocumentList />
            
            <DocumentEditor />
            
        </div>
        );
    }
}

export default App;
