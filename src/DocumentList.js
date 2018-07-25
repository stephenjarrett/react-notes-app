import React from 'react';

class DocumentList extends React.Component {
    render() {

        // _createListItem = (note) => {
        //     return (
        //         <li className="document-list-item">
        //         {note.title}
        //         </li>
        //     );
        // }

        // let items = this.props.allNotes.map(_createListItem());
        
        let items = this.props.allNotes.map(note => (
            <li className="document-list-item" key={note.id}>
                <a href="#" 
                onClick={() => { this.props.handleSelection(note.id) }}>
                {note.title}
                </a> 
            </li>
            )
        );
        
        return (
            <div className="document-list">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }  
}

export default DocumentList;