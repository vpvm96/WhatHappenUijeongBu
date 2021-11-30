import * as freeBoardRepository from '../repository/freeBoardRepository.js';

export async function getFreeBoards(req, res) {
  const username = req.query.username;
  const data = await (username
    ? freeBoardRepository.getAllByUsername(username)
    : freeBoardRepository.getAll());
  res.status(200).json(data);
}

export async function getFreeBoard(req, res, next) {
  const id = req.params.id;
  const board = await freeBoardRepository.getById(id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: `FreeBoard id(${id}) not found` });
  }
}

export async function createFreeBoard(req, res, next) {
  const title = req.body.title;
  const content = req.body.content;
  const board = await freeBoardRepository.create(title, content, req.userId);
  res.status(201).json(board);
}

export async function updateFreeBoard(req, res, next) {
  const id = req.params.id;
  const text = req.body.content;
  const freeBaord = await freeBoardRepository.getById(id);
  if (!freeBaord) {
    return res.status(404).json({ message: `FreeBaord not found: ${id}` });
  }
  if (freeBaord.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await freeBoardRepository.update(id, text);
  res.status(200).json(updated);
}

export async function deleteFreeBoard(req, res, next) {
  const id = req.params.id;
  const freeBoard = await freeBoardRepository.getById(id);
  if (!freeBoard) {
    return res.status(404).json({ message: `FreeBoard not found: ${id}` });
  }
  if (freeBoard.userId !== req.userId) {
    return res.sendStatus(403);
  }
  await freeBoardRepository.remove(id);
  res.sendStatus(204);
}
