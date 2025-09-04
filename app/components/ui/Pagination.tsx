import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationProps = {
  page: number;
  total: number;
  setPage: (page: number) => void;
};

const PaginationComponent = ({ page, total, setPage }: PaginationProps) => {
  return (
    <Stack spacing={4} className='py-14 flex justify-center items-center'>
      <Pagination
        count={total}
        page={page}
        onChange={(e, page) => setPage(page)}
        color='primary'
        shape='rounded'
        size='large'
      />
    </Stack>
  );
};

export default PaginationComponent;
