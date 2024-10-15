document.getElementById("start-button").addEventListener("click", function () {
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

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.id = "player-name";
	nameInput.placeholder = "Nadarkhily Wild";
	mainSection.appendChild(nameInput);

	const readyButton = document.createElement("button");
	readyButton.textContent = "Ready !";
	readyButton.id = "ready-button";
	mainSection.appendChild(readyButton);
});
