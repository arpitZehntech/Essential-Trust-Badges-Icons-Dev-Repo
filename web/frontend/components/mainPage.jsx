// Working code Testing on Saturday 19/10/2024 for noraml ui

// import React from 'react';
// import { Page, Card, Layout } from '@shopify/polaris';
// import './mainPage.css'; // Import your CSS file

// const MainPage = ({ onCreateBadgeClick }) => {
//   return (
//     <Page>
//       <div className="Polaris-Box mainBox" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
//         <div className="Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
//           <div className="Polaris-Page-Header__Row">
//             <div className="Polaris-Page-Header__TitleWrapper">
//               <h1 className="Polaris-Header-Title">Your Badges</h1>
//             </div>
//             <div className="Polaris-Page-Header__RightAlign">
//               <div className="Polaris-Page-Header__PrimaryActionWrapper">
//                 <div className="Polaris-Box Polaris-Box--printHidden">
//                   <button
//                     className="Polaris-Button Polaris-Button--primary"
//                     type="button"
//                     onClick={onCreateBadgeClick} // Call the prop function to switch to BadgeTypePage
//                   >
//                     <span className="Polaris-Button__Content">
//                       <span className="Polaris-Button__Text">Create new badge</span>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Layout>
//         <Layout.Section>
//           <Card sectioned>
//             <div className="Polaris-Box">
//               <div
//                 className="Polaris-Box"
//                 style={{
//                   '--pc-box-padding-block-end-xs': 'var(--p-space-10)',
//                   '--pc-box-padding-block-start-xs': 'var(--p-space-5)',
//                   '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
//                   '--pc-box-padding-inline-end-xs': 'var(--p-space-0)',
//                 }}
//               >
//                 <div
//                   className="Polaris-VerticalStack"
//                   style={{
//                     '--pc-vertical-stack-inline-align': 'center',
//                     '--pc-vertical-stack-order': 'column',
//                   }}
//                 >
//                   <img
//                     src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/public/empty-state-icon.png"
//                     alt="Badge icon"
//                     className="badgeIcon"
//                   />
//                   <div className="emptyStateMargin">
//                     <h2 className="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--block Polaris-Text--center heading">
//                       This is where you'll manage your badges
//                     </h2>
//                     <p className="Polaris-Text--root Polaris-Text--block Polaris-Text--center Polaris-Text--subdued">
//                       Start by creating your first badge and publishing it to your store.
//                     </p>
//                     <div
//                       className="Polaris-HorizontalStack"
//                       style={{
//                         '--pc-horizontal-stack-align': 'center',
//                         '--pc-horizontal-stack-wrap': 'wrap',
//                         '--pc-horizontal-stack-gap-xs': 'var(--p-space-2)',
//                       }}
//                     >
//                       <button
//                         className="Polaris-Button Polaris-Button--primary"
//                         type="button"
//                         onClick={onCreateBadgeClick} // Trigger the prop function
//                       >
//                         <span className="Polaris-Button__Content">
//                           <span className="Polaris-Button__Text">Create new badge</span>
//                         </span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// };

// export default MainPage;





// working code at 25/10/2024 for fetch the values from databse and show in table in main page

// import React, { useState, useEffect, useCallback } from 'react';
// import { Page, Card, Layout, Badge, Button, Icon, Popover, ActionList } from "@shopify/polaris";
// import { DragHandleMinor } from "@shopify/polaris-icons";
// import * as img from 'react-icons/lia'; // Example icon, replace with actual icon import
// import './mainPage.css';

// import { LiaTruckMovingSolid } from "react-icons/lia";

// const MainPage = ({ onCreateBadgeClick }) => {
//   const [badges, setBadges] = useState([]); // State for badges
//   const [activePopoverId, setActivePopoverId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Function to toggle popover
//   const togglePopoverActive = useCallback(
//     (popoverId) => () => setActivePopoverId((active) => (active === popoverId ? null : popoverId)),
//     []
//   );

