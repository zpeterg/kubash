export default {
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
    {
      say: [
        'Ok, let me explain a little bit about computers that will help you.',
        'Computers use what\'s called a "file system". The file system is a way of storing and getting files.',
        'What\'s a file? I\'ll show you one. Type "ls".',
      ],
      expect: ['ls'],
      other: [
        'You don\'t need to type anything except just "ls". Without the quotes.',
      ],
    },
    {
      say: [
        'And here you go! Look right below and you\'ll see that you have a file. The file is "myfile.txt".',
        'The part after the period ("txt") is called the File Extension. It helps you know that kind of file it is. This file is a text file. That means it\'s for a person to read.',
        'There are other kinds of files - like ".js", which is a JavaScript file for computers to read.',
        'Type "c" to continue.',
      ],
      expect: ['c'],
      other: ['Oops! Just type "c" to continue.'],
    },
    {
      say: [
        "Well, that's got it for the basic use of bash! You're moving along quick!",
        'Next up, you\'ll learn how to use vim to change documents. Type "c" or "continue".',
      ],
      expect: ['c', 'continue'],
      other: [
        'Oop, it seems you don\'t want to move on. But we\'ve run out of stuff for you to learn here. So type "continue"',
      ],
    },
  ],
}
