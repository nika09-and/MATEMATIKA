const answer = document.getElementById("answer");
const writing = document.getElementById("writing");
const quizHead = document.getElementById("head");
const quizSubmit = document.getElementById("submit");
const question = document.getElementById("question");
const texts = document.getElementById("texts");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const buttons = document.getElementById("buttons");
const header = document.getElementById("header");
const quickQuiz = document.getElementById("quickQuiz");
const task = document.getElementById("task");
const nextPrev = document.getElementById("nextPrew");
const buttonNext = document.getElementById("next");
const buttonPrevious = document.getElementById("previous");
const buttonExit = document.getElementById("exit");
const taskImage = document.getElementById("taskImage");
const taskText = document.getElementById("taskText");

let writingNow = [];
let mainIndicator = 0;

const theories = [
    "ფუნქციის უსწრაფესი ცვლილების მიმართულების განსაზღვრა",
    "პირადი მოხმარების ნეოკლასიკური ამოცანა",
    "უნიმოდალური ფუნქციის მეთოდი, რომელიც იყენებს კვადრატულ აპროქსიმაციას",
    "გრადიენტული დაშვება, უსწრაფესი დაშვების და ნიუტონის მეთოდები",
    "ამოზნექილი ამოცანების სფეციფიკა",
    "ექსტრემალურობის პირველი რიგის აუცილებელი პირობა, ერთიცვლადის შემთხვევასი",
    "ექსტრემალურობის მეორე რიგის საკმარისი პირობა, ერთიცვლადის შემთხვევაში",
];

const writingTasks = [
    { text: "ამოხსენით ექსტრემალუირი ამოცანა", img: "/0.png" },
    { text: "იპოვეთ a-ს მნიშვნელობა, რომლისთვისაც f(x) ფუნქცია იქნება მოდალური [a,40] შუალედში, პასუხი დაასაბუთე", img: "/1.png" },
    { text: "ლაგრანჟის ფუნქციის გამოყენებით ამოხსენით ამოცანა", img: "/2.png" },
    { text: "შეამოწმეთ ამოზნექილია თუ არა სიმრავლე", img: "/3.png" },
    { text: "ამოხსენით ექსტრემალუირი ამოცანა", img: "/4.png" },
    { text: "f(x;y) ამოცანაში X0=(2;0) საწყისი წერტილი და a0=0,5 ბიჯით განახორციელეთ გრადიენტული დაშვების ერთი ბიჯი და შეადარეთ ერთმანეთს f(x0) და f(x1)", img: "/5.png" },
    { text: "ლაგრანჟის ფუნქციის გამოყენებით ამოხსენით ამოცანა", img: "/6.png" }
];

// Helper to show task text and image
function showTask(taskItem) {
    if (typeof taskItem === "string") {
        // Theory
        taskText.innerText = taskItem;
        taskImage.style.display = "none";
    } else if (typeof taskItem === "object" && taskItem.text) {
        // Writing task
        taskText.innerText = taskItem.text;
        taskImage.src = taskItem.img;
        taskImage.style.display = "block";
    } else {
        taskText.innerText = "";
        taskImage.style.display = "none";
    }
}

buttonNext.addEventListener("click", next);
function next() {
    mainIndicator++;
    showTask(writingNow[mainIndicator]);
    if (mainIndicator == 4) {
        buttonNext.innerText = "Finish";
    }

    if (mainIndicator > 4) {
        task.style.display = "none";
        header.style.display = "none";
        nextPrev.style.display = "none";
        quickQuiz.style.display = "none";
        buttons.style.display = "none";

        // Show congratulatory message
        const congratsP = document.createElement("p");
        congratsP.innerText = "ყოჩაღ ბუბუ, მიყვარხარ";
        congratsP.id = "congrats-message";
        congratsP.style.fontSize = "40px";
        congratsP.style.color = "white";
        congratsP.style.fontWeight = "600";
        congratsP.style.textAlign = "center";
        document.body.appendChild(congratsP);

        setTimeout(() => {
            congratsP.remove();
            buttons.style.display = "flex";
            header.style.display = "flex";
            quickQuiz.style.display = "flex";
            task.style.display = "none";
            nextPrev.style.display = "none";
            buttonNext.innerText = "Next";
            mainIndicator = 0;
            writingNow = [];
            header.innerText = "Mathematical Programming (Bejanas ra?)";
        }, 2000);
    }
}

buttonPrevious.addEventListener("click", previous);
function previous() {
    if (mainIndicator > 0) {
        mainIndicator--;
        showTask(writingNow[mainIndicator]);
        buttonNext.innerText = "Next";
    }
}

buttonExit.addEventListener("click", exit);
function exit() {
    buttons.style.display = "flex";
    header.innerText = "Mathematical Programming (Bejanas ra?)";
    quickQuiz.style.display = "flex";
    task.style.display = "none";
    nextPrev.style.display = "none";
    mainIndicator = 0;
    writingNow = [];
}

first.addEventListener("click", writingTasksHandle);
function writingTasksHandle() {
    buttons.style.display = "none";
    header.innerText = "Writing Tasks";
    quickQuiz.style.display = "none";
    task.style.display = "flex";
    nextPrev.style.display = "flex";
    writingNow = [];

    const availableTasks = [...writingTasks];

    for (let i = 0; i < 5 && availableTasks.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableTasks.length);
        const randomTask = availableTasks[randomIndex];
        writingNow.push(randomTask);
        availableTasks.splice(randomIndex, 1);
    }
    mainIndicator = 0;
    showTask(writingNow[mainIndicator]);
}

second.addEventListener("click", theoriesHandle);
function theoriesHandle() {
    buttons.style.display = "none";
    header.innerText = "Theories";
    quickQuiz.style.display = "none";
    task.style.display = "flex";
    nextPrev.style.display = "flex";
    writingNow = [];

    const availableTasks = [...theories];

    for (let i = 0; i < 5 && availableTasks.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableTasks.length);
        const randomTask = availableTasks[randomIndex];
        writingNow.push(randomTask);
        availableTasks.splice(randomIndex, 1);
    }
    mainIndicator = 0;
    showTask(writingNow[mainIndicator]);
}

third.addEventListener("click", mixedHandle);
function mixedHandle() {
    buttons.style.display = "none";
    header.innerText = "Mixed Tasks";
    quickQuiz.style.display = "none";
    task.style.display = "flex";
    nextPrev.style.display = "flex";
    writingNow = [];

    const availableTheories = [...theories];
    const availableWriting = [...writingTasks];

    // Get 2 random theories
    for (let i = 0; i < 2 && availableTheories.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableTheories.length);
        writingNow.push(availableTheories[randomIndex]);
        availableTheories.splice(randomIndex, 1);
    }

    // Get 3 random writing tasks
    for (let i = 0; i < 3 && availableWriting.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableWriting.length);
        writingNow.push(availableWriting[randomIndex]);
        availableWriting.splice(randomIndex, 1);
    }

    mainIndicator = 0;
    showTask(writingNow[mainIndicator]);
}

quizSubmit.addEventListener("click", quickQuizHandle);
function quickQuizHandle() {
    if (answer.value === "dedistyvna" || answer.value === "დედისყვნა") {
        writing.style.display = "none";
        quizHead.innerText = "Respect!";
        question.style.display = "none";
        texts.style.height = "100%";
        texts.style.margin = "0px";
        texts.style.justifyContent = "center";
    } else {
        quizHead.innerText = "Try Again";
        answer.value = "";
    }
}