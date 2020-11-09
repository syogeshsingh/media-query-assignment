// ================================= for sidebar toggle ============================
// get hamburger button, close button and sidebar
const menuBtn = document.getElementById('menu'); const closeBtn = document.getElementById('menuClose'); const sidebar = document.getElementById('sidebar');
// get content id
const content = document.getElementById('mainContent');
// toggle sidemenu
menuBtn.addEventListener('click', () => {
	sidebar.classList.remove('slds-show_large');
	sidebar.classList.add('slds-show_x-small');
	menuBtn.classList.add('hide');
	closeBtn.classList.remove('hide');
	content.style["opacity"] = "0.3";
	content.style["overflow"] = "hidden";
});
closeBtn.addEventListener('click', () => {
	sidebar.classList.remove('slds-show_x-small');
	sidebar.classList.add('slds-show_large');
	closeBtn.classList.add('hide');
	menuBtn.classList.remove('hide');
	content.style["opacity"] = "1";
});

// ================================= for view toggle ============================
// get view toggle buttons
const toggleViewRow = document.getElementById('view-toggle-row'); const toggleViewCard = document.getElementById('view-toggle-card');
// get wrapper container
const container = document.getElementById('container');
// get table header 
const tableHeader = document.getElementById('tableHeader');
// get all the required elements using class name
const jsWrapper = document.getElementsByClassName('js-wrapper');
const jsWrapperBody = document.getElementsByClassName('js-wrapper-body');
const jsWrapperBodyContainer = document.getElementsByClassName('js-wrapper-body-container');
const jsWrapperBodyContainerImg = document.getElementsByClassName('js-wrapper-body-container-img');
const jsWrapperBodyContainerName = document.getElementsByClassName('js-wrapper-body-container-name');
const jsWrapperBodyContainerBtn = document.getElementsByClassName('js-wrapper-body-container-button');
const jsWrapperBodyEmail = document.getElementsByClassName('js-wrapper-body-email');
const jsWrapperBodyHelperText = document.getElementsByClassName('js-wrapper-body-helperText');
const jsWrapperBodyNo1 = document.getElementsByClassName('js-wrapper-body-no-1');
const jsWrapperBodyNo2 = document.getElementsByClassName('js-wrapper-body-no-2');
const jsWrapperBodyTotalContri = document.getElementsByClassName('js-wrapper-body-totalContri');
const jsWrapperBodyViewMore = document.getElementsByClassName('js-wrapper-body-viewMore');
const jsWrapperFooter = document.getElementsByClassName('js-wrapper-footer');
// for card view
toggleViewCard.addEventListener('click', () => {
	// toggle button active
	toggleViewRow.classList.remove('quick-action__button-is-active');
	toggleViewCard.classList.add('quick-action__button-is-active');
	// hide table header
	tableHeader.classList.add('hide');
	// remove table classe from container
	container.classList.remove('list-table');

	// remove all the table related classes and add card classes to all elements
	for(var i=0, len=jsWrapper.length; i<len; i=i+1){
		jsWrapper[i].classList.remove('list-table-row');
		jsWrapperBody[i].classList.remove('table-row-items');
		jsWrapperBodyContainer[i].classList.remove('list-table-container'); jsWrapperBodyContainer[i].classList.remove('slds-large-col');
		jsWrapperBodyContainer[i].classList.remove('slds-large-size_4-of-12');
		jsWrapperBodyContainerImg[i].classList.remove('img-small');
		jsWrapperBodyContainerName[i].classList.remove('l-m-left-small');
		jsWrapperBodyContainerBtn[i].classList.remove('slds-hide_large'); jsWrapperBodyContainerBtn[i].classList.add('slds-show');
		jsWrapperBodyContainerBtn[i].classList.remove('view-more-reverse');
		jsWrapperBodyEmail[i].classList.remove('slds-hide_large'); jsWrapperBodyEmail[i].classList.add('slds-show');
		jsWrapperBodyHelperText[i].classList.remove('slds-hide_large'); jsWrapperBodyHelperText[i].classList.add('slds-show'); 
		jsWrapperBodyNo1[i].classList.add('hide'); jsWrapperBodyNo2[i].classList.add('hide');
		jsWrapperBodyTotalContri[i].classList.remove('slds-large-col'); jsWrapperBodyTotalContri[i].classList.remove('slds-large-size_2-of-12');
		jsWrapperBodyViewMore[i].classList.remove('list-table-container'); jsWrapperBodyViewMore[i].classList.add('hide');
		jsWrapperFooter[i].classList.remove('slds-hide_large'); jsWrapperFooter[i].classList.add('slds-show');
	}

	// add card wrapping properties
	container.style.flexDirection = "row"; container.style.flexWrap = "wrap";

});
// for table view
toggleViewRow.addEventListener('click', () => {
	// toggle button active
	toggleViewRow.classList.add('quick-action__button-is-active');
	toggleViewCard.classList.remove('quick-action__button-is-active');
	// show table header
	tableHeader.classList.remove('hide');
	// add table class to container
	container.classList.add('list-table');

	for(var i=0, len=jsWrapper.length; i<len; i=i+1){
		jsWrapper[i].classList.add('list-table-row');
		jsWrapperBody[i].classList.add('table-row-items');
		jsWrapperBodyContainer[i].classList.add('list-table-container'); jsWrapperBodyContainer[i].classList.add('slds-large-col');
		jsWrapperBodyContainer[i].classList.add('slds-large-size_4-of-12');
		jsWrapperBodyContainerImg[i].classList.add('img-small');
		jsWrapperBodyContainerName[i].classList.add('l-m-left-small');
		jsWrapperBodyContainerBtn[i].classList.add('slds-hide_large'); jsWrapperBodyContainerBtn[i].classList.remove('slds-show');
		jsWrapperBodyContainerBtn[i].classList.add('view-more-reverse');
		jsWrapperBodyEmail[i].classList.add('slds-hide_large'); jsWrapperBodyEmail[i].classList.remove('slds-show');
		jsWrapperBodyHelperText[i].classList.add('slds-hide_large'); jsWrapperBodyHelperText[i].classList.remove('slds-show'); 
		jsWrapperBodyNo1[i].classList.remove('hide'); jsWrapperBodyNo2[i].classList.remove('hide');
		jsWrapperBodyTotalContri[i].classList.add('slds-large-col'); jsWrapperBodyTotalContri[i].classList.add('slds-large-size_2-of-12');
		jsWrapperBodyViewMore[i].classList.add('list-table-container'); jsWrapperBodyViewMore[i].classList.remove('hide');
		jsWrapperFooter[i].classList.add('slds-hide_large'); jsWrapperFooter[i].classList.remove('slds-show');
	}

	// remove card wrapping properties
	container.style.flexDirection = "column"; container.style.flexWrap = "nowrap";
});