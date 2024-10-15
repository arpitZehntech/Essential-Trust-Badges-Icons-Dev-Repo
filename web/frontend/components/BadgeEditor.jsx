// import {
//   Page,
//   Card,
//   Tabs,
//   Button,
//   FormLayout,
//   TextField,
//   Badge,
//   RadioButton,
//   Stack,
//   Select,
//   Thumbnail,
//   Grid,
//   LegacyCard,
//   Popover,
// } from "@shopify/polaris";
// import { useState } from "react";
// import IconSelector from "./IconSelector"; // Import the IconSelector component
// import "./BadgeEditor.css";

// function BadgeEditor({ onBackClick }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [badgeType, setBadgeType] = useState("icon-block");
//   const [badgeName, setBadgeName] = useState("Your badge");
//   const [title, setTitle] = useState("Free Shipping");
//   const [subheading, setSubheading] = useState("Delivered to Your doorstep, on us!");
//   const [selectedIcon, setSelectedIcon] = useState(null);
//   const [cta, setCta] = useState("no-cta");
//   const [isUploadVisible, setIsUploadVisible] = useState(false);

//   const handleTabChange = (selectedTabIndex) => setSelectedTab(selectedTabIndex);

//   const tabs = [
//     { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
//     { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
//     { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
//   ];

//   const handleIconSelect = (icon) => {
//     setSelectedIcon(icon);
//   };

//   const handleUploadClick = () => {
//     setIsUploadVisible(true);
//   };

//   const handleUploadClose = () => {
//     setIsUploadVisible(false);
//   };

//   return (
//     <Page
//       title={
//         <div className="Polaris-Box topBox">
//           <div className="breadcrumbs">
//             <button
//               className="Polaris-Button"
//               type="button"
//               onClick={onBackClick}
//               style={{
//                 border: '1px solid #c4cdd5',
//                 borderRadius: '4px',
//                 padding: '5px',
//                 backgroundColor: '#f4f6f8',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 style={{
//                   fill: 'rgb(97, 106, 117)',
//                   transition: 'fill 0.3s ease',
//                 }}
//                 className="back-arrow"
//               >
//                 <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
//               </svg>
//             </button>
//           </div>
//           <h1 className="Polaris-Text--root Polaris-Text--headingLg title" style={{ marginRight: 8 }}>
//             {badgeName}
//           </h1>
//           <Badge status="new">Draft</Badge>
//         </div>
//       }
//       primaryAction={<Button primary>Publish</Button>}
//     >
//       {/* Tabs Section */}
//       <div style={{ marginBottom: "20px" }}>
//         <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
//       </div>

//       <Grid>
//         <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 5, xl: 5 }}>
//           <LegacyCard>
//             {/* Left Side: Form Inputs */}
//             <div className="form-container">
//               <Card.Section>
//                 {selectedTab === 0 && (
//                   <FormLayout>
//                     <FormLayout.Group>
//                       <Stack vertical>
//                         <h1 className="BadgeCls">Badge type</h1>
//                         <RadioButton
//                           label="Single banner"
//                           checked={badgeType === "single-banner"}
//                           id="singleBanner"
//                           name="badgeType"
//                           onChange={() => setBadgeType("single-banner")}
//                         />
//                         <RadioButton
//                           label="Icon block"
//                           checked={badgeType === "icon-block"}
//                           id="iconBlock"
//                           name="badgeType"
//                           onChange={() => setBadgeType("icon-block")}
//                         />
//                         <RadioButton
//                           label="Payment icons"
//                           checked={badgeType === "payment-icons"}
//                           id="paymentIcons"
//                           name="badgeType"
//                           onChange={() => setBadgeType("payment-icons")}
//                         />
//                       </Stack>
//                     </FormLayout.Group>

//                     <TextField
//                       label="Badge name"
//                       value={badgeName}
//                       onChange={(value) => setBadgeName(value)}
//                       helpText="Only visible to you. For your own internal reference."
//                     />

//                     <TextField
//                       label="Title"
//                       value={title}
//                       onChange={(value) => setTitle(value)}
//                     />

//                     <TextField
//                       label="Subheading"
//                       value={subheading}
//                       onChange={(value) => setSubheading(value)}
//                     />

//                     <div className="icon-upload-section">
//                       <p>Icon</p>
//                       <div className="icon-preview">
//                         <IconSelector onIconSelect={handleIconSelect} />
//                         {selectedIcon ? (
//                           <Thumbnail size="Large" source={selectedIcon} alt="banner icon" />
//                         ) : (
//                           <div className="upload-placeholder">Upload Icon</div>
//                         )}
//                       </div>
//                       <div className="icon-upload-buttons">
//                         <Button outline fullWidth onClick={() => setSelectedIcon(null)}>
//                           Remove icon
//                         </Button>
//                         <Button outline fullWidth onClick={handleUploadClick}>
//                           Upload Icon
//                         </Button>
//                       </div>
//                       <p className="available-plan-info">
//                         Available with Starter plan. <a href="#">Upgrade now</a>
//                       </p>
//                     </div>

