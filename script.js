document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `article.html?query=${encodeURIComponent(query)}`;
        }
    }

    // 监听按钮点击
    searchBtn.addEventListener("click", performSearch);

    // 监听回车键
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            performSearch();
        }
    });
});
