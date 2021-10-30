let articleDe = {
   moeda: document.querySelector('.moedas'),
   temperatura: document.querySelector('.temperaturas'),

   peso: document.querySelector(".peso"),
   distancia: document.querySelector('.distancia')
}

let setorPara = {
   pegarMoedaInserida: document.querySelector('#valor-moeda-a-converter'),
   pegarTemperaturaInserida: document.querySelector('#temperatura-a-converter'),

   pegarPesoInserido: document.querySelector('#peso-a-converter'),
   pegarDistanciaInserida: document.querySelector('#distancia-a-converter'),

   escolherMoedaInicial: document.querySelector('#moeda-inicial'),
   escolherTemperaturaInicial: document.querySelector('#temperatura-inicial'),

   escolherPesoInicial: document.querySelector('#peso-inicial'),
   escolherDistanciaInicial: document.querySelector('#distancia-inicial'),

   converterMoeda: document.querySelector('#converter-moeda'),
   converterTemperatura: document.querySelector('#converter-temperatura'),

   converterPeso: document.querySelector('#converter-peso'),
   converterDistancia: document.querySelector('#converter-distancia'),

   limparResultadoDaMoeda: document.querySelector('.limpar-resultado-moeda'),
   limparResultadoDaTemperatura: document.querySelector('.limpar-resultado-temperatura'),

   limparResultadoDoPeso: document.querySelector('.limpar-resultado-peso'),
   limparResultadoDaDistancia: document.querySelector('.limpar-resultado-distancia')
}

let setaQue = {
   ativaConversorDeTemperatura: document.querySelector('#ativa-conversor-temperatura'),

   ativaConversorDeMoeda: document.querySelector('#ativa-conversor-moedas'),
   ativaConversorDePeso: document.querySelector("#ativa-conversor-peso"),

   voltaConversorDeTemperatura: document.querySelector('#volta-conversor-temperatura'),
   ativaConversorDeDistancia: document.querySelector("#ativa-conversor-distancia"),

   voltaConversorDePeso: document.querySelector("#volta-conversor-peso"),
}

let modifica = {
   realFinal: document.querySelector('.real-final'),
   dolarFinal: document.querySelector('.dolar-final'),
   euroFinal: document.querySelector('.euro-final'),

   bitcoinFinal: document.querySelector('.bitcoin-final'),
   ethereumFinal: document.querySelector('.ethereum-final'),
   todasAsMoedas: document.querySelector('.todas-as-moedas'),

   fahrenheitFinal: document.querySelector('.fahrenheit-final'),
   celsiusFinal: document.querySelector('.celsius-final'),

   kelvinFinal: document.querySelector('.kelvin-final'),
   todasAsTemperaturas: document.querySelector('.todas-as-temperaturas'),

   toneladaFinal: document.querySelector('.tonelada-final'),
   quilogramaFinal: document.querySelector('.quilograma-final'),

   gramaFinal: document.querySelector('.grama-final'),
   miligramaFinal: document.querySelector('.miligrama-final'),

   todosOsPesos: document.querySelector('.todos-os-pesos'),

   anosLuzFinal: document.querySelector('.anos-luz-final'),
   quilometroFinal: document.querySelector('.quilometro-final'),

   metroFinal: document.querySelector('.metro-final'),
   centimetroFinal: document.querySelector('.centimetro-final'),

   milimetroFinal: document.querySelector('.milimetro-final'),
   todasAsDistancias: document.querySelector('.todas-as-distancias'),
}

let exibe = {
   moedaConvertida: document.querySelector(".resultado-moeda"),
   temperaturaConvertida: document.querySelector(".resultado-temperatura"),

   pesoConvertido: document.querySelector('.resultado-peso'),
   distanciaConvertida: document.querySelector('.resultado-distancia')
}

setaQue.ativaConversorDeTemperatura.onclick = () => {
   articleDe.moeda.classList.toggle('active')
   articleDe.temperatura.classList.add('active')
}

setaQue.ativaConversorDeMoeda.onclick = () => {
   articleDe.temperatura.classList.toggle("active")
   articleDe.moeda.classList.add("active")
}

setaQue.ativaConversorDePeso.onclick = () => {
   articleDe.temperatura.classList.toggle('active')
   articleDe.peso.classList.add("active")
}

setaQue.voltaConversorDeTemperatura.onclick = () => {
   articleDe.peso.classList.toggle("active")
   articleDe.temperatura.classList.add("active")
}

