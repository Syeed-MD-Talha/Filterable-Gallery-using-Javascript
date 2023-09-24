const button = document.querySelectorAll('.btn');
const storedImages = document.querySelectorAll('.store-item')

button.forEach((e) => {
    e.addEventListener('click', function () {
        const filter = e.getAttribute('data-filter');

        storedImages.forEach((item) => {
            const itemClassList = item.classList;
            if (filter == 'all') item.style.display = "block";
            else if (!filter || itemClassList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
