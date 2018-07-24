import React from 'react';
import './App.css';
import DocumentList from './DocumentList.js';
import SearchBar from './SearchBar.js';
import DocumentEditor from './DocumentEditor';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: 1001,
                    timestamp: new Date(),
                    title: 'Badass JS App Idea',
                    content: 'Hello World'
                },
                {
                    id: 1002,
                    timestamp: new Date(),
                    title: 'Best show',
                    content: 'South Park'
                }
            ],
            selectedId: -1 // -1 means no selection
        };
    }
    render() {
        return (
        <div className="notes-app">
            <h1>React Notes App</h1>
            
            <SearchBar />
            <DocumentList allNotes={this.state.notes} handleSelection={this._selectNote} />
            <DocumentEditor note={this._findNoteById()} />
            
        </div>
        );
    }

    _findNoteById = () => {
        let theNote = this.state.notes.find(note => note.id === this.state.selectedId)
        if (!theNote) {
            theNote = this.state.notes[0];
        }
        return theNote
    }

    _selectNote = (noteId) => {
        this.setState({
            selectedId: noteId
        });
    }

}

export default App;
