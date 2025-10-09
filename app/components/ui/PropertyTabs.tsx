import { Badge } from '~/components/ui/badge';
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

type PropertyTabsProprs = {
  activeTabs: string;
  setActiveTabs: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
const tabsData = [
  { value: 'all', label: 'All' },
  { value: 'abu_dhabi', label: 'Abu Dhabi' },
  { value: 'dubai', label: 'Dubai' },
  { value: 'sharjah', label: 'Sharjah' },
  { value: 'ajman', label: 'Ajman' },
  { value: 'umm_al_quwain', label: 'Umm Al Quwain' },
  { value: 'ras_al_khaimah', label: 'Ras Al Khaimah' },
  { value: 'fujairah', label: 'Fujairah' },
];

const PropertyTabs = ({
  activeTabs,
  setActiveTabs,
  setPage,
}: PropertyTabsProprs) => {
  return (
    <Tabs
      defaultValue={activeTabs}
      value={activeTabs}
      onValueChange={(value) => {
        setActiveTabs(value);
        setPage(1);
      }}
      className='mb-10'
    >
      <ScrollArea>
        <TabsList
          className='text-foreground h-auto gap-2 mb-4 rounded-none border-b 
        bg-transparent px-0 py-1 '
        >
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className=' data-[state=active]:after:bg-cyan-500 data-[state=active]:hover:bg-cyan-500 relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:shadow-none data-[state=active]:hover:text-white cursor-pointer duration-300 hover:bg-cyan-500 hover:text-white'
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </Tabs>
  );
};

export default PropertyTabs;