setaQue.ativaConversorDeDistancia.onclick = () => {
   articleDe.peso.classList.toggle('active')
   articleDe.distancia.classList.add("active")
}

setaQue.voltaConversorDePeso.onclick = () => {
   articleDe.distancia.classList.remove("active")
   articleDe.peso.classList.add('active')
}

//Conversor de moedas
setorPara.pegarMoedaInserida.onkeypress = function (pressionaTecla) {
   if (pressionaTecla.key == '-' || pressionaTecla.key == '+' || pressionaTecla.key == '/' || pressionaTecla.key == '*' || pressionaTecla.key == '!' || pressionaTecla.key == '%' || pressionaTecla.key == '(' || pressionaTecla.key == ')' || pressionaTecla.key == ':' || pressionaTecla.key == ',') {
      pressionaTecla.preventDefault()
   }
}
setorPara.pegarMoedaInserida.onpaste = function (desabilitaColar) { desabilitaColar.preventDefault() }

setorPara.escolherMoedaInicial.onchange = () => {
   var moedaInicial = document.querySelector('#moeda-inicial').value
   var moedaFinal = document.querySelector('#moeda-final')

   if (moedaInicial == 'real') {
      ativaDolarFinal()
      ativaEuroFinal()

      ativaBtcFinal()
      ativaEthFinal()
      modifica.realFinal.style.display = 'none'

      if (moedaFinal.value == 'todas-as-moedas') {
         moedaFinal.value = 'todas-as-moedas'
      }

      else if (moedaFinal.value == 'real') {
         moedaFinal.value = 'dolar'
      }

      else {
         dolarValorFinal()
         euroValorFinal()
         bitcoinValorFinal()
         ethereumValorFinal()
      }
   }

   else if (moedaInicial == 'dolar') {
      ativaRealFinal()
      ativaEuroFinal()

      ativaBtcFinal()
      ativaEthFinal()
      modifica.dolarFinal.style.display = 'none'

      if (moedaFinal.value != 'todas-as-moedas' && moedaFinal.value != 'real' && moedaFinal.value != 'dolar') {
         euroValorFinal()
         bitcoinValorFinal()
         ethereumValorFinal()
      }

      else if (moedaFinal.value == 'dolar') {
         moedaFinal.value = 'real'
      }

      else { selecionaTodasOuSomenteReal() }
   }

   else if (moedaInicial == 'euro') {
      ativaRealFinal()
      ativaDolarFinal()

      ativaBtcFinal()
      ativaEthFinal()
      modifica.euroFinal.style.display = 'none'

      if (moedaFinal.value != 'todas-as-moedas' && moedaFinal.value != 'real' && moedaFinal.value != 'euro') {
         dolarValorFinal()
         bitcoinValorFinal()
         ethereumValorFinal()
      }

      else if (moedaFinal.value == 'euro') {
         moedaFinal.value = 'real'
      }

      else { selecionaTodasOuSomenteReal() }
   }

   else if (moedaInicial == 'bitcoin') {
      ativaRealFinal()
      ativaDolarFinal()
      ativaEuroFinal()

      ativaEthFinal()
      modifica.bitcoinFinal.style.display = 'none'

      if (moedaFinal.value != 'todas-as-moedas' && moedaFinal.value != 'real' && moedaFinal.value != 'bitcoin') {
         dolarValorFinal()
         euroValorFinal()
         ethereumValorFinal()
      }

      else if (moedaFinal.value == 'bitcoin') {
         moedaFinal.value = 'real'
      }

      else { selecionaTodasOuSomenteReal() }
   }

   else if (moedaInicial == 'ethereum') {
      ativaRealFinal()
      ativaDolarFinal()
      ativaEuroFinal()

      ativaBtcFinal()
      modifica.ethereumFinal.style.display = 'none'

      if (moedaFinal.value != 'todas-as-moedas' && moedaFinal.value != 'real' && moedaFinal.value != 'ethereum') {
         dolarValorFinal()
         euroValorFinal()
         bitcoinValorFinal()
      }

      else if (moedaFinal.value == 'ethereum') {
         moedaFinal.value = 'real'
      }

      else { selecionaTodasOuSomenteReal() }
   }

   function selecionaTodasOuSomenteReal() {
      if (moedaFinal.value == 'todas-as-moedas') { moedaFinal.value = 'todas-as-moedas' }
      else { moedaFinal.value = 'real' }
   }

   function dolarValorFinal() { if (moedaFinal.value == 'dolar') { moedaFinal.value = 'dolar' } }
   function euroValorFinal() { if (moedaFinal.value == 'euro') { moedaFinal.value = 'euro' } }

   function bitcoinValorFinal() { if (moedaFinal.value == 'bitcoin') { moedaFinal.value = 'bitcoin' } }
   function ethereumValorFinal() { if (moedaFinal.value == 'ethereum') { moedaFinal.value = 'ethereum' } }

   function ativaRealFinal() { modifica.realFinal.style.display = 'block' }
   function ativaDolarFinal() { modifica.dolarFinal.style.display = 'block' }

   function ativaEuroFinal() { modifica.euroFinal.style.display = 'block' }
   function ativaBtcFinal() { modifica.bitcoinFinal.style.display = 'block' }
   function ativaEthFinal() { modifica.ethereumFinal.style.display = 'block' }
}

