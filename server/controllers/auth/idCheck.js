const { users } = require('../../models');

module.exports = {
    get: async (req, res) => {
        try {
            const { userId } = req.params;
            if (!userId) {
                return res.json({ message: "Please enter the userId" })
            } else {
                const userInfo = await users.findOne({
                    where: { userId },
                });

                // console.log(userInfo)
                if (userInfo) {
                    return res.status(200).json({ message: "This id already exists." })
                } else {
                    return res.json({ message: "You can use this id." })
                }
            }
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: "Server is out of order." })

        }
    }
}