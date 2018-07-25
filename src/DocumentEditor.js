import React from 'react';

class DocumentEditor extends React.Component {
    render() {
        return (
            <div className="document-editor">
                {/* text area in JSX isn't regular HTML */}
                <textarea onChange={(e) => {this.props.handleChange(e.target.value)}}  value={this.props.note.content}  />
            </div>
        );
    }
}

// A function component is like a "render-only" component.
// It doesn't have state or lifecycle methods like
// componentDidMount or constructor
// const DocumentEditor = (props) => {
//     return (
//         <div className="document-editor">
//             <textarea value="Test" />
//         </div>
//     )
// }

export default DocumentEditor;