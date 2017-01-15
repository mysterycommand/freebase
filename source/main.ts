import "@reactivex/rxjs/src/add/observable/of";
import "@reactivex/rxjs/src/add/operator/map";
import { Observable } from "@reactivex/rxjs/src/Observable";

Observable
    .of("hello", "world")
    .map((value: string) => value.split("").reverse().join(""))
    .subscribe(console.log);
