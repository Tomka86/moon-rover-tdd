class Rover {
  constructor(x, y, heading, width, height, obstacles = []) {
    this.x = x;
    this.y = y;
    this.heading = heading;
    this.W = width;
    this.H = height;
    this.obstacles = new Set(obstacles.map(o => `${o.x},${o.y}`));
    this.obstacleReport = null;
  }

  state() {
    return { x: this.x, y: this.y, heading: this.heading };
  }

  execute(cmds) {
    const LEFT  = { N: 'W', W: 'S', S: 'E', E: 'N' };
    const RIGHT = { N: 'E', E: 'S', S: 'W', W: 'N' };

    this.obstacleReport = null; 

    for (const c of cmds) {
      let nx = this.x;
      let ny = this.y;

      if (c === 'f') {
        if (this.heading === 'N') ny += 1;
        if (this.heading === 'E') nx += 1;
        if (this.heading === 'S') ny -= 1;
        if (this.heading === 'W') nx -= 1;
      } else if (c === 'b') {
        if (this.heading === 'N') ny -= 1;
        if (this.heading === 'E') nx -= 1;
        if (this.heading === 'S') ny += 1;
        if (this.heading === 'W') nx += 1;
      } else if (c === 'l') {
        this.heading = LEFT[this.heading];
        continue;
      } else if (c === 'r') {
        this.heading = RIGHT[this.heading];
        continue;
      }
      nx = ((nx % this.W) + this.W) % this.W;

      if (this.heading === 'N' && ny >= this.H) {
        if (c === 'f') {
          ny = 0;
          this.heading = 'S';
          nx = (nx + Math.floor(this.W / 2)) % this.W;
        } else {
          ny = 0;
        }
      } else if (this.heading === 'S' && ny < 0) {
        if (c === 'f') {
          ny = this.H - 1;
          this.heading = 'N';
          nx = (nx + Math.floor(this.W / 2)) % this.W;
        } else {
          ny = this.H - 1;
        }
      } else {
        if (ny < 0) ny = this.H - 1;
        if (ny >= this.H) ny = 0;
      }
      const key = `${nx},${ny}`;
      if (this.obstacles.has(key)) {
        this.obstacleReport = `obstacle at (${nx},${ny})`;
        break;
      }
      this.x = nx;
      this.y = ny;
    }
    return { ...this.state(), obstacle: this.obstacleReport };
  }
}

window.Rover = Rover;



