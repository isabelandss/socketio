
module.exports = function () {

    return {
        setRouting: function (router) {
            router.get("/", this.indexPage)
        }, 

        indexPage: function (req, res) {
            return res.render('index', { test: "Hello world!" })
        }
    }
}