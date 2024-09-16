function createUserMenu() {
    const billingButton = `
        <button
            id="showBillingMenu"
            class="block px-4 py-2 text-sm text-[#bbbec6] hover:bg-[#2493d4] hover:text-[#08090A] w-full text-left"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 h-4 w-4"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
            Billing
         </button>    
    `
    const configButton = `
        <button
                id="showConfigurationMenu"
                class="block px-4 py-2 text-sm text-[#bbbec6] hover:bg-[#2493d4] hover:text-[#08090A] w-full text-left"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 h-4 w-4"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                Configuration
            </button>    
    `
    const languageButton = `
        <div class="px-4 py-2 text-sm text-[#bbbec6] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 h-4 w-4"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <select
                id="userLanguage"
                class="bg-[#042a2b] border border-[#68696e] rounded text-[#bbbec6] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff] text-xs py-1 px-1"
            >
                ${languages
                    .map(
                    (lang) =>
                        `<option value="${lang.code}" ${
                        lang.code === state.user.language ? "selected" : ""
                        }>${lang.name}</option>`
                    )
                    .join("")}
            </select>
        </div>
    `
    const certifyButton = `
        <a
            href="https://example.com" 
            target="_blank" 
            class="block"
        >
            <button
                id="ShowCertificate"
                class="px-4 py-2 text-sm text-[#bbbec6] hover:bg-[#2493d4] hover:text-[#08090A] w-full text-left"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 h-4 w-4"><path d="M2 7l10-5 10 5v10l-10 5-10-5V7z"/><path d="M12 12l4 4m0-4l-4 4"/><path d="M2 7l10 5 10-5M2 17v-7l10 5 10-5v7"/></svg>
                Certify
            </button>
        </a>
    `
    const logoutButton = `
        <button
            id="logout"
            class="block px-4 py-2 text-sm text-[#bbbec6] hover:bg-[#2493d4] hover:text-[#08090A] w-full text-left"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 h-4 w-4"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
             Log out
         </button>
    `
  return `<div class="absolute right-0 mt-2 w-48 bg-[#042a2b] rounded-md shadow-lg py-1 ring-1 ring-[#68696e] ring-opacity-5 z-50" style = "z-index : 2;">`
     + certifyButton + logoutButton +
    `</div>`;
}

function createBillingMenu() {
  const closeButton = `
        <button id="closeBilling" class="text-[#bbbec6] hover:text-[#4bc6ff] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <line x1="18" x2="6" y1="6" y2="18"/>
                <line x1="6" x2="18" y1="6" y2="18"/>
            </svg>
        </button>
    `;

  const backButton =
    state.showSubscriptionOptions || state.selectedOption
      ? `
        <button id="billingBack" class="mr-4 text-[#bbbec6] hover:text-[#4bc6ff] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <line x1="19" x2="5" y1="12" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
            </svg>
        </button>
    `
      : "";

  const title = state.selectedOption
    ? "Payment Options"
    : state.showSubscriptionOptions
    ? "Subscription Options"
    : "Billing Information";

  const billingInfo =
    !state.showSubscriptionOptions && !state.selectedOption
      ? `
        <div class="flex flex-col md:flex-row justify-between items-center mb-6">
            <div class="text-[#bbbec6] mb-4 md:mb-0">
                <p class="mb-2"><span class="font-semibold">Current Plan:</span> Standard</p>
                <p class="mb-2"><span class="font-semibold">Renewal Date:</span> 2023-12-31</p>
                <p class="mb-2"><span class="font-semibold">Card:</span> **** **** **** 1234</p>
                <p><span class="font-semibold">Expiry:</span> 12/25</p>
            </div>
            <button id="upgradePlan" class="bg-[#4bc6ff] text-[#08090A] px-6 py-2 rounded text-sm hover:bg-[#2493d4] transition-colors">
                Upgrade Plan
            </button>
        </div>
    `
      : "";

  const subscriptionOptionsList =
    state.showSubscriptionOptions && !state.selectedOption
      ? `
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            ${subscriptionOptions
              .map(
                (option) => `
                <div class="border rounded-lg p-2 cursor-pointer transition-colors ${
                  state.selectedOption === option
                    ? "border-[#4bc6ff] bg-[#4bc6ff] bg-opacity-10"
                    : "border-[#68696e] hover:border-[#4bc6ff]"
                }" data-option-id="${option.id}">
                    <h3 class="text-sm font-semibold text-[#4bc6ff] mb-1">${
                      option.name
                    }</h3>
                    <p class="text-xs text-[#bbbec6] mb-1">$${option.price.toFixed(
                      2
                    )} / month</p>
                    <ul class="text-xs text-[#bbbec6]">
                        ${option.features
                          .map(
                            (feature) => `<li class="truncate">${feature}</li>`
                          )
                          .join("")}
                    </ul>
                </div>
            `
              )
              .join("")}
        </div>
    `
      : "";

  const paymentOptions = state.selectedOption
    ? `
        <div>
            <h3 class="text-lg font-semibold text-[#4bc6ff] mb-2">Selected Plan: ${
              state.selectedOption.name
            }</h3>
            <p class="text-[#bbbec6] mb-4">Price: $${state.selectedOption.price.toFixed(
              2
            )} / month</p>
            <h4 class="text-sm font-semibold text-[#4bc6ff] mb-2">Choose Payment Method</h4>
            <div class="flex flex-wrap gap-2">
                <button class="bg-[#4bc6ff] text-[#08090A] px-3 py-1 rounded text-sm hover:bg-[#2493d4] transition-colors">
                    Pay with Stripe
                </button>
                ${
                  state.user.country === "Argentina"
                    ? `
                    <button class="bg-[#4bc6ff] text-[#08090A] px-3 py-1 rounded text-sm hover:bg-[#2493d4] transition-colors">
                        Pay with Mercado Libre
                    </button>
                `
                    : ""
                }
            </div>
        </div>
    `
    : "";

  const completeBuild = `
        <div class="fixed inset-x-0 top-16 bottom-10 bg-[#08090A] bg-opacity-95 flex items-center justify-center z-50 overflow-y-auto">
            <div class="bg-[#042a2b] rounded-lg p-4 w-full max-w-3xl mx-4">
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center">
                        ${backButton}
                        <h2 class="text-xl font-bold text-[#4bc6ff]">${title}</h2>
                    </div>
                    ${closeButton}
                </div>
                ${billingInfo}
                ${subscriptionOptionsList}
                ${paymentOptions}
            </div>
        </div>
    `;

  return completeBuild;
}

