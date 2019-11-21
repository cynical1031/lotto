module.exports.idx = async(req, res) => {
    try {
        res.status(200).json({
            result: "success"
        });
    } catch (error) {
        console.log(error)
        res.status(200).json({
            result: "fail"
        });
    }
}