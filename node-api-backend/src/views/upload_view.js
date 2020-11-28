export default {

  render(image) {
    return ({
      id:image.id,
      url:`http://${process.env.HOST}:${process.env.PORT}/uploads/${image.path}`
    })
  },

  renderMany(imagesArray){ 
    return imagesArray.map(image => this.render(image))
  }
}