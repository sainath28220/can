function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if (hasDrivingLiscence === false){
        return("You cannot drive")
    }else{
        if(isTired === true || isSober === false){
            return("You shouldn't drive")
        }if(isTired === false && isSober === true){
            return("You can drive")
        }
    }
}


module.exports = CanDrive;
