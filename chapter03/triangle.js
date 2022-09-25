function Triangle(b, h) {

    function area() {
        return b * h / 2;
    }

    function toString() {
        return `Triangle: ${b}, ${h}`;
    }

    return {
        area: area,
        toString: toString
    };
}

module.exports = Triangle;