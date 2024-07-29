function modalTab(){
    //modalSidebar
let tabContent = document.querySelectorAll('[data-tab-Content]');
let tabs = document.querySelectorAll('[data-tab-Target]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab2 => tab2.classList.remove("active"));
        let target = document.querySelector(tab.dataset.tabTarget);  // Fix here
        tabContent.forEach(content => content.classList.remove('activeContent'));
        target.classList.add("activeContent");
        tab.classList.add("active");
        
    });
});
}

function homeTab(){

}

export { modalTab, homeTab};