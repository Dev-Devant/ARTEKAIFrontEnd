

function nextSlide() {
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
