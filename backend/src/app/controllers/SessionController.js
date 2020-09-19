import jwt from 'jsonwebtoken';
import User from '../models/User';
import File from '../models/File';
import auth from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!user || !(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Email or pass doesn't match" });
    }

    const { id, name, avatar, is_provider } = user;

    return res.json({
      user: { id, name, email, avatar, is_provider },
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

export default new SessionController();
