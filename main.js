const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');

//on clicking the tab item, selectItem function is called
tabItems.forEach(item=>item.addEventListener('click', selectItem));


function selectItem(e)
{
    removeBorder();
    removeShow();

    //border is added to the bottom
    this.classList.add('tab-border');

    //grab tab content item
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    //add show class to the selected tab
    tabContentItem.classList.add('show');
}


//border is removed from the bottom
function removeBorder()
{
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}

//hide the previously opened tab content
function removeShow()
{
    tabContentItems.forEach(item=>item.classList.remove('show'));
}
