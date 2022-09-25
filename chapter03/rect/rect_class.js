function Rect(a, b) {

    function area() {
        return a * b;
    }

    function toString() {
        return `Rect: ${a}, ${b}`
    }

    return {
        area: area,
        toString: toString
    };
}

module.exports = Rect;