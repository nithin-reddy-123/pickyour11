var count,counta,countb,creditscount,wkcount,bmcount,arcount,bwcount;
var minwk=1,minbm=3,minar=1,minbw=3;
var wkchosen,bmchosen,archosen,bwchosen,totalscore=0,nrmlbuttoncount=0,oppscore=0,totcred=208;

/**function to  show only wicketkeepers**/

function showwk()
{
	$(".wicketkeeper").show();
	$(".batsmen").hide();
	$(".allrounder").hide();
	$(".bowler").hide();
	document.getElementById("wk").style.borderBottom = "3px solid red";
	document.getElementById("bm").style.borderBottom = "none";
	document.getElementById("ar").style.borderBottom = "none";
	document.getElementById("bw").style.borderBottom = "none";
}

/**wicketkeeper showing function ended**/

/**function to  show only batsmen**/

function showbm()
{
	$(".wicketkeeper").hide();
	$(".batsmen").show();
	$(".allrounder").hide();
	$(".bowler").hide();
	document.getElementById("wk").style.borderBottom = "none";
	document.getElementById("bm").style.borderBottom = "3px solid red";
	document.getElementById("ar").style.borderBottom = "none";
	document.getElementById("bw").style.borderBottom = "none";
}

/**batsmen showing function ended**/

/**function to  show only allrounders**/

function showar()
{
	$(".wicketkeeper").hide();
	$(".batsmen").hide();
	$(".allrounder").show();
	$(".bowler").hide();
	document.getElementById("wk").style.borderBottom = "none";
	document.getElementById("bm").style.borderBottom = "none";
	document.getElementById("ar").style.borderBottom = "3px solid red";
	document.getElementById("bw").style.borderBottom = "none";
}

/**allrounder showing function ended**/

/**function to  show only bowlers**/

function showbw()
{
	$(".wicketkeeper").hide();
	$(".batsmen").hide();
	$(".allrounder").hide();
	$(".bowler").show();
	document.getElementById("wk").style.borderBottom = "none";
	document.getElementById("bm").style.borderBottom = "none";
	document.getElementById("ar").style.borderBottom = "none";
	document.getElementById("bw").style.borderBottom = "3px solid red";
}

/**bowler showing function ended**/

/**on default function**/

$(document).ready(function(){
	count=0;
	counta=0;
	countb=0;
	creditscount=0;
	wkcount=0;
	bmcount=0;
	arcount=0;
	bwcount=0;
	wkchosen=0;
	bmchosen=0;
	archosen=0;
	bwchosen=0;
	showwk();
      $("#bm").prop('disabled',true);
      $("#ar").prop('disabled',true);
      $("#bw").prop('disabled',true);
});

/**end of default**/

/**respective functions asking to show only particular type of players**/

document.getElementById("wk").addEventListener("click", showwk);
document.getElementById("bm").addEventListener("click", showbm);
document.getElementById("ar").addEventListener("click", showar);
document.getElementById("bw").addEventListener("click", showbw);

/**end of showing particular type players**/

/**function to count credits used**/
var scores = {RishabhPant:[58,37,46,74,57,68],ABDevilliers:[23,43,79,14,84,8],ViratKohli:[32,33,33,42,51,24],
      ShikarDhawan:[82,63,79,58,64,49],ShreyasIyer:[54,34,45,76,48,35],GlennMaxwell:[62,15,41,39,75,67],
      ShimronHetmeyer:[25,64,23,41,50,45],PrithviShaw:[40,74,52,39,64,12],DevduttPadikkal:[25,64,102,34,49,35],
      RajatPatidar:[10,2,8,25,32,24],MarcusStoinis:[24,35,46,54,33,39],AxarPatel:[30,25,49,65,43,35],
      KyleJamieson:[30,34,23,37,25,26],WashingtonSundar:[10,25,37,25,20,46],AveshKhan:[40,45,50,43,35,55],
      KagisoRabada:[30,35,26,25,34,30],MohammedSiraj:[50,45,55,32,47,47],AmitMishra:[30,24,63,31,35,38],
      IshantSharma:[20,35,24,31,29,35],HarshalPatel:[30,35,45,55,47,52],Chahal:[20,24,16,21,18,25],
      DanielSams:[10,24,16,25,21,17]};
