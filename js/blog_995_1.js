let ab = document.querySelectorAll('.header__nav_menu>li');
let link = document.querySelectorAll('.header__nav_menu>li a');
let li_drop = document.querySelectorAll('.header__nav_menu_point_under ul');
let under = document.querySelector('.header__nav_menu_point_under');


for(let i = 0; i < ab.length; i++){
	ab[i].classList.add('noactive');
	if(i == 6){
		ab[i].classList.remove('noactive');
		ab[i].classList.add('header__nav_menu--yellow--active');
		link[8].style.color = '#1B1BB3';
	}else if(i == 0){
		ab[i].classList.remove('noactive');
	}else if(i == 1){
		ab[i].classList.remove('noactive');
	}

	ab[i].onmouseover = function(){
		if(i == 0){
			ab[i].classList.remove('noactive');
			ab[i].classList.add('header__nav_menu--yellow--active');
			link[i].style.color = '#1B1BB3';
		}else if(i == 1){
			ab[i].classList.add('header__nav_menu--yellow--active');
			link[i].style.color = '#1B1BB3';
			under.style.display = 'flex';
			under.onmouseover = function(){
				under.style.display = 'flex';
				ab[i].classList.add('header__nav_menu--yellow--active');
				ab[i].style.color = '#1B1BB3';
				link[i].style.color = '#1B1BB3';
			}
		}else if(i == 6){
			ab[i].classList.add('header__nav_menu--yellow--active');
			link[8].style.color = '#1B1BB3';
		}
		else{
			ab[i].classList.add('noactive');
		}

	}
	ab[i].onmouseout = function(){
		ab[i].classList.remove('header__nav_menu--yellow--active');
		link[i].style.color = '#ffffff';
		under.style.display = 'none';
		if(i == 6){
			ab[i].classList.add('header__nav_menu--yellow--active');
			link[8].style.color = '#1B1BB3';
		}
	}
	under.onmouseout = function(){
				ab[1].classList.remove('header__nav_menu--yellow--active');
				//ab[1].style.color = '#fffff';
				link[1].style.color = '#ffffff';
			    under.style.display = 'none';
			}
}