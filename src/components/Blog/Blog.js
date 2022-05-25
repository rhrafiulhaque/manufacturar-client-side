import React from 'react';

const Blog = () => {
    var txt = ` var items = [{
        "id": "1",
    "name": "toothbrush",
    "Price": 10,
    "inventory": 1

}, {
        "id": "2",
    "name": "tootpaste",
    "Price": 40,
    "inventory": 1
}];
    var name = ‘toothpaste’
item = items.find(x => x.name === id);
    console.log(output);`;
    return (
        <div className=' '>
            <h1 className='text-4xl font-semibold my-5'> 1. How will you improve the performance of a React Application?</h1>
            <p className='mb-5'>
                Optimizing application performance is key for developers who are kepping of experience to keep them on an app and engaged. <br />
                Keeping component state local neccesary and prevent the unnecessary renders <br />
                Memorizing react component to prevent unnecessary renders and state <br />
                Virtualization the react and list for it <br />
                To ensure to re-rendering component only happens when necessary <br />
            </p>
            <h1 className='text-4xl font-semibold my-5'> 2. What are the different ways to manage a state in a React application?</h1>
            <p className='mb-5'>
                The Four Kinds of React State to Manage There are- Local state ,Global state, Server state, URL state <br />
                Local state is the kind of data to manage component. <br />
                Global state is important when we want to get and update data anywhere in the app <br />
                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                URL state is do not use huge , but it is an important one. <br />
                In many cases, a lot of major parts of our application rely upon accessing URL state.
            </p>

            <h1 className='text-4xl font-semibold my-5'>3. How does prototypical inheritance work?</h1>
            <p className='mb-5'>
                Prototype-based programming is a style of object-oriented programming in which behavior to reuse <br /> again  is performed to  serve as prototypes. Every object with its methods and properties
                <br /> contains an internal and hidden property known as Prototype. he Prototypal Inheritance is a
                <br /> feature in JavaScript used to add methods and properties in objects.
            </p>


            <h1 className='text-4xl font-semibold my-5'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>

            <p className='mb-5'>
                {txt}
            </p>

            <h1 className='text-4xl font-semibold my-5'>5.  What is a unit test? Why should write unit tests?</h1>

            <p className='mb-5'>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
                Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.unit tests can be performed manually or automated. Those employing a manual method may have an instinctual document made detailing each step in the process; however, automated testing is the more common method to unit tests.

            </p>

        </div>
    );
};

export default Blog;