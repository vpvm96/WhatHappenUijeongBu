import * as issueBoardRepository from '../repository/issueBoardRepository.js';

export async function getIssueBoards(req, res) {
  const username = req.query.username;
  const data = await (username
    ? issueBoardRepository.getAllByUsername(username)
    : issueBoardRepository.getAll());
  res.status(200).json(data);
}

export async function getIssueBoard(req, res, next) {
  const id = req.params.id;
  const board = await issueBoardRepository.getById(id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: `IssueBoard id(${id}) not found` });
  }
}

export async function createIssueBoard(req, res, next) {
  const title = req.body.title;
  const content = req.body.content;
  const board = await issueBoardRepository.create(title, content, req.userId);
  res.status(201).json(board);
}

export async function updateIssueBoard(req, res, next) {
  const id = req.params.id;
  const text = req.body.content;
  const issueBaord = await issueBoardRepository.getById(id);
  if (!issueBaord) {
    return res.status(404).json({ message: `IssueBaord not found: ${id}` });
  }
  if (issueBaord.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await issueBoardRepository.update(id, text);
  res.status(200).json(updated);
}

export async function deleteIssueBoard(req, res, next) {
  const id = req.params.id;
  const issueBoard = await issueBoardRepository.getById(id);
  if (!issueBoard) {
    return res.status(404).json({ message: `IssueBoard not found: ${id}` });
  }
  if (issueBoard.userId !== req.userId) {
    return res.sendStatus(403);
  }
  await issueBoardRepository.remove(id);
  res.sendStatus(204);
}
