import { useState, useReducer } from 'react';
import { ACTIONS } from './Actions/Actions';
import { reducer } from './Actions/Reducer';
import TodoList from './TodoList';

export default function AddTodo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      setError('Input Empty');
    } else {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { value: value } });
      setValue('');
      setError(null);
    }
  };

  return (
    <>
      <div className='text-center'>
        <form>
          <input
            type='text'
            value={value}
            maxLength={30}
            onChange={(e) => setValue(e.target.value)}
            className='rounded-md border-2 p-1 max-lg:w-4/5 md:w-3/4 '
          />
          <button
            onClick={handleSubmit}
            className='ml-4 rounded-md border-2 border-red-700 px-4 py-1 font-bold transition ease-in-out hover:bg-yellow-300 hover:text-white'
          >
            ADD
          </button>
        </form>
        {error && <p className='text-red-500'>{error}</p>}
      </div>

      <div className='m-4 mx-auto rounded-3xl bg-red-600 p-3 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
        <h1 className='mb-2 border-b-2 border-black text-4xl font-bold tracking-widest'>
          LISTS :
        </h1>
        <div className='max-h-80 overflow-y-scroll p-4 sm:max-h-[40rem] md:max-h-[50rem] lg:max-h-[90rem] xl:max-h-screen'>
          {todos.map((todo) => {
            return <TodoList key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </div>
      </div>
    </>
  );
}
