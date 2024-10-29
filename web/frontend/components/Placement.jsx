// import React, { useState } from 'react';
// import {
//   Card,
//   RadioButton,
//   Button,
//   Stack,
//   Badge,
//   Modal,
//   TextContainer,
// } from '@shopify/polaris';
// import AllProductPicker from './AllProductPicker';
// import AllCollectionPicker from './AllCollectionPicker';

// function Placement() {
//   const [selectedProduct, setSelectedProduct] = useState('allProducts');
//   const [selectedGeolocation, setSelectedGeolocation] = useState('allWorld');
//   const [isAllProductPickerOpen, setIsAllProductPickerOpen] = useState(false);
//   const [isCollectionPickerOpen, setIsCollectionPickerOpen] = useState(false);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedCollections, setSelectedCollections] = useState([]);

//   const handleProductSelection = (products) => {
//     setSelectedProducts(products);
//     setIsAllProductPickerOpen(false);
//   };

//   const handleCollectionSelection = (collections) => {
//     setSelectedCollections(collections);
//     setIsCollectionPickerOpen(false);
//   };

//   return (
//     <div>
//       <Card sectioned title="Select products">
//         <Stack vertical>
//           <RadioButton
//             label="All products"
//             checked={selectedProduct === 'allProducts'}
//             id="allProducts"
//             name="products"
//             onChange={() => setSelectedProduct('allProducts')}
//           />
//           <RadioButton
//             label="Specific products"
//             checked={selectedProduct === 'specificProducts'}
//             id="specificProducts"
//             name="products"
//             onChange={() => setSelectedProduct('specificProducts')}
//           />

//           <RadioButton
//             label="All products in specific collections"
//             checked={selectedProduct === 'specificCollections'}
//             id="specificCollections"
//             name="products"
//             onChange={() => setSelectedProduct('specificCollections')}
//           />

//           <RadioButton
//             label={
//               <span>
//                 All products with specific tags{' '}
//                 <Badge status="info">Essential plan</Badge>
//               </span>
//             }
//             checked={selectedProduct === 'specificTags'}
//             id="specificTags"
//             name="products"
//             onChange={() => setSelectedProduct('specificTags')}
//           />
//           <RadioButton
//             label="Custom position"
//             helpText="Add banner or icon block anywhere using app blocks."
//             checked={selectedProduct === 'customPosition'}
//             id="customPosition"
//             name="products"
//             onChange={() => setSelectedProduct('customPosition')}
//           />

//           {selectedProduct === 'specificProducts' && (
//             <div className="Polaris-FormLayout__Item">
//               <Button fullWidth onClick={() => setIsAllProductPickerOpen(true)}>
//                 Select Products
//               </Button>
//               {selectedProducts.length > 0 && (
//                 <TextContainer>
//                   <ul>
//                     {selectedProducts.map((product) => (
//                       <li key={product.id}>{product.title}</li>
//                     ))}
//                   </ul>
//                 </TextContainer>
//               )}
//             </div>
//           )}

//           {selectedProduct === 'specificCollections' && (
//             <div className="Polaris-FormLayout__Item">
//               <Button fullWidth onClick={() => setIsCollectionPickerOpen(true)}>
//                 Select Collections
//               </Button>
//               {selectedCollections.length > 0 && (
//                 <TextContainer>
//                   <ul>
//                     {selectedCollections.map((collection) => (
//                       <li key={collection.id}>{collection.title}</li>
//                     ))}
//                   </ul>
//                 </TextContainer>
//               )}
//             </div>
//           )}
//           {selectedProduct === 'specificTags' && (
//             <div className="Polaris-Stack__Item">
//               <div className="Polaris-FormLayout__Item">
//                 <div className="Polaris-Labelled--hidden">
//                   <div className="Polaris-Labelled__LabelWrapper">
//                     <div className="Polaris-Label">
//                       <label id="PolarisComboboxTextField2Label" for="PolarisComboboxTextField2" className="Polaris-Label__Text">
//                         Add Tags
//                       </label>
//                     </div>
//                   </div>
//                   <div className="Polaris-Connected">
//                     <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
//                       <div className="Polaris-TextField">
//                         <input id="PolarisComboboxTextField2" role="combobox" placeholder="Add Tags" autocomplete="off" className="Polaris-TextField__Input" type="text" aria-labelledby="PolarisComboboxTextField2Label" aria-invalid="false" aria-autocomplete="list" aria-expanded="false" value="" tabindex="0" aria-controls="Polarispopover49" aria-owns="Polarispopover49" />
//                         <div className="Polaris-TextField__Backdrop"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </Stack>
//       </Card>

