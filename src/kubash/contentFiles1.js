export default {
  name: 'files1',
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
      bar: 'ubuntu@mycomputer:~/myfiles',
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
        'Type "c" to continue.',
      ],
      output: ['myfile.txt'],
      expect: ['c'],
      other: ['Oops! Just type "c" to continue.'],
    },
    {
      say: [
        'You might be wondering: But what IS a file?',
        'You might be wondering: But what IS a file? And what is myfile.txt?',
        'Well, let\'s check out myfile.txt. A simple way to see what\'s in a file is to concatentate "cat" a file.',
        'Type "cat myfile.txt',
      ],
      expect: ['cat myfile.txt'],
      other: [
        'Ya, no. Try typing just "cat myfile.txt", except (of course) without the quotes.',
      ],
    },
    {
      say: [
        'And there you go! Look below and read what is inside of the file "myfile.txt". Remember it\'s in white because it\'s what you actuall see in bash.',
        'You can see that "myfile.txt" is the beginning of a story. It is "text" - writing meant for a person to read.',
        'You can even tell that it\'s text because it says ".txt" at the end.',
        'Some files end with other things. Like ".js" means that it\'s a JavaScript file. A JavaScript file is a set of instructions for a computer to read.',
        'Type "c" or "continue".',
      ],
      output: [
        'Once upon a time, there was a princess and a brave knight.',
        '',
      ],
      expect: ['c', 'continue'],
      other: ['Hmmm, just type "continue".'],
    },
    {
      say: [
        "You're probably wondering how you can add to that story. But hold on, let's first get you a little more used to handling files.",
        "In fact, let's start with making a new one.",
        'It\'s easy to make a file. Just type "touch fishfile.txt".',
      ],
      expect: ['touch fishfile.txt'],
      other: ['Try again. Type "touch fishfile.txt".'],
    },
    {
      say: [
        "Great! Now, you may be thinking: But nothing happened! But you'd be wrong. The file was made, but you just haven't told bash to show it to you.",
        'So let\'s ask bash to show it to us. Type "ls" like before to "list" your files.',
      ],
      expect: ['ls'],
      other: ['Ya, no, nothing else. Just type "ls" without the quotes.'],
    },
    {
      say: [
        "Good! Now look below and you'll see your file, along with the one that was already there.",
        "There's actually another way to see files that looks a little nicer sometimes - in nice little columns like an index in a book.",
        "Let's try that. Just type ls -l.",
      ],
      output: ['fishfile.txt'],
      expect: ['ls -l'],
      other: ['Ya, no, nothing else. Just type "ls" without the quotes.'],
    },
    {
      say: [
        "And there you go! Look below and you'll see your two files in a list.",
        'I think we\'re done here. Type "c" to continue.',
      ],
      output: ['fishfile.txt', 'myfile.txt'],
      expect: ['c', 'continue'],
      other: ['Just "c" please!'],
    },
    {
      say: [
        "Ok, we're going to get to some more cool stuff and show you more of where you are in bash and how to get around.",
        "But first, let's recap.",
        'Remember how to make a file? Go ahead and make a file called cowfile.txt.',
      ],
      expect: ['touch cowfile.txt'],
      other: [
        'Mmm, you got something wrong. To make a file called cowfile.txt, just type "touch cowfile.txt"',
      ],
    },
    {
      say: [
        'Good!',
        'Alright, now how do you list out the files that you have made so far? Go ahead and type it now.',
      ],
      output: [''],
      expect: ['ls'],
      other: ['Remember, to "list" your files, just type "ls". Try it again.'],
    },
    {
      say: [
        'There you go!',
        'Ok, so next challenge for you: How do you list your files in a column (all stacked-up)?',
      ],
      output: ['cowfile.txt     fishfile.txt    myfile.txt'],
      expect: ['ls -l'],
      other: [
        'To list in a column, just type "ls -l". Don\'t for that "-l" at the end!',
      ],
    },
    {
      say: [
        'Great!',
        "That's it for here. You've learned what a file is, how to make them, and how to list them two ways.",
        'Type "c" to continue.',
      ],
      output: ['cowfile.txt', 'fishfile.txt', 'myfile.txt'],
      expect: ['c', 'continue'],
      other: ['Oops. Just "continue" or "c" is fine.'],
    },
  ],
}
