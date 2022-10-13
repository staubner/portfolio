const japaneseInterest = document.getElementById('japanese_interest')
const hyogo = document.getElementById('hyogo')

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