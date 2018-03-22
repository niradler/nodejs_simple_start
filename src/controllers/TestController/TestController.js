const TestController = async (req, res) => {
    res.status(200).json({msg: 'hello world!'})
}

module.exports = TestController;