setorPara.converterMoeda.onclick = () => {
   let inputMoeda = document.querySelector('#valor-moeda-a-converter').value

   let moeda = {
      inicial: document.querySelector('#moeda-inicial').value,
      final: document.querySelector('#moeda-final').value
   }

   if (inputMoeda == '') {
      exibe.moedaConvertida.innerHTML = 'Que vazio 😗'
      mostraResultadoMoedasMaisApagada()
   }

   else if (inputMoeda <= 0) {
      exibe.moedaConvertida.innerHTML = 'Não quero converter com zero 😑'
      mostraResultadoMoedasMaisApagada()
   }

   else if (inputMoeda > 0) {
      if (moeda.inicial == 'real') {

         var converte = {
            praDolar: (inputMoeda / 5.61).toFixed(2),
            praEuro: (inputMoeda / 6.55).toFixed(2),

            praBtc: (inputMoeda / 345992.07).toFixed(8),
            praEth: (inputMoeda / 23923.56).toFixed(8)
         }

         if (moeda.final == 'dolar') {
            exibe.moedaConvertida.innerHTML = `$ ${converte.praDolar}`
         }

         else if (moeda.final == 'euro') {
            exibe.moedaConvertida.innerHTML = `&euro; ${converte.praEuro}`
         }

         else if (moeda.final == 'bitcoin') {
            exibe.moedaConvertida.innerHTML = `&#x20BF; ${converte.praBtc}`
         }

         else if (moeda.final == 'ethereum') {
            exibe.moedaConvertida.innerHTML = `ETH ${converte.praEth}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            exibe.moedaConvertida.innerHTML = `$ ${converte.praDolar} | &euro; ${converte.praEuro} <br> &#x20BF; ${converte.praBtc} <br> ETH ${converte.praEth}`
         }
      }

      else if (moeda.inicial == 'dolar') {
         var converte = {
            praReal: (inputMoeda * 5.61).toFixed(2),
            praEuro: (inputMoeda * 0.855).toFixed(2),

            praBtc: (inputMoeda * 0.000016).toFixed(6),
            praEth: (inputMoeda * 0.000236).toFixed(6)
         }

         if (moeda.final == 'real') {
            exibe.moedaConvertida.innerHTML = `R$ ${converte.praReal}`
         }

         else if (moeda.final == 'euro') {
            exibe.moedaConvertida.innerHTML = `&euro; ${converte.praEuro}`
         }

         else if (moeda.final == 'bitcoin') {
            exibe.moedaConvertida.innerHTML = `&#x20BF; ${converte.praBtc}`
         }

         else if (moeda.final == 'ethereum') {
            exibe.moedaConvertida.innerHTML = `ETH ${converte.praEth}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            exibe.moedaConvertida.innerHTML = `R$ ${converte.praReal} | &euro; ${converte.praEuro} <br> &#x20BF; ${converte.praBtc} <br> ETH ${converte.praEth}`
         }
      }

      else if (moeda.inicial == 'euro') {
         var converte = {
            praReal: (inputMoeda * 6.54).toFixed(2),
            praDolar: (inputMoeda * 1.1685).toFixed(2),

            praBtc: (inputMoeda * 0.00001909).toFixed(8),
            praEth: (inputMoeda * 0.00027646).toFixed(8)
         }

         if (moeda.final == 'real') {
            exibe.moedaConvertida.innerHTML = `R$ ${converte.praReal}`
         }

         else if (moeda.final == 'dolar') {
            exibe.moedaConvertida.innerHTML = `$ ${converte.praDolar}`
         }

         else if (moeda.final == 'bitcoin') {
            exibe.moedaConvertida.innerHTML = `&#x20BF; ${converte.praBtc}`
         }

         else if (moeda.final == 'ethereum') {
            exibe.moedaConvertida.innerHTML = `ETH ${converte.praEth}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            exibe.moedaConvertida.innerHTML = `$ ${converte.praDolar} | R$ ${converte.praReal} <br> &#x20BF; ${converte.praBtc} <br> ETH ${converte.praEth}`
         }
      }

      else if (moeda.inicial == 'bitcoin') {
         var converte = {
            praDolar: (inputMoeda * 61202.88).toFixed(6),
            praEuro: (inputMoeda * 52370.73).toFixed(6),

            praReal: (inputMoeda * 342614.32).toFixed(6),
            praEth: (inputMoeda * 14.48).toFixed(4)
         }

         if (moeda.final == 'dolar') {
            exibe.moedaConvertida.innerHTML = `$ ${converte.praDolar}`
         }

         else if (moeda.final == 'euro') {
            exibe.moedaConvertida.innerHTML = `&euro; ${converte.praEuro}`
         }

         else if (moeda.final == 'real') {
            exibe.moedaConvertida.innerHTML = `R$ ${converte.praReal}`
         }

         else if (moeda.final == 'ethereum') {
            exibe.moedaConvertida.innerHTML = `ETH ${converte.praEth}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            exibe.moedaConvertida.innerHTML = `$ ${converte.praDolar} <br> &euro; ${converte.praEuro} <br> R$ ${converte.praReal} <br> ETH ${converte.praEth}`
         }
      }

      else if (moeda.inicial == 'ethereum') {
         var converte = {
            praReal: (inputMoeda * 23587.71).toFixed(4),
            praDolar: (inputMoeda * 4224.96).toFixed(4),

            praEuro: (inputMoeda * 3605.33).toFixed(4),
            praBtc: (inputMoeda * 0.069045).toFixed(6)
         }

         if (moeda.final == 'dolar') {
            exibe.moedaConvertida.innerHTML = `$ ${converte.praDolar}`
         }

         else if (moeda.final == 'euro') {
            exibe.moedaConvertida.innerHTML = `&euro; ${converte.praEuro}`
         }

         else if (moeda.final == 'bitcoin') {
            exibe.moedaConvertida.innerHTML = `&#x20BF; ${converte.praBtc}`
         }

         else if (moeda.final == 'real') {
            exibe.moedaConvertida.innerHTML = `R$ ${converte.praReal}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            exibe.moedaConvertida.innerHTML = `$ ${converte.praDolar} <br> &euro; ${converte.praEuro} <br> R$ ${converte.praReal} <br> &#x20BF; ${converte.praBtc}`
         }
      }

      colorBlackMoeda()
      function colorBlackMoeda() { exibe.moedaConvertida.style.color = 'black' }

      setorPara.limparResultadoDaMoeda.classList.toggle('desativado')
      setorPara.limparResultadoDaMoeda.classList.add('active')
   }
}