//                     <Select
//                       label="Call to action"
//                       value={cta}
//                       onChange={(value) => setCta(value)}
//                       options={[
//                         { label: "No call to action", value: "no-cta" },
//                         { label: "Button", value: "button-cta" },
//                         { label: "Whole banner clickable", value: "clickable-banner-cta" },
//                       ]}
//                     />

//                     <div className="translations-section">
//                       <Stack>
//                         <Stack.Item>
//                           <span className="Polaris-TextStyle--variationStrong">Translations</span>
//                         </Stack.Item>
//                         <Stack.Item>
//                           <Badge status="info">
//                             <span className="Polaris-Text--root Polaris-Text--bodySm">Essential plan</span>
//                           </Badge>
//                         </Stack.Item>
//                       </Stack>
//                     </div>

//                     <Button fullWidth onClick={() => { }}>
//                       Add translation
//                     </Button>
//                   </FormLayout>
//                 )}
//                 {selectedTab === 1 && <div>Design tab content goes here</div>}
//                 {selectedTab === 2 && <div>Placement tab content goes here</div>}
//               </Card.Section>
//             </div>
//           </LegacyCard>
//         </Grid.Cell>

//         <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}>
//           <LegacyCard>
//             {/* Right Side: Output/Preview */}
//             <div className="output-container" style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
//               {selectedIcon ? (
//                 <Thumbnail size="Large" source={selectedIcon} alt="banner icon" />
//               ) : (
//                 <div className="upload-placeholder"></div>
//               )}
//               <h4 className="titleCls">{title}</h4>
//               <p className="subHeadCls">{subheading}</p>
//             </div>
//           </LegacyCard>
//         </Grid.Cell>
//       </Grid>

//       {isUploadVisible && (
//         <Popover
//           active
//           onClose={handleUploadClose}
//           content={
//             <div>
//               <p>Upload Icon</p>
//               {/* Add your upload component here */}
//               <Button onClick={handleUploadClose}>Close</Button>
//             </div>
//           }
//         >
//           <Button onClick={handleUploadClick}>Upload Icon</Button>
//         </Popover>
//       )}
//     </Page>
//   );
// }

// export default BadgeEditor;


// working code till 14/10/2024

import {
  Page,
  Card,
  Tabs,
  Button,
  FormLayout,
  TextField,
  Badge,
  RadioButton,
  Stack,
  Select,
  Thumbnail,
  Grid,
  LegacyCard,
  Link,
  LegacyStack,
  Text,
} from "@shopify/polaris";
import { useState } from "react";
import IconSelector from "./IconSelector"; // Import the IconSelector component
import "./BadgeEditor.css";
import Design from "./Design"; // Import the Design component
import Placement from "./Placement"; // Import the Placement component

