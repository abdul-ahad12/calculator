import React from 'react'

class Line {
    constructor(ax, ay, bx, by) {
        this.ax = ax;
        this.ay = ay;
        this.bx = bx;
        this.by = by;
    }

    distance(ax, ay, bx, by) {
        let first = Number(ax) - Number(bx);
        let second = Number(ay) - Number(by);

        return Math.sqrt(first * first + second * second);

    }

}

export default Line