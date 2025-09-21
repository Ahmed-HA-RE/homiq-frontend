import SignUpForm from '~/components/SignUp';
import Footer from '~/components/ui/Footer';

const SignUpPage = () => {
  return (
    <>
      <main className='py-40 sm:pt-30  min-h-screen flex items-center bg-gradient-register p-6'>
        <div className='bg-gray-100 shadow rounded-4xl  sm:h-[600px] sm:flex sm:flex-row   items-center gap-4 overflow-hidden'>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/auth.jpg`}
            className='hidden sm:block h-full w-1/2 object-cover rounded-l-4xl'
          />
          <div className='flex-1/2'>
            <SignUpForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUpPage;
