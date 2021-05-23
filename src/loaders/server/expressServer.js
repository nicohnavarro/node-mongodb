const express = require('express');
const config = require('../../config');
const morgan = require('morgan');
class ExpressServer {

  constructor(){  
    this.app = express();
    this.port = config.port;
    this.basePath = config.api.prefix;
    this._middlewares(); 
    this._routes();
    this._notFound();
    this._errorHandler();
  }

  _middlewares(){
    this.app.use(express.json());
    this.app.use(morgan('tiny'));
  }

  _routes(){
    
    this.app.head('/status',(req,res)=>{
      res.status(200).end();
    });

    this.app.use(`${this.basePath}/users`,
      require('../../routes/users'));
  }

  _notFound(){
    this.app.use((req,res,next)=>{
      const err = new Error('Not Found');
      err.status = 404;
      err.code = 404;
      next(err);
    });
  }

  _errorHandler(){
    this.app.use((err,req,res,next)=>{
    const code = err.code || 500;
      res.status(code);
      const body = {
        error:{
          code,
          message:err.message
        }
      }
      res.json(body);
    });
  }

  async start(){
    this.app.listen(this.port,(error) =>{
      if(error){
        console.log(error);
        process.exit(1);
        return;
      }
    });
  }
}

module.exports = ExpressServer;
