type Pair<T, U> = {
  l: T
  r: U
}

const coord: Pair<number> = {l: 4, r: 5}

function add(a: Pair<number, number>, b: Pair<number, number>): Pair<number, number> {
  // ...
}

console.log(coord)

class PairClass<T, U> {
  p: Pair<T, U>
}

import {type Pair} from './a.js'

(JSON.parse(s): Pair<string, string>)


doSomething<number, string>(4, 'hello')

function sum(this: PairClass, more: PairClass[]) {
  // ...
}


declare function foo(): boolean;


function foo(x: number): number
function foo(x: string): string;
function foo(x: string | number): string | number {
    if (typeof x === number) {
          return x + 1
    }
    else {
        return x + "!"
    }
}

abstract class PairClass<T, U> {
  p: Pair<T, U>
}

class Point {
  public readonly x: number
}
