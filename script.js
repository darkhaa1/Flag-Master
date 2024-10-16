document.getElementById("start-button").addEventListener("click", () => {
	const mainSection = document.querySelector(".carte");
	mainSection.innerHTML = "";

	const avatarImg = document.createElement("img");
	avatarImg.src = "/images/avatar.png";
	avatarImg.alt = "Avatar";
	avatarImg.classList.add("avatar");
	mainSection.appendChild(avatarImg);

	const authentication = document.createElement("h2");
	authentication.textContent = "Enter your name";
	mainSection.appendChild(authentication);
	authentication.style.paddingBottom = "0";

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.id = "player-name";
	nameInput.placeholder = "Nadarkhily Wild";
	mainSection.appendChild(nameInput);
	nameInput.style.height = "4em";
	nameInput.style.width = "20em";
	nameInput.style.borderRadius = "1vw";
	nameInput.style.border = "none";
	nameInput.style.paddingLeft = "2vw";
	nameInput.style.paddingRight = "2vw";

	const readyButton = document.createElement("button");
	readyButton.textContent = "Ready !";
	readyButton.classList.add("readyButton");
	mainSection.appendChild(readyButton);

	readyButton.addEventListener("click", startQuiz);
});

let currentQuestionIndex = 0;

function startQuiz() {
	const playerName = document.getElementById("player-name").value;
	if (!playerName) {
		alert("Enter your name before starting");
		return;
	}
	document.querySelector(".carte").innerHTML = "";
	createQuestion();
}

const questions = [
	{
		question: "Where does this flag fly",
		picture: "images/Flag_of_Madagascar.svg",
		options: ["France", "Mongolia", "Poland", "Madagscar"],
		correct: "Madagscar",
	},
	{
		question: "Where does this flag fly",
		picture: "images/france.svg",
		options: ["France", "Mongolia", "Poland", "Madagscar"],
		correct: "France",
	},
];

function createQuestion() {
	const mainSection = document.querySelector(".carte");

	const currentQuestion = questions[currentQuestionIndex];

	const imgFlag = document.createElement("img");
	imgFlag.src = currentQuestion.picture;
	imgFlag.alt = "flag";
	imgFlag.classList.add("flag-image");
	imgFlag.style.height = "12em";
	mainSection.appendChild(imgFlag);

	const question = document.createElement("h3");
	question.textContent = currentQuestion.question;
	mainSection.appendChild(question);

	currentQuestion.options.forEach((option) => {
		const optionButton = document.createElement("button");
		optionButton.textContent = option;
		optionButton.classList.add("option-button");
		optionButton.addEventListener("click", () => checkAnswer(option));
		optionButton;
		mainSection.appendChild(optionButton);
	});
}
console.log;
