var ssilkA = document.getElementsByClassName('info-foto');
			var imagE = document.getElementsByClassName('foto');
			
			console.log(ssilkA);
			console.log(imagE);
			
			for (var i=0; i<ssilkA.length; i++) {
				ssilkA[i].dataset.idx = i;
				ssilkA[i].onmouseover = function (){
					imagE[event.target.dataset.idx].style.border='2px solid #0066cc';
					imagE[event.target.dataset.idx].style.transition='0.5s';
				};
				ssilkA[i].onmouseout = function (){
					imagE[event.target.dataset.idx].style.border='';
				};
			};
			
			for (var i=0; i<imagE.length; i++) {
				imagE[i].dataset.idx = i;
				imagE[i].onmouseover = function (){
					ssilkA[event.target.dataset.idx].style.color='#0066cc';
					ssilkA[event.target.dataset.idx].style.transition='0.5s';
				};
				imagE[i].onmouseout = function (){
					ssilkA[event.target.dataset.idx].style.color='';
				};
			};
