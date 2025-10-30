QUnit.module("Rover létrehozás", function() {
  QUnit.test("kezdeti állapot: x,y,heading", function(assert) {
    const r = new Rover(0, 0, 'N', 10, 10);
    assert.deepEqual(r.state(), { x: 0, y: 0, heading: 'N' });
  });
});
QUnit.module("Rover mozgás", function() {
  QUnit.test("előrelépés N irányba (f)", function(assert) {
    const r = new Rover(0, 0, 'N', 5, 5);
    r.execute("f");
    assert.deepEqual(r.state(), { x: 0, y: 1, heading: 'N' });
  });
});
QUnit.module("Rover mozgás – hátra", function() {
  QUnit.test("hátralépés N irányban (b)", function(assert) {
    const r = new Rover(0, 0, 'N', 5, 5);
    r.execute("b");
    assert.deepEqual(r.state(), { x: 0, y: -1, heading: 'N' });
  });
});
QUnit.module("Rover fordulás", function() {
  QUnit.test("balra fordul (l) N → W", function(assert) {
    const r = new Rover(0, 0, 'N', 5, 5);
    r.execute("l");
    assert.deepEqual(r.state(), { x: 0, y: 0, heading: 'W' });
  });
});
