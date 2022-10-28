using System;
using System.Collections;
using System.Collections.Generic;

namespace Presentation
{
    internal class Program
    {


        static void Main(string[] args)
        {
         /*
         Collections Overview
	        - Structures containing elements, primitive types, objects, or other collections
	        - Used for organizing and performing operations
	        - Arrays are basic type of collection
		        ○ Contains multiple objects of a singular type
                    Can have multi-dimensional array, each array index is an array itself
                    Need to specify size, cannot add more elements after initialization
         */

            //Array example
            int[] ints = { 1, 2, 3 };

            Console.WriteLine(">----------------------------------------------------<");
            Console.WriteLine("Elements in ints Array:");

            foreach (var element in ints) { 
                Console.WriteLine(element);
            }

            string[] strings = { "This", "is", "an", "array" };

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Elements in strings Array:");

            for (int i = 0; i < strings.Length; i++)
            {
                Console.Write(strings[i] + " ");
            }

            int[][] jagged = new int[5][] {
                new[] { 1, 2 },
                new[] { 1, 2, 3, 4, 5, 6 },
                new[] { 1, 2, 4 },
                new[] { 1 },
                new[] { 1, 2, 3, 4, 5 }
            };

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Elements in multidimensional Array:");

            for (int i = 0; i < jagged.Length; i++)
            {

                Console.WriteLine("Index {0}:", i);

                for (int j = 0; j < jagged[i].Length; j++) {
                    
                    Console.WriteLine(jagged[i][j]);
                }
            }



            
            /*
                Index based collection 
                Can contain multiple types
                Size is automatically increased with added elements
             */

            ArrayList firstList = new ArrayList();
            firstList.Add(1);
            firstList.Add("Hey");
            firstList.Add(1.55);
            firstList.Add(true);

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Elements in ArrayList:");

            foreach (var element in firstList)
            {
                Console.WriteLine(element);
            }

            /*
            Hash Table - Key/Value based Collection
                -Keys must be unique, values do not need to be
                
            */
            Hashtable demoTable = new Hashtable();

            demoTable.Add("Key1", "This");
            demoTable.Add("Key2", "be");
            demoTable.Add("Key3", "HashTable");
            demoTable.Add("Key4", "Yo");
            demoTable.Add("Key5", "Yo");

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Elements in HashTable:");

            foreach (DictionaryEntry element in demoTable)
            {
                Console.WriteLine("Key: {0}, Value:{1}", element.Key, element.Value);
            }

            /*
            Stack
                FILO - First in, last out structure
                Push, Pop, and Peek methods
            */

            Stack demoStack = new Stack();

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Adding elements to Stack:");

            for (int i = 1; i < 5; i++) {
               Console.WriteLine("\n|\nV\n" + (5-i) );
                demoStack.Push(i);
            }

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Popping elements from Stack:");

            while (demoStack.Count > 0)
            {
                Console.WriteLine("\n^\n|\n" + demoStack.Pop());
            }

            /*
            Queue
                FIFO - First In, First Out
                Enqueue and Dequeue methods
            */

            Queue demoQueue = new Queue();

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Adding elements to Queue:");

            Console.Write("Out");
            for (int i = 1; i < 5; i++)
            {
                Console.Write(" <- " + i);
                demoQueue.Enqueue(i);
            }

            Console.Write(" <- In");

            /*
            Generic Types
            	- Type parameters that will allow different types at compile time
	            - Can write just one type and have multiple versions of it.
	            Ex: List<T> - a List containing generic types T
                Uses <> angle brackets to define generic, can be any name, typically capital letter T
            */

            /*
            List with Generic type
                List is generic collection version of ArrayList
                Takes in a type on initialization to save time on boxing/unboxing
             */
            List<Item<int>> demoList = new List<Item<int>>();

            Item<int> item1 = new Item<int>();
            item1.setItem(4);
            demoList.Add(item1);

            Item<int> item2 = new Item<int>();
            item2.setItem(2);
            demoList.Add(item2);

            Item<int> item3 = new Item<int>();
            item3.setItem(1);
            demoList.Add(item3);

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Elements in int List:");

            foreach (var element in demoList)
            {
                Console.WriteLine(element.getItem());
            }

            List<Item<string>> demoList2 = new List<Item<string>>();

            Item<string> item4 = new Item<string>();
            item4.setItem("This");
            demoList2.Add(item4);

            Item<string> item5 = new Item<string>();
            item5.setItem("is");
            demoList2.Add(item5);

            Item<string> item6 = new Item<string>();
            item6.setItem("test");
            demoList2.Add(item6);

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Elements in string List:");

            foreach (var element in demoList2)
            {
                Console.WriteLine(element.getItem());
            }

            /*
            Dictionary
                Generic collection version of HashTable
                Key Type and Value Type must be specified
            */

            Dictionary<int, string> demoDictionary = new Dictionary<int, string>();

            demoDictionary.Add(1, "First");
            demoDictionary.Add(2, "Second");
            demoDictionary.Add(3, "Third");

            Console.WriteLine("\n\n>----------------------------------------------------<");
            Console.WriteLine("Values in Dictionary:");

            Console.WriteLine("Dictionary Value for Key 1: {0}", demoDictionary[1]);
            Console.WriteLine("Dictionary Value for Key 2: {0}", demoDictionary[2]);
            Console.WriteLine("Dictionary Value for Key 3: {0}", demoDictionary[3]);


            Console.ReadKey(true);
        }
    }

    internal class Item<T> 
    {
        public T item;

        public void setItem(T item) {
            this.item = item;
        }

        public T getItem() {
            return item;
        }
    }
}