setorPara.limparResultadoDaMoeda.onclick = () => {
   var inputMoeda = document.querySelector('#valor-moeda-a-converter')

   inputMoeda.value = ''
   exibe.moedaConvertida.innerHTML = 'Aconchego do resultado 😊'

   if (window.innerWidth > 700 && inputMoeda.value.length == 0) {
      inputMoeda.style.fontSize = '17px'
   }

   else if (window.innerWidth <= 700 && inputMoeda.value.length == 0) {
      inputMoeda.style.fontSize = '16px'
   }

   mostraResultadoMoedasMaisApagada()
   setorPara.limparResultadoDaMoeda.classList.toggle('active')
   setorPara.limparResultadoDaMoeda.classList.add('desativado')
}
function mostraResultadoMoedasMaisApagada() { exibe.moedaConvertida.style.color = 'rgba(0,0,0,.5)' }

//Conversor de temperaturas
setorPara.pegarTemperaturaInserida.onkeypress = function (insereTemperatura) {
   var inputTemperaturaInicial = document.querySelector('#temperatura-a-converter')

   if (insereTemperatura.key == '/' || insereTemperatura.key == '*' || insereTemperatura.key == '!' || insereTemperatura.key == '%' || insereTemperatura.key == '(' || insereTemperatura.key == ')' || insereTemperatura.key == ':' || insereTemperatura.key == ',' || insereTemperatura.key == '+') {
      insereTemperatura.preventDefault()
   }

   else if (inputTemperaturaInicial.value.length > 0 && insereTemperatura.key == '-') {
      insereTemperatura.preventDefault()
   }
}

