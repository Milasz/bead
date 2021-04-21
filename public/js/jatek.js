const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

var state = {
   
}

function startGame(){
    state = {}
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
        setState : {palya: 6},
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
        text:'A barang bejáratában egy apro goblin állt őrségben. Ahoz, hogy letudj jutni a barlangba őt most le kell győznöd. Harcolj, hogy te lehess a hős.',
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
                setState: { nagyhood: true, duplaLxp: false},   
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
                setState: { nagyszamurai: true, duplaNxp: false},   
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
                setState: { nagyexcalibur: true, duplaHxp: false},   
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
                setState: { nagymerlin: true, duplaMxp: false},   
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
                setState:{nagyhood:true, csuzli: false, fejlesztettcsuzli: true, duplaLxp:false },
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és visszaveszem a nyilamat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{nagyhood:true, visszany: false, nyil: true, duplaLxp:false},
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
                setState:{nagyhood:true,  visszany: false, nyil: true, duplaLxp:false},
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és visszaveszem a csúzlimat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{nagyhood:true, csuzli: true, visszacs: false, duplaLxp:false},
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
                setState:{nagyhood:true, csuzli: false, fejlesztettcsuzli: true, duplaLxp:false },
                nextText:17       
            },  //pipa
            {
                text:'Robin Hood nyilát megszerzem és fejlesztem a nyilamat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltL && currentState.duplaLxp,
                setState:{nagyhood:true, nyil: false, fejlesztettnyil: true, duplaLxp:false },
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
                setState:{nagyszamurai:true, dcs: false, fejlesztettdcs: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és visszaveszem a katana.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{nagyszamurai:true, visszak: false, katana: true, duplaNxp: false},
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
                setState:{nagyszamurai:true,  fejlesztettkatana: true, katana: false, duplaNxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és visszaveszem a dobó csillagomat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true, dcs: true, visszacs: false, duplaNxp: false},
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
                setState:{nagyszamurai:true, dcs: false, fejlesztettdcs: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Nagy Kay szamurai kardját megszerzem és fejlesztem a katanát.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltN && currentState.duplaNxp,
                setState:{nagyszamurai:true, katana: false, fejlesztettkatana: true, duplaNxp: false},
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
                setState:{nagyexcalibur:true, pajzs: false, fejlesztettpajzs: true ,duplaHxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt megszerzem és visszaveszem a kard.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{nagyexcalibur:true, visszakard: false, kard: true, duplaHxp: false},
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
                setState:{nagyexcalibur:true, kard: false, fejlesztettkard: true, duplaHxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt megszerzem és visszaveszem a pajzsomat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur:true, pajzs: true, visszap: false, duplaHxp: false },
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
                setState:{nagyexcalibur:true, pajzs: false, fejlesztettpajzs: true, duplaHxp: false  },
                nextText:17       
            },  //pipa
            {
                text:'Az Excaliburt kardját megszerzem és fejlesztem a kardomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltH && currentState.duplaHxp,
                setState:{nagyexcalibur:true, kard: false, fejlesztettkard: true, duplaHxp: false  },
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
                setState:{nagymerlin:true, duplaMxp:true , duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és fejlesztem a pálcámat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{nagymerlin:true, vP: false, fejlesztettvP: true , duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és visszaveszem a könyvemet.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{nagymerlin:true, visszaVK: false, vK: true, duplaMxp: false},
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
                setState:{nagymerlin:true, vK: false, fejlesztettvK: true, duplaMxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és visszaveszem a pálcámat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin:true, vP: true, visszaVP: false, duplaMxp: false},
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
                text:'Megszerzem Merlin könyvét',   // a esik visszavesz a 
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
                setState:{nagymerlin:true, vP: false, fejlesztettvP: true, duplaMxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Merlin könyvét megszerzem és fejlesztem a könyvemet.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.elhasznaltM && currentState.duplaMxp,
                setState:{nagymerlin:true, vK: false, fejlesztettvK: true, duplaMxp: false },
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
                requireState: (currentState) => currentState.lovesz, 
                nextText:40        
            }, 
            {
                text:'Harcra hát', 
                requireState: (currentState) => currentState.ninja, 
                nextText:44        
            },  
            {
                text:'Harcra hát',  
                requireState: (currentState) => currentState.harcos,
                nextText:48
            },
            {
                text:'Harcra hát', 
                requireState: (currentState) => currentState.magus, 
                nextText:52        
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
        id: 40,
        text: 'Első ellenséged egy nyilas goblin\nHogy döntesz, hogy győzöd le?',
        options:[
            //lövész
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText: 41      
            },  
            {
                text:'Fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 41      
            }, 
            {
                text:'Fejlesztett nyilammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 41      
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false, elhasznaltL: true},  
                nextText: 41        
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false, visszacs: true},  
                nextText: 41
            }, 
            {
                text:'A nyilammal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false, visszany: true},  
                nextText: 41
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    },  
    {
        id: 41,
        text: 'Második ellenséged egy nyílpuskás csontváz.\nHogy döntesz, hogy győzöd le?',
        options:[
            //lövész
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText: 42
            },  
            {
                text:'Fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 42
            }, 
            {
                text:'Fejlesztett nyilammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 42
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false, elhasznaltL: true},  
                nextText: 42
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false, visszacs: true},  
                nextText: 42
            }, 
            {
                text:'A nyilammal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false, visszany: true},  
                nextText: 42
            },
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            }, 
	    ]
    },  
    {
        id: 42,
        text: 'Harmadik egyben utólsó előtti ellenséged egy fegyvertelen goblin\nHogy döntesz, hogy győzöd le?',
        options:[
            //lövész
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText: 43
            },  
            {
                text:'Fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 43
            }, 
            {
                text:'Fejlesztett nyilammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 43
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false, elhasznaltL: true},  
                nextText: 43
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false, visszacs: true},  
                nextText: 43
            }, 
            {
                text:'A nyilammal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false, visszany: true},  
                nextText: 43
            }, 
	        {
                text:'Mivel fegyvertelen csak leütöm fegyver használat nélkül',
                requireState: (currentState) => currentState.lovesz, 
                nextText: 43
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    }, 
{
        id: 43,
        text: 'Utólsó ellenefeled egy vadász ijjal fegyverkezett csontváz\nHogy döntesz, hogy győzöd le?',
        options:[
            //lövész
            {
                text:'Robin Hood nyilával.',
                requireState: (currentState) => currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText: 24
            },  
            {
                text:'Fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 24
            }, 
            {
                text:'Fejlesztett nyilammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 24
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false, elhasznaltL: true},  
                nextText: 24
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false, visszacs: true},  
                nextText: 24
            }, 
            {
                text:'A nyilammal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false, visszany: true},  
                nextText: 24
            }, 
	        {
                text:'Fáradj vagyok de mint, ha ott lenne egy titkos ajtó',
                requireState: (currentState) => currentState.lövész && currentState.szerencse, 
                nextText: 24
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    }, 
    {
        id: 44,
        text: 'Első ellenséged egy katanával fegyverkezett goblin\nHogy döntesz, hogy győzöd le?',
        options:[
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText: 45
            },  
            {
                text:'Fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, dcs: true},  
                nextText: 45
            }, 
            {
                text:'Fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 45
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false, elhasznaltN: true},  
                nextText: 45
            },
            {
                text:'A dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false, visszadcs: true},  
                nextText: 45
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false, visszak: true},  
                nextText: 45
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    },  
{
        id: 45,
        text: 'Második ellenséged dobó csillagok fegyverkezett zombi\nHogy döntesz, hogy győzöd le?',
        options:[
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText: 46
            },  
            {
                text:'Fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText: 46
            }, 
            {
                text:'Fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 46
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false, elhasznaltN: true},  
                nextText: 46
            },
            {
                text:'A dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false, visszadcs: true},  
                nextText: 46
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false, visszak: true},  
                nextText: 46
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    }, 
    {
        id: 46,
        text: 'Utólsó előtti ellenséged egy fegyvertelen slime\nHogy döntesz, hogy győzöd le?',
        options:[
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText: 47
            },  
            {
                text:'Fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText: 47
            }, 
            {
                text:'Fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 47
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false, elhasznaltN: true},  
                nextText: 47
            },
            {
                text:'A dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false, visszadcs: true},  
                nextText: 47
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false, visszak: true},  
                nextText: 47
            }, 
	        {
                text:'Mivel fegyvertelen leütöm és nem használok el fegyvert rá',
                nextText: 47
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    },
    {
        id: 47,
        text: 'Utólsó egy halott szamurai harcos bőrébe bújt szellem\nHogy döntesz, hogy győzöd le?',
        options:[
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText: 24
            },  
            {
                text:'Fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText: 24
            }, 
            {
                text:'Fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 24
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false, elhasznaltN: true},  
                nextText: 24
            },
            {
                text:'A dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false, visszadcs: true},  
                nextText: 24
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false, visszak: true},  
                nextText: 24
            }, 
	        {
                text:'Elfáradtam, és mintha halucinálnék, de ott egy titkos ajtó',
		        requireState: (currentState) => currentState.szerencse,
                nextText: 24
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    },  
    {
        id: 48,
        text: 'Első ellenséged egy kardal felfegyverkezett goblin\nHogy döntesz, hogy győzöd le?',
        options:[
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText: 49
            },  
            {
                text:'Fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 49
            }, 
            {
                text:'Fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 49
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false, elhasznaltH: true},  
                nextText: 49
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false, visszap: true},  
                nextText: 49
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false, visszakard: true},  
                nextText: 49
            },
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    },  
    {
        id: 49,
        text: 'Második ellenséged egy pajzsos zombi\nHogy döntesz, hogy győzöd le?',
        options:[
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText: 50
            },  
            {
                text:'Fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 50
            }, 
            {
                text:'Fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 50
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false, elhasznaltH: true},  
                nextText: 50
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false, visszap: true},  
                nextText: 50
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false, visszakard: true},  
                nextText: 50
            },
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    },  
    {
        id: 50,
        text: 'Harmadik ellenséged egy fegyvertelen pók\nHogy döntesz, hogy győzöd le?',
        options:[
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText: 51
            },  
            {
                text:'Fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 51
            }, 
            {
                text:'Fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 51
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false, elhasznaltH: true},  
                nextText: 51
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false, visszap: true},  
                nextText: 51
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false, visszakard: true},  
                nextText: 51
            },
	        {
                text:'Mivel fegyvertelen le tudom ütni és így nem veszyítek fegyvert',
                nextText: 51
            },
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    },  
    {
        id: 51,
        text: 'Utolsó ellenséged egy páncélos zombi\nHogy döntesz, hogy győzöd le?',
        options:[
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText: 24
            },  
            {
                text:'Fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 24
            }, 
            {
                text:'Fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 24
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false, elhasznaltH: true},  
                nextText: 24
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false, visszap: true},  
                nextText: 24
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false, visszakard: true},  
                nextText: 24
            },
	        {
                text:'Elfáradtam de olyan mint ha ott lenne egy titkos ajtó',
		        requireState: (currentState) => currentState.szerencse,
                nextText: 24
            },
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },
	    ]
    }, 
    {
        id: 52,
        text: 'Első ellenséged boszorkány\nHogy döntesz, hogy győzöd le?',
        options:[
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText: 53
            },  
            {
                text:'Fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 53
            }, 
            {
                text:'Fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 53
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false, elhasznaltM: true},  
                nextText: 53
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false, visszaVP: true},  
                nextText: 53
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false, visszaVK: true},  
                nextText: 53
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },   
	    ]
    },
    {
        id: 53,
        text: 'Második ellenséged egy gonosz varázsló\nHogy döntesz, hogy győzöd le?',
        options:[
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText: 54
            },  
            {
                text:'Fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 54
            }, 
            {
                text:'Fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 54
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false, elhasznaltM: true},  
                nextText: 54
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false, visszaVP: true},  
                nextText: 54
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false, visszaVK: true},  
                nextText: 54
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },   
	    ]
    },
    {
        id: 54,
        text: 'Harmadik ellenfeled egy fegyvertelen idézett lény\nHogy döntesz, hogy győzöd le?',
        options:[
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText: 55
            },  
            {
                text:'Fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 55
            }, 
            {
                text:'Fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 55
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false, elhasznaltM: true},  
                nextText: 55
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false, visszaVP: true},  
                nextText: 55
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false, visszaVK: true},  
                nextText: 55
            }, 
	        {
                text:'Mivel fegyvertelen, így fejbe csapom a könyvemmel és így nem használom el',
                nextText: 55
            }, 
            {
                text:'Ennyi elég volt nem bírom tovább',  
                nextText:0        
            },   
	    ]
    },
    {
        id: 55,
        text: 'Harmadik ellenfeled egy fegyvertelen idézett lény\nHogy döntesz, hogy győzöd le?',
        options:[
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText: 24
            },  
            {
                text:'Fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 24
            }, 
            {
                text:'Fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 24
            },
            {
                text:'Különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false, elhasznaltM: true},  
                nextText: 24
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false, visszaVP: true},  
                nextText: 24
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false, visszaVK: true},  
                nextText: 24
            }, 
	        {
                text:'Elfáradtam de mintha ott lenne egy titkos ajtó',
		        requireState: (currentState) => currentState.szerencse,
                nextText: 24
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
                text:'Meg van mindenem, ami nekem kell, és  balra megyek',  
                requireState: (currentState) => currentState.csuzli && currentState.lovesz && currentState.nyil,
                nextText:25
            }, 
            {
                text:'Meg van mindenem, ami nekem kell, és jobbra megyek',  
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
                text:'Meg van mindenem, ami nekem kell, és balra megyek',  
                requireState: (currentState) => currentState.dcs && currentState.ninja && currentState.katana,
                nextText:25
            }, 
            {
                text:'Meg van mindenem, ami nekem kell, és jobbra megyek',  
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
                text:'Meg van mindenem, ami nekem kell, és balra megyek',  
                requireState: (currentState) => currentState.pajzs && currentState.harcos && currentState.kard,
                nextText:25
            }, 
            {
                text:'Meg van mindenem, ami nekem kell, és jobbra megyek',  
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
                text:'Meg van mindenem, ami nekem kell, és  balra megyek',  
                requireState: (currentState) => currentState.vP && currentState.magus && currentState.vK,
                nextText:25
            }, 
            {
                text:'Meg van mindenem, ami nekem kell, és jobbra megyek',  
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
        text: 'Megpihenve a barlangok jól elrejtett mélyében egy kocsmában pihensz.\nA kocsmáros oda szól hozzád:\n-Nagy harcos egy xp-ért cserébe segítek neked!\nNem túl távol egy kalandor közbe szól:\n-Ne higgy neki, inkább gyere velünk inni és kapsz egy fegyvert is!\nHogy döntesz?',
        options:[
            {
                text:'A baristának hiszek',  
                requireState: (currentState) => currentState.duplaLxp && currentState.szellem,
                nextText:27        
            }, 
            
            {
                text:'A baristának hiszek',
                requireState: (currentState) => currentState.duplaNxp && currentState.szellem ,  
                nextText:27        
            }, 
            {
                text:'A baristának hiszek', 
                requireState: (currentState) => currentState.duplaHxp && currentState.szellem, 
                nextText:27        
            }, 
            {
                text:'A baristának hiszek',  
                requireState: (currentState) => currentState.duplaMxp && currentState.szellem,
                nextText:27        
            }, 
            {
                text:'A barista azt akarja mondani, hogy a boss a szellem lesz, válaszd a kalandort :D',  
                requireState: (currentState) => currentState.egyedul,
                nextText:28        
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
            {
                text:'Sajnos egyik feltétel sem egyezik így megyünk harcolni...',  
                nextText: 29, 
            },
        ]
    },
    {
        id: 35,
        text: 'Kifogodt rajtad ez a fejtörő, így most ez nem sikerült.',
        options:[
            {
                text:'Mit tehetnénk, ez most nem jött össze, harcra fel',  
                nextText: 29,      
            }, 
            {
                text:'A fene essen bele, itt a vége',                                
                nextText:0       
            },                   
        ]
    }, 
    {
        id: 27,
        text: 'Oh nagy harcos vigyázz kivel barátkozol ugyanis a te kis barátod a szellem a főgonosza ennek a történetnek.',
        options:[
            {
                text:'Lerázod magadról a szellemet',
                setState: {szellem : false, egyedul : true},  
                nextText: 29,      
            }, 
            {
                text:'A fene jobban tudja nem hallgatsz rá és tovább állsz',                                
                nextText: 29,      
            },                   
        ]
    }, 
    {
        id: 28,
        text: 'Egy barátságos ivászat után a kalandorok bízva benned, adnak neked egy fegyvert melytől remélik legyőződ a szörnyek szörnyét.',
        options:[
            //lövész
            {
                text:'Megkapod Merida ijját',
                requireState: (currentState) => currentState.lovesz,
                setState: {nagymerida : true},  
                nextText: 29,      
            }, 
            //ninja
            {
                text:'Megkapod Szamurai Jack kardját',
                requireState: (currentState) => currentState.ninja,
                setState: {nagyjack : true},  
                nextText: 29,      
            },
            //harcos
            {
                text:'Megkapod Wonder Woman pajzsát',
                requireState: (currentState) => currentState.harcos,
                setState: {nagyww : true},  
                nextText: 29,      
            },
            //magus
            {
                text:'Megkapod Wanda Maximoff varázskönyvét',
                requireState: (currentState) => currentState.magus,
                setState: {nagywanda: true},  
                nextText: 29,      
            },
            {
                text:'Jobban tetszik neked a részeges élet és itt maradsz',                                
                nextText: 0,      
            },                   
        ]
    }, 
    {
        id: 29,
        text: 'Itt az idő a nagyharcra, hogy beteljesísd sorsodat.\nKészen állsz?',
        options:[
            {
                text:'Hát, hogy a fenébe ne lennék kész!',
                requireState: (currentState) => currentState.szellem, 
                nextText: 30,      
            }, 
            {
                text:'Készen állok, vágjunk bele',  
                requireState: (currentState) => currentState.egyedul,                              
                nextText: 36,      
            },
            {
                text:'Áh nem hiszem, hogy készen állnék a harcra',                           
                nextText: 0,      
            },

        ]
    }, 
    {
        id: 30,
        text: '-Muhahahaa\nHallatszik nem is olyan távol tőled, mire arra fordulsz és látod, hogy a szellem gonosz nevetése hallatszik melleted.\n-Idáig jöttél, hogy kiszabadísd őket miközben egész eddig én voltam az ellenséged, hahaha',
        options:[
            //lövész
            {
                text:'Lelövöm a fejlesztett nyilammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState:{fejlesztettnyil:false, nyil:true},
                nextText: 31,      
            }, 
            {
                text:'Lelövöm a nyilammal',
                requireState: (currentState) => currentState.nyil, 
                setState:{nyil:false},
                nextText: 31,      
            }, 
            {
                text:'Lelövöm a fejlesztett csuzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState:{fejlesztettcsuzli:false, csuzli:true},
                nextText: 31,      
            }, 
            {
                text:'Lelövöm a csuzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState:{csuzli:false},
                nextText: 31,      
            }, 
            {
                text:'Merlin nyilát használom',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 31,      
            }, 
            {
                text:'Merlin nyilát használom',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 31,      
            }, 
            {
                text:'Merida nyilát használom',
                requireState: (currentState) => currentState.nagymerida, 
                setState:{nagymerida:false, merida: true},
                nextText: 31,      
            },
            {
                text:'Merida nyilát használom',
                requireState: (currentState) => currentState.merida, 
                setState:{merida: false},
                nextText: 31,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonL, 
                setState:{kulonL: false, elhasznaltL : true},
                nextText: 31,      
            },
            //ninja
            {
                text:'Leszúrom a fejlesztett katanámmal',
                requireState: (currentState) => currentState.fejlesztettkatana, 
                setState:{fejlesztettkatana:false, katana:true},
                nextText: 31,      
            }, 
            {
                text:'Leszúrom a katanámmal',
                requireState: (currentState) => currentState.katana, 
                setState:{katana:false},
                nextText: 31,      
            }, 
            {
                text:'Lelövöm a fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.fejlesztettdcs, 
                setState:{fejlesztettdcs:false, dcs:true},
                nextText: 31,      
            }, 
            {
                text:'Lelövöm a dobó csillagjaimmal',
                requireState: (currentState) => currentState.dcs, 
                setState:{dcs:false},
                nextText: 31,      
            }, 
            {
                text:'Kay kardját használom',
                requireState: (currentState) => currentState.nagyszamurai, 
                setState:{nagyszamurai:false, szamurai:true},
                nextText: 31,      
            }, 
            {
                text:'Kay kardját használom',
                requireState: (currentState) => currentState.szamurai, 
                setState:{szamurai:false},
                nextText: 31,      
            }, 
            {
                text:'Szamurai Jack kardját használom',
                requireState: (currentState) => currentState.nagyjack, 
                setState:{nagyjack:false, jack: true},
                nextText: 31,      
            },
            {
                text:'Szamurai Jack kardját használom',
                requireState: (currentState) => currentState.jack, 
                setState:{jack: false},
                nextText: 31,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonN, 
                setState:{kulonN: false, elhasznaltN : true},
                nextText: 31,      
            },
            //harcos
            {
                text:'Leszúrom a fejlesztett kardommal',
                requireState: (currentState) => currentState.fejlesztettkard, 
                setState:{fejlesztettkard:false, kard:true},
                nextText: 31,      
            }, 
            {
                text:'Leszúrom a kardommal',
                requireState: (currentState) => currentState.kard, 
                setState:{kard:false},
                nextText: 31,      
            }, 
            {
                text:'Leütöm a fejlesztett pajzsommal',
                requireState: (currentState) => currentState.fejlesztettpajzs, 
                setState:{fejlesztettpajzs:false, pajzs:true},
                nextText: 31,      
            }, 
            {
                text:'Leütöm a pajzsommal',
                requireState: (currentState) => currentState.pajzs, 
                setState:{pajzs:false},
                nextText: 31,      
            }, 
            {
                text:'Az Excaliburt használom',
                requireState: (currentState) => currentState.nagyexcalibur, 
                setState:{nagyexcalibur:false, excalibur:true},
                nextText: 31,      
            }, 
            {
                text:'Az Excaliburt használom',
                requireState: (currentState) => currentState.excalibur, 
                setState:{excalibur:false},
                nextText: 31,      
            }, 
            {
                text:'Wonder Woman pajzsát használom',
                requireState: (currentState) => currentState.nagyww, 
                setState:{nagyww:false, ww: true},
                nextText: 31,      
            },
            {
                text:'Wonder Woman pajzsát használom',
                requireState: (currentState) => currentState.ww, 
                setState:{ww: false},
                nextText: 31,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonH, 
                setState:{kulonH: false, elhasznaltH : true},
                nextText: 31,      
            },
            //magus
            {
                text:'Elátkozom a fejlesztett varázs könyvemmel',
                requireState: (currentState) => currentState.fejlesztettvK, 
                setState:{fejlesztettvK:false, vK:true},
                nextText: 31,      
            }, 
            {
                text:'Elátkozom varázs könyvemmel',
                requireState: (currentState) => currentState.vK, 
                setState:{vK:false},
                nextText: 31,      
            }, 
            {
                text:'Elvarázsolom a fejlesztett pálcámmal',
                requireState: (currentState) => currentState.fejlesztettvP, 
                setState:{fejlesztettvP:false, vP:true},
                nextText: 31,      
            }, 
            {
                text:'Elvarázsolom pálcámmal',
                requireState: (currentState) => currentState.vP, 
                setState:{vP:false},
                nextText: 31,      
            }, 
            {
                text:'Merlin könyvét használom',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 31,      
            }, 
            {
                text:'Merlin könyvét használom',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 31,      
            }, 
            {
                text:'Wanda könyvét használom',
                requireState: (currentState) => currentState.nagywanda, 
                setState:{nagywanda:false, wanda: true},
                nextText: 31,      
            },
            {
                text:'Wanda könyvét használom',
                requireState: (currentState) => currentState.wanda, 
                setState:{wanda: false},
                nextText: 31,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonM, 
                setState:{kulonM: false, elhasznaltM : true},
                nextText: 31,      
            },
            {
                text:'Elvérzek ennek, itt a vége',
                nextText: 0,      
            },                   
        ]
    },
    {
        id: 31,
        text: '-Még közel se járzs a győzelemhez harcos, gyerünk mutasd meg ki vagy!!',
        options:[
            //lövész
            {
                text:'Lelövöm a fejlesztett nyilammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState:{fejlesztettnyil:false, nyil:true},
                nextText: 32,      
            }, 
            {
                text:'Lelövöm a nyilammal',
                requireState: (currentState) => currentState.nyil, 
                setState:{nyil:false},
                nextText: 32,      
            }, 
            {
                text:'Lelövöm a fejlesztett csuzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState:{fejlesztettcsuzli:false, csuzli:true},
                nextText: 32,      
            }, 
            {
                text:'Lelövöm a csuzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState:{csuzli:false},
                nextText: 32,      
            }, 
            {
                text:'Merlin nyilát használom',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 32,      
            }, 
            {
                text:'Merlin nyilát használom',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 32,      
            }, 
            {
                text:'Merida nyilát használom',
                requireState: (currentState) => currentState.nagymerida, 
                setState:{nagymerida:false, merida: true},
                nextText: 32,      
            },
            {
                text:'Merida nyilát használom',
                requireState: (currentState) => currentState.merida, 
                setState:{merida: false},
                nextText: 32,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonL, 
                setState:{kulonL: false, elhasznaltL : true},
                nextText: 32,      
            },
            //ninja
            {
                text:'Leszúrom a fejlesztett katanámmal',
                requireState: (currentState) => currentState.fejlesztettkatana, 
                setState:{fejlesztettkatana:false, katana:true},
                nextText: 32,      
            }, 
            {
                text:'Leszúrom a katanámmal',
                requireState: (currentState) => currentState.katana, 
                setState:{katana:false},
                nextText: 32,      
            }, 
            {
                text:'Lelövöm a fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.fejlesztettdcs, 
                setState:{fejlesztettdcs:false, dcs:true},
                nextText: 32,      
            }, 
            {
                text:'Lelövöm a dobó csillagjaimmal',
                requireState: (currentState) => currentState.dcs, 
                setState:{dcs:false},
                nextText: 32,      
            }, 
            {
                text:'Kay kardját használom',
                requireState: (currentState) => currentState.nagyszamurai, 
                setState:{nagyszamurai:false, szamurai:true},
                nextText: 32,      
            }, 
            {
                text:'Kay kardját használom',
                requireState: (currentState) => currentState.szamurai, 
                setState:{szamurai:false},
                nextText: 32,      
            }, 
            {
                text:'Szamurai Jack kardját használom',
                requireState: (currentState) => currentState.nagyjack, 
                setState:{nagyjack:false, jack: true},
                nextText: 32,      
            },
            {
                text:'Szamurai Jack kardját használom',
                requireState: (currentState) => currentState.jack, 
                setState:{jack: false},
                nextText: 32,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonN, 
                setState:{kulonN: false, elhasznaltN : true},
                nextText: 32,      
            },
            //harcos
            {
                text:'Leszúrom a fejlesztett kardommal',
                requireState: (currentState) => currentState.fejlesztettkard, 
                setState:{fejlesztettkard:false, kard:true},
                nextText: 32,      
            }, 
            {
                text:'Leszúrom a kardommal',
                requireState: (currentState) => currentState.kard, 
                setState:{kard:false},
                nextText: 32,      
            }, 
            {
                text:'Leütöm a fejlesztett pajzsommal',
                requireState: (currentState) => currentState.fejlesztettpajzs, 
                setState:{fejlesztettpajzs:false, pajzs:true},
                nextText: 32,      
            }, 
            {
                text:'Leütöm a pajzsommal',
                requireState: (currentState) => currentState.pajzs, 
                setState:{pajzs:false},
                nextText: 32,      
            }, 
            {
                text:'Az Excaliburt használom',
                requireState: (currentState) => currentState.nagyexcalibur, 
                setState:{nagyexcalibur:false, excalibur:true},
                nextText: 32,      
            }, 
            {
                text:'Az Excaliburt használom',
                requireState: (currentState) => currentState.excalibur, 
                setState:{excalibur:false},
                nextText: 32,      
            }, 
            {
                text:'Wonder Woman pajzsát használom',
                requireState: (currentState) => currentState.nagyww, 
                setState:{nagyww:false, ww: true},
                nextText: 32,      
            },
            {
                text:'Wonder Woman pajzsát használom',
                requireState: (currentState) => currentState.ww, 
                setState:{ww: false},
                nextText: 32,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonH, 
                setState:{kulonH: false, elhasznaltH : true},
                nextText: 32,      
            },
            //magus
            {
                text:'Elátkozom a fejlesztett varázs könyvemmel',
                requireState: (currentState) => currentState.fejlesztettvK, 
                setState:{fejlesztettvK:false, vK:true},
                nextText: 32,      
            }, 
            {
                text:'Elátkozom varázs könyvemmel',
                requireState: (currentState) => currentState.vK, 
                setState:{vK:false},
                nextText: 32,      
            }, 
            {
                text:'Elvarázsolom a fejlesztett pálcámmal',
                requireState: (currentState) => currentState.fejlesztettvP, 
                setState:{fejlesztettvP:false, vP:true},
                nextText: 32,      
            }, 
            {
                text:'Elvarázsolom pálcámmal',
                requireState: (currentState) => currentState.vP, 
                setState:{vP:false},
                nextText: 32,      
            }, 
            {
                text:'Merlin könyvét használom',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 32,      
            }, 
            {
                text:'Merlin könyvét használom',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 32,      
            }, 
            {
                text:'Wanda könyvét használom',
                requireState: (currentState) => currentState.nagywanda, 
                setState:{nagywanda:false, wanda: true},
                nextText: 32,      
            },
            {
                text:'Wanda könyvét használom',
                requireState: (currentState) => currentState.wanda, 
                setState:{wanda: false},
                nextText: 32,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonM, 
                setState:{kulonM: false, elhasznaltM : true},
                nextText: 32,      
            },
            {
                text:'Elvérzek ennek, itt a vége',
                nextText: 0,      
            },                   
        ]
    },
    {
        id: 32,
        text: '-Áh harcos, ne már majdnem nyertem, nem győzhetsz, még nem veszíthetek!',
        options:[
            //lövész
            {
                text:'Lelövöm a fejlesztett nyilammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState:{fejlesztettnyil:false, nyil:true},
                nextText: 38,      
            }, 
            {
                text:'Lelövöm a nyilammal',
                requireState: (currentState) => currentState.nyil, 
                setState:{nyil:false},
                nextText: 38,      
            }, 
            {
                text:'Lelövöm a fejlesztett csuzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState:{fejlesztettcsuzli:false, csuzli:true},
                nextText: 38,      
            }, 
            {
                text:'Lelövöm a csuzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState:{csuzli:false},
                nextText: 38,      
            }, 
            {
                text:'Merlin nyilát használom',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 38,      
            }, 
            {
                text:'Merlin nyilát használom',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 38,      
            }, 
            {
                text:'Merida nyilát használom',
                requireState: (currentState) => currentState.nagymerida, 
                setState:{nagymerida:false, merida: true},
                nextText: 38,      
            },
            {
                text:'Merida nyilát használom',
                requireState: (currentState) => currentState.merida, 
                setState:{merida: false},
                nextText: 38,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonL, 
                setState:{kulonL: false, elhasznaltL : true},
                nextText: 38,      
            },
            //ninja
            {
                text:'Leszúrom a fejlesztett katanámmal',
                requireState: (currentState) => currentState.fejlesztettkatana, 
                setState:{fejlesztettkatana:false, katana:true},
                nextText: 38,      
            }, 
            {
                text:'Leszúrom a katanámmal',
                requireState: (currentState) => currentState.katana, 
                setState:{katana:false},
                nextText: 38,      
            }, 
            {
                text:'Lelövöm a fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.fejlesztettdcs, 
                setState:{fejlesztettdcs:false, dcs:true},
                nextText: 38,      
            }, 
            {
                text:'Lelövöm a dobó csillagjaimmal',
                requireState: (currentState) => currentState.dcs, 
                setState:{dcs:false},
                nextText: 38,      
            }, 
            {
                text:'Kay kardját használom',
                requireState: (currentState) => currentState.nagyszamurai, 
                setState:{nagyszamurai:false, szamurai:true},
                nextText: 38,      
            }, 
            {
                text:'Kay kardját használom',
                requireState: (currentState) => currentState.szamurai, 
                setState:{szamurai:false},
                nextText: 38,      
            }, 
            {
                text:'Szamurai Jack kardját használom',
                requireState: (currentState) => currentState.nagyjack, 
                setState:{nagyjack:false, jack: true},
                nextText: 38,      
            },
            {
                text:'Szamurai Jack kardját használom',
                requireState: (currentState) => currentState.jack, 
                setState:{jack: false},
                nextText: 38,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonN, 
                setState:{kulonN: false, elhasznaltN : true},
                nextText: 38,      
            },
            //harcos
            {
                text:'Leszúrom a fejlesztett kardommal',
                requireState: (currentState) => currentState.fejlesztettkard, 
                setState:{fejlesztettkard:false, kard:true},
                nextText: 38,      
            }, 
            {
                text:'Leszúrom a kardommal',
                requireState: (currentState) => currentState.kard, 
                setState:{kard:false},
                nextText: 38,      
            }, 
            {
                text:'Leütöm a fejlesztett pajzsommal',
                requireState: (currentState) => currentState.fejlesztettpajzs, 
                setState:{fejlesztettpajzs:false, pajzs:true},
                nextText: 38,      
            }, 
            {
                text:'Leütöm a pajzsommal',
                requireState: (currentState) => currentState.pajzs, 
                setState:{pajzs:false},
                nextText: 38,      
            }, 
            {
                text:'Az Excaliburt használom',
                requireState: (currentState) => currentState.nagyexcalibur, 
                setState:{nagyexcalibur:false, excalibur:true},
                nextText: 38,      
            }, 
            {
                text:'Az Excaliburt használom',
                requireState: (currentState) => currentState.excalibur, 
                setState:{excalibur:false},
                nextText: 38,      
            }, 
            {
                text:'Wonder Woman pajzsát használom',
                requireState: (currentState) => currentState.nagyww, 
                setState:{nagyww:false, ww: true},
                nextText: 38,      
            },
            {
                text:'Wonder Woman pajzsát használom',
                requireState: (currentState) => currentState.ww, 
                setState:{ww: false},
                nextText: 38,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonH, 
                setState:{kulonH: false, elhasznaltH : true},
                nextText: 38,      
            },
            //magus
            {
                text:'Elátkozom a fejlesztett varázs könyvemmel',
                requireState: (currentState) => currentState.fejlesztettvK, 
                setState:{fejlesztettvK:false, vK:true},
                nextText: 38,      
            }, 
            {
                text:'Elátkozom varázs könyvemmel',
                requireState: (currentState) => currentState.vK, 
                setState:{vK:false},
                nextText: 38,      
            }, 
            {
                text:'Elvarázsolom a fejlesztett pálcámmal',
                requireState: (currentState) => currentState.fejlesztettvP, 
                setState:{fejlesztettvP:false, vP:true},
                nextText: 38,      
            }, 
            {
                text:'Elvarázsolom pálcámmal',
                requireState: (currentState) => currentState.vP, 
                setState:{vP:false},
                nextText: 38,      
            }, 
            {
                text:'Merlin könyvét használom',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 38,      
            }, 
            {
                text:'Merlin könyvét használom',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 38,      
            }, 
            {
                text:'Wanda könyvét használom',
                requireState: (currentState) => currentState.nagywanda, 
                setState:{nagywanda:false, wanda: true},
                nextText: 38,      
            },
            {
                text:'Wanda könyvét használom',
                requireState: (currentState) => currentState.wanda, 
                setState:{wanda: false},
                nextText: 38,      
            },
            {
                text:'Különleges képességemet használom',
                requireState: (currentState) => currentState.kulonM, 
                setState:{kulonM: false, elhasznaltM : true},
                nextText: 38,      
            },
            {
                text:'Elvérzek ennek, itt a vége',
                nextText: 0,      
            },                   
        ]
    },
    {
        id: 36,
        text: 'Üres, teljesen üres az utolsó barlang, előtted a cella, benne a nép, akikért jöttél, hát még is csak igaza volt a baristának.',
        options:[
            {
                text:'Kiszabadítom az elfogodt népet és kikésérem őket a barlangból',  
                nextText: 37,      
            },                              
        ]
    },
    {
        id: 38,
        text: 'Győztél, sikerült legyőznöd a szörnyek szörnyét, a szellemet. Gratulálunk nagyharcos!',
        options:[
            {
                text:'Kiszabadítom az elfogodt népet és kikésérem őket a barlangból',  
                nextText: 37,      
            },                              
        ]
    },
    {
        id: 37,
        text: 'Sikeresen teljesítetted a küldetésed nagyharcos, most menj, pihenj meg és keres mégtöbb kalandot!',
        options:[
            {
                text:'ÉN VAGYOK A NAGY LÖVÉSZ',
                requireState: (currentState) => currentState.lovesz, 
                nextText: -1,      
            },      
            {
                text:'ÉN VAGYOK A NAGY NINJA',  
                requireState: (currentState) => currentState.ninja,
                nextText: -1,      
            },           
            {
                text:'ÉN VAGYOK A NAGY HARCOS',  
                requireState: (currentState) => currentState.harcos,
                nextText: -1,      
            },       
            {
                text:'ÉN VAGYOK A NAGY MÁGUS',  
                requireState: (currentState) => currentState.magus,
                nextText: -1,      
            },         
        ]
    },
]


startGame()