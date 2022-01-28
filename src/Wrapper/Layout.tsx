import { Navbar } from '../components';

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children, title }) => {
  return (
    <>
      <head>
        <title>{title}</title>{' '}
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </head>
      <div className='flex flex-col justify-start w-full h-full min-h-screen'>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
