import { ref } from "vue";

const useTodoList = () => {
  const inputValue = ref("");

  interface TodoItem {
    value: string;
    id: string;
  }

  const todoList = ref<TodoItem[]>([]);

  const getRandomStr = () => Math.random().toString(36).slice(2, 8);
  const handleAddItem = () => {
    if (!inputValue.value) {
      alert("请输入待办事项");
      return;
    }
    todoList.value.push({
      value: inputValue.value,
      id: getRandomStr(),
    });

    inputValue.value = "";
  };

  const deleteTodoItem = (id: string) => {
    todoList.value = todoList.value.filter((v) => v.id !== id);
  };

  return {
    handleAddItem,
    deleteTodoItem,
    inputValue,
    todoList,
  };
};

export default useTodoList;
