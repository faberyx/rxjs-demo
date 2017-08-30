import { Observable } from 'rxjs'

let numbers = [1,2,3,4];

let source = Observable.create(observable => {

    let loader = (i) =>{
        if(i < numbers.length){
            setTimeout(()=>{
                observable.next(numbers[i++]);
                loader(i)
            }, 2000);
        }else{
            observable.complete();
        }
    };
    loader(0);
}).map(data => data + 5).filter(data => data > 8);

source.subscribe(
    observer => { console.log(observer)},
    error => {},
    () => { console.log('completed')}
)