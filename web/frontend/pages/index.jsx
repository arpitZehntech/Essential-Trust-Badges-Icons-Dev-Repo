// import { Card, Page, Layout, TextContainer, Image, Stack, Link, Text } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { useTranslation, Trans } from "react-i18next";
// import { trophyImage } from "../assets";
// import { ProductsCard } from "../components";
// import IconSelector from "../components/IconSelector"; // Import the IconSelector component
// import MainPage from "../components/mainPage"; // Import the IconSelector component


// export default function HomePage() {
//   const { t } = useTranslation();

//   // Function to handle selected icon
//   const handleIconSelect = (icon) => {
//     console.log('Selected Icon:', icon.name);
//   };

//   return (
//     <Page narrowWidth>
//       <TitleBar title={t("HomePage.title")} primaryAction={null} />
//       <Layout>

//         {/* <Layout.Section>
//           <Card sectioned>
//             <IconSelector onIconSelect={handleIconSelect} />
//           </Card>
//         </Layout.Section> */}

//         <Layout.Section>
         
//             <MainPage />
  
//         </Layout.Section>

//       </Layout>
//     </Page>
//   );
// }


import { Card, Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import MainPage from "../components/mainPage"; // Import the MainPage component
import BadgeTypePage from "../components/BadgeTypePage"; // Import the BadgeTypePage component

export default function HomePage() {
  const { t } = useTranslation();
  const [showBadgeTypePage, setShowBadgeTypePage] = useState(false);

  // Function to handle "Create new badge" button click
  const handleCreateBadgeClick = () => {
    setShowBadgeTypePage(true); // Show the BadgeTypePage when button is clicked
  };

  // Function to handle "Back" button click
  const handleBackClick = () => {
    setShowBadgeTypePage(false); // Go back to the MainPage when Back is clicked
  };

  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
        <Layout.Section>
          {/* Toggle between MainPage and BadgeTypePage based on showBadgeTypePage state */}
          {!showBadgeTypePage ? (
            <MainPage onCreateBadgeClick={handleCreateBadgeClick} /> // Pass the click handler as a prop
          ) : (
            <BadgeTypePage onBackClick={handleBackClick} /> // Pass the back handler as a prop
          )}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
