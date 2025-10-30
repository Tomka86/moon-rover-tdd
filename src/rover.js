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
    const LEFT  = { N: 'W', W: 'S', S: 'E', E: 'N' };
    const RIGHT = { N: 'E', E: 'S', S: 'W', W: 'N' };

    for (const c of cmds) {
      if (c === 'f') {
        if (this.heading === 'N') this.y += 1;
        if (this.heading === 'E') this.x += 1;
        if (this.heading === 'S') this.y -= 1;
        if (this.heading === 'W') this.x -= 1;
      } else if (c === 'b') {
        if (this.heading === 'N') this.y -= 1;
        if (this.heading === 'E') this.x -= 1;
        if (this.heading === 'S') this.y += 1;
        if (this.heading === 'W') this.x += 1;
      } else if (c === 'l') {
        this.heading = LEFT[this.heading];
      } else if (c === 'r') {
        this.heading = RIGHT[this.heading];
      }
      this.x = ((this.x % this.W) + this.W) % this.W;
      if (this.heading === 'N' && this.y >= this.H) {
        if (c === 'f') {
          this.y = 0;
          this.heading = 'S';
          this.x = (this.x + Math.floor(this.W / 2)) % this.W;
        } else {
          this.y = 0;
        }
      } else if (this.heading === 'S' && this.y < 0) {
        if (c === 'f') {
          this.y = this.H - 1;
          this.heading = 'N';
          this.x = (this.x + Math.floor(this.W / 2)) % this.W;
        } else {
          this.y = this.H - 1; 
        }
      } else {
        if (this.y < 0) this.y = this.H - 1;
        if (this.y >= this.H) this.y = 0;
      }
    }
  }
}

window.Rover = Rover;


