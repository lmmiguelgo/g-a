"use client";

import React, { useState, useEffect } from 'react';

// --- Constants ---
const CONSENT_KEY = 'marketing_consent'; // Key to store user's choice: 'true' or 'false'
const ANALYTICS_COOKIE_KEY = 'analytics_id'; // Example of a non-essential cookie
const CONSENT_LIFESPAN_DAYS = 365; // Cookie expires in 1 year

// ----------------------------------------------------------------------
// --- CORE JAVASCRIPT UTILITIES (Enable/Disable Logic) ---
// ----------------------------------------------------------------------

/**
 * Utility function to find the value of a specific cookie.
 * @param {string} name - The name of the cookie to find.
 * @returns {string | null} The cookie value, or null if not found.
 */
const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

/**
 * Checks if the user has explicitly granted marketing consent.
 * This is the gatekeeper for non-essential cookies.
 * @returns {boolean} True if CONSENT_KEY is found and its value is 'true'.
 */
const hasMarketingConsent = (): boolean => {
    return getCookie(CONSENT_KEY) === 'true';
};

/**
 * Sets a cookie with a specific name, value, and expiration date.
 * @param {string} name - The cookie name.
 * @param {string} value - The cookie value.
 * @param {number} days - Days until expiration.
 */
const setCookie = (name: string, value: string, days: number) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    // Set cookie, secure flag should be added in production environment
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=Lax";
};

/**
 * Deletes a cookie immediately by setting a past Max-Age.
 * @param {string} name - The cookie name to delete.
 */
const deleteCookie = (name: string) => {
    document.cookie = name + '=; Max-Age=-99999999; path=/; SameSite=Lax';
};


/**
 * Sets a cookie ONLY if marketing consent has been explicitly granted.
 * This is the CORE conditional function that all non-essential scripts must use.
 * @param {string} name - The cookie name.
 * @param {string} value - The cookie value.
 * @param {number} days - Days until expiration.
 */
export const setNonEssentialCookie = (name: string, value: string, days: number = 30) => {
    if (hasMarketingConsent()) {
        setCookie(name, value, days);
        console.log(`[Cookies] SUCCESS: Set non-essential cookie: ${name}`);
    } else {
        console.warn(`[Cookies] BLOCKED: Tried to set ${name}, but consent was not granted.`);
    }
};

// ----------------------------------------------------------------------
// --- ICONS ---
// ----------------------------------------------------------------------

const CookieIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
        <path d="M18 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
        <path d="M11 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
        <path d="M7 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
        <path d="M15 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
);

// ----------------------------------------------------------------------
// --- POLICY MODAL COMPONENT ---
// ----------------------------------------------------------------------

const PolicyModal = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed pt-20 inset-0 z-999 flex items-center justify-center p-4 backdrop-blur-md bg-second-bg/50 bg-opacity-70">
            <div className="relative mx-auto max-w-3xl h-full md:h-2/3 w-full bg-background border border-foreground/10 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-5 flex justify-between items-center border-b border-foreground/10 bg-background sticky top-0 z-10">
                    <h2 className="text-2xl font-bold text-foreground flex items-center">
                        <CookieIcon className="w-6 h-6 text-accent-primary mr-2" />
                        Our Cookie Policy
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full text-foreground/60 hover:text-accent-primary hover:bg-white/5 transition cursor-pointer"
                        aria-label="Close Policy"
                    >
                        <XIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto text-foreground grow">
                  
                    
                    <h3 className="text-xl font-semibold text-accent-primary mb-3">1. What are Cookies?</h3>
                    <p className="mb-4">
                        Cookies are small text files that websites place on your device as you browse. They are used to remember your preferences, track your use of the website, and provide a better overall experience.
                    </p>

                    <h3 className="text-xl font-semibold text-accent-primary mb-3">2. Types of Cookies We Use</h3>
                    
                    <ul className="list-disc list-inside space-y-3 pl-4 mb-4">
                        <li>
                            <strong className="font-medium text-white">Essential/Strictly Necessary Cookies:</strong> These cookies are required for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences or logging in.
                        </li>
                        <li>
                            <strong className="font-medium text-white">Analytics/Performance Cookies:</strong> These cookies, which require your consent, allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.
                        </li>
                        <li>
                            <strong className="font-medium text-white">Marketing/Targeting Cookies:</strong> These cookies, which require your consent, may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-accent-primary mb-3">3. Managing Your Preferences</h3>
                    <p className="mb-4">
                        You can choose to accept or decline analytics and marketing cookies using the options in our cookie banner. If you choose to **Decline Analytics**, we will not set any non-essential cookies. You can change your mind at any time.
                    </p>
                    
                    
                </div>
            </div>
        </div>
    );
};


