const form = document.getElementById("form");
let tableauResults = [];
var reponse = ["sphinx","psychiatre","piece",
                "gothamcity","mikaelkeaton","joker",
                "thomasmartha","heathledger","1940",
                "huntress","epouvantail","turquie",
                "andywarhol","rasalghul","zoe"];

var checkRes = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var val = document.querySelectorAll('input:checked');
    for (let i = 0; i < val.length; i++) {
        
        tableauResults.push(val[i].value);
    }

    verifcationRes(tableauResults);
    tableauResults=[];
    afficheRes(checkRes);
    checkRes=[];

});


function verifcationRes(tabs)
{
    for(let i=0;i<tabs.length;i++)
    {
        if(tabs[i]==reponse[i])
        {
            checkRes.push(true);
        }
        else
        {
            checkRes.push(false);
        }
    }
}

function afficheRes(tabsVer)
{
    const nbFautes = tabsVer.filter(elem => elem !== true).length;
    var note=15-nbFautes;
    let score = document.querySelector("#score h3");
    let divScore = document.querySelector("#score");
    if(nbFautes==0){
        score.textContent="Félicitation , Vous avez bien terminé le quiz, votre score 15/15 !";
        divScore.style.left="0%";
        divScore.style.transition="left 1s ease-in-out";
               
    }
    else if(nbFautes>=8){
        score.textContent="Faites un effort, votre score "+note+"/15 !";
        divScore.style.left="0%";
        divScore.style.transition="left 1s ease-in-out";
    }
    else if(nbFautes<8)
    {
        score.textContent="Presque , faites encore un effort "+note+"/15 !";
        divScore.style.left="0%";
        divScore.style.transition="left 1s ease-in-out";
    }

}

cachePopBoxGame();
function cachePopBoxGame()
{
    var span = document.querySelector("#score span");
    var divScore = document.querySelector("#score");
    span.onclick=function(){
        divScore.style.left="-120%";
        window.location="game.html";
    };
}



function defilerQuandClickInput()
{
   var valeur = document.documentElement.scrollTop;
   valeur+=220;
   document.documentElement.scrollTop=valeur;
}

disableInput();
function disableInput()
{
    var input = document.querySelectorAll("input[type='checkbox']");
    for(let i=0;i<input.length;i++)
    {
        input[i].onclick=function(e){
            var name = e.target.name;
            e.target.parentNode.style.backgroundColor="#19587D";
            var inputS = document.querySelectorAll("input[name='"+name+"']");
            for(let j=0;j<inputS.length;j++)
                inputS[j].disabled="true";
            defilerQuandClickInput();
        }
    }
}

scrollerLogosReseauSc();
function scrollerLogosReseauSc()
{
    var logos = document.querySelector(".logo-reseaux-sc");
    window.addEventListener("scroll",()=>{
    const {scrollTop} = document.documentElement;
    if(scrollTop>320)
        logos.style.top=scrollTop+"px";
    });
}