import React from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FaCoffee, FaUsers, FaInbox, FaCloud} from 'react-icons/fa';  // Import icons

const App = () => {
  return (
    <>
      <Navigation
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // Handle item selection
        }}
        items={[
          {
            title: 'Dashboard',
            itemId: '/dashboard',
            elemBefore: () => <FaInbox />, // Using FaInbox icon
          },
          {
            title: 'Management',
            itemId: '/management',
            elemBefore: () => <FaUsers />, // Using FaUsers icon
            subNav: [
              {
                title: 'Projects',
                itemId: '/management/projects',
                elemBefore: () => <FaCloud />, // Using FaCloudSnow icon
              },
              {
                title: 'Members',
                itemId: '/management/members',
                elemBefore: () => <FaCoffee />, // Using FaCoffee icon
              },
            ],
          },
          {
            title: 'Another Item',
            itemId: '/another',
            subNav: [
              {
                title: 'Teams',
                itemId: '/management/teams',
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default App;
