import { Tabs } from '@mantine/core';
import classes from '../../mantine-themes/mantine.module.css';

type PropertyTabsProprs = {
  activeTabs: string;
  setActiveTabs: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PropertyTabs = ({
  activeTabs,
  setActiveTabs,
  setPage,
}: PropertyTabsProprs) => {
  return (
    <Tabs
      color='cyan'
      variant='pills'
      radius={'xs'}
      value={activeTabs}
      onChange={(value) => setActiveTabs(value!)}
      classNames={{
        root: classes.propertiesTabs_root,
        tab: classes.propertiesTabs_tab,
        list: classes.propertiesTabs_list,
      }}
      onClick={() => {
        setPage(1);
      }}
    >
      <Tabs.List>
        <Tabs.Tab value='all'>All</Tabs.Tab>
        <Tabs.Tab value='abu_dhabi'>Abu Dhabi</Tabs.Tab>
        <Tabs.Tab value='dubai'>Dubai</Tabs.Tab>
        <Tabs.Tab value='sharjah'>Sharjah</Tabs.Tab>
        <Tabs.Tab value='ajman'>Ajman</Tabs.Tab>
        <Tabs.Tab value='umm_al_quwain'>Umm Al Quwain</Tabs.Tab>
        <Tabs.Tab value='ras_al_khaimah'>Ras Al Khaimah</Tabs.Tab>
        <Tabs.Tab value='fujairah'>Fujairah</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default PropertyTabs;