//const obj=JSON.parse(scores);
var playlist=new Set();
var scoresdiv=document.createElement('table');
scoresdiv.className="scoreslist";
var localdiv=document.getElementById('youryourteam');
$('.normalbutton').click(function () {
            nrmlbuttoncount++;
	      $(this).parent().addClass('active');
            var creditsnow=$(this).siblings('.credits').text();
            creditscount+=parseInt(creditsnow);
            var playername=$(this).siblings('.player').text();
            console.log(playername);
            playlist.add(playername);
            var node = document.createTextNode(playername);
            var presdiv=document.createElement('tr');
            presdiv.classList.add("scoreslistdiv");
            var prespar=document.createElement('td');
            prespar.appendChild(node);
            prespar.classList.add("scoreslistrow")
            presdiv.appendChild(prespar);
            //array[Math.floor(Math.random() * array.length)]
            var prespar1=document.createElement('td');
            prespar1.classList.add("scoreslistrow");
            var presscore=scores[playername][Math.floor(Math.random() * scores[playername].length)];
            //console.log(presscore);
            //console.log(typeof(presscore));
            totalscore=(totalscore+presscore);
            //console.log(typeof(totalscore));
            console.log("totalscore="+totalscore);
            var node1 = document.createTextNode(presscore);
            prespar1.appendChild(node1);
            presdiv.appendChild(prespar1);
            scoresdiv.appendChild(presdiv);
            /**console.log(creditscount);**/
            $(".creditsinfo .creditsused").text(creditscount);
            $(this).css("visibility","hidden");
        });
localdiv.appendChild(scoresdiv);

/**end of function to count credits**/
/**$('.checkscore').click(function (){
      var r= $('<button type="button" class="clickforscore">Next</button>');
        $("#yourteam").append(r);
});**/

var progressbarlength=document.getElementsByClassName('progressunit');

/*** mapping respective players to respective areas on ground**/

$(".wicketkeeper").on("click",".clickhere",function(){
	console.log(this);
      $("#wicketkeeperarea .inside").append($(this).parent().siblings('.image').html());
      count++;
      wkcount++;
      wkchosen++;
      console.log("wks chosen: "+wkchosen);
      if(wkcount>=minwk && bmchosen<3)
      {
      	alert("Choose minimum number of Batsmen");
            $("#bm").prop('disabled',false);
            $("#wk").prop('disabled',true);
      	showbm();
      }
      else if(wkcount>=minwk && archosen<1)
      {
      	alert("Choose minimum number of Allrounders");
            $("#ar").prop('disabled',false);
            $("#wk").prop('disabled',true);
      	showar();
      }
      else if(wkcount>=minwk && bwchosen<3)
      {
      	alert("Choose minimum number of Bowlers");
            $("#bw").prop('disabled',false);
            $("#wk").prop('disabled',true);
      	showbw();
      }
      else if(wkcount>=minwk && bmcount>=minbm && arcount>=minar && bwcount>=minbw)
      {
            $("#bm").prop('disabled',false);
            $("#wk").prop('disabled',false);
            $("#bw").prop('disabled',false);
            $("#ar").prop('disabled',false);
      }
      for(var x=0;x<count && count<12;x++)
      	progressbarlength[x].style.backgroundColor="green";
      if(count==11)
      	{
      		$(".block1").hide();
      		$(".block2").hide();
      		$("#yourteam").css("visibility","visible");
      	}
      $(".playersinfo .playerschosen").text(count + "/" +"11");
      $(this).prop('disabled',true);
      if($(this).hasClass("teama"))
      	{
      		counta++;
      		/**console.log(counta);**/
      		$(".teamainfo .teamaplayerschosen").text(counta);
      	}
      if($(this).hasClass("teamb"))
      	{
      		countb++;
      		/**console.log(countb);**/
      		$(".teambinfo .teambplayerschosen").text(countb);
      	}
      $(this).css('color', 'red');
      $(this).css('border', 'solid 1px red');
      if($(".parent").hasClass("active"))
		{
			$("#myteam").append($(".parent.active")).html();
		}
	var wkrowCount = $('.wktable tr').length;
	console.log(wkrowCount);
	if(wkrowCount==1)
		{
			$(".wktable tbody tr").remove();
			$(".whenallwkadded").css("visibility","visible");
		} 
 });