setorPara.pegarTemperaturaInserida.onpaste = function (desabilitaColarNaTemperatura) {
   desabilitaColarNaTemperatura.preventDefault()
}

setorPara.escolherTemperaturaInicial.onchange = () => {
   var temperaturaInicial = document.querySelector('#temperatura-inicial').value
   var temperaturaFinal = document.querySelector('#temperatura-final')

   if (temperaturaInicial == 'celsius') {
      ativaFahFinal()
      ativaKelvinFinal()
      modifica.celsiusFinal.style.display = 'none'

      if (temperaturaFinal.value != 'celsius') {
         selectFahFinal()
         selectKelvinFinal()
         selectTodasAsTemperaturas()
      }

      else {
         temperaturaFinal.value = 'fahrenheit'
      }
   }

   else if (temperaturaInicial == 'fahrenheit') {
      ativaCelsiusFinal()
      ativaKelvinFinal()
      modifica.fahrenheitFinal.style.display = 'none'

      if (temperaturaFinal.value != 'fahrenheit') {
         selectCelsiusFinal()
         selectKelvinFinal()
         selectTodasAsTemperaturas()
      }

      else {
         temperaturaFinal.value = 'celsius'
      }
   }

   else if (temperaturaInicial == 'kelvin') {
      ativaFahFinal()
      ativaCelsiusFinal()
      modifica.kelvinFinal.style.display = 'none'

      if (temperaturaFinal.value != 'kelvin') {
         selectCelsiusFinal()
         selectFahFinal()
         selectTodasAsTemperaturas()
      }

      else {
         temperaturaFinal.value = 'celsius'
      }
   }

   function ativaFahFinal() { modifica.fahrenheitFinal.style.display = 'block' }
   function ativaCelsiusFinal() { modifica.celsiusFinal.style.display = 'block' }
   function ativaKelvinFinal() { modifica.kelvinFinal.style.display = 'block' }

   function selectCelsiusFinal() { if (temperaturaFinal.value == 'celsius') { temperaturaFinal.value = 'celsius' } }
   function selectFahFinal() { if (temperaturaFinal.value == 'fahrenheit') { temperaturaFinal.value = 'fahrenheit' } }

   function selectKelvinFinal() { if (temperaturaFinal.value == 'kelvin') { temperaturaFinal.value = 'kelvin' } }
   function selectTodasAsTemperaturas() { if (temperaturaFinal.value == 'todas-as-temperaturas') { temperaturaFinal.value = 'todas-as-temperaturas' } }
}

setorPara.converterTemperatura.onclick = () => {
   var inputTemperatura = document.querySelector('#temperatura-a-converter')

   var temperatura = {
      inicial: document.querySelector('#temperatura-inicial').value,
      final: document.querySelector('#temperatura-final').value
   }

   if (inputTemperatura.value == '' || inputTemperatura.value == '--' || inputTemperatura.value == '-' || inputTemperatura.value < 0 && inputTemperatura.value > -0.1) {
      exibe.temperaturaConvertida.innerHTML = 'Melhor tentarmos com outro valor 🙄'
      mostraResultadoTemperaturaMaisApagado()
   }

   else {
      if (temperatura.inicial == 'celsius') {
         var converte = {
            paraFah: (((inputTemperatura.value / 5) * 9) + 32).toFixed(2),
            paraKelvin: (Number(inputTemperatura.value) + 273.15).toFixed(2)
         }

         if (temperatura.final == 'fahrenheit') {
            exibe.temperaturaConvertida.innerHTML = `${converte.paraFah} °F`
         }

         else if (temperatura.final == 'kelvin') {
            exibe.temperaturaConvertida.innerHTML = `${converte.paraKelvin} K`
         }

         else if (temperatura.final == 'todas-as-temperaturas') {
            exibe.temperaturaConvertida.innerHTML = `${converte.paraFah} °F | ${converte.paraKelvin} K`
         }
      }

      if (temperatura.inicial == 'fahrenheit') {
         var converte = {
            paraCelsius: ((inputTemperatura.value - 32) / 1.8).toFixed(2),
            paraKelvin: ((((inputTemperatura.value - 32) / 1.8) + 273.15)).toFixed(2)
         }

         if (temperatura.final == 'celsius') {
            exibe.temperaturaConvertida.innerHTML = `${converte.paraCelsius} &#x2103;`
         }

         else if (temperatura.final == 'kelvin') {
            exibe.temperaturaConvertida.innerHTML = `${converte.paraKelvin} K`
         }

         else if (temperatura.final == 'todas-as-temperaturas') {
            exibe.temperaturaConvertida.innerHTML = `${converte.paraCelsius} &#x2103; | ${converte.paraKelvin} K`
         }
      }

      if (temperatura.inicial == 'kelvin') {
         var converte = {
            paraCelsius: (Number(inputTemperatura.value) - 273.15).toFixed(2),
            paraFah: (((inputTemperatura.value * 9) / 5) - 459.67).toFixed(2)
         }

         if (temperatura.final == 'celsius') {
            exibe.temperaturaConvertida.innerHTML = `${converte.paraCelsius} &#x2103;`
         }

         else if (temperatura.final == 'fahrenheit') {
            exibe.temperaturaConvertida.innerHTML = `${converte.paraFah} °F`
         }

         else if (temperatura.final == 'todas-as-temperaturas') {
            exibe.temperaturaConvertida.innerHTML = `${converte.paraCelsius} &#x2103; | ${converte.paraFah} °F`
         }
      }

      colorBlackTemperatura()
      function colorBlackTemperatura() { exibe.temperaturaConvertida.style.color = 'black' }

      setorPara.limparResultadoDaTemperatura.classList.toggle('desativado')
      setorPara.limparResultadoDaTemperatura.classList.add('active')

   }
}

