import { startOfDay, endOfDay, parseISO } from 'date-fns';
import Op from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleControler {
  async index(req, res) {
    const isUserProvider = await User.findOne({
      where: { id: req.userId, is_provider: true },
    });

    if (!isUserProvider)
      return res.status(401).json({ error: 'user has no permition' });
    const { date } = req.query;
    const parseDate = parseISO(date);

    const scheduleOfDay = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        cancelled_at: null,
        date: {
          [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });

    return res.json(scheduleOfDay);
  }
}

export default new ScheduleControler();
