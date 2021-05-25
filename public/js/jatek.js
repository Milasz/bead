const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const imgElement = document.getElementById('image')
const kepElement = document.getElementById('kep')


let state = {
    //var
}

// var lovesz = {
//     kaszt: "Lövész",
//     hp:12,
//     stamina : 10,
//     pajzs : 11,
// }

function startGame(){
    state = {
        
    }
    showTextNode(1)
//     document.getElementsByClassName('btn')[0].setAttribute('onclick',"window.location.href='/belepes'")
//     console.log(document.getElementsByClassName('btn')[0].onclick)
 }

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode=> textNode.id === textNodeIndex)
    textElement.innerText = textNode.text;
    imgElement.setAttribute('src', textNode.img);
    while(optionButtonsElement.firstChild)
    {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    if(textNode.img==undefined)
    {
        kepElement.style.display = 'none';
    }
    else if(textNode.img!=undefined && kepElement.style.display=="none"){
        kepElement.style.display = 'block';
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
        img: "/kepek/gameover.jpg",
        id: 0,
        text: 'Game over',
        options:[
            {
                text: 'Kilépsz a játékból',               
                setState:{halott : true}
            },            
        ]
    },
    {
        id: 1,
        img : "/kepek/város.png",
        text: 'Egyszer volt, hol nem volt, volt egyszer egy nagy város, melynek lakói békében éltek egymással, mígnem egy nap szörnyek rátámadtak a városra. A lakosság fejét vesztve menekülni próbált. Az egyik egyik felét megölték, a másik felét pedig elvitték magukkal a szörnyek, hogy később megegyék őket. Eltelt egy nap mire a hír a király fülébe jutott, és ő úgy határozott, hogy a legnagyobb hősét küldi el, hogy legyőzze ezeket a vérengző fenevadakat. Te vagy ez a hős! Itt az idő, hogy indulj és teljesítsd a feladatodat!',
        options:[
            {
                text:'Készen állsz az előtted álló feladatra!',  
                nextText: 2  //Math.floor(Math.random() * 10) + 1     
            },
            {
                text:'Áh inkább, most menjen más.',
                nextText: 0
            }
        ]
    },
    {
        id: 100,
        text: 'Megláttál egy fénylő kristályt, melybe emlékeidet mentheted el.', 
        options:[
            {
                text: 'Mentesz', 
                nextText:9,                
            },            
        ]
    },
    {
        id: 101,
        text: 'Újabb fénylő kristályt találtál, melybe emlékeidet mentheted el.',
        options:[
            {
                text: 'Mentesz', 
                nextText:24,
                
            },            
        ]
    },
    {
        id: 102,
        text: 'Újabb fénylő kristályt találtál, melybe emlékeidet mentheted el.', 
        options:[
            {
                text: 'Mentesz', 
                nextText:9,
                
            },            
        ]
    },
    
    {
        id: 2,
        text: 'Válassz kasztot!',
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
        img : "/kepek/ijjász.jpg",
        text: 'A ijjászt választottad. \nAz eszközeidet csak egyszer használhatod fel:\nNyíl (Fejlesztheted/visszakérheted)\nCsúzli (Fejlesztheted/visszakérheted)\nEgyszer használatos menekülés, ami NEM fejleszthető és NEM visszakérhető.\nBiztos lövész akarsz lenni?',
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
        img : "/kepek/tolvaj.jpg" ,
        id: 4,
        text: 'A tolvajt választottad. \nAz eszközeidet csak egyszer használhatod fel:\n Katana (Fejlesztheted/visszakérheted)\nDobócsillag (Fejlesztheted/visszakérheted)\nEgyszer használatos menekülés, ami NEM fejleszthető és NEM visszakérhető.\nBiztos tolvaj akarsz lenni?',
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
        img : "/kepek/lovag.jpg" ,
        id: 5,
        text: 'A harcost választottad. \nAz eszközeidet csak egyszer használhatod fel:\nKard (Fejlesztheted/visszakérheted)\nPajzs (Fejlesztheted/visszakérheted)\nEgyszer használatos menekülés, ami NEM fejleszthető és NEM visszakérhető.\nBiztos harcos akarsz lenni?',
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
        img : "/kepek/mágus.jpg" ,
        id: 6,
        text: 'A mágust választottad. \nAz eszközeidet csak egyszer használhatod fel:\nVarázskönyv (Fejlesztheted/visszakérheted)\nVarázspálca (Fejlesztheted/visszakérheted)\nEgyszer használatos menekülés, ami NEM fejleszthető és NEM visszakérhető.\nBiztos mágus akarsz lenni?',
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
        img : "/kepek/bejárat.png" ,
        id: 7,
        text:'A barlang bejáratában egy szörny állta utadat. Ahhoz, hogy le tudj jutni a barlangba, le kell győznöd. Harcolj, vagy fuss, mint egy gyáva nyúl!',
        options:[
            {
                text:'Íjjat használod', //ezeket semmiképp nem kérdőjellel kéne írni és talán első szám egyes személyben
                requireState: (currentState) => currentState.lovesz,
                setState :  {nyil : false,},         
                nextText: 8,      
            },
            {
                text:'Csúzlit használod',
                requireState: (currentState) => currentState.lovesz,
                setState :  {csuzli : false},         
                nextText: 8,     
            },
            {   
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.lovesz,
                setState :  {kulonL : false},         
                nextText: 8,        
            },
            {
                text:'Katanát használod',
                requireState: (currentState) => currentState.ninja,
                setState :  {katana : false},         
                nextText: 8,      
            },
            {
                text:'Dobócsillagot használod',
                requireState: (currentState) => currentState.ninja,
                setState :  {dcs : false},         
                nextText: 8,     
            },
            {   
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.ninja,
                setState :  {kulonN : false},         
                nextText: 8,        
            },
            {
                text:'Kardot használod',
                requireState: (currentState) => currentState.harcos,
                setState :  {kard : false},         
                nextText: 8,      
            },
            {
                text:'Pajzsot használod',
                requireState: (currentState) => currentState.harcos,
                setState :  {pajzs : false},         
                nextText: 8,     
            },
            {   
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.harcos,
                setState :  {kulonH : false},         
                nextText: 8,        
            },
            {
                text:'Varázskönyvet használod',
                requireState: (currentState) => currentState.magus,
                setState :  {vK : false},         
                nextText: 8,      
            },
            {
                text:'Varázspálcát használod',
                requireState: (currentState) => currentState.magus,
                setState :  {vP : false},         
                nextText: 8,     
            },
            {   
                text:'Az egyszeri menekülést választod',
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
                text:'Az íjat szeretnéd visszakapni.',
                requireState: (currentState) => !(currentState.nyil) && currentState.lovesz,
                setState: {nyil : true},
                nextText: 100,   
            },
            {
                text:'Az íjat szeretnéd fejleszteni.',
                requireState: (currentState) => currentState.nyil  && currentState.lovesz,
                setState: {fejlesztettnyil : true, nyil: false},
                nextText: 100,      
            },
            {
                text:'A csúzlit szeretnéd visszakapni.',
                requireState: (currentState) => !(currentState.csuzli)  && currentState.lovesz,
                setState :  {csuzli : true},         
                nextText: 100,     
            },
            {
                text:'A csúzlit szeretnéd fejleszteni.',
                requireState: (currentState) => currentState.csuzli  && currentState.lovesz,
                setState :  {fejlesztettcsuzli : true, csuzli : false},         
                nextText: 100,     
            },
            {
                text:'A katanát szeretnéd visszakapni.',
                requireState: (currentState) => !(currentState.katana)  && currentState.ninja,
                setState :  {katana : true},         
                nextText: 100,      
            },
            {
                text:'A katanát szeretnéd fejleszteni.',
                requireState: (currentState) => currentState.katana && currentState.ninja,
                setState :  {fejlesztettkatana : true, katana: false},         
                nextText: 100,      
            },
            {
                text:'A dobócsillagot szeretnéd visszakapni.',
                requireState: (currentState) =>!(currentState.dcs) && currentState.ninja,
                setState :  {dcs : true},         
                nextText: 100,     
            },
            {
                text:'A dobócsillagot szeretnéd fejleszteni.',
                requireState: (currentState) => currentState.dcs && currentState.ninja,
                setState :  {fejlesztettdcs : true,dcs : false},         
                nextText: 100,     
            },
            {
                text:'A kardot szeretnéd visszakapni.',
                requireState: (currentState) => !(currentState.kard) && currentState.harcos,
                setState :  {kard : true },         
                nextText: 100,      
            },
            {
                text:'A kardot szeretnéd fejleszteni.',
                requireState: (currentState) => currentState.kard && currentState.harcos,
                setState :  {fejlesztettkard : true, kard : false},         
                nextText: 100,      
            },
            {
                text:'A pajzsot szeretnéd visszakapni.',
                requireState: (currentState) => !(currentState.pajzs) && currentState.harcos,
                setState :  {pajzs : true},         
                nextText: 100,     
            },
            {
                text:'A pajzsot szeretnéd fejleszteni.',
                requireState: (currentState) => currentState.pajzs && currentState.harcos,
                setState :  {fejlesztettpajzs : true, pajzs: false},         
                nextText: 100,     
            },
            {
                text:'A varázskönyvet szeretnéd visszakapni.',
                requireState: (currentState) => !(currentState.vK) && currentState.magus,
                setState :  {vK : true},         
                nextText: 100,      
            },
            {
                text:'A varázskönyvet szeretnéd fejleszteni.',
                requireState: (currentState) => currentState.vK && currentState.magus,
                setState :  {fejlesztettvK : true, vK: false},         
                nextText: 100,      
            },
            {
                text:'A varázspálcát szeretnéd visszakapni.',
                requireState: (currentState) => !(currentState.vP) && currentState.magus,
                setState :  {vP : true},         
                nextText: 100,     
            },
            {
                text:'A varázspálcát szeretnéd fejleszteni.',
                requireState: (currentState) => currentState.vP && currentState.magus,
                setState :  {fejlesztettvP : true,vP : false},         
                nextText: 100,     
            },            
            {
                text:'Megtartod az Xp-t.',
                requireState: (currentState) => currentState.lovesz,
                setState :  {duplaLxp : true},  
                nextText: 100
            },
            {
                text:'Megtartod az Xp-t.',
                requireState: (currentState) => currentState.ninja,
                setState :  {duplaNxp : true},  
                nextText: 100
            },
            {
                text:'Megtartod az Xp-t.',
                requireState: (currentState) => currentState.harcos,
                setState :  {duplaHxp : true},  
                nextText: 100
            },
            {
                text:'Megtartod az Xp-t.',
                requireState: (currentState) => currentState.magus,
                setState :  {duplaMxp : true},  
                nextText: 100
            },
            
        ]
    },
       
    {
        img: "/kepek/szellem.png",
        id: 9,
        text: 'Tovább haladva utadon egy szellem botlottál a barlang mélyén.\n-Segíts kérlek nagy harcos! Én egy elátkozott ideláncolt lélek vagyok, ha segítesz nekem kiszabadulni én is megsegítelek utadon.\nHogy döntesz hát?',
        options:[
            {
                text:'Segítesz rajta, hisz a plusz segítség sosem árt.',
                setState: { szellem: true},   
                nextText:10         
            },
            {
                text:'Nem szimpatikus neked ez a szellem, így inkább egyedül mész tovább.',
                nextText:10
            }
        ]
    },
    {
        img : "/kepek/utak.png" ,
        id: 10,
        text: 'Utatad folytatva egy elágazáshoz értél.\nHárom utat látsz magad előtt:\nBalra egy sötét járatot látsz, melyben denevéreket találsz.\nKözépen egy kivilágított vájat látsz, ahonnan gyenge szellő süvít a falak közül.\nJobbra egy rejtélyes járatot látsz, ahol furcsa jeleket találsz a falon.',
        options:[
            {
                text:'Balra mész.',
                requireState: (currentState) => !(currentState.szellem),  
                nextText:11         
            },
            {
                text:'Középen mész.',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:12
            },
            {
                text:'Jobbra mész.',
                requireState: (currentState) => !(currentState.szellem),   
                nextText: Math.floor(Math.random() * (155-150) + 150)
            },
            {
                text:'Balra mész.\nSzellem:\n-Hős! Veszélyes az út, de itt egy pihenő találsz, ahol megpihenhetsz.',
                requireState: (currentState) => currentState.szellem,  
                nextText:11         
            },
            {
                text:'Középen mész.\nSzellem:\n-Hős! Még véletlenül se ezt az utat válaszd, mert egy hatalmas szörny vár.',
                requireState: (currentState) => currentState.szellem,    
                nextText:12 
            },
            {
                text:'Jobbra mész.\nSzellem:\n-Hős! A falon a rejtvények megfejtései vannak, ne félj tőle.',
                requireState: (currentState) => currentState.szellem,  
                nextText: Math.floor(Math.random() * (152-150) + 150)          
            },
            {
                text:'Visszafordulsz és hagyod az egészet a fenébe.',
                nextText: 0
            }
        ]
    },
    {
        img : "/kepek/kalandorok.jpg" ,
        id: 11,
        text: 'A barlang mélyén kalandorokba botlottál, akiknek a harcaidat mesélheted el. A kalandorok jó tanácsokat adnak a történeteidért cserébe.',
        options:[
            {
                text:'Itt az ideje, hogy tovább állj!',
                setState: { szerencs: true },   
                nextText:17       
            },
            {
                text:'Maradsz még\n(Ugyan ide fog betölteni téged).',
                nextText: 11
            }
        ]
    },
    {
        img : "/kepek/szörny.jpg",
        id: 12,
        text: 'A barlang mélyén, mely oly barátságosnak nézett ki egy szörnnyel találod magad szemben. Most itt az idő, hogy harcolj, különben meghalsz!',
        options:[
            {
                text:'Lelövöd az íjaddal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.nyil,
                setState: { nyil: false},   
                nextText:13        
            },
            {
                text:'Lelövöd a fejlesztett íjaddal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.fejlesztettnyil,
                setState: { fejlesztettnyil:false, nyil: true},   
                nextText:13       
            },
            {
                text:'Lelövöd a csúzliddal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.csuzli,
                setState: { csuzli: false},   
                nextText:13        
            },
            {
                text:'Lelövöd a fejlesztett csúzliddal.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.fejlesztettcsuzli,
                setState: { fejlesztettcsuzli:false, csuzli: true},   
                nextText:13       
            },
            {
                text:'Használod az egyszeri menekülést.',
                requireState: (currentState) => currentState.lovesz,
                requireState: (currentState) => currentState.kulonL,
                setState: { kulonL: false},   
                nextText:13       
            },
            {
                text:'Leszúrod a katanáddal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.katana,
                setState: { katana: false},   
                nextText:13        
            },
            {
                text:'Leszúrod a fejlesztett katanáddal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.fejlesztettkatana,
                setState: { fejlesztettkatana:false, katana: true},   
                nextText:13        
            },
            {
                text:'Megdobod a dobó csillagoddal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.dcs,
                setState: { dcs: false},   
                nextText:13        
            },
            {
                text:'Megdobod a fejlesztett dobó csillagoddal.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.fejlesztettdcs,
                setState: { fejlesztettdcs:false, dcs: true},   
                nextText:13       
            },
            {
                text:'Használod az egyszeri menekülést.',
                requireState: (currentState) => currentState.ninja,
                requireState: (currentState) => currentState.kulonN,
                setState: { kulonN: false},   
                nextText:13        
            },
            {
                text:'Leszúrod a kardoddal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.kard,
                setState: { kard: false},   
                nextText:13        
            },
            {
                text:'Leszúrod a fejlesztett kardoddal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.fejlesztettkard,
                setState: { fejlesztettkard:false, kard: true},   
                nextText:13       
            },
            {
                text:'Nekirontasz a pajzsoddal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.pajzs,
                setState: { pajzs: false},   
                nextText:13       
            },
            {
                text:'Nekirontasz a fejlesztett pajzsoddal.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.fejlesztettpajzs,
                setState: { fejlesztettpajzs:false, pajzs: true},   
                nextText:13       
            },
            {
                text:'Használod az egyszeri menekülést.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.kulonH,
                setState: { kulonN: false},   
                nextText:13       
            },
            {
                text:'Elvarázsolod egy varázsigével a könyvből.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.vK,
                setState: { vK: false},   
                nextText:13        
            },
            {
                text:'Elvarázsolod egy varázsigével a fejlesztett könyvből.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.fejlesztettvK,
                setState: { fejlesztettvK:false, vK: true},   
                nextText:13       
            },
            {
                text:'A pálcáddal elvarázsolod.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.vP,
                setState: { vP: false},   
                nextText:13       
            },
            {
                text:'A fejlesztett pálcáddal elvarázsolod.',
                requireState: (currentState) => currentState.harcos,
                requireState: (currentState) => currentState.fejlesztettvP,
                setState: { fejlesztettvP: false, vP: true},   
                nextText:13       
            },
            {
                text:'Használod az egyszeri menekülést.',
                requireState: (currentState) => currentState.magus,
                requireState: (currentState) => currentState.kulonM,
                setState: { kulonM: false},   
                nextText:13       
            },
            {
                text:'Feladot és elfutsz mint egy kislány',
                nextText: 0
            }
        ]
    },
    {
        id: 13,
        text: 'Újabb Xp nyertél, hogy használod fel a javadra?',
        options:[
            {
                text:'Szeretnéd az íjadat visszakapni',
                requireState: (currentState) => currentState.lovesz && !(currentState.nyil) && !(currentState.fejlesztettnyil),
                setState: { nyil: true},   
                nextText:17     
            },
            {
                text:'Szeretnéd az íjadat fejleszteni',
                requireState: (currentState) => currentState.lovesz && currentState.nyil,
                setState: { nyil: false, fejlesztettnyil: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a csúzlidat visszakapni',
                requireState: (currentState) => currentState.lovesz && !(currentState.csuzli) && !(currentState.fejlesztettcsuzli),
                setState: { csuzli: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a csúzlidat fejleszteni',
                requireState: (currentState) => currentState.lovesz && currentState.csuzli,
                setState: { csuzli: false, fejlesztettcsuzli: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a két xp-det beváltani Robin Hood íjára.', // dupla helyett 2?
                requireState: (currentState) => currentState.lovesz && currentState.duplaLxp,
                setState: { nagyhood: true, duplaLxp: false},   
                nextText:17       
            },
            {
                text:'Szeretnéd a katanádat visszakapni',
                requireState: (currentState) => currentState.ninja &&  !(currentState.katana) && !(currentState.fejlesztettkatana),
                setState: { katana: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a katanádat fejleszteni',
                requireState: (currentState) => currentState.ninja && currentState.katana,
                setState: { katana: false, fejlesztettkatana: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a dobócsillagodat visszakapni',
                requireState: (currentState) => currentState.ninja && !(currentState.dcs) && !(currentState.fejlesztettdcs),
                setState: { dcs: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a dobócsillagodat fejleszteni',
                requireState: (currentState) => currentState.ninja && currentState.dcs,
                setState: { dcs: false, fejlesztettdcs: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a két xp-det beváltani Nagy Kay szamurai kardjára',
                requireState: (currentState) => currentState.ninja && currentState.duplaNxp,
                setState: { nagyszamurai: true, duplaNxp: false},   
                nextText:17       
            },
            {
                text:'Szeretnéd a kardodat visszakapni',
                requireState: (currentState) => currentState.harcos &&  !(currentState.kard) && !(currentState.fejlesztettkard),
                setState: { kard: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a kardodat fejleszteni',
                requireState: (currentState) => currentState.harcos && currentState.kard,
                setState: { kard: false, fejlesztettkard: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a pajzsodat visszakapni',
                requireState: (currentState) => currentState.harcos && !(currentState.pajzs) && !(currentState.fejlesztettpajzs),
                setState: { pajzs: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a pajszodat fejleszteni',
                requireState: (currentState) => currentState.harcos && currentState.pajzs,
                setState: { pajzs: false, fejlesztettpajzs: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a két xp-det beváltani az Excaliburra',
                requireState: (currentState) => currentState.harcos && currentState.duplaHxp,
                setState: { nagyexcalibur: true, duplaHxp: false},   
                nextText:17       
            },
            {
                text:'Szeretnéd a könyvedet visszakapni',
                requireState: (currentState) => currentState.magus && !(currentState.vK) && !(currentState.fejlesztettvK),
                setState: { vK: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a könyvedet fejleszteni',
                requireState: (currentState) => currentState.magus && currentState.vK,
                setState: { fejlesztettvK: true, vK: false},   
                nextText:17       
            },
            {
                text:'Szeretnéd a pálcádat visszakapni',
                requireState: (currentState) => currentState.magus && !(currentState.vP) && !(currentState.fejlesztettvP),
                setState: { vP: true},   
                nextText:17       
            },
            {
                text:'Szeretnéd a pálcádat fejleszteni',
                requireState: (currentState) => currentState.magus && currentState.vP,
                setState: { fejlesztettvP: true, vP: false},   
                nextText:17      
            },
            {
                text:'Szeretnéd a két xp-det beváltani a Merlin varázs könyvére.',
                requireState: (currentState) => currentState.magus && currentState.duplaMxp,
                setState: { nagymerlin: true, duplaMxp: false},   
                nextText:17       
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
                text:'Visszaveszed az íjadat és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.nyil) && currentState.fejlesztettcsuzli, 
                setState: {nyil:true, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.nyil) && currentState.fejlesztettcsuzli, 
                setState:{nagyhood:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzed Robin Hood íját',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{nagyhood:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted az íjadat és a csúzlidat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{nyil:false, fejlesztettnyil:true, csuzli:false, fejlesztettcsuzli: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted az íjadat és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{nyil:false, fejlesztettnyil:true, duplaLxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a csúzlidat és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaLxp) && currentState.nyil, 
                setState:{csuzli:false, fejlesztettcsuzli: true, duplaLxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Megszerzed Robin Hood íját és marad 1 xp',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp && !(currentState.nyil), 
                setState:{nagyhood:true, duplaLxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját és fejleszted a csúzlidat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{nagyhood:true, csuzli: false, fejlesztettcsuzli: true, duplaLxp:false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját és visszaveszed az íjadat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{nagyhood:true, nyil: true, duplaLxp:false},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a csúzlidat, visszaveszed az íjadat és marad 1 xp.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.nyil), 
                setState:{nyil: true, csuzli: false, fejlesztettcsuzli: true, duplaLxp: true},
                nextText:17       
            },  //pipa
            //Az első esik ki 3 esetet von maga után, majd 1. 2 esetet, a 2. 4 esetet és a 3. szintén 4 esetet.

            //B
            //a
            {
                text:'Visszaveszed a csúzlidat és marad 1 xp',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.csuzli) && currentState.fejlesztettnyil, 
                setState: {csuzli:true, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját',   // b esik fejlesztett a 
                requireState: (currentState) =>!(currentState.csuzli) && currentState.fejlesztettnyil, 
                setState:{nagyhood:true},
                nextText:17       
            },  //pipa 
            //b ugyan az mint az a eset  
            //c        
            {
                text:'Megszerzed Robin Hood íját és marad 1 xp',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp && !(currentState.csuzli), 
                setState:{nagyhood:true, duplaLxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját és fejleszted az íjadat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{nagyhood:true, nyil: true, duplaLxp:false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját és visszaveszed a csúzlidat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{nagyhood:true, csuzli: true, duplaLxp:false},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted az íjadat, visszaveszed a csúzlidat és marad 1 xp.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaLxp &&  !(currentState.csuzli), 
                setState:{ csuzli: true, nyil: false, fejlesztettnyil: true, duplaLxp: true},
                nextText:17       
            },  //pipa
            // szinten 3 esetünk van mint az ha az első fegyvert veszítenénk el 

            //Ulty
            //a
            {
                text:'Fejleszted a csúzlidat és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonL) && currentState.fejlesztettnyil, 
                setState: {fejlesztettcsuzli: true, csuzli:false, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonL) && currentState.fejlesztettnyil, 
                setState: {nagyhood: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejleszted az íjadat és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonL) && currentState.fejlesztettcsuzli, 
                setState:{nyil:false, fejlesztettnyil:true, duplaLxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonL) && currentState.fejlesztettcsuzli, 
                setState:{nagyhood: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejleszted a csúzlidat és az íjadat és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonL) && currentState.duplaLxp, 
                setState:{csuzli:false, fejlesztettcsuzli: true, duplaLxp:true, nyil:false, fejlesztettnyil:true,},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját és marad 1 xp',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonL) && currentState.duplaLxp,
                setState:{nagyhood:true, duplaLxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját és fejleszted a csúzlidat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonL) && currentState.duplaLxp,
                setState:{nagyhood:true, csuzli: false, fejlesztettcsuzli: true, duplaLxp:false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Robin Hood íját és fejleszted a íjadat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonL) && currentState.duplaLxp,
                setState:{nagyhood:true, nyil: false, fejlesztettnyil: true, duplaLxp:false },
                nextText:17       
            },  //pipa
            

            //Ninja
            //A
            //a
            {
                text:'Visszaveszed a katanádat és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.katana) && currentState.fejlesztettdcs,  
                setState: {katana:true, duplaNxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.katana) && currentState.fejlesztettdcs, 
                setState:{nagyszamurai:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzed Nagy Kay szamurai kardját',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{nagyszamurai:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a katanádat és a dobó csillagodat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{katana:false, fejlesztettkatana:true, csuzli:false, fejlesztettdcs: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a katanát és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{katana:false, fejlesztettkatana:true, duplaNxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a dobó csillagodat és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaNxp) && currentState.katana, 
                setState:{dcs:false, fejlesztettdcs: true, duplaNxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Megszerzed Nagy Kay szamurai kardját és marad 1 xp',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp && !(currentState.katana), 
                setState:{nagyszamurai:true, duplaNxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját és fejleszted a dobó csillagodat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{nagyszamurai:true, dcs: false, fejlesztettdcs: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját és visszaveszed a katanádat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{nagyszamurai:true,katana: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a dobó csillagodat, visszaveszed a katanádat és marad 1 xp.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.katana), 
                setState:{katana: true, dcs: false, fejlesztettdcs: true, duplaNxp: true},
                nextText:17       
            },  //pipa


            //B
            //a
            {
                text:'Visszaveszed a dobó csillagodat és marad 1 xp',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.dcs) && currentState.fejlesztettkatana, 
                setState: {dcs:true, duplaNxp: true},
                nextText:17       
            },  
            {
                text:'Megszerzed Nagy Kay szamurai kardját',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.dcs) && currentState.fejlesztettkatana, 
                setState:{nagyszamurai:true},
                nextText:17       
            },
            //b ugyan az mint A eset b
            //c             
            {
                text:'Megszerzed Nagy Kay szamurai kardját és marad 1 xp',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp && !(currentState.dcs), 
                setState:{nagyszamurai:true, duplaNxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját és fejleszted a katanádat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true,  fejlesztettkatana: true, katana: false, duplaNxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját és visszaveszed a dobó csillagodat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true, dcs: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a katanádat, visszaveszed a dobó csillagodat és marad 1 xp.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaNxp &&  !(currentState.dcs), 
                setState:{nagyszamurai:true, dcs: true, katana: false, fejlesztettkatana: true, duplaNxp: true},
                nextText:17       
            },  //pipa

            //Ulty
            //a
            {
                text:'Fejleszted a dobó csillagodat és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonN) && currentState.fejlesztettkatana, 
                setState: {fejlesztettdcs: true, dcs:false, duplaNxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját',   // a esik fejlesztett b 
                requireState: (currentState) =>!(currentState.kulonN) && currentState.fejlesztettkatana, 
                setState: {nagyszamurai: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejleszted a katanát és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonN) && currentState.fejlesztettdcs, 
                setState:{katana:false, fejlesztettkatana:true, duplaNxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonN) && currentState.fejlesztettdcs, 
                setState:{nagyszamurai: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejleszted a dobó csillagodat és a katanádat, marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonN) && currentState.duplaNxp, 
                setState:{dcs:false, fejlesztettdcs: true, duplaNxp:true, katana:false, fejlesztettkatana:true,},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját és marad 1 xp',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonN) && currentState.duplaNxp,
                setState:{nagyszamurai:true, duplaNxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját és fejleszted a dobó csillagodat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonN) && currentState.duplaNxp,
                setState:{nagyszamurai:true, dcs: false, fejlesztettdcs: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Nagy Kay szamurai kardját és fejleszted a katanádat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonN) && currentState.duplaNxp,
                setState:{nagyszamurai:true, katana: false, fejlesztettkatana: true, duplaNxp: false},
                nextText:17       
            },  //pipa
            

            //Harcos
            //A
            //a
            {
                text:'Visszaveszed a kardodat és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kard) && currentState.fejlesztettpajzs,  
                setState: {kard:true, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kard) && currentState.fejlesztettpajzs, 
                setState:{nagyexcalibur:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzed az Excaliburt',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{nagyexcalibur:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a kardodat és a pajzsodat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{kard:false, fejlesztettkard:true, pajzs:false, fejlesztettpajzs: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a kardodat és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{kard:false, fejlesztettkard:true, duplaHxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a pajzsodat és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaHxp) && currentState.kard, 
                setState:{pajzs:false, fejlesztettpajzs: true, duplaHxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Megszerzed az Excaliburt és marad 1 xp',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp && !(currentState.kard), 
                setState:{nagyexcalibur:true, duplaHxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt és fejleszted a pajzsodat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{nagyexcalibur:true, pajzs: false, fejlesztettpajzs: true ,duplaHxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt és visszaveszed a kardodat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{nagyexcalibur:true, kard: true, duplaHxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a pajzsodat, visszaveszed a kardodat és marad 1 xp.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.kard), 
                setState:{kard: true, pajzs: false, fejlesztettpajzs: true, duplaHxp: true},
                nextText:17       
            },  //pipa


            //B
            //a
            {
                text:'Visszaveszed a pajzsodat és marad 1 xp',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.pajzs) && currentState.fejlesztettkard, 
                setState: {pajzs:true, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.pajzs) && currentState.fejlesztettkard, 
                setState:{nagyexcalibur:true},
                nextText:17       
            },  //pipa
            //b uagyan az mint az A bje
            //c
            {
                text:'Megszerzed az Excaliburt és marad 1 xp',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp && !(currentState.pajzs), 
                setState:{nagyexcalibur:true, duplaHxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt és fejleszted a kardodat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur:true, kard: false, fejlesztettkard: true, duplaHxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt és visszaveszed a pajzsodat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur:true, pajzs: true,duplaHxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a kardodat, visszaveszed a pajzsodat és marad 1 xp.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaHxp &&  !(currentState.pajzs), 
                setState:{nagyexcalibur: true, pajzs: true, kard: false, fejlesztettkard: true, duplaHxp: true},
                nextText:17       
            },  //pipa

            //Ulty
            //a
            {
                text:'Fejleszted a pajzsodat és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonH) && currentState.fejlesztettkard, 
                setState: {fejlesztettpajzs: true, pajzs:false, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonH) && currentState.fejlesztettkard, 
                setState: {nagyexcalibur: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejleszted a kardodat és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonH) && currentState.fejlesztettpajzs, 
                setState:{kard:false, fejlesztettkard:true, duplaHxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonH) && currentState.fejlesztettpajzs, 
                setState:{kard:false, fejlesztettkard:true, duplaHxp: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejleszted a pajzsodat és a kardodat, marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonH) && currentState.duplaHxp, 
                setState:{pajzs:false, fejlesztettpajzs: true, duplaHxp:true, kard:false, fejlesztettkard:true,},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt és marad 1 xp',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonH) && currentState.duplaHxp,
                setState:{nagyexcalibur:true, duplaHxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt és fejleszted a pajzsodat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonH) && currentState.duplaHxp,
                setState:{nagyexcalibur:true, pajzs: false, fejlesztettpajzs: true, duplaHxp: false  },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed az Excaliburt és fejleszted a kardodat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonH) && currentState.duplaHxp,
                setState:{nagyexcalibur:true, kard: false, fejlesztettkard: true, duplaHxp: false  },
                nextText:17       
            },  //pipa
            
            //Mágus
            //A 
            //a
            {
                text:'Visszaveszed a könyvedet és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.vK) && currentState.fejlesztettvP,  
                setState: { vK:true, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.vK) && currentState.fejlesztettvP, 
                setState:{nagymerlin:true},
                nextText:17       
            },  //pipa
            //b
            {
                text:'Megszerzed Merlin könyvét',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{nagymerlin:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a könyvedet és a pálcádat',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{vK:false, fejlesztettvK:true, vP:false, fejlesztettvP: true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a könyvedet és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{vK:false, fejlesztettvK:true, duplaMxp:true},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a pálcádat és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.duplaMxp) && currentState.vK, 
                setState:{vP:false, fejlesztettvP: true, duplaMxp:true},
                nextText:17       
            },  //pipa
            //c
            {
                text:'Megszerzed Merlin könyvét és marad 1 xp',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp && !(currentState.vK), 
                setState:{nagymerlin:true, duplaMxp:true , duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét és fejleszted a pálcádat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{nagymerlin:true, vP: false, fejlesztettvP: true , duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét és visszaveszed a könyvedet.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{nagymerlin:true, vK: true, duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a pálcádat, visszaveszed a könyvedet és marad 1 xp.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vK), 
                setState:{vK: true, vP: false, fejlesztettvP: true, duplaMxp: true},
                nextText:17       
            },  //pipa


            //B
            //a
            {
                text:'Visszaveszed a pálcádat és marad 1 xp',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.vP) && currentState.fejlesztettvK, 
                setState: { vP:true, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét',   // b esik fejlesztett a 
                requireState: (currentState) => !(currentState.vP) && currentState.fejlesztettvK, 
                setState:{nagymerlin:true},
                nextText:17       
            },  //pipa
            //b uagyan az mint az A bje
            //c
            {
                text:'Megszerzed Merlin könyvét és marad 1 xp',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp && !(currentState.vP), 
                setState:{nagymerlin:true, duplaMxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét és fejleszted a könyvedet.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin:true, vK: false, fejlesztettvK: true, duplaMxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét és visszaveszed a pálcádat.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin:true, vP: true, duplaMxp: false},
                nextText:17       
            },  //pipa
            {
                text:'Fejleszted a könyvedet, visszaveszed a pálcádat és marad 1 xp.',   // b esik nem szedem vissza plus xp 
                requireState: (currentState) => currentState.duplaMxp &&  !(currentState.vP), 
                setState:{nagymerlin: true, vP: true, vK: false, fejlesztettvK: true, duplaMxp: true},
                nextText:17       
            },  //pipa

            //Ulty
            //a
            {
                text:'Fejleszted a pálcádat és marad 1 xp',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonM) && currentState.fejlesztettvK, 
                setState: {fejlesztettvP: true, vP:false, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét',   // a esik fejlesztett b 
                requireState: (currentState) => !(currentState.kulonM) && currentState.fejlesztettvK, 
                setState: {nagymerlin: true},
                nextText:17       
            },  //pipa
            
            //b
            {
                text:'Fejleszted a könyvedet és marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonM) && currentState.fejlesztettvP, 
                setState:{vK:false, fejlesztettvK:true, duplaMxp: true},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonM) && currentState.fejlesztettvP, 
                setState:{vK:false, fejlesztettvK:true, duplaMxp: true},
                nextText:17       
            },  //pipa
           
            //c
            {
                text:'Fejleszted a pálcádat és a könyvedet, marad 1 xp',   // a esik visszavesz a 
                requireState: (currentState) => !(currentState.kulonM) && currentState.duplaMxp, 
                setState:{vP:false, fejlesztettvP: true, duplaMxp:true, vK:false, fejlesztettvK:true,},
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét és marad 1 xp',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonM) && currentState.duplaMxp,
                setState:{nagymerlin:true, duplaMxp:true },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét és fejleszted a pajzsodat.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonM) && currentState.duplaMxp,
                setState:{nagymerlin:true, vP: false, fejlesztettvP: true, duplaMxp: false },
                nextText:17       
            },  //pipa
            {
                text:'Megszerzed Merlin könyvét és fejleszted a könyvedet.',   // a esik nem szedem vissza plus xp 
                requireState: (currentState) => !(currentState.kulonM) && currentState.duplaMxp,
                setState:{nagymerlin:true, vK: false, fejlesztettvK: true, duplaMxp: false },
                nextText:17       
            },  //pipa
        ]
    },
    
    
    {
        id: 16,
        text: 'Sajnos nem sikerült megoldanod a rejtvényt, de majd legközelebb nagyobb sikerrel jársz.',
        options:[
            {
                text:'Mész tovább a barlangokban',   
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
                text:'Szellem:\n-Hé, Nagy hős! Ott egy fénylő érme a földön, mintha egy titkos ajtó lenne ott',
                requireState: (currentState) => currentState.szellem && currentState.szerencs,                   
                nextText:22       
            },  
            {
                text:'Belefáradtál a kalandozásba és elfutsz mint egy nyámnyila nyúl!',  //alázóbb legyen
                nextText:0        
            },      
        ]
    },  
    {
        img : "/kepek/ijjasgoblin.jpg",
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
                text:'A fejlesztett csúzliddal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 41      
            }, 
            {
                text:'A fejlesztett ijáddal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 41      
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false},  
                nextText: 41        
            },
            {
                text:'A csúzliddal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false},  
                nextText: 41
            }, 
            {
                text:'Az ijáddal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false},  
                nextText: 41
            }, 
            {
                text:'Inadba szállt a bátorságod és feladod',  //inadba szállt a bátorságod
                nextText:0        
            },
	    ]
    },  
    {
        img : "/kepek/csontváz.png",
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
                text:'A fejlesztett csúzliddal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 42
            }, 
            {
                text:'A fejlesztett ijáddal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 42
            },
            { 
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false},  
                nextText: 42
            },
            {
                text:'A csúzliddal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false,},  
                nextText: 42
            }, 
            {
                text:'Az ijáddal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false},  
                nextText: 42
            },
            {
                text:'Ennyi elég volt, nem bírod tovább!',  //inadba szállt a bátorságod
                nextText:0        
            }, 
	    ]
    },  
    {
        img : "/kepek/fegyvertelengoblin.png",
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
                text:'A fejlesztett csúzliddal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 43
            }, 
            {
                text:'A fejlesztett ijáddal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 43
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false},  
                nextText: 43
            },
            {
                text:'A csúzliddal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false},  
                nextText: 43
            }, 
            {
                text:'Az ijáddal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false},  
                nextText: 43
            }, 
	        {
                text:'Mivel fegyvertelen, ezért leütöd fegyverek elhasználása nélkül',
                requireState: (currentState) => currentState.lovesz, 
                nextText: 43
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },
	    ]
    }, 
    {
        img : "/kepek/vadászcsont.jpg",
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
                text:'A fejlesztett csúzliddal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState: {fejlesztettcsuzli: false, csuzli: true},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett ijáddal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState: {fejlesztettnyil: false, nyil: true},  
                nextText: 24
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonL, 
                setState: {kulonL: false},  
                nextText: 24
            },
            {
                text:'A csúzliddal',
                requireState: (currentState) => currentState.csuzli, 
                setState: {csuzli: false},  
                nextText: 24
            }, 
            {
                text:'Az ijáddal',
                requireState: (currentState) => currentState.nyil, 
                setState: {nyil: false},  
                nextText: 24
            }, 
	        {
                text:'Fáradt vagy, de a falon megpillantasz egy fény sugarat',
                requireState: (currentState) => currentState.lovesz && currentState.szerencse, 
                nextText: 24
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },
	    ]
    }, 
    {
        //itt vagyok kép
        img : "/kepek/katanagoblin.png",
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
                text:'A fejlesztett dobó csillagoddal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, dcs: true},  
                nextText: 45
            }, 
            {
                text:'A fejlesztett katanáddal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 45
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false},  
                nextText: 45
            },
            {
                text:'A dobó csillagjaiddal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false},  
                nextText: 45
            }, 
            {
                text:'A katanáddal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false},  
                nextText: 45
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },
	    ]
    },  
{
        img : "/kepek/zombidcs.png",
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
                text:'A fejlesztett dobó csillagjaiddal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText: 46
            }, 
            {
                text:'A fejlesztett katanáddal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 46
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false},  
                nextText: 46
            },
            {
                text:'A dobó csillagjaiddal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false,},  
                nextText: 46
            }, 
            {
                text:'A katanáddal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false},  
                nextText: 46
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },
	    ]
    }, 
    {
        img : "/kepek/slime.png",
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
                text:'A fejlesztett dobó csillagjaiddal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText: 47
            }, 
            {
                text:'A fejlesztett katanáddal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 47
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false},  
                nextText: 47
            },
            {
                text:'A dobó csillagjaiddal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false},  
                nextText: 47
            }, 
            {
                text:'A katanáddal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false},  
                nextText: 47
            }, 
	        {
                text:'Mivel fegyvertelen, leütöd és nem használsz el fegyvert rá',
                nextText: 47
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },
	    ]
    },
    {
        img : "/kepek/deadsamurai.png",
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
                text:'A fejlesztett dobó csillagjaiddal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettdcs, 
                setState: {fejlesztettdcs: false, csuzli: true},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett katanáddal',
                requireState: (currentState) => currentState.ninja && currentState.fejlesztettkatana, 
                setState: {fejlesztettkatana: false, katana: true},  
                nextText: 24
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.ninja && currentState.kulonN, 
                setState: {kulonN: false},  
                nextText: 24
            },
            {
                text:'A dobó csillagjaiddal',
                requireState: (currentState) => currentState.ninja && currentState.dcs, 
                setState: {dcs: false},  
                nextText: 24
            }, 
            {
                text:'A katanáddal',
                requireState: (currentState) => currentState.ninja && currentState.katana, 
                setState: {katana: false},  
                nextText: 24
            }, 
	        {
                text:'Elfáradtál és mintha halucinálnál, de úgy látod, hogy ott egy titkos ajtó',
		        requireState: (currentState) => currentState.szerencse,
                nextText: 24
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },
	    ]
    },  
    {
        img : "/kepek/kardgoblin.png",
        id: 48,
        text: 'Első ellenséged egy karddal felfegyverkezett goblin\nHogy döntesz, hogy győzöd le?',
        options:[
            //harcos
            {//
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
                text:'A fejlesztett pajzsoddal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 49
            }, 
            {
                text:'A fejlesztett kardoddal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 49
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false},  
                nextText: 49
            },
            {
                text:'A pajzsoddal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false,},  
                nextText: 49
            }, 
            {
                text:'A kardoddal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false},  
                nextText: 49
            },
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },
	    ]
    },  
    {
        img : "/kepek/pajzszombi.png",
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
                text:'A fejlesztett pajzsoddal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 50
            }, 
            {
                text:'A fejlesztett kardoddal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 50
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false},  
                nextText: 50
            },
            {
                text:'A pajzsoddal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false,},  
                nextText: 50
            }, 
            {
                text:'A kardoddal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false},  
                nextText: 50
            },
            {
                text:'Ennyi elég volt nem bírod tovább',  
                nextText:0        
            },
	    ]
    },  
    {
        img : "/kepek/pok.jpg",
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
                text:'Fejlesztett pajzsoddal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 51
            }, 
            {
                text:'Fejlesztett kardoddal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 51
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false},  
                nextText: 51
            },
            {
                text:'A pajzsoddal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false},  
                nextText: 51
            }, 
            {
                text:'A kardoddal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false},  
                nextText: 51
            },
	        {
                text:'Mivel fegyvertelen, így le tudod ütni és nem használsz fel fegyvert',
                nextText: 51
            },
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },
	    ]
    },  
    {
        img : "/kepek/armourzombi.png",
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
                text:'A fejlesztett pajzsoddal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettpajzs, 
                setState: {fejlesztettpajzs: false, pajzs: true},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett kardoddal',
                requireState: (currentState) => currentState.harcos && currentState.fejlesztettkard, 
                setState: {fejlesztettkard: false, kard: true},  
                nextText: 24
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.harcos && currentState.kulonH, 
                setState: {kulonH: false},  
                nextText: 24
            },
            {
                text:'A pajzsoddal',
                requireState: (currentState) => currentState.harcos && currentState.pajzs, 
                setState: {pajzs: false},  
                nextText: 24
            }, 
            {
                text:'A kardoddal',
                requireState: (currentState) => currentState.harcos && currentState.kard, 
                setState: {kard: false},  
                nextText: 24
            },
	        {
                text:'Elfáradtál, de olyan mint ha ott lenne egy titkos ajtó',
		        requireState: (currentState) => currentState.szerencse,
                nextText: 24
            },
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },
	    ]
    }, 
    {
        img : "/kepek/boszorkány.png",
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
                text:'A fejlesztett pálcáddal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 53
            }, 
            {
                text:'A fejlesztett könyveddel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 53
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false},  
                nextText: 53
            },
            {
                text:'A pálcáddal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false},  
                nextText: 53
            }, 
            {
                text:'A könyveddel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false},  
                nextText: 53
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },   
	    ]
    },
    {
        img : "/kepek/evilmagic.png",
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
                text:'A fejlesztett pálcáddal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 54
            }, 
            {
                text:'A fejlesztett könyveddel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 54
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false,},  
                nextText: 54
            },
            {
                text:'A pálcáddal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false},  
                nextText: 54
            }, 
            {
                text:'A könyveddel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false},  
                nextText: 54
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },   
	    ]
    },
    {
        img : "/kepek/summon.png",
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
                text:'A fejlesztett pálcáddal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 55
            }, 
            {
                text:'A fejlesztett könyveddel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 55
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false},  
                nextText: 55
            },
            {
                text:'A pálcáddal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false},  
                nextText: 55
            }, 
            {
                text:'A könyveddel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false},  
                nextText: 55
            }, 
	        {
                text:'Mivel fegyvertelen, így inkább fejbe csapod a könyveddel és nem használod el',
                nextText: 55
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },   
	    ]
    },
    {
        img : "/kepek/evilwitch.png",
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
                text:'A fejlesztett pálcáddal',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvP, 
                setState: {fejlesztettvP: false, vP: true},  
                nextText: 24
            }, 
            {
                text:'A fejlesztett könyveddel',
                requireState: (currentState) => currentState.magus && currentState.fejlesztettvK, 
                setState: {fejlesztettvK: false, vK: true},  
                nextText: 24
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.magus && currentState.kulonM, 
                setState: {kulonM: false},  
                nextText: 24
            },
            {
                text:'A pálcáddal',
                requireState: (currentState) => currentState.magus && currentState.vP, 
                setState: {vP: false},  
                nextText: 24
            }, 
            {
                text:'A könyveddel',
                requireState: (currentState) => currentState.magus && currentState.vK, 
                setState: {vK: false},  
                nextText: 24
            }, 
	        {
                text:'Elfáradtál, de mintha ott lenne egy titkos ajtó',
		        requireState: (currentState) => currentState.szerencse,
                nextText: 24
            }, 
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },   
	    ]
    },
    {
        id: 24, 
        text: 'Sikeresen helyt álltál a harcban, így most visszakaphatod az egyik fegyveredet.\n Ezután pedig döntened kell, hogy merre mész tovább:\nBalra, ahol megpihenhetsz \nJobbra, ahol tudásodat mutathatod be.',
        options:[
            //lövész itt vagyok
            {
                text:'A nyiladat kéred és balra mész',  
                requireState: (currentState) => !(currentState.nyil) && currentState.lovesz && !(currentState.fejlesztettnyil),
                setState: {nyil:true},
                nextText:25
            }, 
            {
                text:'A nyiladat kéred és jobbra mész',  
                requireState: (currentState) => !(currentState.nyil) && currentState.lovesz && !(currentState.fejlesztettnyil),
                setState: {nyil:true},
                nextText:26
            }, 
            {
                text:'A csúzlidat kéred és balra mész',  
                requireState: (currentState) => !(currentState.csuzli) && currentState.lovesz && !(currentState.fejlesztettcsuzli),
                setState: {csuzli:true},
                nextText:25
            }, 
            {
                text:'A csúzlidat kéred és jobbra mész',  
                requireState: (currentState) => !(currentState.csuzli) && currentState.lovesz && !(currentState.fejlesztettcsuzli),
                setState: {csuzli:true},
                nextText:26
            }, 
            {
                text:'Megvan mindened, ami neked kell és balra mész',  
                requireState: (currentState) => currentState.csuzli && currentState.lovesz && currentState.nyil,
                nextText:25
            }, 
            {
                text:'Megvan mindened, ami neked kell és jobbra mész',  
                requireState: (currentState) => currentState.csuzli && currentState.lovesz && currentState.nyil,
                nextText:26
            }, 
            //ninja
            {
                text:'A katanádat kéred és balra mész',  
                requireState: (currentState) => !(currentState.katana) && currentState.ninja && !(currentState.fejlesztettkatana),
                setState: {katana:true},
                nextText:25
            }, 
            {
                text:'A katanádat kéred és jobbra mész',  
                requireState: (currentState) => !(currentState.katana) && currentState.ninja && !(currentState.fejlesztettkatana),
                setState: {katana:true},
                nextText:26
            }, 
            {
                text:'A dobó csillagjaidat kéred és balra mész',  
                requireState: (currentState) => !(currentState.dcs) && currentState.ninja && !(currentState.fejlesztettdcs),
                setState: {dcs:true},
                nextText:25
            }, 
            {
                text:'A dobó csillagjaidat kéred és jobbra mész',  
                requireState: (currentState) => !(currentState.dcs) && currentState.ninja && !(currentState.fejlesztettdcs),
                setState: {dcs:true},
                nextText:26
            }, 
            {
                text:'Megvan mindened, ami neked kell és balra mész',  
                requireState: (currentState) => currentState.dcs && currentState.ninja && currentState.katana,
                nextText:25
            }, 
            {
                text:'Megvan mindened, ami neked kell és jobbra mész',  
                requireState: (currentState) => currentState.dcs && currentState.ninja && currentState.katana,
                nextText:26
            }, 
            //harcos
            {
                text:'A kardodat kéred és balra mész',  
                requireState: (currentState) => !(currentState.kard) && currentState.harcos && !(currentState.fejlesztettkard),
                setState: {kard:true},
                nextText:25
            }, 
            {
                text:'A kardodat kéred és jobbra mész',  
                requireState: (currentState) => !(currentState.kard) && currentState.harcos && !(currentState.fejlesztettkard),
                setState: {kard:true},
                nextText:26
            }, 
            {
                text:'A pajzsodat kéred és balra mész',  
                requireState: (currentState) => !(currentState.pajzs) && currentState.harcos && !(currentState.fejlesztettpajzs),
                setState: {pajzs:true, },
                nextText:25
            }, 
            {
                text:'A pajzsodat kéred és jobbra mész',  
                requireState: (currentState) =>!(currentState.pajzs) && currentState.harcos && !(currentState.fejlesztettpajzs),
                setState: {pajzs:true, },
                nextText:26
            }, 
            {
                text:'Megvan mindened, ami neked kell és balra mész',  
                requireState: (currentState) => currentState.pajzs && currentState.harcos && currentState.kard,
                nextText:25
            }, 
            {
                text:'Megvan mindened, ami neked kell és jobbra mész',  
                requireState: (currentState) => currentState.pajzs && currentState.harcos && currentState.kard,
                nextText:26
            }, 

            //magus
            {
                text:'A könyvedet kéred és balra mész',  
                requireState: (currentState) => !(currentState.vK) && currentState.magus && !(currentState.fejlesztettvK),
                setState: {vK:true},
                nextText:25
            }, 
            {
                text:'A könyvedet kéred és jobbra mész',  
                requireState: (currentState) => !(currentState.vK) && currentState.magus && !(currentState.fejlesztettvK),
                setState: {vK:true},
                nextText:26
            }, 
            {
                text:'A pálcádat kéred és balra mész',  
                requireState: (currentState) => !(currentState.vP) && currentState.magus && !(currentState.fejlesztettvP),
                setState: {vP:true},
                nextText:25
            }, 
            {
                text:'A pálcádat kéred és jobbra mész',  
                requireState: (currentState) => !(currentState.vP) && currentState.magus && !(currentState.fejlesztettvP),
                setState: {vP:true},
                nextText:26
            }, 
            {
                text:'Megvan mindened, ami neked kell és balra mész',  
                requireState: (currentState) => currentState.vP && currentState.magus && currentState.vK,
                nextText:25
            }, 
            {
                text:'Megvan mindened, ami neked kell és jobbra mész',  
                requireState: (currentState) => currentState.vP && currentState.magus && currentState.vK,
                nextText:26
            },              
            {
                text:'Ennyi elég volt, nem bírod tovább!',  
                nextText:0        
            },      
        ]
    },  
    {
        img: "/kepek/kalandor.png",
        id: 25,
        text: 'Megpihenve a barlangok jól elrejtett mélyében egy táborozó kalandorokba botlottál.\nEgy szegény utazó oda szól hozzád:\n-Nagy harcos! Egy xp-ért cserébe segítek neked!\nNem túl távol egy kalandor közbe szól:\n-Ne higgy neki, inkább gyere velünk inni és kapsz egy fegyvert is!\nHogy döntesz?',
        options:[
            {//itt vagyok
                text:'A szegénynek hiszel',  
                requireState: (currentState) => currentState.duplaLxp && currentState.szellem,
                nextText:27        
            },             
            {
                text:'A szegénynek hiszel',
                requireState: (currentState) => currentState.duplaNxp && currentState.szellem ,  
                nextText:27        
            }, 
            {
                text:'A szegénynek hiszel', 
                requireState: (currentState) => currentState.duplaHxp && currentState.szellem, 
                nextText:27        
            }, 
            {
                text:'A szegénynek hiszel',  
                requireState: (currentState) => currentState.duplaMxp && currentState.szellem,
                nextText:27        
            }, 
            {
                text:'A szegény azt akarja mondani, hogy a boss a szellem lesz, válaszd a kalandort :D',  
                requireState: (currentState) => !(currentState.szellem),  
                nextText:28        
            }, 
            {
                text:'Csatlakozom a kaladorokhoz',                
                nextText:28       
            },  
            {
                text:'Gondolkozom\n(ugyan ezen az oldalon leszel)',  
                nextText:25      
            }, 
            {
                text:'Itt maradok örökön örökké',  
                nextText:0      
            },                 
        ]
    },  
    {
        img: "/kepek/láda.png",
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
        img: "/kepek/titkos.jpg",
        id: 22,
        text: 'A megérzésed nem volt rossz, egy kis kaput találtál, ami segített neked kikerülni a nagy harcot. Most dönthetsz, hogy megdolgoztatod az agyadat a végső harc előtt vagy sem?',
        options:[
            {
                text:'Próbálj szerencsét, eddig bejött',  
                nextText: 26,      
            }, 
            {
                text:'Harcolni jöttél, harcolni is fogsz',                                
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
                text:'Sajnos egyik feltétel sem egyezik, így kell menned harcolni...',  
                nextText: 29, 
            },
        ]
    },
    {
        id: 35,
        text: 'Kifogodt rajtad ez a fejtörő, ez most nem sikerült.',
        options:[
            {
                text:'Mit tehetnél? Ez most nem jött össze, harcra fel!',  
                nextText: 29,      
            }, 
            {
                text:'A fene essen bele, itt a vége!',                                
                nextText:0       
            },                   
        ]
    }, 
    {
        img: "/kepek/evilghost.png",
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
                text:'Hát, hogy a fenébe ne lennél kész!',
                requireState: (currentState) => currentState.szellem, 
                nextText: 30,      
            }, 
            {
                text:'Készen állsz!',  
                requireState: (currentState) => !(currentState.szellem),                                
                nextText: 36,      
            },
            {
                text:'Áh nem hiszed, hogy készen állnál a harcra',                           
                nextText: 0,      
            },

        ]
    }, 
    {
        img: "/kepek/evilghost.png",
        id: 30,
        text: '-Muhahahaa\nHallatszik nem is olyan távol tőled, mire arra fordulsz és látod, hogy a szellem gonosz nevetése hallatszik melleted.\n-Idáig jöttél, hogy kiszabadítsd őket miközben egész eddig én voltam az ellenséged? Hahaha!!!\n-Na gyere, te leszel a következő áldozat!',
        options:[
            //lövész
            {
                text:'Lelövöd a fejlesztett ijáddal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState:{fejlesztettnyil:false, nyil:true},
                nextText: 31,      
            }, 
            {
                text:'Lelövöd az ijáddal',
                requireState: (currentState) => currentState.nyil, 
                setState:{nyil:false},
                nextText: 31,      
            }, 
            {
                text:'Lelövöd a fejlesztett csúzliddal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState:{fejlesztettcsuzli:false, csuzli:true},
                nextText: 31,      
            }, 
            {
                text:'Lelövöd a csúzliddal',
                requireState: (currentState) => currentState.csuzli, 
                setState:{csuzli:false},
                nextText: 31,      
            }, 
            {
                text:'Merlin nyilát használod',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 31,      
            }, 
            {
                text:'Merlin nyilát használod',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 31,      
            }, 
            {
                text:'Merida nyilát használod',
                requireState: (currentState) => currentState.nagymerida, 
                setState:{nagymerida:false, merida: true},
                nextText: 31,      
            },
            {
                text:'Merida nyilát használod',
                requireState: (currentState) => currentState.merida, 
                setState:{merida: false},
                nextText: 31,      
            },
            {
                text:'A Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonL, 
                setState:{kulonL: false},
                nextText: 31,      
            },
            //ninja
            {
                text:'Leszúrom a fejlesztett katanáddal',
                requireState: (currentState) => currentState.fejlesztettkatana, 
                setState:{fejlesztettkatana:false, katana:true},
                nextText: 31,      
            }, 
            {
                text:'Leszúrom a katanáddal',
                requireState: (currentState) => currentState.katana, 
                setState:{katana:false},
                nextText: 31,      
            }, 
            {
                text:'Lelövöd a fejlesztett dobó csillagjaiddal',
                requireState: (currentState) => currentState.fejlesztettdcs, 
                setState:{fejlesztettdcs:false, dcs:true},
                nextText: 31,      
            }, 
            {
                text:'Lelövöd a dobó csillagjaiddal',
                requireState: (currentState) => currentState.dcs, 
                setState:{dcs:false},
                nextText: 31,      
            }, 
            {
                text:'Nagy Kay kardját használod',
                requireState: (currentState) => currentState.nagyszamurai, 
                setState:{nagyszamurai:false, szamurai:true},
                nextText: 31,      
            }, 
            {
                text:'Nagy Kay kardját használod',
                requireState: (currentState) => currentState.szamurai, 
                setState:{szamurai:false},
                nextText: 31,      
            }, 
            {
                text:'Szamurai Jack kardját használod',
                requireState: (currentState) => currentState.nagyjack, 
                setState:{nagyjack:false, jack: true},
                nextText: 31,      
            },
            {
                text:'Szamurai Jack kardját használod',
                requireState: (currentState) => currentState.jack, 
                setState:{jack: false},
                nextText: 31,      
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonN, 
                setState:{kulonN: false},
                nextText: 31,      
            },
            //harcos
            {
                text:'Leszúrom a fejlesztett kardoddal',
                requireState: (currentState) => currentState.fejlesztettkard, 
                setState:{fejlesztettkard:false, kard:true},
                nextText: 31,      
            }, 
            {
                text:'Leszúrom a kardoddal',
                requireState: (currentState) => currentState.kard, 
                setState:{kard:false},
                nextText: 31,      
            }, 
            {
                text:'Leütöd a fejlesztett pajzsoddal',
                requireState: (currentState) => currentState.fejlesztettpajzs, 
                setState:{fejlesztettpajzs:false, pajzs:true},
                nextText: 31,      
            }, 
            {
                text:'Leütöd a pajzsoddal',
                requireState: (currentState) => currentState.pajzs, 
                setState:{pajzs:false},
                nextText: 31,      
            }, 
            {
                text:'Az Excaliburt használod',
                requireState: (currentState) => currentState.nagyexcalibur, 
                setState:{nagyexcalibur:false, excalibur:true},
                nextText: 31,      
            }, 
            {
                text:'Darth Vader fénykardját használod',
                requireState: (currentState) => currentState.nagydarthlezer, 
                setState:{nagydarthlezer:false, nagydarth:true},
                nextText: 31,      
            }, 
            {
                text:'Darth Vader fénykardját használod',
                requireState: (currentState) => currentState.nagydarth, 
                setState:{nagydarth:false, darth:true},
                nextText: 31,      
            },
            {
                text:'Darth Vader fénykardját használod',
                requireState: (currentState) => currentState.darth, 
                setState:{darth:false},
                nextText: 31,      
            },
            {
                text:'Az Excaliburt használod',
                requireState: (currentState) => currentState.excalibur, 
                setState:{excalibur:false},
                nextText: 31,      
            }, 
            {
                text:'Wonder Woman pajzsát használod',
                requireState: (currentState) => currentState.nagyww, 
                setState:{nagyww:false, ww: true},
                nextText: 31,      
            },
            {
                text:'Wonder Woman pajzsát használod',
                requireState: (currentState) => currentState.ww, 
                setState:{ww: false},
                nextText: 31,      
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonH, 
                setState:{kulonH: false},
                nextText: 31,      
            },
            //magus
            {
                text:'Elátkozod a fejlesztett varázskönyveddel',
                requireState: (currentState) => currentState.fejlesztettvK, 
                setState:{fejlesztettvK:false, vK:true},
                nextText: 31,      
            }, 
            {
                text:'Elátkozod varázskönyveddel',
                requireState: (currentState) => currentState.vK, 
                setState:{vK:false},
                nextText: 31,      
            }, 
            {
                text:'Elvarázsolod a fejlesztett pálcáddal',
                requireState: (currentState) => currentState.fejlesztettvP, 
                setState:{fejlesztettvP:false, vP:true},
                nextText: 31,      
            }, 
            {
                text:'Elvarázsolod pálcáddal',
                requireState: (currentState) => currentState.vP, 
                setState:{vP:false},
                nextText: 31,      
            }, 
            {
                text:'Merlin könyvét használod',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 31,      
            }, 
            {
                text:'Merlin könyvét használod',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 31,      
            }, 
            {
                text:'Wanda könyvét használod',
                requireState: (currentState) => currentState.nagywanda, 
                setState:{nagywanda:false, wanda: true},
                nextText: 31,      
            },
            {
                text:'Wanda könyvét használod',
                requireState: (currentState) => currentState.wanda, 
                setState:{wanda: false},
                nextText: 31,      
            },
            {
                text:'Az egyszeri menekülést választod',
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
        img: "/kepek/evilghost.png",
        id: 31,
        text: '-Még a közelében sem vagy a győzelemnek harcos! Gyerünk, mutasd meg ki vagy!!',
        options:[
            //lövész
            {
                text:'Lelövöd a fejlesztett ijáddal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState:{fejlesztettnyil:false, nyil:true},
                nextText: 32,      
            }, 
            {
                text:'Lelövöd az ijáddal',
                requireState: (currentState) => currentState.nyil, 
                setState:{nyil:false},
                nextText: 32,      
            }, 
            {
                text:'Lelövöd a fejlesztett csúzliddal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState:{fejlesztettcsuzli:false, csuzli:true},
                nextText: 32,      
            }, 
            {
                text:'Lelövöd a csúzliddal',
                requireState: (currentState) => currentState.csuzli, 
                setState:{csuzli:false},
                nextText: 32,      
            }, 
            {
                text:'Merlin nyilát használod',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 32,      
            }, 
            {
                text:'Merlin nyilát használod',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 32,      
            }, 
            {
                text:'Merida nyilát használod',
                requireState: (currentState) => currentState.nagymerida, 
                setState:{nagymerida:false, merida: true},
                nextText: 32,      
            },
            {
                text:'Merida nyilát használod',
                requireState: (currentState) => currentState.merida, 
                setState:{merida: false},
                nextText: 32,      
            },
            {
                text:'A Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonL, 
                setState:{kulonL: false},
                nextText: 32,      
            },
            //ninja
            {
                text:'Leszúrom a fejlesztett katanáddal',
                requireState: (currentState) => currentState.fejlesztettkatana, 
                setState:{fejlesztettkatana:false, katana:true},
                nextText: 32,      
            }, 
            {
                text:'Leszúrom a katanáddal',
                requireState: (currentState) => currentState.katana, 
                setState:{katana:false},
                nextText: 32,      
            }, 
            {
                text:'Lelövöd a fejlesztett dobó csillagjaiddal',
                requireState: (currentState) => currentState.fejlesztettdcs, 
                setState:{fejlesztettdcs:false, dcs:true},
                nextText: 32,      
            }, 
            {
                text:'Lelövöd a dobó csillagjaiddal',
                requireState: (currentState) => currentState.dcs, 
                setState:{dcs:false},
                nextText: 32,      
            }, 
            {
                text:'Nagy Kay kardját használod',
                requireState: (currentState) => currentState.nagyszamurai, 
                setState:{nagyszamurai:false, szamurai:true},
                nextText: 32,      
            }, 
            {
                text:'Nagy Kay kardját használod',
                requireState: (currentState) => currentState.szamurai, 
                setState:{szamurai:false},
                nextText: 32,      
            }, 
            {
                text:'Szamurai Jack kardját használod',
                requireState: (currentState) => currentState.nagyjack, 
                setState:{nagyjack:false, jack: true},
                nextText: 32,      
            },
            {
                text:'Szamurai Jack kardját használod',
                requireState: (currentState) => currentState.jack, 
                setState:{jack: false},
                nextText: 32,      
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonN, 
                setState:{kulonN: false},
                nextText: 32,      
            },
            //harcos
            {
                text:'Dart Vader fénykardját használod',
                requireState: (currentState) => currentState.nagydarthlezer, 
                setState:{nagydarthlezer:false, nagydarth:true},
                nextText: 31,      
            }, 
            {
                text:'Darth Vader fénykardját használod',
                requireState: (currentState) => currentState.nagydarth, 
                setState:{nagydarth:false, darth:true},
                nextText: 31,      
            },
            {
                text:'Darth Vader fénykardját használod',
                requireState: (currentState) => currentState.darth, 
                setState:{darth:false},
                nextText: 31,      
            },
            {
                text:'Leszúrom a fejlesztett kardoddal',
                requireState: (currentState) => currentState.fejlesztettkard, 
                setState:{fejlesztettkard:false, kard:true},
                nextText: 32,      
            }, 
            {
                text:'Leszúrom a kardoddal',
                requireState: (currentState) => currentState.kard, 
                setState:{kard:false},
                nextText: 32,      
            }, 
            {
                text:'Leütöd a fejlesztett pajzsoddal',
                requireState: (currentState) => currentState.fejlesztettpajzs, 
                setState:{fejlesztettpajzs:false, pajzs:true},
                nextText: 32,      
            }, 
            {
                text:'Leütöd a pajzsoddal',
                requireState: (currentState) => currentState.pajzs, 
                setState:{pajzs:false},
                nextText: 32,      
            }, 
            {
                text:'Az Excaliburt használod',
                requireState: (currentState) => currentState.nagyexcalibur, 
                setState:{nagyexcalibur:false, excalibur:true},
                nextText: 32,      
            }, 
            {
                text:'Az Excaliburt használod',
                requireState: (currentState) => currentState.excalibur, 
                setState:{excalibur:false},
                nextText: 32,      
            }, 
            {
                text:'Wonder Woman pajzsát használod',
                requireState: (currentState) => currentState.nagyww, 
                setState:{nagyww:false, ww: true},
                nextText: 32,      
            },
            {
                text:'Wonder Woman pajzsát használod',
                requireState: (currentState) => currentState.ww, 
                setState:{ww: false},
                nextText: 32,      
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonH, 
                setState:{kulonH: false},
                nextText: 32,      
            },
            //magus
            {
                text:'Elátkozod a fejlesztett varázskönyveddel',
                requireState: (currentState) => currentState.fejlesztettvK, 
                setState:{fejlesztettvK:false, vK:true},
                nextText: 32,      
            }, 
            {
                text:'Elátkozod varázskönyveddel',
                requireState: (currentState) => currentState.vK, 
                setState:{vK:false},
                nextText: 32,      
            }, 
            {
                text:'Elvarázsolod a fejlesztett pálcáddal',
                requireState: (currentState) => currentState.fejlesztettvP, 
                setState:{fejlesztettvP:false, vP:true},
                nextText: 32,      
            }, 
            {
                text:'Elvarázsolod pálcáddal',
                requireState: (currentState) => currentState.vP, 
                setState:{vP:false},
                nextText: 32,      
            }, 
            {
                text:'Merlin könyvét használod',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 32,      
            }, 
            {
                text:'Merlin könyvét használod',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 32,      
            }, 
            {
                text:'Wanda könyvét használod',
                requireState: (currentState) => currentState.nagywanda, 
                setState:{nagywanda:false, wanda: true},
                nextText: 32,      
            },
            {
                text:'Wanda könyvét használod',
                requireState: (currentState) => currentState.wanda, 
                setState:{wanda: false},
                nextText: 32,      
            },
            {
                text:'Az egyszeri menekülést választod',
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
        img: "/kepek/evilghost.png",
        id: 32,
        text: '-Áh harcos, ne már! Nem győzhetsz, még nem veszíthetek!',//teljes 
        options:[
            //lövész
            {
                text:'Lelövöd a fejlesztett ijáddal',
                requireState: (currentState) => currentState.fejlesztettnyil, 
                setState:{fejlesztettnyil:false, nyil:true},
                nextText: 38,      
            }, 
            {
                text:'Lelövöd az ijáddal',
                requireState: (currentState) => currentState.nyil, 
                setState:{nyil:false},
                nextText: 38,      
            }, 
            {
                text:'Lelövöd a fejlesztett csúzliddal',
                requireState: (currentState) => currentState.fejlesztettcsuzli, 
                setState:{fejlesztettcsuzli:false, csuzli:true},
                nextText: 38,      
            }, 
            {
                text:'Lelövöd a csúzliddal',
                requireState: (currentState) => currentState.csuzli, 
                setState:{csuzli:false},
                nextText: 38,      
            }, 
            {
                text:'Merlin nyilát használod',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 38,      
            }, 
            {
                text:'Merlin nyilát használod',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 38,      
            }, 
            {
                text:'Merida nyilát használod',
                requireState: (currentState) => currentState.nagymerida, 
                setState:{nagymerida:false, merida: true},
                nextText: 38,      
            },
            {
                text:'Merida nyilát használod',
                requireState: (currentState) => currentState.merida, 
                setState:{merida: false},
                nextText: 38,      
            },
            {
                text:'A Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonL, 
                setState:{kulonL: false},
                nextText: 38,      
            },
            //ninja
            {
                text:'Leszúrom a fejlesztett katanáddal',
                requireState: (currentState) => currentState.fejlesztettkatana, 
                setState:{fejlesztettkatana:false, katana:true},
                nextText: 38,      
            }, 
            {
                text:'Leszúrom a katanáddal',
                requireState: (currentState) => currentState.katana, 
                setState:{katana:false},
                nextText: 38,      
            }, 
            {
                text:'Lelövöd a fejlesztett dobócsillagjaimmal',
                requireState: (currentState) => currentState.fejlesztettdcs, 
                setState:{fejlesztettdcs:false, dcs:true},
                nextText: 38,      
            }, 
            {
                text:'Lelövöd a dobócsillagjaimmal',
                requireState: (currentState) => currentState.dcs, 
                setState:{dcs:false},
                nextText: 38,      
            }, 
            {
                text:'Nagy Kay kardját használod',
                requireState: (currentState) => currentState.nagyszamurai, 
                setState:{nagyszamurai:false, szamurai:true},
                nextText: 38,      
            }, 
            {
                text:'Nagy Kay kardját használod',
                requireState: (currentState) => currentState.szamurai, 
                setState:{szamurai:false},
                nextText: 38,      
            }, 
            {
                text:'Szamurai Jack kardját használod',
                requireState: (currentState) => currentState.nagyjack, 
                setState:{nagyjack:false, jack: true},
                nextText: 38,      
            },
            {
                text:'Szamurai Jack kardját használod',
                requireState: (currentState) => currentState.jack, 
                setState:{jack: false},
                nextText: 38,      
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonN, 
                setState:{kulonN: false},
                nextText: 38,      
            },
            //harcos
            {
                text:'Darth Vader fénykardját használod',
                requireState: (currentState) => currentState.nagydarthlezer, 
                setState:{nagydarthlezer:false, nagydarth:true},
                nextText: 31,      
            }, 
            {
                text:'Darth Vader fénykardját használod',
                requireState: (currentState) => currentState.nagydarth, 
                setState:{nagydarth:false, darth:true},
                nextText: 31,      
            },
            {
                text:'Darth Vader fénykardját használod',
                requireState: (currentState) => currentState.darth, 
                setState:{darth:false},
                nextText: 31,      
            },
            {
                text:'Leszúrom a fejlesztett kardoddal',
                requireState: (currentState) => currentState.fejlesztettkard, 
                setState:{fejlesztettkard:false, kard:true},
                nextText: 38,      
            }, 
            {
                text:'Leszúrom a kardoddal',
                requireState: (currentState) => currentState.kard, 
                setState:{kard:false},
                nextText: 38,      
            }, 
            {
                text:'Leütöd a fejlesztett pajzsoddal',
                requireState: (currentState) => currentState.fejlesztettpajzs, 
                setState:{fejlesztettpajzs:false, pajzs:true},
                nextText: 38,      
            }, 
            {
                text:'Leütöd a pajzsoddal',
                requireState: (currentState) => currentState.pajzs, 
                setState:{pajzs:false},
                nextText: 38,      
            }, 
            {
                text:'Az Excaliburt használod',
                requireState: (currentState) => currentState.nagyexcalibur, 
                setState:{nagyexcalibur:false, excalibur:true},
                nextText: 38,      
            }, 
            {
                text:'Az Excaliburt használod',
                requireState: (currentState) => currentState.excalibur, 
                setState:{excalibur:false},
                nextText: 38,      
            }, 
            {
                text:'Wonder Woman pajzsát használod',
                requireState: (currentState) => currentState.nagyww, 
                setState:{nagyww:false, ww: true},
                nextText: 38,      
            },
            {
                text:'Wonder Woman pajzsát használod',
                requireState: (currentState) => currentState.ww, 
                setState:{ww: false},
                nextText: 38,      
            },
            {
                text:'Az egyszeri menekülést választod',
                requireState: (currentState) => currentState.kulonH, 
                setState:{kulonH: false},
                nextText: 38,      
            },
            //magus
            {
                text:'Elátkozod a fejlesztett varázskönyveddel',
                requireState: (currentState) => currentState.fejlesztettvK, 
                setState:{fejlesztettvK:false, vK:true},
                nextText: 38,      
            }, 
            {
                text:'Elátkozod a varázskönyveddel',
                requireState: (currentState) => currentState.vK, 
                setState:{vK:false},
                nextText: 38,      
            }, 
            {
                text:'Elvarázsolod a fejlesztett pálcáddal',
                requireState: (currentState) => currentState.fejlesztettvP, 
                setState:{fejlesztettvP:false, vP:true},
                nextText: 38,      
            }, 
            {
                text:'Elvarázsolod pálcáddal',
                requireState: (currentState) => currentState.vP, 
                setState:{vP:false},
                nextText: 38,      
            }, 
            {
                text:'Merlin könyvét használod',
                requireState: (currentState) => currentState.nagymerlin, 
                setState:{nagymerlin:false, merlin:true},
                nextText: 38,      
            }, 
            {
                text:'Merlin könyvét használod',
                requireState: (currentState) => currentState.merlin, 
                setState:{merlin:false},
                nextText: 38,      
            }, 
            {
                text:'Wanda könyvét használod',
                requireState: (currentState) => currentState.nagywanda, 
                setState:{nagywanda:false, wanda: true},
                nextText: 38,      
            },
            {
                text:'Wanda könyvét használod',
                requireState: (currentState) => currentState.wanda, 
                setState:{wanda: false},
                nextText: 38,      
            },
            {
                text:'Az egyszeri menekülést választod',
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
        img: "/kepek/ures.jpg",
        id: 36,
        text: 'Üres, teljesen üres az utolsó barlang, előtted a cella, benne a nép, akikért jöttél.',
        options:[
            {
                text:'Kiszabadítod az elfogott népet és kikéséred őket a barlangból',  
                nextText: 37,      
            },                              
        ]
    },
    {
        img: "/kepek/victory.png",
        id: 38,
        text: 'Győztél, sikerült legyőznöd a szörnyek szörnyét, a szellemet. Gratulálunk Hős!',
        options:[
            {
                text:'Kiszabadítod az elfogott népet és kikéséred őket a barlangból',  
                nextText: 37,      
            },                              
        ]
    },
    {
        img: "/kepek/win.png",
        id: 37,
        text: 'Sikeresen teljesítetted a küldetésed nagy hős! Most eredj, pihenj meg és keres még több kalandot!',
        options:[
            {
                text:'TE VAGYOK A NAGY LÖVÉSZ',
                requireState: (currentState) => currentState.lovesz,
                setState:{nagylovesz: true}, 
                nextText: -1,      
            },      
            {
                text:'TE VAGYOK A NAGY NINJA',  
                requireState: (currentState) => currentState.ninja,
                setState:{nagyninja: true},
                nextText: -1,      
            },           
            {
                text:'TE VAGYOK A NAGY HARCOS',  
                requireState: (currentState) => currentState.harcos,
                setState:{nagyharcos: true},
                nextText: -1,      
            },       
            {
                text:'TE VAGYOK A NAGY MÁGUS',  
                requireState: (currentState) => currentState.magus,
                setState:{nagymagus: true},
                nextText: -1,      
            },         
        ]
    },
    //fejtörők 150-160
    {
        img : "/kepek/láda.png" ,
        id: 150,
        text: 'A falfirkák furcsák és egyben ijesztőek is, de mégis valami érdekesség van benne. A barlang mélyén egy rejtélyes ládát találtál, melyre egy fejtörő volt felírva.\nA rejtvény:\nRenáta apjának 5 lánya van:\n-Éva\n-Fruzsi\n-Kriszta\n-Léda\n-...\nMi az ötödik neve?',
        options:[
            {
                text:'Renáta\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText:15        
            },
            {
                text:'Réka\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText:16
            },
            {
                text:'Anna\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:13
            },
            {
                text:'Renáta',
                requireState: (currentState) => !(currentState.szellem),  
                nextText:15        
            },
            {
                text:'Réka',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:16 
            },
            {
                text:'Anna',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:13
            },
        ]
    },
    {
        img : "/kepek/láda.png" ,
        id: 151,
        text: 'A falfirkák furcsák és egyben ijesztőek is, de mégis valami érdekesség van benne. A barlang mélyén egy rejtélyes ládát találtál, melyre egy fejtörő volt felírva.\nA rejtvény:\nEgy vadász elindult északról délnek és megy 100 métert, utána keletre fordul és megy 200 métert, majd ismét 100 métert megy északnak. Ezzel visszaérkezett a kiindulási helyére. Ebben a pillanatban meglát egy medvét és lepuffantja szegényt.\nMilyen színű volt a medve?',
        options:[
            {
                text:'Fehér\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText:15        
            },
            {
                text:'Barna\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText:16
            },
            {
                text:'Fekete\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:13
            },
            {
                text:'Fehér',
                requireState: (currentState) => !(currentState.szellem),  
                nextText:15        
            },
            {
                text:'Barna',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:16 
            },
            {
                text:'Fekete',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:13
            },
        ]
    },
    {
        img : "/kepek/láda.png" ,
        id: 152,
        text: 'A falfirkák furcsák és egyben ijesztőek is, de mégis valami érdekesség van benne. A barlang mélyén egy rejtélyes ládát találtál, melyre egy fejtörő volt felírva.\nA rejtvény:\nEgy kosárban öt alma van. Az almákat úgy kell elosztani öt ember között, hogy mindenki kapjon egy almát és a kosárban is maradjon egy.\nHogyan csinálnád?',
        options:[
            {
                text:'Nem tudod megoldani\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText:16
            },
            {
                text:'Leszedsz egy almát a közeli fáról és azt adod oda az ötödik embernek\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:13
            },
            {
                text:'Az egyik almát kosarastul adnád oda\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText:15        
            },
            {
                text:'Nem tudod megoldani',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:16 
            },
            {
                text:'Leszedsz egy almát a közeli fáról és azt adod oda az ötödik embernek',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:13
            },
            {
                text:'Az egyik almát kosarastul adnád oda',
                requireState: (currentState) => !(currentState.szellem),  
                nextText:15        
            },
        ]
    },
    {
        img : "/kepek/láda.png" ,
        id: 153,
        text: 'A falfirkák furcsák és egyben ijesztőek is, de mégis valami érdekesség van benne. A barlang mélyén egy rejtélyes ládát találtál, melyre egy fejtörő volt felírva.\nA rejtvény:\nVan négy hajóm egymástól mind 100-100 méterre, egy 3 evezősoros gálya, egy 3 árbócos vitorlás, és egy csatahajó.\nMi a negyedik?',
        options:[
            {
                text:'Halászhajó\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText:16
            },
            {
                text:'Gőzhajó\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:13
            },
            {
                text:'Léghajó\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText:15        
            },
            {
                text:'Halászhajó',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:16 
            },
            {
                text:'Gőzhajó',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:13
            },
            {
                text:'Léghajó',
                requireState: (currentState) => !(currentState.szellem),  
                nextText:15        
            },
        ]
    },
    {
        img : "/kepek/láda.png" ,
        id: 154,
        text: 'A falfirkák furcsák és egyben ijesztőek is, de mégis valami érdekesség van benne. A barlang mélyén egy rejtélyes ládát találtál, melyre egy fejtörő volt felírva.\nA rejtvény:\nCsak a tiéd, mégis mások használják többet.\nMi az?',
        options:[
            {
                text:'Az eszed\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText:17 
            },
            {
                text:'A neved\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText:15        
            },
            {
                text:'A segítséged\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:13
            },
            {
                text:'Az eszed',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:17
            },
            {
                text:'A neved',
                requireState: (currentState) => !(currentState.szellem),  
                nextText:15        
            },
            {
                text:'A segítséged',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:13
            },            
        ]
    },
    {
        img : "/kepek/láda.png" ,
        id: 155,
        text: 'A falfirkák furcsák és egyben ijesztőek is, de mégis valami érdekesség van benne. A barlang mélyén egy rejtélyes ládát találtál, melyre egy fejtörő volt felírva.\nA rejtvény:\nEgy fickó betér egy fogadóba pénteken. Két éjszakát marad, majd pénteken ellovagol. Hogy lehetséges ez?',
        options:[
            {
                text:'Nem tudod\n-Nem hinném.',
                requireState: (currentState) => currentState.szellem, 
                nextText:16 
            },
            {
                text:'A lovát hívják Pénteknek\n-Nagyon valószínű.',
                requireState: (currentState) => currentState.szellem, 
                nextText:15        
            },
            {
                text:'Varázslat által\n-Esetleg, de nem hiszem.',
                requireState: (currentState) => currentState.szellem, 
                nextText:13
            },
            {
                text:'Nem tudom',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:16 
            },
            {
                text:'A lovát hívják Pénteknek',
                requireState: (currentState) => !(currentState.szellem),  
                nextText:15        
            },
            {
                text:'Varázslat által',
                requireState: (currentState) => !(currentState.szellem),   
                nextText:13
            },            
        ]
    },
]


startGame()