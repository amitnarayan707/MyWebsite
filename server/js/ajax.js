export class ajax {
  constructor() {
    this.http = new XMLHttpRequest();
  }
  // get request
  get = (url,callback) => {
    this.http.open("GET", url, true);
    this.http.send();
    this.http.onprogress = () => {
      return "Loading"
    }
    this.http.onload = (callback) => {
      if (this.http.status == 200) {
        let data = this.http.responseText;
        // console.log(data)
        return callback(JSON.parse(data));
      }
    };
  };

  //post request
  post = (url,data,encrption,callback) => {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Context-Type', encrption);
    this.http.onprogress = () => {
      return "uploading"
    }
    this.http.onload =()=>{
      let data = this.http.responseText;
      let succes = JSON.parse(data);
      return succes;
    }
    this.http.send(data);
  }
};