document.addEventListener("DOMContentLoaded", () => {

    let desctopHelper = document.querySelector('.main-services__desctopHelper')
    let acc = document.querySelectorAll(".main-services__btn");
    let i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("activeTab");
          let panel = this.nextElementSibling;
          desctopHelper.innerHTML = panel.innerHTML
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
    }

    acc[0].click()
    
})











