
console.log('animation move start')


let camera = document.getElementById('my_camera')

class AnimeMoveElementBetweenTwoPoint {
    constructor( cursor) {
        this.list = []
        this.cursor = cursor
        this.cursor.addEventListener('mouseup', e => {
            if(e.detail.intersection.distance >150 ){

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
let xoporImg = document.getElementById('xopor')
xoporImg.addEventListener('mousedown',e => {AnimeMoverElement.mover(e)})
//sky.addEventListener('mousedown',e => {AnimeMoverElement.mover(e)})

