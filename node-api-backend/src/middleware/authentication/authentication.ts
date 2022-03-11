import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import process from '../../config/env.config'

const authApiMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization

  if (!authHeader)
    return response.status(401).send({ error: `O token nao foi informado` })

  const parts = authHeader.split(' ')

  console.log(parts)

  if (!(parts.length == 2))
    return response.status(401).send({ error: `Token error` })

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme))
    return response.status(401).send({ error: `Token malformatted` })

  jwt.verify(token, process.env.SECRET, (err, decoded: any) => {
    if (err)
      return response.status(401).send({ error: `Token Invalido` })

    request.userId = decoded.id
  })

  return next()

}

export default  authApiMiddleware 