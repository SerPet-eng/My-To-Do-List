import { ACTIONS } from './Actions/Actions';

export default function TodoList({ todo, dispatch }) {
  return (
    <div className='mb-3 flex h-max justify-between border-b-2 border-black bg-orange-200 px-2 py-10 text-center drop-shadow sm:px-1 sm:py-4'>
      <p
        className={`${
          todo.complete ? 'text-gray-400' : 'text-black'
        } self-center text-2xl text-base font-bold tracking-wide sm:text-xl`}
      >
        {todo.value}
      </p>
      <div className='space-x-2 sm:space-x-4'>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
          className='rounded-lg border-2 border-red-800 px-4 py-2 text-lg font-bold sm:px-3 sm:py-1 sm:text-base sm:font-normal'
        >
          Toggle
        </button>

        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
          className='rounded-lg border-2 border-red-800 bg-red-600 px-4 py-2 text-lg font-bold text-white sm:px-3 sm:py-1'
        >
          Delete
        </button>
      </div>
    </div>
  );
}
