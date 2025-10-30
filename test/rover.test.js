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
    assert.deepEqual(r.state(), { x: 0, y: 4, heading: 'N' });
  });
});
QUnit.module("Rover fordulás", function() {
  QUnit.test("balra fordul (l) N → W", function(assert) {
    const r = new Rover(0, 0, 'N', 5, 5);
    r.execute("l");
    assert.deepEqual(r.state(), { x: 0, y: 0, heading: 'W' });
  });
});
QUnit.module("Rover fordulás", function(){
QUnit.test("jobbra fordul (r) N → E", function(assert) {
  const r = new Rover(0, 0, 'N', 5, 5);
  r.execute("r");
  assert.deepEqual(r.state(), { x: 0, y: 0, heading: 'E' });
  });
});
QUnit.module("Rover mozgás – E irány", function() {
  QUnit.test("előrelépés E irányba (f): x nő", function(assert) {
    const r = new Rover(0, 0, 'E', 5, 5);
    r.execute("f");
    assert.deepEqual(r.state(), { x: 1, y: 0, heading: 'E' });
  });

  QUnit.test("hátralépés E irányban (b): x csökken", function(assert) {
    const r = new Rover(2, 0, 'E', 5, 5);
    r.execute("b");
    assert.deepEqual(r.state(), { x: 1, y: 0, heading: 'E' });
  });
});
QUnit.module("Rover mozgás – S irány", function() {
  QUnit.test("előrelépés S irányba (f): y csökken", function(assert) {
    const r = new Rover(0, 2, 'S', 5, 5);
    r.execute("f");
    assert.deepEqual(r.state(), { x: 0, y: 1, heading: 'S' });
  });

  QUnit.test("hátralépés S irányban (b): y nő", function(assert) {
    const r = new Rover(0, 2, 'S', 5, 5);
    r.execute("b");
    assert.deepEqual(r.state(), { x: 0, y: 3, heading: 'S' });
  });
});

QUnit.module("Rover mozgás – W irány", function() {
  QUnit.test("előrelépés W irányba (f): x csökken", function(assert) {
    const r = new Rover(2, 0, 'W', 5, 5);
    r.execute("f");
    assert.deepEqual(r.state(), { x: 1, y: 0, heading: 'W' });
  });

  QUnit.test("hátralépés W irányban (b): x nő", function(assert) {
    const r = new Rover(2, 0, 'W', 5, 5);
    r.execute("b");
    assert.deepEqual(r.state(), { x: 3, y: 0, heading: 'W' });
  });
});
QUnit.module("Rover – X wrap (torusz)", function() {
  QUnit.test("E irányban az utolsó oszlopról előre lépve visszaugrik 0-ra", function(assert) {
    const r = new Rover(4, 0, 'E', 5, 5); // W=5 → x ∈ [0..4]
    r.execute("f");
    assert.deepEqual(r.state(), { x: 0, y: 0, heading: 'E' });
  });

  QUnit.test("W irányban 0-ról előre lépve visszaugrik W-1-re", function(assert) {
    const r = new Rover(0, 0, 'W', 5, 5);
    r.execute("f");
    assert.deepEqual(r.state(), { x: 4, y: 0, heading: 'W' });
  });
});
QUnit.module("Rover – Spherical wrapping (pólus flip)", function() {
  QUnit.test("Északi pólus átlépése → heading 'S', y=0, x eltolás W/2", function(assert) {
    const r = new Rover(0, 4, 'N', 6, 5);
    r.execute("f");
    assert.deepEqual(r.state(), { x: 3, y: 0, heading: 'S' });
  });

  QUnit.test("Déli pólus átlépése → heading 'N', y=H-1, x eltolás W/2", function(assert) {
  const r = new Rover(0, 0, 'S', 6, 5);
  r.execute("f");
  assert.deepEqual(r.state(), { x: 3, y: 4, heading: 'N' });
  });
});
QUnit.module("Rover – akadályérzékelés", function() {
  QUnit.test("Akadály esetén megáll és jelenti az akadályt", function(assert) {
    const obstacles = [{ x: 0, y: 1 }];
    const r = new Rover(0, 0, 'N', 5, 5, obstacles);
    const result = r.execute("f");

    assert.deepEqual(result, {
      x: 0,
      y: 0,
      heading: 'N',
      obstacle: "obstacle at (0,1)"
    });
  });
});
