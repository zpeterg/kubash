export default {
  name: 'intro',
  say: ['[Introduction] Welcome to Kubash!'],
  steps: [
    {
      say: [
        "Look at this! You're already in the second section! In this one we're going to go over files and changing files. (You'll get to work on that story!).",
        "But first, let's take a look at directories.",
        'You may wonder, "What\'s a directory??" Well, here\'s what it is: A directory is a list of files.',
        'So you have actually already seen one - the inside of one. A directory is like a box that contains files. To see what\'s inside of the box, you just type "ls".',
        'Go ahead and type "ls" again.',
      ],
      bar: 'ubuntu@mycomputer:~/myfiles$ ',
      expect: ['ls'],
      other: ['Mmmm, just "ls" please!'],
    },
    {
      say: [
        'There you go. Look below and you\'ll see the inside of the "box" or "directory" that you\'re in.',
        'Now we\'re going to get out of that box and go to another one. To CHANGE your DIRECTORY, you type "cd".',
        "Easy right? But of course you can't just change CHANGE DIRECTORY, you have to say which directory to change to.",
        'Type "cd ../". Now watch that slash',
      ],
      output: ['cowfile.txt     fishfile.txt    myfile.txt'],
      expect: ['cd ../'],
      other: [
        'You missed something. Try that again - just "cd ../". Make sure to get the right slash. It\'s the one on the "?" key.',
      ],
    },
    {
      say: [
        'It may look like nothing happened... but look closer. The white bar at the bottom used to say, "ubuntu@mycomputer:~/myfiles", but now the "/myfiles" part is gone.',
        'Why? Well, that was the name of the directory you were in.',
        "Let's see what's inside this directory. Remember what to type?",
      ],
      bar: 'ubuntu@mycomputer:~',
      expect: ['ls'],
      other: [
        'No. Remember to "list" the files in a directory, just type "ls".',
      ],
    },
    {
      say: [
        'It may look like nothing happened... but look closer. The white bar at the bottom used to say, "ubuntu@mycomputer:~/myfiles", but now the "/myfiles" part is gone.',
        'Why? Well, that was the name of the directory you were in.',
        "Let's see what's inside this directory. Remember what to type?",
      ],
      output: ['myfiles     '],
      expect: ['ls'],
      other: [
        'No. Remember to "list" the files in a directory, just type "ls".',
      ],
    },
  ],
}
