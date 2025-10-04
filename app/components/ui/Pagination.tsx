import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationProps = {
  page: number;
  total_page: number;
  setPage: (page: number) => void;
};

const PaginationComponent = ({
  page,
  total_page,
  setPage,
}: PaginationProps) => {
  return (
    <Stack spacing={4} className='py-14 flex justify-center items-center'>
      <Pagination
        count={total_page}
        page={page}
        onChange={(e, page) => {
          setPage(page);
          window.scrollTo({ top: 50, behavior: 'smooth' });
        }}
        color='primary'
        shape='rounded'
        size='large'
      />
    </Stack>
  );
};

export default PaginationComponent;
