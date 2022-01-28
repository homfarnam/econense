import { Title } from '..';

const Goals = () => {
  return (
    <div className='goals' id='goals'>
      <Title title='اهداف' className='py-5 text-white' />
      <div className='flex items-center justify-around w-full p-10 text-center text-white'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <img src='/gears.png' alt='gears' />
          <p className='w-1/2'>
            کمک به شرکت‌کنندگان برای توسعه‌ی مهارت‌هایشان در بازارهای سـرمایه‌گذاری
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <img src='/chart.png' alt='chart' />
          <p className='w-1/2'>
            ارائه‌ی آموزش‌های ضروری به شرکت‌کنندگان برای به‌دست آوردن مهارت‌های ضروری معامله‌گری
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <img src='/audience.png' alt='audience' />
          <p className='w-1/2'>
            گردهم آوردن دانشجویان و افراد علاقه‌مند به بازارهای مالی و سرمایه‌گذاری
          </p>
        </div>
      </div>
      <div className='flex items-center justify-around w-full p-10 text-center text-white'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <img src='/network.png' alt='network' />
          <p className='w-1/2'>تهیه‌ی شبکه‌ای غنی از گروهی از تجربه‌داران بازار سرمایه</p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <img src='/market.png' alt='market' />
          <p className='w-1/2'>
            کمک به شرکت‌کنندگان برای توسعه‌ی مهارت‌هایشان در بازارهای سـرمایه‌گذاری
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
