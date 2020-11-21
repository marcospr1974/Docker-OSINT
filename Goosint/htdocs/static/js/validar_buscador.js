   
function validar_busqueda(){

	busqueda = "https://www.google.com/search?"

   	// Palabras a buscar
   	if (document.googleSearch.as_q.value.length==0){
      		alert("Tiene que introducir una palabra a buscar")
      		document.googleSearch.as_q.focus()
      		return 0;
   	}
	else{
		as_q = document.googleSearch.as_q.value
		busqueda=busqueda+"&as_q="+as_q
	}

	// Palabras que deben aparecer en los resultados
	if (document.googleSearch.as_epq.value.length > 0) {
		as_epq = document.googleSearch.as_epq.value
		busqueda=busqueda+"&as_epq="+as_epq
	}

	// Cualquiera de estas palabras
	if (document.googleSearch.as_oq.value.length > 0) {
		as_oq = document.googleSearch.as_oq.value
		busqueda=busqueda+"&as_oq="+as_oq
	}

	// Ninguna de estas palabras
	if (document.googleSearch.as_oq.value.length > 0) {
		as_eq = document.googleSearch.as_eq.value
		busqueda=busqueda+"&as_eq="+as_eq
	}
	
	// Numero desde
	if (document.googleSearch.as_nlo.value.length > 0) {
		as_nlo = document.googleSearch.as_nlo.value
		busqueda=busqueda+"&as_nlo="+as_nlo
	}

	// Numero hasta
	if (document.googleSearch.as_nhi.value.length > 0) {
		as_nhi = document.googleSearch.as_nhi.value
		busqueda=busqueda+"&as_nhi="+as_nhi
	}

	// Idioma
	var ididioma = document.getElementById("lr");
	var lr = ididioma.options[ididioma.selectedIndex].value;
	if (lr != "") {
		busqueda=busqueda+"&lr="+lr
	}

	// Region
	var idcr = document.getElementById("cr");
	var cr = idcr.options[idcr.selectedIndex].value;
	if (cr != "") {
		busqueda=busqueda+"&cr="+cr
	}

	// Ultima actualizacion
	var idqr = document.getElementById("as_qdr");
	var as_qdr = idqr.options[idqr.selectedIndex].value;
	if (as_qdr != "") {
		busqueda=busqueda+"&as_qdr="+as_qdr
	}
	
	// Sitio o dominio
	if (document.googleSearch.as_sitesearch.value.length > 0) {
		as_sitesearch = document.googleSearch.as_sitesearch.value
		busqueda=busqueda+"&as_sitesearchr="+as_sitesearch
	}

	// Terminos que aparecen
	var idocct = document.getElementById("as_occt");
	var as_occt = idocct.options[idocct.selectedIndex].value;
	if (as_occt != "") {
		busqueda=busqueda+"&as_occt="+as_occt
	}

	// Terminos que aparecen
	var idsafe = document.getElementById("safe");
	var safe = idsafe.options[idsafe.selectedIndex].value;
	if (safe != "") {
		busqueda=busqueda+"&safe="+safe
	}

	// Tipo de archivo
	var idfiletype = document.getElementById("as_filetype");
	var as_filetype = idfiletype.options[idfiletype.selectedIndex].value;
	if (as_filetype != "") {
		busqueda=busqueda+"&as_filetype="+as_filetype
	}

	// Terminos
	var idrights = document.getElementById("as_rights");
	var as_rights = idrights.options[idrights.selectedIndex].value;
	if (as_rights != "") {
		busqueda=busqueda+"&as_rights="+as_rights
	}

	// Tipologia
	var idtbm = document.getElementById("tbm_tip");
	var tbm_tip = idtbm.options[idtbm.selectedIndex].value;
	if (tbm_tip != "") {
		busqueda=busqueda+"&tbm="+tbm_tip
	}
	
	// Tiempo
	var idtbs_qdr = document.getElementById("tbs_qdr");
	var tbs_qdr = idrights.options[idtbs_qdr.selectedIndex].value;
	if (tbs_qdr != "") {
		busqueda=busqueda+"&tbs="+tbs_qdr
	}

	// Imagenes
	var idtbs_isz = document.getElementById("tbs_isz");
	var tbs_isz = idtbs_isz.options[idtbs_isz.selectedIndex].value;
	if (tbs_isz != "") {
		busqueda=busqueda+"&tbs="+tbs_isz
	}

	// Imagen Color
	var idtbs_ic = document.getElementById("tbs_ic");
	var tbs_ic = idtbs_ic.options[idtbs_ic.selectedIndex].value;
	if (tbs_ic != "") {
		busqueda=busqueda+"&tbs="+tbs_ic
	}

	// Imagenes Tipo
	var idtbs_itp = document.getElementById("tbs_itp");
	var tbs_itp = idtbs_itp.options[idtbs_itp.selectedIndex].value;
	if (tbs_itp != "") {
		busqueda=busqueda+"&tbs="+tbs_itp
	}

	alert(busqueda)
	
    //window.location.href=busqueda
	window.open (busqueda,"Google")
}

   
function validar_redes_sociales(){

	busqueda = "https://www.google.com/search?"

   	// Palabras a buscar
   	if (document.redesSociales.texto.value.length==0){
      		alert("Tiene que introducir una palabra a buscar")
      		document.redesSociales.texto.focus()
      		return 0;
   	}
	else{
		texto = document.redesSociales.texto.value
		busqueda=busqueda+"&q="+texto
	}
	// Red Social
	var idredes = document.getElementById("redes");
	var redes = idredes.options[idredes.selectedIndex].value;
	if (redes == "todos") {
		busqueda=busqueda+" (site:facebook.com | site:linkedin.com | site:instagram.com | site: twitter.com |"
		busqueda=busqueda+" site:pinterest.com | site:snapchat.com | site:tumblr.com | site:reddit.com | site:4chan.com)"
		//busqueda=busqueda+" site:flickr.com | site:youtube.com)"
	


		//busqueda=busqueda+" (site:facebook.com | site:linkedin.com | site:instagram.com | site: twitter.com |"
		//busqueda=busqueda+" site:pinterest.com | site:snapchat.com | site:tumblr.com | site:reddit.com | site:4chan.com |"
		//busqueda=busqueda+" site:flickr.com | site:youtube.com| site:omegle.com | site:wechat.com |"
		//busqueda=busqueda+" site:imqq.com)"
	}
	else {
		busqueda=busqueda+" "+redes
	}
	
	alert(busqueda)
	
    //window.location.href=busqueda
	window.open (busqueda,"Redes Sociales")
}

