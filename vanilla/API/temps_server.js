// demander une information 
// récupérer les informations 
// traiter les informations pour selectionner celle que l'on veut
// afficher l'information sur notre page. 
let mon_resultat
let une_requete = new XMLHttpRequest()
console.log(une_requete.readyState)
une_requete.open('get', 'temps.json')
console.log(une_requete.readyState)
une_requete.onreadystatechange = function(){
	if (une_requete.readyState == 4 && une_requete.status == 200){
		let ma_reponse = une_requete.responseText
		console.log(ma_reponse)
		let mon_info = JSON.parse(ma_reponse)
		console.log(mon_info)	
		mon_resultat = mon_info.result.rfc1123
		console.log(typeof mon_resultat)
		ma_balise = document.createElement('p')
		ma_balise.textContent = mon_resultat
		console.log('test')
		console.log(ma_balise.textContent)
		document.body.appendChild(ma_balise)
	
	}
}
une_requete.send()



// def demander_information():
// 	ma_requete = XMLHttpRequest()
// 	ma_requete.open('get', 'https://api.kraken.com/0/public/Time')
// 	ma_requete.send()
// 	return (ma_requete.response)	