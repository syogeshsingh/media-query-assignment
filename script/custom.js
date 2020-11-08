// get the screen width
width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0];

// get view toggle buttons
const toggleViewRow = document.getElementById('view-toggle-row');
const toggleViewCard = document.getElementById('view-toggle-card');

// get hamburger button, close button and sidebar
const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('menuClose')
const sidebar = document.getElementById('sidebar');

// get main
const body = document.getElementById('body'); 

// toggle sidemenu
menuBtn.addEventListener('click', () => {
	sidebar.classList.remove('slds-show_large');
	sidebar.classList.add('slds-show_x-small');
	menuBtn.classList.add('hide');
	closeBtn.classList.remove('hide');
	sidebar.style["position"] = "sticky";
	body.style["overflow"] = "hidden";
});
closeBtn.addEventListener('click', () => {
	sidebar.classList.remove('slds-show_x-small');
	sidebar.classList.add('slds-show_large');
	closeBtn.classList.add('hide');
	menuBtn.classList.remove('hide');
});

//toggle active class on view btn clicks
toggleViewRow.addEventListener('click', () => {
	// toggle button active
	toggleViewRow.classList.add('quick-action__button-is-active');
	toggleViewCard.classList.remove('quick-action__button-is-active');
});
toggleViewCard.addEventListener('click', () => {
	// toggle button active
	toggleViewRow.classList.remove('quick-action__button-is-active');
	toggleViewCard.classList.add('quick-action__button-is-active');
});

// default card view active for medium screen size
if(width < 1024){
	toggleViewRow.classList.remove('quick-action__button-is-active');
	toggleViewCard.classList.add('quick-action__button-is-active');
}
