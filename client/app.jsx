import React from 'react';
import ReactDOM from 'react-dom';
import FileUploader from './components/fileUploader.jsx';


// alert(FileUploader);

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <FileUploader />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));