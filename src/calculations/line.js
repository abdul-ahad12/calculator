class Line {
    constructor(ax, ay, bx, by, a1, b1, c1, a2, b2, c2) {

        this.ax = ax;
        this.ay = ay;
        this.bx = bx;
        this.by = by;
        this.a1 = a1;
        this.b1 = b1;
        this.c1 = c1;
        this.a2 = a2;
        this.b2 = b2;
        this.c2 = c2;

    }

    distance(ax, ay, bx, by) {
        let first = Number(ax) - Number(bx);
        let second = Number(ay) - Number(by);

        return Math.sqrt(first * first + second * second);

    }
    slope(ax, ay, bx, by) {
        let first = Number(by) - Number(ay);
        let second = Number(bx) - Number(ax);

        return (first / second)

    }


    pointOfint(a1, b1, c1, a2, b2, c2) {
        if (a1 / b1 === a2 / b2) {
            return "The two lines are parallel, hence point of intersection does not exist";
        } else {
            let x = ((b1 * c2) - (b2 * c1)) / ((a1 * b2) - a2 * b1);
            let y = ((c1 * a2) - (c2 * a1)) / ((a1 * b2) - a2 * b1);

            return [x, y]
        }
    }

    intercepts(a1, b1, c1) {
        let xint = -c1 / a1;
        let yint = -c1 / b1;

        return [xint, yint]

    }

}

export default Line