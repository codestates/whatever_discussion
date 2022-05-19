const { users } = require('../../models');

module.exports = {
    get: async (req, res) => {
        try {
            const { nickname } = req.params;
            console.log(nickname)
            if (!nickname) {
                return res.json({ message: "Please enter the nickname" })
            } else {
                const userInfo = await users.findOne({
                    where: { nickname },
                });

                // console.log(userInfo)
                if (userInfo) {
                    return res.status(200).json({ message: "This nickname already exists." })
                } else {
                    return res.json({ message: "You can use this nickname." })
                }

            }
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: "Server is out of order." })

        }
    }
}