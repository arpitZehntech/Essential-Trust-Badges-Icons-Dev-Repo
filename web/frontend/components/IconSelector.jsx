// // code for Show icons according to category 
// working code

// import React, { useState } from 'react';
// import * as icons from 'react-icons/fa';
// import { Modal, TextField, Button } from '@shopify/polaris';
// import './IconSelector.css'; // Import the CSS file

// const IconSelector = ({ onIconSelect }) => {
//   const [active, setActive] = useState(false);
//   const [search, setSearch] = useState('');
//   const [selectedIcon, setSelectedIcon] = useState(null);

//   // Dynamically categorize icons based on naming convention
//   const categorizeIcons = () => {
//     const categories = {};

//     Object.keys(icons).forEach((key) => {
//       const category = getCategoryFromName(key); // Get category from the name
//       if (!categories[category]) {
//         categories[category] = [];
//       }
//       categories[category].push({
//         name: key.replace('Fa', ''), // Remove 'Fa' prefix
//         icon: React.createElement(icons[key], { size: 40 }),
//       });
//     });

//     return categories;
//   };

//   // Function to categorize icon names dynamically based on a naming pattern
//   const getCategoryFromName = (iconName) => {
//     if (iconName.includes('Shop') || iconName.includes('Cart')) return 'ECOMMERCE';
//     if (iconName.includes('Pay') || iconName.includes('Credit')) return 'PAYMENT';
//     if (iconName.includes('Music') || iconName.includes('Headphone')) return 'MUSIC';
//     if (iconName.includes('Gift') || iconName.includes('Tree')) return 'CHRISTMAS';
//     if (iconName.includes('Heart') || iconName.includes('Wedding')) return 'WEDDINGS';
//     // Add more dynamic categorization rules here

//     return 'ECOMMERCE'; // Default category
//   };

//   // Categorized icons
//   const categorizedIcons = categorizeIcons();

//   // Toggle modal visibility
//   const toggleModal = () => setActive(!active);

//   // Handle icon selection
//   const handleIconSelect = (icon) => {
//     setSelectedIcon(icon);
//     onIconSelect(icon);
//     toggleModal();
//   };

//   return (
//     <div>
//       <Button onClick={toggleModal}>
//         {selectedIcon ? selectedIcon.icon : 'Select an Icon'}
//       </Button>

//       <Modal
//         open={active}
//         onClose={toggleModal}
//         title="Change Icon"
//         primaryAction={{
//           content: 'Close',
//           onAction: toggleModal,
//         }}
//       >
//         <Modal.Section>
//           <TextField
//             label="Search Icons"
//             value={search}
//             onChange={setSearch}
//             placeholder="Search by name..."
//             autoComplete="off"
//             className="search-input"
//           />

//           {/* Loop through dynamically categorized icons */}
//           {Object.keys(categorizedIcons).map((category) => (
//             <div key={category}>
//               <h3 className="icon-title">{category}</h3> {/* Category Title */}
//               <div className="icon-grid">
//                 {categorizedIcons[category]
//                   .filter((icon) =>
//                     icon.name.toLowerCase().includes(search.toLowerCase())
//                   )
//                   .map((icon) => (
//                     <div
//                       key={icon.name}
//                       className="icon-container tooltip"
//                       onClick={() => handleIconSelect(icon)}
//                     >
//                       <span className="Polaris-Thumbnail">{icon.icon}</span>
//                       <span className="tooltiptext">{icon.name}</span>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </Modal.Section>
//       </Modal>
//     </div>
//   );
// };

// export default IconSelector;

// testing code 14/10/2024

import React, { useState } from 'react';
import * as icons from 'react-icons/fa';
import { Modal, TextField } from '@shopify/polaris';
import './IconSelector.css'; // Import the CSS file