//       <Card sectioned title="Geolocation targeting">
//         <Stack vertical>
//           <RadioButton
//             label={
//               <span>
//                 All world{' '}
//                 <Badge status="info">Essential plan</Badge>
//               </span>
//             }
//             checked={selectedGeolocation === 'allWorld'}
//             id="allWorld"
//             name="geolocation"
//             onChange={() => setSelectedGeolocation('allWorld')}
//           />
//           <div className="Polaris-Choice__Descriptions">
//             <div className="Polaris-Choice__HelpText" id="PolarisRadioButton51HelpText">
//               <span className="Polaris-Text--root Polaris-Text--subdued">Excluding specific countries from other badges</span>
//             </div>
//           </div>
//           <RadioButton
//             label="Specific countries"
//             checked={selectedGeolocation === 'specificCountries'}
//             id="specificCountries"
//             name="geolocation"
//             onChange={() => setSelectedGeolocation('specificCountries')}
//           />
//           {selectedGeolocation === 'specificCountries' && (
//             <div className="Polaris-FormLayout__Item">
//               <Button fullWidth>
//                 Select Countries
//               </Button>
//             </div>
//           )}
//           {selectedGeolocation === 'allWorld' && (
//             <div className="Polaris-FormLayout__Item">
//               <Button fullWidth disabled>
//                 Select Countries
//               </Button>
//             </div>
//           )}
//         </Stack>
//       </Card>

//       {/* Product Picker */}
//       <AllProductPicker
//         onSelectProduct={handleProductSelection}
//         isOpen={isAllProductPickerOpen}
//         onClose={() => setIsAllProductPickerOpen(false)}
//         allowMultiple
//         selectedProducts={selectedProducts}
//       />

//       {/* Collection Picker */}
//       <AllCollectionPicker
//         onSelectCollection={handleCollectionSelection}
//         isOpen={isCollectionPickerOpen}
//         onClose={() => setIsCollectionPickerOpen(false)}
//         allowMultiple
//         selectedCollections={selectedCollections}
//       />
//     </div>
//   );
// }

// export default Placement;

import React, { useState } from 'react';
import {
  Card,
  RadioButton,
  Button,
  Stack,
  Badge,
  Modal,
  TextContainer,
} from '@shopify/polaris';
import AllProductPicker from './AllProductPicker';
import AllCollectionPicker from './AllCollectionPicker';
import AllProductList from './AllProductList';

