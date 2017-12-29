
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      const todos = [(
        title: 'Build a CRUD app',
        prioroty: 2,
        date: new Date()
      ), (
        title: 'Practice coding',
        prioroty: 3,
        date: new Date()
      ), (
        title: 'Finish midterm project',
        prioroty: 1,
        date: new Date()
      ), (
        title: 'Build more apps',
        prioroty: 4,
        date: new Date()
      )];

      return.knex('todo').insert(todos);
    });
};
