function CreateObject(arr) {
    let heap = {};
    for (let x = 0; x<arr.length;x = x+2){
        // console.log(heap,x,x+2);
        heap[arr[x]] = arr[x+1];
    }return heap
}

module.exports = CreateObject;
