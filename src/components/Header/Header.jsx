import Icon from '../../assets/Todo_Icon.png';

export default function Header() {
  return (
    <>
      <div className='bg-orange-300 p-2'>
        <img
          src={Icon}
          alt='To Do List Icon'
          loading='lazy'
          className='mx-auto max-h-40'
        />
      </div>
    </>
  );
}
