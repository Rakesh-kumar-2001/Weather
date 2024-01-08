const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c763f7c6ccmsh4516b52e0e26ea9p14c81bjsnecae813296a8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


async function wreport(c){

try {
	const response = await fetch(url+c, options);
	const result = await response.json();
	document.getElementById("deg").innerHTML=result.temp;
	document.getElementById("humidi").innerHTML=result.humidity;
	document.getElementById("mintemp").innerHTML=result.min_temp;
	document.getElementById("maxtemp").innerHTML=result.max_temp;
	document.getElementById("winddeg").innerHTML=result.wind_degrees;
	document.getElementById("place").innerHTML=c;
	console.log(result);

	if(result.cloud_pct<1){
		document.getElementById("myimg").src="cloud-line.svg"
	}else if(result.cloud_pct>=1&& result.cloud_pct<4){
		document.getElementById("myimg").src="sun-cloudy-line.svg"
	}
	else{
		document.getElementById("myimg").src="sun-line.svg"
	}

	const d=new Date();
	if(d.getHours()>19 || d.getHours()<5){
		document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2019/10/19/11/35/wolf-4561204_1280.png)";
		document.body.style.backgroundSize="contains";
		document.body.style.color="white";
	}
	else if(d.getHours()>6 || d.getHours<17){
		document.body.style.color="black";
		document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg)";
		document.body.style.backgroundSize="contains"
	}
	else if((d.getHours()>=5||d.getHours()<=6)|| (d.getHours()>=17 || d.getHours()<=19)){
		document.body.style.color="white";
		document.body.style.backgroundImage="url(https://cdn.pixabay.com/photo/2019/07/26/07/56/landscape-4364162_1280.jpg)";
		document.body.style.backgroundSize="contains"
	}
	
	document.getElementById("date").innerHTML=d.toLocaleDateString()+"&nbsp &nbsp &nbsp &nbsp &nbsp"+d.toLocaleTimeString();
} catch (error) {
	console.error(error);
}
}

wreport("Bhubaneswar");
const city=document.getElementById("input")
document.getElementById("serbtn").addEventListener("click",(e)=>{
	e.preventDefault();
	wreport(city.value);
	document.getElementById("input").value="";
})
