var setorPara = {
   ativarConversorTemperaturas: document.querySelector('#ativa-conversor-temperatura'),
   ativarConversorMoedas: document.querySelector('#ativa-conversor-moedas'),

   converterMoeda: document.querySelector('#converter-moeda'),
   converterTemperatura: document.querySelector('#converter-temperatura'),
}

var articleDas = {
   moedas: document.querySelector('.moedas'),
   temperaturas: document.querySelector('.temperaturas')
}

var mexePara = {
   pegarMoedaInserida: document.querySelector('#valor-moeda-a-converter'),
   pegarTemperaturaInserida: document.querySelector('#temperatura-a-converter'),

   escolherMoedaInicial: document.querySelector('#moeda-inicial'),
   escolherTemperaturaInicial: document.querySelector('#temperatura-inicial'),

   limparResultadoMoedas: document.querySelector('.limpar-resultado-moeda'),
   limparResultadoTemperatura: document.querySelector('.limpar-resultado-temperatura')
}

var altera = {
   realFinal: document.querySelector('.real-final'),
   dolarFinal: document.querySelector('.dolar-final'),
   euroFinal: document.querySelector('.euro-final'),

   bitcoinFinal: document.querySelector('.bitcoin-final'),
   ethereumFinal: document.querySelector('.ethereum-final'),
   todasAsMoedas: document.querySelector('.todas-as-moedas'),

   fahrenheitFinal: document.querySelector('.fahrenheit-final'),
   celsiusFinal: document.querySelector('.celsius-final'),
   kelvinFinal: document.querySelector('.kelvin-final'),
   todasAsTemperaturas: document.querySelector('.todas-as-temperaturas')
}

var resultadoDa = {
   moedaConvertida: document.querySelector(".resultado-moeda"),
   temperaturaConvertida: document.querySelector(".resultado-temperatura")
}

