class Rover {
  constructor(x, y, heading, width, height) {
    this.x = x;
    this.y = y;
    this.heading = heading;
    this.W = width;
    this.H = height;
  }

  state() {
    return { x: this.x, y: this.y, heading: this.heading };
  }

  execute(cmds) {

    const LEFT = { N: 'W', W: 'S', S: 'E', E: 'N' };

    for (const c of cmds) {
      if (c === 'f') {
        if (this.heading === 'N') this.y += 1;
      }else if (c === 'b') {
        if (this.heading === 'N') this.y -= 1; 
      }else if (c === 'l') {
        this.heading = LEFT[this.heading]; 
      }
    }
  }
}

window.Rover = Rover;

