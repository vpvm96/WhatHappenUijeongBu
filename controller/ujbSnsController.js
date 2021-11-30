import * as snsRepository from '../repository/ujbSnsRepository.js';
import { getSocketIO } from '../connection/socket.js';

export async function getSnss(req, res) {
  const username = req.query.username;
  const data = await (username
    ? snsRepository.getAllByUsername(username)
    : snsRepository.getAll());
  res.status(200).json(data);
}

export async function getSns(req, res, next) {
  const id = req.params.id;
  const sns = await snsRepository.getById(id);
  if (sns) {
    res.status(200).json(sns);
  } else {
    res.status(404).json({ message: `Sns id(${id}) not found` });
  }
}

export async function createSns(req, res, next) {
  const { text } = req.body;
  const sns = await snsRepository.create(text, req.userId);
  res.status(201).json(sns);
  getSocketIO().emit('sns', sns);
}

export async function updateSns(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const sns = await snsRepository.getById(id);
  if (!sns) {
    return res.status(404).json({ message: `Sns not found: ${id}` });
  }
  if (sns.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await snsRepository.update(id, text);
  res.status(200).json(updated);
}

export async function deleteSns(req, res, next) {
  const id = req.params.id;
  const sns = await snsRepository.getById(id);
  if (!sns) {
    return res.status(404).json({ message: `Sns not found: ${id}` });
  }
  if (sns.userId !== req.userId) {
    return res.sendStatus(403);
  }
  await snsRepository.remove(id);
  res.sendStatus(204);
}
