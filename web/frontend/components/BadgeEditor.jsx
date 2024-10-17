// Testing code 15/10/2024 for call to action button  now it is workking code at 15/10/2024

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
//   Link,
//   LegacyStack,
//   Text,
// } from "@shopify/polaris";
// import { useState } from "react";
// import IconSelector from "./IconSelector"; // Import the IconSelector component
// import "./BadgeEditor.css";
// import Design from "./Design"; // Import the Design component
// import Placement from "./Placement"; // Import the Placement component

// import ProductPicker from "./ProductPicker";
// import CollectionPicker from "./CollectionPicker";

// import IconBlock from './IconBlock'; // Import the IconBlock component
// import PaymentIcons from './PaymentIcons'; // Import the PaymentIcons component


// function BadgeEditor({ onBackClick }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [badgeType, setBadgeType] = useState("icon-block");
//   const [badgeName, setBadgeName] = useState("Your badge");
//   const [title, setTitle] = useState("Free Shipping");
//   const [subheading, setSubheading] = useState("Delivered to Your doorstep, on us!");
//   const [selectedIcon, setSelectedIcon] = useState(null);
//   const [cta, setCta] = useState("no-cta");
//   const [buttonText, setButtonText] = useState("Shop Now");
//   const [linkType, setLinkType] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCollection, setSelectedCollection] = useState(null);
//   const [externalUrl, setExternalUrl] = useState("");
//   const [iconModalActive, setIconModalActive] = useState(false);
//   const [isProductPickerOpen, setIsProductPickerOpen] = useState(false);
//   const [isCollectionPickerOpen, setIsCollectionPickerOpen] = useState(false);

//   const handleTabChange = (selectedTabIndex) => setSelectedTab(selectedTabIndex);

//   const tabs = [
//     { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
//     { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
//     { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
//   ];

//   // Toggle the icon selector modal
//   const toggleIconModal = () => setIconModalActive(!iconModalActive);

//   // Handle icon selection
//   const handleIconSelect = (icon) => {
//     setSelectedIcon(icon); // Set the selected icon
//     setIconModalActive(false); // Close modal after selecting an icon
//   };

//   // Remove the selected icon
//   const removeIcon = () => {
//     setSelectedIcon(null);
//   };

//   // Redirect to the Design tab
//   const handleContinueToDesign = () => {
//     setSelectedTab(1); // Change to Design tab
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
//                         {/* <RadioButton
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
//                         /> */}
//                         <RadioButton
//                           label="Icon block"
//                           checked={badgeType === 'icon-block'}
//                           id="iconBlock"
//                           name="badgeType"
//                           onChange={() => setBadgeType('icon-block')}
//                         />
//                         <RadioButton
//                           label="Payment icons"
//                           checked={badgeType === 'payment-icons'}
//                           id="paymentIcons"
//                           name="badgeType"
//                           onChange={() => setBadgeType('payment-icons')}
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

//                     <LegacyStack vertical spacing="tight">
//                       {/* Icon Label */}
//                       <LegacyStack.Item>
//                         <p className="Polaris-Text--root">Icon</p>
//                       </LegacyStack.Item>

//                       {/* Icon Preview and Action Buttons */}
//                       <LegacyStack.Item>
//                         <LegacyStack spacing="baseTight" distribution="leading">
//                           {/* Icon Placeholder or Selected Icon */}
//                           <LegacyStack.Item>
//                             <div
//                               className={`icon-preview ${selectedIcon ? 'selected' : ''}`}
//                               onClick={toggleIconModal}
//                               style={{ cursor: 'pointer' }}
//                             >
//                               {selectedIcon ? (
//                                 <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">{selectedIcon.icon}</span>
//                               ) : (
//                                 <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
//                                   <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                   <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
//                                     <path d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z"></path>
//                                   </svg>
//                                 </span>
//                               )}
//                             </div>
//                           </LegacyStack.Item>

//                           {/* Buttons Section */}
//                           <LegacyStack.Item fill>
//                             <LegacyStack vertical spacing="extraTight" distribution="center">
//                               {/* Select or remove button */}
//                               <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//                                 <Button
//                                   onClick={selectedIcon ? removeIcon : toggleIconModal}
//                                   fullWidth
//                                 >
//                                   {selectedIcon ? 'Remove Icon' : 'Select Icon'}
//                                 </Button>
//                               </div>

//                               {/* Disabled Upload Button */}
//                               <LegacyStack.Item>
//                                 <Button fullWidth outline disabled>
//                                   Upload Icon
//                                 </Button>
//                               </LegacyStack.Item>

//                               {/* Upgrade Plan Info */}
//                               <LegacyStack.Item>
//                                 <Text variant="bodySm" color="subdued">
//                                   Available with Starter plan. <Link>Upgrade now.</Link>
//                                 </Text>
//                               </LegacyStack.Item>
//                             </LegacyStack>
//                           </LegacyStack.Item>
//                         </LegacyStack>
//                       </LegacyStack.Item>
//                     </LegacyStack>

//                     {/* Modal for Icon Selector */}
//                     <IconSelector
//                       active={iconModalActive}
//                       toggleModal={toggleIconModal}
//                       onIconSelect={handleIconSelect}
//                     />

//                     <Select
//                       label="Call to action"
//                       value={cta}
//                       onChange={(value) => {
//                         setCta(value);
//                         setButtonText("Shop Now");
//                         setLinkType("");
//                         setSelectedProduct(null);
//                         setSelectedCollection(null);
//                         setExternalUrl("");
//                       }}
//                       options={[
//                         { label: "No call to action", value: "no-cta" },
//                         { label: "Button", value: "button-cta" },
//                         { label: "Whole banner clickable", value: "clickable-banner-cta" },
//                       ]}
//                     />

//                     {cta === "button-cta" || cta === "clickable-banner-cta" ? (
//                       <>
//                         {cta !== "clickable-banner-cta" && (
//                           <TextField
//                             className="button-text-field"
//                             label="Button text"
//                             value={buttonText}
//                             onChange={(value) => setButtonText(value)}
//                           />
//                         )}

