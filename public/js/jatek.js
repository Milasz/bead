const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
let state = {

}
let kaszt;
function Kaszt(hp, sebzes, stamina){
    this.hp = hp;
    this.sebzes = sebzes;
    this.stamina = stamina;
}

let enemy;
function Enemy(hp, sebzes, stamina){
    this.hp = hp;
    this.sebzes = sebzes;
    this.stamina = stamina;
}


function startGame(){
    state = {}
    showTextNode(1)
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
                setState:{hp: false, sebzes:false, stamina:false, szellem: false, egyedul: false, kipihent: false, kifáradt: false, elfutott: false, sebesult: false}
            },            
        ]
    },
    {
        id: 1,
        text: 'Szeretnél játszani?',
        options:[
            {
                text:'Igen',  
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
                nextText: 8      
            },
            {
                text:'Sebzés',
                requireState: (currentState) => currentState.stamina,  
                nextText: 9       
            },
            {
                text:'Menekülj',
                nextText: 0
            }
        ]
    },
    {
        id: 7,
        text: 'Ellenfeled nem bírt téged legyűrni, aki inkább elmenekült. Álltatasogágot nem maradt kifizetetlen.\nEgy képességedet most fejlesztheted:',
        options:[
            {
                text:'Növeled álltatatosságod',
                nextText:10        
            },
            {
                text:'Növeled erődet',                  
                nextText:10 
            },
            {
                text:'Növeled gyorsaságod', 
                nextText:10         
            },            
        ]
    },
    {
        id: 8,
        text: 'Ellenfeledre akkorát ütöttél, hogy az azonnal kidőlt. Erőd nem maradt kifizetetlen.\nEgy képességedet most fejlesztheted:',
        options:[
            {
                text:'Növeled álltatatosságod',
                nextText:10        
            },
            {
                text:'Növeled erődet',                  
                nextText:10 
            },
            {
                text:'Növeled gyorsaságod', 
                nextText:10         
            },            
        ]
    },
    {
        id: 9,
        text: 'Ötleteséget határtalan, sebességed pedig villám gyors. Sebességed nem maradt kifizetetlen.\nEgy képességedet most fejlesztheted:',
        options:[
            {
                text:'Növeled álltatatosságod',
                nextText:10        
            },
            {
                text:'Növeled erődet',                  
                nextText:10 
            },
            {
                text:'Növeled gyorsaságod', 
                nextText:10         
            },            
        ]
    },
    {
        id: 10,
        text: 'Egy szellemel kerültél szemben a barlangokban.\n- Segíts kérlek nagyharcos! Itteni szellem vagyok, ha segítesz nekem is kiszabaduni segítek neked gyorsabban a barlang mélyére eljutni.\nHogy döntesz hát?',
        options:[
            {
                text:'Segítek rajta, de nem tűnik megbízhatónak.',
                setState: { szellem: true, egyedul: false},   
                nextText:11         
            },
            {
                text:'Nem szimpatikus nekem ez a szellem így inkább egyedül megyek tovább.',
                setState: { szellem: false, egyedul: true},
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: 'Utatad folytatva egy elágazáshoz értél.\nHárom utat látsz magad előtt:',
        options:[
            {
                text:'Balra egy sötét utat látsz melyben denevéreket találsz',
                requireState: (currentState) => currentState.egyedul,  
                nextText:12         
            },
            {
                text:'Középen egy kivilágított utat látsz és egy kis szellő jön belőle.',
                requireState: (currentState) => currentState.egyedul, 
                nextText:13
            },
            {
                text:'Jobbra egy rejtélyes utat látsz melyben furcsa falkaparásokat látsz a falon.',
                requireState: (currentState) => currentState.egyedul, 
                nextText:14        
            },
            {
                text:'Balra egy sötét utat látsz melyben denevéreket találsz.\n-Hős igaz, hogy veszélyes, de itt egy pihenő van, ahol megpihenhetsz.',
                requireState: (currentState) => currentState.szellem,  
                nextText:12         
            },
            {
                text:'Középen egy kivilágított utat látsz és egy kis szellő jön belőle.\n-Hős még véletlenül se azt az utat válaszd, mert egy szörny van benne.',
                requireState: (currentState) => currentState.szellem,    
                nextText:13 
            },
            {
                text:'Jobbra egy rejtélyes utat látsz melyben furcsa falkaparásokat látsz a falon.\n-Hős a falon a rejtvények megfejtései vannak, ne félj tőle.',
                requireState: (currentState) => currentState.szellem,  
                nextText:14        
            },
            {
                text:'Visszafordulsz és hagyod az egészet.',
                nextText: 0
            }
        ]
    },
    {
        id: 12,
        text: 'Életedet töltheted és pihenhetsz egyett ebben a nagyon jól elrejtettet szállodában.',
        options:[
            {
                text:'Ideje hát tovább állni',
                setState: { kipihent: true },   
                nextText:15        
            },
            {
                text:'Maradsz még',
                nextText: 12
            }
        ]
    },
    {
        id: 13,
        text: 'Egy ujjab szörnnyel állsz szemben itt az ideje hogy harcolj vagy meghalsz',
        options:[
            {
                text:'Életed még sok és harcolni kívánsz, próbára teszed erődet.',
                requireState: (currentState) => currentState.hp,
                requireState: (currentState) => currentState.sebzes,
                setState: {kifáradt: true},
                nextText:15        
            },
            {
                text:'Harcolsz, amíg tudsz.',
                requireState: (currentState) => currentState.stamina,
                nextText: 0
            },
            {
                text:'Sebességed megengedi, hogy elfuss, megpróbálod?',
                requireState: (currentState) => currentState.stamina,
                setState: {elfutott: true},
                nextText: 15
            },
            {
                text:'Fáradt vagy, hogy harcolj és megpróbálsz elosonni mellete. ',
                requireState: (currentState) => currentState.hp,   
                setState:{sebesult: true},            
                nextText:15        
            },
            {
                text:'Fáradt vagy, hogy harcolj és megpróbálsz elosonni mellete. ',
                requireState: (currentState) => currentState.sebzes,               
                nextText:0        
            },

        ]
    },
    {
        id: 14,
        text: 'Egy rejtélyes ládát találtál magad előtt, és gondolkodsz, hogyan nyithatnád ki.\nA rejtvény: ',
        options:[
            {
                text:'Megfejtés.\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                setState:{talalt:true},   
                nextText:15        
            },
            {
                text:'Megfejtés.\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                setState:{nemtalalt:true},     
                nextText:15 
            },
            {
                text:'Megfejtés.\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem,  
                setState:{kozel:true},    
                nextText:15 
            },
            {
                text:'Megfejtés.',
                requireState: (currentState) => currentState.egyedul,
                setState:{talalt:true},  
                nextText:15        
            },
            {
                text:'Megfejtés.',
                requireState: (currentState) => currentState.egyedul, 
                setState:{nemtalalt:true},     
                nextText:15 
            },
            {
                text:'Megfejtés.',
                requireState: (currentState) => currentState.egyedul, 
                setState:{kozel:true},     
                nextText:15 
            },
        ]
    },
    {
        id: 15,
        text: 'Egy képességedet most fejlesztheted:',
        options:[
            {
                text:'Növeled álltatatosságod',
                requireState: (currentState) => currentState.kozel,
                nextText:16       
            },
            {
                text:'Növeled erődet',   
                requireState: (currentState) => currentState.kozel,               
                nextText:16 
            },
            {
                text:'Növeled gyorsaságod',
                requireState: (currentState) => currentState.kozel, 
                nextText:16         
            },  
            {
                text:'Növeled álltatatosságod duplán',
                requireState: (currentState) => currentState.talalt,
                nextText:16       
            },
            {
                text:'Növeled erődet duplán', 
                requireState: (currentState) => currentState.talalt,                 
                nextText:16 
            },
            {
                text:'Növeled gyorsaságod duplán', 
                requireState: (currentState) => currentState.talalt,
                nextText:16         
            }, 
            {
                text:'Növeled álltatatosságod duplán',
                requireState: (currentState) => currentState.nemtalalt,
                nextText:16       
            },
            {
                text:'Növeled erődet duplán', 
                requireState: (currentState) => currentState.nemtalalt,                 
                nextText:16 
            },
            {
                text:'Növeled gyorsaságod duplán', 
                requireState: (currentState) => currentState.nemtalalt,
                nextText:16         
            },               
        ]
    },
    {
        id: 16,
        text: 'Kijutva a barlangból egy ellenségbe futottál.',        
        options:[
            {
                text:'Nem bírsz tovább harcolni és visszatérsz.',
                requireState: (currentState) => currentState.kifáradt,    
                nextText:0        
            },
            {
                text:'Harcba szállsz és kétszeres erővel bírsz',
                requireState: (currentState) => currentState.kipihent, 
                nextText: 17
            },
            {
                text:'Harcba szállsz',
                nextText: 17
            },
            {
                text:'Elfutsz',
                nextText: 0
            },
        ]
    },

]


startGame()