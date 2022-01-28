import { Goals, Introduce, Title } from './components';
import Button from './components/Button/Button';
import Layout from './Wrapper/Layout';

function App() {
  return (
    <Layout title='home'>
      <div className='homeSlider'>
        <img src='/slider.png' alt='' />
      </div>

      <Introduce />
      <Goals />
      <div className='flex items-center py-4 font-bold text-white justify-center w-full bg-[#FF7D01] space-x-3'>
        <Button title='ثبت نام کنید' className='bg-white text-[#FF7D01] p-2 px-3 md:px-5 border' />
        <p className=''>آماده‌ی شرکت در یک چالش هیجان‌انگیز هستید؟ </p>
      </div>

      <div className='w-full h-full my-10' id='register'>
        <Title title='شرکت در اکوننس' />
        <div className='flex items-center justify-around w-full px-3 my-10 text-center md:px-0'>
          <p className='w-1/2 md:w-1/6'>
            وبینارها و کارگاه‌های آموزشی جهت کسب اطلاعات و انتقال تجربه از اساتید و حرفه‌ای‌ها
          </p>
          <div className='w-1/2 md:w-1/6'>
            <p>آموزش های عمومی </p>
            <span>(آشنایی کلی با بازارهای مالی)</span>
          </div>
        </div>
        <div className='flex items-center justify-center w-full mt-16 '>
          <p className='w-2/12 mx-3 text-right'>اهدای جوایز به نفرات برتر</p>
          <div className='h-1 w-8/12 border bg-[#FF7D01] z-0 flex items-center justify-between'>
            <div className='w-10 h-10 border bg-[#ff7d01] rounded-full  z-10' />
            <div className='w-10 h-10 border bg-[#ff7d01] rounded-full  z-10' />
            <div className='w-10 h-10 border bg-[#ff7d01] rounded-full  z-10' />
            <div className='w-10 h-10 border bg-[#ff7d01] rounded-full  z-10' />
            <div className='w-10 h-10 border bg-[#ff7d01] rounded-full  z-10' />
            <div className='w-10 h-10 border bg-[#ff7d01] rounded-full  z-10' />
          </div>
          <p className='w-2/12 mx-3 text-left'>ثبت نام در رویداد</p>
        </div>

        <div className='flex items-center justify-center w-full my-10 space-x-10 text-center'>
          <p className='w-1/2 md:w-1/6'>انجام معاملات در بازار شبیه سازی شده</p>
          <div className='w-1/2 md:w-1/6'>
            <p>آموزش های مرحله دوم </p>
            <span>(آشنایی با انواع تحلیل ها در بازار و آشنایی اولیه با تحلیل تکنیکال)</span>
          </div>
        </div>
      </div>

      <div className='w-full h-full my-10' id='about-us'>
        <Title title='درباره ی ما' />
        <p className='flex items-center justify-center w-full my-3 text-center'>
          برای برگزاری این رویداد بیش از 40 نفر از دانشجویان دانشگاه‌های معتبر کشور در ۵ گروه اصلی
          زیر گرد هم آمده‌اند:
        </p>

        <div className='flex flex-col items-center justify-around w-full p-10 space-y-10 text-center text-black md:flex-row md:space-y-0'>
          <div className='flex flex-col items-center justify-center space-y-5'>
            <img src='/team-hr.png' alt='team-hr' />
            <h3 className='text-[#FF7D01] text-3xl text-center'>تیم منابع انسانی</h3>
            <p className='w-1/2'>
              از مهم‌ترین الزامات پیوستگی انجام کار و تضمین برگزاری برنــامه‌های دانشجویـــی،
              وجــــود گروهــی برای مدیریــت ارتبــاطات بیـــن اعضـــای تیــم‌هـای مختلف است. علاوه
              بـر ایــن وظیفـــه‌ی دیــــگر تیــم منابـــع انسانـــی، توجــه بـه زمان‌بندی کار‌ها و
              انجام اقدامات لازم برای برگزاری موفقیت‌آمیز رویداد است.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center space-y-5'>
            <img src='/branding.png' alt='branding' />
            <h3 className='text-[#FF7D01] text-3xl text-center'>تیم برندینگ و تولید محتوا</h3>

            <p className='w-3/4'>
              تیم برندینگ شامل دو زیرگروه است: تیم گرافیک و طراحـــی که وظیفــه‌ی ایجـــاد هویــت
              بصـــری و طراحــی‌های رویداد و همچنین تیم مارکتینگ که وظیفــه‌ی تولیــد محتــــوا و
              تبلیغات را بر عهده دارند.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center space-y-5'>
            <img src='/team-science.png' alt='team-science' />
            <h3 className='text-[#FF7D01] text-3xl text-center'>تیم علمی</h3>

            <p className='w-1/2'>
              تیم علمی با در نظر گرفتن ابعاد گستــرده‌ی بازارهــای مالـــی، در حال شبیــه‌ســـازی یک
              بازار مجازی است. این شبیه‌سازی باید علی‌رغم ایجاد فضای رقابت و هیجان، شرکت‌کنندگان را
              با چالش‌ها و ابعاد تصمیم‌گیری در بازارهای مالی واقعی نیز آشنا کند.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-around w-full p-10 space-y-10 text-center text-black md:flex-row md:space-y-0 md:flex-r0w'>
          <div className='flex flex-col items-center justify-center space-y-5'>
            <img src='/sponsorship.png' alt='sponsorship' />
            <h3 className='text-[#FF7D01] text-3xl text-center'>تیم اسپانسرشیپ</h3>
            <p className='w-1/2'>
              طبیعتا برگزاری رویدادهای دانشجویی این‌چنینی نیاز به حمایت مالی دارد. جذب این حمایت‌ها
              از شرکت‌هــای مختلف نیازمنــد آمــاده‌ســازی شرایط مذاکره است. فعالیت تیم اسپانسرشیپ
              پیــش از سایــر تیــم‌ها آغــاز شده و بـا جـذب سرمایه و تزریق منابع مالی حین روند
              آماده‌سازی به ادامه‌ی فعالیت‌ها کمک می‌کند.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center space-y-5'>
            <img src='/technical.png' alt='technical' />
            <h3 className='text-[#FF7D01] text-3xl text-center'>تیم فنی</h3>
            <p className='w-1/2'>
              تیم فنــی مسئولیت پیاده‌سازی خروجــی تیـم علمــی را بر عهــده دارد، بدیــن‌گونــه که
              بعد از نهایــی‌شـــدن قالــب بــازی توســط تیم علمی، توسعه‌ی بازی و بالا آوردن کد‌های
              مورد نیاز توسط تیم فنی انجام می‌شود. تیم فنی به دو گروه اصلی تقسیم می‌شود: بک‌اند و
              فرانت‌اند. تیم بک‌اند کار توسعه‌ی محتوا و منطق بازی و تیم فرانت‌اند کار طراحی و
              پیاده‌سازی رابط کاربری را انجام می‌دهند.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
