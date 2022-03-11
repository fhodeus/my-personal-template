import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Folder from '../models/Folder';
import FolderView from '../views/folder_view'
import * as Yup from 'yup'

export default {

    async GetFolder(request: Request, response: Response) {
        const { id } = request.params

        const FolderRepository = getRepository(Folder)
        const folder = await FolderRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(FolderView.render(folder));
    },

    async ListFolder(request: Request, response: Response) {
        const FolderRepository = getRepository(Folder)
        const folders = await FolderRepository.find({
            relations: ['images']
        });

        return response.json(FolderView.renderMany(folders));
    },

    async CreateFolder(request: Request, response: Response) {

        const { name, about } = request.body;
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const FolderRepository = getRepository(Folder)
        const data = {
            name, about, images
        }

        const Schema = Yup.object().shape({
            name: Yup.string().required(),
            about: Yup.string().required().max(300),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required(),
            })
        )})
        await Schema.validate(data, {
            abortEarly: false
        })

        const folder = FolderRepository.create(data);
        await FolderRepository.save(folder)

        return (response.status(201).json({ message: "ola" }))

    },

    async DeleteFolder(request: Request, response: Response) {

        return response.json({ message: "DeleteFolder" });

    }
}
