module.exports = app => {
  app.listen(app.get("port"), () => {
    console.log('Task API - Port 3000')
  });
};