function validar_instagram(){

	busqueda = "https://pikdo.info/search/"

   	// Palabras a buscar
   	if (document.instagram.texto2.value.length==0){
      		alert("Tiene que introducir una palabra a buscar")
      		document.instagram.texto2.focus()
      		return 0;
   	}
	else{
		busqueda = busqueda+document.instagram.texto2.value
	}
	
	alert(busqueda)
	
    //window.location.href=busqueda
	window.open (busqueda,"Instagram")
}

function validar_google_dork(){

	busqueda = "https://www.google.com/search?q="

   	// Palabras a buscar
   	if (document.googleDorks.Textarea2.value.length==0){
      		alert("Tiene que introducir una palabra a buscar")
      		document.googleDorks.Textarea2.focus()
      		return 0;
   	}
	else{
		busqueda = busqueda+document.googleDorks.Textarea2.value
	}
	
	alert(busqueda)
	
    //window.location.href=busqueda
	window.open (busqueda,"Google Dorks")
}

function validar_bing_dork(){

	busqueda = "https://www.bing.com/search?q="

   	// Palabras a buscar
   	if (document.bingDorks.Textarea3.value.length==0){
      		alert("Tiene que introducir una palabra a buscar")
      		document.bingDorks.Textarea3.focus()
      		return 0;
   	}
	else{
		busqueda = busqueda+document.bingDorks.Textarea3.value
	}
	
	alert(busqueda)
	
    //window.location.href=busqueda
	window.open (busqueda,"Bing Dorks")
}

function validar_twitter_dork(){

	busqueda = "https://www.twitter.com/search?q="

   	// Palabras a buscar
   	if (document.twitterDorks.Textarea4.value.length==0){
      		alert("Tiene que introducir una palabra a buscar")
      		document.twitterDorks.Textarea4.focus()
      		return 0;
   	}
	else{
		busqueda = busqueda+document.twitterDorks.Textarea4.value
	}
	
	alert(busqueda)
	
    //window.location.href=busqueda
	window.open (busqueda,"Twitter Dorks")
}
