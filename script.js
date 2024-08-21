const japaneseInterest = document.getElementById('japanese_interest');
const hyogo = document.getElementById('hyogo');

japaneseInterest.onclick = () => {
    if (japaneseInterest.innerText === 'Japanese (the language)') {
        japaneseInterest.innerText = '僕の会話の相手になるのが欲しいの？'
    } else if (japaneseInterest.innerText === '僕の会話の相手になるのが欲しいの？') {
        japaneseInterest.innerText = 'Japanese (the language)'
    }
}

hyogo.onclick = () => {
    if (hyogo.innerText === 'Hyogo Performing Arts Center Orchestra') {
        hyogo.innerText = '兵庫県芸術文化センターオーケストラ'
    } else if (hyogo.innerText === '兵庫県芸術文化センターオーケストラ') {
        hyogo.innerText = 'Hyogo Performing Arts Center Orchestra'
    }
}