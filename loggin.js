function createLoginForm() {
    const form = document.createElement('div');
    form.className = 'min-h-screen flex items-center justify-center bg-[#08090A] text-[#bbbec6] p-4 font-sans';
    
    // Title
    const title = `
    <h2 class="text-3xl font-bold text-center text-[#4bc6ff] mb-6">
        ${translations[state.language]?.loginTitle || 'Login to Artek'}
    </h2>
    `;
    
    // Email field
    const emailField = `
    <div>
       <label for="email" class="block text-sm font-medium text-[#bbbec6]">
        ${translations[state.language]?.emailLabel || 'Email'}
        </label>
        <input
            id="email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 bg-[#08090A] border border-[#68696e] rounded-md text-[#bbbec6] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff]"
        />
    </div>
    `;
    
    // Password field
    const passwordField = `
    <div>
        <label for="password" class="block text-sm font-medium text-[#bbbec6]">
            ${translations[state.language]?.passwordLabel || 'Password'}
        </label>
        <input
            id="password"
            type="password"
            required
            class="mt-1 block w-full px-3 py-2 bg-[#08090A] border border-[#68696e] rounded-md text-[#bbbec6] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff]"
        />
    </div>

    `;

    // Confirm Password field (if not login)
    const confirmPasswordField = !state.isLogin ? `
    <div>
        <label for="confirmPassword" class="block text-sm font-medium text-[#bbbec6]">
            ${translations[state.language]?.confirmPasswordLabel || 'Confirm Password'}
        </label>
        <input
            id="confirmPassword"
            type="password"
            required
            class="mt-1 block w-full px-3 py-2 bg-[#08090A] border border-[#68696e] rounded-md text-[#bbbec6] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff]"
        />
    </div>

    ` : '';
    
    // Checkbox for terms and newsletter (if not login)
    const termsAndNewsletter = !state.isLogin ? `
    <div class="flex items-start">
        <input id="terms" type="checkbox" required class="mr-2" />
        <label for="terms" class="text-sm text-[#bbbec6]">
            ${translations[state.language]?.termsLabel || 'I agree to the'}
            <a href="#" id="termsLink" class="text-[#4bc6ff] hover:underline">
                ${translations[state.language]?.termsLabel || 'Terms of Use'}
            </a>
        </label>
    </div>
    <div class="flex items-start">
        <input id="newsletter" type="checkbox" class="mr-2" />
        <label for="newsletter" class="text-sm text-[#bbbec6]">
            ${translations[state.language]?.newsletterLabel || 'Subscribe to the newsletter'}
        </label>
    </div>
    ` : '';
    
    // Language selector
    const languageSelector = `
    <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-[#4bc6ff]">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" x2="22" y1="12" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <select
            id="language"
            class="bg-[#08090A] border border-[#68696e] rounded text-[#bbbec6] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff] text-sm py-1 px-2"
        >
            ${languages.map(lang => `
                <option value="${lang.code}" ${lang.code === state.language ? 'selected' : ''}>
                    ${lang.name}
                </option>
            `).sort((a, b) => a.includes(`value="${state.language}"`) ? -1 : 1).join('')}
        </select>
    </div>
`;

    
    // Submit button
    const submitButton = `
        <button
        type="submit"
        class="w-full bg-[#4bc6ff] text-[#08090A] py-2 px-4 rounded-md hover:bg-[#2493d4] transition-colors"
        >
            ${state.isLogin ? translations[state.language]?.loginButton || 'Login' : translations[state.language]?.createAccountButton || 'Create Account'}
        </button>
        
    `;
    
    // Google Auth button
    const googleAuthButton = `
    <button
        id="googleAuth"
        class="w-full bg-white text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center"
    >
        <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
            <path fill="none" d="M1 1h22v22H1z" />
        </svg>
        ${state.isLogin ? translations[state.language]?.loginWithGoogle || 'Login with Google (not available yet)' : translations[state.language]?.signUpWithGoogle || 'Sign up with Google (not available yet)'}
    </button>
    `;
    
    // Toggle authentication button
    const toggleAuthButton = `
    <button
    id="toggleAuth"
    class="text-[#4bc6ff] hover:underline focus:outline-none"
>
    ${state.isLogin ? translations[state.language]?.toggleToSignUp || 'Need an account? Sign up' : translations[state.language]?.toggleToLogin || 'Already have an account? Login'}
</button>

    `;

    // forgot pass
        const forgotPass = `
        <br>
        <button
        id="forgotPass"
        class="text-[#4bc6ff] hover:underline focus:outline-none"
    >
        Contraseña olvidada
    </button>
    
        `;
    
    // Final composition
    form.innerHTML = `
    <div class="w-full max-w-md">
        <div class="bg-[#042a2b] rounded-lg shadow-lg p-8 border border-[#4bc6ff]">
            ${title}
            <form id="authForm" class="space-y-4">
                ${emailField}
                ${passwordField}
                ${confirmPasswordField}
                ${termsAndNewsletter}
                ${languageSelector}
                ${submitButton}
            </form>
            <div class="mt-4">
                ${googleAuthButton}
            </div>
            <div class="mt-4 text-center">
                ${toggleAuthButton}
                ${forgotPass}
            </div>
        </div>

    </div>
    `;
    
    form.querySelector('#authForm').addEventListener('submit', handleSubmit);
    form.querySelector('#googleAuth').addEventListener('click', handleGoogleAuth);
    form.querySelector('#toggleAuth').addEventListener('click', () => {
        state.isLogin = !state.isLogin;
        render();
    });
    form.querySelector('#language').addEventListener('change', handleLanguageChange);
    form.querySelector('#forgotPass').addEventListener('click', () => {
        const email = document.getElementById('email').value
        resetPassrequest(email)
    });

    return form;
}


