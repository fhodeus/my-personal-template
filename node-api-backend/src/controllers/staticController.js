export default {
  async index(request, response) {

    return response.json({message:"Ola Mundo !! \n by: Index"});

  },

  async upload (request, response){

    return response.json({message:"Ola Mundo !! \n by: Upload"});

  }
}
