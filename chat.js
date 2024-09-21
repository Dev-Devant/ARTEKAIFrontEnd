function createMainInterface() {
    const main = document.createElement('div');
    main.className = 'flex flex-col h-screen bg-[#08090A] text-[#bbbec6] font-sans';
    main.style.position = 'relative';

    const progressGraf = `
            <div style="width: 80px; height: 80px; position: relative;">
                <svg viewBox="0 0 36 36" style="transform: rotate(-90deg); width: 100%; height: 100%;">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4bc6ff" stroke-width="2" stroke-dasharray="${state.CursingNow.progress}, 100"/>
                </svg>
                <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8rem; font-weight: bold; color: #4bc6ff;">${state.CursingNow.progress}%</span>
            </div>
    `

    const header = `
        <header class="flex h-16 shrink-0 items-center justify-between border-b border-[#68696e] px-4 md:px-6">
            <div class="flex items-center space-x-4">
                <div class="w-10 h-10">
                    <a href="https://www.artekacademy.com/" target="_blank">
                        <img src="Logo Artek.png" alt="Logo de la Empresa" class="w-full h-full">
                    </a>
                </div>
            </div>
            `
             + progressGraf +
            `
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
        </style>
`
    let videoBackground = ``
    if(state.bakgroundPlay){
        videoBackground = `
            <video autoplay muted loop playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;"> 
                <source src="backgroundB.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `
        }
    let slider = ``
            if(state.slideDisplay){
                slider = `

                <div class="flex-grow flex flex-col items-center justify-center p-4" style="width: calc(100% - ${state.chatWidth}px);  max-height: 90%;">

                    <div class="w-full max-w-3xl aspect-video bg-[${slides[state.currentSlide].color}] rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden bg-opacity-95"
                        style="max-width: 90%; overflow-y: auto; max-height: 95%; word-wrap: break-word; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;"

                        onmouseover="this.style.boxShadow='0 0 15px 3px #2493d4';'"
                        onmouseout="this.style.boxShadow='0 0 10px 2px #4bc6ff';"
                    >
                    <div class="absolute inset-0 bg-gradient-to-br from-transparent to-[#2493d4] opacity-20"></div>
                    
                    <div class="relative z-10 text-left" style="max-width: 90%;  word-wrap: break-word; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; margin-left: 10px;">
                        <h1 class="text-2xl font-bold mb-2 text-[#4bc6ff]" style="margin: 0; word-wrap: break-word;">${slides[state.currentSlide].Module}</h1>
                        <h2 class="text-xl font-semibold mb-4 text-[#a1a1a1]" style="margin: 0; word-wrap: break-word;">${slides[state.currentSlide].unit}</h2>
                        <br><br>
                        <p class="text-[#bbbec6]" style="margin: 0; word-wrap: break-word;">${slides[state.currentSlide].content}</p>
                    </div>



                </div>  

                <div class="flex justify-center items-center w-full max-w-3xl mt-4 space-x-4" style = "z-index : 2;">
                    <button
                        id="prevSlide"
                        style="border: 2px solid #4bc6ff; color: #4bc6ff; border-radius: 9999px; padding: 12px; box-shadow: 0 0 5px 2px #4bc6ff; transition: all 0.3s;"
                        onmouseover="this.style.boxShadow='0 0 15px 3px #2493d4'; this.style.backgroundColor='#2493d4'; this.style.color='#08090A';"
                        onmouseout="this.style.boxShadow='0 0 10px 2px #4bc6ff'; this.style.backgroundColor=''; this.style.color='#4bc6ff';"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <button
                        id="repeatSlide"
                        style="border: 2px solid #4bc6ff; color: #4bc6ff; border-radius: 9999px; padding: 12px; box-shadow: 0 0 5px 2px #4bc6ff; transition: all 0.3s;"
                        onmouseover="this.style.boxShadow='0 0 15px 3px #2493d4'; this.style.backgroundColor='#2493d4'; this.style.color='#08090A';"
                        onmouseout="this.style.boxShadow='0 0 10px 2px #4bc6ff'; this.style.backgroundColor=''; this.style.color='#4bc6ff';"
                        aria-label="Repeat slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M3 2v6h6"/><path d="M3 13a9 9 0 1 0 3-7.7L3 8"/></svg>
                    </button>
                    <button
                        id="reExplain"
                        style="border: 2px solid #4bc6ff; color: #4bc6ff; border-radius: 9999px; padding: 12px; box-shadow: 0 0 5px 2px #4bc6ff; transition: all 0.3s;"
                        onmouseover="this.style.boxShadow='0 0 15px 3px #2493d4'; this.style.backgroundColor='#2493d4'; this.style.color='#08090A';"
                        onmouseout="this.style.boxShadow='0 0 10px 2px #4bc6ff'; this.style.backgroundColor=''; this.style.color='#4bc6ff';"
                        aria-label="Re-explain slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                    </button>
                    <button
                        id="nextSlide"
                        style="border: 2px solid #4bc6ff; color: #4bc6ff; border-radius: 9999px; padding: 12px; box-shadow: 0 0 5px 2px #4bc6ff; transition: all 0.3s;"
                        onmouseover="this.style.boxShadow='0 0 15px 3px #2493d4'; this.style.backgroundColor='#2493d4'; this.style.color='#08090A';"
                        onmouseout="this.style.boxShadow='0 0 10px 2px #4bc6ff'; this.style.backgroundColor=''; this.style.color='#4bc6ff';"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                </div>

            </div>`
            }

    const chatSelector = `
            <div class="flex items-center space-x-2 mt-4 ml-2 border-b border-[#68696e] pb-2">
        
                <button id="goBackButton" aria-label="Go back" style="background-color: #042a2b; border: 2px solid #4bc6ff; color: #4bc6ff; width: 60px; height: 60px; border-radius: 50%; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: background-color 0.3s, transform 0.1s;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
        
                <span id="dynamicText" style="flex-grow: 1; text-align: center; color: #fff; font-size: 18px;">
                    ${state.creatingmode ? 'Creando curso' : 'Guia '}
                    ${state.slideDisplay ? state.CursingNow.title:''}
                </span>
        
                <style>
                    #goBackButton:hover {
                        background-color: #4bc6ff;
                        color: #042a2b;
                        transform: scale(1.1);
                    }
                </style>
            </div>
        `;
    const chater = `
            <div
                id="chatResizer"
                class="absolute top-0 bottom-0 w-1 bg-[#68696e] hover:bg-[#4bc6ff] cursor-ew-resize"
                style="left: calc(100% - ${state.chatWidth}px - 2px)"
            ></div>
            <div 
                id="chatContainer"
                class="flex flex-col border-l border-[#68696e] relative bg-black bg-opacity-80"
                style="width: ${state.chatWidth}px;  overflow-y: auto; max-height: 80vh;"
            >`
            + chatSelector + `
                <div
                    id="chatMessages"
                    class="flex-grow p-4 overflow-y-auto"
                >
                    ${state.chatMessages.map(msg => `
                        <div class="mb-4 ${msg.sender === 'User' ? 'text-right' : 'text-left'}">
                            <div class="inline-block p-3 rounded-lg ${
                                msg.sender === 'User' 
                                    ? 'bg-[#4bc6ff] text-[#08090A]' 
                                    : 'bg-[#042a2b] text-[#bbbec6]'
                            }">
                                <span class="font-bold">${msg.sender}: </span>
                                <span>${msg.message}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${state.showScrollButton ? `
                    <button
                        id="scrollToBottom"
                        class="absolute left-1/2 bottom-20 transform -translate-x-1/2 p-2 bg-[#4bc6ff] bg-opacity-50 text-[#08090A] rounded-full shadow-lg hover:bg-opacity-75 transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><line x1="12" x2="12" y1="5" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                    </button>
                ` : ''}
                <div class="p-4 border-t border-[#68696e]">
                    <div class="flex items-center space-x-2">
                        

                        <button
                            id="toggleVoice"
                            class="p-2 rounded-full ${
                                state.isVoiceEnabled
                                    ? 'bg-[#4bc6ff] text-[#08090A]'
                                    : 'bg-[#042a2b] text-[#4bc6ff] border border-[#4bc6ff]'
                            } hover:bg-[#2493d4] hover:text-[#08090A] transition-colors"
                        >
                            ${state.isVoiceEnabled ? 
                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>' : 
                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/></svg>'
                            }
                        </button>
                        <textarea
                            id="messageInput"
                            placeholder="Type a message..."
                            class="flex-grow px-3 py-2 bg-[#042a2b] border border-[#68696e] rounded-md text-[#bbbec6] placeholder-[#68696e] focus:outline-none focus:ring-[#4bc6ff] focus:border-[#4bc6ff] resize-none"
                            rows="1"
                        ></textarea>
                        <button id="sendMessage" class="p-2 bg-[#4bc6ff] text-[#08090A] rounded-full hover:bg-[#2493d4]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </div>
                </div>
            </div> `

    const botomLine = `
        </div>
            <div class="bg-[#042a2b] text-[#68696e] p-2 text-center border-t border-[#68696e]" style="display: flex; justify-content: space-between; align-items: center;">
            <div style="flex-grow: 1; text-align: center;">
                <span class="text-sm">App Version: ${appVersion}</span>
            </div>
            <button
                id="bugReport"
                style="border: 2px solid #4bc6ff; color: #4bc6ff; border-radius: 9999px; padding: 2px 12px; box-shadow: 0 0 5px 2px #4bc6ff; transition: all 0.3s; margin-left: auto; display: flex; align-items: center;"
                onmouseover="this.style.boxShadow='0 0 15px 3px #2493d4'; this.style.backgroundColor='#2493d4'; this.style.color='#08090A';"
                onmouseout="this.style.boxShadow='0 0 10px 2px #4bc6ff'; this.style.backgroundColor=''; this.style.color='#4bc6ff';"
                aria-label="Bug Report"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" style="margin-right: 8px;">
                    <path d="M12 1L7 7h10L12 1zm0 22l5-6H7l5 6zm0-12h4v6h-4v-6zm0 0H8v6h4v-6z"/>
                </svg>
                Report Bug
            </button>
        </div>
        `
    main.innerHTML = header + `<div id="mainContent" class="flex flex-1 overflow-hidden relative" style="position: relative; z-index: 1;">` 
         + slider + chater + botomLine + `            
            ${state.showBillingMenu ? createBillingMenu() : ''}
            ${state.showConfigurationMenu ? createConfigurationMenu() : ''}
    `;

    main.querySelector('#userMenuButton').addEventListener('click', toggleUserMenu);
    main.querySelector('#goBackButton').addEventListener('click', goBack);

    main.querySelector('#toggleVoice').addEventListener('click', toggleVoice);
    main.querySelector('#sendMessage').addEventListener('click', sendMessage);
    main.querySelector('#messageInput').addEventListener('keypress', handleKeyPress);
    main.querySelector('#bugReport').addEventListener('click', handleBugReport);
    if (state.slideDisplay){
        main.querySelector('#prevSlide').addEventListener('click', prevSlide);
        main.querySelector('#nextSlide').addEventListener('click', nextSlide);
        main.querySelector('#repeatSlide').addEventListener('click', repeatSlide);
        main.querySelector('#reExplain').addEventListener('click', reExplain);
    }

    if (state.showScrollButton) {
        main.querySelector('#scrollToBottom').addEventListener('click', scrollToBottom);

    }

    const chatResizer = main.querySelector('#chatResizer');
    chatResizer.addEventListener('mousedown', startResizing);

    //const chatMessages = main.querySelector('#chatMessages');
    //chatMessages.addEventListener('scroll', handleScroll);

    return main;
}

function goBack(){
    state.mainMenuOpen = true
    state.courseSelectorMode = false
    state.chatWidth= window.innerWidth *0.95,

    stopVoice()
    render()
}

function handleConversations(event){
    state.currentChat = event.target.value
    render()
}

function handleBugReport(){
    window.open('https://forms.gle/GbqgQmvcEvmW4Vyn8', '_blank');
            /// to debug //////////////////////////////
            state.slideDisplay = true
            state.chatWidth = window.innerWidth * 0.3
            render()
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message) {
        state.chatMessages.push({sender: 'User', message: message});
        messageInput.value = '';
        if(state.slideDisplay){
            sendTask(message)
            render()
            return
        }
        chatter(message);        
        render();
    }    
}

function handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

function toggleVoice() {
    state.isVoiceEnabled = !state.isVoiceEnabled;
    if(state.isVoiceEnabled){
        voiceRec.start()
    }else{
        voiceRec.stop()
    }
    render();
}

function startResizing(mouseDownEvent) {
    mouseDownEvent.preventDefault();
    const startX = mouseDownEvent.clientX;
    const startWidth = state.chatWidth;

    function onMouseMove(mouseMoveEvent) {
        const containerWidth = document.getElementById('mainContent').clientWidth;
        const newChatWidth = startWidth - (mouseMoveEvent.clientX - startX);
        state.chatWidth = Math.max(300, Math.min(newChatWidth, containerWidth));
        if(state.chatWidth < window.innerWidth*0.05){
            state.chatWidth = window.innerWidth*0.05
        }
        render();
        state.bakgroundPlay = false
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        state.bakgroundPlay = true
        render()
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

function scrollToBottom() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleScroll() {
    const chatMessages = document.getElementById('chatMessages');
    const { scrollTop, scrollHeight, clientHeight } = chatMessages;
    const isScrolledToBottom = scrollHeight - scrollTop === clientHeight;
    state.showScrollButton = !isScrolledToBottom;
    render();
}

function setTextInInput(text) {
    const inputField = document.querySelector('#messageInput'); 
    if (inputField) {
        inputField.value = text; 
        inputField.dispatchEvent(new Event('input')); 
        }
}

function formatMessage(text) {
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/!CMDARTEKSYSTEM\/-\/(.*?)CMD!/, '');
    formatted = formatted.replace(/```(\w+)\s+([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre style="background-color: #1e1e1e; color: #dcdcdc; padding: 10px; border-radius: 5px; overflow-x: auto; font-family: 'Courier New', Courier, monospace; white-space: pre-wrap;"><code class="language-${lang}">${code}</code></pre>`;
    });   
    return formatted;
}


function removeFormatting(text) {
    let cleaned = text.replace(/```[\s\S]*?```/g, '')
    .replace(/<code>[\s\S]*?<\/code>/g, '')
    .replace(/<[^>]*>/g, '');
    return cleaned;
}

function ActionsDetector(text) {
    const action = 'Crear';
    const escapedText = encodeURIComponent(text); // Codificar el texto
    return `<button 
            style="background-color: #4bc6ff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;"
            onclick="handleCommand('${action}', decodeURIComponent('${escapedText}'))">${action}
        </button>`;
}

function handleCommand(action, text) {
    RequestCreate(text)
}