//   // Actions for the popover
//   const actions = [
//     { content: 'Copy Badge ID' },
//     { content: 'Edit' },
//     { content: 'Delete', destructive: true },
//     { content: 'Move up' },
//     { content: 'Move down' },
//   ];

//   // Fetch badges from API on component mount
//   useEffect(() => {
//     const fetchBadges = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/api/badges'); // Adjust the API endpoint as needed
//         const data = await response.json();
//         console.log("Fetched badges data:", data);
//         setBadges(data);
//       } catch (error) {
//         console.error('Error fetching badges:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBadges();
//   }, []);

//   // Function to get the icon component based on icon_name
//   const getIconComponent = (iconName) => {
//     try {
//       return img[iconName];
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default return null if the icon is not found
//     }
//   };

//   return (
//     <Page>
//       <div className="Polaris-Box mainBox" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
//         <div className="Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
//           <div className="Polaris-Page-Header__Row">
//             <div className="Polaris-Page-Header__TitleWrapper">
//               <h1 className="Polaris-Header-Title">Your Badges</h1>
//             </div>
//             <div className="Polaris-Page-Header__RightAlign">
//               <div className="Polaris-Page-Header__PrimaryActionWrapper">
//                 <div className="Polaris-Box Polaris-Box--printHidden">
//                   <button
//                     className="Polaris-Button Polaris-Button--primary"
//                     type="button"
//                     onClick={onCreateBadgeClick}
//                   >
//                     <span className="Polaris-Button__Content">
//                       <span className="Polaris-Button__Text">Create new badge</span>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {badges.length > 0 ? (
//         <Layout>
//           <Layout.Section>
//             <Card>
//               <table className="polaris-table" style={{ width: '100%' }}>
//                 <thead>
//                   <tr className="header-row">
//                     <th className="left-header">Badge name & priority</th>
//                     <th className="left-header">Placement</th>
//                     <th className="right-header">Status</th>
//                     <th className="right-header">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {badges.map((badge, badgeIndex) => (
//                     badge.badge_pages && badge.badge_pages.length > 0 ? (
//                       badge.badge_pages.map((page, pageIndex) => {
//                         const IconComponent = getIconComponent(page.icon_name);
//                         const popoverId = `${badgeIndex}-${pageIndex}`; // Unique ID for each popover
//                         return (
//                           <tr className="body-row" key={popoverId}>
//                             <td className="left-data">
//                               <div className="custom-row">
//                                 <span className="drag-icon">
//                                   <Icon source={DragHandleMinor} />
//                                 </span>
//                                 {IconComponent ? (
//                                   <span className="Polaris-Thumbnail icon-wrapper">
//                                     <IconComponent />
//                                   </span>
//                                 ) : (
//                                   <span className="Polaris-Thumbnail icon-wrapper">
//                                 <LiaTruckMovingSolid />
//                                 </span>
//                                 )}
//                                 <span className="title1">{badge.badge_name}</span>
//                                 <span className="title1">{badge.id}</span>
//                               </div>
//                             </td>
//                             <td className="left-data">{page.placement || 'All Products'}</td>
//                             <td className="right-data">
//                               <Badge status={badge.status === 'Publish' ? 'success' : 'warning'}>
//                                 {badge.status}
//                               </Badge>
//                             </td>
//                             <td className="right-data">
//                               <Popover
//                                 active={activePopoverId === popoverId}
//                                 activator={
//                                   <Button plain onClick={togglePopoverActive(popoverId)}>
//                                     <svg viewBox="0 0 20 20" height="16" color="#202223">
//                                       <path d="M6 10a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001z"></path>
//                                     </svg>
//                                   </Button>
//                                 }
//                                 onClose={togglePopoverActive(popoverId)}
//                               >
//                                 <ActionList items={actions} />
//                               </Popover>
//                             </td>
//                           </tr>
//                         );
//                       })
//                     ) : (
//                       <tr key={`no-pages-${badgeIndex}`}>
//                         <td colSpan={4}>No Pages Available for {badge.badge_name}</td>
//                       </tr>
//                     )
//                   ))}
//                 </tbody>
//               </table>
//             </Card>
//           </Layout.Section>
//         </Layout>
//       ) : (
//         <Layout>
//           <Layout.Section>
//             <Card sectioned>
//               <div className="Polaris-Box">
//                 <div
//                   className="Polaris-Box"
//                   style={{
//                     '--pc-box-padding-block-end-xs': 'var(--p-space-10)',
//                     '--pc-box-padding-block-start-xs': 'var(--p-space-5)',
//                     '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
//                     '--pc-box-padding-inline-end-xs': 'var(--p-space-0)',
//                   }}
//                 >
//                   <div
//                     className="Polaris-VerticalStack"
//                     style={{
//                       '--pc-vertical-stack-inline-align': 'center',
//                       '--pc-vertical-stack-order': 'column',
//                     }}
//                   >
//                     <img
//                       src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/empty-state-icon.png"
//                       alt="Badge icon"
//                       className="badgeIcon"
//                     />
//                     <div className="emptyStateMargin">
//                       <h2 className="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--block Polaris-Text--center heading">
//                         This is where you'll manage your badges
//                       </h2>
//                       <p className="Polaris-Text--root Polaris-Text--block Polaris-Text--center Polaris-Text--subdued">
//                         Start by creating your first badge and publishing it to your store.
//                       </p>
//                       <div
//                         className="Polaris-HorizontalStack"
//                         style={{
//                           '--pc-horizontal-stack-align': 'center',
//                           '--pc-horizontal-stack-wrap': 'wrap',
//                           '--pc-horizontal-stack-gap-xs': 'var(--p-space-2)',
//                         }}
//                       >
//                         <button
//                           className="Polaris-Button Polaris-Button--primary"
//                           type="button"
//                           onClick={onCreateBadgeClick}
//                         >
//                           <span className="Polaris-Button__Content">
//                             <span className="Polaris-Button__Text">Create new badge</span>
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </Layout.Section>
//         </Layout>
//       )}
//     </Page>
//   );
// };

