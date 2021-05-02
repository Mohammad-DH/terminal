let input = document.querySelector('.input');
let bbb = document.querySelector('.autoscroll');
let Twindow = document.querySelector('.window');
let form = document.querySelector('#form');
let block = document.querySelector('.block');

var help = '<div >' +
    '<p>help/-help/-h ............................................................ help section</p>' +
    '<br>' +
    '<p>cd ............................................................ change directory</p>' +
    '<br>' +
    '<p>ls ............................................................ list</p>' +
    '<br>' +
    '<p>cat ............................................................ reading text files</p>' +
    '<br>' +
    '<p>ctr + l ............................................................ clear the terminal</p>' +

    '</div>';
var about = '<div class="about" >' +
    '<div class="glitch-box">' +
    '<h6 class="glitch blue">TERMINAL</h6>' +
    '<h6 class="glitch red">TERMINAL</h6>' +
    '<h6 class="glitch">TERMINAL</h6>' +
    '</div>' +
    '<P>SOLVE THE CHALLENGE</P>' +
    '<br></br>' +
    '<br></br>' +
    '<br></br>' +
    '<br></br>' +
    '</div>';
var blueprint = '<div >' +
    '<p>This is the blueprint</p>' +
    '<p>first key ==>XXX</p>' +
    '<p>seconde key ==>YYY</p>' +
    '<p>thread key ==>ZZZ</p>' +
    '<p>strucher ==>XXXYYYZZZ === password</p>' +
    '<p>NOTE:dont act dume just put them all in one line togther</p>' +
    '</div>';
var codeBlock = '<div >' +
    '<p>This is the first key</p>' +
    '<p>54c84b40e9ff5a31472904a0cd2f0a17</p>' +
    '<p>break it</p>' +
    '<p ><strong class = danger>code has been copied to your clipboard</p>' +
    '</div>';
var hash1 = "54c84b40e9ff5a31472904a0cd2f0a17";
var codeBlock2 = '<div >' +
    '<p>This is the seconde key</p>' +
    '<p>bGlrZSBh</p>' +
    '<p>break it</p>' +
    '<p><strong class = danger>code has been copied to your clipboard</p>' +
    '</div>';
var hash2 = "bGlrZSBh";
var codeBlock3 = '<div >' +
    '<p>This is the last key</p>' +
    '<p> .... .- -.-. -.- . .-. </p>' +
    '<p>break it</p>' +
    '<p ><strong class = danger>code has been copied to your clipboard</p>' +
    '</div>';
var hash3 = ".... .- -.-. -.- . .-.";
var codeBlockR = '<div >' +
    '<p>good job</p>' +
    '<p>if you solve the puzzle you are a normal person </p>' +
    '<p>not a hacker</p>' +
    '<p>hackers do not solve the puzzle they smash the puzzle</p>' +
    '<p>if you think like a hacker you would understand that this project has been made by vanilla javascript </p>' +
    '<p>and if you use the chrome developer tool in source tab  </p>' +
    '<p>you can see the javascript files and find the password or change the code </p>' +
    '<p>my frinde being a hacker is not about matrix effect on background</p>' +
    '<p>it\'s about the mindset of breaking everything and reassembling it</p>' +
    '<p>it\'s about changing the question from </p>' +
    '<p>what this is doing</p>' +
    '<p>to</p>' +
    '<p>what i can make this to do</p>' +
    '<p>can you see the beauty my friend</p>' +
    '<p><br></p>' +
    '<p>from the start this never was a crypto challenge</p>' +
    '<p><br></p>' +
    '<p>last word:</p>' +
    '<p>i did my best to make this app </p>' +
    '<p>this is my first js project i hope you enjoy it</p>' +
    '<p>and never ever give up on your dreams</p>' +
    '<p>take look at my website =>www.MohammadDH.com</p>' +
    '<p>take care</p>' +
    '<p class = made >MADE BY MR.J</p>' +
    '<p>happy hacking</p>' +
    '<p id=sec >there is something else</p>' +
    '</div>';

let state = "root"

var path = "WDA@S-Linux:";
document.getElementById("myText").innerHTML = path;


document.onmousedown = (e) => {
    e.preventDefault();
}



