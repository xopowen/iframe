
console.log('animation move start')
//проверка зугруски сцены
document.querySelector('a-scene').addEventListener('loaded', function () {

})

let camera = document.getElementById('my_camera')

class AnimeMoveElementBetweenTwoPoint {
    constructor( cursor) {
        this.list = []
        this.cursor = cursor
        this.isLoved = false
        let timerId = setInterval(()=>{
            if(!this.isLoved){
                for(let i =0;i<=50;i++){
                    let sel = "char"+i
                    let list = document.querySelectorAll(`[mixin = ${sel}]`)
                    list.forEach(item=>{

                        item.addEventListener('mousedown',e => {AnimeMoverElement.mover(e)})

                            let position = Object.assign({
                            }, item.object3D.position)


                            anime({
                                targets: position,
                                loop:true,
                                // x: newPosition.x,
                                z: item.object3D.position.z +40 * Math.cos(item.object3D.rotation.y*180/ 3.14) ,
                                duration:(20+ Math.random()*10)*1000 ,
                                delay:function(el, i, l) {
                                    return Math.random() * 1000;
                                },
                                easing: 'linear',
                                update: function() {

                                    item.object3D.position.set( position.x,position.y,position.z);
                                }
                            })


                    })
                    if(list.length>0){
                        this.isLoved= true
                    }
                }
            }
        },2000)

        this.cursor.addEventListener('mouseup', e => {

            if(e.detail.intersection.distance >5 ){
                if(this.list.length>0){
                    let moverElement = this.list.pop();
                    let position = Object.assign({
                    }, moverElement.object3D.position)
                    anime({
                        targets: position,
                        loop:false,
                        x:   e.detail.intersection.point.x * 0.8,
                        y:   e.detail.intersection.point.y * 0.8,
                        z:   e.detail.intersection.point.z * 0.8,
                        duration:3*1000,
                        update: function() {
                            moverElement.object3D.position.set( position.x,position.y,position.z);
                        }
                    })
                }
            }else{
                this.list.length=0;
            }
        })
    }
    mover(e){
        if(!this.list.includes(e.target)){
            this.list.push(e.target);
        }
    }
}

let cursor = document.getElementById('cursor')

let AnimeMoverElement = new AnimeMoveElementBetweenTwoPoint(cursor);

let planets =  document.querySelectorAll('.image-planers')
planets.forEach(e=>{e.addEventListener('mousedown',e => {AnimeMoverElement.mover(e)})})
// let xoporImg = document.getElementById('xopor')
// xoporImg.addEventListener('mousedown',e => {AnimeMoverElement.mover(e)})


