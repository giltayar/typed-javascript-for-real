//@ts-nocheck

function add1(a, b) {
  return a + b
}

function add2(a: number, b: number): number {
  return a + b
}

add2("does this fail? ", false)

function add3(a: hi mom (I'm back!), b: (yes,siree)) {

}

type Foo = {
  a: number
  b: number
}

function foos(): Foo[] {
  return []
}

type Foo = [[[<<<<<Foo!>>>>>]]]

function foos(): Foo[<!!>] {
  return []
}


pick(obj, ['a', 'b']).c