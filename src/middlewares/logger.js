function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Continua para o próximo middleware ou rota
}

module.exports = logger;
