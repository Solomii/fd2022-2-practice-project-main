module.exports.signUp = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { login, password },
    } = req;
    const user = await User.findOne({ where: { email } });
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
