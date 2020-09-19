import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const { provider_id } = req.body;
    const isMyself = req.userId === provider_id;

    if (isMyself) {
      return res.status(401).json({ error: 'Não posso me auto agendar' });
    }

    const checkIsProvider = await User.findOne({
      where: { id: req.userId, is_provider: true },
    });

    if (!checkIsProvider) {
      return res.status(401).json({ error: 'You are not a provider' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(req.params.id, {
      read: true,
      new: true,
    });

    return res.json(notification);
  }
}

export default new NotificationController();