$(".batsmen").on("click",".clickhere",function(){
      $("#batsmenarea .inside").append($(this).parent().siblings('.image').html());
      count++;
      bmcount++;
      bmchosen++;
      console.log("bms chosen: "+bmchosen);
      if(bmcount>=minbm && archosen<1)
      {
      	alert("Choose minimum number of Allrounders");
            $("#ar").prop('disabled',false);
            $("#bm").prop('disabled',true);
      	showar();
      }
      else if(bmcount>=minbm && bwchosen<3)
      {
      	alert("Choose minimum number of Bowlers");
            $("#bw").prop('disabled',false);
            $("#bm").prop('disabled',true);
      	showbw();
      }
      else if(bmcount>=minbm && wkchosen<1)
      {
      	alert("Choose minimum number of Wicketkeepers");
            $("#wk").prop('disabled',false);
            $("#bm").prop('disabled',true);
      	showwk();
      }
      else if(wkcount>=minwk && bmcount>=minbm && arcount>=minar && bwcount>=minbw)
      {
            $("#bm").prop('disabled',false);
            $("#wk").prop('disabled',false);
            $("#bw").prop('disabled',false);
            $("#ar").prop('disabled',false);
      }
      for(var x=0;x<count && count<12;x++)
      	progressbarlength[x].style.backgroundColor="green";
      if(count==11)
      	{
      		$(".block1").hide();
      		$(".block2").hide();
      		$("#yourteam").css("visibility","visible");
      	}
      $(".playersinfo .playerschosen").text(count + "/" +"11");
      $(this).prop('disabled',true);
      if($(this).hasClass("teama"))
      	{
      		counta++;
      		/**console.log(counta);**/
      		$(".teamainfo .teamaplayerschosen").text(counta);
      	}
      if($(this).hasClass("teamb"))
      	{
      		countb++;
      		/**console.log(countb);**/
      		$(".teambinfo .teambplayerschosen").text(countb);
      	}
      $(this).css('color', 'red');
      $(this).css('border', 'solid 1px red');
      if($(".parent").hasClass("active"))
		{
			$("#myteam").append($(".parent.active")).html();
		}
 });
$(".allrounder").on("click",".clickhere",function(){
      $("#allrounderarea .inside").append($(this).parent().siblings('.image').html());
      count++;
      arcount++;
      archosen++;
      console.log("ars chosen is: " + archosen);
      if(arcount>=minar && bwchosen<3)
      {
      	alert("Choose minimum number of Bowlers");
            $("#bw").prop('disabled',false);
            $("#ar").prop('disabled',true);
      	showbw();
      }
      else if(arcount>=minar && wkchosen<1)
      {
      	alert("Choose minimum number of Wicketkeepers");
            $("#wk").prop('disabled',false);
            $("#ar").prop('disabled',true);
      	showwk();
      }
      else if(arcount>=minar && bmchosen<3)
      {
      	alert("Choose minimum number of Batsmen");
            $("#bm").prop('disabled',false);
            $("#ar").prop('disabled',true);
      	showbm();
      }
      else if(wkcount>=minwk && bmcount>=minbm && arcount>=minar && bwcount>=minbw)
      {
            $("#bm").prop('disabled',false);
            $("#wk").prop('disabled',false);
            $("#bw").prop('disabled',false);
            $("#ar").prop('disabled',false);
      }
      for(var x=0;x<count && count<12;x++)
      	progressbarlength[x].style.backgroundColor="green";
      if(count==11)
      	{
      		$(".block1").hide();
      		$(".block2").hide();
      		$("#yourteam").css("visibility","visible");
      	}
      $(".playersinfo .playerschosen").text(count + "/" +"11");
      $(this).prop('disabled',true);
      if($(this).hasClass("teama"))
      	{
      		counta++;
      		/**console.log(counta);**/
      		$(".teamainfo .teamaplayerschosen").text(counta);
      	}
      if($(this).hasClass("teamb"))
      	{
      		countb++;
      		/***console.log(countb);**/
      		$(".teambinfo .teambplayerschosen").text(countb);
      	}
      $(this).css('color', 'red');
      $(this).css('border', 'solid 1px red');
      if($(".parent").hasClass("active"))
		{
			$("#myteam").append($(".parent.active")).html();
		}
	var arrowCount = $('.artable tr').length;
	console.log(arrowCount);
	if(arrowCount==1)
		{
			$(".artable tbody tr").remove();
			$(".whenallaradded").css("visibility","visible");
		} 
 });
