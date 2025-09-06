import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { principlesData } from '~/data/principles';

const GridPrinciplesStructure = () => {
  return (
    <Box sx={{ paddingRight: '0px' }}>
      <Grid
        container
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
        wrap='wrap'
      >
        {principlesData.map((principle, index) => (
          <Grid
            key={principle.id}
            minHeight={160}
            size={{
              xs: 6,
              md: 4,
              lg: 3,
            }}
          >
            <div className='p-6 font-outfit h-full border-b md:border-r border-gray-400'>
              <small className='text-blue-400 capitalize'>
                {principle.label}
              </small>
              <h2 className='font-medium text-xl my-2'>{principle.title}</h2>
              <p className='text-sm text-gray-600 font-outfit font-light'>
                {principle.desc}
              </p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridPrinciplesStructure;
