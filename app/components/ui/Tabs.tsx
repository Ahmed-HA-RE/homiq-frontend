import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { useState } from 'react';
import ListAltIcon from '@mui/icons-material/ListAlt';
import type { Projects } from '~/types';
import DescriptionIcon from '@mui/icons-material/Description';
import { IoIosCheckmark } from 'react-icons/io';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type ProjectDetailsTabsProps = {
  project: Projects;
};

export default function ProjectDetailsTabs({
  project,
}: ProjectDetailsTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        padding: '30px 0',
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='inherit'
          className='text-gray-800'
          slotProps={{
            indicator: { style: { background: '#112D4E' } },
          }}
          sx={{
            '& .MuiTabs-flexContainer': {
              gap: 3,
            },
          }}
          aria-label='Real estate information tabs'
          centered
          scrollButtons
          allowScrollButtonsMobile
          variant='fullWidth'
        >
          <Tab
            iconPosition='start'
            icon={<ListAltIcon fontSize='small' />}
            label='Property Features'
            className='!capitalize !text-base sm:!text-xl'
            sx={{
              color: '#374151',
              '&.Mui-selected': {
                color: '#112D4E',
              },
              p: '0',
            }}
            {...a11yProps(0)}
          />
          <Tab
            iconPosition='start'
            icon={<DescriptionIcon fontSize='small' />}
            label='Property Description'
            className='!capitalize !text-base sm:!text-xl'
            sx={{
              color: '#374151',
              '&.Mui-selected': {
                color: '#112D4E',
              },
              p: '0',
            }}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>

      {/* Features Tab */}
      <CustomTabPanel value={value} index={0}>
        <div className='bg-white shadow p-6 rounded max-w-2xl mx-auto mt-12 space-y-4'>
          <h3 className='font-outfit text-gray-600 text-xl mb-6'>Features</h3>
          <ul className='grid grid-cols-2 sm:grid-cols-3 items-center justify-center gap-y-4'>
            {project.amenities.map((amenity) => (
              <li key={amenity} className='flex flex-row items-center'>
                <span>
                  <IoIosCheckmark className='text-green-600 text-4xl opacity-65 font' />
                </span>
                <p className='text-sm text-gray-800'>{amenity}</p>
              </li>
            ))}
          </ul>
        </div>
      </CustomTabPanel>

      {/* Description Tab */}
      <CustomTabPanel value={value} index={1}>
        <div className='mt-12 space-y-4 bg-white shadow p-6 rounded max-w-4xl mx-auto'>
          {/* discription */}
          <div>
            <h3 className='font-outfit text-gray-600 text-xl mb-6'>
              Description
            </h3>
            <p className='tracking-wider text-gray-500 leading-6 text-sm max-w-5xl mb-6'>
              {project.description}
            </p>
          </div>
          {/* amenities */}
          <div>
            <ul className='grid grid-cols-2 sm:grid-cols-3 items-center justify-items-start gap-8 font-outfit'>
              {/* Area */}
              <li>
                <div className='flex flex-row items-center justify-center'>
                  {/* icon */}
                  <img src='/svgs/features/area.svg' alt='area' width={50} />
                  {/* info */}
                  <div className='flex flex-col items-start'>
                    <h4 className='text-gray-700'>Area:</h4>
                    <span className='text-xs text-gray-400'>
                      {project.area}
                    </span>
                  </div>
                </div>
              </li>
              {/* floors */}
              <li>
                <div className='flex flex-row items-center justify-center space-x-2'>
                  {/* icon */}
                  <img
                    src='/svgs/features/floor-stage.svg'
                    alt='area'
                    width={40}
                  />
                  {/* info */}
                  <div className='flex flex-col items-start'>
                    <h4 className='text-gray-700'>
                      {' '}
                      {project.floors > 1 ? 'Floors:' : 'Floor:'}
                    </h4>
                    <span className='text-xs text-gray-400'>
                      {project.floors > 1
                        ? `${project.floors} Floors`
                        : `${project.floors} Floor`}
                    </span>
                  </div>
                </div>
              </li>
              {/* Bathrooms */}
              <li>
                <div className='flex flex-row items-center justify-center space-x-2'>
                  {/* icon */}
                  <img
                    src='/svgs/features/bathrooms.svg'
                    alt='area'
                    width={40}
                  />
                  {/* info */}
                  <div className='flex flex-col items-start'>
                    <h4 className='text-gray-700'>Baths:</h4>
                    <span className='text-xs text-gray-400'>
                      {project.Bathrooms > 1
                        ? `${project.Bathrooms} Bathrooms`
                        : `${project.Bathrooms} Bathroom`}
                    </span>
                  </div>
                </div>
              </li>
              {/* Type */}
              <li>
                <div className='flex flex-row items-center justify-center space-x-2'>
                  {/* icon */}
                  <img
                    src={`/svgs/features/${project.type === 'Villa' ? 'villa' : 'apartment'}.svg`}
                    alt='area'
                    width={40}
                  />
                  {/* info */}
                  <div className='flex flex-col items-start'>
                    <h4 className='text-gray-700'>Type:</h4>
                    <span className='text-xs text-gray-400'>
                      {project.type}
                    </span>
                  </div>
                </div>
              </li>
              {/* Garage */}
              <li>
                <div className='flex flex-row items-center justify-center space-x-2'>
                  {/* icon */}
                  <img src='/svgs/features/garage.svg' alt='area' width={40} />
                  {/* info */}
                  <div className='flex flex-col items-start'>
                    <h4 className='text-gray-700'>
                      {' '}
                      {project.parking > 1 ? 'Garages:' : 'Garage:'}
                    </h4>
                    <span className='text-xs text-gray-400'>
                      {project.parking > 1
                        ? `${project.parking} Garages`
                        : `${project.parking} Garage`}
                    </span>
                  </div>
                </div>
              </li>
              {/* beds */}
              <li>
                <div className='flex flex-row items-center justify-center space-x-2'>
                  {/* icon */}
                  <img src='/svgs/features/beds.svg' alt='area' width={40} />
                  {/* info */}
                  <div className='flex flex-col items-start'>
                    <h4 className='text-gray-700'>
                      {' '}
                      {project.beds > 1 ? 'Beds:' : 'Bed:'}
                    </h4>
                    <span className='text-xs text-gray-400'>
                      {project.beds > 1
                        ? `${project.beds} Beds`
                        : `${project.beds} Bed`}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
