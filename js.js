 function switchVisible() {
	if (document.getElementById('imag')) {

		if (document.getElementById('imag').style.display == 'none') {
			document.getElementById('imag').style.display = 'block';
			document.getElementById('bio').style.display = 'none';
		}
		else {
			document.getElementById('imag').style.display = 'none';
			document.getElementById('bio').style.display = 'block';
		}
	}
} 

