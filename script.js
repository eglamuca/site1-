document.addEventListener('DOMContentLoaded', function onReady() {
	var yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	var pressBtn = document.querySelector('[data-press]');
	if (pressBtn) {
		pressBtn.addEventListener('click', function () {
			var messages = [
				"Roll the dice!",
				"Shuffle up and deal!",
				"Jackpot vibes ✨",
				"Neon nights, bright lights",
				"Play responsibly 💜"
			];
			pressBtn.textContent = messages[Math.floor(Math.random() * messages.length)];
		});
	}

	// Subtle parallax glow on mouse move
	var root = document.documentElement;
	document.addEventListener('mousemove', function (e) {
		var x = e.clientX / window.innerWidth;
		var y = e.clientY / window.innerHeight;
		root.style.setProperty('--mouse-x', String(x));
		root.style.setProperty('--mouse-y', String(y));
	});
});