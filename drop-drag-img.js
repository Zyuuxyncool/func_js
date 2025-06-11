 const dropArea = document.getElementById("drop_area"); //div drop_area
    const fileImage = document.getElementById("file_input"); //id input
    const previewContainer = document.getElementById("preview_container"); //[review_container]

    // Mencegah perilaku default untuk event drag and drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, e => e.preventDefault());
    });

    // Handle drop
    dropArea.addEventListener("drop", handleDrop);

    function handleDrop(e) {
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            previewImage(file);
        }
    }

    dropArea.addEventListener("click", () => fileImage.click()); //click Input
    fileImage.addEventListener("change", () => {
        const file = fileImage.files[0];
        if (file && file.type.startsWith("image/")) {
            previewImage(file);
        }
    });

    function previewImage(file) {
        const dropImage = dropArea.querySelector('img');
        const dropText = dropArea.querySelector('p');
        if (dropImage) dropImage.remove();
        if (dropText) dropText.remove();

        const reader = new FileReader();
        reader.onload = function(e) {
            previewContainer.innerHTML = `<img src="${e.target.result}" style="max-width: 100px; max-height: 100px; margin-top: 10px; height: 100%; width: auto;" alt="Preview">`;
        };

      // By Zyuuxyncool

        reader.readAsDataURL(file);

    }
