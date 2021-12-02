


function verificar(){
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let resultado = document.getElementById('resultado');

if(number1 > number2){
    
    resultado.innerHTML=(`maior numero é ${number1}`)
    

}
else if (number2>number1){
     resultado.innerHTML=(`maior numero é ${number2}`)

}
else if (number1=number2){
    resultado.innerHTML=(`nesse caso ambos numeros tem o mesmo valor`)

}
    
  }

function maior2(){
    let clicar1 = parseInt(document.getElementById('clicar1').value);
    let resultado2 = document.getElementById("resultado2");


if(clicar1 > 0){
    resultado2.innerHTML = (`o numero ${clicar1} é positivo  !!!`)
}
else if (clicar1 <0){
    resultado2.innerHTML = (`o numero  ${clicar1} é negativo!!!`)

} else if (clicar1=== 0){
    resultado2.innerHTML=(`o numero  ${clicar1} é neutro`)
}
    
    
    
 }

 function atividade(){
     let letra = String(document.getElementById('letra').value);
     let resultado3 =document.getElementById('resultado3');
   
     


if(letra== 'm'){
    resultado3.innerHTML=(`o sexo é masculino`)

} else if(letra =='f'){
   resultado3.innerHTML=(`o sexo é feminino`)
} 
else {
    resultado3.innerHTML=(`sexo infinido`)
} 

    
 }

 function exame(){
     let media = parseInt(document.getElementById('media').value);
     let nota = document.getElementById('nota');
    console.log('etapa1')
    
    if(media == 10){
        nota.innerHTML=(`você teve aprovação distinta`)
   console.log('etapa2') 
} else if(media < 7){
         nota.innerHTML=(`você foi reprovado sua nota é  ${media}`)
    console.log('etapa3')
} else if(media >=7){
    nota.innerHTML=(`você foi aprovado sua nota é ${media}`)
}
 
}


function vogal(){
    let letra2 = String(document.getElementById('letra2').value);
    let resultado4 = document.getElementById('resultado4')


if(letra2 == 'a' || letra2== 'e' || letra2== 'i' || letra2== 'o' || letra2== 'u' ){
    resultado4.innerHTML = (`sua letra é uma vogal`)
} else{
    resultado4.innerHTML=(`sua letra é uma consoante`)
}

}
function box(){
    let legal= parseInt(document.getElementById('legal').value);
    let legal2= parseInt(document.getElementById('legal2').value);
    let legal3= parseInt(document.getElementById('legal3').value);
    let resultado5= document.getElementById('resultado5')
    let resultado6= document.getElementById(`resultado6`)
    if(legal > legal2 && legal > legal3 ){
        resultado5.innerHTML=(`o  maior numero  é ${legal} `)

    }else if(legal2 > legal && legal2 > legal3 ){
        resultado5.innerHTML=(`o maior numero é ${legal2}`)
    }else if (legal3 > legal && legal3 > legal2){
        resultado5.innerHTML=(`o maior numero é ${legal3}`)
    } if (legal<legal2 &&  legal<legal3){
        resultado6.innerHTML=(`o menor numero é ${legal}`)
    } else if(legal2<legal && legal2<legal3){
        resultado6.innerHTML=(`o menor numero é ${legal2}`)
    }else if (legal3<legal2 && legal3<legal){
        resultado6.innerHTML=(`o menor numero é  ${legal3}`)
    }

  }
  
  
  function horario(){
      let turno = String(document.getElementById('turno').value)
      let turnomvn =document.getElementById('turnomvn')
  
     if(turno == 'M' || turno == 'm'){
         turnomvn.innerHTML=(`   BOM DIA, SEU TURNO É O MATUTINO`)
     
        } else if(turno =='V' || turno =='v'){
            turnomvn.innerHTML=(` BOA TARDE, SEU TURNO É O VESPERTINO`)
        
        } else if (turno == 'N'|| turno  =='n'){
            turnomvn.innerHTML=(` BOA NOITE, SEU TURNO É O NOTURNO`)
        }  else{
            turnomvn.innerHTML=(`Valor inválido`)
        }
    
    }
    function preço(){
    let produto= parseInt(document.getElementById('produto').value);
    let produto2= parseInt(document.getElementById('produto2').value);
    let produto3= parseInt(document.getElementById('produto3').value);
    let resultado7= document.getElementById('resultado7');


  if(produto<produto2 && produto<produto3){
      resultado7.innerHTML=(`o produto que voce deve comprar é o produto A`)
  } else if(produto2 < produto && produto2<produto3){
      resultado7.innerHTML=(`produto que voce deve comprar é o produto B`)
  } else if (produto3< produto && produto3 < produto2){
      resultado7.innerHTML=(`produto que voce deve comprar é o produto C`)
  }

   
}