import React from 'react';
import { Card, Layout } from '@shopify/polaris';
import './badgeTypePage.css'; // Import your CSS file

const BadgeTypePage = ({ onBackClick }) => {
    return (
        <Layout>
            <Layout.Section>
                <div className="Polaris-Box" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
                    <div
                        className="Polaris-VerticalStack"
                        style={{
                            display: 'flex',
                            alignItems: 'center', // Align the button and heading vertically
                            gap: '20px', // Add the 16px gap between the button and the heading

                        }}
                    >
                        {/* Back Button with New SVG */}
                        <button
                            className="Polaris-Button Polaris-Button--plain"
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
                                    fill: 'rgb(97, 106, 117)', // Set the initial arrow color
                                    transition: 'fill 0.3s ease' // Smooth transition for hover effect
                                }}
                                className="back-arrow" // Add class for targeting
                            >
                                <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                            </svg>
                        </button>

                        {/* Heading */}
                        <h1 className="Polaris-Text--root Polaris-Text--headingLg">Choose badge type</h1>
                    </div>
                </div>

                {/* Updated content structure */}
                <div className="Polaris-Stack">
                    <div className="Polaris-Stack__Item">
                        <div className="sc-fxwrCY iQjPCS"> {/* Added class for styling */}
                            <Card>
                                <div className="Polaris-Card__Section">
                                    <img
                                        alt="Product page"
                                        width="100%"
                                        src="https://freeshipping-essential-apps.uk/product_page.svg"
                                        className="card-Img"
                                        style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '1 / 0.64' }}
                                    />
                                    <div className="Polaris-TextContainer">
                                        <h2 className="Polaris-Text--root Polaris-Text--headingMd">Product page</h2>
                                        <p>Block in product page below add to cart button.</p>
                                        <button className="Polaris-Button Polaris-Button--fullWidth" type="button">
                                            <span className="Polaris-Button__Content">
                                                <span className="Polaris-Button__Text">Select this badge type</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="Polaris-Stack__Item">
                        <div className="sc-fxwrCY iQjPCS"> {/* Added class for styling */}
                            <Card>
                                <div className="Polaris-Card__Section">
                                    <img
                                        width="100%"
                                        alt="Cart page"
                                        src="https://freeshipping-essential-apps.uk/cart_page.svg"
                                        className="card-Img"
                                        style={{ objectFit: 'cover', objectPosition: 'center center', aspectRatio: '1 / 0.64' }}
                                    />
                                    <div className="Polaris-TextContainer">
                                        <div className="Polaris-Stack Polaris-Stack--spacingTight Polaris-Stack--alignmentCenter">
                                            <div className="Polaris-Stack__Item">
                                                <h2 className="Polaris-Text--root Polaris-Text--headingMd">Cart page</h2>
                                            </div>
                                            <div className="Polaris-Stack__Item">
                                                <span className="Polaris-Badge Polaris-Badge--statusInfo">
                                                    <span className="Polaris-Text--root Polaris-Text--visuallyHidden">Info</span>
                                                    <span className="Polaris-Text--root Polaris-Text--bodySm">Essential plan</span>
                                                </span>
                                            </div>
                                        </div>
                                        <p>Add a badge block to cart page or cart drawer.</p>
                                        <button className="Polaris-Button Polaris-Button--fullWidth" type="button">
                                            <span className="Polaris-Button__Content">
                                                <span className="Polaris-Button__Text">Select this badge type</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="Polaris-Stack__Item">
                        <div className="sc-fxwrCY iQjPCS"> {/* Added class for styling */}
                            <Card>
                                <div className="Polaris-Card__Section">
                                    <img
                                        alt="Countdown timer"
                                        width="100%"
                                        src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/public/timer.jpg"
                                        className="card-Img"
                                        style={{ objectFit: 'contain', objectPosition: 'center center', aspectRatio: '1 / 0.64' }}
                                    />
                                    <div className="Polaris-TextContainer">
                                        <h2 className="Polaris-Text--root Polaris-Text--headingMd">Essential Countdown timer</h2>
                                        <p>Boost Sales with urgency and Flash Sales!</p>
                                        <button className="Polaris-Button Polaris-Button--fullWidth" type="button">
                                            <span className="Polaris-Button__Content">
                                                <span className="Polaris-Button__Text">View app</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Layout.Section>
        </Layout>
    );
};

export default BadgeTypePage;
