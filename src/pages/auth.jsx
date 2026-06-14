import React, { useState } from 'react';
import style from './styles/Auth.module.css';
import { LuPhone, LuShieldCheck, LuArrowRight, LuUser, LuFileText, LuCamera } from 'react-icons/lu';

function Auth({ onAuthSuccess }) {
    // 1. Extended state steps: 'phone' | 'otp' | 'profile'
    const [step, setStep] = useState('phone'); 
    const [countryCode, setCountryCode] = useState('+1');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    
    // 2. New Profile Onboarding State
    const [fullName, setFullName] = useState('');
    const [bio, setBio] = useState('Hey there! I am using ChatApp.'); // Default WhatsApp bio style
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    
    const [error, setError] = useState('');

    const countryCodes = [
        { code: '+1', name: '🇺🇸 US/CA' },
        { code: '+44', name: '🇬🇧 UK' },
        { code: '+91', name: '🇮🇳 IN' },
        { code: '+61', name: '🇦🇺 AU' },
        { code: '+977', name: '🇳🇵 NP' },
        { code: '+971', name: '🇦🇪 AE' },
        { code: '+33', name: '🇫🇷 FR' },
        { code: '+49', name: '🇩🇪 DE' },
    ];

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (phoneNumber.length < 7 || phoneNumber.length > 15) {
            setError('Please enter a valid phone number length.');
            return;
        }
        setStep('otp');
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (otp.length !== 6) {
            setError('Verification code must be 6 digits.');
            return;
        }

        if (otp === '123456') { 
            // Instead of finishing, we route to the new profile creation step
            setStep('profile');
        } else {
            setError('Invalid code. Try using the mock code: 123456');
        }
    };

    // 3. Image file handling & URL preview generation
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            setImagePreview(URL.createObjectURL(file)); // Creates a safe temporal browser image string
        }
    };

    // 4. Final Submission
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!fullName.trim()) {
            setError('Name field cannot be empty.');
            return;
        }

        // Bundle up user profile payload
        const userData = {
            phone: `${countryCode}${phoneNumber}`,
            name: fullName,
            bio: bio,
            image: profileImage // Raw file object ready to be sent to storage/Multer
        };

        console.log('User Profile Registered Successfully:', userData);
        if (onAuthSuccess) onAuthSuccess(userData);
    };

    return (
        <div className={style.authPageContainer}>
            <div className={style.authCard}>
                <header className={style.authHeader}>
                    <div className={style.brandLogo}>
                        <span>💬</span> 
                    </div>
                    <h2>
                        {step === 'phone' && 'Welcome to ChatApp'}
                        {step === 'otp' && 'Verify Security Code'}
                        {step === 'profile' && 'Profile Info'}
                    </h2>
                    <p>
                        {step === 'phone' && 'Enter your phone number to sign up or log in.'}
                        {step === 'otp' && 'We sent a 6-digit security code to your device.'}
                        {step === 'profile' && 'Please provide your name and an optional profile picture.'}
                    </p>
                </header>

                {error && <div className={style.errorBanner}>{error}</div>}

                {/* Step 1: Phone Entry */}
                {step === 'phone' && (
                    <form onSubmit={handlePhoneSubmit} className={style.authForm}>
                        <div className={style.phoneFieldsRow}>
                            <div className={style.countrySelectWrapper}>
                                <select 
                                    value={countryCode} 
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    className={style.countryDropdown}
                                >
                                    {countryCodes.map((item) => (
                                        <option key={item.code} value={item.code}>
                                            {item.name} ({item.code})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={style.inputWrapper}>
                                <LuPhone className={style.inputIcon} />
                                <input 
                                    type="tel" 
                                    placeholder="Phone number" 
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                    maxLength="15"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className={style.authButton}>
                            Continue <LuArrowRight />
                        </button>
                    </form>
                )}

                {/* Step 2: OTP Entry */}
                {step === 'otp' && (
                    <form onSubmit={handleOtpSubmit} className={style.authForm}>
                        <div className={style.inputWrapper}>
                            <LuShieldCheck className={style.inputIcon} />
                            <input 
                                type="text" 
                                placeholder="Enter 6-digit OTP" 
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                maxLength="6"
                                required
                            />
                        </div>
                        <button type="submit" className={style.authButton}>
                            Verify & Log In
                        </button>
                        <button 
                            type="button" 
                            className={style.backLinkButton} 
                            onClick={() => { setStep('phone'); setError(''); }}
                        >
                            Change phone number
                        </button>
                    </form>
                )}

                {/* Step 3: NEW Profile Onboarding View */}
                {step === 'profile' && (
                    <form onSubmit={handleProfileSubmit} className={style.authForm}>
                        {/* Interactive Avatar Image Picker */}
                        <div className={style.avatarUploadContainer}>
                            <label htmlFor="avatar-input" className={style.avatarLabel}>
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className={style.avatarImagePreview} />
                                ) : (
                                    <div className={style.avatarFallback}>
                                        <LuCamera className={style.cameraIcon} />
                                    </div>
                                )}
                                <div className={style.cameraHoverOverlay}>
                                    <span>ADD PROFILE PHOTO</span>
                                </div>
                            </label>
                            <input 
                                id="avatar-input" 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageChange} 
                                className={style.hiddenFileInput}
                            />
                        </div>

                        {/* Name Input */}
                        <div className={style.inputWrapper}>
                            <LuUser className={style.inputIcon} />
                            <input 
                                type="text" 
                                placeholder="Type your name here" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                maxLength="25"
                                required
                            />
                        </div>

                        {/* Bio Input */}
                        <div className={style.inputWrapper}>
                            <LuFileText className={style.inputIcon} />
                            <input 
                                type="text" 
                                placeholder="Bio / Status" 
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                maxLength="60"
                            />
                        </div>

                        <button type="submit" className={style.authButton}>
                            Finish Setup
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Auth;