const IconSelector = ({ active, toggleModal, onIconSelect }) => {
  const [search, setSearch] = useState('');

  // Categorize icons based on the naming convention
  const categorizeIcons = () => {
    const categories = {};

    Object.keys(icons).forEach((key) => {
      const category = getCategoryFromName(key);
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push({
        name: key.replace('Fa', ''), // Remove 'Fa' prefix
        icon: React.createElement(icons[key], { size: 40 }), // Icon size
      });
    });

    return categories;
  };

  const getCategoryFromName = (iconName) => {
    if (iconName.includes('Shop') || iconName.includes('Cart')) return 'ECOMMERCE';
    if (iconName.includes('Pay') || iconName.includes('Credit')) return 'PAYMENT';
    if (iconName.includes('Music') || iconName.includes('Headphone')) return 'MUSIC';
    if (iconName.includes('Gift') || iconName.includes('Tree')) return 'CHRISTMAS';
    if (iconName.includes('Heart') || iconName.includes('Wedding')) return 'WEDDINGS';
    return 'ECOMMERCE'; // Default category
  };

  const categorizedIcons = categorizeIcons();

  // Handle icon selection
  const handleIconSelect = (icon) => {
    onIconSelect(icon); // Pass selected icon back to parent
    toggleModal(); // Close modal
  };

  return (
    <Modal
      open={active}
      onClose={toggleModal}
      title="Select Icon"
      primaryAction={{
        content: 'Close',
        onAction: toggleModal,
      }}
    >
      <Modal.Section>
        <TextField
          label="Search Icons"
          value={search}
          onChange={setSearch}
          placeholder="Search by name..."
          autoComplete="off"
        />
        {/* Loop through dynamically categorized icons */}
        {Object.keys(categorizedIcons).map((category) => (
          <div key={category}>
            <h3 className="icon-title">{category}</h3> {/* Category Title */}
            <div className="icon-grid">
              {categorizedIcons[category]
                .filter((icon) =>
                  icon.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((icon) => (
                  <div
                    
                    key={icon.name}
                    className="icon-container tooltip"
                    onClick={() => handleIconSelect(icon)}>
                    <span className="Polaris-Thumbnail">{icon.icon}</span>
                    <span className="tooltiptext">{icon.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </Modal.Section>
    </Modal>
  );
};

export default IconSelector;



// code for Show icons Directly

// import React, { useState } from 'react';
// import * as icons from 'react-icons/fa';
// import { Modal, TextField, Button, Stack } from '@shopify/polaris';
// import './IconSelector.css'; // Import the CSS file

// const IconSelector = ({ onIconSelect }) => {
//   const [active, setActive] = useState(false);
//   const [search, setSearch] = useState('');
//   const [selectedIcon, setSelectedIcon] = useState(null);

//   // Create an array of available icons
//   const iconArray = Object.keys(icons).map((key) => ({
//     name: key.replace('Fa', ''), // Remove 'Fa' prefix from the icon name
//     icon: React.createElement(icons[key], { size: 40 }),
//   }));

//   // Filter icons based on search term
//   const filteredIcons = iconArray.filter((icon) =>
//     icon.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // Toggle modal visibility
//   const toggleModal = () => setActive(!active);

//   // Handle icon selection
//   const handleIconSelect = (icon) => {
//     setSelectedIcon(icon);
//     onIconSelect(icon);
//     toggleModal();
//   };

//   return (
//     <div>
//       <Button onClick={toggleModal}>
//         {selectedIcon ? selectedIcon.icon : 'Select an Icon'}
//       </Button>

//       <Modal
//         open={active}
//         onClose={toggleModal}
//         title="Change Icon"
//         primaryAction={{
//           content: 'Close',
//           onAction: toggleModal,
//         }}
//       >
//         <Modal.Section>
//           <TextField
//             label="Search Icons"
//             value={search}
//             onChange={setSearch}
//             placeholder="Search by name..."
//             autoComplete="off"
//             className="search-input"
//           />
//           <h3 className="icon-title">ECOMMERCE</h3>
//           <div className="icon-grid">
//             {filteredIcons.map((icon) => (
//               <div
//                 key={icon.name}
//                 className="icon-container tooltip"
//                 onClick={() => handleIconSelect(icon)}
//               >
//                 <span className="Polaris-Thumbnail">{icon.icon}</span>
//                 <span className="tooltiptext">{icon.name}</span>
//               </div>
//             ))}
//           </div>
//         </Modal.Section>
//       </Modal>
//     </div>
//   );
// };

// export default IconSelector;
