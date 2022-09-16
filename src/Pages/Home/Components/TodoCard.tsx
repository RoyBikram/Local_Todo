// ---------External----------//
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
// ---------Internal----------//
import TodoItemsContainer from '../../../Components/TodoItemsContainer';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TodoCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const StyledTab = styled(Tab)`
    text-transform: capitalize;
  `;
  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          centered
        >
          <StyledTab label="All" {...a11yProps(0)} />
          <StyledTab label="Work" {...a11yProps(1)} />
          <StyledTab label="Personal" {...a11yProps(2)} />
          <StyledTab label="Done" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
          '& > div': { height: '100%' },
        }}
      >
        <TabPanel value={value} index={0}>
          <TodoItemsContainer variant="all" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TodoItemsContainer variant="work" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TodoItemsContainer variant="personal" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TodoItemsContainer variant="done" />
          done
        </TabPanel>
      </Box>
    </Box>
  );
}
