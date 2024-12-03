var perguntas = []
var respostas = []
perguntaAtual = 0

function usaPerguntas(data){
    console.log(data)
}

async function fetchData(){
    try{
        const response = await fetch('./scripts/questionario/questoes.json')
        const data = await response.json()

        usaPerguntas(data)
        perguntas = data
    }
    catch(error){
        console.error('Erro: '+error)
    }
}

// window.onload = function(){    
//     console.log('fdfs')
//     // alert('h')
// }

function mudaPergunta(){
    let alternativaMarcada
    alternativas_elem.forEach((elem)=>{
        if(elem.checked){
            alternativaMarcada = Number(elem.value)
        }
    })
    if(alternativaMarcada!=undefined){
        respostas.push(alternativaMarcada)
        perguntaAtual++
        if(10>perguntaAtual){
            console.log('aqui') 
            pergunta_elem.innerHTML = perguntas.filter(elem=>elem.id == perguntaAtual+1)[0].questao
            alternativas_elem.forEach((elem)=>{
                elem.checked = false 
            })
        }
        else{
            // alert('acabou')
            window.location.href = '../../pos_questionario.html';
            //window.location.href = '../../pos_questionario.html';


        }
        if(perguntaAtual == 9){
            botaoPergunta_elem.value = "Finalizar"
            botaoPergunta_elem.style = "padding: 0.5em 1.5em;"+
                "border-radius: 1.5em;"+
                "font-size: 15pt;"
        }
    }
}

const form_group_elem = document.querySelector('main div.form-group')
const pergunta_elem = form_group_elem.querySelector('h2')
const alternativas_elem = form_group_elem.querySelectorAll('div div input[type=radio]')
const botaoPergunta_elem = form_group_elem.querySelector('input[type=button]')

fetchData()