interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  return (
    <nav className='flex items-center justify-between w-full text-black'>
      <img src='/Frame 2.png' alt='logo' />
      <ul className='flex items-center justify-end w-full mx-5 font-bold space-x-7'>
        <li>درباره ی ما</li>
        <li>شرکت در اکوننس</li>
        <li>اهداف</li>
        <li>معرفی اکوننس</li>
      </ul>
    </nav>
  );
};

export default Navbar;