setorPara.converterMoeda.addEventListener('click', () => {
   var inputMoeda = document.querySelector('#valor-moeda-a-converter').value

   var moeda = {
      inicial: document.querySelector('#moeda-inicial').value,
      final: document.querySelector('#moeda-final').value
   }

   if (inputMoeda == '') { 
      resultadoDa.moedaConvertida.innerHTML = 'Que vazio 😗' 
   }

   else if (inputMoeda <= 0) { 
      resultadoDa.moedaConvertida.innerHTML = 'Não quero converter com zero 😑' 
   }

   else if (inputMoeda > 0) {
      if (moeda.inicial == 'real') {
         var converte = {
            praDolar: (inputMoeda / 5.38).toFixed(2),
            praEuro: (inputMoeda / 6.3).toFixed(2),

            praBtc: (inputMoeda / 229572.71).toFixed(8),
            praEth: (inputMoeda / 15871.7).toFixed(8)
         }

         if (moeda.final == 'dolar') { 
            resultadoDa.moedaConvertida.innerHTML = `$ ${converte.praDolar}`
         }

         else if (moeda.final == 'euro') { 
            resultadoDa.moedaConvertida.innerHTML = `&euro; ${converte.praEuro}`
         }

         else if (moeda.final == 'bitcoin') { 
            resultadoDa.moedaConvertida.innerHTML = `&#x20BF; ${converte.praBtc}`
         }

         else if (moeda.final == 'ethereum') {
            resultadoDa.moedaConvertida.innerHTML = `ETH ${converte.praEth}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            resultadoDa.moedaConvertida.innerHTML = `$ ${converte.praDolar} | &euro; ${converte.praEuro} <br> &#x20BF; ${converte.praBtc} <br> ETH ${converte.praEth}`
         }
      }

      else if (moeda.inicial == 'dolar') {
         var converte = {
            praReal: (inputMoeda * 5.38).toFixed(2),
            praEuro: (inputMoeda * 0.855).toFixed(2),

            praBtc: (inputMoeda * 0.000024).toFixed(6),
            praEth: (inputMoeda * 0.000341).toFixed(6)
         }

         if (moeda.final == 'real') { 
            resultadoDa.moedaConvertida.innerHTML = `R$ ${converte.praReal}`
         }

         else if (moeda.final == 'euro') { 
            resultadoDa.moedaConvertida.innerHTML = `&euro; ${converte.praEuro}`
         }

         else if (moeda.final == 'bitcoin') { 
            resultadoDa.moedaConvertida.innerHTML = `&#x20BF; ${converte.praBtc}`
         }

         else if (moeda.final == 'ethereum') { 
            resultadoDa.moedaConvertida.innerHTML = `ETH ${converte.praEth}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            resultadoDa.moedaConvertida.innerHTML = `R$ ${converte.praReal} | &euro; ${converte.praEuro} <br> &#x20BF; ${converte.praBtc} <br> ETH ${converte.praEth}`
         }
      }

      else if (moeda.inicial == 'euro') {
         var converte = {
            praReal: (inputMoeda * 6.3).toFixed(2),
            praDolar: (inputMoeda * 1.1693).toFixed(2),

            praBtc: (inputMoeda * 0.00002761).toFixed(8),
            praEth: (inputMoeda * 0.00040008).toFixed(8)
         }

         if (moeda.final == 'real') { 
            resultadoDa.moedaConvertida.innerHTML = `R$ ${converte.praReal}`
         }

         else if (moeda.final == 'dolar') { 
            resultadoDa.moedaConvertida.innerHTML = `$ ${converte.praDolar}`
         }

         else if (moeda.final == 'bitcoin') {
            resultadoDa.moedaConvertida.innerHTML = `&#x20BF; ${converte.praBtc}` 
         }

         else if (moeda.final == 'ethereum') { 
            resultadoDa.moedaConvertida.innerHTML = `ETH ${converte.praEth}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            resultadoDa.moedaConvertida.innerHTML = `$ ${converte.praDolar} | R$ ${converte.praReal} <br> &#x20BF; ${converte.praBtc} <br> ETH ${converte.praEth}`
         }
      }

      else if (moeda.inicial == 'bitcoin') {
         var converte = {
            praDolar: (inputMoeda * 42250.44).toFixed(6),
            praEuro: (inputMoeda * 36279.28).toFixed(6),

            praReal: (inputMoeda * 228655.16).toFixed(6),
            praEth: (inputMoeda * 14.44).toFixed(4)
         }

         if (moeda.final == 'dolar') { 
            resultadoDa.moedaConvertida.innerHTML = `$ ${converte.praDolar}`
         }

         else if (moeda.final == 'euro') { 
            resultadoDa.moedaConvertida.innerHTML = `&euro; ${converte.praEuro}`
         }

         else if (moeda.final == 'real') { 
            resultadoDa.moedaConvertida.innerHTML = `R$ ${converte.praReal}`
         }

         else if (moeda.final == 'ethereum') { 
            resultadoDa.moedaConvertida.innerHTML = `ETH ${converte.praEth}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            resultadoDa.moedaConvertida.innerHTML = `$ ${converte.praDolar} <br> &euro; ${converte.praEuro} <br> R$ ${converte.praReal} <br> ETH ${converte.praEth}`
         }
      }

      else if (moeda.inicial == 'ethereum') {
         var converte = {
            praReal: (inputMoeda * 15795).toFixed(4),
            praDolar: (inputMoeda * 2931.57).toFixed(4),

            praEuro: (inputMoeda * 2522.86).toFixed(4),
            praBtc: (inputMoeda * 0.069399).toFixed(6)
         }

         if (moeda.final == 'dolar') { 
            resultadoDa.moedaConvertida.innerHTML = `$ ${converte.praDolar}`
         }

         else if (moeda.final == 'euro') { 
            resultadoDa.moedaConvertida.innerHTML = `&euro; ${converte.praEuro}`
         }

         else if (moeda.final == 'bitcoin') { 
            resultadoDa.moedaConvertida.innerHTML = `&#x20BF; ${converte.praBtc}`
         }

         else if (moeda.final == 'real') { 
            resultadoDa.moedaConvertida.innerHTML = `R$ ${converte.praReal}`
         }

         else if (moeda.final == 'todas-as-moedas') {
            resultadoDa.moedaConvertida.innerHTML = `$ ${converte.praDolar} <br> &euro; ${converte.praEuro} <br> R$ ${converte.praReal} <br> &#x20BF; ${converte.praBtc}`
         }
      }

      colorBlack()
      colocaLixeiraDasMoedas()
   }
})

