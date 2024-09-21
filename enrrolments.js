function createEnrrols() {
    const courseList = document.createElement('div');
    courseList.className = 'min-h-screen flex items-center justify-center bg-[#] text-[#bbbec6] p-4 font-sans';
    courseList.style.position = 'relative';

    const header = `
        <header class="flex h-16 shrink-0 items-center justify-between border-b border-[#68696e] px-4 md:px-6" 
    style="position: absolute; top: 0; width: 100%; z-index: 2; background-color: black; ">

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
                margin: 0 1rem;
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

            .course-list-container {
                overflow-y: auto;
                max-height: calc(100vh - 140px);
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                flex: 1;
                margin-right: 2rem;
            }

            .course-item {
                background-color: #f4f4f4;
                padding: 1rem;
                border-radius: 8px;
                width: 100%;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                cursor: pointer;
                transition: background-color 0.2s ease;
            }

            .course-item:hover {
                background-color: #e0e0e0;
            }

            .course-details {
                display: none;
                background-color: #fff;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                width: 100%;
                flex: 1;
                margin-left: 2rem;
            }

            .course-details.active {
                display: block;
            }
        </style>
    `;

    const videoBackground = `
        <video autoplay muted loop playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;"> 
            <source src="backgroundB.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;

    const bottomLine = `
        <div class="bg-[#042a2b] text-[#68696e] p-2 text-center border-t border-[#68696e]" style="position: fixed; bottom: 0; left: 0; width: 100%; max-width: 100vw; display: flex; justify-content: center; align-items: center; z-index: 10;">
            <div style="text-align: center;">
                <span class="text-sm">App Version: ${appVersion}</span>
            </div>
            <button
                id="bugReport"
                aria-label="Bug Report"
                style="margin-left: 16px;" <!-- Para agregar espacio -->
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                    <path d="M12 1L7 7h10L12 1zm0 22l5-6H7l5 6zm0-12h4v6h-4v-6zm0 0H8v6h4v-6z"/>
                </svg>
                Report Bug
            </button>
        </div>
    `;


    const goback = `
                <button id="goBackButton" aria-label="Go back" style="background-color: #042a2b; border: 2px solid #4bc6ff; color: #4bc6ff; width: 60px; height: 60px; border-radius: 50%; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: background-color 0.3s, transform 0.1s;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>  
    
    `
    const list = createCourseList(courses);
     ``
    
     let displayCourseOverview = '';
     if (state.currentCourseoverview !== '') {
         displayCourseOverview = createCourseOverview();
     }
     
     courseList.innerHTML = header + `
         <div id="mainContent" class="flex flex-1 overflow-hidden relative" style="position: relative; z-index: 1; height: calc(100vh - 112px);">

         
             <div style="z-index: 2; display: flex; flex-direction: row; justify-content: flex-start; align-items: flex-start; width: 100%; height: 100%; padding-top: 2rem;">
                ${goback}
                <div class="course-list-container" style="width: 33.33%; max-width: 33.33%; overflow-y: auto; height: 100%; flex-shrink: 0;">
                     ${list}
                 </div>
                 ${displayCourseOverview}
                 ${bottomLine}
             </div>
         </div>
     `;
     


    
    courseList.querySelector('#bugReport').addEventListener('click', handleBugReport);
    courseList.querySelector('#userMenuButton').addEventListener('click', toggleUserMenu);

    courseList.querySelector('.course-list-container').addEventListener('click', function(event) {
        const courseItem = event.target.closest('.course-item');
        if (courseItem) {
            state.currentCourseoverview =  courseItem.dataset.id;
            render()
        } else{
            state.currentCourseoverview = ''
        }
    });
    
    courseList.querySelector('#goBackButton').addEventListener('click', goBack);


    return courseList
}


function createCourseList(courses) {
    let acum = '';
    courses.forEach(course => {
        acum += `
            <div class="course-item" data-id="${course.title}" style="background-color: #042a2b; border: 2px solid #4bc6ff; padding: 10px; display: flex; justify-content: space-between; align-items: center;">
                <div style="text-align: right; color: white;">
                    <h3 class="text-xl font-semibold">${course.title}</h3>
                    <p class="text-gray-700">ID: ${course.ID}</p>
                </div>
                <div style="width: 80px; height: 80px; position: relative;">
                    <svg viewBox="0 0 36 36" style="transform: rotate(-90deg); width: 100%; height: 100%;">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4bc6ff" stroke-width="2" stroke-dasharray="${course.progress}, 100"/>
                    </svg>
                    <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8rem; font-weight: bold; color: #4bc6ff;">${course.progress}%</span>
                </div>
            </div>
        `;
    });
    return acum;
}

function createCourseOverview() {
    const course = courses.filter(course => course.title === state.currentCourseoverview)[0];
    if (!course) return ''; 

    return `
        <div class="course-details active" style="flex: 2; padding-left: 2rem; background-color: #042a2b; border: 2px solid #4bc6ff;">
            <h3 class="text-xl font-semibold" style="color: white;">${course.title}</h3>
            <p style="color:" class = "text-gray-700">Id: ${course.ID}</p>
            <p style="color: white;font-size: 13px;">${course.description}</p>
            <p style="color: white;font-size: 14px;"><br>tags:</p>
            <p style="color: white;font-size: 11px;">${course.tags}</p>
            <div style="width: 80px; height: 80px; position: relative;">
                <svg viewBox="0 0 36 36" style="transform: rotate(-90deg); width: 100%; height: 100%;">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4bc6ff" stroke-width="2" stroke-dasharray="${course.progress}, 100"/>
                </svg>
                <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8rem; font-weight: bold; color: #4bc6ff;">${course.progress}%</span>
            </div>
<button
    id="loadCourseButton"
    aria-label="Load Course"
    style="float: right; background-color: #4bc6ff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; display: flex; gap: 8px;"
    onclick="loadCourse();"
>
    <svg id="courseIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
        <path d="M5 12h14l-7-7-7 7zm0 8h14l-7-7-7 7z"/>
    </svg>
    Cargar
</button>

        </div>
    `;
}

// Función para cambiar el ícono y modificar la variable externa
function changeIconAndVariable() {
    // Cambia el ícono del botón
    const courseIcon = document.getElementById('courseIcon');
    courseIcon.innerHTML = '<path d="M5 3h14l-7 9-7-9zm0 14h14l-7 9-7-9z"/>';

    // Cambia la variable externa (ajustar según necesidad)
    externalVariable = 'new value'; 
}


function loadCourse(){
    const course = courses.filter(course => course.title === state.currentCourseoverview)[0];

    state.CursingNow = course
    state.mainMenuOpen = false
    state.slideDisplay = true
    state.creatingmode = false
    state.currentCourseId = course.ID
    state.courseSelectorMode = false
    state.chatWidth = window.innerWidth *0.4
    // reset chat

    state.chatMessages = []
    state.chatMessages.push({sender: 'Artek IA', message: 'Este es el chat de ' + course.title });

    // cargar los slides, son importantes

    const content = course.content.modulos

    slides = []
    for (var i = 0 ; i< content.length ;i++){
        const module = content[i].titulo
        const temas = content[i].temas
        const resumen = content[i].resumen
        slides.push({
            Module: module,
            unit: '',   
            content: resumen,
            color : '#07295f',
            task: false,
            completed: false
        })
        for (var j = 0 ; j< temas.length ;j++){            
            slides.push({
                Module: module,
                unit: temas[j].Tema,   
                content: formatMessage(temas[j].explicacion.toString()),
                color : '#042a2b',
                task: false,
                completed: course.enroledData.temas[j]
            })
            slides.push({
                Module: module,
                unit: temas[j].Tema,   
                content: formatMessage(temas[j].ejemplo.toString()),
                color : '#042a2b',
                task: false,
                completed: course.enroledData.temas[j]
            })
            slides.push({
                Module: module,
                unit: temas[j].Tema,   
                content: formatMessage(temas[j].ejercicio.toString()) +`
                    Usa el chat para subir tu tarea.                
                `,
                color : '#183e51',
                task: true,
                completed: course.enroledData.temas[j]
            })
        }
        

    }

    state.currentSlide = 0
    state.isPlaying = true
    render()
}

