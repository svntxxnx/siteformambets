const questions = [
	{
		question: "Сколько раз дрочит Таалай?",
		answers: ["По 3 раза в день", "Пиздит, что не дрочит, но пипец как дрочит", "Не он ща не дрочит, так как женешка и все такое", "дрочит на фотки самого себя", "Он не дрочит и вообще, ал уже жаш бала эмес"],
		correct: 1,
	},
	{
		question: "Что означает Мамбет?",
		answers: [
			"Мамбетаипов",
			"Мамбетаипов",
			"Мамбетаипов",
			"Мамбетаипов",
		],
		correct: 2,
	},
	{
		question: "Какой чел роняет телефон каждый раз и уехал в Бишкек?",
		answers: [
			"АбдулЛох",
			"Альберт",
			"Анвар",
			"Сейит",
		],
		correct: 2,
	},
	{
		question: "Кто пиздит больше всех в классе?",
		answers: ["Анвар", "Тилек", "Анвар и Тилек", "Авзаль", "Они все нах..."],
		correct: 5,
	},
];

let header = document.querySelector('#header'), ulList = document.querySelector('#list'), submitBtn = document.querySelector('#submit'), mainBtn = document.querySelector('.main__btn'), mainForm = document.querySelector('.main__form'), quiz = document.querySelector('#quiz')  ,score = 0, questionIndex = 0;
clearPage()
showQuestion()


mainBtn.addEventListener('click', hiddenToggle) 

function hiddenToggle() {
	mainForm.classList.add('hidden')
	quiz.classList.remove('hidden')
}


function clearPage() {
	header.innerHTML = ''
	ulList.innerHTML = ''
}

function showQuestion() {
	const headerTemplate = `<h2 class="title">%title%</h2`
	const newTemplate = headerTemplate.replace('%title%', questions[questionIndex]['question'])
	header.innerHTML = newTemplate
	let answerNumber = 1;
	for (answerText of questions[questionIndex]['answers']) {

		const questionTemplate = 
		`
			<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
			</li>
		`
		let answerHtml = questionTemplate.replace('%answer%', answerText).replace('%number%', answerNumber)
		ulList.innerHTML += answerHtml
		answerNumber++
	}
}

submitBtn.addEventListener('click', checkAnswer) 

function checkAnswer() {
	const inputChecked = ulList.querySelector(`input[type="radio"]:checked`)
	if (!inputChecked) {
		submitBtn.blur()
		return 
	}	
	const intInputChecked = parseInt(inputChecked.value)
	if(intInputChecked === questions[questionIndex]['correct']) {
		score++
	}
	if (questionIndex !== questions.length - 1) {
		 questionIndex++
		 clearPage()
		 showQuestion()
	} else {
		clearPage()
		showResults()
	}
}

function showResults() {
	if (score === questions.length){
		header.textContent = `Чел, да ты просто https://www.youtube.com/shorts/OceUlCP292E `
	}else if ((score * 100) / questions.length > 30) {
		header.textContent = `Боже чел, какой же ты попуск, не ответил даже на половину вопросов. Чистый Мамбет`
	}else {
		header.textContent = `Э , как РУЛИТЬ?! `
	}

	submitBtn.textContent = 'Начать заново'
	submitBtn.onclick = () => {
		history.go()
	}
	
}