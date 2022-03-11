import Folder from '../models/Folder'
import ImageView from './image_view'

export default {

  render(folder: Folder) {
    return ({
      id: folder.id,
      name: folder.name,
      about: folder.about,
      images: ImageView.renderMany(folder.images)
    })
  },

  renderMany(folders : Folder[]){ 
    return folders.map(folder => this.render(folder))
  }
}