// export default MainPage;


// testing code for  the above code for update
import React, { useState, useEffect, useCallback } from 'react';
import { Page, Card, Layout, Badge, Button, Icon, Popover, ActionList } from "@shopify/polaris";
import { DragHandleMinor } from "@shopify/polaris-icons";
import * as img from 'react-icons/lia'; // Example icon, replace with actual icon import
import './mainPage.css';

import { LiaTruckMovingSolid } from "react-icons/lia";

const MainPage = ({ onCreateBadgeClick, onEditBadgeClick }) => {
  const [badges, setBadges] = useState([]); // State for badges
  const [activePopoverId, setActivePopoverId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to toggle popover
  const togglePopoverActive = useCallback(
    (popoverId) => () => setActivePopoverId((active) => (active === popoverId ? null : popoverId)),
    []
  );

  // Actions for the popover
  const actions = [
    { content: 'Copy Badge ID' },
    { content: 'Edit', onAction: (badgeId) => onEditBadgeClick(badgeId) },
    { content: 'Delete', destructive: true },
    { content: 'Move up' },
    { content: 'Move down' },
  ];

  // Fetch badges from API on component mount
  useEffect(() => {
    const fetchBadges = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/badges'); // Adjust the API endpoint as needed
        const data = await response.json();
        console.log("Fetched badges data:", data);
        setBadges(data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBadges();
  }, []);

  // Function to get the icon component based on icon_name
  const getIconComponent = (iconName) => {
    try {
      return img[iconName];
    } catch (error) {
      console.error(`Error importing icon ${iconName}:`, error);
      return null; // Default return null if the icon is not found
    }
  };

  return (
    <Page>
      <div className="Polaris-Box mainBox" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
        <div className="Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
          <div className="Polaris-Page-Header__Row">
            <div className="Polaris-Page-Header__TitleWrapper">
              <h1 className="Polaris-Header-Title">Your Badges</h1>
            </div>
            <div className="Polaris-Page-Header__RightAlign">
              <div className="Polaris-Page-Header__PrimaryActionWrapper">
                <div className="Polaris-Box Polaris-Box--printHidden">
                  <button
                    className="Polaris-Button Polaris-Button--primary"
                    type="button"
                    onClick={onCreateBadgeClick}
                  >
                    <span className="Polaris-Button__Content">
                      <span className="Polaris-Button__Text">Create new badge</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {badges.length > 0 ? (
        <Layout>
          <Layout.Section>
            <Card>
              <table className="polaris-table" style={{ width: '100%' }}>
                <thead>
                  <tr className="header-row">
                    <th className="left-header">Badge name & priority</th>
                    <th className="left-header">Placement</th>
                    <th className="right-header">Status</th>
                    <th className="right-header">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {badges.map((badge, badgeIndex) => (
                    badge.badge_pages && badge.badge_pages.length > 0 ? (
                      badge.badge_pages.map((page, pageIndex) => {
                        const IconComponent = getIconComponent(page.icon_name);
                        const popoverId = `${badgeIndex}-${pageIndex}`; // Unique ID for each popover
                        return (
                          <tr className="body-row" key={popoverId}>
                            <td className="left-data">
                              <div className="custom-row">
                                <span className="drag-icon">
                                  <Icon source={DragHandleMinor} />
                                </span>
                                {IconComponent ? (
                                  <span className="Polaris-Thumbnail icon-wrapper">
                                    <IconComponent />
                                  </span>
                                ) : (
                                  <span className="Polaris-Thumbnail icon-wrapper">
                                <LiaTruckMovingSolid />
                                </span>
                                )}
                                <span className="title1">{badge.badge_name}</span>
                                <span className="title1">{badge.id}</span>
                              </div>
                            </td>
                            <td className="left-data">{page.placement || 'All Products'}</td>
                            <td className="right-data">
                              <Badge status={badge.status === 'Publish' ? 'success' : 'warning'}>
                                {badge.status}
                              </Badge>
                            </td>
                            <td className="right-data">
                              <Popover
                                active={activePopoverId === popoverId}
                                activator={
                                  <Button plain onClick={togglePopoverActive(popoverId)}>
                                    <svg viewBox="0 0 20 20" height="16" color="#202223">
                                      <path d="M6 10a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001z"></path>
                                    </svg>
                                  </Button>
                                }
                                onClose={togglePopoverActive(popoverId)}
                              >
                                <ActionList items={actions.map(action => ({ ...action, onAction: action.content === 'Edit' ? () => onEditBadgeClick(badge.id) : undefined }))} />
                              </Popover>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr key={`no-pages-${badgeIndex}`}>
                        <td colSpan={4}>No Pages Available for {badge.badge_name}</td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </Card>
          </Layout.Section>
        </Layout>
      ) : (
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <div className="Polaris-Box">
                <div
                  className="Polaris-Box"
                  style={{
                    '--pc-box-padding-block-end-xs': 'var(--p-space-10)',
                    '--pc-box-padding-block-start-xs': 'var(--p-space-5)',
                    '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
                    '--pc-box-padding-inline-end-xs': 'var(--p-space-0)',
                  }}
                >
                  <div
                    className="Polaris-VerticalStack"
                    style={{
                      '--pc-vertical-stack-inline-align': 'center',
                      '--pc-vertical-stack-order': 'column',
                    }}
                  >
                    <img
                      src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/empty-state-icon.png"
                      alt="Badge icon"
                      className="badgeIcon"
                    />
                    <div className="emptyStateMargin">
                      <h2 className="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--block Polaris-Text--center heading">
                        This is where you'll manage your badges
                      </h2>
                      <p className="Polaris-Text--root Polaris-Text--block Polaris-Text--center Polaris-Text--subdued">
                        Start by creating your first badge and publishing it to your store.
                      </p>
                      <div
                        className="Polaris-HorizontalStack"
                        style={{
                          '--pc-horizontal-stack-align': 'center',
                          '--pc-horizontal-stack-wrap': 'wrap',
                          '--pc-horizontal-stack-gap-xs': 'var(--p-space-2)',
                        }}
                      >
                        <button
                          className="Polaris-Button Polaris-Button--primary"
                          type="button"
                          onClick={onCreateBadgeClick}
                        >
                          <span className="Polaris-Button__Content">
                            <span className="Polaris-Button__Text">Create new badge</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Layout.Section>
        </Layout>
      )}
    </Page>
  );
};

export default MainPage;





// testing code at 27/10/2024 for update the badges now it is working but some errors like new badge creation is not working

// import React, { useState, useEffect, useCallback } from 'react';
// import { Page, Card, Layout, Badge, Button, Icon, Popover, ActionList } from "@shopify/polaris";
// import { DragHandleMinor } from "@shopify/polaris-icons";
// import * as img from 'react-icons/lia'; // Example icon, replace with actual icon import
// import './mainPage.css';

// import { LiaTruckMovingSolid } from "react-icons/lia";

// const MainPage = ({ onCreateBadgeClick, onEditBadgeClick }) => {
//   const [badges, setBadges] = useState([]); // State for badges
//   const [activePopoverId, setActivePopoverId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Function to toggle popover
//   const togglePopoverActive = useCallback(
//     (popoverId) => () => setActivePopoverId((active) => (active === popoverId ? null : popoverId)),
//     []
//   );

//   // Actions for the popover
//   const actions = [
//     { content: 'Copy Badge ID' },
//     { content: 'Edit', primary: true, onAction: (id) => onEditBadgeClick(id) },
//     { content: 'Delete', destructive: true },
//     { content: 'Move up' },
//     { content: 'Move down' },
//   ];

//   // Fetch badges from API on component mount
//   useEffect(() => {
//     const fetchBadges = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/api/badges'); // Adjust the API endpoint as needed
//         const data = await response.json();
//         console.log("Fetched badges data:", data);
//         setBadges(data);
//       } catch (error) {
//         console.error('Error fetching badges:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBadges();
//   }, []);

//   // Function to get the icon component based on icon_name
//   const getIconComponent = (iconName) => {
//     try {
//       return img[iconName];
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default return null if the icon is not found
//     }
//   };

//   return (
//     <Page>
//       <div className="Polaris-Box mainBox" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
//         <div className="Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
//           <div className="Polaris-Page-Header__Row">
//             <div className="Polaris-Page-Header__TitleWrapper">
//               <h1 className="Polaris-Header-Title">Your Badges</h1>
//             </div>
//             <div className="Polaris-Page-Header__RightAlign">
//               <div className="Polaris-Page-Header__PrimaryActionWrapper">
//                 <div className="Polaris-Box Polaris-Box--printHidden">
//                   <button
//                     className="Polaris-Button Polaris-Button--primary"
//                     type="button"
//                     onClick={onCreateBadgeClick}
//                   >
//                     <span className="Polaris-Button__Content">
//                       <span className="Polaris-Button__Text">Create new badge</span>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {badges.length > 0 ? (
//         <Layout>
//           <Layout.Section>
//             <Card>
//               <table className="polaris-table" style={{ width: '100%' }}>
//                 <thead>
//                   <tr className="header-row">
//                     <th className="left-header">Badge name & priority</th>
//                     <th className="left-header">Placement</th>
//                     <th className="right-header">Status</th>
//                     <th className="right-header">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {badges.map((badge, badgeIndex) => (
//                     badge.badge_pages && badge.badge_pages.length > 0 ? (
//                       badge.badge_pages.map((page, pageIndex) => {
//                         const IconComponent = getIconComponent(page.icon_name);
//                         const popoverId = `${badgeIndex}-${pageIndex}`; // Unique ID for each popover
//                         return (
//                           <tr className="body-row" key={popoverId}>
//                             <td className="left-data" onClick={() => onEditBadgeClick(badge.id)}>
//                               <div className="custom-row" >
//                                 <span className="drag-icon">
//                                   <Icon source={DragHandleMinor} />
//                                 </span>
//                                 {IconComponent ? (
//                                   <span className="Polaris-Thumbnail icon-wrapper">
//                                     <IconComponent />
//                                   </span>
//                                 ) : (
//                                   <span className="Polaris-Thumbnail icon-wrapper">
//                                     <LiaTruckMovingSolid />
//                                   </span>
//                                 )}
//                                 <span className="title1">{badge.badge_name}</span>
//                                 <span className="title1">{badge.id}</span>
//                               </div>
//                             </td>
//                             <td className="left-data">{page.placement || 'All Products'}</td>
//                             <td className="right-data">
//                               <Badge status={badge.status === 'Publish' ? 'success' : 'warning'}>
//                                 {badge.status}
//                               </Badge>
//                             </td>
//                             <td className="right-data">
//                               <Popover
//                                 active={activePopoverId === popoverId}
//                                 activator={
//                                   <Button plain onClick={togglePopoverActive(popoverId)}>
//                                     <svg viewBox="0 0 20 20" height="16" color="#202223">
//                                       <path d="M6 10a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001z"></path>
//                                     </svg>
//                                   </Button>
//                                 }
//                                 onClose={togglePopoverActive(popoverId)}
//                               >
//                                 <ActionList items={actions.map(action => ({ ...action, onAction: action.content === 'Edit' ? () => onEditBadgeClick(badge.id) : null }))} />
//                               </Popover>
//                             </td>
//                           </tr>
//                         );
//                       })
//                     ) : (
//                       <tr key={`no-pages-${badgeIndex}`}>
//                         <td colSpan={4}>No Pages Available for {badge.badge_name}</td>
//                       </tr>
//                     )
//                   ))}
//                 </tbody>
//               </table>
//             </Card>
//           </Layout.Section>
//         </Layout>
//       ) : (
//         <Layout>
//           <Layout.Section>
//             <Card sectioned>
//               <div className="Polaris-Box">
//                 <div
//                   className="Polaris-Box"
//                   style={{
//                     '--pc-box-padding-block-end-xs': 'var(--p-space-10)',
//                     '--pc-box-padding-block-start-xs': 'var(--p-space-5)',
//                     '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
//                     '--pc-box-padding-inline-end-xs': 'var(--p-space-0)',
//                   }}
//                 >
//                   <div
//                     className="Polaris-VerticalStack"
//                     style={{
//                       '--pc-vertical-stack-inline-align': 'center',
//                       '--pc-vertical-stack-order': 'column',
//                     }}
//                   >
//                     <img
//                       src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/empty-state-icon.png"
//                       alt="Badge icon"
//                       className="badgeIcon"
//                     />
//                     <div className="emptyStateMargin">
//                       <h2 className="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--block Polaris-Text--center heading">
//                         This is where you'll manage your badges
//                       </h2>
//                       <p className="Polaris-Text--root Polaris-Text--block Polaris-Text--center Polaris-Text--subdued">
//                         Start by creating your first badge and publishing it to your store.
//                       </p>
//                       <div
//                         className="Polaris-HorizontalStack"
//                         style={{
//                           '--pc-horizontal-stack-align': 'center',
//                           '--pc-horizontal-stack-wrap': 'wrap',
//                           '--pc-horizontal-stack-gap-xs': 'var(--p-space-2)',
//                         }}
//                       >
//                         <button
//                           className="Polaris-Button Polaris-Button--primary"
//                           type="button"
//                           onClick={onCreateBadgeClick}
//                         >
//                           <span className="Polaris-Button__Content">
//                             <span className="Polaris-Button__Text">Create new badge</span>
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </Layout.Section>
//         </Layout>
//       )}
//     </Page>
//   );
// };

// export default MainPage;
