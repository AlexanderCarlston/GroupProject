
const highsSeed = [
  {
    id: 1,
    rating: "4",
    method: "Ate It",
    strain: "Mystery",
    amount: "One Brownie (ALL OF IT)",
    duration: "3.14",
    notes: "Got wicked high."
  },{
    id: 2,
    rating: "2",
    method: "Gravity Bong",
    strain: "Afternoon Delight",
    amount: "Three",
    duration: "69",
    notes: "Could see ghosts, did not share with ghosts."
  },{
    id: 3,
    rating: "1",
    method: "One Hitter",
    strain: "Bruce Banner",
    amount: "1",
    duration: "1",
    notes: "Might have been oregano."
  }]
  
  exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "highs"; ALTER SEQUENCE highs_id_seq RESTART WITH 4;')
      .then(function () {
        // Inserts seed entries
        return knex('highs').insert(highsSeed);
      });
  };