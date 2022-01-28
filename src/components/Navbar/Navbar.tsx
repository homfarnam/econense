interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  return (
    <nav className='flex items-center justify-between w-full text-black'>
      <img src='/Frame 2.png' alt='logo' />
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
    </nav>
  );
};

export default Navbar;
