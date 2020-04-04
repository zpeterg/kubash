(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,o){t.exports=o(32)},25:function(t,e,o){},26:function(t,e,o){},32:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),i=o(9),s=o.n(i),r=(o(25),o(26),o(10)),l=o(11),u=o(15),h=o(12),c=o(3),y=o(16),d=o(1),p=o(2);function f(){var t=Object(d.a)([""]);return f=function(){return t},t}function m(){var t=Object(d.a)(["\n  margin-right: 0.5em;\n"]);return m=function(){return t},t}function w(){var t=Object(d.a)(["\n  margin-right: 0.5em;\n"]);return w=function(){return t},t}function g(){var t=Object(d.a)(["\n  display: inline-block;\n  width: 100%;\n  border: 0;\n  background-color: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n  margin-bottom: 1em;\n"]);return g=function(){return t},t}function b(){var t=Object(d.a)(["\n  display: grid;\n  grid-template-columns: auto 3fr;\n"]);return b=function(){return t},t}function x(){var t=Object(d.a)(["\n  color: ",";\n"]);return x=function(){return t},t}function k(){var t=Object(d.a)(["\n  width: 100%;\n"]);return k=function(){return t},t}var v=p.a.div(k()),T=Object(p.a)(v)(x(),function(t){return"say"===t.type?"#02aa02":"white"}),j=Object(p.a)(v)(b()),O=p.a.input(g()),E=p.a.div(w()),I=p.a.div(m()),B=p.a.div(f()),Y=o(4),N=[{name:"files1",say:["[Introduction to Files]"],steps:[{say:["Welcome to Kubash! You're going to have fun learning Bash, and it'll be really handy with using computers! Let's get you started!","First, a little that you should know:","Bash is a way of talking with a computer and telling it what to do.","Just like you can use a mouse or touch a scream to make things happen, you can also talk to a computer in Bash.","Computer programmers and people who use computers a lot really like Bash - it lets them do some things faster than using a mouse, and it also lets you do the same things over and over easily by running a list of commands.","You'll see as you go!","So let's get started. Now, what you need to do is just type letters or words on your keyboard. They'll show up below. Then you've typed what you need to, just press the \"Enter\" key.",'Go ahead and type "c" or "continue", and then press enter. Make sure you don\'t type the quotes "" - just letters or words.'],expect:["c","continue"],bar:"ubuntu@mycomputer:~/myfiles $ ",other:['Hmm, it looks like you didn\'t type "c" or "continue". Of course, don\'t type the quotes "", just the word. Try again.']},{say:["Let me describe a little more about what you're looking at in Bash.","First, you're usually typing on the last line on the screen, and then the lines above show the history of what you have already typed.",'Handy, huh? That way you can just scroll up and see what you\'ve already done. Go ahead and look up there and see the "c" or "continue" that you typed','To the left below, you\'ll see "ubuntu@mycomputer:".',"You'll usually see that (or something like it) where you are going to type, and you'll also see it above in things you have already typed.","Let's start a new line just by typing Enter. Don't type the word - just press the Enter key"],expect:[""],other:["It looks like you typed something. Just simply hit the Enter key on your keyboard."]},{say:["Ok, let me explain a little bit about computers that will help you.",'Computers use what\'s called a "file system". The file system is a way of storing and getting files.',"These files could be stories that you're writing, or they could be special things that you can tell the computer to do.","They can even run a robot or make your computer send out a website for others to see!",'Want to see a file? I\'ll show you one. Type "ls".'],expect:["ls"],other:['You don\'t need to type anything except just "ls". Without the quotes.']},{say:['And here you go! Look right below and you\'ll see that you have a file. The file is "myfile.txt".','Type "c" to continue.'],output:["myfile.txt"],expect:["c"],other:['Oops! Just type "c" to continue.']},{say:["You might be thinking: What? That little \"myfile.txt\" is a file? That's not very exciting. But that's just the NAME of the file. There's stuff inside!","Let's check out myfile.txt. A simple way to see what's in a file is to concatentate \"cat\" a file.",'Type "cat myfile.txt". Now remember, don\'t type the quotes, just the words.'],expect:["cat myfile.txt"],other:['Ya, no. Try typing just "cat myfile.txt", except (of course) without the quotes.']},{say:["And there you go! Look below and read what is inside of the file \"myfile.txt\". Remember it's in white because it's what you actually see when you're using Bash. This is just like a test place to learn Bash, so that's why you have this green text to help you.",'You can see that "myfile.txt" is the beginning of a story. It is "text" - writing meant for a person to read.','You can even tell that it\'s text because it says ".txt" at the end.','Some files end with other things. Like ".js" means that it\'s a JavaScript file. A JavaScript file is a set of instructions for a computer to read.','Type "c" or "continue".'],output:["Once upon a time, there was a princess and a brave knight.",""],expect:["c","continue"],other:['Hmmm, just type "continue".']},{say:["You're probably wondering how you can add to that story. But hold on, let's first get you a little more used to handling files.","In fact, let's start with making a new one.",'It\'s easy to make a file. Just type "touch fishfile.txt".'],expect:["touch fishfile.txt"],other:['Try again. Type "touch fishfile.txt".']},{say:["Great! Now, you may be thinking: But nothing happened! But you'd be wrong. The file was made, but you just haven't told bash to show it to you.",'So let\'s ask bash to show it to us. Type "ls" like before to "list" your files.'],expect:["ls"],other:['Ya, no, nothing else. Just type "ls" without the quotes.']},{say:["Good! Now look below and you'll see your file, along with the one that was already there.","There's actually another way to see files that looks a little nicer sometimes - in nice little columns like an index in a book.","Let's try that. Just type ls -l."],output:["fishfile.txt     myfile.txt"],expect:["ls -l"],other:['Ya, no, nothing else. Just type "ls -l" without the quotes. Don\'t forget that space between the "ls" and the "-l". They\'re like two words']},{say:["And there you go! Look below and you'll see your two files in a list.",'I think we\'re done here. Type "c" to continue.'],output:["fishfile.txt","myfile.txt"],expect:["c","continue"],other:['Just "c" please!']},{say:["Ok, we're going to get to some more cool stuff and show you more of where you are in bash and how to get around.","But first, let's recap.","Remember how to make a file? Go ahead and make a file called cowfile.txt."],expect:["touch cowfile.txt"],other:['Mmm, you got something wrong. To make a file called cowfile.txt, just type "touch cowfile.txt"']},{say:["Good!","Alright, now how do you list out the files that you have made so far? Go ahead and type it now."],output:[""],expect:["ls"],other:['Remember, to "list" your files, just type "ls". Try it again.']},{say:["There you go!","Ok, so next challenge for you: How do you list your files in a column (all stacked-up)?"],output:["cowfile.txt     fishfile.txt    myfile.txt"],expect:["ls -l"],other:['To list in a column, just type "ls -l". Don\'t for that "-l" at the end!']},{say:["Great!","That's it for here. You've learned what a file is, how to make them, and how to list them two ways.",'Type "c" to continue.'],output:["cowfile.txt","fishfile.txt","myfile.txt"],expect:["c","continue"],other:['Oops. Just "continue" or "c" is fine.']}]},{name:"files2",say:["[More About Files]"],steps:[{say:["Look at this! You're already in the second section! In this one we're going to go over files and changing files. (You'll get to work on that story!).","But first, let's take a look at directories.","You may wonder, \"What's a directory??\" Well, here's what it is: A directory is a list of files.",'So you have actually already seen one - the inside of one. A directory is like a box that contains files. To see what\'s inside of the box, you just type "ls".','Go ahead and type "ls" again.'],bar:"ubuntu@mycomputer:~/myfiles $ ",expect:["ls"],other:['Mmmm, just "ls" please!']},{say:['There you go. Look below and you\'ll see the inside of the "box" or "directory" that you\'re in.','Now we\'re going to get out of that box and go to another one. To CHANGE your DIRECTORY, you type "cd".',"Easy right? But of course you can't just change CHANGE DIRECTORY, you have to say which directory to change to.",'Type "cd ../". Now watch that slash'],output:["cowfile.txt     fishfile.txt    myfile.txt"],expect:["cd ../","cd .."],other:['You missed something. Try that again - just "cd ../". Make sure to get the right slash. It\'s the one on the "?" key.']},{say:['It may look like nothing happened... but look closer. The white bar at the bottom used to say, "ubuntu@mycomputer:~/myfiles", but now the "/myfiles" part is gone.',"Why? Well, that was the name of the directory you were in.","Let's see what's inside this directory. Remember what to type?"],bar:"ubuntu@mycomputer:~$",expect:["ls"],other:['No. Remember to "list" the files in a directory, just type "ls".']},{say:["You got it! Here's your list of what is inside this directory - right below printed in white.",'Ah, there. One file called "myfiles"... or is it?',"Let's try to concatenate that file to see what's inside of it.","Do you remember what to type? Try it now!"],output:["myfiles     "],expect:["cat myfiles"],other:['Nope. To "concatenate", type "cat myfiles".']},{say:["Look below. You notice it doesn't give you the contents of the file... because it isn't a file. It's a directory! In fact, it's the directory we were inside of a moment ago.","So you see that directories may look like files, but they don't have extensions (like .txt) and of course you cannot treat them like files (like concatenating them out).","But you can list (ls) and change directory (cd) into them, and you can put things inside of them.",'Let\'s go ahead and put a file here. Make a file called "lazycow.txt" inside of this directory.'],output:["cat: myfiles/: Is a directory"],expect:["touch lazycow.txt"],other:['Mmmm, remember, to make a file, you just type "touch lazycow.txt".']},{say:["And now, to see what's in your file, list the contents. But this time, list the contents in columns. Remember how to do that?"],output:[""],expect:["ls -l"],other:['Good try! But remember that to list in columns, you type "ls -l". Try that now.']},{say:["And there's our file and the directory that contains the other files we made.","Let's go back and look at our other files. Guess what you type to change back into the myfiles directory!"],output:["lazycow.txt","myfiles"],expect:["cd myfiles/","cd myfiles"],other:['No. To change directories into the directory called myfiles, just type "cd myfiles/".']},{say:["Good! Now if you look below, you'll see \"~/myfiles\" is there again. That means you're inside of that directory.","Now list out the contents of the directory. Remember how to list? Try it now. Just do the normal kind of list this time, not the columns."],bar:"ubuntu@mycomputer:~/myfiles $ ",expect:["ls"],other:['No, to list, just type "ls". Type that now.']},{say:["Ahha! Look below and you'll see our three files - like three old friends - still there in the directory where we left them!","Now, remember I said at the beginning of this section that you were going to get to add to that story?","Let's go ahead and do that before we wrap up this section. To refresh your memory on what's in that file, cat out the contents of \"myfile.txt\".","Remember how to concatenate the contents of a file out? Go ahead and type it now."],output:["cowfile.txt     fishfile.txt    myfile.txt"],expect:["cat myfile.txt"],other:['Nope. To concatenate out this file, just type "cat myfile.txt".']},{say:['Ah, yes, the princess and the knight. Ok, here is how you add to a file: You type "echo" and then the text inside of quotes like these "". And then you put two carrots >> and the file name you want to add to.','The two carrots are like saying "add this to the end of this file".','Here\'s what the whole thing will look like for you: "echo "The brave knight caught measles." >> myfile.txt".'],output:["Once upon a time, there was a princess and a brave knight.",""],expect:['echo "The brave knight caught measles." >> myfile.txt'],other:["No, you didn't quite type that right. Be sure to do the quotes around the text you're adding, the two carrots (>>) and the spaces right."]},{say:["Ok! Now to see the full story so far, just cat that file out again!"],expect:["cat myfile.txt"],other:['Mmm, to concatenate the file, just type "cat myfile.txt".']},{say:["There it is! You can see that it added the new text on another line below the first.",'That wraps it up for this section! Type "continue" or "c" to go to the next section. In that section, we\'re going to learn more about that "echo".'],output:["Once upon a time, there was a princess and a brave knight.","The brave knight caught measles.",""],expect:["c","continue"],other:['Just a "c" or "continue", please!']}]}];function C(){var t=Object(d.a)(["\n  font-family: 'Courier New', Courier, monospace;\n  color: white;\n  text-align: left;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 1.2em;\n"]);return C=function(){return t},t}var A=p.a.div(C()),L=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(u.a)(this,Object(h.a)(e).call(this))).state={histories:[],vimHistories:[{text:["Here you are in vim!"],type:"say"}],vimBarText:"~",loginText:"",inputText:"",state:null},t.handleChange=t.handleChange.bind(Object(c.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(c.a)(t)),t.callResponse=t.callResponse.bind(Object(c.a)(t)),t.handleClick=t.handleClick.bind(Object(c.a)(t)),t}return Object(y.a)(e,t),Object(l.a)(e,[{key:"handleChange",value:function(t){var e=t.target.value;this.setState({inputText:e})}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=this.state,o=e.loginText,a=e.inputText,n=e.histories,i=e.vimHistories;i.length>0?i.push({text:[a],type:"input"}):n.push({text:["".concat(o," ").concat(a)],type:"input"}),this.setState({histories:n}),this.callResponse()}},{key:"handleClick",value:function(){this.actionInput.focus()}},{key:"callResponse",value:function(){var t=this.state,e=t.histories,o=t.inputText,a=t.state,n=t.vimHistories;console.log("sending",o,a);var i=function(t,e){if(!e)return{say:[].concat(Object(Y.a)(N[0].say),Object(Y.a)(N[0].steps[0].say)),state:{section:"files1",step:0},displayType:N[0].steps[0].displayType,bar:"undefined"===typeof N[0].steps[0].bar?null:N[0].steps[0].bar};var o=N.findIndex(function(t){return t.name===e.section}),a=N[o],n=a.steps[e.step];if(n.expect.indexOf(t.trim())>=0){var i=a.steps[e.step+1];if("undefined"===typeof i){var s=N[o+1];return{say:[].concat(Object(Y.a)(s.say),Object(Y.a)(s.steps[0].say)),state:{section:s.name,step:0},displayType:s.steps[0].displayType}}return{say:i.say,output:i.output||null,state:{section:a.name,step:e.step+1},displayType:i.displayType,bar:"undefined"===typeof i.bar?null:i.bar}}return{say:n.other,state:e,displayType:n.displayType}}(o,a);console.log("returning",i),i.displayType&&"vim"===i.displayType?(n.push({text:i.say,type:"say"}),i.output&&n.push({text:i.output,type:"output"}),this.setState({vimHistories:n,inputText:"",state:i.state})):(e.push({text:i.say,type:"say"}),i.output&&e.push({text:i.output,type:"output"}),"undefined"!==typeof i.bar&&null!==i.bar&&this.setState({loginText:i.bar}),this.setState({histories:e,inputText:"",state:i.state,vimHistories:[]}))}},{key:"componentDidMount",value:function(){this.callResponse(),this.actionInput.focus()}},{key:"componentDidUpdate",value:function(){document.getElementById("bottom").scrollIntoView()}},{key:"render",value:function(){var t=this,e=this.state,o=e.inputText,a=e.vimHistories,i=e.vimBarText,s=e.histories,r=e.loginText;return console.log("hx:",a),n.a.createElement(A,{onClick:this.handleClick},0===a.length&&s.map(function(t,e){return t.text.map(function(o,a){return n.a.createElement(T,{key:"".concat(e,"-").concat(a),type:t.type},o)})}),a.length>0&&a.map(function(t,e){return t.text.map(function(o,a){return n.a.createElement(T,{key:"".concat(e,"-").concat(a),type:t.type},"-",o)})}),n.a.createElement(j,null,0===a.length&&n.a.createElement(E,null,r),a.length>0&&n.a.createElement(I,null,i),n.a.createElement(B,null,n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement(O,{ref:function(e){t.actionInput=e},value:o,onChange:this.handleChange,spellCheck:"false"})))),n.a.createElement("div",{id:"bottom"}))}}]),e}(a.Component);var R=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.9ee5f938.chunk.js.map