const url = "https://jsonplaceholder.typicode.com/todos/1";

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const todo = data as TODO;

    // Extract the data from the todo object
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    // Display the extracted data
    logTodo(id, title, completed);
  });

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`The Todo With ID: ${id}`);
  console.log(`Has a Title of: ${title}`);
  console.log(`Is it Finished? ${completed}`);
};
