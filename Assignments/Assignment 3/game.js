var o=['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह'];
var matra=['ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ']
var getElementId=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];

var get=[111,112,113,114,121,122,123,124,131,132,133,134,141];
var j=0;
var i=0;
var k=0;
var word='';
var count=0;
var score=0;
var main=['सेब','केला','नीलबदरी','नािरयल','सिताफ़ल','खजूर','अंजीर','आँवला','अंगूर ','अमरूद','नींबू ','आम ','नारंगी','पपीता','नाशपाती','अनार','चिक्कू','चीकू','करमल','तरबूज','लीची','कीवी '];
var mainarray=o[0];
console.log(mainarray);

document.getElementById("Score").innerHTML=0;
for(i=0;i<13;i++)
{
	document.getElementById(get[i]).innerHTML = matra[i];
}
window.setInterval(randomization, 3000);

function randomization()
{

	var item = o[Math.floor(Math.random()*(o.length-1))];
	document.getElementById(getElementId[j]).innerHTML = item;
	j++;
	
}




function getdata(a,b)

{
	a=a-1;
	b-b-1;
	var data=document.getElementById("tbl").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML=word;
}
function getdata1(a,b)
{
	a=a-1;
	b=b-1;
	var data=document.getElementById("tbl2").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML=word;
}

function Check()
{
	console.log(word);
	for(var k=0;k<main.length;k++)
	{
		console.log(main[k]);
		if(word==main[k])
		{
		score=score+2;
		document.getElementById("Score").innerHTML=score;
		break;
		}
	}
	word='';
	document.getElementById("Selectedletter").innerHTML='';
}