function Placement() {
  const [selectedProduct, setSelectedProduct] = useState('allProducts');
  const [selectedGeolocation, setSelectedGeolocation] = useState('allWorld');
  const [isAllProductPickerOpen, setIsAllProductPickerOpen] = useState(false);
  const [isCollectionPickerOpen, setIsCollectionPickerOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);


  const handleProductSelection = (products) => {
    setSelectedProducts(products); // Store selected products
    setIsAllProductPickerOpen(false); // Close the product picker
    console.log('Selected Products:', products); // Log the selected products
  };
  const handleAllProductsSelection = (products) => {
    // This function will be called when all products are selected
    console.log('All products selected:', products);
  };

  const handleCollectionSelection = (collections) => {
    setSelectedCollections(collections);
    setIsCollectionPickerOpen(false);
  };

  return (
    <div>
      <Card sectioned title="Select products">
        <Stack vertical>
          <RadioButton
            label="All products"
            checked={selectedProduct === 'allProducts'}
            id="allProducts"
            name="products"
            onChange={() => setSelectedProduct('allProducts')}
          />
          <RadioButton
            label="Specific products"
            checked={selectedProduct === 'specificProducts'}
            id="specificProducts"
            name="products"
            onChange={() => setSelectedProduct('specificProducts')}
          />

          <RadioButton
            label="All products in specific collections"
            checked={selectedProduct === 'specificCollections'}
            id="specificCollections"
            name="products"
            onChange={() => setSelectedProduct('specificCollections')}
          />

          <RadioButton
            label={
              <span>
                All products with specific tags{' '}
                <Badge status="info">Essential plan</Badge>
              </span>
            }
            checked={selectedProduct === 'specificTags'}
            id="specificTags"
            name="products"
            onChange={() => setSelectedProduct('specificTags')}
          />
          <RadioButton
            label="Custom position"
            helpText="Add banner or icon block anywhere using app blocks."
            checked={selectedProduct === 'customPosition'}
            id="customPosition"
            name="products"
            onChange={() => setSelectedProduct('customPosition')}
          />

          {selectedProduct === 'specificProducts' && (
            <div className="Polaris-FormLayout__Item">
              <Button fullWidth onClick={() => setIsAllProductPickerOpen(true)}>
                Select Products
              </Button>
              {selectedProducts.length > 0 && (
                <TextContainer>
                  <ul>
                    {selectedProducts.map((product) => (
                      <li key={product.id}>{product.title}</li>
                    ))}
                  </ul>
                </TextContainer>
              )}
            </div>
          )}

          {selectedProduct === 'specificCollections' && (
            <div className="Polaris-FormLayout__Item">
              <Button fullWidth onClick={() => setIsCollectionPickerOpen(true)}>
                Select Collections
              </Button>
              {selectedCollections.length > 0 && (
                <TextContainer>
                  <ul>
                    {selectedCollections.map((collection) => (
                      <li key={collection.id}>{collection.title}</li>
                    ))}
                  </ul>
                </TextContainer>
              )}
            </div>
          )}
          {selectedProduct === 'allProducts' && (
            <AllProductList
              onSelectProduct={handleAllProductsSelection}
              isOpen={isAllProductPickerOpen}
              onClose={() => setIsAllProductPickerOpen(false)}
              allowMultiple
              selectedProducts={selectedProducts}
            />
          )}

          {selectedProduct === 'specificTags' && (
            <div className="Polaris-Stack__Item">
              <div className="Polaris-FormLayout__Item">
                <div className="Polaris-Labelled--hidden">
                  <div className="Polaris-Labelled__LabelWrapper">
                    <div className="Polaris-Label">
                      <label id="PolarisComboboxTextField2Label" for="PolarisComboboxTextField2" className="Polaris-Label__Text">
                        Add Tags
                      </label>
                    </div>
                  </div>
                  <div className="Polaris-Connected">
                    <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                      <div className="Polaris-TextField">
                        <input id="PolarisComboboxTextField2" role="combobox" placeholder="Add Tags" autocomplete="off" className="Polaris-TextField__Input" type="text" aria-labelledby="PolarisComboboxTextField2Label" aria-invalid="false" aria-autocomplete="list" aria-expanded="false" value="" tabindex="0" aria-controls="Polarispopover49" aria-owns="Polarispopover49" />
                        <div className="Polaris-TextField__Backdrop"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Stack>
      </Card>

      <Card sectioned title="Geolocation targeting">
        <Stack vertical>
          <RadioButton
            label={
              <span>
                All world{' '}
                <Badge status="info">Essential plan</Badge>
              </span>
            }
            checked={selectedGeolocation === 'allWorld'}
            id="allWorld"
            name="geolocation"
            onChange={() => setSelectedGeolocation('allWorld')}
          />
          <div className="Polaris-Choice__Descriptions">
            <div className="Polaris-Choice__HelpText" id="PolarisRadioButton51HelpText">
              <span className="Polaris-Text--root Polaris-Text--subdued">Excluding specific countries from other badges</span>
            </div>
          </div>
          <RadioButton
            label="Specific countries"
            checked={selectedGeolocation === 'specificCountries'}
            id="specificCountries"
            name="geolocation"
            onChange={() => setSelectedGeolocation('specificCountries')}
          />
          {selectedGeolocation === 'specificCountries' && (
            <div className="Polaris-FormLayout__Item">
              <Button fullWidth>
                Select Countries
              </Button>
            </div>
          )}
          {selectedGeolocation === 'allWorld' && (
            <div className="Polaris-FormLayout__Item">
              <Button fullWidth disabled>
                Select Countries
              </Button>
            </div>
          )}
        </Stack>
      </Card>

      {/* Product Picker */}
      <AllProductPicker
        onSelectProduct={handleProductSelection}
        isOpen={isAllProductPickerOpen}
        onClose={() => setIsAllProductPickerOpen(false)}
        allowMultiple
        selectedProducts={selectedProducts}
      />

      {/* Collection Picker */}
      <AllCollectionPicker
        onSelectCollection={handleCollectionSelection}
        isOpen={isCollectionPickerOpen}
        onClose={() => setIsCollectionPickerOpen(false)}
        allowMultiple
        selectedCollections={selectedCollections}
      />
    </div>
  );
}

export default Placement;
