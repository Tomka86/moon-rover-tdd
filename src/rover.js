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
}

window.Rover = Rover;
