import AddTodo from './Functions/AddTodo';

export default function Body() {
  return (
    <>
      <div className='m-4 text-center'>
        <h1 className='text-6xl font-bold tracking-wide'>TO - DO LIST</h1>
        <p className='mt-4 text-base'>
          With its awesome features, you will be able to write, organize, and
          accomplish tasks like never before. Get ready to boost your
          productivity and start getting things done efficiently!
        </p>
      </div>
      <AddTodo />
    </>
  );
}
