// working code

// import React from 'react';
// import { Page, Card, Layout } from '@shopify/polaris';
// import './mainPage.css'; // Import your CSS file at the top

// const MainPage = () => {
//     return (
//         <Page>
//             <div className="Polaris-Box mainBox" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
//                 <div className="Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
//                     <div className="Polaris-Page-Header__Row">
//                         <div className="Polaris-Page-Header__TitleWrapper">
//                             <h1 className="Polaris-Header-Title">Your Badges</h1>
//                         </div>
//                         <div className="Polaris-Page-Header__RightAlign">
//                             <div className="Polaris-Page-Header__PrimaryActionWrapper">
//                                 <div className="Polaris-Box Polaris-Box--printHidden">
//                                     <button
//                                         className="Polaris-Button Polaris-Button--primary"
//                                         type="button"
//                                         onClick={() => console.log('Redirect to create badge page')}
//                                     >
//                                         <span className="Polaris-Button__Content">
//                                             <span className="Polaris-Button__Text">Create new badge</span>
//                                         </span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Layout>
//                 <Layout.Section>
//                     <Card sectioned>
//                         <div className="Polaris-Box">
//                             <div
//                                 className="Polaris-Box"
//                                 style={{
//                                     '--pc-box-padding-block-end-xs': 'var(--p-space-16)',
//                                     '--pc-box-padding-block-start-xs': 'var(--p-space-5)',
//                                     '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
//                                     '--pc-box-padding-inline-end-xs': 'var(--p-space-0)'
//                                 }}
//                             >
//                                 <div
//                                     className="Polaris-VerticalStack"
//                                     style={{
//                                         '--pc-vertical-stack-inline-align': 'center',
//                                         '--pc-vertical-stack-order': 'column'
//                                     }}
//                                 >
//                                     <img
//                                         src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/public/empty-state-icon.png"
//                                         alt="Badge icon"
//                                         className="badgeIcon"
//                                     />
//                                     <div className="emptyStateMargin">
//                                         <h2 className="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--block Polaris-Text--center heading">
//                                             This is where you'll manage your badges
//                                         </h2>
//                                         <p className="Polaris-Text--root Polaris-Text--block Polaris-Text--center Polaris-Text--subdued">
//                                             Start by creating your first badge and publishing it to your store.
//                                         </p>
//                                         <div
//                                             className="Polaris-HorizontalStack"
//                                             style={{
//                                                 '--pc-horizontal-stack-align': 'center',
//                                                 '--pc-horizontal-stack-wrap': 'wrap',
//                                                 '--pc-horizontal-stack-gap-xs': 'var(--p-space-2)'
//                                             }}
//                                         >
//                                             <button
//                                                 className="Polaris-Button Polaris-Button--primary"
//                                                 type="button"
//                                                 onClick={() => {
//                                                     console.log('Redirect to create badge page');
//                                                 }}
//                                             >
//                                                 <span className="Polaris-Button__Content">
//                                                     <span className="Polaris-Button__Text">Create new badge</span>
//                                                 </span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Card>
//                 </Layout.Section>
//             </Layout>
//         </Page>
//     );
// };

// export default MainPage;

// Testing code on 10/11/2024

import React from 'react';
import { Page, Card, Layout } from '@shopify/polaris';
import './mainPage.css'; // Import your CSS file

const MainPage = ({ onCreateBadgeClick }) => {
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
                    onClick={onCreateBadgeClick} // Call the prop function to switch to BadgeTypePage
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

      <Layout>
        <Layout.Section>
          <Card sectioned>
            <div className="Polaris-Box">
              <div
                className="Polaris-Box"
                style={{
                  '--pc-box-padding-block-end-xs': 'var(--p-space-16)',
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
                    src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/public/empty-state-icon.png"
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
                        onClick={onCreateBadgeClick} // Trigger the prop function
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
    </Page>
  );
};

export default MainPage;
