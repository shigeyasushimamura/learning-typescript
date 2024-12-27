<script lang="ts">
  let todos: { id: number; text: string; completed: boolean }[] = [];
  let newTodoText = "";

  function addTodo() {
    if (newTodoText.trim()) {
      todos = [
        ...todos,
        {
          id: Date.now(),
          text: newTodoText,
          completed: false,
        },
      ];
      newTodoText = "";
    }
  }

  function deleteTodo(id: number) {
    todos = todos.filter((todo) => todo.id != id);
  }

  function toggleTodo(id: number) {
    todos = todos.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
  }
</script>

<main class="container mx-auto p-4 max-w-md">
  <h1 class="text-2xl font-bold mb-4">Todo App</h1>

  <div class="flex gap-2 mb-4">
    <input
      type="text"
      bind:value={newTodoText}
      placeholder="新しいタスクを入力..."
      class="flex-grow p-2 border rounded"
      on:keydown={(e) => e.key === "Enter" && addTodo()}
    />
    <button
      on:click={addTodo}
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      追加
    </button>

    <ul class="space-y-2">
      {#each todos as todo (todo.id)}
        <li class="flex items-center gap-2 p-2 border rounded">
          <input
            type="checkbox"
            checked={todo.completed}
            on:change={() => toggleTodo(todo.id)}
          />
          <span class="flex-grow">{todo.text}</span>
          <button
            on:click={() => deleteTodo(todo.id)}
            class="text-red-500 hover:text-red-600">削除</button
          >
        </li>
      {:else}
        <p class="text-gray-500 hover:text-red-600">タスクがありません</p>
      {/each}
    </ul>
  </div>
</main>