setorPara.limparResultadoDaTemperatura.onclick = () => {
   var inputTemperatura = document.querySelector('#temperatura-a-converter')

   inputTemperatura.value = ''
   exibe.temperaturaConvertida.innerHTML = 'Aconchego do resultado 😊'

   if (window.innerWidth > 700 && inputTemperatura.value.length == 0) {
      inputTemperatura.style.fontSize = '17px'
   }

   else if (window.innerWidth <= 700 && inputTemperatura.value.length == 0) {
      inputTemperatura.style.fontSize = '16px'
   }

   mostraResultadoTemperaturaMaisApagado()
   setorPara.limparResultadoDaTemperatura.classList.toggle('active')
   setorPara.limparResultadoDaTemperatura.classList.add('desativado')
}
function mostraResultadoTemperaturaMaisApagado() { exibe.temperaturaConvertida.style.color = 'rgba(0,0,0,.5)' }

//Conversor de peso
setorPara.pegarPesoInserido.onkeypress = function (inserePeso) {
   if (inserePeso.key == '/' || inserePeso.key == '*' || inserePeso.key == '!' || inserePeso.key == '%' || inserePeso.key == '(' || inserePeso.key == ')' || inserePeso.key == ':' || inserePeso.key == ',' || inserePeso.key == '+' || inserePeso.key == '-') {
      inserePeso.preventDefault()
   }
}

setorPara.pegarPesoInserido.onpaste = function (desabilitaColarNoPeso) {
   desabilitaColarNoPeso.preventDefault()
}

setorPara.escolherPesoInicial.onchange = () => {
   var pesoInicial = document.querySelector('#peso-inicial').value
   var pesoFinal = document.querySelector('#peso-final')

   if (pesoInicial == 'tonelada') {
      ativaQuiloFinal()
      ativaGramaFinal()

      ativaMiligramaFinal()
      modifica.toneladaFinal.style.display = 'none'

      if (pesoFinal.value != 'tonelada') {
         selectQuiloFinal()
         selectGramaFinal()
         selectMiligramaFinal()
         selectTodosOsPesos()
      }

      else {
         pesoFinal.value = 'quilograma'
      }
   }

   else if (pesoInicial == 'quilograma') {
      ativaToneladaFinal()
      ativaGramaFinal()

      ativaMiligramaFinal()
      modifica.quilogramaFinal.style.display = 'none'

      if (pesoFinal.value != 'quilograma') {
         selectToneladaFinal()
         selectGramaFinal()
         selectMiligramaFinal()
         selectTodosOsPesos()
      }

      else {
         pesoFinal.value = 'tonelada'
      }
   }

   else if (pesoInicial == 'grama') {
      ativaToneladaFinal()
      ativaQuiloFinal()

      ativaMiligramaFinal()
      modifica.gramaFinal.style.display = 'none'

      if (pesoFinal.value != 'grama') {
         selectToneladaFinal()
         selectQuiloFinal()
         selectMiligramaFinal()
         selectTodosOsPesos()
      }

      else {
         pesoFinal.value = 'quilograma'
      }
   }

   else if (pesoInicial == 'miligrama') {
      ativaToneladaFinal()
      ativaQuiloFinal()

      ativaGramaFinal()
      modifica.miligramaFinal.style.display = 'none'

      if (pesoFinal.value != 'miligrama') {
         selectToneladaFinal()
         selectQuiloFinal()
         selectGramaFinal()
         selectTodosOsPesos()
      }

      else {
         pesoFinal.value = 'quilograma'
      }
   }

   function ativaToneladaFinal() { modifica.toneladaFinal.style.display = 'block' }
   function ativaQuiloFinal() { modifica.quilogramaFinal.style.display = 'block' }

   function ativaGramaFinal() { modifica.gramaFinal.style.display = 'block' }
   function ativaMiligramaFinal() { modifica.miligramaFinal.style.display = 'block' }

   function selectToneladaFinal() { if (pesoFinal.value == 'tonelada') { pesoFinal.value = 'tonelada' } }
   function selectQuiloFinal() { if (pesoFinal.value == 'quilograma') { pesoFinal.value = 'quilograma' } }
   function selectGramaFinal() { if (pesoFinal.value == 'grama') { pesoFinal.value = 'grama' } }

   function selectMiligramaFinal() { if (pesoFinal.value == 'miligrama') { pesoFinal.value = 'miligrama' } }
   function selectTodosOsPesos() { if (pesoFinal.value == 'todos-os-pesos') { pesoFinal.value = 'todos-os-pesos' } }
}

