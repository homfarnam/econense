import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const [open, setOpen] = useState(false);
  const size = useWindowSize();
  return (
    <nav className='flex items-center justify-between w-full text-black'>
      <img src='/Frame 2.png' alt='logo' />
      {size > 720 ? (
        <ul className='flex items-center justify-end w-full mx-5 font-bold space-x-7'>
          <li className='cursor-pointer'>
            <a href='#about-us'> درباره ی ما</a>
          </li>
          <li className='cursor-pointer'>
            <a href='#register'>شرکت در اکوننس</a>
          </li>
          <li className='cursor-pointer'>
            <a href='#goals'>اهداف</a>
          </li>
          <li className='cursor-pointer'>
            <a href='#introduce'>معرفی اکوننس</a>
          </li>
        </ul>
      ) : (
        <>
          <div
            className={`tham tham-e-slider tham-w-8 ${open && `tham-active`} mr-3`}
            onClick={() => setOpen((prev) => !prev)}>
            <div className='tham-box'>
              <div className='bg-black tham-inner' />
            </div>
          </div>
          {open && (
            <div className='absolute w-full h-auto text-black bg-white top-[4.5rem] animate-fade'>
              <ul className='flex flex-col items-center justify-center w-full font-bold shadow-lg space-y-7'>
                <li className='w-full py-3 text-center border-t border-b border-black cursor-pointer'>
                  <a href='#introduce'>معرفی اکوننس</a>
                </li>
                <li className='w-full py-3 text-center border-b border-black cursor-pointer'>
                  <a href='#goals'>اهداف</a>
                </li>
                <li className='w-full py-3 text-center border-b border-black cursor-pointer'>
                  <a href='#register'>شرکت در اکوننس</a>
                </li>
                <li className='w-full py-3 text-center border-b border-black cursor-pointer'>
                  <a href='#about-us'> درباره ی ما</a>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
