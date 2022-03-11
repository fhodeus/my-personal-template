import { Request, Response } from 'express'
import User from '../models/User';
import { getRepository } from 'typeorm'
import * as Yup from 'yup'
import UserView from '../views/user_view'

export default {

    async CreateUser(request: Request, response: Response) {
        const {
            login,
            password
        } = request.body

        const UserRepository = getRepository(User)

        const userexist = await UserRepository.findOne(
            { where: { login: login } }
        );

        if (userexist)
            return response.status(400).send({ error: `User exist` })

        const user: User = { login, password }

        const Schema = Yup.object().shape({
            login: Yup.string().required(),
            password: Yup.string().required()
        })

        await Schema.validate(user, {
            abortEarly: false
        })

        const userCreated = UserRepository.create(user);

        await UserRepository.save(userCreated)

        const token = UserView.genToken(user)

        return (response.status(201).json({
            message: "Usuario Criado com sucesso!!",
            user: UserView.render(userCreated),
            token
        }))

    },

    async Login(request: Request, response: Response) {
        const { login, password } = request.body

        const UserRepository = getRepository(User)

        const user = await UserRepository.findOne(
            { where: { login: login } }
        );

        if (!user)
            return response.status(400).send({ error: `User not Found` })

        if (user.password != password)
            return response.status(400).send({ error: `Invalid Password` })

        const token = UserView.genToken(user)

        return response.json({
            mensagem: "rota para autenticacao de usuario ",
            by: `Login`,
            user: UserView.render(user),
            token
        });

    },

    async ListUsers(request: Request, response: Response) {

        const UserRepository = getRepository(User)

        const users = await UserRepository.find();

        return response.json(UserView.renderMany(users));
    },
}