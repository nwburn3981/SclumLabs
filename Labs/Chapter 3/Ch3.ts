const person = {
    name: 'Sojourner Truth',
    born: {
        where: 'Swartekill, NY',
        when: 'c.1797',
    },
    died: {
        where: 'Battle Creek, MI',
        when: 'Nov. 26, 1883'
    }
};


function square(nums: number[]) {
    return nums.map(x => x * x);
   }
   const squares = square([1, 2, 3, 4]); 
   
const axis1: string = 'x'; 
const axis2 = 'y'; 

interface Product {
    id: number;
    name: string;
    price: number;
   }



   function logProduct(product: Product) {
    const {id, name, price} = product;
    console.log(id, name, price);
   }
   
   const cache: {[ticker: string]: number} = {};
function getQuote(ticker: string) {
 if (ticker in cache) {
 return cache[ticker];
 }
 return fetch(`https://quotes.example.com/?q=${ticker}`)
 .then(response => response.json())
 .then(quote => {
 cache[ticker] = quote;
 return quote;
 });
}

interface Vector2D { x: number; y: number; }
function add(a: Vector2D, b: Vector2D) {
 return { x: a.x + b.x, y: a.y + b.y };
}

//    *-------------------------------------------------------------*

const id = "12-34-56";
fetchProduct(id);
{
 const id = 123456; 
 fetchProductBySerialNumber(id); 
}

//    *-------------------------------------------------------------*

interface Vector3 { x: number; y: number; z: number; }
function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
 return vector[axis];
}

let x = 'x';
x = 'a';
x = 'Four score and seven years ago...';

const a1 = [1, 2, 3]; 
const a2 = [1, 2, 3] as const; 

//    *-------------------------------------------------------------*

const el = document.getElementById('foo'); 
if (el) {
 el 
 el.innerHTML = 'Party Time'.blink();
} else {
 el 
 alert('No element #foo');
}

interface UploadEvent { type: 'upload'; filename: string; contents: string }
interface DownloadEvent { type: 'download'; filename: string; }
type AppEvent = UploadEvent | DownloadEvent;
function handleEvent(e: AppEvent) {
 switch (e.type) {
 case 'download':
 e // Type is DownloadEvent
 break;
 case 'upload':
 e; // Type is UploadEvent
 break;
 }
}

const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];
const members = ['Janet', 'Michael'].map(
 who => jackson5.find(n => n === who)
); 


//    *-------------------------------------------------------------*

declare let hasMiddle: boolean;
const firstLast = {first: 'Harry', last: 'Truman'};
const president = {...firstLast, ...(hasMiddle ? {middle: 'S'} : {})};

   

   declare let hasDates: boolean;
   const nameTitle = {name: 'Khufu', title: 'Pharaoh'};
   const pharaoh = {
    ...nameTitle,
    ...(hasDates && {start: -2589, end: -2566})
   };

   const {start} = pharaoh; 

//    *-------------------------------------------------------------*

const borough = {name: 'Brooklyn', location: [40.688, -73.979]};
const loc = borough.location;


interface Coordinate {
    x: number;
    y: number;
   }
   interface BoundingBox {
    x: [number, number];
    y: [number, number];
   }
   interface Polygon {
    exterior: Coordinate[];
    holes: Coordinate[][];
    bbox?: BoundingBox;
   }

   
   function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    polygon.bbox // Type is BoundingBox | undefined
    const box = polygon.bbox;
    box // Type is BoundingBox | undefined
    if (polygon.bbox) {
    polygon.bbox // Type is BoundingBox
    box // Type is BoundingBox | undefined
    }
   }
   
   //    *-------------------------------------------------------------*

   function panTo(where: readonly [number, number]) { /* ... */ }
const loc = [10, 20] as const;
panTo(loc); 




function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
   }
   callWithRandomNumbers((a, b) => {
    a; 
    b; 
    console.log(a + b);
   });

   //    *-------------------------------------------------------------*

   const csvData = "...";
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');

const rows = rawRows.slice(1).map(rowStr => {
    const row = {};
    rowStr.split(',').forEach((val, j) => {
    row[headers[j]] = val;
    });
    return row;
   });
   
   const rowsA = rawRows.slice(1).map(rowStr => {
    const row = {};
    rowStr.split(',').forEach((val, j) => {
    row[headers[j]] = val;

    });
    return row;
   });
   const rowsB = rawRows.slice(1)
    .map(rowStr => rowStr.split(',').reduce(
    (row, val, i) => (row[headers[i]] = val, row),

    {}));
   
    interface BasketballPlayer {
        name: string;
        team: string;
        salary: number;
       }
       declare const rosters: {[team: string]: BasketballPlayer[]};
   


const allPlayers = Object.values(rosters).flat();

const teamToPlayers: {[team: string]: BasketballPlayer[]} = {};
for (const player of allPlayers) {
 const {team} = player;
 teamToPlayers[team] = teamToPlayers[team] || [];
 teamToPlayers[team].push(player);
}
for (const players of Object.values(teamToPlayers)) {
 players.sort((a, b) => b.salary - a.salary);
}
const bestPaid = Object.values(teamToPlayers).map(players => players[0]);
bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary);
console.log(bestPaid);