setorPara.converterPeso.onclick = () => {
   var inputPeso = document.querySelector('#peso-a-converter')

   var peso = {
      inicial: document.querySelector('#peso-inicial').value,
      final: document.querySelector('#peso-final').value
   }

   if (inputPeso.value == '0') {
      exibe.pesoConvertido.innerHTML = 'Zero não combina comigo 😅'
      mostrarResultadoPesoMaisApagado()
   }

   else if (inputPeso.value == '') {
      exibe.pesoConvertido.innerHTML = 'Thanos esteve aqui 😯'
      mostrarResultadoPesoMaisApagado()
   }

   else {
      if (peso.inicial == 'tonelada') {
         var converte = {

            praQuilo: (inputPeso.value * 1000).toFixed(2),
            praGrama: (inputPeso.value * 1000000).toExponential().replace(/e\+?/, ' x 10^'),
            praMiligrama: (inputPeso.value * 1000000000).toExponential().replace(/e\+?/, ' x 10^') 
         }

         if (peso.final == 'quilograma') {
            exibe.pesoConvertido.innerHTML = `${converte.praQuilo} kg`
         }

         else if (peso.final == 'grama') {
            exibe.pesoConvertido.innerHTML = `${converte.praGrama} g`
         }

         else if (peso.final == 'miligrama') {
            exibe.pesoConvertido.innerHTML = `${converte.praMiligrama} mg`
         }

         else if (peso.final == 'todos-os-pesos') {
            exibe.pesoConvertido.innerHTML = `${converte.praQuilo} kg <br> ${converte.praGrama} g <br> ${converte.praMiligrama} mg`
         }
      }

      if (peso.inicial == 'quilograma') {
         var converte = {
            praTonelada: (inputPeso.value * 0.001),
            praGrama: (inputPeso.value * 1000).toExponential().replace(/e\+?/, ' x 10^'),
            praMiligrama: (inputPeso.value * 1000000).toExponential().replace(/e\+?/, ' x 10^') 
         }

         if (peso.final == 'tonelada') {
            exibe.pesoConvertido.innerHTML = `${converte.praTonelada} t`
         }

         else if (peso.final == 'grama') {
            exibe.pesoConvertido.innerHTML = `${converte.praGrama} g`
         }

         else if (peso.final == 'miligrama') {
            exibe.pesoConvertido.innerHTML = `${converte.praMiligrama} mg`
         }

         else if (peso.final == 'todos-os-pesos') {
            exibe.pesoConvertido.innerHTML = `${converte.praTonelada} t <br> ${converte.praGrama} g <br> ${converte.praMiligrama} mg`
         }
      }

      if (peso.inicial == 'grama') {
         var converte = {
            praTonelada: (inputPeso.value * 0.0000001).toExponential().replace(/e\+?/, ' x 10^'),
            praQuilo: (inputPeso.value * 0.001).toExponential().replace(/e\+?/, ' x 10^'),
            praMiligrama: (inputPeso.value * 1000) 
         }

         if (peso.final == 'tonelada') {
            exibe.pesoConvertido.innerHTML = `${converte.praTonelada} t`
         }

         else if (peso.final == 'quilograma') {
            exibe.pesoConvertido.innerHTML = `${converte.praQuilo} kg`
         }

         else if (peso.final == 'miligrama') {
            exibe.pesoConvertido.innerHTML = `${converte.praMiligrama} mg`
         }

         else if (peso.final == 'todos-os-pesos') {
            exibe.pesoConvertido.innerHTML = `${converte.praTonelada} t <br> ${converte.praQuilo} kg <br> ${converte.praMiligrama} mg`
         }
      }

      if (peso.inicial == 'miligrama') {
         var converte = {
            praTonelada: (inputPeso.value * 1e-9).toExponential().replace(/e\+?/, ' x 10^'),
            praQuilo: (inputPeso.value * 1e-6).toExponential().replace(/e\+?/, ' x 10^'),
            praGrama: (inputPeso.value * 1e-3).toExponential().replace(/e\+?/, ' x 10^') 
         }

         if (peso.final == 'tonelada') {
            exibe.pesoConvertido.innerHTML = `${converte.praTonelada} t`
         }

         else if (peso.final == 'quilograma') {
            exibe.pesoConvertido.innerHTML = `${converte.praQuilo} kg`
         }

         else if (peso.final == 'grama') {
            exibe.pesoConvertido.innerHTML = `${converte.praGrama} g`
         }

         else if (peso.final == 'todos-os-pesos') {
            exibe.pesoConvertido.innerHTML = `${converte.praTonelada} t <br> ${converte.praQuilo} kg <br> ${converte.praGrama} g`
         }
      }

      colorBlackDoPeso()
      function colorBlackDoPeso() { exibe.pesoConvertido.style.color = 'black' }

      setorPara.limparResultadoDoPeso.classList.toggle('desativado')
      setorPara.limparResultadoDoPeso.classList.add('active')

   }
}

