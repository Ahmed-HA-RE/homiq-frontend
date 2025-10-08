import GridPrinciplesStructure from './ui/GridStrucutre';

const Principles = () => {
  return (
    <section className='p-4 md:p-6 mt-5 sm:mt-25'>
      <div className='max-w-7xl mx-auto '>
        {/* Top Content */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-x-6 mb-4 sm:mb-8 '>
          <h2 className='capitalize font-outfit font-medium text-2xl md:text-3xl '>
            our operating principles{' '}
          </h2>
          <p className='max-w-md   text-center md:text-left text-gray-500 pt-1'>
            We adopt modern tools and technologies to make property search and
            transactions faster, smarter, and stress-free
          </p>
        </div>
        <GridPrinciplesStructure />
      </div>
    </section>
  );
};

export default Principles;
