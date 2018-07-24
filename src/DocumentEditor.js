import React from 'react';

class DocumentEditor extends React.Component {
    render() {
        return (
            <div className="document-editor">
                {/* text area in JSX isn't regular HTML */}
                <textarea value="Let's make some happy little clouds in our world. Be brave. That's the way I look when I get home late; black and blue. You can create the world you want to see and be a part of. You have that power." />
            </div>
        );
    }
}

export default DocumentEditor;