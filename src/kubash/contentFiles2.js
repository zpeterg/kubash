export default {
  name: 'files2',
  say: ['[More About Files]'],
  steps: [
    {
      say: [
        "Look at this! You're already in the second section! In this one we're going to go over files and changing files. (You'll get to work on that story!).",
        "But first, let's take a look at directories.",
        'You may wonder, "What\'s a directory??" Well, here\'s what it is: A directory is a list of files.',
        'So you have actually already seen one - the inside of one. A directory is like a box that contains files. To see what\'s inside of the box, you just type "ls".',
        'Go ahead and type "ls" again.',
      ],
      bar: 'ubuntu@mycomputer:~/myfiles $ ',
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
      expect: ['cd ../', 'cd ..'],
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
      bar: 'ubuntu@mycomputer:~$',
      expect: ['ls'],
      other: [
        'No. Remember to "list" the files in a directory, just type "ls".',
      ],
    },
    {
      say: [
        "You got it! Here's your list of what is inside this directory - right below printed in white.",
        'Ah, there. One file called "myfiles"... or is it?',
        "Let's try to concatenate that file to see what's inside of it.",
        'Do you remember what to type? Try it now!',
      ],
      output: ['myfiles     '],
      expect: ['cat myfiles'],
      other: ['Nope. To "concatenate", type "cat myfile".'],
    },
    {
      say: [
        "Look below. You notice it doesn't give you the contents of the file... because it isn't a file. It's a directory! In fact, it's the directory we were inside of a moment ago.",
        "So you see that directories may look like files, but they don't have extensions (like .txt) and of course you cannot treat them like files (like concatenating them out).",
        'But you can list (ls) and change directory (cd) into them, and you can put things inside of them.',
        'Let\'s go ahead and put a file here. Make a file called "lazycow.txt" inside of this directory.',
      ],
      output: ['cat: myfile/: Is a directory'],
      expect: ['touch lazycow.txt'],
      other: [
        'Mmmm, remember, to make a file, you just type "touch lazycow.txt".',
      ],
    },
    {
      say: [
        "And now, to see what's in your file, list the contents. But this time, list the contents in columns. Remember how to do that?",
      ],
      output: [''],
      expect: ['ls -l'],
      other: [
        'Good try! But remember that to list in columns, you type "ls -l". Try that now.',
      ],
    },
    {
      say: [
        "And there's our file and the directory that contains the other files we made.",
        "Let's go back and look at our other files. Guess what you type to change back into the myfiles directory!",
      ],
      output: ['lazycow.txt', 'myfiles'],
      expect: ['cd myfiles/', 'cd myfiles'],
      other: [
        'No. To change directories into the directory called myfiles, just type "cd myfiles/".',
      ],
    },
    {
      say: [
        'Good! Now if you look below, you\'ll see "~/myfiles" is there again. That means you\'re inside of that directory.',
        'Now list out the contents of the directory. Remember how to list? Try it now. Just do the normal kind of list this time, not the columns.',
      ],
      bar: 'ubuntu@mycomputer:~/myfiles $ ',
      expect: ['ls'],
      other: ['No, to list, just type "ls". Type that now.'],
    },
    {
      say: [
        "Ahha! Look below and you'll see our three files - like three old friends - still there in the directory where we left them!",
        'Now, remember I said at the beginning of this section that you were going to get to add to that story?',
        'Let\'s go ahead and do that before we wrap up this section. To refresh your memory on what\'s in that file, cat out the contents of "myfile.txt".',
        'Remember how to concatenate the contents of a file out? Go ahead and type it now.',
      ],
      output: ['cowfile.txt     fishfile.txt    myfile.txt'],
      expect: ['cat myfile.txt'],
      other: [
        'Nope. To concatenate out this file, just type "cat myfile.txt".',
      ],
    },
    {
      say: [
        'Ah, yes, the princess and the knight. Ok, here is how you add to a file: You type "echo" and then the text inside of quotes like these "". And then you put two carrots >> and the file name you want to add to.',
        'The two carrots are like saying "add this to the end of this file".',
        'Here\'s what the whole thing will look like for you: "echo "The brave knight caught measles." >> myfile.txt".',
      ],
      output: [
        'Once upon a time, there was a princess and a brave knight.',
        '',
      ],
      expect: ['echo "The brave knight caught measles." >> myfile.txt'],
      other: [
        "No, you didn't quite type that right. Be sure to do the quotes around the text you're adding, the two carrots (>>) and the spaces right.",
      ],
    },
    {
      say: [
        'Ok! Now to see the full story so far, just cat that file out again!',
      ],
      expect: ['cat myfile.txt'],
      other: ['Mmm, to concatenate the file, just type "cat myfile.txt".'],
    },
    {
      say: [
        'There it is! You can see that it added the new text on another line below the first.',
        'That wraps it up for this section! Type "continue" or "c" to go to the next section. In that section, we\'re going to learn more about that "echo".',
      ],
      output: [
        'Once upon a time, there was a princess and a brave knight.',
        'The brave knight caught measles.',
        '',
      ],
      expect: ['c', 'continue'],
      other: ['Just a "c" or "continue", please!'],
    },
  ],
}
