import contentFiles1 from './contentFiles1'
import contentFiles2 from './contentFiles2'
import contentVim from './contentVim'

const content = [contentFiles1, contentFiles2]

const getResponse = (text, state) => {
  if (!state) {
    return {
      say: [...content[0].say, ...content[0].steps[0].say],
      state: { section: 'files1', step: 0 },
      displayType: content[0].steps[0].displayType,
      bar:
        typeof content[0].steps[0].bar === 'undefined'
          ? null
          : content[0].steps[0].bar,
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
        bar: typeof nextStep.bar === 'undefined' ? null : nextStep.bar,
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
