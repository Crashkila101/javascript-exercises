const sumAll = function(x,y) {
    if(x<0 || y<0 || typeof(x)!="number" || typeof(y)!="number")
    return "ERROR";
    if (x<y) {
        for(let i=x+1; i<=y; i++) {
            x+=i;
        }
        return x;
    }
    if (x>y) {
        for(let i=y+1; i<=x; i++) {
            y+=i;
        }
        return y;
    }
};

// Do not edit below this line
module.exports = sumAll;
