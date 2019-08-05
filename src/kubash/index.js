import content_intro from './content_intro'
import content_vim from './content_vim'

const content = [content_intro, content_vim]

const getResponse = (text, state) => {
  if (!state) {
    console.log('--------------')
    return {
      say: [...content[0].say, ...content[0].steps[0].say],
      state: { section: 'intro', step: 0 },
      displayType: content[0].steps[0].displayType,
    }
  }
  const currentSectionIndex = content.findIndex(x => x.name === state.section)
  const currentSection = content[currentSectionIndex]
  const currentStep = currentSection.steps[state.step]
  if (currentStep.expect.indexOf(text) >= 0) {
    const nextStep = currentSection.steps[state.step + 1]
    // If at end of section
    if (typeof nextStep === 'undefined') {
      const nextSection = content[currentSectionIndex + 1]
      return {
        say: [...nextSection.say, ...nextSection.steps[0].say],
        state: { section: nextSection.name, step: 0 },
        displayType: nextSection.steps[0].displayType,
      }
    }
    // If section there
    else {
      return {
        say: nextStep.say,
        output: nextStep.output || null,
        state: { section: currentSection.name, step: state.step + 1 },
        displayType: nextStep.displayType,
      }
    }
  }
  // If an unexpected answer
  else {
    return {
      say: currentStep.other,
      state,
      displayType: currentStep.displayType,
    }
  }
}

export { getResponse }
