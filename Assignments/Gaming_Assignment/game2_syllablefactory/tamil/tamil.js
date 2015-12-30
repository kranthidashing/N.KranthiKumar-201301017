    var k=0;
	var out1= "";
	var out2= "";
	var s=0;
	function check2()
	{
		var h1= "";
		out2= "";
		for(var i=1;i<=kranthi[k].length;i++)
		{
		var f=0;
		var h = document.getElementsByName("ch"+i);
		if(h[0].checked){
			f=1;
			h1+=h[0].value;
		}
		if(h[1].checked){
			f=1;
			h1+=h[1].value;
		}
		if(h[2].checked){
			f=1;
			h1+=h[2].value;
		}
		if(h[3].checked){
			f=1;
			h1+=h[3].value;
		}
		if(f==0)
			h1+='*';
	    }
	    var f1=0;
	    for(var i=0;i<kranthi[k].length;i++)
		{
			if(h1[i]==ans[k][i])
				out2+='<p>'+'<div class="droptarget2" style="text-align:center; font-size:20px;">'+'correct'+'</div>'+'<p>';
			else
			{
				out2+='<p>'+'<div class="droptarget2" style="text-align:center; font-size:20px;">'+'wrong'+'</div>'+'<p>';
				f1=1;
			}
		}
		document.getElementById("ll2").innerHTML=out2;
		if(f1==1)
		{
			out1+='<div class="droptarget3" style="text-align:center">'+'<button class="ty2" style="position: relative; top: -30px; left: -45px;" onclick="level2()">'+'oops there is a mistake playagain'+'</button>'+'</div>';
			document.getElementById("ll1").innerHTML=out1;
		}
        else
        {
    	out1+='<div class="droptarget3" style="text-align:center">'+'<button  class="ty1" style="position: relative; top: -30px; left: -45px;" onclick="level1()">'+'Hurray! you solved move to next level'+'</button>'+'</div>';
    	document.getElementById("ll1").innerHTML=out1;
        }
	}
	function level1()
	{
		k=k+1;
		out2= "";
		document.getElementById("ll2").innerHTML=out2;
		document.getElementById('ll1').innerHTML=' '+' ';
		if(k<kranthi.length)
      	{
      		s=s+10;
      		document.getElementById('scr').innerHTML='<h2>Your Score:-'+s+'</h2>';
      	    level(k);
        }
        else
        {
        s=s+10;
      	document.getElementById('scr').innerHTML='<h2>Your Score:-'+s+'</h2>';
        alert('you won the game');
        document.getElementById("id03").innerHTML = '<center>'+'press F5 to Re-Start the game'+'</center>';
        document.getElementById("id01").remove();
        document.getElementById("id02").remove();
        document.getElementById("id04").remove();
        document.getElementById("id05").remove();
        document.getElementById("ll").remove();
        document.getElementById("ll1").remove();
        document.getElementById("ll2").remove();
        document.getElementById("id06").remove();
        }
	}
	function level2()
	{
		out2= "";
		document.getElementById("ll2").innerHTML=out2;
		document.getElementById('ll1').innerHTML=' '+' ';
		level(k);
	}
    function level(k)
    {
    	var l=k+1;
    document.getElementById("id02").innerHTML = 'level-'+l;
    	var out = "";
    	var p="";
	    out1= "";
	for(var i=0;i<kranthi[k].length;i++)
	{
		var p=i+1;
		out+='<p>'+'<div class="droptarget2" style="text-align:center;">'+kranthi[k][i]+'</div>'+'<p>';
		out1+="<p>"+"<div class='droptarget3' style='text-align:center'>"+"<input type='radio' name='ch"+p+"' id='1"+p+"' value='1'>"+"<input type='radio' name='ch"+p+"' id='2"+p+"' value='2'>"+"<input type='radio' name='ch"+p+"' id='3"+p+"' value='3'>"+"<input type='radio' id='ch' name='ch"+p+"' value='4'>"+"</div>"+"<p>";
	}
	out1+='<div class="droptarget3" style="text-align:center">'+'<button onclick="check2()">Submit</button>'+'</div>';
	document.getElementById("ll").innerHTML=out;
	document.getElementById("ll1").innerHTML=out1;
    }
	level(k);