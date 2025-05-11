const users = [];

exports.list = (req, res) => {
  res.json(users);
};

exports.get = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuário não encontrado');
  res.json(user);
};

exports.create = (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
};
