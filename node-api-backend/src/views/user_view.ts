import User from "../models/User"
import jwt from "jsonwebtoken"
import process from '../config/env.config'

export default {

  render(user: User) {
    return ({
      //id: user.id,
      login: user.login,
      //password:user.password
    })
  },

  renderMany(users: User[]) {
    return users.map(user => this.render(user))
  },

  genToken(user: User) {
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400
    })
    return token
  }
}