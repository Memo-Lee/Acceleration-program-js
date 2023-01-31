//1. Yöntem
function getAverage1(a:number,b:number,c:number):string {
    let total = a+b;
    let count = 2;
    if (typeof c!== 'undefined') {
        total+=c;
        count++
    }
    const result = total/count;
    return 'return: '+ result;
}
getAverage1(10,20,30);

// 2.Yöntem
function getAverage2(...a:number[]): string {
    
    let total = 0;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count ++;
    }
    const result = total/count;
    return 'result : '+ result;
} 
getAverage2(1,2,3,4,5,6,7);

//3.Yöntem
const getAverage3 = (...a:number[]):string => {

    return 'result : ';
}
// NOTE: Void ile geri dönüşsüz;