let a = document.querySelectorAll('.header__nav_menu>a');
let current = 0;

for(let i=0; i<a.length; i++){
	let li = a[i].querySelector('li');
	if(i == 6){
	a[i].classList.add('header__nav_menu--yellow--active');
	li.style.color = '#1B1BB3';
	}
	else{
		a[i].addEventListener('mouseover',function(){
			a[i].classList.add('header__nav_menu--yellow--active');
			li.style.color = '#1B1BB3';
		});
		a[i].addEventListener('mouseout',function(){
			a[i].classList.remove('header__nav_menu--yellow--active');
			li.style.color = 'white';
		});
	}
}