function BadgeEditor({ onBackClick }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [badgeType, setBadgeType] = useState("icon-block");
  const [badgeName, setBadgeName] = useState("Your badge");
  const [title, setTitle] = useState("Free Shipping");
  const [subheading, setSubheading] = useState("Delivered to Your doorstep, on us!");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [cta, setCta] = useState("no-cta");
  const [iconModalActive, setIconModalActive] = useState(false);

  const handleTabChange = (selectedTabIndex) => setSelectedTab(selectedTabIndex);

  const tabs = [
    { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
    { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
    { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
  ];

  // Toggle the icon selector modal
  const toggleIconModal = () => setIconModalActive(!iconModalActive);

  // Handle icon selection
  const handleIconSelect = (icon) => {
    setSelectedIcon(icon); // Set the selected icon
    setIconModalActive(false); // Close modal after selecting an icon
  };

  // Remove the selected icon
  const removeIcon = () => {
    setSelectedIcon(null);
  };

  // Redirect to the Design tab
  const handleContinueToDesign = () => {
    setSelectedTab(1); // Change to Design tab
  };


  return (
    <Page
      title={
        <div className="Polaris-Box topBox">
          <div className="breadcrumbs">
            <button
              className="Polaris-Button"
              type="button"
              onClick={onBackClick}
              style={{
                border: '1px solid #c4cdd5',
                borderRadius: '4px',
                padding: '5px',
                backgroundColor: '#f4f6f8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: 'rgb(97, 106, 117)',
                  transition: 'fill 0.3s ease',
                }}
                className="back-arrow"
              >
                <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
              </svg>
            </button>
          </div>
          <h1 className="Polaris-Text--root Polaris-Text--headingLg title" style={{ marginRight: 8 }}>
            {badgeName}
          </h1>
          <Badge status="new">Draft</Badge>
        </div>
      }
      primaryAction={<Button primary>Publish</Button>}
    >
      {/* Tabs Section */}
      <div style={{ marginBottom: "20px" }}>
        <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
      </div>

      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 5, xl: 5 }}>
          <LegacyCard>
            {/* Left Side: Form Inputs */}
            <div className="form-container">
              <Card.Section>
                {selectedTab === 0 && (
                  <FormLayout>
                    <FormLayout.Group>
                      <Stack vertical>
                        <h1 className="BadgeCls">Badge type</h1>
                        <RadioButton
                          label="Single banner"
                          checked={badgeType === "single-banner"}
                          id="singleBanner"
                          name="badgeType"
                          onChange={() => setBadgeType("single-banner")}
                        />
                        <RadioButton
                          label="Icon block"
                          checked={badgeType === "icon-block"}
                          id="iconBlock"
                          name="badgeType"
                          onChange={() => setBadgeType("icon-block")}
                        />
                        <RadioButton
                          label="Payment icons"
                          checked={badgeType === "payment-icons"}
                          id="paymentIcons"
                          name="badgeType"
                          onChange={() => setBadgeType("payment-icons")}
                        />
                      </Stack>
                    </FormLayout.Group>

                    <TextField
                      label="Badge name"
                      value={badgeName}
                      onChange={(value) => setBadgeName(value)}
                      helpText="Only visible to you. For your own internal reference."
                    />

                    <TextField
                      label="Title"
                      value={title}
                      onChange={(value) => setTitle(value)}
                    />

                    <TextField
                      label="Subheading"
                      value={subheading}
                      onChange={(value) => setSubheading(value)}
                    />


                    <LegacyStack vertical spacing="tight">
                      {/* Icon Label */}
                      <LegacyStack.Item>
                        <p className="Polaris-Text--root">Icon</p>
                      </LegacyStack.Item>

                      {/* Icon Preview and Action Buttons */}
                      <LegacyStack.Item>
                        <LegacyStack spacing="baseTight" distribution="leading">
                          {/* Icon Placeholder or Selected Icon */}
                          <LegacyStack.Item>
                            <div
                              className={`icon-preview ${selectedIcon ? 'selected' : ''}`}
                              onClick={toggleIconModal}
                              style={{ cursor: 'pointer' }}
                            >
                              {selectedIcon ? (
                                <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">{selectedIcon.icon}</span>
                              ) : (
                                <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
                                  <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
                                  <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                    <path d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z"></path>
                                  </svg>
                                </span>
                              )}
                            </div>
                          </LegacyStack.Item>

                          {/* Buttons Section */}
                          <LegacyStack.Item fill>
                            <LegacyStack vertical spacing="extraTight" distribution="center">
                              {/* Select or remove button */}
                              <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
                                <Button
                                  onClick={selectedIcon ? removeIcon : toggleIconModal}
                                  fullWidth
                                >
                                  {selectedIcon ? 'Remove Icon' : 'Select Icon'}
                                </Button>
                              </div>

                              {/* Disabled Upload Button */}
                              <LegacyStack.Item>
                                <Button fullWidth outline disabled>
                                  Upload Icon
                                </Button>
                              </LegacyStack.Item>

                              {/* Upgrade Plan Info */}
                              <LegacyStack.Item>
                                <Text variant="bodySm" color="subdued">
                                  Available with Starter plan. <Link>Upgrade now.</Link>
                                </Text>
                              </LegacyStack.Item>
                            </LegacyStack>
                          </LegacyStack.Item>
                        </LegacyStack>
                      </LegacyStack.Item>
                    </LegacyStack>

                    {/* Modal for Icon Selector */}
                    <IconSelector
                      active={iconModalActive}
                      toggleModal={toggleIconModal}
                      onIconSelect={handleIconSelect}
                    />


                    <Select
                      label="Call to action"
                      value={cta}
                      onChange={(value) => setCta(value)}
                      options={[
                        { label: "No call to action", value: "no-cta" },
                        { label: "Button", value: "button-cta" },
                        { label: "Whole banner clickable", value: "clickable-banner-cta" },
                      ]}
                    />

                    <div className="translations-section">
                      <Stack>
                        <Stack.Item>
                          <span className="Polaris-TextStyle--variationStrong">Translations</span>
                        </Stack.Item>
                        <Stack.Item>
                          <Badge status="info">
                            <span className="Polaris-Text--root Polaris-Text--bodySm">Essential plan</span>
                          </Badge>
                        </Stack.Item>
                      </Stack>
                    </div>

                    <Button fullWidth onClick={() => { }}>
                      Add translation
                    </Button>

                    {/* Continue to Design Tab Button */}
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                      <button
                        className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
                        type="button"
                        onClick={handleContinueToDesign}
                      >
                        <span className="Polaris-Button__Content">
                          <span className="Polaris-Button__Icon">
                            <span className="Polaris-Icon">
                              <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
                              <svg
                                viewBox="0 0 20 20"
                                className="Polaris-Icon__Svg"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <path d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
                              </svg>
                            </span>
                          </span>
                          <span className="Polaris-Button__Text">Continue to design</span>
                        </span>
                      </button>
                    </div>
                  </FormLayout>
                )}
                {selectedTab === 1 && <Design />} {/* Render the Design component */}
                {selectedTab === 2 && <Placement />} {/* Render the Placement component */}

              </Card.Section>
            </div>
          </LegacyCard>
        </Grid.Cell>

        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}>
          <LegacyCard>
            {/* Right Side: Output/Preview */}
            <div
              className="output-container"
              style={{
                padding: selectedIcon ? "0" : "20px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "2px",
              }}
            >
              {selectedIcon ? (
                <div
                  className={`Polaris-Thumbnail Polaris-Thumbnail--sizeLarge ${selectedIcon ? "no-border" : ""}`}
                  style={selectedIcon ? { border: "none" } : {}}
                >
                  {selectedIcon.icon}
                </div>
              ) : (
                <div className="upload-placeholder"></div>
              )}
              <div>
                <h4 className="output-title">{title}</h4>
                <p className="output-subheading">{subheading}</p>
              </div>
            </div>
          </LegacyCard>

        </Grid.Cell>
      </Grid>
    </Page>
  );
}

