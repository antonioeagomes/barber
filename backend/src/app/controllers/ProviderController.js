import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: {
        is_provider: true,
      },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