setorPara.converterTemperatura.addEventListener("click", () => {
   var temperatura = {
      inicial: document.querySelector('#temperatura-inicial').value,
      final: document.querySelector('#temperatura-final').value
   }
   
   var inputTemperatura = document.querySelector('#temperatura-a-converter')

   if (inputTemperatura.value == '' || inputTemperatura.value == '--' || inputTemperatura.value == '-' || inputTemperatura.value < 0 && inputTemperatura.value > -0.1) {
      resultadoDa.temperaturaConvertida.innerHTML = 'Melhor tentarmos com outro valor 🙄'
   }

   else {
      if (temperatura.inicial == 'celsius') {
         var converte = {
            paraFah: (((inputTemperatura.value / 5) * 9) + 32).toFixed(2),
            paraKelvin: (Number(inputTemperatura.value) + 273.15).toFixed(2)
         }

         if (temperatura.final == 'fahrenheit') {
            resultadoDa.temperaturaConvertida.innerHTML = `${converte.paraFah} °F`
         }

         else if (temperatura.final == 'kelvin') {
            resultadoDa.temperaturaConvertida.innerHTML = `${converte.paraKelvin} K`
         }

         else if (temperatura.final == 'todas-as-temperaturas') {
            resultadoDa.temperaturaConvertida.innerHTML = `${converte.paraFah} °F | ${converte.paraKelvin} K`
         }
      }

      if (temperatura.inicial == 'fahrenheit') {
         var converte = {
            paraCelsius: ((inputTemperatura.value - 32) / 1.8).toFixed(2),
            paraKelvin: ((((inputTemperatura.value - 32) / 1.8) + 273.15)).toFixed(2)
         }

         if (temperatura.final == 'celsius') {
            resultadoDa.temperaturaConvertida.innerHTML = `${converte.paraCelsius} &#x2103;`
         }

         else if (temperatura.final == 'kelvin') {
            resultadoDa.temperaturaConvertida.innerHTML = `${converte.paraKelvin} K`
         }

         else if (temperatura.final == 'todas-as-temperaturas') {
            resultadoDa.temperaturaConvertida.innerHTML = `${converte.paraCelsius} &#x2103; | ${converte.paraKelvin} K`
         }
      }

      if (temperatura.inicial == 'kelvin') {
         var converte = {
            paraCelsius: (Number(inputTemperatura.value) - 273.15).toFixed(2),
            paraFah: (((inputTemperatura.value * 9) / 5) - 459.67).toFixed(2)
         }

         if (temperatura.final == 'celsius') {
            resultadoDa.temperaturaConvertida.innerHTML = `${converte.paraCelsius} &#x2103;`
         }

         else if (temperatura.final == 'fahrenheit') {
            resultadoDa.temperaturaConvertida.innerHTML = `${converte.paraFah} °F`
         }

         else if (temperatura.final == 'todas-as-temperaturas') {
            resultadoDa.temperaturaConvertida.innerHTML = `${converte.paraCelsius} &#x2103; | ${converte.paraFah} °F`
         }
      }

      colorBlackTemperatura()
      colocaLixeiraDaTemperatura()
   }
})

mexePara.limparResultadoMoedas.addEventListener('click', () => {
   var inputMoeda = document.querySelector('#valor-moeda-a-converter')

   retiraLixeiraDasMoedas()
   inputMoeda.value = ''

   resultadoDa.moedaConvertida.style.color = 'rgba(0,0,0,.5)'
   resultadoDa.moedaConvertida.innerHTML = 'Aconchego do resultado 😊'

   if (window.innerWidth > 700 && inputMoeda.value.length == 0) {
      inputMoeda.style.fontSize = '17px'
   }

   else if (window.innerWidth <= 700 && inputMoeda.value.length == 0) {
      inputMoeda.style.fontSize = '16px'
   }
})

