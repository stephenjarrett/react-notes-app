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
            selectedId: -1, // -1 means no selection
            searchText: '',
            // filteredSearchNotes: []
        };
    }
    render() {
        return (
        <div className="notes-app">
            <h1>React Notes App</h1>
            
            <SearchBar text={this.state.searchText} handleChange={this._updateSearchText} />
            <DocumentList allNotes={this._retrieveNotesBySearchText()} handleSelection={this._selectNote} />
            <DocumentEditor note={this._findNoteById()} handleChange={this._updateNote}/>
            
        </div>
        );
    }

    componentDidMount() {
        this.setState({
            selectedId: this.state.notes[0].id,
            // filteredSearchNotes: this.state.notes
        });
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

    _updateSearchText = (newSearchText) => {
        this.setState({
            searchText: newSearchText
        });
        // this._updateFilteredSearchNotes();
    }

    // _updateFilteredSearchNotes = () => {
    //     let filteredNotes = this.state.notes.filter(note => {
    //         return note.title.toLowerCase().includes(this.state.searchText.toLowerCase()) || note.content.toLowerCase().includes(this.state.searchText.toLocaleLowerCase())
    //     });

    //     this.setState({
    //         filteredSearchNotes: filteredNotes,
    //         selectedId: this.state.filteredSearchNotes[0].id
    //     });
    // }

    _retrieveNotesBySearchText = () => {
        // Is there search text? 
        // If so, filter
        // If not, return all
        if (this.state.searchText !== '') {
            let filteredNotes = this.state.notes.filter(note => {
                let doesTitleMatch = note.title.toLowerCase().includes(this.state.searchText.toLowerCase());
                let doesContentMatch = note.content.toLowerCase().includes(this.state.searchText.toLowerCase());
                return doesTitleMatch || doesContentMatch
            });
            return filteredNotes
        } else {
            return this.state.notes
        }
    }

    _allNotesExceptSelectedNote = () => {
        let selectedId = this.state.selectedId;
        if (selectedId === -1) {
            selectedId = this.state.notes[0].id;
        }
        let notesWitoutSelectedNote = this.state.notes.filter(note => note.id !==  selectedId);
        return notesWitoutSelectedNote
    }

    _updateNote = (noteContent) => {
        // grab existing note - don't need noteID since its selected in the editor/state already
        let theNote = this._findNoteById();
        // make a copy
        // let updatedNote = Object.assign({}, theNote);
        // // update the copy
        // updatedNote.content = noteContent;
        //alternate syntax of making a copy/updating - sprinkling or "Object spread" - common in Redux 
        let updatedNote = {
                ...theNote,
                content: noteContent
        };

        // sprinkling again... or could concat or .push() the updatedNote after calling fn....
        // let newNotesArray = [
        //     ...this._allNotesExceptSelectedNote(),
        //     updatedNote
        // ];

        // 3rd solution - use map to preserve order
        let newNotesArray = this.state.notes.map(note => {
            if (note.id === this.state.selectedId) {
                return updatedNote;
                }  else {
                    return note;
                }
        })

        // set the state
        this.setState({
            notes: newNotesArray
        })
    }

}

export default App;
