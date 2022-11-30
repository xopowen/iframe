
AFRAME.registerComponent('bird-move',{
    schema:{},
    init:function (){
        let bird = this.el

        let position = {x:2.14425 ,y:1.16671 ,z:1.40571,
            toString(){
                return this.x+' '+ this.y+' '+this.z+''
            }
        }
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

                    bird.setAttribute('rotation',  `${rotation.x} ${rotation.y} ${rotation.z}`);
                }
            }
        )




    }
})

