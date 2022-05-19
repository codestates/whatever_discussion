
const { users } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = {
    post: async (req, res) => {
        try {
            const { userId, password } = req.body;
            // console.log(userId,password)
            if (!userId || !password) {
                return res.status(422).json({ message: "Insufficient data were provided to server." })
            }
            const userInfo = await users.findOne({
                where: { userId, password },
            });
            // console.log('@@@@@@@',userInfo)
            if (!userInfo) {
                return res.status(201).json({ message: "The user is not in the database." })
            }
            delete userInfo.dataValues.password;
            const accessToken = generateAccessToken(userInfo.dataValues);
            // console.log(accessToken)확인완료

            sendAccessToken(res, accessToken);
            res.json({
                message: "You are successfully logged in.", data: {
                    userInfo: userInfo.dataValues
                }
            })

        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Server is out of order." })
        }
    }
}