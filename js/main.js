const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const tabmenu1=document.querySelectorAll('#tab-1')
const tabmenu2 = document.querySelectorAll('#tab-2')
const tabmenu3= document.querySelectorAll('#tab-3')
// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


document.querySelector(".btn_menu").addEventListener("click",function(){
    document.querySelector(".menu").style.display="block";
}
)
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".menu").style.display="none";
}
)

document.querySelector(".btn_basic").addEventListener("click",function(){
	
	tabmenu1.forEach((btn)=>btn.classList.add('tab-border'));
	tabmenu1.forEach((btn)=>btn.classList.add('show'));
    // document.querySelector("#tab-1-content").style.display="block";
	document.querySelector("#tab-1-content").classList.add('show');
	// removeBorder();
	document.querySelector(".menu").style.display="none";
	
}
)

document.querySelector(".btn_brief").addEventListener("click",function(){
	removeBorder();
	removeShow();
	tabmenu2.forEach((btn)=>btn.classList.add('tab-border'));
	// const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabmenu2.forEach((btn)=>btn.classList.add('show'));
	document.querySelector("#tab-2-content").classList.add('show');
	document.querySelector(".menu").style.display="none";
}
    
// {
    // tabmenu.forEach(item => {
	// 	item.addEventListener('click', selectItem);
	// });
	 

    
	
// }
)
	



document.querySelector(".btn_edu").addEventListener("click",function(){
	removeBorder();
	removeShow();
    tabmenu3.forEach((btn)=>btn.classList.add('tab-border'));
	// const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabmenu3.forEach((btn)=>btn.classList.add('show'));
	document.querySelector("#tab-3-content").classList.add('show');
	document.querySelector(".menu").style.display="none";
}
)