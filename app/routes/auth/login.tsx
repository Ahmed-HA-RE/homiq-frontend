import LogInForm from '~/components/LogIn';
import Footer from '~/components/ui/Footer';

const LogInPage = () => {
  return (
    <>
      <main className='py-30 sm:py-30  min-h-screen flex items-center bg-gradient-register px-6'>
        <div className='bg-gray-100 shadow rounded-4xl w-full  sm:h-[600px] sm:flex sm:flex-row   items-center gap-4 overflow-hidden'>
          <img
            src='https://res.cloudinary.com/ahmed--dev/image/upload/v1758479748/auth_fggyyh.jpg'
            className='hidden sm:block h-full w-1/2 object-cover rounded-l-4xl'
          />
          <div className='flex-1/2'>
            <LogInForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LogInPage;
