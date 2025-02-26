// The appearance of letters
const text = document.querySelector('.title');
const obs2 = new IntersectionObserver((entr, obs) => {
	if(entr[0].isIntersecting) {
		text.style.visibility = 'visible';
		letterTitle(text, '#004684');
		obs2.unobserve(entr[0].target);
	}
}, { root: null, rootMargin: '0px', threshold: 0 });

text.style.visibility = 'hidden';
obs2.observe(text);

async function letterTitle(text, color, step = 80, durationAnim = 800) {
	const text_Prepare = text.textContent.split('');
	var i = 0;
	var time = 0;
	const letterFont = async (letter, time) => {
		const font_Elem = document.createElement('font');
		font_Elem.textContent = letter;
		font_Elem.style.color = 'transparent';
		font_Elem.style.position = 'relative';
		text.appendChild(font_Elem);
		await new Promise((res, rej) => setTimeout(() => res('ok'), time));
		font_Elem.style.color = color;
		font_Elem.style.textShadow = '0 -.01em 0 #ffd700';
		font_Elem.animate([
			{ opacity: '0', top: '-15vh' },
			{ opacity: '1', top: '0' }
			], { duration: durationAnim, fill: 'both' })
	}

	text.textContent = '';
	while(i != text_Prepare.length) {
		letterFont(text_Prepare[i], time = time + step);
		i++;
	}
	lilal = text.querySelectorAll('font');
	setTimeout(() => {
		text.querySelectorAll('font').forEach((font) => font.outerHTML = font.outerHTML.replace(/<.*>(.*)<.*>/, '$1'));
		text.style.textShadow = '0 -.01em 0 #ffd700';
	}, durationAnim * 1.5 + text_Prepare.length * step);
}