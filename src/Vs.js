const arr1 = [1, 2, 3]; // 참조(주소), 값

const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

let count = 10;
// 메모리공간 (주소)를 10으로 저장
    count = 100; // 저장된 10을 빼고, 100을 저장하라


// ---------------------------------------------------------

function action(){

}

document.getElementById('btn').addEventListener('click',action )
// <p id='btn' onClick={action}></p>

document.getElementById('btn').addEventListener('click',()=>{ action() } )
// <p id='btn' onClick={()=>{ action() }}></p>