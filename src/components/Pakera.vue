<template>
	<div id="Pakeras">
		<header class="cabecalho">
			<h1 class="cabecalho-Titulo">Pakeras</h1>
		</header>
		<main class="placar">
			<button class="placar-Itens" v-on:click="bom">Levar pra tomar açaí</button>
			<button class="placar-Itens" v-on:click="mal">Falar palavrão</button>
			<button class="placar-Itens" v-on:click="muitoBom">Levar ao cínema</button>
			<button class="placar-Itens" v-on:click="mandouSuperBem">Pagar combo cínema</button>
			<button class="placar-Itens" v-on:click="muitoMal">Brigar em publico</button>
			<button class="placar-Itens" v-on:click="mandouMuitoMal">Agressão</button>
			<button class="placar-Itens" v-on:click="mandouSuperMal">Traição</button>
		</main>
		<footer>
			<button class="placar-Itens2" v-on:click="resultados">Mostrar Resultado</button>
			<h2>{{ resultado }}</h2>
		</footer>
	</div>
</template>
<script>
	export default{
		name: 'Pakera',
		data(){
			return{
				pontos: 0,
				resultado: ''
			}
		},
		methods:{
			bom(){
				return this.pontos  += +5
			},
			muitoBom(){
				return this.pontos  += +10
			},
			mandouSuperBem(){
				return this.pontos  += +15
			},
			mal(){
				return this.pontos  += -5
			},
			muitoMal(){
				return this.pontos  += -10 
			},
			mandouMuitoMal(){
				return this.pontos  += -15 
			},
			mandouSuperMal(){
				return this.pontos  += -20
			},
			resultados(){
				if (this.pontos <= 10){
					return this.resultado = 'Sai Embuste!'
				} 
				else if (this.pontos > 10 && this.pontos <= 20) {
					return this.resultado = 'Mas ou Menos!'
				}
				else {
					return this.resultado = 'Muito Topzera!'
				} 
			}
		}
	}
</script>
<style scoped>
	#Pakeras{
		color: #fff;
	}
	.cabecalho{
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: 		#FF6347;
		height: 10vh;
	}
	.cabecalho-Titulo{
		font-size: 1.70em;
		font-family: arial;
		font-weight: 900;
		background-color: 		#FF6347;
	}
	.placar{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin: 10%;
		position: relative;
	}
	.placar-Itens{
		font-size: 1.20em;
		font-weight: 900;
		font-style: italic;
		padding: 5%;
		margin: 2%;
	}
	footer{
		position: relative;
		display: flex;
		justify-content:center;
		align-items: center;
		flex-direction: column;
		background-color: #FF6347;
		padding: 7%;

	}
	.placar-Itens2{
		width: 30%;
		height: 50px;
		text-transform: uppercase;
		font-weight: 900;

	}
	h2{
		background-color: #FF6347;
	}
</style>