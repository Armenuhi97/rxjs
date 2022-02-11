import { debounce, debounceTime, forkJoin, fromEvent, interval, map, of, range, Subscription } from "rxjs";


//1.Ստեղծել observable, որը ամեն վարկյանը մեկ emit կանի [1-10] թվերը։

// let subscription: Subscription
// subscription = interval(1000).pipe().subscribe(() => {
//   range(0, 10).pipe().subscribe((subscription:number) => {
//     console.log(subscription);
//   })
// })

// 2.Ստեղծել observable, որը ստանալով մի տիպի data, կփոխի այն և նոր emit կանի`
// { id: number, firstName: string, lastName: string }  ⇒  { id: number, fullName: string }
// fullName-ը firstName-ից ու lastName-ից է կազմված
// of({ firstName: 'John', lastName: 'Smith', id: 1 }).pipe(
//   map((data)=>{
//     let obj={      
//       id: 1,
//       fullName:`${data.firstName} ${data.lastName}` 
//     }
//     return obj
//   })
// ).subscribe((val)=>{
//   console.log(val);

// })

// 3.Ստեղծել Obs4 անունով observable, որը կսպասի 3 այլ observable-ների և միանգամից emit կանի նրանց բոլորը value-ները՝
// Obs1: emits 42
// Obs2: emits “hello world”
// Obs3: emits { name: ‘test’, age: 20 }
// Obs4: [42, “hello world”, { name: ‘test’, age: 20 }] կամ { obs1: 42, obs2: “hello world”, obs3: { name: ‘test’, age: 20 } }
// let obs1 = of(42);
// let obs2 = of('hello world');
// let obs3 = of({ name: 'test', age: 20 })
// let obs4 = forkJoin(
//   [
//     obs1,
//     obs2,
//     obs3
//   ]
// ).subscribe((data)=>{
//   console.log(data);
  
// })

// 4.
// Ստեղծել observable, որը տրված value-ն emit կանի 3 վայրկյան հետո
// const obsevable = of(100);
// const result = obsevable.pipe(debounceTime(3000));
// result.subscribe((x:number) => console.log(x));