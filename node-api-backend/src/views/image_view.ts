import Image from '../models/Image'
import ip from "ip";

export default {

  render(image: Image) {
    return ({
      id:image.id,
      url:`http://${ip.address()}:${process.env.PORT}/uploads/${image.path}`
    })
  },

  renderMany(images : Image[]){ 
    return images.map(image => this.render(image))
  }
}