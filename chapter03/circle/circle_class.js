function Circle(x, y, r) {

    function r_squared() {
        return Math.pow(r, 2);
    }

    function area() {
        return Math.PI * r_squared();
    }

    function toString() {
        return `Circle: ${x}, ${y}, ${r}`;
    }

    return {
        area: area,
        toString: toString
    };
}

module.exports = Circle;