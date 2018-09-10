var TaCerto = TaCerto || {};
TaCerto.Controladora = TaCerto.Controladora || {};
TaCerto.Controladora.MenuInicial = {
	menuMissao: function(){
		TaCerto.GenFunc.fadeInBtnClick(document.getElementsByClassName("menuIicial_btn1")[0],
		function(){
			TaCerto.Controladora.MenuMissao.load();
		}, 200);
	},
	menuCasual: function(){
		TaCerto.GenFunc.fadeInBtnClick(document.getElementsByClassName("menuIicial_btn2")[0],
		function(){
			TaCerto.Controladora.MenuCasual.load();
		},200);
	},
	colecao:function(){
		// Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    x.innerHTML="Disponível apenas para pessoas cadastradas.";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}
};