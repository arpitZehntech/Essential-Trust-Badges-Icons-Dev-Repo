document.addEventListener("DOMContentLoaded", function () {
    // Create the main container div
    const container = document.createElement('div');
    container.setAttribute('data-banner', '');
    container.setAttribute('data-type', 'product-page');
    container.setAttribute('data-id', '6f141c86-dabc-445d-88ab-9b354f0b0740');
    container.style.width = '100%';
    container.style.padding = '16px calc(16px)';
    container.style.border = '0px solid rgb(197, 200, 209)';
    container.style.borderRadius = '8px';
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    container.style.position = 'relative';
    container.style.marginTop = '20px';
    container.style.marginBottom = '20px';
    container.style.background = 'rgb(255, 255, 255)';

    // Create the icon container div
    const iconContainer = document.createElement('div');
    iconContainer.id = 'icon_container';
    iconContainer.style.display = 'flex';
    iconContainer.style.alignItems = 'center';
    iconContainer.style.justifyContent = 'center';
    iconContainer.style.padding = '4px';
    iconContainer.style.marginRight = '4px';
    iconContainer.style.borderRadius = '4px';
    iconContainer.style.backgroundColor = '#ffffff';
    iconContainer.style.backgroundImage = 'url(https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/public/ecom-icons/delivery2.svg)';
    iconContainer.style.backgroundRepeat = 'no-repeat';
    iconContainer.style.backgroundPosition = 'center';
    iconContainer.style.backgroundSize = '32px';

    // Create the icon div
    const icon = document.createElement('div');
    icon.id = 'icon';
    icon.style.height = '32px';
    icon.style.width = '32px';
    icon.style.display = 'flex';

    // Append the icon to the icon container
    iconContainer.appendChild(icon);

    // Create the text container div
    const textContainer = document.createElement('div');
    textContainer.id = 'text_container';
    textContainer.style.display = 'flex';
    textContainer.style.flexDirection = 'column';
    textContainer.style.justifyContent = 'flex-start';
    textContainer.style.alignItems = 'flex-start';
    textContainer.style.flex = '1';
    textContainer.style.gap = '2px';

    // Create the title span
    const title = document.createElement('span');
    title.id = 'title';
    title.style.display = 'block';
    title.style.fontWeight = '600';
    title.style.fontSize = '16px';
    title.style.color = '#202223';
    title.style.margin = '0';
    title.style.lineHeight = '1';
    title.style.wordWrap = 'break-word';
    title.style.maxWidth = '100%';
    title.innerText = 'Free Shipping';

    // Create the subheading span
    const subheading = document.createElement('span');
    subheading.id = 'subheading';
    subheading.style.display = 'block';
    subheading.style.fontSize = '14px';
    subheading.style.color = '#96a4b6';
    subheading.style.fontWeight = '400';
    subheading.style.margin = '0';
    subheading.style.textAlign = 'left';
    subheading.style.lineHeight = '1';
    subheading.style.wordWrap = 'break-word';
    subheading.style.maxWidth = '100%';
    subheading.innerText = 'Delivered to Your doorstep, on us!';

    // Append the title and subheading to the text container
    textContainer.appendChild(title);
    textContainer.appendChild(subheading);

    // Create the CTA button
    const ctaButton = document.createElement('a');
    ctaButton.href = 'https://zehntech-store1.myshopify.com';
    ctaButton.id = 'cta-button';
    ctaButton.target = '_blank';
    ctaButton.style.textDecoration = 'none';
    ctaButton.style.flexShrink = '0';
    ctaButton.style.margin = '0';
    ctaButton.style.border = 'none';
    ctaButton.style.fontWeight = '600';
    ctaButton.style.padding = '10px 16px';
    ctaButton.style.display = 'flex';
    ctaButton.style.alignItems = 'center';
    ctaButton.style.justifyContent = 'center';
    ctaButton.style.fontSize = '14px';
    ctaButton.style.backgroundColor = '#202223';
    ctaButton.style.color = '#fafafa';
    ctaButton.style.borderRadius = '4px';
    ctaButton.style.cursor = 'pointer';
    ctaButton.style.transition = 'background-color 0.2s ease-in-out';
    ctaButton.innerText = 'Shop now';

    // Append the icon container, text container, and CTA button to the main container
    container.appendChild(iconContainer);
    container.appendChild(textContainer);
    container.appendChild(ctaButton);

    // Select the product-form class
    const productForm = document.querySelector('.product-form');
    if (productForm) {
        productForm.appendChild(container); // Append the container to the product form
    }
});
