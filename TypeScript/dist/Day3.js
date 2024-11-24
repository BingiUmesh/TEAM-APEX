"use strict";
class TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    get ReelTime() {
        return 8;
    }
}
class Instagram extends TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log("implemented");
    }
}
let user = new Instagram("potrait", "normal");
console.log(user.ReelTime);
