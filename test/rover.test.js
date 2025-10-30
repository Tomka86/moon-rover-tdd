QUnit.module("Rover létrehozás", function() {
  QUnit.test("kezdeti állapot: x,y,heading", function(assert) {
    const r = new Rover(0, 0, 'N', 10, 10);
    assert.deepEqual(r.state(), { x: 0, y: 0, heading: 'N' });
  });
});
