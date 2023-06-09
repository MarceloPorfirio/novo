$(document).ready(function(){
    let containerA = document.getElementById('circleA');

    let circleA = new ProgressBar.Circle(containerA,{

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to: { color: '#65D4F9'},


        step: function(state, circle){
            circle.path.setAttribute('stroke',state.color)
            let value = Math.round(circle.value() * 60)

            circle.setText(value)
        }
    })

    let containerB = document.getElementById('circleB');

    let circleB = new ProgressBar.Circle(containerB,{

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA'},
        to: { color: '#65D4F9'},


        step: function(state, circle){
            circle.path.setAttribute('stroke',state.color)
            let value = Math.round(circle.value() * 254)

            circle.setText(value)
        }
    })
    let containerC = document.getElementById('circleC');

    let circleC = new ProgressBar.Circle(containerC,{

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#AAA'},
        to: { color: '#65D4F9'},


        step: function(state, circle){
            circle.path.setAttribute('stroke',state.color)
            let value = Math.round(circle.value() * 560)

            circle.setText(value)
        }
    })

    let containerD = document.getElementById('circleD');

    let circleD = new ProgressBar.Circle(containerD,{

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA'},
        to: { color: '#65D4F9'},


        step: function(state, circle){
            circle.path.setAttribute('stroke',state.color)
            let value = Math.round(circle.value() * 1800)

            circle.setText(value)
        }
    })

    //iniciando o loader quanto o usuario chega no elemento
let dataAreaOffset = $('#data-area').offset();
let pare = 0
$(window).scroll(function(e){

    let scroll = $(window).scrollTop();

    if(scroll > (dataAreaOffset.top - 500) && pare == 0 ){


        circleA.animate(1.0)
        circleB.animate(1.0)
        circleC.animate(1.0)
        circleD.animate(1.0)

        pare = 1
    }
})

//Parallax = movimento de imagem no fundo
setTimeout(function(){

    $('#data-area').parallax({imageSrc: 'imgages/all_clean.png'})
},250)
})

