const usersSchema = require('../../model/users/index');

module.exports = {
  getUsers: (req, res) => {
    (async function () {
      const allUsers = await usersSchema.find({});
      if (allUsers) {
        return res.json({
          status: 200,
          message: 'Get all users successful!',
          allUsers,
        });
      } else {
        return res.json({
          status: 400,
          message: 'Get all users error!',
        });
      }
    })();
  },
  getUser: (req, res) => {
    const { id } = req.params;
    (async function () {
      const result = await usersSchema.findById(id);
      if (result && id) {
        res.json({
          status: 200,
          message: 'Get user successful!',
          result,
        });
      } else {
        res.json({
          status: 500,
          message: 'User not found!',
        });
      }
    })();
  },
  postUser: (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        status: 401,
        message: 'Email or password invalid!',
      });
    }
    (async function () {
      const result = await usersSchema.findOne({ email });
      if (result && email) {
        res.json({
          status: 200,
          message: 'Email existed!',
        });
      } else {
        const newUser = new usersSchema({ email, password });
        await newUser.save();
        const result = await usersSchema.findOne({ email });
        if (result) {
          res.json({
            status: 200,
            message: 'Created!',
            result,
          });
        } else {
          res.json({
            status: 400,
            message: 'Create user error!',
          });
        }
      }
    })();
  },
};
