import { Request, Response } from 'express'


export default {
  async index(request:Request, response:Response) {

    return response.json({message:"Ola Mundo !! \n by: Index"});

  },

  async upload (request:Request, response:Response){

    return response.json({message:"Ola Mundo !! \n by: Upload"});

  }
}
