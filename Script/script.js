/*
Carne: 400 gr por pessoa / + de 6 horas: 650 gr

Cerveja: 1200 ml por pessoa / + de 6 horas: 2000ml

Refrigerante/água: 1000ml por pessoa / + de 6 horas: 1500 ml

Crianças valem 0,5
*/

const inputAdult = document.getElementById('adultos');
const inputCrian = document.getElementById('criancas');
const inputDura = document.getElementById('duracao');
const resultado = document.getElementById('resultado');

const botao = document.getElementById('botao');

botao.addEventListener('click', calcular);

function calcular() {
	const adulto = inputAdult.value;
	const crianca = inputCrian.value;
	const duracao = inputDura.value;

	let qtdTotalCarne =
		carnePP(duracao) * adulto + (carnePP(duracao) / 2) * crianca;
	let qtdTotalCerveja = cervejaPP(duracao) * adulto;
	let qtdTotalBebidas =
		bebidaPP(duracao) * adulto + (bebidaPP(duracao) / 2) * crianca;

	console.log(qtdTotalCarne);

	resultado.innerHTML = `<h2 class="h2-result" >Você vai precisar de:</h2>`;
	resultado.innerHTML += `<p class="text-result"> ${
		qtdTotalCarne / 1000
	} Kg de Carne </p>`;
	resultado.innerHTML += `<p class="text-result"> ${Math.ceil(
		qtdTotalCerveja / 355
	)} Latas de Cerveja </p>`;
	resultado.innerHTML += `<p class="text-result"> ${Math.ceil(
		qtdTotalBebidas / 2000
	)} Garrafas de Bedidas </p>`;
}

function carnePP(duracao) {
	if (duracao >= 6) {
		return 650;
	} else {
		return 400;
	}
}

function cervejaPP(duracao) {
	if (duracao >= 6) {
		return 2000;
	} else {
		return 1200;
	}
}

function bebidaPP(duracao) {
	if (duracao >= 6) {
		return 1500;
	} else {
		return 1000;
	}
}
