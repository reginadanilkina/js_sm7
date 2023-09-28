document.addEventListener("DOMContentLoaded", function() {
    const news = [
      {
        id: 1,
        name: "DigitalSkills 2023",
        author: "Фанзиля Гимадиева",
        date: "24.09.2023",
        text: "23 сентября, в Казань-Экспо состоялась торжественная церемония закрытия и награждения V Отраслевого чемпионата в сфере информационных технологий DigitalSkills 2023! "
      }
    ];
  
    const newsContainer = document.getElementById("new");
  
    function createNewsElement(newsItem) {
      const newsElement = document.createElement("div");
      newsElement.classList.add("news");
  
      newsElement.innerHTML =
      `<div class="border">
       <div class="title-date">
          <h1 class="title">${newsItem.name}</h1>
          <p class="date-id">${newsItem.date}</p>
        </div>
        <p class="text">${newsItem.text}</p>
        <div class="author-id">
          <p class="author">${newsItem.author}</p>
          <p class="date-id">id: ${newsItem.id}</p>
        </div>
       </div>`;
  
      return newsElement;
    }
  
    news.forEach(newsItem => {
        const newsElement = createNewsElement(newsItem);
        newsContainer.appendChild(newsElement);
    });

    const newsForm = document.getElementById("newsForm");
    newsForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Запросить у пользователя подробности новости
      const name = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const date = document.getElementById("date").value;
      const text = document.getElementById("text").value;
      
      // Создать новую новость
      const newNews = {
        id: news.length + 1,
        name,
        author,
        date,
        text
      };
      
      // Добавьте новую новость в массив
      news.push(newNews);
      
      // Добавьте новую новость в контейнер новостей.
      const newsElement = createNewsElement(newNews);
      newsContainer.appendChild(newsElement);

      newsForm.reset();
  });

});