mexePara.limparResultadoTemperatura.addEventListener('click', () => {
   var inputTemperatura = document.querySelector('#temperatura-a-converter')

   retiraLixeiraDaTemperatura()
   inputTemperatura.value = ''
   
   resultadoDa.temperaturaConvertida.style.color = 'rgba(0,0,0,.5)'
   resultadoDa.temperaturaConvertida.innerHTML = 'Aconchego do resultado 😊'

   if (window.innerWidth > 700 && inputTemperatura.value.length == 0) {
      inputTemperatura.style.fontSize = '17px'
   }

   else if (window.innerWidth <= 700 && inputTemperatura.value.length == 0) {
      inputTemperatura.style.fontSize = '16px'
   }
})

mexePara.escolherMoedaInicial.addEventListener('change', () => {
   var moedaInicial = document.querySelector('#moeda-inicial').value
   var moedaFinal = document.querySelector('#moeda-final')

   if (moedaInicial == 'real') {
      ativaDolarFinal()
      ativaEuroFinal()

      ativaBtcFinal()
      ativaEthFinal()
      altera.realFinal.style.display = 'none'

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
      altera.dolarFinal.style.display = 'none'

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
      altera.euroFinal.style.display = 'none'

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
      altera.bitcoinFinal.style.display = 'none'

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
      altera.ethereumFinal.style.display = 'none'

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

   function dolarValorFinal() { if (moedaFinal.value == 'dolar' ) { moedaFinal.value = 'dolar' }}
   function euroValorFinal() { if (moedaFinal.value == 'euro' ) { moedaFinal.value = 'euro' }}

   function bitcoinValorFinal() {  if (moedaFinal.value == 'bitcoin' ) { moedaFinal.value = 'bitcoin' } }
   function ethereumValorFinal() {  if (moedaFinal.value == 'ethereum' ) { moedaFinal.value = 'ethereum' } }
})

mexePara.escolherTemperaturaInicial.addEventListener("change", () => {
   var temperaturaInicial = document.querySelector('#temperatura-inicial').value
   var temperaturaFinal = document.querySelector('#temperatura-final')

   if (temperaturaInicial == 'celsius') {
      ativaFahFinal()
      ativaKelvinFinal()
      altera.celsiusFinal.style.display = 'none'

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
      altera.fahrenheitFinal.style.display = 'none'

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
      altera.kelvinFinal.style.display = 'none'

      if (temperaturaFinal.value != 'kelvin') {
         selectCelsiusFinal()
         selectFahFinal()
         selectTodasAsTemperaturas()
      }

      else {
         temperaturaFinal.value = 'celsius'
      }
   }

   function selectCelsiusFinal() { if (temperaturaFinal.value == 'celsius') { temperaturaFinal.value = 'celsius' } }
   function selectFahFinal() { if (temperaturaFinal.value == 'fahrenheit') { temperaturaFinal.value = 'fahrenheit' } }

   function selectKelvinFinal() { if (temperaturaFinal.value == 'kelvin') { temperaturaFinal.value = 'kelvin' } }
   function selectTodasAsTemperaturas() { if (temperaturaFinal.value == 'todas-as-temperaturas') { temperaturaFinal.value = 'todas-as-temperaturas' } }
})

mexePara.pegarMoedaInserida.addEventListener('keypress', function(pressionaTecla) {
   if (pressionaTecla.key == '-' || pressionaTecla.key == '+' || pressionaTecla.key == '/' || pressionaTecla.key == '*' || pressionaTecla.key == '!' || pressionaTecla.key == '%' || pressionaTecla.key == '(' || pressionaTecla.key == ')' || pressionaTecla.key == ':' || pressionaTecla.key == ',') {
      pressionaTecla.preventDefault()
   }
})

mexePara.pegarMoedaInserida.addEventListener('paste', function(desabilitaColar) {
   desabilitaColar.preventDefault()
})

mexePara.pegarTemperaturaInserida.addEventListener('keypress', function(insereTemperatura) {
   var inputTemperaturaInicial = document.querySelector('#temperatura-a-converter')

   if (insereTemperatura.key == '/' || insereTemperatura.key == '*' || insereTemperatura.key == '!' || insereTemperatura.key == '%' || insereTemperatura.key == '(' || insereTemperatura.key == ')' || insereTemperatura.key == ':' || insereTemperatura.key == ',' || insereTemperatura.key == '+') {
      insereTemperatura.preventDefault()
   }
   
   else if (inputTemperaturaInicial.value.length > 0 && insereTemperatura.key == '-') {
      insereTemperatura.preventDefault()
   }
})

mexePara.pegarTemperaturaInserida.addEventListener('paste', function(desabilitaColarNaTemperatura) {
   desabilitaColarNaTemperatura.preventDefault()
})

setorPara.ativarConversorTemperaturas.addEventListener('click', () => {
   articleDas.moedas.classList.remove('active')

   articleDas.temperaturas.classList.add('active')
})

setorPara.ativarConversorMoedas.addEventListener('click', () => {
   articleDas.temperaturas.classList.remove("active")

   articleDas.moedas.classList.add("active")
})

mexePara.pegarTemperaturaInserida.addEventListener('keydown', alterarFonte)
mexePara.pegarMoedaInserida.addEventListener('keydown', alterarFonte)

function alterarFonte() {
   var moedaInserida = document.querySelector('#valor-moeda-a-converter')
   var temperaturaInserida = document.querySelector("#temperatura-a-converter")

   if (moedaInserida.value.length <= 14 && window.innerWidth > 700 || moedaInserida.value.length == 0) {
      moedaInserida.style.fontSize = '17px'
   }

   else if (moedaInserida.value.length <= 14 && window.innerWidth <= 700 || moedaInserida.value.length == 0) {
      moedaInserida.style.fontSize = '16px'
   }

   else if (moedaInserida.value.length >= 15 && moedaInserida.value.length <= 23) {
      moedaInserida.style.fontSize = '10px'
   }

   else if (moedaInserida.value.length >= 24 && moedaInserida.value.length <= 40) {
      moedaInserida.style.fontSize = '8px'
   }

   /*Tenho muito que aprender*/
   if (temperaturaInserida.value.length <= 14 && window.innerWidth > 700) {
      temperaturaInserida.style.fontSize = '17px'
   }

   else if (temperaturaInserida.value.length <= 14 && window.innerWidth <= 700) {
      temperaturaInserida.style.fontSize = '16px'
   }

   else if (temperaturaInserida.value.length >= 15 && temperaturaInserida.value.length <= 23) {
      temperaturaInserida.style.fontSize = '10px'
   }

   else if (temperaturaInserida.value.length >= 24 && temperaturaInserida.value.length <= 40) {
      temperaturaInserida.style.fontSize = '8px'
   }
}

function colocaLixeiraDasMoedas() {
   if (mexePara.limparResultadoMoedas.classList.contains('desativado')) {
      mexePara.limparResultadoMoedas.classList.toggle('desativado')

      mexePara.limparResultadoMoedas.classList.toggle('active')
   }
}

function colocaLixeiraDaTemperatura() {
   if (mexePara.limparResultadoTemperatura.classList.contains('desativado')) {
      mexePara.limparResultadoTemperatura.classList.toggle('desativado')

      mexePara.limparResultadoTemperatura.classList.toggle('active')
   }
}

function retiraLixeiraDasMoedas() {
   mexePara.limparResultadoMoedas.classList.toggle('active')

   mexePara.limparResultadoMoedas.classList.toggle('desativado')
}

function retiraLixeiraDaTemperatura() {
   mexePara.limparResultadoTemperatura.classList.toggle('active')

   mexePara.limparResultadoTemperatura.classList.toggle('desativado')
}

function ativaRealFinal() { altera.realFinal.style.display = 'block' }
function ativaDolarFinal() { altera.dolarFinal.style.display = 'block' }
function ativaEuroFinal() { altera.euroFinal.style.display = 'block' }
function ativaBtcFinal() { altera.bitcoinFinal.style.display = 'block' }
function ativaEthFinal() { altera.ethereumFinal.style.display = 'block' }

function ativaFahFinal() { altera.fahrenheitFinal.style.display = 'block' }
function ativaCelsiusFinal() { altera.celsiusFinal.style.display = 'block' }
function ativaKelvinFinal() { altera.kelvinFinal.style.display = 'block' }

function colorBlack() { resultadoDa.moedaConvertida.style.color = 'black' }
function colorBlackTemperatura() { resultadoDa.temperaturaConvertida.style.color = 'black' }