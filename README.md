# The logic

const rad1 = (-angle1) * (Math.PI / 180);
const rad2 = (-angle2) * (Math.PI / 180);

const m1 = Math.tan(rad1);
const m2 = Math.tan(rad2);

// checking if the lines are parrallel
if (Math.abs(m1 - m2) < 0.0001) {
    alert("The 2 lines are parrallel"); /* the lines are parrallel */
    return null;
}

const targetY = (x1 - x2 - m1 * y1 + m2 * y2) / (m2 - m1);
const targetX = x1 + m1 * (targetY - y1);
const exactX = targetX.toFixed(5);
const exactY = targetY.toFixed(5);
