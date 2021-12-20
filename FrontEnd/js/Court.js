class Court {
    constructor(pxPointCornerLS,pxPointCornerRI){
        this.cornerLS = pxPointCornerLS; // P(0,0)
        this.cornerRI = pxPointCornerRI;
    }
    getScaleXY(pxPoint){
        x = pxPoint.xDiff(this.cornerLS);
        y = pxPoint.yDiff(this.cornerLS);
        return x, y
    }
}

export {Court};