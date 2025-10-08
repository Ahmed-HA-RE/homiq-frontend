import Footer from '../ui/Footer';

type AuthLayout = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayout) => {
  return (
    <>
      <main className='h-screen bg-gradient-primary py-10 md:p-0'>
        <div className='w-full flex md:flex-row h-full justify-center'>
          <div className='flex-1 h-full hidden md:flex'>
            <img
              src='https://res.cloudinary.com/ahmed--dev/image/upload/v1758479748/auth_fggyyh.jpg'
              className='hidden sm:block h-full object-cover'
            />
          </div>
          <div className='md:flex-1 py-10 px-6  w-full max-w-2xl self-center'>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
