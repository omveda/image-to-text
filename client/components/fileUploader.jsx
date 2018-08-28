import React from 'react';
import axios from 'axios';
import FormData from 'form-data';
import $ from 'jquery';
// import fs from 'fs';

class FileUploader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      img: '',
      imgName: '',
      imgSize: ''
    }
  }
  uploadAndSend() {
    let newFile = document.getElementById('myFile').files[0];
    console.log((newFile));
    let data = new FormData();
    data.append('foo', 'bar', 'foobar');
    data.append('file', newFile, newFile.name.slice(0, -4));
    console.log(data);
    let config = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
      }
    }

    axios.post('/image', data, config)
      .then((response) => {
        //handle success
      }).catch((error) => {
        //handle error
      });
    // ---------------------------------------------------------------
    // let headers = {
    //   'accept': 'application/json',
    //   'Accept-Language': 'en-US,en;q=0.8',
    //   'Content-Type': `multipart/form-data`,
    // }
    // var blobFile = $('#myFile')[0].files[0];
    // var formData = new FormData();
    // formData.append("fileToUpload", blobFile, {headers: headers});

    // console.log(blobFile);
    // var authOptions = {
    //   method: 'POST',
    //   url: 'http://localhost:3000/image',
    //   data: formData,
    //   headers: {
    //     'accept': 'image/png',
    //     'Accept-Language': 'en-US,en;q=0.8',
    //     'Content-Type': `multipart/form-data;`
    //   },
    // };
    // axios(authOptions)
    // console.log(blobFile);
    // ---------------------------------------------------------------
    // var getImage = document.getElementById("myFile").files[0];
    // var xhr = new XMLHttpRequest(); 
    // xhr.open("POST", "/image");
    // xhr.setRequestHeader("Content-Type", "image/png");
    // xhr.onload = function (oEvent) { 
    //     // Uploaded.
    // };
    // xhr.send(getImage);
  }
  onGoogle () {
    console.log('hi')
  }
  render () {
    if (this.state.img === '') {
      return (
        <div id = 'file_upload'>
            <h2> Upload your file: </h2>
            <div id = 'fileHolder'>
                <input type="file" id="myFile" multiple size="1" onChange={this.uploadAndSend.bind(this)} accept ="image/*"/>
                <img id = 'imageUploaded' src = '#' alt =''/>
            </div>
        </div>
      );
    } else {
      return (
        <div id = 'file_upload'>
            <h2> Upload your file: </h2>
            <div id = 'fileHolder'>
                <input type="file" id="myFile" multiple size="1" onChange={this.uploadAndSend.bind(this)} accept ="image/*"/>
                <br/>
                <img id = 'imageUploaded' src = {this.state.img} alt =''/>
                <br/>
                <button id = 'googleButton' onClick = {this.onGoogle.bind(this)}> Click me to get your document </button>
            </div>
        </div>
    );
    }
  }
}

export default FileUploader;