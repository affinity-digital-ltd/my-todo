# Introduction to Web Development Course

In this introductory course we will be covering the following technologies:

- Command line
- Git
- Yarn
- ReactJS
- Github
- Visual Studio Code
- JavaScript
- HTML
- CSS

The course will walk you through most of what you need to do in order to complete the development of a Todo application which you can then use to manage your daily priorities.  It will cover the most basic of skills in order to become a good web developer and will give you a taste of what it’s like to work in the industry.  Hopefully, you will enjoy the course we look forward to hearing back from you.

# Learning the basics of HTML

## Elements

## Attributes

# Learning the basics of CSS

## Classes

## Properties

# Learning the fundamentals of JavaScript

## Strings


## Integers


## Variables

### var

### let

### const


## Arrays


## Objects


## Functions


## Classes

# Working on your Todo Project

## Command Line and Git

To start off with we will need to become comfortable working with the command line as this will be the place we go to to start a new project and to save our work on github.  Github is an online repository in which we can save versions of our code.  It is a great site that the majority of web developers use to host their code.  Github is integrated with git, a command line application used for saving versions of your code locally and also for pushing your changes up to the github website.

### Installing git and preparing to start our project

1. Install git.  
- If you are on a windows machine, then you will want to install git bash https://gitforwindows.org/ when following the interactive installer, using the default settings should be fine.
- If you are on a mac git should be installed by default.

2. Open up a command prompt
- On windows, you will want to run the application `git bash`
- On Mac, the application is called Terminal

3. Now make a folder to hold all of your future projects in `mkdir workspace`

4. Then change into the workspace directory `cd workspace`.  This is where we will be creating our Todo app project

### Initialising the project

To initialise our React TODO project we will first need to install YARN, yarn is a package manager for JavaScript and allows you to install different libraries that you might need when building JavaScript applications.