//                         <div className="Polaris-FormLayout__Item">
//                           <fieldset className="Polaris-VerticalStack Polaris-VerticalStack--fieldsetReset" aria-invalid="false" style={{ "--pc-vertical-stack-order": "column", "--pc-vertical-stack-gap-xs": "var(--p-space-4)", "--pc-vertical-stack-gap-md": "var(--p-space-0)" }}>
//                             <legend className="Polaris-Box" style={{ "--pc-box-padding-block-end-xs": "var(--p-space-5)", "--pc-box-padding-block-end-md": "var(--p-space-1)" }}>
//                               Link to
//                             </legend>
//                             <ul className="Polaris-VerticalStack Polaris-VerticalStack--listReset" style={{ "--pc-vertical-stack-order": "column", "--pc-vertical-stack-gap-xs": "var(--p-space-4)", "--pc-vertical-stack-gap-md": "var(--p-space-0)" }}>
//                               <li>
//                                 <div className="Polaris-Bleed" style={{ "--pc-bleed-margin-block-end-xs": "var(--p-space-0)" }}>
//                                   <label className="Polaris-Choice" htmlFor="PolarisRadioButton50">
//                                     <span className="Polaris-Choice__Control">
//                                       <span className="Polaris-RadioButton">
//                                         <input
//                                           id="PolarisRadioButton50"
//                                           name="PolarisChoiceList13"
//                                           type="radio"
//                                           className="Polaris-RadioButton__Input"
//                                           value="product"
//                                           checked={linkType === "product"}
//                                           onChange={() => setLinkType("product")}
//                                         />
//                                         <span className="Polaris-RadioButton__Backdrop"></span>
//                                       </span>
//                                     </span>
//                                     <span className="Polaris-Choice__Label">
//                                       <span>Product page</span>
//                                     </span>
//                                   </label>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="Polaris-Bleed" style={{ "--pc-bleed-margin-block-end-xs": "var(--p-space-0)" }}>
//                                   <label className="Polaris-Choice" htmlFor="PolarisRadioButton51">
//                                     <span className="Polaris-Choice__Control">
//                                       <span className="Polaris-RadioButton">
//                                         <input
//                                           id="PolarisRadioButton51"
//                                           name="PolarisChoiceList13"
//                                           type="radio"
//                                           className="Polaris-RadioButton__Input"
//                                           value="collection"
//                                           checked={linkType === "collection"}
//                                           onChange={() => setLinkType("collection")}
//                                         />
//                                         <span className="Polaris-RadioButton__Backdrop"></span>
//                                       </span>
//                                     </span>
//                                     <span className="Polaris-Choice__Label">
//                                       <span>Collection page</span>
//                                     </span>
//                                   </label>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="Polaris-Bleed" style={{ "--pc-bleed-margin-block-end-xs": "var(--p-space-0)" }}>
//                                   <label className="Polaris-Choice" htmlFor="PolarisRadioButton52">
//                                     <span className="Polaris-Choice__Control">
//                                       <span className="Polaris-RadioButton">
//                                         <input
//                                           id="PolarisRadioButton52"
//                                           name="PolarisChoiceList13"
//                                           type="radio"
//                                           className="Polaris-RadioButton__Input"
//                                           value="external"
//                                           checked={linkType === "external"}
//                                           onChange={() => setLinkType("external")}
//                                         />
//                                         <span className="Polaris-RadioButton__Backdrop"></span>
//                                       </span>
//                                     </span>
//                                     <span className="Polaris-Choice__Label">
//                                       <span>External page</span>
//                                     </span>
//                                   </label>
//                                 </div>
//                               </li>
//                             </ul>
//                           </fieldset>
//                         </div>

//                         <div className="Polaris-FormLayout__Item">
//                           {linkType === "product" && (
//                             <Button onClick={() => setIsProductPickerOpen(true)} fullWidth>
//                               <span className="Polaris-Button__Content">
//                                 <span className="Polaris-Button__Icon">
//                                   <span className="Polaris-Icon">
//                                     <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                     <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="m2.606 5.434 3-2.876a2.019 2.019 0 0 1 2.788 0l3 2.876c.387.372.606.883.606 1.416v2.15c-2.838.47-5 3.104-5 6.038v2.962h-3c-1.105 0-2-.884-2-1.974v-9.176c0-.533.219-1.044.606-1.416Zm4.394 1.566a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.5a1 1 0 0 1-1.414-1.415l.793-.793h-1.586c-1.105 0-2 .482-2 1.429v2.714c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.714c0-1.894 1.79-3.429 4-3.429h1.586l-.793-.793a1 1 0 0 1 0-1.414Z"></path></svg>
//                                   </span>
//                                 </span>
//                                 <span className="Polaris-Button__Text">Select Product</span>
//                               </span>
//                             </Button>
//                           )}
//                           {linkType === "collection" && (
//                             <Button onClick={() => setIsCollectionPickerOpen(true)} fullWidth>
//                               <span className="Polaris-Button__Content">
//                                 <span className="Polaris-Button__Icon">
//                                   <span className="Polaris-Icon">
//                                     <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                     <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="m6.172 3.171-2 2a4 4 0 0 0-1.172 2.829v7.171a2 2 0 0 1-2-2v-7.171a2 2 0 0 1 .586-1.414l2-2a2 2 0 0 1 2.828 0l.202.201a4.034 4.034 0 0 0-.444.384Zm8.621 4.794a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.499a1 1 0 0 1-1.414-1.414l.793-.793h-1.586c-1.105 0-2 .482-2 1.428v2.715c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.715c0-1.893 1.79-3.428 4-3.428h1.586l-.793-.793a1 1 0 0 1 0-1.414Z"></path><path fill-rule="evenodd" d="m5.586 6.586 2-2a2 2 0 0 1 2.828 0l2 2a2 2 0 0 1 .586 1.414v.255a6.002 6.002 0 0 0-5 5.917v3h-1a2 2 0 0 1-2-2v-7.172a2 2 0 0 1 .586-1.414Zm4.121 1.293a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z"></path></svg>
//                                   </span>
//                                 </span>
//                                 <span className="Polaris-Button__Text">Select Collection</span>
//                               </span>
//                             </Button>
//                           )}
//                           {linkType === "external" && (
//                             <TextField
//                               label="URL"
//                               value={externalUrl}
//                               onChange={(value) => setExternalUrl(value)}
//                             />
//                           )}
//                         </div>

//                         <ProductPicker
//                           isOpen={isProductPickerOpen}
//                           onSelectProduct={setSelectedProduct}
//                           onClose={() => setIsProductPickerOpen(false)}
//                         />
//                         <CollectionPicker
//                           isOpen={isCollectionPickerOpen}
//                           onSelectCollection={setSelectedCollection}
//                           onClose={() => setIsCollectionPickerOpen(false)}
//                         />
//                       </>
//                     ) : null}

