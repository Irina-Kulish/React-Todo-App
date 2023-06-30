import { FC, memo } from 'react';
import { Todo } from '../../type/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

interface Props {
  todos: Todo[],
  tempTodo: Todo | null,
  onDelete: (id: number) => void,
  onChange: (id: number, property: Partial<Todo>) => void
  loadingTodos: number[];
}

export const TodoList: FC<Props> = memo((props) => {
  const {
    todos,
    tempTodo,
    onDelete,
    onChange,
    loadingTodos,
  } = props;

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onChangeStatus={onChange}
          loadingTodos={loadingTodos}
        />
      ))}

      {tempTodo && (
        <TodoItem
          todo={tempTodo}
          key={0}
          onDelete={onDelete}
          onChangeStatus={onChange}
          loadingTodos={loadingTodos}
        />
      )}
    </section>
  );
});
