
console.log('animation move start')
let bird = document.querySelector('[src="#bird"]')

let position = {x:2.14425 ,y:1.16671 ,z:1.40571,
    toString(){
        return this.x+' '+ this.y+' '+this.z+''
    }
}

// let key2 = {x:-2.14425 ,y:1.16671 ,z:1.40571}
let rotation={x:-180.02985,y: 4.094356404004863,z: -179.9998479605043}


let bird_move_position = anime(
    {
        targets:position,
        duration:3*1000,
        x:[
            {
                value:2.14425,
                duration:1 *1000,//1/2 поклона
            },
            {
            value:-2.14425,
            duration:1*1000  , //движение
            },
            {
            value:-2.14425,
            duration:1*1000 , //1/2 поклона
            },
            {
                value:-2.14425,
                duration:1 *1000,//1/2 поклона
            },
            {
                value:2.14425,
                duration:1 *1000,//1/2 движение
            },
            {
                value:2.14425,
                duration:1 *1000,//1/2 поклона
            },
        ],
        easing:'linear',
        loop:true,
        autoplay:true,
        update: function() {

            bird.setAttribute('position', position.toString());
        }
    }
)
let bird_move_rotation = anime(
    {
    targets:rotation,
    duration:3*1000,
    y:[
        {
            value:4.094356404004863,
            duration:1 *1000,//1/2 поклона
        },
        {
            value:4.094356404004863,
            duration:1*1000  , //движение
        },
        {
            value:90.02985,
            duration:1*1000 , //1/2 поклона
        },
        {
            value:180.02985,
            duration:1 *1000,//1/2 поклона
        },
        {
            value:180.02985,
            duration:1 *1000,//1/2 движение
        },
        {
            value:180.02985,
            duration:1 *1000,//1/2 поклона
        },
    ],
    easing: 'linear',
    loop: true,
    autoplay:true,
    update: function() {

        bird.setAttribute('rotation', position.toString.call(rotation));
    }
}
)




let camera = document.getElementById('my_camera')

class AnimeMoveElementBetweenTwoPoint {
    constructor( cursor) {
        this.list = []
        this.cursor = cursor
        this.cursor.addEventListener('mouseup', e => {
            if(e.detail.intersection.distance >150 ){
                console.log(e.detail.intersection.point)
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

