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

	var root = document.documentElement;
	document.addEventListener('mousemove', function (e) {
		var x = e.clientX / window.innerWidth;
		var y = e.clientY / window.innerHeight;
		root.style.setProperty('--mouse-x', String(x));
		root.style.setProperty('--mouse-y', String(y));
	});

	// Populate galleries with only existing images
	var candidates = {
		casino: [
			"assets/casino-1.jpg","assets/casino-2.jpg","assets/casino-3.jpg",
			"assets/casino-4.png","assets/casino-5.webp","assets/casino-6.jpeg"
		],
		aware: [
			"assets/aware-1.jpg","assets/aware-2.jpg","assets/aware-3.png",
			"assets/aware-4.webp","assets/aware-5.jpeg"
		]
	};

	function tryLoad(src) {
		return new Promise(function (resolve, reject) {
			var img = new Image();
			img.onload = function () { resolve(src); };
			img.onerror = function () { reject(src); };
			img.src = src;
		});
	}

	function renderGallery(key) {
		var container = document.querySelector('[data-gallery="' + key + '"]');
		if (!container) return;
		var list = candidates[key] || [];
		Promise.allSettled(list.map(tryLoad)).then(function (results) {
			results.forEach(function (res) {
				if (res.status === 'fulfilled') {
					var wrap = document.createElement('div');
					wrap.className = 'gallery-item';
					var img = document.createElement('img');
					img.alt = key + ' image';
					img.src = res.value;
					wrap.appendChild(img);
					container.appendChild(wrap);
				}
			});
		});
	}

	renderGallery('casino');
	renderGallery('aware');
});