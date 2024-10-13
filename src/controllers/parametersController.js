import parametersService from "../services/parametersService.js"

const controller = {}

controller.retrieve = async (request, response) => {
    const { city, institute, room, name, limit } = request.query

    try {
        if (!city?.trim() || !institute?.trim() || !room?.trim() || !name?.trim()) {
            response.sendStatus(400)
            return
        }
        const parameters = await parametersService.retrieve(city, institute, room, name, limit)
        response.status(200).json(parameters)
    } catch (error) {
        response.status(400).json({ error: "Bad request", message: error.message })
    }
}

export default controller