setorPara.limparResultadoDoPeso.onclick = () => {
   var inputPeso = document.querySelector('#peso-a-converter')

   inputPeso.value = ''
   exibe.pesoConvertido.innerHTML = 'Aconchego do resultado 😊'
   if (inputPeso.value.length == 0) { inputPeso.style.fontSize = '17px' }

   mostrarResultadoPesoMaisApagado()
   setorPara.limparResultadoDoPeso.classList.toggle('active')
   setorPara.limparResultadoDoPeso.classList.add('desativado')
}
function mostrarResultadoPesoMaisApagado() { exibe.pesoConvertido.style.color = 'rgba(0,0,0,.5)' }

//Conversor de distância
setorPara.pegarMoedaInserida.onkeydown = () => { ajustar_font_size() }
setorPara.pegarTemperaturaInserida.onkeydown = () => { ajustar_font_size() }

setorPara.pegarPesoInserido.onkeydown = () => { ajustar_font_size() }
setorPara.pegarDistanciaInserida.onkeydown = () => { ajustar_font_size() }

var moeda = 17
var temperatura = 17

var peso = 17
var distancia = 17

function ajustar_font_size() {
   let moedaInserida = document.querySelector('#valor-moeda-a-converter')
   let temperaturaInserida = document.querySelector("#temperatura-a-converter")

   let pesoInserido = document.querySelector('#peso-a-converter')
   let distanciaInserida = document.querySelector('#distancia-a-converter')

   if (moedaInserida.value.length <= 12) {
      moeda = 17
      moedaInserida.style.fontSize = '17px'
   }

   else if (moedaInserida.value.length >= 13 && moeda >= 8) {
      moeda--
      moedaInserida.style.fontSize = (moeda - .25) + 'px'
   }

   if (temperaturaInserida.value.length <= 12) {
      temperatura = 17
      temperaturaInserida.style.fontSize = '17px'
   }

   else if (temperaturaInserida.value.length >= 13 && temperatura >= 8) {
      temperatura--
      temperaturaInserida.style.fontSize = (temperatura - .25) + 'px'
   }

   if (pesoInserido.value.length <= 12) {
      peso = 17
      pesoInserido.style.fontSize = '17px'
   }

   else if (pesoInserido.value.length >= 13 && peso >= 8) {
      peso--
      pesoInserido.style.fontSize = (peso - .25) + 'px'
   }

   if (distanciaInserida.value.length <= 12) {
      distancia = 17
      distanciaInserida.style.fontSize = '17px'
   }

   else if (distanciaInserida.value.length >= 13 && distancia >= 8) {
      distancia--
      distanciaInserida.style.fontSize = (distancia - .25) + 'px'
   }
}