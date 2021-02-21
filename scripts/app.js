(() => {

  const getCatImages = async (limit) => {
    const apiBaseUrl = "https://api.thecatapi.com/v1/"
    const searchEndpoint = "images/search"
    const queryParameter = "limit=" + limit

    const url = apiBaseUrl + searchEndpoint + "?" + queryParameter

    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json();
      urls = json.map((element)=>{
        return element["url"];
      });
      return urls;
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  const displayCards = () => {
    const cardsSection = document.createElement("section");
    cardsSection.classList.add("cards")

    getCatImages(10).then((urls)=>{
      urls.forEach((url) => {
        const cardAnchor = document.createElement("a")
        cardAnchor.href = "#"
        cardAnchor.classList.add("card");
        cardAnchor.innerHTML = `
          <div class="card__overlay">
            <span>Read More</span>
          </div>
          <div class="card__image" style="background-image:url('${url}')"></div>
          <div class="card__content">
            <div class="card__title">ねこ、私は子猫ちゃん、踊りを踊るよ踊るよ踊るよ</div>
            <div class="card__description">
              吾輩わがはいは猫である。名前はまだ無い。どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。
            </div>
          </div>
          <div class="card__date">2021 / 2 / 20</div>
          <div class="card__readtime">5 min read</div>
        `

        cardsSection.append(cardAnchor);
      });
      document.querySelector("body").append(cardsSection);
    })
  }

  displayCards();
})()