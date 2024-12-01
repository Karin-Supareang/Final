const paragraphs = [ //first person can use this one
    "ปี 1\n"+
    "\u00A0\u00A0\u00A0\u00A0This is the first paragraph. It gives an overview of the topic."+
    "Dashing forth into the cloak of night, with the illustrious composition"+
    " performed by McCency in collaboration with the esteemed Konsa."+
    "This is the first paragraph. It gives an overview of the topic."+
    "Departed with a measure of tranquility, assured by the presence of your esteemed companionship,"+
    "at the moment when the catastrophic force of the atomic bomb was irrevocably secured."+
    "This is the first paragraph. It gives an overview of the topic.",
    "ปี 2\n \u00A0\u00A0\u00A0\u00A0Let me tell you the story when the level 600 school gyatt walked passed me, I was in class drinking my grimace rizz shake from ohio during my rizzonomics class when all of the sudden this crazy ohio bing chilling gyatt got sturdy, past my class. I was watching kai cenat hit the griddy on twitch. This is when I let my rizz take over and I became the rizzard of oz. I screamed, look at this bomboclat gyatt",
    "ปี 3\n \u00A0\u00A0\u00A0\u00A0The third paragraph includes further elaboration and analysis.",
    "ปี 4\n \u00A0\u00A0\u00A0\u00A0Finally, the fourth paragraph concludes the discussion."
];

const second_person_info = [];
const third_person_info = [];
const forth_person_info = [];
const fifth_person_info = [];
const sixth_person_info = [];
const seventh_person_info = [];

let secoundcurrentIndex = 0; 
let thridcurrentIndex = 0;
let fourthcurrentIndex = 0;
let fifthcurrentIndex = 0;
let sixthcurrentIndex = 0;
let seventhcurrentIndex = 0;
let currentIndex = 0;


const paragraphElement = document.getElementById('paragraph'); // Displays the current paragraph
const prevBtn = document.getElementById('prevBtn'); // "Previous" button
const nextBtn = document.getElementById('nextBtn'); // "Next" button
const circles = document.querySelectorAll('.circle'); // Step circles
const indicator = document.querySelector('.indicator'); // Progress bar indicator

// Updates the paragraph and buttons based on the current step
function updateParagraph() {
    paragraphElement.textContent = paragraphs[currentIndex];
    prevBtn.disabled = currentIndex === 0; // Disable "Previous" button at first step
    nextBtn.disabled = currentIndex === paragraphs.length - 1; // Disable "Next" button at last step
    updateProgressBar(); // Update the progress bar and circles
}

// Updates the progress bar and step circles
function updateProgressBar() {
    circles.forEach((circle, index) => {
        if (index <= currentIndex) {
            circle.classList.add('completed'); // Mark completed steps
        } else {
            circle.classList.remove('completed'); // Reset incomplete steps
        }
    });

    // Adjust the progress bar indicator's width
    const progressPercentage = (currentIndex / (paragraphs.length - 1)) * 100;
    indicator.style.width = `${progressPercentage}%`;
}

// Event listener for "Previous" button
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateParagraph();
    }
});

// Event listener for "Next" button
nextBtn.addEventListener('click', () => {
    if (currentIndex < paragraphs.length - 1) {
        currentIndex++;
        updateParagraph();
    }
});

// Initialize the component
updateParagraph();


const secoundparagraph = document.getElementById("secoundparagraph");
const secoundprevBtn = document.getAnimations("secoundprevBtn");
const secoundnextBtn = document.getElementById("secoundnextBtn");
const secoundindicator = document.querySelector(".secoundindicator");
const secoundcircle = document.querySelectorAll(".secoundcircle");

function upDate_second_paragraph(){
    secoundparagraph.textContent = second_person_info[secoundcurrentIndex];
    secoundprevBtn.disabled = secoundcurrentIndex === 0;
    secoundnextBtn.disabled = secoundcurrentIndex === second_person_info.length - 1;
    updateSecondProgressBar()
};

function upDate_second_progressBar (){
    secoundcircle.forEach((secoundcircle, index) => {
        if (index <= secoundcurrentIndex) {
            secoundcircle.classList.add('completed');
        } else {
            secoundcircle.classList.remove('completed');
        }
    });

};
