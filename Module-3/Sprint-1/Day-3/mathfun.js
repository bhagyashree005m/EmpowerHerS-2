const PI=3.141592;

function circumference(radius){
    return 2*PI*radius;
}
function getArea(radius){
    return PI*radius*radius;
}
function getvolume(radius,height){
    return getArea(radius)*height;
}

export {PI, getArea, circumference, getvolume};