//                     {selectedProduct && (
//                       <div className="Polaris-FormLayout__Item">
//                         <div className="Polaris-LegacyCard">
//                           <div className="Polaris-LegacyCard__Section">
//                             <div className="Polaris-LegacyStack">
//                               <div className="Polaris-LegacyStack__Item">
//                                 <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                                   <img className="productImgCls"
//                                     alt={selectedProduct.title}
//                                     src={selectedProduct.images[0]?.originalSrc}
//                                   />
//                                 </span>
//                               </div>
//                               <div className="Polaris-LegacyStack__Item">
//                                 <div className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                                   <div className="Polaris-LegacyStack__Item">
//                                     <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                                       {selectedProduct.title}
//                                     </p>
//                                   </div>
//                                   <div className="Polaris-LegacyStack__Item">
//                                     <p className="Polaris-Text--root Polaris-Text--bodySm">
//                                       {selectedProduct.handle}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="Polaris-LegacyCard__Footer">
//                             <div className="Polaris-ButtonGroup">
//                               <div className="Polaris-ButtonGroup__Item">
//                                 <button
//                                   className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                                   type="button"
//                                   onClick={() => setSelectedProduct(null)}
//                                 >
//                                   <span className="Polaris-Button__Content">
//                                     <span className="Polaris-Button__Text">Remove</span>
//                                   </span>
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     {selectedCollection && (
//                       <div className="Polaris-FormLayout__Item">
//                         <div className="Polaris-LegacyCard">
//                           <div className="Polaris-LegacyCard__Section">
//                             <div className="Polaris-LegacyStack">
//                               <div className="Polaris-LegacyStack__Item">
//                                 <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                                   <img className="collectionImgCls"
//                                     alt={selectedCollection.title}
//                                     src={selectedCollection.image?.originalSrc}
//                                   />
//                                 </span>
//                               </div>
//                               <div className="Polaris-LegacyStack__Item">
//                                 <div className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                                   <div className="Polaris-LegacyStack__Item">
//                                     <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                                       {selectedCollection.title}
//                                     </p>
//                                   </div>
//                                   <div className="Polaris-LegacyStack__Item">
//                                     <p className="Polaris-Text--root Polaris-Text--bodySm">
//                                       {selectedCollection.handle}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="Polaris-LegacyCard__Footer">
//                             <div className="Polaris-ButtonGroup">
//                               <div className="Polaris-ButtonGroup__Item">
//                                 <button
//                                   className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                                   type="button"
//                                   onClick={() => setSelectedCollection(null)}
//                                 >
//                                   <span className="Polaris-Button__Content">
//                                     <span className="Polaris-Button__Text">Remove</span>
//                                   </span>
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}

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

//                     {/* Continue to Design Tab Button */}
//                     <div style={{ textAlign: "center", marginTop: "20px" }}>
//                       <button
//                         className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
//                         type="button"
//                         onClick={handleContinueToDesign}
//                       >
//                         <span className="Polaris-Button__Content">
//                           <span className="Polaris-Button__Icon">
//                             <span className="Polaris-Icon">
//                               <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                               <svg
//                                 viewBox="0 0 20 20"
//                                 className="Polaris-Icon__Svg"
//                                 focusable="false"
//                                 aria-hidden="true"
//                               >
//                                 <path d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
//                               </svg>
//                             </span>
//                           </span>
//                           <span className="Polaris-Button__Text">Continue to design</span>
//                         </span>
//                       </button>
//                     </div>
//                   </FormLayout>
//                 )}
//                 {selectedTab === 1 && <Design />} {/* Render the Design component */}
//                 {selectedTab === 2 && <Placement />} {/* Render the Placement component */}
//               </Card.Section>
//             </div>
//           </LegacyCard>
//         </Grid.Cell>

//         <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}>
//           <LegacyCard>
//             {/* Output/Preview Section */}
//             <div className="badge-output-container">
//               {selectedIcon ? (
//                 <div className="badge-icon">{selectedIcon.icon}</div>
//               ) : (
//                 <div className="icon-placeholder"></div>
//               )}
//               <div className="badge-text">
//                 <h2 className="badge-title">{title}</h2>
//                 <h3 className="badge-subheading">{subheading}</h3>
//               </div>
//               {cta === "button-cta" && (
//                 <button className="badge-button">{buttonText}</button>
//               )}
//               {cta === "clickable-banner-cta" && (
//                 <div className="output-banner">
//                 </div>
//               )}
//             </div>

//           </LegacyCard>
//         </Grid.Cell>
//       </Grid>
//     </Page>
//   );
// }

// export default BadgeEditor;







// Testing code on 17/10/2024 for Icon block, Payment icons pages in Badge Editor an dthe only in this code the dynamic part is not working


// import React, { useState } from "react";
// import {
//   Page,
//   Card,
//   Tabs,
//   Button,
//   FormLayout,
//   Badge,
//   RadioButton,
//   Stack,
//   Grid,
//   LegacyCard,
//   TextField,
// } from "@shopify/polaris";
// import "./BadgeEditor.css";
// import SingleBanner from "./SingleBanner";
// import IconBlock from "./IconBlock";
// import PaymentIcons from "./PaymentIcons";
// import IconSelector from "./IconSelector"; // Import the IconSelector component
// import ProductPicker from "./ProductPicker";
// import CollectionPicker from "./CollectionPicker";
// import Design from "./Design"; // Import the Design component
// import Placement from "./Placement"; // Import the Placement component

// function BadgeEditor({ onBackClick }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [badgeType, setBadgeType] = useState("icon-block");
//   const [badgeName, setBadgeName] = useState("Your badge");

//   // Consolidated state
//   const [state, setState] = useState({
//     title: "Free Shipping",
//     subheading: "Delivered to Your doorstep, on us!",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   });

//   console.log("Current state:", state);

//   const handleTabChange = (selectedTabIndex) => {
//     console.log("Tab changed to:", selectedTabIndex);
//     setSelectedTab(selectedTabIndex);
//   };

//   const tabs = [
//     { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
//     { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
//     { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
//   ];

//   const toggleIconModal = () => {
//     console.log("Icon modal toggled");
//     setState((prevState) => ({ ...prevState, iconModalActive: !prevState.iconModalActive }));
//   };

//   const handleIconSelect = (icon) => {
//     console.log("Icon selected:", icon);
//     setState((prevState) => ({
//       ...prevState,
//       selectedIcon: icon,
//       iconModalActive: false,
//     }));
//   };

//   const removeIcon = () => {
//     console.log("Icon removed");
//     setState((prevState) => ({
//       ...prevState,
//       selectedIcon: null,
//     }));
//   };

//   const handleContinueToDesign = () => {
//     console.log("Continue to Design tab");
//     setSelectedTab(1);
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
//                 border: "1px solid #c4cdd5",
//                 borderRadius: "4px",
//                 padding: "5px",
//                 backgroundColor: "#f4f6f8",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 style={{
//                   fill: "rgb(97, 106, 117)",
//                   transition: "fill 0.3s ease",
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
//             <Card.Section>
//               {selectedTab === 0 && (
//                 <FormLayout>
//                   <FormLayout.Group>
//                     <Stack vertical>
//                       <h1 className="BadgeCls">Badge type</h1>
//                       <RadioButton
//                         label="Single banner"
//                         checked={badgeType === "single-banner"}
//                         id="singleBanner"
//                         name="badgeType"
//                         onChange={() => {
//                           console.log("Badge type changed to: Single banner");
//                           setBadgeType("single-banner");
//                         }}
//                       />
//                       <RadioButton
//                         label="Icon block"
//                         checked={badgeType === "icon-block"}
//                         id="iconBlock"
//                         name="badgeType"
//                         onChange={() => {
//                           console.log("Badge type changed to: Icon block");
//                           setBadgeType("icon-block");
//                         }}
//                       />
//                       <RadioButton
//                         label="Payment icons"
//                         checked={badgeType === "payment-icons"}
//                         id="paymentIcons"
//                         name="badgeType"
//                         onChange={() => {
//                           console.log("Badge type changed to: Payment icons");
//                           setBadgeType("payment-icons");
//                         }}
//                       />
//                       <TextField
//                         label="Badge name"
//                         value={badgeName}
//                         onChange={(value) => {
//                           console.log("Badge name changed to:", value);
//                           setBadgeName(value);
//                         }}
//                         helpText="Only visible to you. For your own internal reference."
//                       />
//                     </Stack>

//                     {badgeType === "icon-block" && (
//                       <IconBlock
//                         {...state}
//                         setTitle={(value) => {
//                           console.log("Title changed to:", value);
//                           setState((prevState) => ({ ...prevState, title: value }));
//                         }}
//                         setSubheading={(value) => {
//                           console.log("Subheading changed to:", value);
//                           setState((prevState) => ({ ...prevState, subheading: value }));
//                         }}
//                         setButtonText={(value) => {
//                           console.log("Button text changed to:", value);
//                           setState((prevState) => ({ ...prevState, buttonText: value }));
//                         }}
//                         setLinkType={(value) => {
//                           console.log("Link type changed to:", value);
//                           setState((prevState) => ({ ...prevState, linkType: value }));
//                         }}
//                         setExternalUrl={(value) => {
//                           console.log("External URL changed to:", value);
//                           setState((prevState) => ({ ...prevState, externalUrl: value }));
//                         }}
//                         setSelectedIcon={handleIconSelect}
//                         setCta={(value) => {
//                           console.log("CTA changed to:", value);
//                           setState((prevState) => ({ ...prevState, cta: value }));
//                         }}
//                         setSelectedProduct={(value) => {
//                           console.log("Selected product changed to:", value);
//                           setState((prevState) => ({ ...prevState, selectedProduct: value }));
//                         }}
//                         setSelectedCollection={(value) => {
//                           console.log("Selected collection changed to:", value);
//                           setState((prevState) => ({ ...prevState, selectedCollection: value }));
//                         }}
//                         toggleIconModal={toggleIconModal}
//                         setIconModalActive={toggleIconModal}
                        
//                         setIsProductPickerOpen={(value) => {
//                           console.log("Product picker open state changed to:", value);
//                           setState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
//                         }}
//                         setIsCollectionPickerOpen={(value) => {
//                           console.log("Collection picker open state changed to:", value);
//                           setState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
//                         }}
//                       />
//                     )}

//                     {badgeType === "payment-icons" && (
//                       <PaymentIcons
//                         {...state}
//                         setTitle={(value) => {
//                           console.log("Title changed to:", value);
//                           setState((prevState) => ({ ...prevState, title: value }));
//                         }}
//                         setSubheading={(value) => {
//                           console.log("Subheading changed to:", value);
//                           setState((prevState) => ({ ...prevState, subheading: value }));
//                         }}
//                         setButtonText={(value) => {
//                           console.log("Button text changed to:", value);
//                           setState((prevState) => ({ ...prevState, buttonText: value }));
//                         }}
//                         setLinkType={(value) => {
//                           console.log("Link type changed to:", value);
//                           setState((prevState) => ({ ...prevState, linkType: value }));
//                         }}
//                         setExternalUrl={(value) => {
//                           console.log("External URL changed to:", value);
//                           setState((prevState) => ({ ...prevState, externalUrl: value }));
//                         }}
//                         setSelectedIcon={handleIconSelect}
//                         setCta={(value) => {
//                           console.log("CTA changed to:", value);
//                           setState((prevState) => ({ ...prevState, cta: value }));
//                         }}
//                         setSelectedProduct={(value) => {
//                           console.log("Selected product changed to:", value);
//                           setState((prevState) => ({ ...prevState, selectedProduct: value }));
//                         }}
//                         setSelectedCollection={(value) => {
//                           console.log("Selected collection changed to:", value);
//                           setState((prevState) => ({ ...prevState, selectedCollection: value }));
//                         }}
//                         toggleIconModal={toggleIconModal}
//                         setIconModalActive={toggleIconModal}
//                         setIsProductPickerOpen={(value) => {
//                           console.log("Product picker open state changed to:", value);
//                           setState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
//                         }}
//                         setIsCollectionPickerOpen={(value) => {
//                           console.log("Collection picker open state changed to:", value);
//                           setState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
//                         }}
//                       />
//                     )}

//                     {badgeType === "single-banner" && (
//                       <SingleBanner
//                         {...state}
//                         setTitle={(value) => {
//                           console.log("Title changed to:", value);
//                           setState((prevState) => ({ ...prevState, title: value }));
//                         }}
//                         setSubheading={(value) => {
//                           console.log("Subheading changed to:", value);
//                           setState((prevState) => ({ ...prevState, subheading: value }));
//                         }}
//                         setButtonText={(value) => {
//                           console.log("Button text changed to:", value);
//                           setState((prevState) => ({ ...prevState, buttonText: value }));
//                         }}
//                         setLinkType={(value) => {
//                           console.log("Link type changed to:", value);
//                           setState((prevState) => ({ ...prevState, linkType: value }));
//                         }}
//                         setExternalUrl={(value) => {
//                           console.log("External URL changed to:", value);
//                           setState((prevState) => ({ ...prevState, externalUrl: value }));
//                         }}
//                         setSelectedIcon={handleIconSelect}
//                         setCta={(value) => {
//                           console.log("CTA changed to:", value);
//                           setState((prevState) => ({ ...prevState, cta: value }));
//                         }}
//                         setSelectedProduct={(value) => {
//                           console.log("Selected product changed to:", value);
//                           setState((prevState) => ({ ...prevState, selectedProduct: value }));
//                         }}
//                         setSelectedCollection={(value) => {
//                           console.log("Selected collection changed to:", value);
//                           setState((prevState) => ({ ...prevState, selectedCollection: value }));
//                         }}
//                         toggleIconModal={toggleIconModal}
//                         setIconModalActive={toggleIconModal}
//                         setIsProductPickerOpen={(value) => {
//                           console.log("Product picker open state changed to:", value);
//                           setState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
//                         }}
//                         setIsCollectionPickerOpen={(value) => {
//                           console.log("Collection picker open state changed to:", value);
//                           setState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
//                         }}
//                       />
//                     )}
//                     {/* Continue to Design Tab Button */}
//                     <div style={{ textAlign: "center" }}>
//                       <button
//                         className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
//                         type="button"
//                         onClick={handleContinueToDesign}
//                       >
//                         <span className="Polaris-Button__Content">
//                           <span className="Polaris-Button__Icon">
//                             <span className="Polaris-Icon">
//                               <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                               <svg
//                                 viewBox="0 0 20 20"
//                                 className="Polaris-Icon__Svg"
//                                 focusable="false"
//                                 aria-hidden="true"
//                               >
//                                 <path d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
//                               </svg>
//                             </span>
//                           </span>
//                           <span className="Polaris-Button__Text">Continue to design</span>
//                         </span>
//                       </button>
//                     </div>
//                   </FormLayout.Group>
//                 </FormLayout>
//               )}
//               {selectedTab === 1 && (
//                 <Design
//                   title={state.title}
//                 />
//               )}
//               {selectedTab === 2 && (
//                 <Placement
//                   badgeType={badgeType}
//                 />
//               )}
//             </Card.Section>
//           </LegacyCard>
//         </Grid.Cell>
//         <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}>
//           <LegacyCard>
//             {/* Output/Preview Section */}
//             {badgeType === "single-banner" && (
//               <div className="badge-output-container">
//                 {state.selectedIcon ? (
//                   <div className="badge-icon">{state.selectedIcon.icon}</div>
//                 ) : (
//                   <div className="icon-placeholder"></div>
//                 )}
//                 <div className="badge-text">
//                   <h2 className="badge-title">{state.title}</h2>
//                   <h3 className="badge-subheading">{state.subheading}</h3>
//                 </div>
//                 {state.cta === "button-cta" && (
//                   <button className="badge-button">{state.buttonText}</button>
//                 )}
//                 {state.cta === "clickable-banner-cta" && (
//                   <div className="output-banner">
//                   </div>
//                 )}
//               </div>
//             )}

//             {badgeType === "icon-block" && (
//               <div className="badge-output-container">
//                 {state.selectedIcon ? (
//                   <div className="badge-icon">{state.selectedIcon.icon}</div>
//                 ) : (
//                   <div className="icon-placeholder"></div>
//                 )}
//                 <div className="badge-text">
//                   <h2 className="badge-title">{state.title}</h2>
//                   <h3 className="badge-subheading">{state.subheading}</h3>
//                 </div>
//                 {state.cta === "button-cta" && (
//                   <button className="badge-button">{state.buttonText}</button>
//                 )}
//                 {state.cta === "clickable-banner-cta" && (
//                   <div className="output-banner">
//                   </div>
//                 )}
//               </div>
//             )}

//             {badgeType === "payment-icons" && (
//               <div className="badge-output-container">
//                 {state.selectedIcon ? (
//                   <div className="badge-icon">{state.selectedIcon.icon}</div>
//                 ) : (
//                   <div className="icon-placeholder"></div>
//                 )}
//                 <div className="badge-text">
//                   <h2 className="badge-title">{state.title}</h2>
//                   <h3 className="badge-subheading">{state.subheading}</h3>
//                 </div>
//                 {state.cta === "button-cta" && (
//                   <button className="badge-button">{state.buttonText}</button>
//                 )}
//                 {state.cta === "clickable-banner-cta" && (
//                   <div className="output-banner">
//                   </div>
//                 )}
//               </div>
//             )}
//           </LegacyCard>
//         </Grid.Cell>
//       </Grid>
//     </Page>
//   );
// }

// export default BadgeEditor;




// fine working only icon is not selected


// import React, { useState } from "react";
// import {
//   Page,
//   Card,
//   Tabs,
//   Button,
//   FormLayout,
//   Badge,
//   RadioButton,
//   Stack,
//   Grid,
//   LegacyCard,
//   TextField,
// } from "@shopify/polaris";
// import "./BadgeEditor.css";
// import SingleBanner from "./SingleBanner";
// import IconBlock from "./IconBlock";
// import PaymentIcons from "./PaymentIcons";
// import IconSelector from "./IconSelector"; // Import the IconSelector component
// import ProductPicker from "./ProductPicker";
// import CollectionPicker from "./CollectionPicker";
// import Design from "./Design"; // Import the Design component
// import Placement from "./Placement"; // Import the Placement component

// function BadgeEditor({ onBackClick }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [badgeType, setBadgeType] = useState("icon-block");
//   const [badgeName, setBadgeName] = useState("Your badge");

//   // State for SingleBanner
//   const [singleBannerState, setSingleBannerState] = useState({
//     title: "Free Shipping",
//     subheading: "Delivered to Your doorstep, on us!",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   });

//   // State for IconBlock
//   const [iconBlockState, setIconBlockState] = useState({
//     title: "Free Shipping",
//     subheading: "Delivered to Your doorstep, on us!",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   });

//   // State for PaymentIcons
//   const [paymentIconsState, setPaymentIconsState] = useState({
//     title: "Free Shipping",
//     subheading: "Delivered to Your doorstep, on us!",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   });

//   const handleTabChange = (selectedTabIndex) => setSelectedTab(selectedTabIndex);

//   const tabs = [
//     { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
//     { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
//     { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
//   ];

//   const toggleIconModal = (state) => {
//     const newState = { ...state, iconModalActive: !state.iconModalActive };
//     if (state === singleBannerState) {
//       setSingleBannerState(newState);
//     } else if (state === iconBlockState) {
//       setIconBlockState(newState);
//     } else {
//       setPaymentIconsState(newState);
//     }
//   };

//   const handleIconSelect = (state, icon) => {
//     const newState = { ...state, selectedIcon: icon, iconModalActive: false };
//     if (state === singleBannerState) {
//       setSingleBannerState(newState);
//     } else if (state === iconBlockState) {
//       setIconBlockState(newState);
//     } else {
//       setPaymentIconsState(newState);
//     }
//   };
  

//   const removeIcon = (state) => {
//     const newState = { ...state, selectedIcon: null };
//     if (state === singleBannerState) {
//       setSingleBannerState(newState);
//     } else if (state === iconBlockState) {
//       setIconBlockState(newState);
//     } else {
//       setPaymentIconsState(newState);
//     }
//   };

//   const handleContinueToDesign = () => {
//     setSelectedTab(1);
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
//                 border: "1px solid #c4cdd5",
//                 borderRadius: "4px",
//                 padding: "5px",
//                 backgroundColor: "#f4f6f8",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 style={{
//                   fill: "rgb(97, 106, 117)",
//                   transition: "fill 0.3s ease",
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
//             <Card.Section>
//               {selectedTab === 0 && (
//                 <FormLayout>
//                   <FormLayout.Group>
//                     <Stack vertical>
//                       <h1 className="BadgeCls">Badge type</h1>
//                       <RadioButton
//                         label="Single banner"
//                         checked={badgeType === "single-banner"}
//                         id="singleBanner"
//                         name="badgeType"
//                         onChange={() => setBadgeType("single-banner")}
//                       />
//                       <RadioButton
//                         label="Icon block"
//                         checked={badgeType === "icon-block"}
//                         id="iconBlock"
//                         name="badgeType"
//                         onChange={() => setBadgeType("icon-block")}
//                       />
//                       <RadioButton
//                         label="Payment icons"
//                         checked={badgeType === "payment-icons"}
//                         id="paymentIcons"
//                         name="badgeType"
//                         onChange={() => setBadgeType("payment-icons")}
//                       />
//                       <TextField
//                         label="Badge name"
//                         value={badgeName}
//                         onChange={(value) => setBadgeName(value)}
//                         helpText="Only visible to you. For your own internal reference."
//                       />
//                     </Stack>

//                     {badgeType === "icon-block" && (
//                       <IconBlock
//                         {...iconBlockState}
//                         setTitle={(value) => setIconBlockState((prevState) => ({ ...prevState, title: value }))}
//                         setSubheading={(value) => setIconBlockState((prevState) => ({ ...prevState, subheading: value }))}
//                         setButtonText={(value) => setIconBlockState((prevState) => ({ ...prevState, buttonText: value }))}
//                         setLinkType={(value) => setIconBlockState((prevState) => ({ ...prevState, linkType: value }))}
//                         setExternalUrl={(value) => setIconBlockState((prevState) => ({ ...prevState, externalUrl: value }))}
//                         setSelectedIcon={(icon) => handleIconSelect(iconBlockState, icon)}
//                         setCta={(value) => setIconBlockState((prevState) => ({ ...prevState, cta: value }))}
//                         setSelectedProduct={(value) => setIconBlockState((prevState) => ({ ...prevState, selectedProduct: value }))}
//                         setSelectedCollection={(value) => setIconBlockState((prevState) => ({ ...prevState, selectedCollection: value }))}
//                         toggleIconModal={() => toggleIconModal(iconBlockState)}
//                         setIconModalActive={(value) => setIconBlockState((prevState) => ({ ...prevState, iconModalActive: value }))}
//                         setIsProductPickerOpen={(value) => setIconBlockState((prevState) => ({ ...prevState, isProductPickerOpen: value }))}
//                         setIsCollectionPickerOpen={(value) => setIconBlockState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }))}
//                       />
//                     )}

//                     {badgeType === "payment-icons" && (
//                       <PaymentIcons
//                         {...paymentIconsState}
//                         setTitle={(value) => setPaymentIconsState((prevState) => ({ ...prevState, title: value }))}
//                         setSubheading={(value) => setPaymentIconsState((prevState) => ({ ...prevState, subheading: value }))}
//                         setButtonText={(value) => setPaymentIconsState((prevState) => ({ ...prevState, buttonText: value }))}
//                         setLinkType={(value) => setPaymentIconsState((prevState) => ({ ...prevState, linkType: value }))}
//                         setExternalUrl={(value) => setPaymentIconsState((prevState) => ({ ...prevState, externalUrl: value }))}
//                         setSelectedIcon={(icon) => handleIconSelect(paymentIconsState, icon)}
//                         setCta={(value) => setPaymentIconsState((prevState) => ({ ...prevState, cta: value }))}
//                         setSelectedProduct={(value) => setPaymentIconsState((prevState) => ({ ...prevState, selectedProduct: value }))}
//                         setSelectedCollection={(value) => setPaymentIconsState((prevState) => ({ ...prevState, selectedCollection: value }))}
//                         toggleIconModal={() => toggleIconModal(paymentIconsState)}
//                         setIconModalActive={(value) => setPaymentIconsState((prevState) => ({ ...prevState, iconModalActive: value }))}
//                         setIsProductPickerOpen={(value) => setPaymentIconsState((prevState) => ({ ...prevState, isProductPickerOpen: value }))}
//                         setIsCollectionPickerOpen={(value) => setPaymentIconsState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }))}
//                       />
//                     )}

//                     {badgeType === "single-banner" && (
//                       <SingleBanner
//                         {...singleBannerState}
//                         setTitle={(value) => setSingleBannerState((prevState) => ({ ...prevState, title: value }))}
//                         setSubheading={(value) => setSingleBannerState((prevState) => ({ ...prevState, subheading: value }))}
//                         setButtonText={(value) => setSingleBannerState((prevState) => ({ ...prevState, buttonText: value }))}
//                         setLinkType={(value) => setSingleBannerState((prevState) => ({ ...prevState, linkType: value }))}
//                         setExternalUrl={(value) => setSingleBannerState((prevState) => ({ ...prevState, externalUrl: value }))}
//                         setSelectedIcon={(icon) => handleIconSelect(singleBannerState, icon)}
//                         setCta={(value) => setSingleBannerState((prevState) => ({ ...prevState, cta: value }))}
//                         setSelectedProduct={(value) => setSingleBannerState((prevState) => ({ ...prevState, selectedProduct: value }))}
//                         setSelectedCollection={(value) => setSingleBannerState((prevState) => ({ ...prevState, selectedCollection: value }))}
//                         toggleIconModal={() => toggleIconModal(singleBannerState)}
//                         setIconModalActive={(value) => setSingleBannerState((prevState) => ({ ...prevState, iconModalActive: value }))}
//                         setIsProductPickerOpen={(value) => setSingleBannerState((prevState) => ({ ...prevState, isProductPickerOpen: value }))}
//                         setIsCollectionPickerOpen={(value) => setSingleBannerState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }))}
//                       />
//                     )}
//                     {/* Continue to Design Tab Button */}
//                     <div style={{ textAlign: "center" }}>
//                       <button
//                         className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
//                         type="button"
//                         onClick={handleContinueToDesign}
//                       >
//                         <span className="Polaris-Button__Content">
//                           <span className="Polaris-Button__Icon">
//                             <span className="Polaris-Icon">
//                               <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                               <svg
//                                 viewBox="0 0 20 20"
//                                 className="Polaris-Icon__Svg"
//                                 focusable="false"
//                                 aria-hidden="true"
//                               >
//                                 <path d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
//                               </svg>
//                             </span>
//                           </span>
//                           <span className="Polaris-Button__Text">Continue to design</span>
//                         </span>
//                       </button>
//                     </div>
//                   </FormLayout.Group>
//                 </FormLayout>
//               )}
//               {selectedTab === 1 && (
//                 <Design
//                   title={badgeType === "icon-block" ? iconBlockState.title : badgeType === "payment-icons" ? paymentIconsState.title : singleBannerState.title}
//                 />
//               )}
//               {selectedTab === 2 && (
//                 <Placement
//                   badgeType={badgeType}
//                 />
//               )}
//             </Card.Section>
//           </LegacyCard>
//         </Grid.Cell>
//         <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}>
//           <LegacyCard>
//             {/* Output/Preview Section */}
//             {badgeType === "single-banner" && (
//               <div className="badge-output-container">
//                 {singleBannerState.selectedIcon ? (
//                   <div className="badge-icon">{singleBannerState.selectedIcon.icon}</div>
//                 ) : (
//                   <div className="icon-placeholder"></div>
//                 )}
//                 <div className="badge-text">
//                   <h2 className="badge-title">{singleBannerState.title}</h2>
//                   <h3 className="badge-subheading">{singleBannerState.subheading}</h3>
//                 </div>
//                 {singleBannerState.cta === "button-cta" && (
//                   <button className="badge-button">{singleBannerState.buttonText}</button>
//                 )}
//                 {singleBannerState.cta === "clickable-banner-cta" && (
//                   <div className="output-banner">
//                   </div>
//                 )}
//               </div>
//             )}

//             {badgeType === "icon-block" && (
//               <div className="badge-output-container">
//                 {iconBlockState.selectedIcon ? (
//                   <div className="badge-icon">{iconBlockState.selectedIcon.icon}</div>
//                 ) : (
//                   <div className="icon-placeholder"></div>
//                 )}
//                 <div className="badge-text">
//                   <h2 className="badge-title">{iconBlockState.title}</h2>
//                   <h3 className="badge-subheading">{iconBlockState.subheading}</h3>
//                 </div>
//                 {iconBlockState.cta === "button-cta" && (
//                   <button className="badge-button">{iconBlockState.buttonText}</button>
//                 )}
//                 {iconBlockState.cta === "clickable-banner-cta" && (
//                   <div className="output-banner">
//                   </div>
//                 )}
//               </div>
//             )}

//             {badgeType === "payment-icons" && (
//               <div className="badge-output-container">
//                 {paymentIconsState.selectedIcon ? (
//                   <div className="badge-icon">{paymentIconsState.selectedIcon.icon}</div>
//                 ) : (
//                   <div className="icon-placeholder"></div>
//                 )}
//                 <div className="badge-text">
//                   <h2 className="badge-title">{paymentIconsState.title}</h2>
//                   <h3 className="badge-subheading">{paymentIconsState.subheading}</h3>
//                 </div>
//                 {paymentIconsState.cta === "button-cta" && (
//                   <button className="badge-button">{paymentIconsState.buttonText}</button>
//                 )}
//                 {paymentIconsState.cta === "clickable-banner-cta" && (
//                   <div className="output-banner">
//                   </div>
//                 )}
//               </div>
//             )}
//           </LegacyCard>
//         </Grid.Cell>
//       </Grid>
//     </Page>
//   );
// }

// export default BadgeEditor;






// Working code at 17 /10/2024   for dynaic banner is controll by each badge type


import React, { useState } from "react";
import {
  Page,
  Card,
  Tabs,
  Button,
  FormLayout,
  Badge,
  RadioButton,
  Stack,
  Grid,
  LegacyCard,
  TextField,
} from "@shopify/polaris";
import "./BadgeEditor.css";
import SingleBanner from "./SingleBanner";
import IconBlock from "./IconBlock";
import PaymentIcons from "./PaymentIcons";
import IconSelector from "./IconSelector"; // Import the IconSelector component
import ProductPicker from "./ProductPicker";
import CollectionPicker from "./CollectionPicker";
import Design from "./Design"; // Import the Design component
import Placement from "./Placement"; // Import the Placement component

function BadgeEditor({ onBackClick }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [badgeType, setBadgeType] = useState("icon-block");
  const [badgeName, setBadgeName] = useState("Your badge");

  // State for SingleBanner
  const [singleBannerState, setSingleBannerState] = useState({
    title: "Free Shipping",
    subheading: "Delivered to Your doorstep, on us!",
    buttonText: "Shop Now",
    linkType: "",
    externalUrl: "",
    selectedIcon: null,
    cta: "no-cta",
    selectedProduct: null,
    selectedCollection: null,
    iconModalActive: false,
    isProductPickerOpen: false,
    isCollectionPickerOpen: false,
  });

  // State for IconBlock
  const [iconBlockState, setIconBlockState] = useState({
    title: "Free Shipping",
    subheading: "Delivered to Your doorstep, on us!",
    buttonText: "Shop Now",
    linkType: "",
    externalUrl: "",
    selectedIcon: null,
    cta: "no-cta",
    selectedProduct: null,
    selectedCollection: null,
    iconModalActive: false,
    isProductPickerOpen: false,
    isCollectionPickerOpen: false,
  });

  // State for PaymentIcons
  const [paymentIconsState, setPaymentIconsState] = useState({
    title: "Free Shipping",
    subheading: "Delivered to Your doorstep, on us!",
    buttonText: "Shop Now",
    linkType: "",
    externalUrl: "",
    selectedIcon: null,
    cta: "no-cta",
    selectedProduct: null,
    selectedCollection: null,
    iconModalActive: false,
    isProductPickerOpen: false,
    isCollectionPickerOpen: false,
  });

  const handleTabChange = (selectedTabIndex) => {
    console.log("Tab changed to:", selectedTabIndex);
    setSelectedTab(selectedTabIndex);
  };

  const tabs = [
    { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
    { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
    { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
  ];

  const toggleIconModal = (stateType) => {
    console.log("Icon modal toggled");
    if (stateType === "singleBanner") {
      setSingleBannerState((prevState) => ({ ...prevState, iconModalActive: !prevState.iconModalActive }));
    } else if (stateType === "iconBlock") {
      setIconBlockState((prevState) => ({ ...prevState, iconModalActive: !prevState.iconModalActive }));
    } else if (stateType === "paymentIcons") {
      setPaymentIconsState((prevState) => ({ ...prevState, iconModalActive: !prevState.iconModalActive }));
    }
  };

  const handleIconSelect = (stateType, icon) => {
    console.log("Icon selected:", icon);
    if (stateType === "singleBanner") {
      setSingleBannerState((prevState) => ({
        ...prevState,
        selectedIcon: icon,
        iconModalActive: false,
      }));
    } else if (stateType === "iconBlock") {
      setIconBlockState((prevState) => ({
        ...prevState,
        selectedIcon: icon,
        iconModalActive: false,
      }));
    } else if (stateType === "paymentIcons") {
      setPaymentIconsState((prevState) => ({
        ...prevState,
        selectedIcon: icon,
        iconModalActive: false,
      }));
    }
  };

  const handleContinueToDesign = () => {
    console.log("Continue to Design tab");
    setSelectedTab(1);
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
                border: "1px solid #c4cdd5",
                borderRadius: "4px",
                padding: "5px",
                backgroundColor: "#f4f6f8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgb(97, 106, 117)",
                  transition: "fill 0.3s ease",
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
                        onChange={() => {
                          console.log("Badge type changed to: Single banner");
                          setBadgeType("single-banner");
                        }}
                      />
                      <RadioButton
                        label="Icon block"
                        checked={badgeType === "icon-block"}
                        id="iconBlock"
                        name="badgeType"
                        onChange={() => {
                          console.log("Badge type changed to: Icon block");
                          setBadgeType("icon-block");
                        }}
                      />
                      <RadioButton
                        label="Payment icons"
                        checked={badgeType === "payment-icons"}
                        id="paymentIcons"
                        name="badgeType"
                        onChange={() => {
                          console.log("Badge type changed to: Payment icons");
                          setBadgeType("payment-icons");
                        }}
                      />
                      <TextField
                        label="Badge name"
                        value={badgeName}
                        onChange={(value) => {
                          console.log("Badge name changed to:", value);
                          setBadgeName(value);
                        }}
                        helpText="Only visible to you. For your own internal reference."
                      />
                    </Stack>

                    {badgeType === "single-banner" && (
                      <SingleBanner
                        {...singleBannerState}
                        setTitle={(value) => {
                          console.log("Title changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, title: value }));
                        }}
                        setSubheading={(value) => {
                          console.log("Subheading changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, subheading: value }));
                        }}
                        setButtonText={(value) => {
                          console.log("Button text changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, buttonText: value }));
                        }}
                        setLinkType={(value) => {
                          console.log("Link type changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, linkType: value }));
                        }}
                        setExternalUrl={(value) => {
                          console.log("External URL changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, externalUrl: value }));
                        }}
                        setSelectedIcon={(icon) => handleIconSelect("singleBanner", icon)}
                        setCta={(value) => {
                          console.log("CTA changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, cta: value }));
                        }}
                        setSelectedProduct={(value) => {
                          console.log("Selected product changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, selectedProduct: value }));
                        }}
                        setSelectedCollection={(value) => {
                          console.log("Selected collection changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, selectedCollection: value }));
                        }}
                        toggleIconModal={() => toggleIconModal("singleBanner")}
                        setIconModalActive={() => toggleIconModal("singleBanner")}
                        setIsProductPickerOpen={(value) => {
                          console.log("Product picker open state changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
                        }}
                        setIsCollectionPickerOpen={(value) => {
                          console.log("Collection picker open state changed to:", value);
                          setSingleBannerState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
                        }}
                      />
                    )}

                    {badgeType === "icon-block" && (
                      <IconBlock
                        {...iconBlockState}
                        setTitle={(value) => {
                          console.log("Title changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, title: value }));
                        }}
                        setSubheading={(value) => {
                          console.log("Subheading changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, subheading: value }));
                        }}
                        setButtonText={(value) => {
                          console.log("Button text changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, buttonText: value }));
                        }}
                        setLinkType={(value) => {
                          console.log("Link type changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, linkType: value }));
                        }}
                        setExternalUrl={(value) => {
                          console.log("External URL changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, externalUrl: value }));
                        }}
                        setSelectedIcon={(icon) => handleIconSelect("iconBlock", icon)}
                        setCta={(value) => {
                          console.log("CTA changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, cta: value }));
                        }}
                        setSelectedProduct={(value) => {
                          console.log("Selected product changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, selectedProduct: value }));
                        }}
                        setSelectedCollection={(value) => {
                          console.log("Selected collection changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, selectedCollection: value }));
                        }}
                        toggleIconModal={() => toggleIconModal("iconBlock")}
                        setIconModalActive={() => toggleIconModal("iconBlock")}
                        setIsProductPickerOpen={(value) => {
                          console.log("Product picker open state changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
                        }}
                        setIsCollectionPickerOpen={(value) => {
                          console.log("Collection picker open state changed to:", value);
                          setIconBlockState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
                        }}
                      />
                    )}

                    {badgeType === "payment-icons" && (
                      <PaymentIcons
                        {...paymentIconsState}
                        setTitle={(value) => {
                          console.log("Title changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, title: value }));
                        }}
                        setSubheading={(value) => {
                          console.log("Subheading changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, subheading: value }));
                        }}
                        setButtonText={(value) => {
                          console.log("Button text changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, buttonText: value }));
                        }}
                        setLinkType={(value) => {
                          console.log("Link type changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, linkType: value }));
                        }}
                        setExternalUrl={(value) => {
                          console.log("External URL changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, externalUrl: value }));
                        }}
                        setSelectedIcon={(icon) => handleIconSelect("paymentIcons", icon)}
                        setCta={(value) => {
                          console.log("CTA changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, cta: value }));
                        }}
                        setSelectedProduct={(value) => {
                          console.log("Selected product changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, selectedProduct: value }));
                        }}
                        setSelectedCollection={(value) => {
                          console.log("Selected collection changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, selectedCollection: value }));
                        }}
                        toggleIconModal={() => toggleIconModal("paymentIcons")}
                        setIconModalActive={() => toggleIconModal("paymentIcons")}
                        setIsProductPickerOpen={(value) => {
                          console.log("Product picker open state changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
                        }}
                        setIsCollectionPickerOpen={(value) => {
                          console.log("Collection picker open state changed to:", value);
                          setPaymentIconsState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
                        }}
                      />
                    )}
                    {/* Continue to Design Tab Button */}
                    <div style={{ textAlign: "center" }}>
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
                  </FormLayout.Group>
                </FormLayout>
              )}
              {selectedTab === 1 && (
                <Design
                  title={badgeType === "single-banner" ? singleBannerState.title : badgeType === "icon-block" ? iconBlockState.title : paymentIconsState.title}
                />
              )}
              {selectedTab === 2 && (
                <Placement
                  badgeType={badgeType}
                />
              )}
            </Card.Section>
          </LegacyCard>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}>
          <LegacyCard>
            {/* Output/Preview Section */}
            {badgeType === "single-banner" && (
              <div className="badge-output-container">
                {singleBannerState.selectedIcon ? (
                  <div className="badge-icon">{singleBannerState.selectedIcon.icon}</div>
                ) : (
                  <div className="icon-placeholder"></div>
                )}
                <div className="badge-text">
                  <h2 className="badge-title">{singleBannerState.title}</h2>
                  <h3 className="badge-subheading">{singleBannerState.subheading}</h3>
                </div>
                {singleBannerState.cta === "button-cta" && (
                  <button className="badge-button">{singleBannerState.buttonText}</button>
                )}
                {singleBannerState.cta === "clickable-banner-cta" && (
                  <div className="output-banner">
                  </div>
                )}
              </div>
            )}

            {badgeType === "icon-block" && (
              <div className="badge-output-container">
                {iconBlockState.selectedIcon ? (
                  <div className="badge-icon">{iconBlockState.selectedIcon.icon}</div>
                ) : (
                  <div className="icon-placeholder"></div>
                )}
                <div className="badge-text">
                  <h2 className="badge-title">{iconBlockState.title}</h2>
                  <h3 className="badge-subheading">{iconBlockState.subheading}</h3>
                </div>
                {iconBlockState.cta === "button-cta" && (
                  <button className="badge-button">{iconBlockState.buttonText}</button>
                )}
                {iconBlockState.cta === "clickable-banner-cta" && (
                  <div className="output-banner">
                  </div>
                )}
              </div>
            )}

            {badgeType === "payment-icons" && (
              <div className="badge-output-container">
                {paymentIconsState.selectedIcon ? (
                  <div className="badge-icon">{paymentIconsState.selectedIcon.icon}</div>
                ) : (
                  <div className="icon-placeholder"></div>
                )}
                <div className="badge-text">
                  <h2 className="badge-title">{paymentIconsState.title}</h2>
                  <h3 className="badge-subheading">{paymentIconsState.subheading}</h3>
                </div>
                {paymentIconsState.cta === "button-cta" && (
                  <button className="badge-button">{paymentIconsState.buttonText}</button>
                )}
                {paymentIconsState.cta === "clickable-banner-cta" && (
                  <div className="output-banner">
                  </div>
                )}
              </div>
            )}
          </LegacyCard>
        </Grid.Cell>
      </Grid>
    </Page>
  );
}

export default BadgeEditor;

