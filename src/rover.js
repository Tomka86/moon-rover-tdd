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
    const RIGHT = { N:'E', E:'S', S:'W', W:'N' };

    for (const c of cmds) {
      if (c === 'f') {
        if (this.heading === 'N') this.y += 1;
        if (this.heading === 'E') this.x += 1; 
      }else if (c === 'b') {
        if (this.heading === 'N') this.y -= 1;
        if (this.heading === 'E') this.x -= 1;  
      }else if (c === 'l') {
        this.heading = LEFT[this.heading]; 
      }else if (c === 'r') {
        this.heading = RIGHT[this.heading];
      }
    }
  }
}

window.Rover = Rover;

