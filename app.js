const btn = document.querySelector("button");

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`
//         setTimeout(() => {
//             btn.style.transform = `translateX(200px)`
//         }, 2000)
//     }, 2000)
// }, 1000)


const moveX = (element, amount, delay, onSuccess, onFailure) => {

    setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currleft = element.getBoundingClientRect().left;

    if (elRight + amount > bodyBoundary) {
        onFailure();
    }else {

        element.style.transform = `translateX(${currleft + amount}px)`;
        onSuccess();
        }
    }, delay);
}

;

// moveX(btn, 100, 2000, ()=>{
//     moveX(btn, 100, 1000, ()=>{
//         moveX(btn, 100, 1000, () =>{
//             moveX(btn, 500, 1000);
//         })
//     });
// });

moveX(btn, 100, 1000, () => {
    // success
    moveX(btn, 400, 1000, () => {
        moveX(btn, 700, 1000, () => {
            console.log("we still have screen left");
        }, () => {
            alert("Cannot move further");
        })
    }, () => {
        alert("Cant no move further");
    })
}, () => {
    alert("Cant no move further");
})




