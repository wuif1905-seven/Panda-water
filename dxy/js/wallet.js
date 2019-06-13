window.onload=function () {
    let li=document.querySelectorAll('.taken>.jilu>ul>li');
    let yhq=document.querySelector('.yhq');
    let arr= [
        {id:1,img:'../img/img/yhq.png',status:true},
        {id:2,img:'../img/img/40.png',status:false},
        {id:3,img:'../img/img/40.png',status:false}
    ]
    li.forEach(function (elem) {
        elem.onclick=function () {
            // let target=e.target;
            let type=this.getAttribute('type');
            // console.log(type);
            if(type=='a'){
                return true;
            }else if(type=='b'){
                return false;
            }else{
                return false;
            }
        }
    })
    render(arr);
    function render(arr){
        let html='';
        arr.forEach(function (elem) {
            if(elem.stauts){
                html +=
                    `
               <img src="${elem.img}" alt="">
                `
            }else if(!elem.stauts){
                html +=
                    `
               <img src="${elem.img}" alt="">
                `
            }else{
                html +=
                    `
               <img src="${elem.img}" alt="">
                `
            }

        })
        yhq.innerHTML=html;
    }
}