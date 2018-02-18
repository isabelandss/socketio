const dependable = require("dependable")
const path = require("path")
const container = dependable.container()

const simpleDependencies = [
    ["_", "lodash"]
]

simpleDependencies.forEach(item => {
    container.register(item[0], function () {
        return require(item[1])
    })
})

container.load(path.join(__dirname, '/controllers'))
container.load(path.join(__dirname, '/helpers'))

container.register("container", function () {
    return container
})

module.exports = container