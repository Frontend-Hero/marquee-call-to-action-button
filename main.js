let matchMediaMobile = window.matchMedia("(pointer:coarse)");

if(!matchMediaMobile['matches'])
{
	const marquee = document.getElementById('feh-marquee');

	let translateValue = 0;  
	const step = 0.005; 
	let intervalId = null;

	function startAnimation() {
		if (intervalId === null) {
			intervalId = setInterval(function() {
				marquee.style.transform = "translate3d(" + translateValue.toFixed(3) + "%, 0, 0)";
				translateValue -= step;
				if (translateValue <= -25) {
					translateValue = 0;
				}
			}, 0.5); 
		}
	} 
	startAnimation();

	marquee.addEventListener('mouseover', function() {
		clearInterval(intervalId);
		intervalId = null; // make sure to reset intervalId so we know it's cleared
	});
	marquee.addEventListener('mouseout', startAnimation);
}