document.addEventListener('keydown', function (event) {

    if (event.ctrlKey && event.key === 'l' || event.metaKey && event.key === 'l') {
        event.preventDefault();
        block.textContent = '';
    }
});



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let command = input.value
    document.documentElement.style.setProperty('--scroll', '30%');
    bbb.scrollIntoView(true);



    if (command == "-help" || command == "-h" || command == "help") {
        run(path, "", command);
        textprint("text", help)
        document.documentElement.style.setProperty('--scroll', '0%');
        document.documentElement.style.setProperty('--scroll2', '10%');
    }
    else {

        switch (state) {
            case "root":
                switch (command) {
                    case "ls":
                        run(path, "", command);
                        Aprint("dir1")
                        Aprint("dir2")
                        Aprint("about.txt")
                        Aprint("reward.txt")
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;


                    case "cd dir1":
                        state = "dir1"
                        run(path, "", command);
                        path = "WDA@S-Linux:/dir1"
                        document.getElementById("myText").innerHTML = path;
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;


                    case "cd dir2":
                        state = "dir2"
                        run(path, "", command);
                        path = "WDA@S-Linux:/dir2"
                        document.getElementById("myText").innerHTML = path;
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;

                    case "cat about.txt":
                        run(path, "", command);
                        textprint("text", about)
                        break;



                    case "cat reward.txt":
                        var pass = prompt('enter the password');

                        if (pass == "think like a hacker") {
                            block.textContent = '';
                            document.documentElement.style.setProperty('--scroll', '0%');
                            document.documentElement.style.setProperty('--scroll2', '0%');
                            run(path, "", command);
                            textprint("text", codeBlockR)
                        }
                        else {
                            run(path, "", command);
                            textprint("danger", "wrong password")
                        }
                        break;

                    default:
                        run(path, "", command);
                        textprint("danger", "command is not exist or you are not allowed to use it")
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;
                }
                break;

            case "dir1":
                switch (command) {
                    case "ls":
                        run(path, "", command);
                        Aprint("text1.txt")
                        Aprint("text2.txt")
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;

                    case "cat text1.txt":
                        run(path, "", command);
                        textprint("text", codeBlock)
                        window.navigator.clipboard.writeText(hash1);
                        break;
                    case "cat text2.txt":
                        run(path, "", command);
                        textprint("text", codeBlock2)
                        window.navigator.clipboard.writeText(hash2);
                        break;


                    case "cd ..":
                        state = "root"
                        run(path, "", command);
                        path = "WDA@S-Linux:"
                        document.getElementById("myText").innerHTML = path;
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;
                    case "cd..":
                        state = "root"
                        run(path, "", command);
                        path = "WDA@S-Linux:"
                        document.getElementById("myText").innerHTML = path;
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;



                    default:
                        run(path, "", command);
                        textprint("danger", "command is not exist or you are not allowed to use it")
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;
                }

                break;

            case "dir2":
                switch (command) {
                    case "ls":
                        run(path, "", command);
                        Aprint("text3.txt")
                        Aprint("blueprint.txt")
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;

                    case "cat text3.txt":
                        run(path, "", command);
                        textprint("text", codeBlock3)
                        window.navigator.clipboard.writeText(hash3);
                        break;
                    case "cat blueprint.txt":
                        run(path, "", command);
                        textprint("text", blueprint)

                        break;

                    case "cd ..":
                        state = "root"
                        run(path, "", command);
                        path = "WDA@S-Linux:"
                        document.getElementById("myText").innerHTML = path;
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;

                    case "cd..":
                        state = "root"
                        run(path, "", command);
                        path = "WDA@S-Linux:"
                        document.getElementById("myText").innerHTML = path;
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;

                    default:
                        run(path, "", command);
                        textprint("danger", "command is not exist or you are not allowed to use it")
                        document.documentElement.style.setProperty('--scroll', '5%');
                        document.documentElement.style.setProperty('--scroll2', '5%');
                        break;
                }

                break;

            default:
                break;
        }
    }


    function run(param1, state, params) {
        let response = document.createElement('p');
        response.classList.add("p")
        response.innerText = param1 + state + "  " + params;
        block.appendChild(response);
        input.value = '';

    }

    function Aprint(params) {
        let print = document.createElement('p');
        print.classList.add("Ap")
        print.innerText = "-r--r--r-- * * * * * " + "  " + params;
        block.appendChild(print);
    }
    function textprint(style, params) {
        let print = document.createElement('p');
        print.classList.add(style)
        print.innerHTML = params;
        block.appendChild(print);
    }

})
/* now that you came all this way to here i give you a picture of my desk */
/* and if you play cs:go this is my id */