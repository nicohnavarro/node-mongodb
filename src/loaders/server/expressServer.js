const express = require('express');
const config = require('../../config/index');

class ExpressServer {

  constructor(){  
    this.app = express();
    this.port = config.port;
    this.basePath = config.api.prefix;
    this._middlewares(); 
    this._routes();
  }

  _middlewares(){
    this.app.use(express.json());
  }

  _routes(){
    this.app.use(`${this.basePath}/users`,require('../../routes/users'));
  }

  async start(){
    this.app.listen(this.port,() =>{
      if(error){
        console.log(error);
        process.exit(1);
        return;
      }
    });
  }
}

module.exports = ExpressServer;
