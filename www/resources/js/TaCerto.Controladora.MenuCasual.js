var TaCerto = TaCerto || {};
TaCerto.Controladora = TaCerto.Controladora || {};
TaCerto.Controladora.MenuCasual = {
	load: function(){
		TaCerto.Controladora.CarregarPagina.htmlCorpo("menuCasual");
	},
	callGame: function(tipo, el){
		TaCerto.GenFunc.fadeInBtnClick(el,
		function(){
			TaCerto.Controladora.Jogo.Load(tipo);
		});
	},
	homeBtn: function (el) {
		TaCerto.GenFunc.fadeInBtnClick(el,
		function(){
			TaCerto.Controladora.CarregarPagina.htmlCorpo("menuInicial");
		});
	},
	commingSoon: function(){
		// Get the snackbar DIV
	    var x = document.getElementById("snackbar");

	    // Add the "show" class to DIV
	    x.className = "show";

	    x.innerHTML="Disponível apenas para pessoas cadastradas.";

	    // After 3 seconds, remove the show class from DIV
	    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}
};