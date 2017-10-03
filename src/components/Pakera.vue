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
			<button class="placar-Itens" v-on:click="MandouSuperMal">Traição</button>
		</main>
		<footer>
		<button class="placar-Itens2" v-on:click="zerar">x</button>
			<h2>Sua Pontuação é {{ pontos }}</h2>
		</footer>
	</div>
</template>
<script>
	export default{
		name: 'Pakera',
		data(){
			return{
				pontos: 0
			}
		},
		methods:{
			bom(){
				this.pontos  += +5
			},
			muitoBom(){
				this.pontos  += +10
			},
			mandouSuperBem(){
				this.pontos  += +15
			},
			mal(){
				this.pontos  += -5
			},
			muitoMal(){
				this.pontos  += -10 
			},
			mandouMuitoMal(){
				this.pontos  += -15 
			},
			MandouSuperMal(){
				this.pontos  += -20
			},
			zerar(){
				this.pontos  = 0
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
		justify-content: center;
		align-items: flex-end;
		background-color: 		#FF6347;
		padding: 10%;
	}
	.placar-Itens2{
		width: 7%;
		height: 4vh;
		left: 10%;
		top: 39%;
		border-radius: 60%;
		position: absolute;
		text-transform: uppercase;
		font-weight: 900;
	}
	h2{
		background-color: 		#FF6347;
	}
</style>