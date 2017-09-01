import { Observable } from 'rxjs'

let circle; 

let source = Observable.fromEvent(document,'mousemove')
    .map((e : MouseEvent) => { return {x: e.clientX , y: e.clientY }})
    .delay(300);


function onNext(value){
    let circle = document.getElementById('circle') ;
    circle.style.left = value.x;
    circle.style.top = value.y
}


source.subscribe(
    onNext,
    error => {},
    () => { console.log('completed')}
)