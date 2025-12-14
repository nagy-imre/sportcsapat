import { Team } from '../models/index.js';

export async function index(req, res) {
  try {
    const teams = await Team.findAll();
    return res.json(teams);
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error!', error: String(err) });
  }
}

export async function store(req, res) {
  try {
    const { name } = req.body ?? {};
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ success: false, message: 'Field "name" is required.' });
    }
    const created = await Team.create({ name });
    return res.status(201).json(created);
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error!', error: String(err) });
  }
}

export async function update(req, res) {
  try {
    const id = Number(req.params.id);
    const { name } = req.body ?? {};
    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, message: 'Invalid id.' });
    }
    const team = await Team.findByPk(id);
    if (!team) return res.status(404).json({ success: false, message: 'Team not found.' });

    if (name !== undefined) team.name = name;
    await team.save();

    return res.json(team);
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error!', error: String(err) });
  }
}

export async function destroy(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, message: 'Invalid id.' });
    }
    const team = await Team.findByPk(id);
    if (!team) return res.status(404).json({ success: false, message: 'Team not found.' });

    await team.destroy();
    return res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error!', error: String(err) });
  }
}