// ----------------------------------------------------------------------
// --- COOKIE CONSENT COMPONENT (Fixed Bottom Banner) ---
// ----------------------------------------------------------------------

const CookieConsent = () => {
    // 1. State to control visibility of the BANNER
    const [showBanner, setShowBanner] = useState(false);
    // 2. State to control visibility of the POLICY MODAL
    const [showPolicyModal, setShowPolicyModal] = useState(false);
    
    // 3. Initial check on mount: Only show if no consent choice has been made yet
    useEffect(() => {
        if (getCookie(CONSENT_KEY) === null) {
            setShowBanner(true);
        }
    }, []);

    /**
     * Handles acceptance: sets consent cookie to 'true', hides banner, and enables features.
     */
    const handleAccept = () => {
        setCookie(CONSENT_KEY, 'true', CONSENT_LIFESPAN_DAYS);
        setShowBanner(false);
        console.log(`[Cookies] CONSENT GRANTED. Marketing features are now ENABLED.`);
    };

    /**
     * Handles decline: sets consent cookie to 'false', deletes non-essential cookies, and hides banner.
     */
    const handleDecline = () => {
        // Set consent explicitly to false to remember the choice for the duration of the cookie lifespan.
        setCookie(CONSENT_KEY, 'false', CONSENT_LIFESPAN_DAYS);
        
        // Clean up any non-essential cookies immediately.
        deleteCookie(ANALYTICS_COOKIE_KEY); 
        
        setShowBanner(false);
        console.log(`[Cookies] CONSENT DECLINED. Marketing features are now DISABLED.`);
    };

    return (
        <>
            {/* Renders the Policy Modal when showPolicyModal is true */}
            <PolicyModal 
                isVisible={showPolicyModal} 
                onClose={() => setShowPolicyModal(false)} 
            />

            {/* Renders the Cookie Banner when showBanner is true */}
            {showBanner && (
                <div className="fixed bottom-4 left-4 z-100 max-w-sm w-[calc(100%-2rem)] bg-second-bg/80 bg-opacity-90 backdrop-blur-sm p-6 shadow-2xl rounded-2xl border border-white/10 animate-fade-up animate-duration-500 animate-ease-out">
                    <div className="flex flex-col space-y-4">
                        
                        {/* Content Area */}
                        <div className="flex items-start text-sm text-foreground">
                            <CookieIcon className="w-6 h-6 text-accent-primary mr-3 shrink-0 mt-0.5" />
                            <div>
                                <p className="leading-relaxed">
                                    We use cookies to improve your experience. By clicking <strong>"Accept All"</strong>, you consent to our use of analytics.
                                </p>
                                <a 
                                    href="#" 
                                    onClick={(e) => { e.preventDefault(); setShowPolicyModal(true); }}
                                    className="font-semibold underline text-accent-primary hover:text-accent-primary/80 mt-1 inline-block"
                                >
                                    View Policy
                                </a>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 w-full">
                            {/* Decline Button */}
                            <button
                                onClick={handleDecline}
                                className="cursor-pointer flex-1 rounded-md border border-foreground/20 px-3 py-2 text-xs font-semibold text-foreground hover:bg-white/5 transition duration-150"
                            >
                                Decline
                            </button>
                            {/* Accept Button */}
                            <button
                                onClick={handleAccept}
                                className="cursor-pointer flex-1 rounded-md bg-accent-primary px-3 py-2 text-xs font-semibold text-white shadow-md shadow-accent-primary/40 hover:bg-accent-primary/80 transition duration-150"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
