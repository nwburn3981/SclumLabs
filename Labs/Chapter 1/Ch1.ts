const states = [
    {name: 'Alabama', capital: 'Montgomery'},
    {name: 'Alaska', capital: 'Juneau'},
    {name: 'Arizona', capital: 'Phoenix'},
    // ...
   ];
   for (const state of states) {
    console.log(state.capital);
   }

   //    *-------------------------------------------------------------*

   function add(a: number, b: number) {
    return a + b;
   }

   console.log(add(25,15));

   //    *-------------------------------------------------------------*

   interface Square {
    kind: 'square';
    width: number;
   }
   interface Rectangle {
    kind: 'rectangle';
    height: number;
    width: number;
   }
   type Shape = Square | Rectangle;
   function calculateArea(shape: Shape) {
    if (shape.kind === 'rectangle') {
    shape; 
    return shape.width * shape.height;
    } else {
    shape; 
    return shape.width * shape.width;
    }
   }

   //    *-------------------------------------------------------------*

   class C {
    foo: string;
    constructor(foo: string) {
    this.foo = foo;
    }
   }
   const c = new C('instance of C');
   const d: C = { foo: 'object literal' }; 

   console.log(c);
   
   console.log(d);


//    *-------------------------------------------------------------*

   interface Person {
    firstName: string;
    last: string;
   }
   const formatName = (p: Person) => `${p.firstName} ${p.last}`;
   const formatNameAny = (p: any) => `${p.first} ${p.last}`;
   
   interface ComponentProps {
    onSelectItem: (item: any) => void;
   }
   
   function renderSelector(props: ComponentProps) { /* ... */ }
let selectedId: number = 0;
function handleSelectItem(item: any) {
 selectedId = item.id;
}
renderSelector({onSelectItem: handleSelectItem});
