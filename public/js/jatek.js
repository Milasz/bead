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
        text: 'Milyen hős szeretnél lenni?',
        options:[
        {
            text: 'Lövész?',
            nextText:3
        },
        {
            text: 'Ninja?',
            nextText:4
        },
        {
            text: 'Harcos?',
            nextText:5

        },
        {
            text: 'Mágus?',
            nextText:6

        },
        ]
    },
    {
        id: 3,
        text: 'A lövészt választottad. \nAz eszközeidet csak egyszer használhatod fel:\nNyíl\nCsúzli\nKülönleges képesség: Nyílzápor.\nBiztos ez akarsz lenni?',
        options:[
            {
                text:'Igen',
                setState: { lovesz : true, nyil : true, csuzli : true, kulonL : true },
                nextText: 7        
            },
            {
                text:'nem',
                nextText: 2
            }
        ]
    },
    {
        id: 4,
        text: 'A ninját választottad. \nAz eszközeidet csak egyszer használhatod fel:\n Katana\nDobó csillag\nKülönleges képesség: Osonás.\nBiztos ez akarsz lenni?',
        options:[
            {
                text:'Igen',
                setState: { ninja : true, katana : true, dcs : true, kulonN : true},
                nextText: 7        
            },
            {
                text:'nem',
                nextText: 2
            }
        ]
    },
    {
        id: 5,
        text: 'A harcsost választottad. \nAz eszközeidet csak egyszer használhatod fel:\nKard\nPajzs\nKülönleges képesség: Páncélzat.\nBiztos ez akarsz lenni?',
        options:[
            {
                text:'Igen',
                setState : { harcos : true, kard : true, pajzs : true, kulonH : true},                
                nextText: 7        
            },
            {
                text:'nem',
                nextText: 2
            }
        ]
    },
    {
        id: 6,
        text: 'A mágust választottad. \nAz eszközeidet csak egyszer használhatod fel:\nVarázs könyv\nVarázs Pálca\nKülönleges képesség: Idézés.\nBiztos ez akarsz lenni?',
        options:[
            {
                text:'Igen',
                setState : { magus : true, vK : true, vP: true, kulonM : true},                
                nextText: 7        
            },
            {
                text:'nem',
                nextText: 2
            }
        ]
    },
    {
        id: 7,
        text: 'A barang bejáratában egy apro goblin állt őrségben. Ahoz, hogy letudj jutni a barlangba őt most le kell győznöd. Harcolj, hogy te lehess a hős.',
        options:[
            {
                text:'Ijjat használsz?',
                requireState: (currentState) => currentState.lovesz,
                setState :  {nyil : false, visszany: true},         
                nextText: 8,      
            },
            {
                text:'Csúzli használsz?',
                requireState: (currentState) => currentState.lovesz,
                setState :  {csuzli : false, visszacs: true},         
                nextText: 8,     
            },
            {   
                text:'A különleges képességedet használod?',
                requireState: (currentState) => currentState.lovesz,
                setState :  {kulonL : false, elhasznaltL: true},         
                nextText: 8,        
            },
            {
                text:'Katanát használsz?',
                requireState: (currentState) => currentState.ninja,
                setState :  {katana : false, visszak: true},         
                nextText: 8,      
            },
            {
                text:'Dobó csillagot használsz?',
                requireState: (currentState) => currentState.ninja,
                setState :  {dcs : false, visszadcs: true},         
                nextText: 8,     
            },
            {   
                text:'A különleges képességedet használod?',
                requireState: (currentState) => currentState.ninja,
                setState :  {kulonN : false, elhasznaltN: true},         
                nextText: 8,        
            },
            {
                text:'Kardot használsz?',
                requireState: (currentState) => currentState.harcos,
                setState :  {kard : false, visszakard: true},         
                nextText: 8,      
            },
            {
                text:'Pajzsot használsz?',
                requireState: (currentState) => currentState.harcos,
                setState :  {pajzs : false, visszap: true},         
                nextText: 8,     
            },
            {   
                text:'A különleges képességedet használod?',
                requireState: (currentState) => currentState.harcos,
                setState :  {kulonH : false, elhasznaltH: true},         
                nextText: 8,        
            },
            {
                text:'Varázs könyvet használsz?',
                requireState: (currentState) => currentState.magus,
                setState :  {vK : false, visszaVK: true},         
                nextText: 8,      
            },
            {
                text:'Varázs pálcát használsz?',
                requireState: (currentState) => currentState.magus,
                setState :  {vP : false, visszaVP: true},         
                nextText: 8,     
            },
            {   
                text:'A különleges képességedet használod?',
                requireState: (currentState) => currentState.magus,
                setState :  {kulonM : false, elhasznaltM: true},         
                nextText: 8,        
            },
            {
                text:'Elmenekülsz?',
                nextText: 0
            }
        ]
    },
    {
        id: 8,
        text: 'Ellenfeled legyőzted és egy hátra hagyott neked Xp.\nEzt most felhasználhatod, hogy vissza szerzed elhasznált fegyveredet, vagy erősítheted a másikat, avagy később felhasználhatod egy kétszer haszálatos fegyver megszerzéséhez.\nHogy döntesz hát?',
        options:[
            {
                text:'Ijjat szeretném visszakapni.',
                requireState: (currentState) => currentState.visszany,
                setState: {nyil : true, visszany: false},
                nextText: 9,   
            },
            {
                text:'Ijjat szeretném fejleszteni.',
                requireState: (currentState) => currentState.nyil,
                setState: {fejlesztettnyil : true, nyil: false},
                nextText: 9,      
            },
            {
                text:'Csúzli szeretném visszakapni.',
                requireState: (currentState) => currentState.visszacs,
                setState :  {csuzli : true, visszacs : false},         
                nextText: 9,     
            },
            {
                text:'Csúzli szeretném fejleszteni.',
                requireState: (currentState) => currentState.csuzli,
                setState :  {fejlesztettcsuzli : true, csuzli : false},         
                nextText: 9,     
            },
            {
                text:'Katanát szeretném visszakapni.',
                requireState: (currentState) => currentState.visszak,
                setState :  {katana : true,visszak: false},         
                nextText: 9,      
            },
            {
                text:'Katanát szeretném fejleszteni.',
                requireState: (currentState) => currentState.katana,
                setState :  {fejlesztettkatana : true, katana: false},         
                nextText: 9,      
            },
            {
                text:'Dobó csillagot szeretném visszakapni.',
                requireState: (currentState) => currentState.visszadcs,
                setState :  {dcs : true,visszadcs: false},         
                nextText: 9,     
            },
            {
                text:'Dobó csillagot szeretném fejleszteni.',
                requireState: (currentState) => currentState.dcs,
                setState :  {fejlesztettdcs : true,dcs : false},         
                nextText: 9,     
            },
            {
                text:'Kardot szeretném visszakapni.',
                requireState: (currentState) => currentState.visszakard,
                setState :  {kard : true, visszakard : false },         
                nextText: 9,      
            },
            {
                text:'Kardot szeretném fejleszteni.',
                requireState: (currentState) => currentState.kard,
                setState :  {fejlesztettkard : true, kard : false},         
                nextText: 9,      
            },
            {
                text:'Pajzsot szeretném visszakapni.',
                requireState: (currentState) => currentState.visszap,
                setState :  {pajzs : true, visszap: false},         
                nextText: 9,     
            },
            {
                text:'Pajzsot szeretném fejleszteni.',
                requireState: (currentState) => currentState.pajzs,
                setState :  {fejlesztettpajzs : true, pajzs: false},         
                nextText: 9,     
            },
            {
                text:'Varázs könyvet szeretném visszakapni.',
                requireState: (currentState) => currentState.visszaVK,
                setState :  {vK : true, visszaVK : false},         
                nextText: 9,      
            },
            {
                text:'Varázs könyvet szeretném fejleszteni.',
                requireState: (currentState) => currentState.vK,
                setState :  {fejlesztettvK : true, vK: false},         
                nextText: 9,      
            },
            {
                text:'Varázs pálcát szeretném visszakapni.',
                requireState: (currentState) => currentState.visszaVP,
                setState :  {vP : true, visszaVP : false},         
                nextText: 9,     
            },
            {
                text:'Varázs pálcát szeretném fejleszteni.',
                requireState: (currentState) => currentState.vP,
                setState :  {fejlesztettvP : true,vP : false},         
                nextText: 9,     
            },            
            {
                text:'Megtartom az Xp.',
                requireState: (currentState) => currentState.lovesz,
                setState :  {duplaLxp : true},  
                nextText: 9
            },
            {
                text:'Megtartom az Xp.',
                requireState: (currentState) => currentState.ninja,
                setState :  {duplaNxp : true},  
                nextText: 9
            },
            {
                text:'Megtartom az Xp.',
                requireState: (currentState) => currentState.harcos,
                setState :  {duplaHxp : true},  
                nextText: 9
            },
            {
                text:'Megtartom az Xp.',
                requireState: (currentState) => currentState.magus,
                setState :  {duplaMxp : true},  
                nextText: 9
            },
            
        ]
    },    
    {
        id: 9,
        text: 'Egy szellemel kerültél szemben a barlangokban.\n- Segíts kérlek nagyharcos! Itteni szellem vagyok, ha segítesz nekem kiszabadulni én is megsegítelek utadon.\nHogy döntesz hát?',
        options:[
            {
                text:'Segítek rajta, hisz a plusz segítség sosem árt.',
                setState: { szellem: true, egyedul: false},   
                nextText:10         
            },
            {
                text:'Nem szimpatikus nekem ez a szellem, így inkább egyedül megyek tovább.',
                setState: { szellem: false, egyedul: true},
                nextText:10
            }
        ]
    },
    {
        id: 10,
        text: 'Utatad folytatva egy elágazáshoz értél.\nHárom utat látsz magad előtt:',
        options:[
            {
                text:'Balra egy sötét utat látsz melyben denevéreket találsz',
                requireState: (currentState) => currentState.egyedul,  
                nextText:11         
            },
            {
                text:'Középen egy kivilágított utat látsz és egy kis szellő jön belőle.',
                requireState: (currentState) => currentState.egyedul, 
                nextText:12
            },
            {
                text:'Jobbra egy rejtélyes utat látsz melyben furcsa falkaparásokat látsz a falon.',
                requireState: (currentState) => currentState.egyedul, 
                nextText:14        
            },
            {
                text:'Balra egy sötét utat látsz melyben denevéreket találsz.\n-Hős igaz, hogy veszélyes, de itt egy pihenő van, ahol megpihenhetsz.',
                requireState: (currentState) => currentState.szellem,  
                nextText:11         
            },
            {
                text:'Középen egy kivilágított utat látsz és egy kis szellő jön belőle.\n-Hős még véletlenül se azt az utat válaszd, mert egy szörny van benne.',
                requireState: (currentState) => currentState.szellem,    
                nextText:12 
            },
            {
                text:'Jobbra egy rejtélyes utat látsz melyben furcsa falkaparásokat látsz a falon.\n-Hős a falon a rejtvények megfejtései vannak, ne félj tőle.',
                requireState: (currentState) => currentState.szellem,  
                nextText:14       
            },
            {
                text:'Visszafordulsz és hagyod az egészet a fenébe.',
                nextText: 0
            }
        ]
    },
    {
        id: 11,
        text: 'A barlang mélyén egy szállót találtál, megpihenhetsz. Ezzel a pihenővel egy kis szerencsét is nyertél',
        options:[
            {
                text:'Ideje hát tovább állni',
                setState: { szerencs: true },   
                nextText:17       
            },
            {
                text:'Maradsz még',
                nextText: 11
            }
        ]
    },
    {
        id: 12,
        text: 'Egy ujjab szörnnyel állsz szemben itt az ideje hogy harcolj vagy meghalsz',
        options:[
            {
                text:'Lelövöm az ijjal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.nyil,
                setState: { nyil: false, visszany: true},   
                nextText:13        
            },
            {
                text:'Lelövöm a fejlesztett ijjal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.fejlesztettnyil,
                setState: { fejlesztettnyil:false, nyil: true},   
                nextText:13       
            },
            {
                text:'Lelövöm a csúzlival.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.csuzli,
                setState: { csuzli: false,visszacs: true},   
                nextText:13        
            },
            {
                text:'Lelövöm a fejlesztett csúzlival.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.fejlesztettcsuzli,
                setState: { fejlesztettcsuzli:false, csuzli: true},   
                nextText:13       
            },
            {
                text:'Használom a különleges képességemet',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.kulonL,
                setState: { kulonL: false, elhasznaltL: true},   
                nextText:13       
            },
            {
                text:'Leszúrom a katanámmal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.katana,
                setState: { katana: false,visszak: true},   
                nextText:13        
            },
            {
                text:'Leszúrom a fejlesztett katanámmal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.fejlesztettkatana,
                setState: { fejlesztettkatana:false, katana: true},   
                nextText:13        
            },
            {
                text:'Megdobom a dobó csillagommal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.dcs,
                setState: { dcs: false,visszadcs: true},   
                nextText:13        
            },
            {
                text:'Megdobom a fejlesztett dobó csillagommal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.fejlesztettdcs,
                setState: { fejlesztettdcs:false, dcs: true},   
                nextText:13       
            },
            {
                text:'Használom a különleges képességemet',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.kulonN,
                setState: { kulonN: false, elhasznaltN: true},   
                nextText:13        
            },
            {
                text:'Leszúrom a kardommal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.kard,
                setState: { kard: false,visszakard: true},   
                nextText:13        
            },
            {
                text:'Leszúrom a fejlesztett kardommal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.fejlesztettkard,
                setState: { fejlesztettkard:false, kard: true},   
                nextText:13       
            },
            {
                text:'Neki rontok a pajzsommal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.pajzs,
                setState: { pajzs: false,visszap: true},   
                nextText:13       
            },
            {
                text:'Neki rontok a fejlesztett pajzsommal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.fejlesztettpajzs,
                setState: { fejlesztettpajzs:false, pajzs: true},   
                nextText:13       
            },
            {
                text:'Használom a különleges képességemet',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.kulonH,
                setState: { kulonN: false, elhasznaltN: true},   
                nextText:13       
            },
            {
                text:'Elvarázsolom egy varázs igével a könyvből.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.vK,
                setState: { vK: false,visszaVK: true},   
                nextText:13        
            },
            {
                text:'Elvarázsolom egy varázs igével a fejlesztett könyvből.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.fejlesztettvK,
                setState: { fejlesztettvK:false, vK: true},   
                nextText:13       
            },
            {
                text:'A pálcámmal elvarázsolom.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.vP,
                setState: { vP: false, visszaVP: true},   
                nextText:13       
            },
            {
                text:'A fejlesztett pálcámmal elvarázsolom.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.fejlesztettvP,
                setState: { fejlesztettvP:false, vP: true},   
                nextText:13       
            },
            {
                text:'Használom a különleges képességemet',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.kulonM,
                setState: { kulonM: false, elhasznaltM: true},   
                nextText:13       
            },
            {
                text:'Menekülök',
                nextText: 0
            }
        ]
    },
    {
        id: 13,
        text: 'Újabb Xp nyertél, mit csinálsz?',
        options:[
            {
                text:'Szeretném a nyilamat visszakapni',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.visszany,
                setState: { nyil: true, visszany: false},   
                nextText:17     
            },
            {
                text:'Szeretném a nyilamat fejleszteni',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.nyil,
                setState: { nyil: false, fejlesztettnyil: true},   
                nextText:17       
            },
            {
                text:'Szeretném a csúzlimat visszakapni',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.visszacs,
                setState: { csuzli: true, visszacs: false},   
                nextText:17       
            },
            {
                text:'Szeretném a csúzlimat fejleszteni',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.csuzli,
                setState: { csuzli: false, fejlesztettcsuzli: true},   
                nextText:17       
            },
            {
                text:'Szeretném dupla xpmet beváltani Robin Hood nyilára.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.duplaLxp,
                setState: { nagyhood: true},   
                nextText:17       
            },
            {
                text:'Szeretném a katanámat visszakapni',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.visszak,
                setState: { katana: true, visszak: false},   
                nextText:17       
            },
            {
                text:'Szeretném a katanámat fejleszteni',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.katana,
                setState: { katana: false, fejlesztettkatana: true},   
                nextText:17       
            },
            {
                text:'Szeretném a dobó csillagomat visszakapni',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.visszadcs,
                setState: { dcs: true, visszadcs: false},   
                nextText:17       
            },
            {
                text:'Szeretném a dobó csillagomat fejleszteni',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.dcs,
                setState: { dcs: false, fejlesztettdcs: true},   
                nextText:17       
            },
            {
                text:'Szeretném dupla xpmet beváltani a Kay szamurai kardjára',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.duplaNxp,
                setState: { nagyszamurai: true},   
                nextText:17       
            },
            {
                text:'Szeretném a kardomat visszakapni',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.visszakard,
                setState: { kard: true, visszakard: false},   
                nextText:17       
            },
            {
                text:'Szeretném a kardomat fejleszteni',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.kard,
                setState: { kard: false, fejlesztettkard: true},   
                nextText:17       
            },
            {
                text:'Szeretném a pajzsomat visszakapni',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.visszap,
                setState: { pajzs: true, visszap: false},   
                nextText:17       
            },
            {
                text:'Szeretném a pajszomat fejleszteni',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.pajzs,
                setState: { pajzs: false, fejlesztettpajzs: true},   
                nextText:17       
            },
            {
                text:'Szeretném dupla xpmet beváltani az Excaliburra .',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.duplaHxp,
                setState: { nagyexcalibur: true},   
                nextText:17       
            },
            {
                text:'Szeretném a könyvemet visszakapni',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.visszaVK,
                setState: { vK: true, visszaVK: false},   
                nextText:17       
            },
            {
                text:'Szeretném a könyvemet fejleszteni',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.vK,
                setState: { fejlesztettvK: true, vK: false},   
                nextText:17       
            },
            {
                text:'Szeretném a pálcámat visszakapni',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.visszaVP,
                setState: { vP: true, visszaVP: false},   
                nextText:17       
            },
            {
                text:'Szeretném a pálcámat fejleszteni',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.vP,
                setState: { fejlesztettvP: true, vP: false},   
                nextText:17      
            },
            {
                text:'Szeretném dupla xpmet beváltani a Merlin varázs könyvére.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.duplaMxp,
                setState: { nagymerlin: true},   
                nextText:17       
            },
        ]
    },
    {
        id: 14,
        text: 'Egy rejtélyes ládát találtál magad előtt, és gondolkodsz, hogyan nyithatnád ki.\nA rejtvény:',
        options:[
            {
                text:'Megfejtés.\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText:15        
            },
            {
                text:'Megfejtés.\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText:17 
            },
            {
                text:'Megfejtés.\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:13
            },
            {
                text:'Megfejtés.',
                requireState: (currentState) => currentState.egyedul,
                nextText:15        
            },
            {
                text:'Megfejtés.',
                requireState: (currentState) => currentState.egyedul, 
                nextText:16 
            },
            {
                text:'Megfejtés.',
                requireState: (currentState) => currentState.egyedul, 
                nextText:13
            },
        ]
    },
    {
        id: 15,
        text: 'Tökéletes választ adtál, így a jutalmad 2 Xp',
        options:[
            //A
            //a
            {
                text:'Vissza szerzem a nyilamat és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.visszany && currentState.fejlesztettcsuzli, 
                setState: {visszany: false, nyil:true, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood nyilát',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.visszany && currentState.fejlesztettcsuzli, 
                setState:{nagyhood:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzem a Robin Hood nyilát',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{nagyhood:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a nyilamat és a csúzlimat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{nyil:false, fejlesztettnyil:true, csuzli:false, fejlesztettcsuzli: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a nyilamat és marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{nyil:false, fejlesztettnyil:true, duplaLxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a csúzlimat és marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{csuzli:false, fejlesztettcsuzli: true, duplaLxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Robin Hood nyilát megszerzem és marad 1-Xp-ém',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp && !(currentState.nyil), 
                setState:{nagyhood:true, duplaLxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és fejlesztem a csúzlimat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{nagyhood:true, csuzli: false, fejlesztettcsuzli: true },
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és visszaveszem a nyilamat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{nagyhood:true, visszany: false, nyil: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a csúzlimat és visszaveszem a nyilamat és marad 1 Xp-ém.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{ visszany: false, nyil: true, csuzli: false, fejlesztettcsuzli: true, duplaLxp: true},
                nextText:17       
            },  //pipa
            //Az első esik ki 3 esetet von maga után, majd 1. 2 esetet, a 2. 4 esetet és a 3. szintén 4 esetet.

            //B
            //a
            {
                text:'Vissza szerzem a csúzlim és marad 1 xp',   // b esik fejlesztett a 
                requireState: (currentState) => currentState.visszacs && currentState.fejlesztettnyil, 
                setState: {visszacs: false, csuzli:true, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem a Robin Hood nyilát',   // b esik fejlesztett a 
                requireState: (currentState) => currentState.visszacs && currentState.fejlesztettnyil, 
                setState:{nagyhood:true},
                nextText:17       
            },  //pipa 
            //b ugyan az mint az a eset
            //c        
            {
                text:'Robin Hood nyilát megszerzem és marad 1-Xp-ém',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp && !(currentState.csuzli), 
                setState:{nagyhood:true, duplaLxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és fejlesztem a nyilamat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{nagyhood:true,  visszany: false, nyil: true },
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és visszaveszem a csúzlimat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{nagyhood:true, csuzli: true, visszacs: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a nyilamat és visszaveszem a csúzlimat és marad 1 Xp-ém.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{visszacs: false, csuzli: true, nyil: false, fejlesztettnyil: true, duplaLxp: true},
                nextText:17       
            },  //pipa
            // szinten 3 esetünk van mint az ha az első fegyvert veszítenénk el 

            //Ulty
            //a
            {
                text:'Fejlesztem a csúzlimat és marad 1-Xpém',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.elhasznaltL && currentState.fejlesztettnyil, 
                setState: {fejlesztettcsuzli: true, csuzli:false, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem a Robin Hood nyilát',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.elhasznaltL && currentState.fejlesztettnyil, 
                setState: {nagyhood: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejlesztem a nyilamat és marad 1-Xpém',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltL && currentState.fejlesztettcsuzli, 
                setState:{nyil:false, fejlesztettnyil:true, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem a Robin Hood nyilát',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltL && currentState.fejlesztettcsuzli, 
                setState:{nagyhood: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejlesztem a csúzlimat és a nyilamat és még marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltL && currentState.duplaLxp, 
                setState:{csuzli:false, fejlesztettcsuzli: true, duplaLxp:true, nyil:false, fejlesztettnyil:true,},
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és marad 1-Xp-ém',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltL && currentState.duplaLxp,
                setState:{nagyhood:true, duplaLxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és fejlesztem a csúzlimat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltL && currentState.duplaLxp,
                setState:{nagyhood:true, csuzli: false, fejlesztettcsuzli: true },
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és fejlesztem a nyilamat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltL && currentState.duplaLxp,
                setState:{nagyhood:true, nyil: false, fejlesztettnyil: true },
                nextText:17       
            },  //pipa
            

            //Ninja
            //A
            //a
            {
                text:'Vissza szerzem a katanámat és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.visszak && currentState.fejlesztettdcs,  
                setState: {visszak: false, katana:true, duplaNxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem nagy Kay szamurai kardját',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.visszak && currentState.fejlesztettdcs, 
                setState:{nagyszamurai:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzem nagy Kay szamurai kardját',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{nagyszamurai:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a katanámat és a dobó csillagomat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{katana:false, fejlesztettkatana:true, csuzli:false, fejlesztettdcs: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a katanát és marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{katana:false, fejlesztettkatana:true, duplaNxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a dobó csillagomat és marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{dcs:false, fejlesztettdcs: true, duplaNxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Nagy Kay szamurai kardját megszerzem és marad 1Xp-ém',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp && !(currentState.katana), 
                setState:{nagyszamurai:true, duplaNxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és fejlesztem a dobó csillagomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{nagyszamurai:true, dcs: false, fejlesztettdcs: true },
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és visszaveszem a katana.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{nagyszamurai:true, visszak: false, katana: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a dobó csillagomat és visszaveszem a katana és marad 1 Xp-ém.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{visszak: false, katana: true, dcs: false, fejlesztettdcs: true, duplaNxp: true},
                nextText:17       
            },  //pipa


            //B
            //a
            {
                text:'Vissza szerzem a dobó csillagomat és marad 1 xp',   // b esik fejlesztett a 
                requireState: (currentState) => currentState.visszadcs && currentState.fejlesztettkatana, 
                setState: {visszadcs: false, dcs:true, duplaNxp: true},
                nextText:17       
            },  
            {
                text:'Megszerzem nagy Kay szamurai kardját',   // b esik fejlesztett a 
                requireState: (currentState) => currentState.visszadcs && currentState.fejlesztettkatana, 
                setState:{nagyszamurai:true},
                nextText:17       
            },
            //b ugyan az mint A eset b
            //c             
            {
                text:'Nagy Kay szamurai kardját megszerzem és marad 1-Xp-ém',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp && !(currentState.dcs), 
                setState:{nagyszamurai:true, duplaNxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és fejlesztem a katanát.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true,  fejlesztettkatana: true, katana: false },
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és visszaveszem a dobó csillagomat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true, dcs: true, visszacs: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a katanát és visszaveszem a dobó csillagomat és marad 1 Xp-ém.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true, visszadcs: false, dcs: true, katana: false, fejlesztettkatana: true, duplaNxp: true},
                nextText:17       
            },  //pipa

            //Ulty
            //a
            {
                text:'Fejlesztem a dobó csillagomat és marad 1Xp-ém',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.elhasznaltN && currentState.fejlesztettkatana, 
                setState: {fejlesztettdcs: true, dcs:false, duplaNxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem nagy Kay szamurai kardját',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.elhasznaltN && currentState.fejlesztettkatana, 
                setState: {nagyszamurai: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejlesztem a katanát és marad 1-Xpém',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltN && currentState.fejlesztettdcs, 
                setState:{katana:false, fejlesztettkatana:true, duplaNxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem nagy Kay szamurai kardját',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltN && currentState.fejlesztettdcs, 
                setState:{nagyszamurai: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejlesztem a dobó csillagomat és a katanát és még marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltN && currentState.duplaNxp, 
                setState:{dcs:false, fejlesztettdcs: true, duplaNxp:true, katana:false, fejlesztettkatana:true,},
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és marad 1Xp-ém',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltN && currentState.duplaNxp,
                setState:{nagyszamurai:true, duplaNxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és fejlesztem a dobó csillagomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltN && currentState.duplaNxp,
                setState:{nagyszamurai:true, dcs: false, fejlesztettdcs: true },
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és fejlesztem a katanát.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltN && currentState.duplaNxp,
                setState:{nagyszamurai:true, katana: false, fejlesztettkatana: true },
                nextText:17       
            },  //pipa
            

            //Harcos
            //A
            //a
            {
                text:'Vissza szerzem a kard és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.visszakard && currentState.fejlesztettpajzs,  
                setState: {visszakard: false, kard:true, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.visszakard && currentState.fejlesztettpajzs, 
                setState:{nagyexcalibur:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzem az Excaliburt',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{nagyexcalibur:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a kard és a pajzsom',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{kard:false, fejlesztettkard:true, pajzs:false, fejlesztettpajzs: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a kard és marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{kard:false, fejlesztettkard:true, duplaHxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a pajzsomat és marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{pajzs:false, fejlesztettpajzs: true, duplaHxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Az Excaliburt megszerzem és marad 1Xp-ém',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp && !(currentState.kard), 
                setState:{nagyexcalibur:true, duplaHxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt megszerzem és fejlesztem a pajzsomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{nagyexcalibur:true, pajzs: false, fejlesztettpajzs: true },
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt megszerzem és visszaveszem a kard.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{nagyexcalibur:true, visszakard: false, kard: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a pajzsomat és visszaveszem a kard és marad 1 Xp-ém.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{visszakard: false, kard: true, pajzs: false, fejlesztettpajzs: true, duplaHxp: true},
                nextText:17       
            },  //pipa


            //B
            //a
            {
                text:'Vissza szerzem a pajzsomat és marad 1 xp',   // b esik fejlesztett a 
                requireState: (currentState) => currentState.visszap && currentState.fejlesztettkard, 
                setState: {visszap: false, pajzs:true, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt',   // b esik fejlesztett a 
                requireState: (currentState) => currentState.visszap && currentState.fejlesztettkard, 
                setState:{nagyexcalibur:true},
                nextText:17       
            },  //pipa
            //b uagyan az mint az A bje
            //c
            {
                text:'Az Excaliburt megszerzem és marad 1Xp-ém',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp && !(currentState.pajzs), 
                setState:{nagyexcalibur:true, duplaHxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt megszerzem és fejlesztem a kardomat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur:true, kard: false, fejlesztettkard: true },
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt megszerzem és visszaveszem a pajzsomat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur:true, pajzs: true, visszap: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a kardomat és visszaveszem a pajzsomat és marad 1 Xp-ém.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur: true, visszap: false, pajzs: true, kard: false, fejlesztettkard: true, duplaHxp: true},
                nextText:17       
            },  //pipa

            //Ulty
            //a
            {
                text:'Fejlesztem a pajzsomat és marad 1Xp-ém',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.elhasznaltH && currentState.fejlesztettkard, 
                setState: {fejlesztettpajzs: true, pajzs:false, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.elhasznaltH && currentState.fejlesztettkard, 
                setState: {nagyexcalibur: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejlesztem a kardomat és marad 1Xpém',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltH && currentState.fejlesztettpajzs, 
                setState:{kard:false, fejlesztettkard:true, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltH && currentState.fejlesztettpajzs, 
                setState:{kard:false, fejlesztettkard:true, duplaHxp: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejlesztem a pajzsomat és a kardomat és még marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltH && currentState.duplaHxp, 
                setState:{pajzs:false, fejlesztettpajzs: true, duplaHxp:true, kard:false, fejlesztettkard:true,},
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt megszerzem és marad 1-Xp-ém',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltH && currentState.duplaHxp,
                setState:{nagyexcalibur:true, duplaHxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt megszerzem és fejlesztem a pajzsomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltH && currentState.duplaHxp,
                setState:{nagyexcalibur:true, pajzs: false, fejlesztettpajzs: true },
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt kardját megszerzem és fejlesztem a kardomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltH && currentState.duplaHxp,
                setState:{nagyexcalibur:true, kard: false, fejlesztettkard: true },
                nextText:17       
            },  //pipa
            
            //Mágus
            //A
            //a
            {
                text:'Vissza szerzem a könyvemet és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.visszaVK && currentState.fejlesztettvP,  
                setState: {visszaVK: false, vK:true, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.visszaVK && currentState.fejlesztettvP, 
                setState:{nagymerlin:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzem Merlin könyvét',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{nagymerlin:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a könyvemet és a pálcámat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{vK:false, fejlesztettvK:true, vP:false, fejlesztettvP: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a könyvemet és marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{vK:false, fejlesztettvK:true, duplaMxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a pálcámat és marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{vP:false, fejlesztettvP: true, duplaMxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Merlin könyvét megszerzem és marad 1Xp-ém',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp && !(currentState.vK), 
                setState:{nagymerlin:true, duplaMxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és fejlesztem a pálcámat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{nagymerlin:true, vP: false, fejlesztettvP: true },
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és visszaveszem a könyvemet.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{nagymerlin:true, visszaVK: false, vK: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a pálcámat és visszaveszem a könyvemet és marad 1 Xp-ém.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{visszaVK: false, vK: true, vP: false, fejlesztettvP: true, duplaMxp: true},
                nextText:17       
            },  //pipa


            //B
            //a
            {
                text:'Vissza szerzem a pálcámat és marad 1 xp',   // b esik fejlesztett a 
                requireState: (currentState) => currentState.visszaVP && currentState.fejlesztettvK, 
                setState: {visszaVP: false, vP:true, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét',   // b esik fejlesztett a 
                requireState: (currentState) => currentState.visszaVP && currentState.fejlesztettvK, 
                setState:{nagymerlin:true},
                nextText:17       
            },  //pipa
            //b uagyan az mint az A bje
            //c
            {
                text:'Merlin könyvét megszerzem és marad 1Xp-ém',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp && !(currentState.vP), 
                setState:{nagymerlin:true, duplaMxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és fejlesztem a könyvemet.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin:true, vK: false, fejlesztettvK: true },
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és visszaveszem a pálcámat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin:true, vP: true, visszaVP: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a könyvemet és visszaveszem a pálcámat és marad 1 Xp-ém.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin: true, visszaVP: false, vP: true, vK: false, fejlesztettvK: true, duplaMxp: true},
                nextText:17       
            },  //pipa

            //Ulty
            //a
            {
                text:'Fejlesztem a pálcámat és marad 1Xp-ém',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.elhasznaltM && currentState.fejlesztettvK, 
                setState: {fejlesztettvP: true, vP:false, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét',   // a esik fejlesztett b 
                requireState: (currentState) => currentState.elhasznaltM && currentState.fejlesztettvK, 
                setState: {nagymerlin: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejlesztem a könyvemet és marad 1Xpém',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltM && currentState.fejlesztettvP, 
                setState:{vK:false, fejlesztettvK:true, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltM && currentState.fejlesztettvP, 
                setState:{vK:false, fejlesztettvK:true, duplaMxp: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejlesztem a pálcámat és a könyvemet és még marad 1 Xp-ém',   // a esik visszavesz a 
                requireState: (currentState) => currentState.elhasznaltM && currentState.duplaMxp, 
                setState:{vP:false, fejlesztettvP: true, duplaMxp:true, vK:false, fejlesztettvK:true,},
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és marad 1-Xp-ém',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltM && currentState.duplaMxp,
                setState:{nagymerlin:true, duplaMxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és fejlesztem a pajzsomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltM && currentState.duplaMxp,
                setState:{nagymerlin:true, vP: false, fejlesztettvP: true },
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és fejlesztem a könyvemet.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltM && currentState.duplaMxp,
                setState:{nagymerlin:true, vK: false, fejlesztettvK: true },
                nextText:17       
            },  //pipa
        ]
    },
    
    
    {
        id: 16,
        text: 'Sajnos nem sikerült megoldanod a rejtvényt, de sebaj majd legközelebb.',
        options:[
            {
                text:'Megyek tovább a barlangban',   
                nextText:17       
            },            
        ]
    },
    {
        id: 17,
        text: 'Ügyesen teljesítetted az előtte álló nehézségeket.\nViszont most jól figyelj, ez előtted álló barlangból szöny hangokat hallasz, készülj hát, mert most nagy csata vár rád!',
        options:[
            {
                text:'Harcra hát',  
                nextText:18        
            }, 
            {
                text:'-Hé nagy hős ott egy fénylő érme a földön mint ha egy titkos ajtó lenne ott',
                requireState: (currentState) => currentState.szellem && currentState.szerencs,                   
                nextText:22       
            },  
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },      
        ]
    },  
    {
        id: 18,
        text: 'Új ellenség a láthatáron, hogy szeretnéd legyőzni?',
        options:[
            //lövész
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.lovesz && currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText:19       
            },  
            {
                text:'Fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.lovesz && currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText:19        
            }, 
            {
                text:'Fejlesztett nyilammal',
                requireState: (currentState) => currentState.lovesz && currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText:19       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.lovesz && currentState.kulonL, 
                setState: {kulonL: false, elhasznaltL: true},  
                nextText:19        
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.lovesz && currentState.csuzli, 
                setState: {csuzli: false, visszacs: true},  
                nextText:19       
            }, 
            {
                text:'A nyilammal',
                requireState: (currentState) => currentState.lovesz && currentState.nyil, 
                setState: {nyil: false, visszany: true},  
                nextText:19        
            }, 
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText:19       
            },  
            {
                text:'Fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText:19        
            }, 
            {
                text:'Fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText:19       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false, elhasznaltN: true},  
                nextText:19        
            },
            {
                text:'A dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false, visszadcs: true},  
                nextText:19       
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false, visszak: true},  
                nextText:19        
            }, 
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText:19       
            },  
            {
                text:'Fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText:19        
            }, 
            {
                text:'Fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText:19       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false, elhasznaltH: true},  
                nextText:19        
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false, visszap: true},  
                nextText:19       
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false, visszakard: true},  
                nextText:19        
            }, 
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText:19       
            },  
            {
                text:'Fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText:19        
            }, 
            {
                text:'Fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText:19       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false, elhasznaltM: true},  
                nextText:19        
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false, visszaVP: true},  
                nextText:19       
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false, visszaVK: true},  
                nextText:19        
            }, 
            {
                text:'Kipihent vagy így megpróbálhatsz elosonni mellette',  
                requireState: (currentState) => currentState.szerencs,
                nextText:19        
            },
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },           
        ]
    },  
    {
        id: 19,
        text: 'Sikered ünnepelve egy másik szörny jött elő búvóhelyéről. Őt hogy fogod legyőzni?',
        options:[
            //lövész
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.lovesz && currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText:20       
            },  
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.lovesz && currentState.hood, 
                setState: {hood: false},  
                nextText:20       
            },  
            {
                text:'Fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.lovesz && currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText:20        
            }, 
            {
                text:'Fejlesztett nyilammal',
                requireState: (currentState) => currentState.lovesz && currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText:20       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.lovesz && currentState.kulonL, 
                setState: {kulonL: false, elhasznaltL: true},  
                nextText:20        
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.lovesz && currentState.csuzli, 
                setState: {csuzli: false, visszacs: true},  
                nextText:20       
            }, 
            {
                text:'A nyilammal',
                requireState: (currentState) => currentState.lovesz && currentState.nyil, 
                setState: {nyil: false, visszany: true},  
                nextText:20        
            }, 
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText:20       
            }, 
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.szamurai, 
                setState: {szamurai: false},  
                nextText:20       
            },  
            {
                text:'Fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText:20        
            }, 
            {
                text:'Fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText:20       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false, elhasznaltN: true},  
                nextText:20        
            },
            {
                text:'A dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false, visszadcs: true},  
                nextText:20       
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false, visszak: true},  
                nextText:20       
            }, 
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText:20      
            },  
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.excalibur, 
                setState: {excalibur: false},  
                nextText:20      
            }, 
            {
                text:'Fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText:20        
            }, 
            {
                text:'Fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText:20      
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false, elhasznaltH: true},  
                nextText:20        
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false, visszap: true},  
                nextText:20      
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false, visszakard: true},  
                nextText:20       
            }, 
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText:20      
            }, 
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.merlin, 
                setState: {merlin: false},  
                nextText:20      
            }, 
            {
                text:'Fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText:20        
            }, 
            {
                text:'Fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText:20      
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false, elhasznaltM: true},  
                nextText:20       
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false, visszaVP: true},  
                nextText:20       
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false, visszaVK: true},  
                nextText:20       
            }, 
            {
                text:'Szerencsét próbálsz',  
                requireState: (currentState) => currentState.szerencs,
                nextText:22        
            },
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },           
        ]
    },
    {
        id: 20,
        text: 'Itt még nincs vége a harcoknak, az előző szörnynek sikerült riasztani az ellenséget és most jött egy másik.',
        options:[
            //lövész
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.lovesz && currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText:21       
            },  
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.lovesz && currentState.hood, 
                setState: {hood: false},  
                nextText:21       
            },  
            {
                text:'Fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.lovesz && currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText:21        
            }, 
            {
                text:'Fejlesztett nyilammal',
                requireState: (currentState) => currentState.lovesz && currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText:21       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.lovesz && currentState.kulonL, 
                setState: {kulonL: false, elhasznaltL: true},  
                nextText:21        
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.lovesz && currentState.csuzli, 
                setState: {csuzli: false, visszacs: true},  
                nextText:21       
            }, 
            {
                text:'A nyilammal',
                requireState: (currentState) => currentState.lovesz && currentState.nyil, 
                setState: {nyil: false, visszany: true},  
                nextText:21        
            }, 
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText:21       
            }, 
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.szamurai, 
                setState: {szamurai: false},  
                nextText:21       
            },  
            {
                text:'Fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText:21        
            }, 
            {
                text:'Fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText:21       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false, elhasznaltN: true},  
                nextText:21        
            },
            {
                text:'A dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false, visszadcs: true},  
                nextText:21       
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false, visszak: true},  
                nextText:21       
            }, 
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText:21      
            },  
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.excalibur, 
                setState: {excalibur: false},  
                nextText:21      
            }, 
            {
                text:'Fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText:21        
            }, 
            {
                text:'Fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText:21      
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false, elhasznaltH: true},  
                nextText:21        
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false, visszap: true},  
                nextText:21      
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false, visszakard: true},  
                nextText:21       
            }, 
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText:21      
            }, 
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.merlin, 
                setState: {merlin: false},  
                nextText:21      
            }, 
            {
                text:'Fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText:21        
            }, 
            {
                text:'Fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText:21      
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false, elhasznaltM: true},  
                nextText:21       
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false, visszaVP: true},  
                nextText:21       
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false, visszaVK: true},  
                nextText:21       
            }, 
            {
                text:'Kipihent vagy így megpróbálhatsz elosonni mellette',  
                requireState: (currentState) => currentState.szerencs,
                nextText:21        
            },
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },           
        ]
    },
    {
        id: 21,
        text: 'Utolsó és egyben legerősebb szörny jon most ellened, ha őt legyőzöd márcsak pár lépés van hátra  a győzelemig',
        options:[
            //lövész
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.lovesz && currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText:24       
            },  
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.lovesz && currentState.hood, 
                setState: {hood: false},  
                nextText:24       
            },  
            {
                text:'Fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.lovesz && currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText:24        
            }, 
            {
                text:'Fejlesztett nyilammal',
                requireState: (currentState) => currentState.lovesz && currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText:24       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.lovesz && currentState.kulonL, 
                setState: {kulonL: false, elhasznaltL: true},  
                nextText:24        
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.lovesz && currentState.csuzli, 
                setState: {csuzli: false, visszacs: true},  
                nextText:24       
            }, 
            {
                text:'A nyilammal',
                requireState: (currentState) => currentState.lovesz && currentState.nyil, 
                setState: {nyil: false, visszany: true},  
                nextText:24        
            }, 
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText:24       
            }, 
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.szamurai, 
                setState: {szamurai: false},  
                nextText:24       
            },  
            {
                text:'Fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText:24        
            }, 
            {
                text:'Fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText:24       
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false, elhasznaltN: true},  
                nextText:24        
            },
            {
                text:'A dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false, visszadcs: true},  
                nextText:24       
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false, visszak: true},  
                nextText:24       
            }, 
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText:24      
            },  
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.excalibur, 
                setState: {excalibur: false},  
                nextText:24      
            }, 
            {
                text:'Fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText:24        
            }, 
            {
                text:'Fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText:24      
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false, elhasznaltH: true},  
                nextText:24        
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false, visszap: true},  
                nextText:24      
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false, visszakard: true},  
                nextText:24       
            }, 
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText:24      
            }, 
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.merlin, 
                setState: {merlin: false},  
                nextText:24      
            }, 
            {
                text:'Fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText:24        
            }, 
            {
                text:'Fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText:24      
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false, elhasznaltM: true},  
                nextText:24       
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false, visszaVP: true},  
                nextText:24       
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false, visszaVK: true},  
                nextText:24       
            },             
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },           
        ]
    },
    {
        id: 24,
        text: 'Sikeresen helyt áltál a harcban, így most mint gyors Xp-ként visszakaphatod az egyik fegyveredet.\n és megint döntés előtt állsz merre menj:\nBalra ahol megpihenhetsz \nJobbra, ahol tudásodat mutathatod be.',
        options:[
            //lövész
            {
                text:'A nyilamat kérem és balra megyek',  
                requireState: (currentState) => currentState.visszany && currentState.lovesz,
                nextText:25
            }, 
            {
                text:'A nyilamat kérem és jobbra megyek',  
                requireState: (currentState) => currentState.visszany && currentState.lovesz,
                nextText:26
            }, 
            {
                text:'A csúzlimat kérem és balra megyek',  
                requireState: (currentState) => currentState.visszacs && currentState.lovesz,
                nextText:25
            }, 
            {
                text:'A csúzlimat kérem és jobbra megyek',  
                requireState: (currentState) => currentState.visszacs && currentState.lovesz,
                nextText:26
            }, 
            {
                text:'Meg van mindenem balra megyek',  
                requireState: (currentState) => currentState.csuzli && currentState.lovesz && currentState.nyil,
                nextText:25
            }, 
            {
                text:'Meg van mindenem jobbra megyek',  
                requireState: (currentState) => currentState.csuzli && currentState.lovesz && currentState.nyil,
                nextText:26
            }, 
            //ninja
            {
                text:'A katanámat kérem és balra megyek',  
                requireState: (currentState) => currentState.visszak && currentState.ninja,
                nextText:25
            }, 
            {
                text:'A katanámat kérem és jobbra megyek',  
                requireState: (currentState) => currentState.visszak && currentState.ninja,
                nextText:26
            }, 
            {
                text:'A dobó csillagjaimat kérem és balra megyek',  
                requireState: (currentState) => currentState.visszadcs && currentState.ninja,
                nextText:25
            }, 
            {
                text:'A dobó csillagjaimat kérem és jobbra megyek',  
                requireState: (currentState) => currentState.visszadcs && currentState.ninja,
                nextText:26
            }, 
            {
                text:'Meg van mindenem balra megyek',  
                requireState: (currentState) => currentState.dcs && currentState.ninja && currentState.katana,
                nextText:25
            }, 
            {
                text:'Meg van mindenem jobbra megyek',  
                requireState: (currentState) => currentState.dcs && currentState.ninja && currentState.katana,
                nextText:26
            }, 
            //harcos
            {
                text:'A kardomat kérem és balra megyek',  
                requireState: (currentState) => currentState.visszakard && currentState.harcos,
                nextText:25
            }, 
            {
                text:'A kardomat kérem és jobbra megyek',  
                requireState: (currentState) => currentState.visszakard && currentState.harcos,
                nextText:26
            }, 
            {
                text:'A pajzsomat kérem és balra megyek',  
                requireState: (currentState) => currentState.visszap && currentState.harcos,
                nextText:25
            }, 
            {
                text:'A pajzsomat kérem és jobbra megyek',  
                requireState: (currentState) => currentState.visszap && currentState.harcos,
                nextText:26
            }, 
            {
                text:'Meg van mindenem balra megyek',  
                requireState: (currentState) => currentState.pajzs && currentState.harcos && currentState.kard,
                nextText:25
            }, 
            {
                text:'Meg van mindenem jobbra megyek',  
                requireState: (currentState) => currentState.pajzs && currentState.harcos && currentState.kard,
                nextText:26
            }, 

            //magus
            {
                text:'A könyvemet kérem és balra megyek',  
                requireState: (currentState) => currentState.visszaVK && currentState.magus,
                nextText:25
            }, 
            {
                text:'A könyvemet kérem és jobbra megyek',  
                requireState: (currentState) => currentState.visszaVK && currentState.magus,
                nextText:26
            }, 
            {
                text:'A pálcámat kérem és balra megyek',  
                requireState: (currentState) => currentState.visszaVP && currentState.magus,
                nextText:25
            }, 
            {
                text:'A pálcámat kérem és jobbra megyek',  
                requireState: (currentState) => currentState.visszaVP && currentState.magus,
                nextText:26
            }, 
            {
                text:'Meg van mindenem balra megyek',  
                requireState: (currentState) => currentState.vP && currentState.magus && currentState.vK,
                nextText:25
            }, 
            {
                text:'Meg van mindenem jobbra megyek',  
                requireState: (currentState) => currentState.vP && currentState.magus && currentState.vK,
                nextText:26
            },              
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },      
        ]
    },  
    {
        id: 25,
        text: 'Megpihenve a barlangok jól elrejtett mélyében egy bárban pihensz.\nA barista oda szól hozzád:\n-Nagy harcos egy fegyveredért cserébe segítek neked!\nNem túl távol egy kalandor közbe szól:\nNe higgy neki, inkább gyere velünk inni és kapsz egy fegyvert is!\nHogy döntesz?',
        options:[
            {
                text:'A baristának hiszek és oda adom az egyik fegyveremet',  
                nextText:27        
            }, 
            {
                text:'Csatlakozom a kaladorokhoz',                
                nextText:28       
            },  
            {
                text:'Gondolkozom',  
                nextText:25      
            }, 
            {
                text:'Itt maradok örökön örökké',  
                nextText:0      
            },                 
        ]
    },  
    {
        id: 26,
        text: 'A feladvány',
        options:[
            {
                text:'Megfejtés.\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText:33    
            },
            {
                text:'Megfejtés.\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText: 35
            },
            {
                text:'Megfejtés.\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:34
            },
            {
                text:'Megfejtés.',
                requireState: (currentState) => currentState.egyedul,
                nextText:33    
            },
            {
                text:'Megfejtés.',
                requireState: (currentState) => currentState.egyedul, 
                nextText: 35
            },
            {
                text:'Megfejtés.',
                requireState: (currentState) => currentState.egyedul, 
                nextText:34
            },                  
        ]
    },  
    {
        id: 22,
        text: 'A megérzésed nem volt rossz, egy kis kaput találtál, ami segített neked kikerülni a nagyharcot. Most dönthetsz, hogy megdolgoztattod az agyadat a szörny előtt vagy sem?',
        options:[
            {
                text:'Próbáljunk szerencsét eddig bejött',  
                nextText: 26,      
            }, 
            {
                text:'Harcért jöttem, akkor harcolni is fogok',                                
                nextText:30       
            },                   
        ]
    },  
    {
        id: 33,
        text: 'Sikerült megfejtened a fejtörőt a jutalmad:',
        options:[
            //lövész
            {
                text:'Robin Hood nyila (2x használható fegyever)',  
                requireState: (currentState) => currentState.hood && currentState.lovesz,
                setState:{nagyhood: true, hood: false},
                nextText: 29,      
            }, 
            {
                text:'Robin Hood nyila (2x használható fegyever)',  
                requireState: (currentState) => !(currentState.nagyhood) && currentState.lovesz,
                setState:{nagyhood: true},
                nextText: 29,      
            },
            {
                text:'Merida nyila (2x használható fegyever)',  
                requireState: (currentState) => currentState.nagyhood && currentState.lovesz,
                setState:{nagymerida: true},
                nextText: 29,      
            },
            //ninja
            {
                text:'Nagy Kay szamurai kardja (2x használható fegyever)',  
                requireState: (currentState) => currentState.szamurai && currentState.ninja,
                setState:{nagyszamurai: true, szamurai: false},
                nextText: 29,      
            }, 
            {
                text:'Nagy Kay szamurai kardja (2x használható fegyever)',  
                requireState: (currentState) => !(currentState.nagyszamurai) && currentState.ninja,
                setState:{nagyszamurai: true,},
                nextText: 29,      
            }, 
            {
                text:'Szamurai Jack kardja (2x használható fegyever)',  
                requireState: (currentState) => currentState.nagyszamurai && currentState.ninja,
                setState:{nagyjack: true},
                nextText: 29,      
            },
            //harcos
            {
                text:'Az Excalibur (2x használható fegyever)',  
                requireState: (currentState) => currentState.excalibur && currentState.harcos,
                setState:{nagyexcalibur: true, excalibur: false},
                nextText: 29,      
            }, 
            {
                text:'Az Excalibur (2x használható fegyever)',  
                requireState: (currentState) => !(currentState.nagyexcalibur) && currentState.harcos,
                setState:{nagyexcalibur: true,},
                nextText: 29,      
            }, 
            {
                text:'Luke Skywalker fénykardja (3x használható fegyever)',  
                requireState: (currentState) => currentState.nagyszamurai && currentState.harcos,
                setState:{nagyskylezer: true},
                nextText: 29,      
            },
            //magus
            {
                text:'Merlin varázs könyve (2x használható fegyever)',  
                requireState: (currentState) => currentState.merlin && currentState.magus,
                setState:{nagymerlin: true, merlin: false},
                nextText: 29,      
            }, 
            {
                text:'Merlin varázs könyve (2x használható fegyever)',  
                requireState: (currentState) => !(currentState.nagymerlin) && currentState.magus,
                setState:{nagymerlin: true,},
                nextText: 29,      
            }, 
            {
                text:'Wanda Maximoff varázskönyve (2x használható fegyever)',  
                requireState: (currentState) => currentState.nagyszamurai && currentState.magus,
                setState:{nagywanda: true},
                nextText: 29,      
            },                              
        ]
    },  
    {
        id: 34,
        text: 'Nem a legtökéletesebb választ adtad, de közel jártál hozzá. Így a most kapott 1 xp-det fegyverként kapod vissza vagy ha van plusz xp-éd akkor nagyfegyverként\nJutalmad:',
        options:[
            //lövész
            {
                text:'Megkapod a nyiladat',  
                requireState: (currentState) => currentState.visszany && currentState.lovesz && !(currentState.fejlesztettnyil),
                setState:{visszany: false, nyil: true},
                nextText: 29, 
            },
            {
                text:'Megkapod a csuzlidat',  
                requireState: (currentState) => currentState.visszacs && currentState.lovesz  && !(currentState.fejlesztettcsuzli),
                setState:{visszacs: false, csuzli: true},
                nextText: 29, 
            },
            {
                text:'Megkapod a Robin Hood nyilát',  
                requireState: (currentState) => currentState.lovesz && currentState.duplaLxp,
                setState:{nagyhood: true},
                nextText: 29, 
            },

            //ninja
            {
                text:'Megkapod a katanádat',  
                requireState: (currentState) => currentState.visszak && currentState.ninja && !(currentState.fejlesztettkatana),
                setState:{visszany: false, nyil: true},
                nextText: 29, 
            },
            {
                text:'Megkapod a dobó csillagjaidat',  
                requireState: (currentState) => currentState.visszadcs && currentState.ninja  && !(currentState.fejlesztettdcs),
                setState:{visszacs: false, csuzli: true},
                nextText: 29, 
            },
            {
                text:'Megkapod nagy Kay szamurai kardját',  
                requireState: (currentState) => currentState.ninja  && currentState.duplaNxp,
                setState:{nagyhood: true},
                nextText: 29, 
            },
            //harcos
            {
                text:'Megkapod a kardodat',  
                requireState: (currentState) => currentState.visszakard && currentState.harcos && !(currentState.fejlesztettkard),
                setState:{visszakard: false, kard: true},
                nextText: 29, 
            },
            {
                text:'Megkapod a pajzsodat',  
                requireState: (currentState) => currentState.visszap && currentState.harcos  && !(currentState.fejlesztettpajzs),
                setState:{visszap: false, pajzs: true},
                nextText: 29, 
            },
            {
                text:'Megkapod az Excaliburt',  
                requireState: (currentState) => currentState.harcos  && currentState.duplaHxp,
                setState:{nagyexcalibur: true},
                nextText: 29, 
            },
            //magus
            {
                text:'Megkapod a könyvedet',  
                requireState: (currentState) => currentState.visszaVK && currentState.magus && !(currentState.fejlesztettvK),
                setState:{visszakard: false, kard: true},
                nextText: 29, 
            },
            {
                text:'Megkapod a pálcádat',  
                requireState: (currentState) => currentState.visszaVP && currentState.magus  && !(currentState.fejlesztettvP),
                setState:{visszap: false, pajzs: true},
                nextText: 29, 
            },
            {
                text:'Megkapod Merlin varázskönyvét',  
                requireState: (currentState) => currentState.magus  && currentState.duplaHxp,
                setState:{nagymerlin: true},
                nextText: 29, 
            },
        ]
    }


]
startGame()