function createConfigurationMenu() {
  return `
        <div class="fixed inset-x-0 top-16 bottom-10 bg-[#08090A] bg-opacity-95 flex items-center justify-center z-50 overflow-y-auto">
            <div class="bg-[#042a2b] rounded-lg p-4 w-full max-w-3xl mx-4">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold text-[#4bc6ff]">Configuration</h2>
                    <button id="closeConfiguration" class="text-[#bbbec6] hover:text-[#4bc6ff] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div>
                        <h3 class="text-lg font-semibold text-[#4bc6ff] mb-2">Change Username</h3>
                        <div class="flex space-x-2">
                            <input
                                type="text"
                                id="newUsername"
                                value="${state.user.name}"
                                class="flex-grow px-3 py-2 bg-[#08090A] border border-[#68696e] rounded-md text-[#bbbec6] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff]"
                            />
                            <button
                                id="updateUsername"
                                class="bg-[#4bc6ff] text-[#08090A] px-4 py-2 rounded text-sm hover:bg-[#2493d4] transition-colors"
                            >
                                Update Username
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold text-[#4bc6ff] mb-2">Change Password</h3>
                        <div class="space-y-2">
                            <input
                                type="password"
                                id="newPassword"
                                placeholder="New Password"
                                class="w-full px-3 py-2 bg-[#08090A] border border-[#68696e] rounded-md text-[#bbbec6] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff]"
                            />
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm New Password"
                                class="w-full px-3 py-2 bg-[#08090A] border border-[#68696e] rounded-md text-[#bbbec6] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff]"
                            />
                            <button
                                id="changePassword"
                                class="bg-[#4bc6ff] text-[#08090A] px-4 py-2 rounded text-sm hover:bg-[#2493d4] transition-colors"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold text-[#4bc6ff] mb-2">Audio Voice</h3>
                        <div class="flex space-x-2">
                            <select
                                id="audioVoice"
                                class="flex-grow px-3 py-2 bg-[#08090A] border border-[#68696e] rounded-md text-[#bbbec6] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff]"
                            >
                                ${availableVoices
                                  .map(
                                    (voice) => `
                                    <option value="${voice.id}" ${
                                      voice.id === state.user.voice
                                        ? "selected"
                                        : ""
                                    }>${voice.name}</option>
                                `
                                  )
                                  .join("")}
                            </select>
                            <button
                                id="playDemo"
                                class="bg-[#4bc6ff] text-[#08090A] px-4 py-2 rounded text-sm hover:bg-[#2493d4] transition-colors flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                Play Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleLogout() {
    state.isLoggedIn = false;
    state.username = "";
    state.email = "";
    state.password = "";
    state.isLogin = true;
    state.chatMessages = [];
    state.isUserMenuOpen = false;
    logOutSession(localStorage.getItem('SessionKey'));

    render();
}

function toggleUserMenu() {
  state.isUserMenuOpen = !state.isUserMenuOpen;
  render();
}

function addButtonsFunctions() {
  document
    .getElementById("closeBilling")
    .addEventListener("click", function () {
      // Código a ejecutar cuando se hace clic en el botón
      console.log("Botón clickeado");
      // Aquí puedes colocar el código para cerrar la ventana, ocultar un elemento, etc.
    });
}