$(".bowler").on("click",".clickhere",function(){
      $("#bowlerarea .inside").append($(this).parent().siblings('.image').html());
      count++;
      bwcount++;
      bwchosen++;
      console.log("bwschosen is: "+bwchosen);
      if(bwcount>=minbw && wkchosen<1)
      {
      	alert("Choose minimum number of Wicketkeepers");
            $("#wk").prop('disabled',false);
            $("#bw").prop('disabled',true);
      	showwk();
      }
      else if(bwcount>=minbw && bmchosen<3)
      {
      	alert("Choose minimum number of Batsmen");
            $("#bm").prop('disabled',false);
            $("#bw").prop('disabled',true);
      	showbm();
      }
      else if(bwcount>=minbw && archosen<1)
      {
      	alert("Choose minimum number of Allrounders");
            $("#ar").prop('disabled',false);
            $("#bw").prop('disabled',true);
      	showar();
      }
      else if(wkcount>=minwk && bmcount>=minbm && arcount>=minar && bwcount>=minbw)
      {
            $("#bm").prop('disabled',false);
            $("#wk").prop('disabled',false);
            $("#bw").prop('disabled',false);
            $("#ar").prop('disabled',false);
      }
      for(var x=0;x<count && count<12;x++)
      	progressbarlength[x].style.backgroundColor="green";
      if(count==11)
      	{
      		$(".block1").hide();
      		$(".block2").hide();
      		$("#yourteam").css("visibility","visible");
      	}
      $(".playersinfo .playerschosen").text(count + "/" +"11");
      $(this).prop('disabled',true);
      if($(this).hasClass("teama"))
      	{
      		counta++;
      		/**console.log(counta);**/
      		$(".teamainfo .teamaplayerschosen").text(counta);
      	}
      if($(this).hasClass("teamb"))
      	{
      		countb++;
      		/**console.log(countb);**/
      		$(".teambinfo .teambplayerschosen").text(countb);
      	}
      $(this).css('color', 'red');
      $(this).css('border', 'solid 1px red');
      if($(".parent").hasClass("active"))
		{
			$("#myteam").append($(".parent.active")).html();
		}
 });

/**done with mapping**/

$(".checkscore").click(function()
{
      $(".topofteam").text("SCORES");
      $("#myteam").hide();
      $(".scoreslist").show();
      $("scoreslist").addClass("centerthetext");
      $(".lastdiv").show();
      var fs=document.getElementsByClassName("lastspan");
      fs[0].innerHTML=totalscore;
      //$(".lastdiv.lastp.lastspan").text(totalscore);
      $(".checkscore").hide();
      for(const key of Object.keys(scores))
      {
            if(!playlist.has(key))
                  oppscore+=scores[key][Math.floor(Math.random()*scores[key].length)];
      }
      var os=document.getElementsByClassName("flastspan");
      os[0].innerHTML=oppscore;
      console.log(oppscore);
      var oppcred=(totcred-creditscount);
      var yc=document.getElementById("ycs");
      yc.innerHTML=creditscount;
      var oc=document.getElementById("ocs");
      oc.innerHTML=oppcred;
      var sr=document.getElementById("showresult");
      var yw="Congratulations!!!You Won!!!";
      var yl="You lost the game!";
      if(oppcred*totalscore > creditscount*oppscore)
      {
            var docs = document.getElementById("resimg");
            docs.setAttribute("src", "https://media.giphy.com/media/cOtvwSHKaFK3Ul1VVu/giphy.gif");
            docs.style.display = 'block';
            console.log(yw);
      }
      else
      {
            var docs = document.getElementById("resimg");
            docs.setAttribute("src", "https://media.giphy.com/media/0laTZoLJHVHTwiag6Q/giphy.gif");
            docs.style.display = 'block';
            console.log(yl);
      }
});



