
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      const todos = [{
        title: 'Build a CRUD app',
        priority: 2,
        date: new Date()
      }, {
        title: 'Practice coding',
        priority: 3,
        date: new Date()
      }, {
        title: 'Finish midterm project',
        priority: 1,
        date: new Date()
      }, {
        title: 'Build more apps',
        priority: 4,
        date: new Date()
      }];

      return knex('todo').insert(todos);
    });
};
