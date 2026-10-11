const services = [
    {
        number: "01",
        category: "TASARIM & GELİŞTİRME",
        title: "Web Tasarım",
        description:
            "Markanızı dijitalde en iyi şekilde temsil eden, modern, hızlı ve mobil uyumlu web siteleri tasarlıyoruz.",
        link: "#iletisim"
    },
    {
        number: "02",
        category: "STRATEJİ & BÜYÜME",
        title: "Dijital Reklam",
        description:
            "İşletmenizin doğru kitleye ulaşmasına ve reklam bütçesini daha verimli kullanmasına yönelik çözümler geliştiriyoruz.",
        link: "#iletisim"
    },
    {
        number: "03",
        category: "İÇERİK & KİMLİK",
        title: "Sosyal Medya",
        description:
            "Markanızın dijital kimliğini güçlendiren, tutarlı ve profesyonel bir sosyal medya görünümü oluşturmanıza yardımcı oluyoruz.",
        link: "#iletisim"
    }
];

const serviceContainer = document.querySelector("#hizmet-kartlari");

if (serviceContainer) {
    serviceContainer.innerHTML = services
        .map(service => `
            <article class="service-card">
                <div class="service-card-top">
                    <span class="service-number">${service.number}</span>
                    <span class="service-arrow" aria-hidden="true">↗</span>
                </div>

                <span class="service-category">${service.category}</span>

                <h3>${service.title}</h3>

                <p>${service.description}</p>

                <a href="${service.link}" class="service-link">
                    Projeni konuşalım <span aria-hidden="true">→</span>
                </a>
            </article>
        `)
        .join("");
}