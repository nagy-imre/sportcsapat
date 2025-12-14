/**
 * Név: Nagy Imre
 * Dátum: 2025-12-14
 * Csoport: XY
 */

import { Player } from '../models/index.js';

export async function index(req, res) {
  try {
    const players = await Player.findAll();
    return res.json(players);
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
    const created = await Player.create({ name });
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
    const player = await Player.findByPk(id);
    if (!player) return res.status(404).json({ success: false, message: 'Player not found.' });

    if (name !== undefined) player.name = name;
    await player.save();

    return res.json(player);
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
    const player = await Player.findByPk(id);
    if (!player) return res.status(404).json({ success: false, message: 'Player not found.' });

    await player.destroy();
    return res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error!', error: String(err) });
  }
}
