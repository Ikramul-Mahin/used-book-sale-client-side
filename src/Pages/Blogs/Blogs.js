import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto container'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>
                        Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app
                        <br />

                        When you have state management in place data actually flows from your app to state and vice versa. You know exactly where your data is. These state management tools also give you a point-in-time snapshot of the entire data. In that way, you know exactly where your data is and that makes your development faster.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages..</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>

                        Components are larger building blocks of React applications. They let you split the UI into independent and reusable pieces.

                        Conceptually, components are like JavaScript functions. They accept arbitrary inputs, called props, and return React elements describing what should appear on the screen. To be able to deal with state and lifecycle features inside these functions they include a bunch of functions called hooks.
                        <br />
                        According to Angular’s site, Angular applications are modular and have their own modularity system called NgModules.

                        NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.

                        They can contain components, services and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules and vice-versa.
                        <br />

                        According to Angular’s site, Angular applications are modular and have their own modularity system called NgModules.

                        NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.

                        They can contain components, services and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules and vice-versa.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;