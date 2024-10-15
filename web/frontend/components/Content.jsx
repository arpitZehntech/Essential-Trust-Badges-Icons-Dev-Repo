import React, { useState } from "react";
import {
  FormLayout,
  RadioButton,
  TextField,
  Stack,
  LegacyStack,
  Button,
  Select,
  Badge,
  Link,
} from "@shopify/polaris";
import IconSelector from "./IconSelector"; // Import IconSelector for icon selection

function Content({
  badgeType,
  setBadgeType,
  badgeName,
  setBadgeName,
  title,
  setTitle,
  subheading,
  setSubheading,
  selectedIcon,
  setSelectedIcon,
  cta,
  setCta,
}) {
  const [iconModalActive, setIconModalActive] = useState(false);

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

  return (
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
        <LegacyStack.Item>
          <p className="Polaris-Text--root">Icon</p>
        </LegacyStack.Item>
        <LegacyStack.Item>
          <LegacyStack spacing="baseTight" distribution="leading">
            <LegacyStack.Item>
              <div
                className={`icon-preview ${selectedIcon ? "selected" : ""}`}
                onClick={toggleIconModal}
                style={{ cursor: "pointer" }}
              >
                {selectedIcon ? (
                  <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
                    {selectedIcon.icon}
                  </span>
                ) : (
                  <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
                    <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg">
                      <path d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z"></path>
                    </svg>
                  </span>
                )}
              </div>
            </LegacyStack.Item>

            <LegacyStack.Item fill>
              <LegacyStack vertical spacing="extraTight" distribution="center">
                <Button
                  onClick={selectedIcon ? removeIcon : toggleIconModal}
                  fullWidth
                >
                  {selectedIcon ? "Remove Icon" : "Select Icon"}
                </Button>

                <Button fullWidth outline disabled>
                  Upload Icon
                </Button>

                <Text variant="bodySm" color="subdued">
                  Available with Starter plan. <Link>Upgrade now.</Link>
                </Text>
              </LegacyStack>
            </LegacyStack.Item>
          </LegacyStack>
        </LegacyStack.Item>
      </LegacyStack>

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
    </FormLayout>
  );
}

export default Content;
