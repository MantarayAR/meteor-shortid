// Write your tests here!
// Here is an example.
Tinytest.add('ShortId should exist', function (test) {
  test.equal(typeof ShortId, 'object');
});

Tinytest.add('ShortId should produce short ids', function (test) {
  test.equal(typeof ShortId.generate(), 'string');
});
