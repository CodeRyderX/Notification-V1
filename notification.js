const unRead = document.querySelectorAll(".unread");
const MarkAll = document.querySelector(".mark_all");
const notify = document.querySelector(".digit");
const read = document.querySelectorAll(".read") ;

notify.textContent = 3

MarkAll.addEventListener('click', () => {
    unRead.forEach((item) => {
    item.lastElementChild.lastElementChild.classList.remove("mark")
    item.classList.add("transparent")
    })
})
unRead.forEach(item => {
    item.addEventListener('click', () => {
        item.lastElementChild.lastElementChild.classList.remove("mark")
        item.classList.add("transparent")
        if (notify.textContent > 0 && notify.textContent <= 3) {
            notify.textContent -= 1
        }
    })
})