module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {title: "task 1"},
        {title: "task 2"}
      ]);
    }
  };
};
