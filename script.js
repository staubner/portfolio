const japaneseInterest = document.getElementById('japanese_interest');
const hyogo = document.getElementById('hyogo');

japaneseInterest.onclick = () => {
    if (japaneseInterest.innerHTML === 'Japanese') {
        japaneseInterest.innerHTML = '僕の会話の相手になるのが欲しいの？'
    } else if (japaneseInterest.innerHTML === '僕の会話の相手になるのが欲しいの？') {
        japaneseInterest.innerHTML = 'Japanese'
    }
}

hyogo.onclick = () => {
    if (hyogo.innerHTML === 'Hyogo Performing Arts Center Orchestra') {
        hyogo.innerHTML = '兵庫県芸術文化センターオーケストラ'
    } else if (hyogo.innerHTML === '兵庫県芸術文化センターオーケストラ') {
        hyogo.innerHTML = 'Hyogo Performing Arts Center Orchestra'
    }
}

const mixedMessage = document.getElementById('mixed-message');
const messageButton = document.getElementById('message-button');
const resetButton = document.getElementById('reset-button');
resetButton.style.display = 'none'
mixedMessage.style.display = 'none'

const wordObj = {
    arr1: ['A barking dog', 'Absence makes', 'Doubt is the beginning,', 'Imitation', 'No matter', 'Early to bed, early to rise', 'He who fights and runs away'],
    arr2: ['never', 'the heart', 'not the end,', 'is the sincerest form', 'where you go,', 'make a man', 'lives to fight'],
    arr3: ['bites.', 'grow fonder.', 'of wisdom.', 'of flattery.', 'there you are.', 'healthy, wealth, and wise.', 'another day.']
}

const phraseGen = () => {
    let first = wordObj.arr1[Math.floor(Math.random() * wordObj.arr1.length)];
    let second = wordObj.arr2[Math.floor(Math.random() * wordObj.arr2.length)];
    let third = wordObj.arr3[Math.floor(Math.random() * wordObj.arr3.length)];
    mixedMessage.style.display = 'block'
    mixedMessage.innerHTML = `${first} ${second} ${third}`
    resetButton.style.display = 'inline-block'
}

messageButton.addEventListener('click', phraseGen)

resetButton.onclick = function () {
    mixedMessage.innerHTML = ''
    mixedMessage.style.display = 'none'
    resetButton.style.display = 'none'
}