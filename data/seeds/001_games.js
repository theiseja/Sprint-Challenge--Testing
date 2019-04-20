
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Pacman', genre: 'Arcade', releaseYear: '1980'},
        {title: 'Streets of Rage', genre: 'beat-em-up', releaseYear: '1991'},
        {title: 'Dragon Age Origins', genre: 'role-playing', releaseYear: '2009'}
      ]);
    });
};
