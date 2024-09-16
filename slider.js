

function nextSlide() {

    if(slides[state.currentSlide].task && !slides[state.currentSlide].completed){
        return
    }

    state.currentSlide = (state.currentSlide + 1);
    stopVoice()
    if(state.currentSlide >= slides.length){
        state.currentSlide = slides.length -1
        return
    }
    if(slides[state.currentSlide].content != null){
        const filter = removeFormatting(slides[state.currentSlide].content)
        InterpreterVoice(filter)

    }

    state.CursingNow.progress = (state.currentSlide / slides.length).toFixed(2)*100;
    render();
}

function prevSlide() {
    state.currentSlide = (state.currentSlide - 1 );
    if(state.currentSlide<0){
        state.currentSlide = 0 
        return
    }
    stopVoice()
    const filter = removeFormatting(slides[state.currentSlide].content)
    InterpreterVoice(filter)
    render();
}

function togglePlayPause() {
    state.isPlaying = !state.isPlaying;
    render();
}

function repeatSlide() {
    stopVoice()
    InterpreterVoice(slides[state.currentSlide].content)
}

function reExplain() {
    reExplainRequest(slides[state.currentSlide].content)
}

