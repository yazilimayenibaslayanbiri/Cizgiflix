const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e) {
  removeBorder()
  removeShow();
  this.classList.add('tab-border')
  console.log(this.id);
 
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}
function removeShow(){
 tabContentItems.forEach(item => item.classList.remove('show'))
}
function removeBorder() {
tabItems.forEach(item => item.classList.remove('tab-border'))
}
tabItems.forEach(item => item.addEventListener('click', selectItem))


