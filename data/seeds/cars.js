exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          vin: "test vin",
          make: "test make",
          model: "test model",
          mileage: "256523765"
        },
        {
          id: 2,
          vin: "test vin 2",
          make: "test make 2",
          model: "test model 2",
          mileage: "256523763"
        },
        {
          id: 3,
          vin: "test vin 3",
          make: "test make 3",
          model: "test model 3",
          mileage: "256523769"
        },
      ]);
    });
};
