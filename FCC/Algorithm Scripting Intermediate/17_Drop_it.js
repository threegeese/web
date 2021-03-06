/**
 * 丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止
 * https://freecodecamp.cn/challenges/drop-it
 */
function drop(arr,func){
    var temp = [];
    for(var j=0; j<arr.length; j++){
        temp.push(arr[j]);
    }
    //为什么var temp = arr;不行？
    //在js中关于复合类型的复制是址传递的
    for(var i=0; i<temp.length; i++){
        if(func(temp[i])){
            break;
        }else{
            arr.shift();
        }
    }
    return arr;
}