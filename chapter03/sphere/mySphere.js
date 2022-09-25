function Sphere(r) {

    function area() {
        return 4 * Math.PI * Math.pow(r, 2);
    }

    function toString() {
        return `Sphere: ${r}`
    }

    return {
        area: area,
        toString: toString
    };
}

module.exports = Sphere;
