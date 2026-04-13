//Інформація
const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    cookiesEnabled: navigator.cookieEnabled
};

localStorage.setItem("systemInfo", JSON.stringify(systemInfo));

const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));

document.getElementById("system-info").innerHTML = `
    Platform: ${savedInfo.platform}<br>
    Browser: ${savedInfo.userAgent}<br>
    Language: ${savedInfo.language}<br>
    Cookies Enabled: ${savedInfo.cookiesEnabled}
`;

//Відгуки
fetch("https://jsonplaceholder.typicode.com/posts/13/comments")
    .then(response => response.json())
    .then(data => {
        const reviewsContainer = document.getElementById("reviews");

        data.forEach(comment => {
            reviewsContainer.innerHTML += `
                <div class="review-card">
                    <h4>${comment.name}</h4>
                    <p><strong>${comment.email}</strong></p>
                    <p>${comment.body}</p>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error("Помилка при отриманні коментарів:", error);
    });

//Зворотній звязок
const modal = document.getElementById("contact-modal");
const closeModalBtn = document.getElementById("close-modal");

setTimeout(() => {
    modal.classList.remove("hidden");
}, 60000);

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});


//Темний режим
const currentHour = new Date().getHours();

if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.remove("dark-theme");
} else {
    document.body.classList.add("dark-theme");
}

//Переключання режиму
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});