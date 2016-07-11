import React from 'react';

import FileRow from './FileRow';

export default (displayName, name, className) => React.createClass({
  displayName,
  getInitialState: function() {
    return { filepath: null };
  },
  handleChange: function(e) {
    this.setState({
      filepath: e.target.files[0].path
    });
  },
  render: function() {
    return <div className={`lang ${className}`}>
      <div className="row title">
        <p>{name}</p>
        <div className="extra">
          <button>compile</button>
          <span className="status"></span>
        </div>
      </div>
      <FileRow filepath={this.state.filepath} />
      <input type="file" onChange={this.handleChange} />
    </div>;
  }
});