export default BadgeEditor;




// This is Testing code for Code of contant.jsx in Diffrent file and call in this file
// BadgeEditor.jsx
// import {
//   Page,
//   Card,
//   Tabs,
//   Button,
//   Grid,
//   LegacyCard,
//   Badge,
//   Stack,
// } from "@shopify/polaris";
// import { useState } from "react";
// import IconSelector from "./IconSelector"; // Import the IconSelector component
// import "./BadgeEditor.css";
// import Design from "./Design"; // Import the Design component
// import Placement from "./Placement"; // Import the Placement component
// import Content from "./Content"; // Import the Content component

// function BadgeEditor({ onBackClick }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [badgeType, setBadgeType] = useState("");
//   const [badgeName, setBadgeName] = useState("");
//   const [title, setTitle] = useState("");
//   const [subheading, setSubheading] = useState("");
//   const [selectedIcon, setSelectedIcon] = useState(null);
//   const [iconModalActive, setIconModalActive] = useState(false);
//   const [cta, setCta] = useState("");

//   const toggleIconModal = () => setIconModalActive(!iconModalActive);

//   const handleIconSelect = (icon) => {
//     setSelectedIcon(icon);
//     toggleIconModal();
//   };

//   const handleContinueToDesign = () => {
//     setSelectedTab(1); // Switch to the design tab
//   };

//   const tabs = [
//     {
//       id: 'content',
//       content: 'Content',
//       accessibilityLabel: 'Content',
//       panelID: 'contentPanel',
//     },
//     {
//       id: 'design',
//       content: 'Design',
//       panelID: 'designPanel',
//     },
//     {
//       id: 'placement',
//       content: 'Placement',
//       panelID: 'placementPanel',
//     },
//   ];

//   return (
//     <Page title="Edit Badge">
//       <Card>
//         <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab}>
//           <div>
//             {selectedTab === 0 && (
//               <Content
//                 badgeType={badgeType}
//                 setBadgeType={setBadgeType}
//                 badgeName={badgeName}
//                 setBadgeName={setBadgeName}
//                 title={title}
//                 setTitle={setTitle}
//                 subheading={subheading}
//                 setSubheading={setSubheading}
//                 selectedIcon={selectedIcon}
//                 setSelectedIcon={setSelectedIcon}
//                 toggleIconModal={toggleIconModal}
//                 iconModalActive={iconModalActive}
//                 handleIconSelect={handleIconSelect}
//                 cta={cta}
//                 setCta={setCta}
//                 handleContinueToDesign={handleContinueToDesign}
//               />
//             )}
//             {selectedTab === 1 && <Design />}
//             {selectedTab === 2 && <Placement />}
//           </div>
//         </Tabs>
//       </Card>
//     </Page>
//   );
// }

// export default BadgeEditor;
