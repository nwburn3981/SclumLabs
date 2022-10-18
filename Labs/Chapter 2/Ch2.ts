type A = 'A';
type B = 'B';
type Twelve = 12;

type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

const a: AB = 'A';

interface Person {
    name: string;
   }
   interface Lifespan {
    birth: Date;
    death?: Date;
   }
   type PersonSpan = Person & Lifespan;

   const ps: PersonSpan = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07'),
   }; 

   type K = keyof (Person | Lifespan);

interface Vector1D { x: number; }
interface Vector2D extends Vector1D { y: number; }
interface Vector3D extends Vector2D { z: number; }

interface Vector1D { x: number; }
interface Vector2D { x: number; y: number; }
interface Vector3D { x: number; y: number; z: number; }

//    *-------------------------------------------------------------*

class Cylinder {
    radius=1;
    height=1;
   }
   function calculateVolume(shape: unknown) {
    if (shape instanceof Cylinder) {
    shape 
    shape.radius 
    }
   }

   const v = typeof Cylinder; 
   type T = typeof Cylinder; 

declare let fn: T;
const c = new fn(); 

type C = InstanceType<typeof Cylinder>; 

//    *-------------------------------------------------------------*

interface Person { name: string };
const alice: Person = { name: 'Alice' }; 
const bob = { name: 'Bob' } as Person; 

const people = ['alice', 'bob', 'jan'].map(
    (name): Person => ({name})
   );

//    *-------------------------------------------------------------*

const s: String = "primitive";
const n: Number = 12;
const b: boolean = true;

console.log(s);
console.log(n);
console.log(b);

//    *-------------------------------------------------------------*

interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

const obj = {
    numDoors: 2,
    ceilingHeightFt: 12,
    elephant: 'present',
};

const r: Room = obj;

console.log(r);

//    *-------------------------------------------------------------*

function add(a: number, b: number) { return a + b; }
function sub(a: number, b: number) { return a - b; }
function mul(a: number, b: number) { return a * b; }
function div(a: number, b: number) { return a / b; }

console.log(add(5,5));
console.log(sub(5,5));
console.log(mul(5,5));
console.log(div(5,5));

//    *-------------------------------------------------------------*

interface IState {
    name: string;
    capital: string;
}
interface IState {
    population: number;
}
const wyoming: IState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500_000
}; 

console.log(wyoming)

//    *-------------------------------------------------------------*

interface Name {
    first: string;
    last: string;
}
type DancingDuo<T extends Name> = [T, T];

const dancingDuo = <T extends Name>(x: DancingDuo<T>) => x;

const couple1: typeof dancingDuo([
    { first: 'Fred', last: 'Astaire' },
    { first: 'Ginger', last: 'Rogers' }
]);
const couple2: typeof dancingDuo([
    { first: 'Bono' },

    { first: 'Prince' }
    
]);

//    *-------------------------------------------------------------*

function parseCSV(input: string): { [columnName: string]: string }[] {
    const lines = input.split('\n');
    const [headerLine, ...rows] = lines;
    const headers = headerLine.split(',');
    return rows.map(rowStr => {
        const row: { [columnName: string]: string } = {};
        rowStr.split(',').forEach((cell, i) => {
            row[headers[i]] = cell;
        });
        return row;
    });
}

interface ProductRow {
    productId: string;
    name: string;
    price: string;
}
declare let csvData: string;
const products = parseCSV(csvData) as unknown as ProductRow[];

function safeParseCSV(
    input: string
): { [columnName: string]: string | undefined }[] {
    return parseCSV(input);
}

const rows = parseCSV(csvData);
const prices: { [produt: string]: number } = {};
for (const row of rows) {
    prices[row.productId] = Number(row.price);
}


interface Row1 { [column: string]: number } // Too broad
interface Row2 { a: number; b?: number; c?: number; d?: number } // Better
type Row3 =
    | { a: number; }
    | { a: number; b: number; }
    | { a: number; b: number; c: number; }
    | { a: number; b: number; c: number; d: number };


type Vec3D = { [k in 'x' | 'y' | 'z']: number };

type ABC = { [k in 'a' | 'b' | 'c']: k extends 'b' ? string : number };

//    *-------------------------------------------------------------*

const xs = [1, 2, 3];
const x0 = xs[0]; 
const x1 = xs['1']; 
function get<T>(array: T[], k: string): T {
    return array[k];
    
}

const keys = Object.keys(xs); 
for (const key in xs) {
    key; 
    const x = xs[key]; 
}

for (const x of xs) {
    x; 
}

xs.forEach((x, i) => {
    i; 
    x; 
});

for (let i = 0; i < xs.length; i++) {
    const x = xs[i];
    if (x < 0) break;
}

function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
    if (i < xs.length) {
        return xs[i];
    }
    throw new Error(`Attempt to access ${i} which is past end of array.`)
}

const tupleLike: ArrayLike<string> = {
    '0': 'A',
    '1': 'B',
    length: 12,
};

//    *-------------------------------------------------------------*




function parseTaggedText(lines: string[]): string[][] {
    let currPara: readonly string[] = [];
    const paragraphs: string[][] = [];
    const addParagraph = () => {
        if (currPara.length) {

            paragraphs.push(
            );
            currPara = []; 
            
        }
    };
    for (const line of lines) {
        if (!line) {
            addParagraph();
        } else {
            currPara.concat([line]);
            
        }
    }
    addParagraph();
    return paragraphs;
}

//    *-------------------------------------------------------------*

interface ScatterProps {
  
    xs: number[];
    ys: number[];
    
    xRange: [number, number];
    yRange: [number, number];
    color: string;
    
    onClick: (x: number, y: number, index: number) => void;
}

const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false,
};
function shouldUpdate(
    oldProps: ScatterProps,
    newProps: ScatterProps
) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
            return true;
        }
    }
    return false;
}




 