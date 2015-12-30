   var k = 0;
    var s = 0;
    function level(k)
    {
    	l=k+1;
    document.getElementById("id02").innerHTML = 'level-'+l;
    var out = "";
    for(var i = 0; i<10; i++) 
    {
        out += '<div class="JK">'+kranthi[k][i]+'</div>'+'<p>';
    }
    document.getElementById("id01").innerHTML = out;
    var ii= "";
	for(var i=1;i<11;i++)
	{
	ii+= "<div>"+"<select class='sd' id=u"+i+">"
	+"<option value=' '>"+" "+"</option>"
	+"<option value='1'>"+"1"+"</option>"
	+"<option value='2'>"+"2"+"</option>"
	+"<option value='3'>"+"3"+"</option>"
	+"<option value='4'>"+"4"+"</option>"
	+"<option value='5'>"+"5"+"</option>"
	+"<option value='6'>"+"6"+"</option>"
	+"<option value='7'>"+"7"+"</option>"
	+"<option value='8'>"+"8"+"</option>"
	+"<option value='9'>"+"9"+"</option>"
	+"<option value='10'>"+"10"+"</option>"
	+"</select>"+"</div>"+"<p>";
    }
    document.getElementById("er").innerHTML= ii;
   }
    function check()
    {
    	var p1= "";
    	for(var i=1;i<11;i++)
	{
           p1+=document.getElementById("u"+i).value;
    }
    //document.write(p1);
    if(p1 == kranthi[k][10])
    {
    	var l=k+1;
    	document.getElementById('id04').innerHTML='<button  class="ty1" onclick="level1()">'+'Hurray! you solved the level-'+l+'</button>';
    }
    else
    	document.getElementById('id05').innerHTML='<button class="ty2" onclick="level2()">'+'oops there is a mistake playagain'+'</button>';
    }
    function level1()
      { 
      	document.getElementById('id04').innerHTML=' '+' ';
      	k=k+1;
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
        document.getElementById("er").remove();
        document.getElementById("sc").remove();
        }
      }
      function level2()
      { 
      	document.getElementById('id05').innerHTML=' '+' ';
      	level(k);
      }
level(k);