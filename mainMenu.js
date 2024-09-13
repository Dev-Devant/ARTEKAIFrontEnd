function createMainMenu() {
    const menu = document.createElement('div');
    menu.className = 'min-h-screen flex items-center justify-center bg-[#] text-[#bbbec6] p-4 font-sans';
    menu.style.position = 'relative';

    const header = `
        <header class="flex h-16 shrink-0 items-center justify-between border-b border-[#68696e] px-4 md:px-6" 
            style="position: absolute; top: 0; width: 100%; z-index: 2; background-color: black;">
            <div class="flex items-center space-x-4">
                <div class="w-10 h-10">
                    <a href="https://www.artekacademy.com/" target="_blank">
                        <img src="Logo Artek.png" alt="Logo de la Empresa" class="w-full h-full">
                    </a>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex items-center space-x-2">
                    <div class="text-right">
                        <p 
                            class="text-sm font-medium text-[#4bc6ff] cursor-pointer"
                            data-tooltip="Nombre de usuario actual, puedes cambiarlo en opciones"
                        >
                            ${state.user.name}
                        </p>
                        <p 
                            class="text-xs text-[#bbbec6] cursor-pointer"
                            data-tooltip="Cantidad de modulos que puedes crear o cursar, puedes recargar en buy"
                        >
                            Tokens: ${state.user.tokens}
                        </p>
                    </div>
                    <div class="relative">
                        <button 
                            id="userMenuButton"
                            class="rounded-full focus:outline-none focus:ring-2 focus:ring-[#4bc6ff]"
                        >
                            <img
                                src="${state.user.avatar}"
                                width="32"
                                height="32"
                                class="rounded-full"
                                alt="User avatar"
                            />
                        </button>
                        ${state.isUserMenuOpen ? createUserMenu() : ''}
                    </div>
                </div>
            </div>
        </header>

        <style>
            [data-tooltip] {
                position: relative;
                cursor: pointer;
            }

            [data-tooltip]::after {
                content: attr(data-tooltip);
                position: absolute;
                background-color: #333;
                color: #fff;
                padding: 4px 8px;
                border-radius: 4px;
                white-space: nowrap;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.2s ease-in-out;
                z-index: 10;
            }

            [data-tooltip]:hover::after {
                opacity: 1;
            }

            /* Estilos de los botones */
            .custom-button {
                background-color: #042a2b;
                border: 2px solid #4bc6ff;
                color: #4bc6ff;
                padding: 2rem;
                font-size: 1.5rem;
                cursor: pointer;
                width: 300px;
                height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 15px;
                position: relative;
                overflow: hidden;
                transition: all 0.3s ease;
                margin: 0 1rem; /* Espaciado horizontal entre botones */
            }

            .custom-button svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0.2;
                transition: all 0.3s ease;
            }

            .custom-button span {
                position: relative;
                z-index: 1;
                transition: color 0.3s ease;
            }

            .custom-button:hover {
                background-color: #4bc6ff;
                color: #042a2b;
                border-color: #042a2b;
            }

            .custom-button:hover svg {
                opacity: 0.4;
                transform: scale(1.1) translate(-50%, -50%);
            }

            .custom-button:hover span {
                color: #042a2b;
            }

            /* Estilos del botón de reportes de errores */
            #bugReport {
                border: 2px solid #4bc6ff;
                color: #4bc6ff;
                border-radius: 9999px;
                padding: 2px 12px;
                box-shadow: 0 0 5px 2px #4bc6ff;
                transition: all 0.3s;
                margin-left: auto;
                display: flex;
                align-items: center;
            }

            #bugReport:hover {
                box-shadow: 0 0 15px 3px #2493d4;
                background-color: #2493d4;
                color: #08090A;
            }
        </style>
    `;

    const videoBackground = `
        <video autoplay muted loop playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;"> 
            <source src="backgroundB.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;

    const buttonStyle = `
    
<style>
    .custom-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 20px;
        background-color: #042a2b; /* Color primario */
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-size: 16px;
        font-weight: bold;
    }

    .custom-button:hover {
        background-color: #023047; /* Color al pasar el mouse */
    }

    .custom-button svg {
        stroke: #fff; /* Color del ícono */
    }

    .custom-button span {
        font-size: 18px;
    }
    .custom-button:hover span {

        color: #fff; 
    }
    </style>
    `
    const createButton = `
        <button id="createCourse" class="custom-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Nuevo curso</span>
        </button>
    `;

    const continueButton = `
        <button id="continueCourse" class="custom-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Continuar</span>
        </button>
    `;

    const askButton = ``
    
    /*`
        <button id="getHelp" class="custom-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>Ayuda</span>
        </button>
    `;*/

    const bottomLine = `
        </div>
        <div class="bg-[#042a2b] text-[#68696e] p-2 text-center border-t border-[#68696e]" style="position: absolute; bottom: 0; width: 100%; display: flex; justify-content: space-between; align-items: center;">
            <div style="flex-grow: 1; text-align: center;">
                <span class="text-sm">App Version: ${appVersion}</span>
            </div>
            <button
                id="bugReport"
                aria-label="Bug Report"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" style="margin-right: 8px;">
                    <path d="M12 1L7 7h10L12 1zm0 22l5-6H7l5 6zm0-12h4v6h-4v-6zm0 0H8v6h4v-6z"/>
                </svg>
                Report Bug
            </button>
        </div>
    `;

    menu.innerHTML = header + `
<div id="mainContent" class="flex flex-1 overflow-hidden relative" style="position: relative; z-index: 1;">
    ${videoBackground}
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; height: 100%; width: 100%; padding-top: 2rem;">
        <h1 class="text-4xl font-bold mb-8" style = "z-index: 2;">Bienvenido!</h1>
        <div style="display: flex; gap: 1rem; justify-content: center; align-items: center; width: 100%;">
            ${createButton}
            ${continueButton}
            ${askButton}
            ${buttonStyle}
        </div>
        ${bottomLine}
    </div>
</div>

    `;
    menu.querySelector('#userMenuButton').addEventListener('click', toggleUserMenu);
    menu.querySelector('#createCourse').addEventListener('click', createCourse);
    menu.querySelector('#continueCourse').addEventListener('click', searchingCourses);
    //menu.querySelector('#getHelp').addEventListener('click', consultant);

    return menu
}

function createCourse(){
    state.mainMenuOpen = false
    state.creatingmode = true
    state.slideDisplay = false
    state.courseSelectorMode = false

    render()
}

function searchingCourses(){
    getCourses()
    state.mainMenuOpen = false
    state.slideDisplay = false
    state.creatingmode = false

    state.courseSelectorMode = true
    render()
}

function consultant(){
    state.mainMenuOpen = false
    state.creatingmode = false
    render()
}