const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

var state = {
   
}
let lovesz ={
    hp : 3,
    stamina : 2,
    védekezés : 3,
    kaszt : 'lövész'
}

function startGame(){
    state = {}
    lovesz = {}
    showTextNode(1)
}
function mentes(){

}


function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode=> textNode.id === textNodeIndex)
    textElement.innerText = textNode.text;
    while(optionButtonsElement.firstChild)
    {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if(showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', ()=> selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}
function showOption(option){
    return option.requireState == null || option.requireState(state)
}

function selectOption(option){
    const nextTextNodeId = option.nextText
    if (nextTextNodeId<0)
    {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}
const textNodes = [
    {
        id: 0,
        text: 'Game over, kezd újra, ha akarod?',
        options:[
            {
                text: 'Újra kezdem',
                nextText:-1,
                setState:{}
            },            
        ]
    },
    {
        id: 1,
        text: 'Szeretnél játszani?',
        options:[
            {
                text:'Igen', 
                setLovesz:{hp:-2}, 
                nextText:2         
            },
            {
                text:'Nem',
                nextText: 0
            }
        ]
    },
    {
        id: 2,
        text: 'talán sikerült?',
        options:[
            {
                text: '',
                nextText: 0
            }
        ]
    },
]
startGame()