function handleLanguageChange(event) {
    if(event.target.value == null){
        return
    }
    state.language = event.target.value;
    render()
}
function handleSubmit(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const email = document.getElementById('email') ? document.getElementById('email').value : '';
    
    if (state.isLogin) {        
        login(email, password)
        /* debuggin
        state.isLoggedIn = true;
        state.user = {
          name: "PAco",
          email: "PaQuitoWho@gmail.com",
          avatar: 'Avatar.png?height=32&width=32',
          language: state.language,
          country: 'Argentina',
          voice: 'voice1'
      }; 
      state.mainMenuOpen = true
      state.slideDisplay = false
      render()
      //*/
    } else {
        const termsAccepted = document.getElementById('terms').checked;
        const newsletterSubscribed = document.getElementById('newsletter').checked;
        const confirmPassword = document.getElementById('confirmPassword').value
        if (!termsAccepted) {
            const termsCheckbox = document.getElementById('terms');
            termsCheckbox.classList.add('border-red-500');
            termsCheckbox.nextElementSibling.classList.add('text-red-500');
            alert('You must accept the Terms of Use to create an account.');
            return;
        }
        if(password.length < 6){
            alert('Password most have 6 or more characters.');
            return;
        }
        if(confirmPassword != password){
            alert('Password most match.');
            return;
        }
        
        register(email, password,newsletterSubscribed)
    }
}

function handleGoogleAuth() {
    console.log('Initiating Google authentication');
    alert('Aun no funciona :/')
    return;
    state.isLoggedIn = true;
    state.user = {
        name: 'Google User',
        email: 'google.user@example.com',
        avatar: '/placeholder.svg?height=32&width=32',
        language: state.language,
        country: 'United States',
        voice: 'voice1'
    };
    render();
}

function showTerms(e) {
    e.preventDefault();
    alert('Terms of Use:\n\n1. User agrees to use the service responsibly.\n2. User will not share their account information.\n3. Company reserves the right to terminate accounts that violate these terms.');
    // In a real application, you might open a modal or navigate to a terms page instead
}