1. Install yarn:
  - If you are on Windows then you can download the yarn installer from the following: https://yarnpkg.com/en/docs/install, you will also need to install NodeJS https://nodejs.org/en/download/
  - On a mac, it is best to first install [homebrew](https://brew.sh/) and then run `brew install yarn`

2. Initialise our new project `yarn create react-app my-todo` this will create a new folder called `my-todo` in our workspace directory and create all the necessary files and folders we need to start working with our React application.

3. Change into the newly created directory `cd my-todo`

4. Now start your application to check that everything is working as intended `yarn start`. This should boot the application and open a new tab with the following screen: 


If you can see this screen then you are good to go.

### Setting up our github account and repository

Now that we have something to begin building our Todo application with, we first want to make sure that we are tracking any changes we make to our code so that we can undo any mistakes we might make at a later date.  To do this, we will use git, our version control app on choice and team it up with github, an only service which allows us to store our code securely in the cloud.

1. Open another terminal window

2. Navigate into your project directory again, this should be possible with `cd workspace/my-todo`

3. Now that we are in our app folder, we can create a new git repository, `git init`.  `create-react-app` may have done this automatically for us already, but it's good to just go through the motions anyway as not all packages will do this for us automatically.

4. With our repository initialised we now want to create an account on github and link our todo project with our github project.
 - [Create an account on github](https://github.com/join?source=header-home)
 - [Start a new project on github](https://github.com/new) name the repository `my-todo`
 - You should now be presented with a screen to either create a new repository locally or add it to an existing repository, follow the instructions for `…or push an existing repository from the command line`

5. Now that we have linked our local repository with our github project we can save what we have so far and push it up to github
 - `git add -A` - This will add all of the files we have created so far so that we can create our first git commit.
 - `git commit -m "Initial commit"` - this will create a commit with the message "Initial commit" in our local repository, this commit is now stored so that if we make any changes later which we want to undo, we can rollback to this point in our project at any time.
 - `git push origin master` - now will push these local changes up to our github account so that they are stored in the cloud, this way if anything happens to our computer and we end up losing all of our work, we can always get our code back from github instead.
 - Once you have done that, we can now go back to our github repository page in the browser and refresh the page. Your files and folders show now all be visible

## Installing a text editor

We are now very close to being able to start writing the code to our new application, but first we need to install an editor to write our code with.

For each of use and simplicity I would recommend using Visual Studio Code it's free and is becoming more and more popular with web developers across the world.

1. Install [Visual Studio Code](https://code.visualstudio.com/)

2. Open Visual Studio Code and then go to File > Open Folder > select the 'my-todo' folder and open it

### Branching off of master

Now that we are in a position to start coding, we should first start a new git branch.  A branch in git is the equivalent to copying the work we currently have to a new location so that we can start to make changes to it without the worry of breaking or deleting any important code we currently have.  Once we have finished making any changes we want, and are happy with the results, we can then merge those changes back into our original work.

If we now go back to our terminal window where we ran the command `git push origin master` we can create a new branch for us to start making changes.

1. First check we are still on the master branch `git status`. It should return:
```
On branch master
nothing to commit, working tree clean
```
This means that we haven't made any changes to our project after we pushed up our previous changes.

2. Now that we have confirmed that we haven't made any changes we can go ahead and create a new branch based off of `master`
```
git checkout -b feature/todo-form
```
This will create a new branch called `feature/todo-form` and change our working branch to the new one.

## How react works

### Components

### Classes

### Render

### Constructor

### Callbacks

### Imports

### State

### this

## Writing your first bit of code

Now that we have everything in place we need to start building our app, let's start to get down to some serious coding!  All the code we need to worry about at this point is located under the `src` directory.

### First we'll start off by renaming the `App` files to `Todo` to give us a bit more context:

1. Rename the file `App.js` to `Todo.js`

2. Inside `index.js` change the line `import App from './App';` to `import Todo from './Todo';` so that it imports our renamed file and then update `ReactDOM.render(<App />, document.getElementById('root'));` to `ReactDOM.render(<Todo />, document.getElementById('root'));` so that react knows which component it should render.

3. Save the file `index.js`

4. Remove the files `App.css` and `logo.svg` from the `src` directory as we will be creating our own CSS from scratch later.

5. Inside `Todo.js` remove the following lines:
```javascript
import logo from './logo.svg';
import './App.css';
<img src={logo} className="App-logo" alt="logo" />
``` 
Otherwise our app will fail and raise an error as the files no longer exist.

6. Inside `Todo.js` rename any references to `App` to `Todo`, there should be 2

7. Save the file

8. Rename `App.test.js` to `Todo.test.js`

9. Inside `Todo.test.js` rename any occurrences of `App` to `Todo` (there should be 3) and save the file.

10. Finally in your terminal run `yarn test` to check that our updated test is still passing.  You should see something like the following:
```
 PASS  src/Todo.test.js
  √ renders without crashing (32ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.855s
Ran all test suites.

Watch Usage: Press w to show more.
```

11. Press `q` to quit out of the test suite

You should also now see in your browser, where we have removed the logo and styling of the default app:
```
Edit src/App.js and save to reload.

Learn React
```
We will replace this content in the next section.

12. Now would be a good time to ensure we have saved any files we have edited and commit our changes to git.
 - Check you have saved all the files we have edited
 - In your terminal run the command `git status` this should print out a list of changes.  This can be useful for checking what files you are about to add and commit to git.
 - Run `git add -A` to add all files including those deleted ready to be committed.
 - Run `git commit -m "Renamed files"` this will create a new commit with the message `renamed files`

13. Now we can push these changes to github for storing, in case anything happens to our local machine and end up losing all the work we have done.
 - `git push origin feature/todo-form` this will push any commits we have made locally to origin (in this case our github account) to the branch `feature/todo-form`

### Adding a form to create new todo items

Let's start by adding a form to our app so that you can begin to add items to your todo list.

1.  Replace the contents of the render() function the the `Todo.js` class with the following:
```javascript
return (
  <form>
    <div>
      <input type='text' placeholder='What would you like to do?' name='todoItem' autoComplete='off' />
      <button type='submit'>Add</button>
    </div>
  </form>
);
```
 - save the file and go back to your browser, you should now see an input field with the text `What would you like to do?` and a button with the text `Add`

2. You'll find that when you type something in and click `Add` nothing actually happens.  That's because we haven't told React to do anything with our data yet, so we'll do that next.

3. To save items that we add to our todo list we will use Reacts state to accomplish this:
 - Create a `constructor()` function above our `render()` function (`...` will donate other code not shown for the purpose of the example)
```javascript
...
class App extends Component {
  constructor () {
  }

  render () {
    ...
  }
}
...
```

4. Then inside our constructor function we need to call `super()` so that it calls any original code that React has in place for a React Component to work correctly (this code is not visible to us, but exists within the internals of React itself)

5. On a new line below our call to `super()` we will set the default state for the todo list:
```javascript
this.state = {
 todos: []
}
```
Here we are setting the state to an object which has a key called `todos` (which we will refer to later in our app) and then assign it an empty array `[]`. We assign it an empty array, so that it is clear to us or any other developer which may work on the project, that we intend to propagate `todos` with a list of items.

6. Now we need to create a function that will get called when we click the button `Add` to update this state with a new item.
- We'll call this function `addItemToList()` so that it is clear as to what it actually does.
- This will then add the item we type in the input field into the `todos` key of our React state.
- Then we will need to update our `render()` function to display these items on the page.

7. Create the function `addItemToList()` below your `constructor()` function:
```javascript
constructor () {
 ...
}

addItemToTodo () {

}

render () {
  ...
}
```

8. Next we'll have it accept the argument `event`
```javascript
addItemToTodo (event) {

}
```
This is so that we can pull out the value of the text you entered into the input field from your app and add it to the todo list.

9. We also need to tell React not to treat the form in the traditional sense, where it makes a request and then reloads the page, we want to stay on the current page and just update the state:
```javascript
addItemToTodo (event) {
  event.preventDefault() // Do not submit the form and cause the page to refresh

}
```

10. Next we'll save the value of the text input into a variable for us to use later by adding it to the `todos` state.
```javascript
addItemToTodo (event) {
  event.preventDefault() // Do not submit the form and cause the page to refresh
  const item = event.target.todoItem.value
}
``` 
`target` here refers to the form and `todoItem` is the name we gave the `<input>` in the form.  Finally `value` refers to the actual value the user submitted into the input field.

11. Clear the input field
As we are preventing the page from refreshing, we will want to reset the value of the input field that the user initially input.  So that if they want to add another todo item, they don't need to first delete the contents within the input field.
```javascript
addItemToTodo (event) {
  event.preventDefault() // Do not submit the form and cause the page to refresh
  const item = event.target.todoItem.value
  event.target.todoItem.value = ''
}
``` 
Here we are setting the value of the input field back to an empty string for the users convenience.

12. Insert the input value into the `todos` state:
```javascript
addItemToTodo (event) {
  event.preventDefault() // Do not submit the form and cause the page to refresh
  const item = event.target.todoItem.value
  event.target.todoItem.value = ''

  this.setState({todos: [item]})
}
``` 
Here we are updating the `todos` state to be an array with one value of `item` the content that was input into the input field.

13. Allow our new `addItemToTodo()` function have access to `this`
In our `addItemToTodo()` function we are accessing Reacts state through the use of `this` but our function will not know how to do this, we we will need to give it access.  To do this, we will need to add another line to our `constructor()` function
```javascript
constructor () {
  super()

  this.state = {
    todos: []
  }

  this.addItemToTodo = this.addItemToTodo.bind(this)
}
```

14. Finally, the last piece of the puzzle is to tell our form to use our new `addItemToTodo()` function when we submit the form (click on the `Add` button)
```javascript
<form onSubmit={this.addItemToTodo}>
```

15. Test our new functionality
Now if we go back to the browser and type something into the input field and click `Add` it should add our new item to the `todos` list state.  Go ahead and give it a try.

16. Hmmm
When we click `Add` it doesn't seem like it does anything still does it?  This is because we haven't told React what to do with our new `todos` state.  First, let's check the state is being updated.
- Add the line `console.log(this.state.todos)` so that it is on the next line within our `render()` function:
```javascript
render () {
  console.log(this.state.todos) // Print out the `todos` state into the browsers console
  return (
    ...
  )
}
```
- Go back to the browser and right click on the page and choose `inspect`, then click on the tab called `console`.  This is the javascript console of the browser which will show you any data we put in `console.log()` and any potential errors or bad practices that may be occurring within your app.
- Now try typing something in your input field again and clicking `Add`
- You should now see something like `["hello"]` in your browsers console.  This confirms that our `addItemToTodo()` function is working as intended; our `todos` state is now an array with one value, the value you just typed into the input field.

17. Displaying your todo list in your todo app.
Now that we've confirmed that we are adding items to our todo list through the console, let's update our `render()` function to display them on the page:
- We'll create a new function called `buildTodoList()` to generate our list of todos to display on the page
- Add a call to this function in our `render()` function
- Remove the `console.log(this.state.todos)` line
- Add a fragment around our HTML in the `render()` function
- Use the text from our todo item as the key (this should be safe to do as there shouldn't be an instance where we have two todo items which are exactly the same.  If this is a concern for you, then you could add validation to ensure that all items are unique)
```javascript
...

buildTodoList () {
  const { todos } = this.state

  return todos.map(todo => {
    return <li key={todo}>{todo}</li>
  })
}

render () {
  return (
    <>
      <form onSubmit={this.addItemToTodo}>
        <div>
          <input type='text' placeholder='What would you like to do?' name='todoItem' autoComplete='off' />
          <button type='submit'>Add</button>
        </div>
      </form>
      <ul>
        {this.buildTodoList()}
      </ul>
    </>
  );
}

...
```
Here we are pulling out the `todos` value from our state and assigning to a `todos` variable.  We are then creating a new array using the `map()` function with the values of our list items.

Next we insert theses values as returned from the `buildTodoList()` function into an unordered list.

18. Whenever we change or implement a piece of functionality we should test it first by hand, this is called QA (quality assurance), we need to check that things work as we intended them to.
- Go ahead and add some items to your todo list to check that it's working as intended.

19. You might have noticed that it is not quite working as intended, you can successfully add items to our todo list, but every time we add a new one, it replaces our old one.  The maximum number of items we can ever have is one, not exactly ideal.
- Take this time to have a look through your code to see if you can spot where this might be happening.  It can often help to place `console.log()` throughout your code to help find where the route cause is.  If you do that, remember to take them out later.  If you manage to find the cause, don't worry too much about trying to fix it yourself, we will do it in the next step.

20. Fixing our list so that it doesn't replace old items.
As you may have identified, the problem lies with our `addItemToTodo()` function.  It simply replaces our `todos` state with the most recent item, thus throwing away any of previous items. Let's go ahead and update this function so that it works as intended.

- Pull out our current `todos` state into a variable
- Add new todo item to our previous list of todos
- Update the state with our new todo list

```javascript
addToTodoList (event) {
  event.preventDefault()
  const item = event.target.todoItem.value
  event.target.todoItem.value = ''
  const { todos } = this.state

  todos.push(item)

  this.setState({todos: todos})
}
```

As we are also now updating the state, we will also need to pass in `this` to our function.

```javascript
...

constructor () {
  ...

  this.addToTodoList = this.addToTodoList.bind(this)
}
```

### Creating our todoItem component

### Deleting todo items

## Writing tests



## Making our todo list look a bit prettier

### Resetting styles

### Defining directory structure

### 


