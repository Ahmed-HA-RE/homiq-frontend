import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WhyWeAreDifferent from './WhyWeAreDifferent';
import RateReviewIcon from '@mui/icons-material/RateReview';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type AboutUsTabsProps = {
  label: string;
  icon: React.ReactNode;
};

export default function AboutUsTabs({ label, icon }: AboutUsTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        margin: '50px 0',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='inherit'
        className='text-gray-800'
        slotProps={{
          indicator: { style: { background: '#1E40AF' } },
        }}
        aria-label='Real estate information tabs'
        centered
        scrollButtons
        allowScrollButtonsMobile
        variant='fullWidth'
      ></Tabs>

      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

{
  /* <Tab
          iconPosition='start'
          icon={icon}
          label={label}
          {...a11yProps(0)}
        />

        <CustomTabPanel value={value} index={0}>
        <WhyWeAreDifferent />
      </CustomTabPanel> */
}
