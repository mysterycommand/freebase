import { Observable } from '@reactivex/rxjs/src/Observable';
import '@reactivex/rxjs/src/add/observable/of';
import '@reactivex/rxjs/src/add/operator/map';

Observable
    .of('hello', 'world')
    .map((value: string) => value.split('').reverse().join(''))
    .subscribe(console.log);
