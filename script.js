let fakeFunction = (url)=>{
    return new Promise((resolve,reject)=>{
        const timeOut = Math.random()

        setTimeout(() => {
            if(timeOut <0.7 ){
                resolve("your fake data");
            }else{
                reject("timeOut");
            } 
        }, 1000);
    })
}
fakeFunction("apple/page1")
    .then((data)=>{
        console.log("yay" , data)
    })
    .catch((err)=>{
        console.log("hmmm" ,err)
    })

    ///////////////////////////////

    let colres = (color,delay)=>{
       return new Promise((resolve,reject)=>{
            setTimeout(() => {
                document.querySelector("body").style.backgroundColor=color;
                resolve();
            }, delay);
        })
    }

    colres("rgb(204, 255, 255)",1000)
        .then(()=>colres("gray",1000))
        .then(()=>colres("rgb(0, 102, 204)",1000))
        .then(()=>colres("rgb(153, 0, 204)",1000))
        .then(()=>colres("rgb(255, 0, 102)",1000))
        .then(()=>colres("rgb(153, 51, 0)",1000))
        .then(()=>colres("rgb(255, 255, 102)",1000))
        .then(()=>colres("rgb(102, 255, 51)",1000))
        