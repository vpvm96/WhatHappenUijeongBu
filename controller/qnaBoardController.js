import * as qnaBoardRepository from '../repository/qnaBoardRepository.js';

export async function getQnaBoards(req, res) {
  const username = req.query.username;
  const data = await (username
    ? qnaBoardRepository.getAllByUsername(username)
    : qnaBoardRepository.getAll());
  res.status(200).json(data);
}

export async function getQnaBoard(req, res, next) {
  const id = req.params.id;
  const board = await qnaBoardRepository.getById(id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: `QnaBoard id(${id}) not found` });
  }
}

export async function createQnaBoard(req, res, next) {
  const title = req.body.title;
  const content = req.body.content;
  const board = await qnaBoardRepository.create(title, content, req.userId);
  res.status(201).json(board);
}

export async function updateQnaBoard(req, res, next) {
  const id = req.params.id;
  const text = req.body.content;
  const qnaBaord = await qnaBoardRepository.getById(id);
  if (!qnaBaord) {
    return res.status(404).json({ message: `QnaBaord not found: ${id}` });
  }
  if (qnaBaord.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await qnaBoardRepository.update(id, text);
  res.status(200).json(updated);
}

export async function deleteQnaBoard(req, res, next) {
  const id = req.params.id;
  const qnaBoard = await qnaBoardRepository.getById(id);
  if (!qnaBoard) {
    return res.status(404).json({ message: `QnaBoard not found: ${id}` });
  }
  if (qnaBoard.userId !== req.userId) {
    return res.sendStatus(403);
  }
  await qnaBoardRepository.remove(id);
  res.sendStatus(204);
}
