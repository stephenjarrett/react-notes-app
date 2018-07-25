import React from 'react'

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <input value={this.props.text} onChange={(e) => {this.props.handleChange(e.target.value)}} type="text" name="" id=""/>
            </div>
        );
    }
}

export default SearchBar;