let a = document.querySelectorAll('.header__nav_menu>a');
let current = 0;
let li_drop = document.querySelectorAll('.header__nav_menu_point_under>a li');

for(let i=0; i<a.length; i++){
	let li = a[i].querySelector('li');
	let sublink = document.getElementsByClassName('header__nav_menu_point_under');
	if(i == 6){
	a[i].classList.add('header__nav_menu--yellow--active');
	li.style.color = '#1B1BB3';
	}
	else{
		a[i].addEventListener('mouseover',function(){
			a[i].classList.add('header__nav_menu--yellow--active');
			li.style.color = '#1B1BB3';
				if(i==2){
				a[i].classList.remove('header__nav_menu--yellow--active');
				a[i].style.cursor = 'default';
				li.style.color = 'white';
				}
				else if(i==3){
				a[i].classList.remove('header__nav_menu--yellow--active');
				a[i].style.cursor = 'default';
				li.style.color = 'white';
				}
				else if(i==4){
				a[i].classList.remove('header__nav_menu--yellow--active');
				a[i].style.cursor = 'default';
				li.style.color = 'white';
				}
				else if(i==5){
				a[i].classList.remove('header__nav_menu--yellow--active');
				a[i].style.cursor = 'default';
				li.style.color = 'white';
				}
			else if(i==1){
			sublink[0].classList.add('header__nav_menu--yellow--active--drop');
			sublink[0].style.display = 'flex';
			sublink[0].addEventListener('mouseover',function(){
					sublink[0].style.display = 'flex';
					a[i].classList.add('header__nav_menu--yellow--active');
					li.style.color = '#1B1BB3';
					for(let b=0; b<li_drop.length;b++){
						li_drop[b].addEventListener('mouseover',function(){
							li_drop[b].style.color = 'white';
						});
					}
				});
			}
		});
		a[i].addEventListener('mouseout',function(){
			a[i].classList.remove('header__nav_menu--yellow--active');
			li.style.color = 'white';
			if(i==1){
			sublink[0].style.display = 'none';
			}
			sublink[0].addEventListener('mouseout',function(){
					sublink[0].style.display = 'none';
					a[i].classList.remove('header__nav_menu--yellow--active');
					li.style.color = 'white';
						for(let b=0; b<li_drop.length;b++){
							li_drop[b].addEventListener('mouseout',function(){
								li_drop[b].style.color = '#1B1BB3';
							});
						}
				});
		});
		
	}	
	a[2].classList.add('noactive');
	a[3].classList.add('noactive');
	a[4].classList.add('noactive');
	a[5].classList.add('noactive');
}
