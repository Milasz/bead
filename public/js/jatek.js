const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
let state = {

}

function startGame(){
    state = {}
    showTextNode(1)
}

var elsoEHP = 30;
var masodikEHP = 40;
var harmadikEHP = 50;


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
                nextText:-1
            },            
        ]
    },
    {
        id: 1,
        text: 'Szeretnél játszani?',
        options:[
            {
                text:'Igen',
                setState: { mukodik: true },   
                nextText:2         
            },
            {
                text:'nem',
                nextText: 0
            }
        ]
    },
    {
        id: 2,
        text: 'Milyen hős szeretnél lenni?',
        options:[
        {
            text: 'Strapabíróbb?',
            nextText:3
        },
        {
            text: 'Erősebb?',
            nextText:4
        },
        {
            text: 'Fürgébb?',
            nextText:5

        },
        ]
    },
    {
        id: 3,
        text: 'A strapabíróbbat választottad. \nGyerekkorodban sokszor megvertek, de soha nem adtad fel és mindig feláltál, ezáltal jobban bíród az ütéseket. Életerőd több lett és így harcolsz tovább.\nEzt választod? \nÍgy 15 hp lesz, 10 sebzésed és 10 staminád.',
        options:[
            {
                text:'Igen',
                setState: { hp: true, sebzes:false, stamina:false},
                nextText: 6        
            },
            {
                text:'nem',
                nextText: 2
            }
        ]
    },
    {
        id: 4,
        text: 'A erősebbet választottad. \nAmerika kapitánnyal edzettél egész eddigi életedben és ennek hála olyan erőre tettél szert, amiről más csak álmodozik. \nEzt választod? \nÍgy 10 hp lesz, 15 sebzésed és 10 staminád.',
        options:[
            {
                text:'Igen',
                setState: { hp: false, sebzes:true, stamina:false},
                nextText: 6        
            },
            {
                text:'nem',
                nextText: 2
            }
        ]
    },
    {
        id: 5,
        text: 'A gyorsabbat választottad. \nEgész életedben kerülted a felesleges harcot és problémát. Gondolkozásod és sebességed ennek eredménye képpen ember feletti lett.\nEzt választod? \nÍgy 10 hp lesz, 10 sebzésed és 15 staminád.',
        options:[
            {
                text:'Igen',
                setState : { hp: false, sebzes:false, stamina:true},                
                nextText: 6        
            },
            {
                text:'nem',
                nextText: 2
            }
        ]
    },
    {
        id: 6,
        text: 'A barang bejáratában egy apro goblin állt őrségben. Ahoz, hogy letudj jutni a barlangba őt most le kell győznöd. Harcolj, hogy te lehess a hős.',
        options:[
            {
                text:'Sebzés',
                requireState: (currentState) => currentState.hp,  
                
                nextText: 7       
            },
            {
                text:'Sebzés',
                requireState: (currentState) => currentState.sebzes,  
                nextText: 7       
            },
            {
                text:'Sebzés',
                requireState: (currentState) => currentState.stamina,  
                nextText: 7       
            },
            {
                text:'Menekülj',
                nextText: 0
            }
        ]
    },
    {
        id: 7,
        text: 'Sikerült',
        options:[
            {
                text:'Igen',
                setState: { mukodik: true },   
                nextText:2         
            },
            {
                text:'nem',
                nextText: 0
            }
        ]
    },


    
    // {
    //     id:4,
    //     text: 'Előtted áll egy szellem, aki kéri a segítségedet. Hogy döntesz? Segítesz rajta és ő is megsegít alapon vagy inkább önfejű leszel és haladsz magadtól?',
    //     options:[
    //     {
    //         text: 'Segítek',            
    //         setState: {meselo: true, latszik: false},
    //         nextText:5
    //     },
    //     {
    //         text: 'Egyedül erősebb vagyok',            
    //         setState: {meselo: false, latszik: true},
    //         nextText:5
    //     },        
    //     ]
    // },

    // {
    //     id:5,
    //     text: '',
    //     options:[
    //     {
    //         text: 'Segítek',            
    //         setState: {meselo: true, latszik: false},
    //         nextText:5
    //     },
    //     {
    //         text: 'Egyedül erősebb vagyok',            
    //         setState: {meselo: false, latszik: true},
    //         nextText:5
    //     },        
    //     ]
    // },


    
    // {
    //     id:6,
    //     text: 'Ahogy haladsz tovább a barlangra 3 út jelenik meg előtted.',
    //     options:[
    //     {
    //         text: 'A bal út életet tölt',            
    //         requireState: (currentState) => currentState.meselo,
    //         nextText:7
    //     },
    //     {
    //         text: 'A bal út tüskés és sötét',     
    //         requireState: (currentState) => currentState.latszik,       
    //         nextText:7
    //     },      
    //     {
    //         text: 'A középső út egy szörnyű rémet rejt',            
    //         requireState: (currentState) => currentState.meselo,
    //         nextText:8
    //     },
    //     {
    //         text: 'A középső út letisztult és kivilágított',            
    //         requireState: (currentState) => currentState.latszik,
    //         nextText:8
    //     },
    //     {
    //         text: 'A jobb út egy fejtörőt rejt',            
    //         requireState: (currentState) => currentState.meselo,
    //         nextText:9
    //     },  
    //     {
    //         text: 'A jobb út kivilágított, de egy rejtélyes erő hatja át',            
    //         requireState: (currentState) => currentState.latszik,
    //         nextText:9
    //     },
    //     ]
    // },
]


startGame()