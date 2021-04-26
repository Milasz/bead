const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


var state = {
    kaszt: "Lövész",
    elet:12,
    stamina : 10,
    
}

var lovesz = {
    kaszt: "Lövész",
    hp:12,
    stamina : 10,
    pajzs : 11,

}

function startGame(){
    //state = {
        // lovesz: true,
        // fejlesztettcsuzli:true,
    //}
    showTextNode(1)
//     document.getElementsByClassName('btn')[0].setAttribute('onclick',"window.location.href='/belepes'")
//     console.log(document.getElementsByClassName('btn')[0].onclick)
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
    if(nextTextNodeId == 100)
    {
        document.getElementsByClassName('btn')[0].setAttribute('onclick',"mentes()")
    }
    if(nextTextNodeId == 0 || nextTextNodeId == 37)
    {
        document.getElementsByClassName('btn')[0].setAttribute('onclick',"window.location.href='/menu'")
    }
    else {
        document.getElementsByClassName('btn')[0].setAttribute('onclick',"")
    }
}
const textNodes = [
    {
        id: 0,
        text: 'Game over', //kezd újra, ha akarod?',
        options:[
            {
                text: 'Kilépés a játékból', //-space                
                setState:{halott : true}
            },            
        ]
    },
    {
        id: 100,
        text: 'Megláttál egy fénylő kristályt, melybe emlékeidet mentheted el.', 
        options:[
            {
                text: 'Mentés', 
                nextText:9,                
            },            
        ]
    },
    {
        id: 101,
        text: 'Újabb fénylő kristályt találtál, melybe emlékeidet mentheted el.',
        options:[
            {
                text: 'Újrakezdem', 
                nextText:24,
                
            },            
        ]
    },
    {
        id: 102,
        text: 'Game over, szeretnéd újrakezdeni?', 
        options:[
            {
                text: 'Újrakezdem', 
                nextText:9,
                
            },            
        ]
    },
    {
        id: 1,
        text: 'Egyszer volt, hol nem volt, volt egyszer egy nagy város, melynek lakói békében éltek egymással, mígnem egy nap szörnyek rátámadtak a városra. A lakosság fejét vesztve menekülni próbált. Az egyik egyik felét megölték, a másik felét pedig elvitték magukkal a szörnyek, hogy később megegyék őket. Eltelt egy nap mire a hír a király fülébe jutott, és ő úgy határozott, hogy a legnagyobb hősét küldi el, hogy legyőzze ezeket a vérengző fenevadakat. Te vagy ez a hős! Itt az idő, hogy indulj és teljesítsd a feladatodat!',
        options:[
            {
                text:'Készen állok az előttem álló feladatra!',  
                nextText: 2  //Math.floor(Math.random() * 10) + 1     
            },
            {
                text:'Áh inkább, most menjen más',
                nextText: 0
            }
        ]
    },
    {
        id: 2,
        text: 'Válassz kaszt!',
        options:[
        {
            text: 'Ijjász',
            nextText:3
        },
        {
            text: 'Tolvaj',
            nextText:4
        },
        {
            text: 'Harcos',
            nextText:5

        },
        {
            text: 'Mágus',
            nextText:6
        },
        ]
    },
    {
        id: 3,
        text: 'A ijjászt választottad. \nAz eszközeidet csak egyszer használhatod fel:\nNyíl (Fejlesztheted/visszakérheted)\nCsúzli (Fejlesztheted/visszakérheted)\nKülönleges képesség: Nyílzápor (NEM fejleszthető/NEM visszakérhető).\nBiztos lövész akarsz lenni?',
        options:[
            {
                text:'Igen',
                setState: { lovesz : true, nyil : true, csuzli : true, kulonL : true },
                nextText: 7        
            },
            {
                text:'Nem',
                nextText: 2
            }
        ]
    },
    {
        id: 4,
        text: 'A tolvajt választottad. \nAz eszközeidet csak egyszer használhatod fel:\n Katana (Fejlesztheted/visszakérheted)\nDobócsillag (Fejlesztheted/visszakérheted)\nKülönleges képesség: Osonás (NEM fejleszthető/NEM visszakérhető).\nBiztos ninja akarsz lenni?',
        options:[
            {
                text:'Igen',
                setState: { ninja : true, katana : true, dcs : true, kulonN : true},
                nextText: 7        
            },
            {
                text:'Nem',
                nextText: 2
            }
        ]
    },
    {
        id: 5,
        text: 'A harcost választottad. \nAz eszközeidet csak egyszer használhatod fel:\nKard (Fejlesztheted/visszakérheted)\nPajzs (Fejlesztheted/visszakérheted)\nKülönleges képesség: Páncélzat (NEM fejleszthető/NEM visszakérhető).\nBiztos harcos akarsz lenni?',
        options:[
            {
                text:'Igen',
                setState : { harcos : true, kard : true, pajzs : true, kulonH : true},                
                nextText: 7        
            },
            {
                text:'Nem',
                nextText: 2
            }
        ]
    },
    {
        id: 6,
        text: 'A mágust választottad. \nAz eszközeidet csak egyszer használhatod fel:\nVarázskönyv (Fejlesztheted/visszakérheted)\nVarázspálca (Fejlesztheted/visszakérheted)\nKülönleges képesség: Idézés (NEM fejleszthető/NEM visszakérhető).\nBiztos mágus akarsz lenni?',
        options:[
            {
                text:'Igen',
                setState : { magus : true, vK : true, vP: true, kulonM : true},                
                nextText: 7        
            },
            {
                text:'Nem',
                nextText: 2
            }
        ]
    },
    {
        id: 7,
        text:'A barlang bejáratában egy apró goblin állt őrségben. Ahhoz, hogy le tudj jutni a barlangba, le kell győznöd. Harcolj, vagy fuss, mint egy gyáva nyúl!',
        options:[
            {
                text:'Íjjat használok', //ezeket semmiképp nem kérdőjellel kéne írni és talán első szám egyes személyben
                requireState: (currentState) => currentState.lovesz,
                setState :  {nyil : false,/* visszany: true*/},         
                nextText: 8,      
            },
            {
                text:'Csúzlit használok',
                requireState: (currentState) => currentState.lovesz,
                setState :  {csuzli : false},         
                nextText: 8,     
            },
            {   
                text:'A különleges képességet használom',
                requireState: (currentState) => currentState.lovesz,
                setState :  {kulonL : false},         
                nextText: 8,        
            },
            {
                text:'Katanát használok',
                requireState: (currentState) => currentState.ninja,
                setState :  {katana : false},         
                nextText: 8,      
            },
            {
                text:'Dobócsillagot használok',
                requireState: (currentState) => currentState.ninja,
                setState :  {dcs : false},         
                nextText: 8,     
            },
            {   
                text:'A különleges képességet használom',
                requireState: (currentState) => currentState.ninja,
                setState :  {kulonN : false},         
                nextText: 8,        
            },
            {
                text:'Kardot használok',
                requireState: (currentState) => currentState.harcos,
                setState :  {kard : false},         
                nextText: 8,      
            },
            {
                text:'Pajzsot használok',
                requireState: (currentState) => currentState.harcos,
                setState :  {pajzs : false},         
                nextText: 8,     
            },
            {   
                text:'A különleges képességet használom',
                requireState: (currentState) => currentState.harcos,
                setState :  {kulonH : false},         
                nextText: 8,        
            },
            {
                text:'Varázskönyvet használok',
                requireState: (currentState) => currentState.magus,
                setState :  {vK : false},         
                nextText: 8,      
            },
            {
                text:'Varázspálcát használok',
                requireState: (currentState) => currentState.magus,
                setState :  {vP : false},         
                nextText: 8,     
            },
            {   
                text:'A különleges képességet használom',
                requireState: (currentState) => currentState.magus,
                setState :  {kulonM : false},         
                nextText: 8,        
            },
            {
                text:'Engedjük el...',
                nextText: 0
            }
        ]
    },
    {
        id: 8,
        text: 'Az ellenfeledet legyőzted, aki hátrahagyott neked Xp-t.\nEzt most felhasználhatod, hogy visszaszerzed elhasznált fegyveredet, erősítheted egy másik fegyveredet, vagy később felhasználhatod egy kétszer használatos fegyver megszerzéséhez.\nHogy döntesz hát?',
        options:[
            {
                text:'Az íjat szeretném visszakapni.',
                requireState: (currentState) => !(currentState.nyil) && currentState.lovesz,
                setState: {nyil : true},
                nextText: 100,   
            },
            {
                text:'Az íjat szeretném fejleszteni.',
                requireState: (currentState) => currentState.nyil  && currentState.lovesz,
                setState: {fejlesztettnyil : true, nyil: false},
                nextText: 100,      
            },
            {
                text:'A csúzlit szeretném visszakapni.',
                requireState: (currentState) => !(currentState.csuzli)  && currentState.lovesz,
                setState :  {csuzli : true},         
                nextText: 100,     
            },
            {
                text:'A csúzlit szeretném fejleszteni.',
                requireState: (currentState) => currentState.csuzli  && currentState.lovesz,
                setState :  {fejlesztettcsuzli : true, csuzli : false},         
                nextText: 100,     
            },
            {
                text:'A katanát szeretném visszakapni.',
                requireState: (currentState) => !(currentState.katana)  && currentState.ninja,
                setState :  {katana : true},         
                nextText: 100,      
            },
            {
                text:'A katanát szeretném fejleszteni.',
                requireState: (currentState) => currentState.katana && currentState.ninja,
                setState :  {fejlesztettkatana : true, katana: false},         
                nextText: 100,      
            },
            {
                text:'A dobócsillagot szeretném visszakapni.',
                requireState: (currentState) =>!(currentState.dcs) && currentState.ninja,
                setState :  {dcs : true},         
                nextText: 100,     
            },
            {
                text:'A dobócsillagot szeretném fejleszteni.',
                requireState: (currentState) => currentState.dcs && currentState.ninja,
                setState :  {fejlesztettdcs : true,dcs : false},         
                nextText: 100,     
            },
            {
                text:'A kardot szeretném visszakapni.',
                requireState: (currentState) => !(currentState.kard) && currentState.harcos,
                setState :  {kard : true },         
                nextText: 100,      
            },
            {
                text:'A kardot szeretném fejleszteni.',
                requireState: (currentState) => currentState.kard && currentState.harcos,
                setState :  {fejlesztettkard : true, kard : false},         
                nextText: 100,      
            },
            {
                text:'A pajzsot szeretném visszakapni.',
                requireState: (currentState) => !(currentState.pajzs) && currentState.harcos,
                setState :  {pajzs : true},         
                nextText: 100,     
            },
            {
                text:'A pajzsot szeretném fejleszteni.',
                requireState: (currentState) => currentState.pajzs && currentState.harcos,
                setState :  {fejlesztettpajzs : true, pajzs: false},         
                nextText: 100,     
            },
            {
                text:'A varázskönyvet szeretném visszakapni.',
                requireState: (currentState) => !(currentState.vK) && currentState.magus,
                setState :  {vK : true},         
                nextText: 100,      
            },
            {
                text:'A varázskönyvet szeretném fejleszteni.',
                requireState: (currentState) => currentState.vK && currentState.magus,
                setState :  {fejlesztettvK : true, vK: false},         
                nextText: 100,      
            },
            {
                text:'A varázspálcát szeretném visszakapni.',
                requireState: (currentState) => !(currentState.vP) && currentState.magus,
                setState :  {vP : true},         
                nextText: 100,     
            },
            {
                text:'A varázspálcát szeretném fejleszteni.',
                requireState: (currentState) => currentState.vP && currentState.magus,
                setState :  {fejlesztettvP : true,vP : false},         
                nextText: 100,     
            },            
            {
                text:'Megtartom az Xp-t.',
                requireState: (currentState) => currentState.lovesz,
                setState :  {duplaLxp : true},  
                nextText: 100
            },
            {
                text:'Megtartom az Xp-t.',
                requireState: (currentState) => currentState.ninja,
                setState :  {duplaNxp : true},  
                nextText: 100
            },
            {
                text:'Megtartom az Xp-t.',
                requireState: (currentState) => currentState.harcos,
                setState :  {duplaHxp : true},  
                nextText: 100
            },
            {
                text:'Megtartom az Xp-t.',
                requireState: (currentState) => currentState.magus,
                setState :  {duplaMxp : true},  
                nextText: 100
            },
            
        ]
    },
       
    {
        id: 9,
        text: 'Tovább haladva utadon egy szellem botlottál a barlang mélyén.\n-Segíts kérlek nagy harcos! Én egy elátkozott ideláncolt lélek vagyok, ha segítesz nekem kiszabadulni én is megsegítelek utadon.\nHogy döntesz hát?',
        options:[
            {
                text:'Segítek rajta, hisz a plusz segítség sosem árt.',
                setState: { szellem: true},   
                nextText:10         
            },
            {
                text:'Nem szimpatikus nekem ez a szellem, így inkább egyedül megyek tovább.',
                nextText:10
            }
        ]
    },
    {
        id: 10,
        text: 'Utatad folytatva egy elágazáshoz értél.\nHárom utat látsz magad előtt:',
        options:[
            {
                text:'Balra egy sötét járatot látsz, melyben denevéreket találsz.',
                requireState: (currentState) => !(currentState.szellem),  
                nextText:11         
            },
            {
                text:'Középen egy kivilágított vájat látsz, ahonnan gyenge szellő süvít a falak közül.',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:12
            },
            {
                text:'Jobbra egy rejtélyes járatot látsz, ahol furcsa jeleket találsz a falon.',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:14        
            },
            {
                text:'Balra egy sötét járatot látsz, melyben denevéreket találsz.\nSzellem:\n-Hős! Veszélyes az út, de itt egy pihenő találsz, ahol megpihenhetsz.',
                requireState: (currentState) => currentState.szellem,  
                nextText:11         
            },
            {
                text:'Középen egy kivilágított vájat látsz, ahonnan gyenge szellő süvít a falak közül.\nSzellem:\n-Hős! Még véletlenül se ezt az utat válaszd, mert egy hatalmas szörny vár.',
                requireState: (currentState) => currentState.szellem,    
                nextText:12 
            },
            {
                text:'Jobbra egy rejtélyes járatot látsz, melyben furcsa jeleket találsz a falon.\nSzellem:\n-Hős! A falon a rejtvények megfejtései vannak, ne félj tőle.',
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
                text:'Maradok még\n(Ugyan ide fog betölteni téged):',
                nextText: 11
            }
        ]
    },
    {
        id: 12,
        text: 'A barlang mélyén, mely oly barátságosnak nézett ki egy szörnnyel találod magad szemben. Most itt az idő, hogy harcolj, különben meghalsz!',
        options:[
            {
                text:'Lelövöm az íjammal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.nyil,
                setState: { nyil: false},   
                nextText:13        
            },
            {
                text:'Lelövöm a fejlesztett íjammal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.fejlesztettnyil,
                setState: { fejlesztettnyil:false, nyil: true},   
                nextText:13       
            },
            {
                text:'Lelövöm a csúzlimmal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.csuzli,
                setState: { csuzli: false},   
                nextText:13        
            },
            {
                text:'Lelövöm a fejlesztett csúzlimmal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.fejlesztettcsuzli,
                setState: { fejlesztettcsuzli:false, csuzli: true},   
                nextText:13       
            },
            {
                text:'Használom a különleges képességemet.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.kulonL,
                setState: { kulonL: false},   
                nextText:13       
            },
            {
                text:'Leszúrom a katanámmal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.katana,
                setState: { katana: false},   
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
                text:'Megdobom a dobócsillagommal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.dcs,
                setState: { dcs: false},   
                nextText:13        
            },
            {
                text:'Megdobom a fejlesztett dobócsillagommal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.fejlesztettdcs,
                setState: { fejlesztettdcs:false, dcs: true},   
                nextText:13       
            },
            {
                text:'Használom a különleges képességemet',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.kulonN,
                setState: { kulonN: false},   
                nextText:13        
            },
            {
                text:'Leszúrom a kardommal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.kard,
                setState: { kard: false},   
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
                text:'Nekirontok a pajzsommal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.pajzs,
                setState: { pajzs: false},   
                nextText:13       
            },
            {
                text:'Nekirontok a fejlesztett pajzsommal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.fejlesztettpajzs,
                setState: { fejlesztettpajzs:false, pajzs: true},   
                nextText:13       
            },
            {
                text:'Használom a különleges képességemet',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.kulonH,
                setState: { kulonN: false},   
                nextText:13       
            },
            {
                text:'Elvarázsolom egy varázsigével a könyvből.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.vK,
                setState: { vK: false},   
                nextText:13        
            },
            {
                text:'Elvarázsolom egy varázsigével a fejlesztett könyvből.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.fejlesztettvK,
                setState: { fejlesztettvK:false, vK: true},   
                nextText:13       
            },
            {
                text:'A pálcámmal elvarázsolom.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.vP,
                setState: { vP: false},   
                nextText:13       
            },
            {
                text:'A fejlesztett pálcámmal elvarázsolom.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.fejlesztettvP,
                setState: { fejlesztettvP: false, vP: true},   
                nextText:13       
            },
            {
                text:'Használom a különleges képességemet',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.kulonM,
                setState: { kulonM: false},   
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
        text: 'Újabb Xp nyertél, hogy használod fel a javadra?',
        options:[
            {
                text:'Szeretném az íjamat visszakapni',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => !(currentState.nyil),
                setState: { nyil: true},   
                nextText:17     
            },
            {
                text:'Szeretném az íjamat fejleszteni',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.nyil,
                setState: { nyil: false, fejlesztettnyil: true},   
                nextText:17       
            },
            {
                text:'Szeretném a csúzlimat visszakapni',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => !(currentState.csuzli),
                setState: { csuzli: true},   
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
                text:'Szeretném dupla xp-met beváltani Robin Hood íját.', // dupla helyett 2?
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.duplaLxp,
                setState: { nagyhood: true, duplaLxp: false},   
                nextText:17       
            },
            {
                text:'Szeretném a katanámat visszakapni',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => !(currentState.katana),
                setState: { katana: true},   
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
                text:'Szeretném a dobócsillagomat visszakapni',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => !(currentState.dcs),
                setState: { dcs: true},   
                nextText:17       
            },
            {
                text:'Szeretném a dobócsillagomat fejleszteni',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.dcs,
                setState: { dcs: false, fejlesztettdcs: true},   
                nextText:17       
            },
            {
                text:'Szeretném dupla xp-met beváltani Nagy Kay szamurai kardjára',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.duplaNxp,
                setState: { nagyszamurai: true, duplaNxp: false},   
                nextText:17       
            },
            {
                text:'Szeretném a kardomat visszakapni',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => !(currentState.kard),
                setState: { kard: true},   
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
                requireState: (currentState) => !(currentState.pajzs),
                setState: { pajzs: true},   
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
                text:'Szeretném dupla xp-met beváltani az Excaliburra .',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.duplaHxp,
                setState: { nagyexcalibur: true, duplaHxp: false},   
                nextText:17       
            },
            {
                text:'Szeretném a könyvemet visszakapni',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => !(currentState.vK),
                setState: { vK: true},   
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
                requireState: (currentState) => !(currentState.vP),
                setState: { vP: true},   
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
                text:'Szeretném dupla xp-met beváltani a Merlin varázs könyvére.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.duplaMxp,
                setState: { nagymerlin: true, duplaMxp: false},   
                nextText:17       
            },
        ]
    },
    {
        id: 14,
        text: 'A falfirkák furcsák és egyben ijesztőek is, de mégis valami érdekesség van benne. A barlang mélyén egy rejtélyes ládát találtál, és gondolkodsz, hogyan nyithatnád ki.\nA rejtvény:\n 5^2 -3x -2 = 0',
        options:[
            {
                text:'a = 5, b = -3.\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText:15        
            },
            {
                text:'a = 6, b = -1.\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText:17 
            },
            {
                text:'a = -5, b = 3.\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:13
            },
            {
                text:'a = 5, b = -3.',
                requireState: (currentState) => !(currentState.szellem),  
                nextText:15        
            },
            {
                text:'a = 6, b = -1.',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:16 
            },
            {
                text:'a = -5, b = 3.',
                requireState: (currentState) => !(currentState.szellem),   
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
                text:'Visszaveszem az íjamat és marad 1 xp-m',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.nyil) && currentState.fejlesztettcsuzli, 
                setState: {nyil:true, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.nyil) && currentState.fejlesztettcsuzli, 
                setState:{nagyhood:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzem Robin Hood íját',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{nagyhood:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem az íjamat és a csúzlimat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{nyil:false, fejlesztettnyil:true, csuzli:false, fejlesztettcsuzli: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem az íjamat és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{nyil:false, fejlesztettnyil:true, duplaLxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a csúzlimat és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{csuzli:false, fejlesztettcsuzli: true, duplaLxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Megszerzem Robin Hood íját és marad 1-xp-m',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp && !(currentState.nyil), 
                setState:{nagyhood:true, duplaLxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját és fejlesztem a csúzlimat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{nagyhood:true, csuzli: false, fejlesztettcsuzli: true, duplaLxp:false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját és visszaveszem az íjamat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{nagyhood:true, nyil: true, duplaLxp:false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a csúzlimat, visszaveszem az íjamat és marad 1 xp-m.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{nyil: true, csuzli: false, fejlesztettcsuzli: true, duplaLxp: true},
                nextText:17       
            },  //pipa
            //Az első esik ki 3 esetet von maga után, majd 1. 2 esetet, a 2. 4 esetet és a 3. szintén 4 esetet.

            //B
            //a
            {
                text:'Visszaveszem a csúzlimat és marad 1 xp-m',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.csuzli) && currentState.fejlesztettnyil, 
                setState: {csuzli:true, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját',   // b esik fejlesztett a 
                requireState: (currentState) =>!(currentState.csuzli) && currentState.fejlesztettnyil, 
                setState:{nagyhood:true},
                nextText:17       
            },  //pipa 
            //b ugyan az mint az a eset
            //c        
            {
                text:'Megszerzem Robin Hood íját és marad 1 xp-m',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp && !(currentState.csuzli), 
                setState:{nagyhood:true, duplaLxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját és fejlesztem az íjamat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{nagyhood:true, nyil: true, duplaLxp:false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját és visszaveszem a csúzlimat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{nagyhood:true, csuzli: true, duplaLxp:false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem az íjamat, visszaveszem a csúzlimat és marad 1 xp-m.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{ csuzli: true, nyil: false, fejlesztettnyil: true, duplaLxp: true},
                nextText:17       
            },  //pipa
            // szinten 3 esetünk van mint az ha az első fegyvert veszítenénk el 

            //Ulty
            //a
            {
                text:'Fejlesztem a csúzlimat és marad 1 xp-m',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonL) && currentState.fejlesztettnyil, 
                setState: {fejlesztettcsuzli: true, csuzli:false, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonL) && currentState.fejlesztettnyil, 
                setState: {nagyhood: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejlesztem az íjamat és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonL) && currentState.fejlesztettcsuzli, 
                setState:{nyil:false, fejlesztettnyil:true, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonL) && currentState.fejlesztettcsuzli, 
                setState:{nagyhood: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejlesztem a csúzlimat és az íjamat és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonL) && currentState.duplaLxp, 
                setState:{csuzli:false, fejlesztettcsuzli: true, duplaLxp:true, nyil:false, fejlesztettnyil:true,},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját és marad 1 xp-m',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonL) && currentState.duplaLxp,
                setState:{nagyhood:true, duplaLxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját és fejlesztem a csúzlimat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonL) && currentState.duplaLxp,
                setState:{nagyhood:true, csuzli: false, fejlesztettcsuzli: true, duplaLxp:false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Robin Hood íját és fejlesztem a íjamat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonL) && currentState.duplaLxp,
                setState:{nagyhood:true, nyil: false, fejlesztettnyil: true, duplaLxp:false },
                nextText:17       
            },  //pipa
            

            //Ninja
            //A
            //a
            {
                text:'Visszaveszem a katanámat és marad 1 xp-m',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.katana) && currentState.fejlesztettdcs,  
                setState: {katana:true, duplaNxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.katana) && currentState.fejlesztettdcs, 
                setState:{nagyszamurai:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzem Nagy Kay szamurai kardját',   // a esik visszavesz a 
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
                text:'Fejlesztem a katanát és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{katana:false, fejlesztettkatana:true, duplaNxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a dobócsillagomat és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{dcs:false, fejlesztettdcs: true, duplaNxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Megszerzem Nagy Kay szamurai kardját és marad 1 xp-m',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp && !(currentState.katana), 
                setState:{nagyszamurai:true, duplaNxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját és fejlesztem a dobócsillagomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{nagyszamurai:true, dcs: false, fejlesztettdcs: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját és visszaveszem a katanámat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{nagyszamurai:true,katana: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a dobócsillagomat, visszaveszem a katanámat és marad 1 xp-m.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{katana: true, dcs: false, fejlesztettdcs: true, duplaNxp: true},
                nextText:17       
            },  //pipa


            //B
            //a
            {
                text:'Visszaveszem a dobócsillagomat és marad 1 xp-m',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.dcs) && currentState.fejlesztettkatana, 
                setState: {dcs:true, duplaNxp: true},
                nextText:17       
            },  
            {
                text:'Megszerzem Nagy Kay szamurai kardját',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.dcs) && currentState.fejlesztettkatana, 
                setState:{nagyszamurai:true},
                nextText:17       
            },
            //b ugyan az mint A eset b
            //c             
            {
                text:'Megszerzem Nagy Kay szamurai kardját és marad 1 xp-m',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp && !(currentState.dcs), 
                setState:{nagyszamurai:true, duplaNxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját és fejlesztem a katanámat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true,  fejlesztettkatana: true, katana: false, duplaNxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját és visszaveszem a dobócsillagomat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true, dcs: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a katanámat, visszaveszem a dobócsillagomat és marad 1 xp-m.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true, dcs: true, katana: false, fejlesztettkatana: true, duplaNxp: true},
                nextText:17       
            },  //pipa

            //Ulty
            //a
            {
                text:'Fejlesztem a dobócsillagomat és marad 1 xp-m',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonN) && currentState.fejlesztettkatana, 
                setState: {fejlesztettdcs: true, dcs:false, duplaNxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját',   // a esik fejlesztett b 
                requireState: (currentState) =>!(currentState.kulonN) && currentState.fejlesztettkatana, 
                setState: {nagyszamurai: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejlesztem a katanát és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonN) && currentState.fejlesztettdcs, 
                setState:{katana:false, fejlesztettkatana:true, duplaNxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonN) && currentState.fejlesztettdcs, 
                setState:{nagyszamurai: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejlesztem a dobócsillagomat és a katanámat, marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonN) && currentState.duplaNxp, 
                setState:{dcs:false, fejlesztettdcs: true, duplaNxp:true, katana:false, fejlesztettkatana:true,},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját és marad 1 xp-m',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonN) && currentState.duplaNxp,
                setState:{nagyszamurai:true, duplaNxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját és fejlesztem a dobócsillagomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonN) && currentState.duplaNxp,
                setState:{nagyszamurai:true, dcs: false, fejlesztettdcs: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Nagy Kay szamurai kardját és fejlesztem a katanámat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonN) && currentState.duplaNxp,
                setState:{nagyszamurai:true, katana: false, fejlesztettkatana: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            

            //Harcos
            //A
            //a
            {
                text:'Visszaveszem a kardomat és marad 1 xp-m',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kard) && currentState.fejlesztettpajzs,  
                setState: {kard:true, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kard) && currentState.fejlesztettpajzs, 
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
                text:'Fejlesztem a kardomat és a pajzsomat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{kard:false, fejlesztettkard:true, pajzs:false, fejlesztettpajzs: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a kardomat és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{kard:false, fejlesztettkard:true, duplaHxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a pajzsomat és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{pajzs:false, fejlesztettpajzs: true, duplaHxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Megszerzem az Excaliburt és marad 1 xp-m',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp && !(currentState.kard), 
                setState:{nagyexcalibur:true, duplaHxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt és fejlesztem a pajzsomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{nagyexcalibur:true, pajzs: false, fejlesztettpajzs: true ,duplaHxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt és visszaveszem a kardomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{nagyexcalibur:true, kard: true, duplaHxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a pajzsomat, visszaveszem a kardomat és marad 1 xp-m.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{kard: true, pajzs: false, fejlesztettpajzs: true, duplaHxp: true},
                nextText:17       
            },  //pipa


            //B
            //a
            {
                text:'Visszaveszem a pajzsomat és marad 1 xp-m',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.pajzs) && currentState.fejlesztettkard, 
                setState: {pajzs:true, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.pajzs) && currentState.fejlesztettkard, 
                setState:{nagyexcalibur:true},
                nextText:17       
            },  //pipa
            //b uagyan az mint az A bje
            //c
            {
                text:'Megszerzem az Excaliburt és marad 1 xp-m',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp && !(currentState.pajzs), 
                setState:{nagyexcalibur:true, duplaHxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt és fejlesztem a kardomat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur:true, kard: false, fejlesztettkard: true, duplaHxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt és visszaveszem a pajzsomat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur:true, pajzs: true,duplaHxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a kardomat, visszaveszem a pajzsomat és marad 1 xp-m.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur: true, pajzs: true, kard: false, fejlesztettkard: true, duplaHxp: true},
                nextText:17       
            },  //pipa

            //Ulty
            //a
            {
                text:'Fejlesztem a pajzsomat és marad 1 xp-m',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonH) && currentState.fejlesztettkard, 
                setState: {fejlesztettpajzs: true, pajzs:false, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonH) && currentState.fejlesztettkard, 
                setState: {nagyexcalibur: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejlesztem a kardomat és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonH) && currentState.fejlesztettpajzs, 
                setState:{kard:false, fejlesztettkard:true, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonH) && currentState.fejlesztettpajzs, 
                setState:{kard:false, fejlesztettkard:true, duplaHxp: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejlesztem a pajzsomat és a kardomat, marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonH) && currentState.duplaHxp, 
                setState:{pajzs:false, fejlesztettpajzs: true, duplaHxp:true, kard:false, fejlesztettkard:true,},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt és marad 1 xp-m',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonH) && currentState.duplaHxp,
                setState:{nagyexcalibur:true, duplaHxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt és fejlesztem a pajzsomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonH) && currentState.duplaHxp,
                setState:{nagyexcalibur:true, pajzs: false, fejlesztettpajzs: true, duplaHxp: false  },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem az Excaliburt és fejlesztem a kardomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonH) && currentState.duplaHxp,
                setState:{nagyexcalibur:true, kard: false, fejlesztettkard: true, duplaHxp: false  },
                nextText:17       
            },  //pipa
            
            //Mágus
            //A
            //a
            {
                text:'Visszaveszem a könyvemet és marad 1 xp-m',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.vK) && currentState.fejlesztettvP,  
                setState: { vK:true, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.vK) && currentState.fejlesztettvP, 
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
                text:'Fejlesztem a könyvemet és a pálcálomat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{vK:false, fejlesztettvK:true, vP:false, fejlesztettvP: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a könyvemet és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{vK:false, fejlesztettvK:true, duplaMxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a pálcálomat és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{vP:false, fejlesztettvP: true, duplaMxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Megszerzem Merlin könyvét és marad 1 xp-m',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp && !(currentState.vK), 
                setState:{nagymerlin:true, duplaMxp:true , duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét és fejlesztem a pálcámat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{nagymerlin:true, vP: false, fejlesztettvP: true , duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét és visszaveszem a könyvemet.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{nagymerlin:true, vK: true, duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a pálcámat, visszaveszem a könyvemet és marad 1 xp-m.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{vK: true, vP: false, fejlesztettvP: true, duplaMxp: true},
                nextText:17       
            },  //pipa


            //B
            //a
            {
                text:'Visszaveszem a pálcámat és marad 1 xp-m',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.vP) && currentState.fejlesztettvK, 
                setState: { vP:true, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.vP) && currentState.fejlesztettvK, 
                setState:{nagymerlin:true},
                nextText:17       
            },  //pipa
            //b uagyan az mint az A bje
            //c
            {
                text:'Megszerzem Merlin könyvét és marad 1 xp-m',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp && !(currentState.vP), 
                setState:{nagymerlin:true, duplaMxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét és fejlesztem a könyvemet.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin:true, vK: false, fejlesztettvK: true, duplaMxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét és visszaveszem a pálcámat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin:true, vP: true, duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejlesztem a könyvemet, visszaveszem a pálcámat és marad 1 xp-m.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin: true, vP: true, vK: false, fejlesztettvK: true, duplaMxp: true},
                nextText:17       
            },  //pipa

            //Ulty
            //a
            {
                text:'Fejlesztem a pálcámat és marad 1 xp-m',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonM) && currentState.fejlesztettvK, 
                setState: {fejlesztettvP: true, vP:false, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonM) && currentState.fejlesztettvK, 
                setState: {nagymerlin: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejlesztem a könyvemet és marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonM) && currentState.fejlesztettvP, 
                setState:{vK:false, fejlesztettvK:true, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonM) && currentState.fejlesztettvP, 
                setState:{vK:false, fejlesztettvK:true, duplaMxp: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejlesztem a pálcámat és a könyvemet, marad 1 xp-m',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonM) && currentState.duplaMxp, 
                setState:{vP:false, fejlesztettvP: true, duplaMxp:true, vK:false, fejlesztettvK:true,},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét és marad 1 xp-m',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonM) && currentState.duplaMxp,
                setState:{nagymerlin:true, duplaMxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét és fejlesztem a pajzsomat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonM) && currentState.duplaMxp,
                setState:{nagymerlin:true, vP: false, fejlesztettvP: true, duplaMxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzem Merlin könyvét és fejlesztem a könyvemet.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonM) && currentState.duplaMxp,
                setState:{nagymerlin:true, vK: false, fejlesztettvK: true, duplaMxp: false },
                nextText:17       
            },  //pipa
        ]
    },
    
    
    {
        id: 16,
        text: 'Sajnos nem sikerült megoldanod a rejtvényt, de sebaj, majd legközelebb.',
        options:[
            {
                text:'Megyek tovább a barlangban',   
                nextText:17       
            },            
        ]
    },
    {
        id: 17,
        text: 'Ügyesen teljesítetted az előtted álló nehézségeket.\nDe védd magad, az előtted álló barlangból szönyek hangját hallhatod. Készülj hát, mert nagy csata vár rád!',
        options:[
            {
                text:'Harcra fel!', 
                requireState: (currentState) => currentState.lovesz, 
                nextText:40        
            },  
            {
                text:'Harcra fel!', 
                requireState: (currentState) => currentState.ninja, 
                nextText:44        
            },  
            {
                text:'Harcra fel!',  
                requireState: (currentState) => currentState.harcos,
                nextText:48
            },
            {
                text:'Harcra fel!', 
                requireState: (currentState) => currentState.magus, 
                nextText:52        
            },
            {
                text:'-Hé, Nagy hős! Ott egy fénylő érme a földön, mintha egy titkos ajtó lenne ott',
                requireState: (currentState) => currentState.szellem && currentState.szerencs,                   
                nextText:22       
            },  
            {
                text:'Ennyi elég volt, nem bírom tovább!',  //alázóbb legyen
                nextText:0        
            },      
        ]
    },  
    {
        id: 40,
        text: 'Első ellenséged egy nyilas goblin.\nHogy döntesz, hogyan győzöd le?',
        options:[
            //lövész
            {
                text:'Robin Hood íjával.',
                requireState: (currentState) => currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText: 41      
            },  
            {
                text:'Robin Hood íjával.',
                requireState: (currentState) => currentState.hood, 
                setState: {hood: false},  
                nextText: 41      
            },  
            {
                text:'A fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 41      
            }, 
            {
                text:'A fejlesztett íjammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 41      
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false},  
                nextText: 41        
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false},  
                nextText: 41
            }, 
            {
                text:'Az íjammal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false},  
                nextText: 41
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  //inadba szállt a bátorságod
                nextText:0        
            },
	    ]
    },  
    {
        id: 41,
        text: 'Második ellenséged egy nyílpuskás csontváz.\nHogy döntesz, hogyan győzöd le?',
        options:[
            //lövész
            {
                text:'Robin Hood íjával.',
                requireState: (currentState) => currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText: 42
            }, 
            {
                text:'Robin Hood íjával.',
                requireState: (currentState) => currentState.hood, 
                setState: {hood: false},  
                nextText: 42
            },  
            {
                text:'A fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 42
            }, 
            {
                text:'A fejlesztett íjammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 42
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false},  
                nextText: 42
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false,},  
                nextText: 42
            }, 
            {
                text:'Az íjammal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false},  
                nextText: 42
            },
            {
                text:'Ennyi elég volt, nem bírom tovább!',  //inadba szállt a bátorságod
                nextText:0        
            }, 
	    ]
    },  
    {
        id: 42,
        text: 'Harmadik ellenséged egy fegyvertelen goblin\nHogy döntesz, hogyan győzöd le?',
        options:[
            //lövész
            {
                text:'Robin Hood íjával.',
                requireState: (currentState) => currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText: 43
            },  
            {
                text:'Robin Hood íjával.',
                requireState: (currentState) => currentState.hood, 
                setState: {hood: false},  
                nextText: 43
            },  
            {
                text:'A fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 43
            }, 
            {
                text:'A fejlesztett íjammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 43
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false},  
                nextText: 43
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false},  
                nextText: 43
            }, 
            {
                text:'Az íjammal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false},  
                nextText: 43
            }, 
	        {
                text:'Mivel fegyvertelen, ezért leütöm fegyverek nélkül',
                requireState: (currentState) => currentState.lovesz, 
                nextText: 43
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },
	    ]
    }, 
{
        id: 43,
        text: 'Negyedik, egyben utólsó ellenefeled egy vadászíjjas csontváz\nHogy döntesz, hogyan győzöd le?',
        options:[
            //lövész
            {
                text:'Robin Hood íjával.',
                requireState: (currentState) => currentState.nagyhood, 
                setState: {nagyhood: false, hood: true},  
                nextText: 24
            },  
            {
                text:'Robin Hood íjával.',
                requireState: (currentState) => currentState.hood, 
                setState: {hood: false},  
                nextText: 24
            },  
            {
                text:'A fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett íjammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 24
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false},  
                nextText: 24
            },
            {
                text:'A csúzlimmal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false},  
                nextText: 24
            }, 
            {
                text:'Az íjammal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false},  
                nextText: 24
            }, 
	        {
                text:'Fáradj vagyok, de mintha ott lenne egy titkos ajtó',
                requireState: (currentState) => currentState.lovesz && currentState.szerencse, 
                nextText: 24
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
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
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.szamurai, 
                setState: {szamurai: false},  
                nextText: 45
            },  
            {
                text:'A fejlesztett dobócsillagommal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, dcs: true},  
                nextText: 45
            }, 
            {
                text:'A fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 45
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false},  
                nextText: 45
            },
            {
                text:'A dobócsillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false},  
                nextText: 45
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false},  
                nextText: 45
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },
	    ]
    },  
{
        id: 45,
        text: 'Második ellenséged egy dobócsillagokkal felfegyverkezett zombi\nHogy döntesz, hogyan győzöd le?',
        options:[
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText: 46
            },  
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.szamurai, 
                setState: {szamurai: false},  
                nextText: 46
            },  
            {
                text:'A fejlesztett dobócsillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText: 46
            }, 
            {
                text:'A fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 46
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false},  
                nextText: 46
            },
            {
                text:'A dobócsillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false,},  
                nextText: 46
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false},  
                nextText: 46
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },
	    ]
    }, 
    {
        id: 46,
        text: 'Utólsó előtti ellenséged egy fegyvertelen slime\nHogy döntesz, hogyan győzöd le?',
        options:[
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText: 47
            },  
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.szamurai, 
                setState: {szamurai: false},  
                nextText: 47
            },  
            {
                text:'A fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText: 47
            }, 
            {
                text:'A fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 47
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false},  
                nextText: 47
            },
            {
                text:'A dobócsillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false},  
                nextText: 47
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false},  
                nextText: 47
            }, 
	        {
                text:'Mivel fegyvertelen, leütöm és nem használok el fegyvert rá',
                nextText: 47
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },
	    ]
    },
    {
        id: 47,
        text: 'Utólsó ellenséged egy halott szamurai harcos bőrébe bújt szellem\nHogy döntesz, hogyan győzöd le?',
        options:[
            //ninja
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.nagyszamurai, 
                setState: {nagyszamurai: false, szamurai: true},  
                nextText: 24
            },  
            {
                text:'Nagy Kay szamurai kardjával.',
                requireState: (currentState) => currentState.ninja && currentState.szamurai, 
                setState: {szamurai: false},  
                nextText: 24
            },  
            {
                text:'A fejlesztett dobó csillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 24
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false},  
                nextText: 24
            },
            {
                text:'A dobócsillagjaimmal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false},  
                nextText: 24
            }, 
            {
                text:'A katanámmal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false},  
                nextText: 24
            }, 
	        {
                text:'Elfáradtam és mintha halucinálnék, de úgy látom, hogy ott egy titkos ajtó',
		        requireState: (currentState) => currentState.szerencse,
                nextText: 24
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },
	    ]
    },  
    {
        id: 48,
        text: 'Első ellenséged egy karddal felfegyverkezett goblin\nHogy döntesz, hogy győzöd le?',
        options:[
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText: 49
            }, 
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.excalibur, 
                setState: {excalibur: false},  
                nextText: 49
            },  
            {
                text:'A fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 49
            }, 
            {
                text:'A fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 49
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false},  
                nextText: 49
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false,},  
                nextText: 49
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false},  
                nextText: 49
            },
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },
	    ]
    },  
    {
        id: 49,
        text: 'Második ellenséged egy pajzsos zombi.\nHogy döntesz, hogyan győzöd le?',
        options:[
            //harcos
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.nagyexcalibur, 
                setState: {nagyexcalibur: false, excalibur: true},  
                nextText: 50
            },  
            {
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.excalibur, 
                setState: {excalibur: false},  
                nextText: 50
            }, 
            {
                text:'A fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 50
            }, 
            {
                text:'A fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 50
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false},  
                nextText: 50
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false,},  
                nextText: 50
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false},  
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
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.excalibur, 
                setState: {excalibur: false},  
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
                setState: {kulonH: false},  
                nextText: 51
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false},  
                nextText: 51
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false},  
                nextText: 51
            },
	        {
                text:'Mivel fegyvertelenül is le tudom ütni, így nem használok fel fegyvert',
                nextText: 51
            },
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
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
                text:'Az Excaliburral',
                requireState: (currentState) => currentState.harcos && currentState.excalibur, 
                setState: {excalibur: false},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett kardommal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 24
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false},  
                nextText: 24
            },
            {
                text:'A pajzsommal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false},  
                nextText: 24
            }, 
            {
                text:'A kardommal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false},  
                nextText: 24
            },
	        {
                text:'Elfáradtam, de olyan mint ha ott lenne egy titkos ajtó',
		        requireState: (currentState) => currentState.szerencse,
                nextText: 24
            },
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },
	    ]
    }, 
    {
        id: 52,
        text: 'Első ellenséged egy boszorkány\nHogy döntesz, hogyan győzöd le?',
        options:[
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText: 53
            }, 
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.merlin, 
                setState: {merlin: false},  
                nextText: 53
            }, 
            {
                text:'A fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 53
            }, 
            {
                text:'A fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 53
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false},  
                nextText: 53
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false},  
                nextText: 53
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false},  
                nextText: 53
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },   
	    ]
    },
    {
        id: 53,
        text: 'Második ellenséged egy gonosz varázsló\nHogy döntesz, hogyan győzöd le?',
        options:[
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText: 54
            },  
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.merlin, 
                setState: {merlin: false},  
                nextText: 54
            }, 
            {
                text:'A fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 54
            }, 
            {
                text:'A fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 54
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false,},  
                nextText: 54
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false},  
                nextText: 54
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false},  
                nextText: 54
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },   
	    ]
    },
    {
        id: 54,
        text: 'Harmadik ellenfeled egy fegyvertelen idézett lény\nHogy döntesz, hogyan győzöd le?',
        options:[
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText: 55
            },  
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.merlin, 
                setState: {merlin: false},  
                nextText: 55
            }, 
            {
                text:'A fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 55
            }, 
            {
                text:'A fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 55
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false},  
                nextText: 55
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false},  
                nextText: 55
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false},  
                nextText: 55
            }, 
	        {
                text:'Mivel fegyvertelen, így inkább fejbe csapom a könyvemmel és nem használom el',
                nextText: 55
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },   
	    ]
    },
    {
        id: 55,
        text: 'Utolsó ellenfeled egy elf boszorkány\nHogy döntesz, hogyan győzöd le?', // ez ugyan az 2x, nem?
        options:[
            //mágus
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.nagymerlin, 
                setState: {nagymerlin: false, merlin: true},  
                nextText: 24
            },  
            {
                text:'Merlin könyvével',
                requireState: (currentState) => currentState.magus && currentState.merlin, 
                setState: {merlin: false},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 24
            },
            {
                text:'A különleges képességemmel',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false},  
                nextText: 24
            },
            {
                text:'A pálcámmal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false},  
                nextText: 24
            }, 
            {
                text:'A könyvemmel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false},  
                nextText: 24
            }, 
	        {
                text:'Elfáradtam, de mintha ott lenne egy titkos ajtó',
		        requireState: (currentState) => currentState.szerencse,
                nextText: 24
            }, 
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },   
	    ]
    },
    {
        id: 24, 
        text: 'Sikeresen helyt álltál a harcban, így most visszakaphatod az egyik fegyveredet.\n Ezután pedig döntened kell, hogy merre mész tovább:\nBalra, ahol megpihenhetsz \nJobbra, ahol tudásodat mutathatod be.',
        options:[
            //lövész
            {
                text:'A nyilamat kérem és balra megyek',  
                requireState: (currentState) => !(currentState.nyil) && currentState.lovesz,
                setState: {nyil:true},
                nextText:25
            }, 
            {
                text:'A nyilamat kérem és jobbra megyek',  
                requireState: (currentState) => !(currentState.nyil) && currentState.lovesz,
                setState: {nyil:true},
                nextText:26
            }, 
            {
                text:'A csúzlimat kérem és balra megyek',  
                requireState: (currentState) => !(currentState.csuzli) && currentState.lovesz,
                setState: {csuzli:true},
                nextText:25
            }, 
            {
                text:'A csúzlimat kérem és jobbra megyek',  
                requireState: (currentState) => !(currentState.csuzli) && currentState.lovesz,
                setState: {csuzli:true},
                nextText:26
            }, 
            {
                text:'Megvan mindenem, ami nekem kell és balra megyek',  
                requireState: (currentState) => currentState.csuzli && currentState.lovesz && currentState.nyil,
                nextText:25
            }, 
            {
                text:'Megvan mindenem, ami nekem kell és jobbra megyek',  
                requireState: (currentState) => currentState.csuzli && currentState.lovesz && currentState.nyil,
                nextText:26
            }, 
            //ninja
            {
                text:'A katanámat kérem és balra megyek',  
                requireState: (currentState) => !(currentState.katana) && currentState.ninja,
                setState: {katana:true},
                nextText:25
            }, 
            {
                text:'A katanámat kérem és jobbra megyek',  
                requireState: (currentState) => !(currentState.katana) && currentState.ninja,
                setState: {katana:true},
                nextText:26
            }, 
            {
                text:'A dobócsillagjaimat kérem és balra megyek',  
                requireState: (currentState) => !(currentState.dcs) && currentState.ninja,
                setState: {dcs:true},
                nextText:25
            }, 
            {
                text:'A dobócsillagjaimat kérem és jobbra megyek',  
                requireState: (currentState) => !(currentState.dcs) && currentState.ninja,
                setState: {dcs:true},
                nextText:26
            }, 
            {
                text:'Megvan mindenem, ami nekem kell és balra megyek',  
                requireState: (currentState) => currentState.dcs && currentState.ninja && currentState.katana,
                nextText:25
            }, 
            {
                text:'Megvan mindenem, ami nekem kell és jobbra megyek',  
                requireState: (currentState) => currentState.dcs && currentState.ninja && currentState.katana,
                nextText:26
            }, 
            //harcos
            {
                text:'A kardomat kérem és balra megyek',  
                requireState: (currentState) => !(currentState.kard) && currentState.harcos,
                setState: {kard:true},
                nextText:25
            }, 
            {
                text:'A kardomat kérem és jobbra megyek',  
                requireState: (currentState) => !(currentState.kard) && currentState.harcos,
                setState: {kard:true},
                nextText:26
            }, 
            {
                text:'A pajzsomat kérem és balra megyek',  
                requireState: (currentState) => !(currentState.pajzs) && currentState.harcos,
                setState: {pajzs:true, },
                nextText:25
            }, 
            {
                text:'A pajzsomat kérem és jobbra megyek',  
                requireState: (currentState) =>!(currentState.pajzs) && currentState.harcos,
                setState: {pajzs:true, },
                nextText:26
            }, 
            {
                text:'Megvan mindenem, ami nekem kell és balra megyek',  
                requireState: (currentState) => currentState.pajzs && currentState.harcos && currentState.kard,
                nextText:25
            }, 
            {
                text:'Megvan mindenem, ami nekem kell és jobbra megyek',  
                requireState: (currentState) => currentState.pajzs && currentState.harcos && currentState.kard,
                nextText:26
            }, 

            //magus
            {
                text:'A könyvemet kérem és balra megyek',  
                requireState: (currentState) => !(currentState.vK) && currentState.magus,
                setState: {vK:true},
                nextText:25
            }, 
            {
                text:'A könyvemet kérem és jobbra megyek',  
                requireState: (currentState) => !(currentState.vK) && currentState.magus,
                setState: {vK:true},
                nextText:26
            }, 
            {
                text:'A pálcámat kérem és balra megyek',  
                requireState: (currentState) => !(currentState.vK) && currentState.magus,
                setState: {vP:true},
                nextText:25
            }, 
            {
                text:'A pálcámat kérem és jobbra megyek',  
                requireState: (currentState) => !(currentState.vP) && currentState.magus,
                setState: {vP:true},
                nextText:26
            }, 
            {
                text:'Megvan mindenem, ami nekem kell és balra megyek',  
                requireState: (currentState) => currentState.vP && currentState.magus && currentState.vK,
                nextText:25
            }, 
            {
                text:'Megvan mindenem, ami nekem kell és jobbra megyek',  
                requireState: (currentState) => currentState.vP && currentState.magus && currentState.vK,
                nextText:26
            },              
            {
                text:'Ennyi elég volt, nem bírom tovább!',  
                nextText:0        
            },      
        ]
    },  
    {
        id: 25,
        text: 'Megpihenve a barlangok jól elrejtett mélyében egy kocsmában pihenhetsz meg.\nA kocsmáros oda szól hozzád:\n-Nagy harcos! Egy xp-ért cserébe segítek neked!\nNem túl távol egy kalandor közbe szól:\n-Ne higgy neki, inkább gyere velünk inni és kapsz egy fegyvert is!\nHogy döntesz?',
        options:[
            {
                text:'A kocsmárosnak hiszek',  
                requireState: (currentState) => currentState.duplaLxp && currentState.szellem,
                nextText:27        
            }, 
            
            {
                text:'A kocsmárosnak hiszek',
                requireState: (currentState) => currentState.duplaNxp && currentState.szellem ,  
                nextText:27        
            }, 
            {
                text:'A kocsmárosnak hiszek', 
                requireState: (currentState) => currentState.duplaHxp && currentState.szellem, 
                nextText:27        
            }, 
            {
                text:'A kocsmárosnak hiszek',  
                requireState: (currentState) => currentState.duplaMxp && currentState.szellem,
                nextText:27        
            }, 
            {
                text:'A kocsmáros azt akarja mondani, hogy a boss a szellem lesz, válaszd a kalandort :D',  
                requireState: (currentState) => !(currentState.szellem),  
                nextText:28        
            }, 
            {
                text:'Csatlakozom a kaladorokhoz',                
                nextText:28       
            },  
            {
                text:'Gondolkozom (ugyan ezen az oldalon leszel)',  
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
        text: 'A barlangban egy feladvány volt a falon, ha hangosan kimondod a megoldást, akkor megnyílik előtted az út.\nA feladvány:\nVan egy fólyó, melyen egy hajóval tudsz átkelni. A feladatod a káposzta, a kecske és a farkas átjuttatása úgy, hogy a folyón a hajóba csak egy valakit vihetsz magaddal, de a kecske megeszi a káposztát, a kecskét pedig megeszi a farkas, így ők nem maradhatnak együtt.\nA kérdés: Ki száll be másodjára a csónakba?',
        options:[
            {
                text:'Káposzta.\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText: 35    
            },
            {
                text:'Kecske.\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText: 33
            },
            {
                text:'Farkas.\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:34
            },
            {
                text:'Káposzta.',
                requireState: (currentState) => !(currentState.szellem),  
                nextText: 35    
            },
            {
                text:'Kecske.',
                requireState: (currentState) => !(currentState.szellem),   
                nextText: 33
            },
            {
                text:'Farkas.',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:34
            },                  
        ]
    },  
    {
        id: 22,
        text: 'A megérzésed nem volt rossz, egy kis kaput találtál, ami segített neked kikerülni a nagy harcot. Most dönthetsz, hogy megdolgoztatod az agyadat a végső harc előtt vagy sem?',
        options:[
            {
                text:'Próbáljunk szerencsét, eddig bejött',  
                nextText: 26,      
            }, 
            {
                text:'Harcolni jöttem, harcolni is fogok',                                
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
                text:'Robin Hood íja (2x használható fegyever)',  
                requireState: (currentState) => !(currentState.hood) && !(currentState.nagyhood) && currentState.lovesz,
                setState:{nagyhood: true, hood: false},
                nextText: 29,      
            }, 
            {
                text:'Robin Hood íja (Újra 2x használható fegyever lesz)',  
                requireState: (currentState) => currentState.hood && currentState.lovesz,
                setState:{nagyhood: true, hood: false},
                nextText: 29,      
            },
            {
                text:'Merida íja (2x használható fegyever)',  
                requireState: (currentState) => currentState.nagyhood && currentState.lovesz,
                setState:{nagymerida: true},
                nextText: 29,      
            },
            //ninja
            {
                text:'Nagy Kay szamurai kardja (Újra 2x használható fegyever lesz)',  
                requireState: (currentState) => currentState.szamurai && currentState.ninja,
                setState:{nagyszamurai: true, szamurai: false},
                nextText: 29,      
            }, 
            {
                text:'Nagy Kay szamurai kardja (2x használható fegyever)',  
                requireState: (currentState) => !(currentState.nagyszamurai) && !(currentState.szamurai) && currentState.ninja,
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
                text:'Az Excalibur (Újra 2x használható fegyever lesz)',  
                requireState: (currentState) => currentState.excalibur && currentState.harcos,
                setState:{nagyexcalibur: true, excalibur: false},
                nextText: 29,      
            }, 
            {
                text:'Az Excalibur (2x használható fegyever)',  
                requireState: (currentState) => !(currentState.nagyexcalibur) && !(currentState.excalibur) && currentState.harcos,
                setState:{nagyexcalibur: true,},
                nextText: 29,      
            }, 
            {
                text:'Darth Vader fénykardja (3x használható fegyever)',  
                requireState: (currentState) => currentState.nagyexcalibur && currentState.harcos,
                setState:{nagydarthlezer: true},
                nextText: 29,      
            },
            //magus
            {
                text:'Merlin varázskönyve (Újra 2x használható fegyever lesz)',  
                requireState: (currentState) => currentState.merlin && currentState.magus,
                setState:{nagymerlin: true, merlin: false},
                nextText: 29,      
            }, 
            {
                text:'Merlin varázskönyve (2x használható fegyever)',  
                requireState: (currentState) => !(currentState.nagymerlin) && !(currentState.merlin) && currentState.magus,
                setState:{nagymerlin: true,},
                nextText: 29,      
            }, 
            {
                text:'Wanda Maximoff varázskönyve (2x használható fegyever)',  
                requireState: (currentState) => currentState.nagymerlin && currentState.magus,
                setState:{nagywanda: true},
                nextText: 29,      
            },                              
        ]
    },  
    {
        id: 34,
        text: 'Nem a legtökéletesebb választ adtad, de közel jártál hozzá. Így a most kapott 1 xp-det fegyverként kapod vissza, vagy ha van plusz xp-d akkor nagyfegyverként\nJutalmad:',
        options:[
            //lövész
            {
                text:'Megkapod az íjadat',  
                requireState: (currentState) => !(currentState.nyil) && currentState.lovesz && !(currentState.fejlesztettnyil),
                setState:{nyil: true},
                nextText: 29, 
            },
            {
                text:'Megkapod a csúzlidat',  
                requireState: (currentState) => !(currentState.csuzli) && currentState.lovesz  && !(currentState.fejlesztettcsuzli),
                setState:{csuzli: true},
                nextText: 29, 
            },
            {
                text:'Megkapod Robin Hood íját',  
                requireState: (currentState) => currentState.lovesz && currentState.duplaLxp,
                setState:{nagyhood: true},
                nextText: 29, 
            },

            //ninja
            {
                text:'Megkapod a katanádat',  
                requireState: (currentState) => !(currentState.katana) && currentState.ninja && !(currentState.fejlesztettkatana),
                setState:{katana: true},
                nextText: 29, 
            },
            {
                text:'Megkapod a dobócsillagjaidat',  
                requireState: (currentState) => !(currentState.dcs) && currentState.ninja  && !(currentState.fejlesztettdcs),
                setState:{dcs: true},
                nextText: 29, 
            },
            {
                text:'Megkapod Nagy Kay szamurai kardját',  
                requireState: (currentState) => currentState.ninja  && currentState.duplaNxp,
                setState:{nagyszamurai: true},
                nextText: 29, 
            },
            //harcos
            {
                text:'Megkapod a kardodat',  
                requireState: (currentState) => !(currentState.kard) && currentState.harcos && !(currentState.fejlesztettkard),
                setState:{kard: true},
                nextText: 29, 
            },
            {
                text:'Megkapod a pajzsodat',  
                requireState: (currentState) => !(currentState.pajzs) && currentState.harcos  && !(currentState.fejlesztettpajzs),
                setState:{pajzs: true},
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
                requireState: (currentState) => !(currentState.vK) && currentState.magus && !(currentState.fejlesztettvK),
                setState:{vK: true},
                nextText: 29, 
            },
            {
                text:'Megkapod a pálcádat',  
                requireState: (currentState) => !(currentState.vP) && currentState.magus  && !(currentState.fejlesztettvP),
                setState:{vP: true},
                nextText: 29, 
            },
            {
                text:'Megkapod Merlin varázskönyvét',  
                requireState: (currentState) => currentState.magus  && currentState.duplaHxp,
                setState:{nagymerlin: true},
                nextText: 29, 
            },
            {
                text:'Sajnos egyik feltétel sem egyezik, így menned kell harcolni...',  
                nextText: 29, 
            },
        ]
    },
    {
        id: 35,
        text: 'Kifogodt rajtad ez a fejtörő, ez most nem sikerült.',
        options:[
            {
                text:'Mit tehetnénk? Ez most nem jött össze, harcra fel!',  
                nextText: 29,      
            }, 
            {
                text:'A fene essen bele, itt a vége!',                                
                nextText:0       
            },                   
        ]
    }, 
    {
        id: 27,
        text: 'Ohh nagy harcos, vigyázz kivel barátkozol! A te kis barátod, az a szellem a te legnagyobb ellenséged.',
        options:[
            {
                text:'Lerázod magadról a szellemet',
                setState: {szellem : false},  
                nextText: 29,      
            }, 
            {
                text:'A fene jobban tudja nem hallgatsz rá és tovább állsz',  //ezt nem igazán értem                              
                nextText: 29,      
            },                   
        ]
    }, 
    {
        id: 28,
        text: 'Egy barátságos ivászat után a kalandorok - bízva képességeidben - adnak neked egy fegyvert, melytől azt remélik, hogy legyőződ vele a szörnyek szörnyét.',
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
        text: 'Itt az idő a nagy harcra, hogy beteljesítsd sorsodat.\nKészen állsz?',
        options:[
            {
                text:'Hát, hogy a fenébe ne lennék kész!',
                requireState: (currentState) => currentState.szellem, 
                nextText: 30,      
            }, 
            {
                text:'Készen állok, vágjunk bele',  
                requireState: (currentState) => !(currentState.szellem),                                
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
        text: '-Muhahahaa\nHallatszik nem is olyan távol tőled, mire arra fordulsz és látod, hogy a szellem gonosz nevetése hallatszik melleted.\n-Idáig jöttél, hogy kiszabadítsd őket miközben egész eddig én voltam az ellenséged? Hahaha!!!\n-Na gyere, te leszel a következő áldozat!',
        options:[
            //lövész
            {
                text:'Lelövöm a fejlesztett íjammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState:{fejlesztettnyil:false, nyil:true},
                nextText: 31,      
            }, 
            {
                text:'Lelövöm az íjammal',
                requireState: (currentState) => currentState.nyil, 
                setState:{nyil:false},
                nextText: 31,      
            }, 
            {
                text:'Lelövöm a fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState:{fejlesztettcsuzli:false, csuzli:true},
                nextText: 31,      
            }, 
            {
                text:'Lelövöm a csúzlimmal',
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
                text:'A különleges képességemet használom',
                requireState: (currentState) => currentState.kulonL, 
                setState:{kulonL: false},
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
                text:'Lelövöm a fejlesztett dobócsillagjaimmal',
                requireState: (currentState) => currentState.fejlesztettdcs, 
                setState:{fejlesztettdcs:false, dcs:true},
                nextText: 31,      
            }, 
            {
                text:'Lelövöm a dobócsillagjaimmal',
                requireState: (currentState) => currentState.dcs, 
                setState:{dcs:false},
                nextText: 31,      
            }, 
            {
                text:'Nagy Kay kardját használom',
                requireState: (currentState) => currentState.nagyszamurai, 
                setState:{nagyszamurai:false, szamurai:true},
                nextText: 31,      
            }, 
            {
                text:'Nagy Kay kardját használom',
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
                setState:{kulonN: false},
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
                text:'Darth Vader fénykardját használom',
                requireState: (currentState) => currentState.nagydarthlezer, 
                setState:{nagydarthlezer:false, nagydarth:true},
                nextText: 31,      
            }, 
            {
                text:'Darth Vader fénykardját használom',
                requireState: (currentState) => currentState.nagydarth, 
                setState:{nagydarth:false, darth:true},
                nextText: 31,      
            },
            {
                text:'Darth Vader fénykardját használom',
                requireState: (currentState) => currentState.darth, 
                setState:{darth:false},
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
                setState:{kulonH: false},
                nextText: 31,      
            },
            //magus
            {
                text:'Elátkozom a fejlesztett varázskönyvemmel',
                requireState: (currentState) => currentState.fejlesztettvK, 
                setState:{fejlesztettvK:false, vK:true},
                nextText: 31,      
            }, 
            {
                text:'Elátkozom varázskönyvemmel',
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
                text:'A különleges képességemet használom',
                requireState: (currentState) => currentState.kulonM, 
                setState:{kulonM: false},
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
        text: '-Még a közelében sem vagy a győzelemnek harcos! Gyerünk, mutasd meg ki vagy!!',
        options:[
            //lövész
            {
                text:'Lelövöm a fejlesztett íjammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState:{fejlesztettnyil:false, nyil:true},
                nextText: 32,      
            }, 
            {
                text:'Lelövöm az íjammal',
                requireState: (currentState) => currentState.nyil, 
                setState:{nyil:false},
                nextText: 32,      
            }, 
            {
                text:'Lelövöm a fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState:{fejlesztettcsuzli:false, csuzli:true},
                nextText: 32,      
            }, 
            {
                text:'Lelövöm a csúzlimmal',
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
                text:'A különleges képességemet használom',
                requireState: (currentState) => currentState.kulonL, 
                setState:{kulonL: false},
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
                text:'Lelövöm a fejlesztett dobócsillagjaimmal',
                requireState: (currentState) => currentState.fejlesztettdcs, 
                setState:{fejlesztettdcs:false, dcs:true},
                nextText: 32,      
            }, 
            {
                text:'Lelövöm a dobócsillagjaimmal',
                requireState: (currentState) => currentState.dcs, 
                setState:{dcs:false},
                nextText: 32,      
            }, 
            {
                text:'Nagy Kay kardját használom',
                requireState: (currentState) => currentState.nagyszamurai, 
                setState:{nagyszamurai:false, szamurai:true},
                nextText: 32,      
            }, 
            {
                text:'Nagy Kay kardját használom',
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
                setState:{kulonN: false},
                nextText: 32,      
            },
            //harcos
            {
                text:'Dart Vader fénykardját használom',
                requireState: (currentState) => currentState.nagydarthlezer, 
                setState:{nagydarthlezer:false, nagydarth:true},
                nextText: 31,      
            }, 
            {
                text:'Darth Vader fénykardját használom',
                requireState: (currentState) => currentState.nagydarth, 
                setState:{nagydarth:false, darth:true},
                nextText: 31,      
            },
            {
                text:'Darth Vader fénykardját használom',
                requireState: (currentState) => currentState.darth, 
                setState:{darth:false},
                nextText: 31,      
            },
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
                setState:{kulonH: false},
                nextText: 32,      
            },
            //magus
            {
                text:'Elátkozom a fejlesztett varázskönyvemmel',
                requireState: (currentState) => currentState.fejlesztettvK, 
                setState:{fejlesztettvK:false, vK:true},
                nextText: 32,      
            }, 
            {
                text:'Elátkozom varázskönyvemmel',
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
                setState:{kulonM: false},
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
        text: '-Áh harcos, ne már! Nem győzhetsz,  még nem veszíthetek!',//teljes 
        options:[
            //lövész
            {
                text:'Lelövöm a fejlesztett íjammal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState:{fejlesztettnyil:false, nyil:true},
                nextText: 38,      
            }, 
            {
                text:'Lelövöm az íjammal',
                requireState: (currentState) => currentState.nyil, 
                setState:{nyil:false},
                nextText: 38,      
            }, 
            {
                text:'Lelövöm a fejlesztett csúzlimmal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState:{fejlesztettcsuzli:false, csuzli:true},
                nextText: 38,      
            }, 
            {
                text:'Lelövöm a csúzlimmal',
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
                text:'A különleges képességemet használom',
                requireState: (currentState) => currentState.kulonL, 
                setState:{kulonL: false},
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
                text:'Lelövöm a fejlesztett dobócsillagjaimmal',
                requireState: (currentState) => currentState.fejlesztettdcs, 
                setState:{fejlesztettdcs:false, dcs:true},
                nextText: 38,      
            }, 
            {
                text:'Lelövöm a dobócsillagjaimmal',
                requireState: (currentState) => currentState.dcs, 
                setState:{dcs:false},
                nextText: 38,      
            }, 
            {
                text:'Nagy Kay kardját használom',
                requireState: (currentState) => currentState.nagyszamurai, 
                setState:{nagyszamurai:false, szamurai:true},
                nextText: 38,      
            }, 
            {
                text:'Nagy Kay kardját használom',
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
                setState:{kulonN: false},
                nextText: 38,      
            },
            //harcos
            {
                text:'Darth Vader fénykardját használom',
                requireState: (currentState) => currentState.nagydarthlezer, 
                setState:{nagydarthlezer:false, nagydarth:true},
                nextText: 31,      
            }, 
            {
                text:'Darth Vader fénykardját használom',
                requireState: (currentState) => currentState.nagydarth, 
                setState:{nagydarth:false, darth:true},
                nextText: 31,      
            },
            {
                text:'Darth Vader fénykardját használom',
                requireState: (currentState) => currentState.darth, 
                setState:{darth:false},
                nextText: 31,      
            },
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
                setState:{kulonH: false},
                nextText: 38,      
            },
            //magus
            {
                text:'Elátkozom a fejlesztett varázskönyvemmel',
                requireState: (currentState) => currentState.fejlesztettvK, 
                setState:{fejlesztettvK:false, vK:true},
                nextText: 38,      
            }, 
            {
                text:'Elátkozom a varázskönyvemmel',
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
                setState:{kulonM: false},
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
        text: 'Üres, teljesen üres az utolsó barlang, előtted a cella, benne a nép, akikért jöttél. Hát még is csak igaza volt a kocsmárosnak...',
        options:[
            {
                text:'Kiszabadítom az elfogott népet és kikésérem őket a barlangból',  
                nextText: 37,      
            },                              
        ]
    },
    {
        id: 38,
        text: 'Győztél, sikerült legyőznöd a szörnyek szörnyét, a szellemet. Gratulálunk Hős!',
        options:[
            {
                text:'Kiszabadítom az elfogott népet és kikésérem őket a barlangból',  
                nextText: 37,      
            },                              
        ]
    },
    {
        id: 37,
        text: 'Sikeresen teljesítetted a küldetésed nagy hős! Most eredj, pihenj meg és keres még több kalandot!',
        options:[
            {
                text:'ÉN VAGYOK A NAGY LÖVÉSZ',
                requireState: (currentState) => currentState.lovesz,
                setState:{nagylovesz: true}, 
                nextText: -1,      
            },      
            {
                text:'ÉN VAGYOK A NAGY NINJA',  
                requireState: (currentState) => currentState.ninja,
                setState:{nagyninja: true},
                nextText: -1,      
            },           
            {
                text:'ÉN VAGYOK A NAGY HARCOS',  
                requireState: (currentState) => currentState.harcos,
                setState:{nagyharcos: true},
                nextText: -1,      
            },       
            {
                text:'ÉN VAGYOK A NAGY MÁGUS',  
                requireState: (currentState) => currentState.magus,
                setState:{nagymagus: true},
                nextText: -1,      
            },         
        ]
    },
]


startGame()