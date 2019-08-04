const content = [
  {
    name: 'intro',
    say: ['[Introduction] Welcome to Kubash!'],
    steps: [
      {
        say: [
          "Let's get you started!",
          'First, a little that you should know:',
          'Bash is a way of interacting with a computer. Just like you can use a mouse or touch a scream to make things happen, you can also "talk" to a computer in Bash',
          'Computer programmers and people who use computers a lot really like Bash - it lets them do some things faster than using a mouse, and it also lets you do the same things over and over easily by running a list of commands.',
          "You'll see as you go!",
          'Go ahead and type "c" or "continue".',
        ],
        expect: ['c', 'continue'],
        other: [
          'Hmm, it looks like you didn\'t type "c" or "continue". Of course, don\'t type the quotes "", just the word. Try again.',
        ],
      },
      {
        say: [
          "Ok, so first, let me describe a little more about what you're looking at in Bash.",
          "First, you're always typing on the last line, and then the lines above show the history of what you have already typed.",
          "Handy, huh? That way you can just scroll up and see what you've already done.",
          'To the left below, you\'ll see "ubuntu@mycomputer:".',
          "You'll see that wherever you are going to type, and you'll also see it above in things you have typed.",
          "Let's start a new line just by typing Enter.",
        ],
        expect: [''],
        other: [
          'It looks like you typed something. Just simply hit the Enter key on your keyboard.',
        ],
      },
    ],
  },
]

const getResponse = (text, state) => {
  console.log(`text is ---${text}---`)
  if (!state)
    return {
      say: [...content[0].say, ...content[0].steps[0].say],
      state: { section: 'intro', step: 0 },
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
      }
    }
    // If section there
    else {
      return {
        say: nextStep.say,
        state: { section: currentSection.name, step: currentStep + 1 },
      }
    }
  }
  // If an unexpected answer
  else {
    return {
      say: currentStep.other,
      state,
    }
  }
}

export { getResponse }
