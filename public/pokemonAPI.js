const buton = document.querySelector('#button')

function maisUm (){
    
    //Variaveis que pega o id da tegs
    let img = document.querySelector('#img')
    let h3 = document.querySelector('#h3')
    let input = document.querySelector('#input').value ++ 
    let p = document.querySelector('#sub')
    let p2 = document.querySelector('#sub2')
    let xhttp = new XMLHttpRequest()

    //condição que verifica se o numero digitado é maior que 0 caso seja maior ele execultara
    if(input > 0 && input >= 1){ 
        xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${input}`)
        xhttp.send()

        xhttp.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                let dataPokemon = JSON.parse(this.responseText)
                p.innerHTML = `<button class="button2" onclick="menosUm()">Anterior</button>`
                p2.innerHTML = `<button class="button2" onclick="maisUm()">Proximo</button>`
                img.setAttribute("src", dataPokemon.sprites.front_default)
                h3.textContent = innerHTML = `${dataPokemon.name}`
            }
    }
    
    //Esse metodo so ira ser execultado se o número digitado for igual a 0
    }else{ 
        h3.innerHTML = '<b>Você deve colocar um número acima de 0, EX: 1 2 3!</b>'
    }
    
}

//essa função é chamada apos ser acionado do botão procimo
function menosUm (){

    let img = document.querySelector('#img')
    let h3 = document.querySelector('#h3')
    let input = document.querySelector('#input').value -- 
    let p = document.querySelector('#sub')
    let p2 = document.querySelector('#sub2')
    let xhttp = new XMLHttpRequest()
    if(input > 0 && input >= 1){
        xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${input}`)
        xhttp.send()

        xhttp.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                let dataPokemon = JSON.parse(this.responseText)
                p.innerHTML = `<button class="button2" onclick="menosUm()">Anterior</button>`
                p2.innerHTML = `<button class="button2" onclick="maisUm()">Proximo</button>`
                img.setAttribute("src", dataPokemon.sprites.front_default)
                h3.textContent = innerHTML = `${dataPokemon.name}`
            }
    }
    
    }else{
        h3.innerHTML = '<b>Você deve colocar um número acima de 0, EX: 1 2 3!</b>'
    }
    
}
//aqui foi atribuido o evento 'click' a variavel buton, ao ser clicado ele chamara o primero pokemon escolindo pelo número digitado
buton.addEventListener('click', () => {
    let img = document.querySelector('#img')
    let h3 = document.querySelector('#h3')
    let input = document.querySelector('#input').value
    let p = document.querySelector('#sub')
    let xhttp = new XMLHttpRequest()

    //condição que verifica se o numero digitado é maior que 0 caso seja maior ele execultara
    if(input > 0 && input >= 1){
        xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${input}`) //esse input traz o valor que você digitou e concatena com o link
        xhttp.send()

        xhttp.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                let dataPokemon = JSON.parse(this.responseText)
                p.innerHTML = `<button class="button" onclick="maisUm()">Proximo</button>`
                img.setAttribute("src", dataPokemon.sprites.front_default)
                h3.textContent = innerHTML = `${dataPokemon.name}`
            }
    }
    
    }else{
        h3.innerHTML = '<b>Você deve colocar um número acima de 0, EX: 1 2 3!</b>'
    }
})
