export default {
  name: 'vim',
  say: ["[Vim] Let's learn about editing a file!"],
  steps: [
    {
      say: [
        'Vim is an application that can edit files. Vim is also used with the keyboard.',
        'To start vim, just type "vim myfile.txt"',
      ],
      expect: ['vim myfile.txt'],
      other: [
        'You didn\'t type that quite right. Type exactly this: "vim myfile.txt".',
      ],
    },
    {
      say: [
        'Welcome to vim!',
        'To Save, just type ":wq" to quit and write (save) to a file.',
      ],
      expect: [':wq'],
      other: ['You didn\'t write ":wq" (without the quotes ""). Try again'],
      displayType: 'vim',
    },
    {
      say: ['Ok, you quit vim.', 'Type "c" or "continue".'],
      expect: ['c', 'continue'],
      other: ['Type a "c" or "continue" to go on.'],
    },
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
}
