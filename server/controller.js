const houses = require('./db.json')
const globalID = 4 

module.exports = {
    getHouses: (req, res) => {res.status(200).send(houses)
    },
    deleteHouses: (req, res) => {
        const index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouses: (req, res) => {
        const { address, price, imageURL } = req.body
        const newHouse = {
            id: globalID,
            address, 
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalID++
    },
    updateHouses: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400).send('Well you broke me')
        }
    },

}
