const API_KEY = "ceccfe85529e475c91ecba34d258bc64"
const url="https://newsapi.org/v2/everything?q="

window.addEventListener("load",()=>getNews("India"))


const getNews = async (query)=>{
    let response = await fetch(`${url}${query}&apiKey=${API_KEY}`)
    let data = await response.json()
    console.log(data)
    data.articles.forEach((article)=>{
        console.log(article)
    })
    AddData(data.articles)
}

//appendchild does not make copy, it simply modifies the original one

const AddData = (articles)=>{

    const cardscontainer = document.getElementById("cards-container")
    const newcardtemplate = document.getElementById("template-news-card")

    cardscontainer.innerHTML = "" 

    articles.forEach((article)=>{
        // console.log("sadock chutiya",index)
        console.log(article)
    //     if(!article.urlToImage){
    //         return;
    //     }
    //     else{
    //         // const cardclone = newcardtemplate.content.cloneNode(true)
    //         const templateContent = document.createElement("div")
    //         templateContent.innerHTML = newcardtemplate.innerHTML
    //         fillDatainCard(templateContent,article)
    //         cardscontainer.appendChild(templateContent)
    //         // cardscontainer.appendChild(newcardtemplate.content)
    //         // cardscontainer.appendChild(cardclone)
    //     }
    // })
    // const cardclone = newcardtemplate.content.cloneNode(true)
    const templateContent = document.createElement("div")
    templateContent.innerHTML = newcardtemplate.innerHTML
    fillDatainCard(templateContent,article)
    cardscontainer.appendChild(templateContent)

    }
    )
            // cardscontainer.appendChild(newcardtemplate.content)
            // cardscontainer.appendChild(cardclone)

}


const fillDatainCard = (templateContent,article)=>{
    // let img_div = templateContent.getElementById("image-header")
    // you can not use getelement on inner divs but only the doc
    let img_div = templateContent.querySelector("#image-header")
    img_div.src = article.urlToImage
    let cardTitle = templateContent.querySelector("#card-title")
    cardTitle.innerText = article.title
    // let card_Date = templateContent.querySelector("#card-date")
    let cardAuthorDate = templateContent.querySelector("#card-Author-Date")
    const standard_time = new Date(article.publishedAt)

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Asia/Jakarta', // Set the timezone to Asia/Jakarta
    };

    const formattedDate = standard_time.toLocaleString('en-US', options);
    const author = article.source.name
    cardAuthorDate.innerText = `${author} : ${formattedDate}`
    // card_Date.innerText = new Date(article.publishedAt)
    let card_desc = templateContent.querySelector("#card-desc")
    card_desc.innerText = article.description

    templateContent.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_self")   
//         In HTML, the target attribute is used to specify where the linked content should be opened when a user clicks on a link or when JavaScript opens a new window or tab. The value of the target attribute can be one of the following:

// _blank: Opens the linked document in a new window or tab.
// _self: Opens the linked document in the same window/tab.
// _parent: Opens the linked document in the parent frame or window.
// _top: Opens the linked document in the full body of the window.
    })

    search_result.value = "" 
}


const askData = (topic)=>{
    getNews(topic)
    // window.history.back();
}

let button = document.getElementById("btn")
let search_result = document.getElementById("search")
button.addEventListener("click",()=>{
    askData(search_result.value)
})
console.log(search_result.value)

search_result.addEventListener("keypress", function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
        askData(search_result.value);
    }
});


const reload = ()=>{
    window.location.reload()
}

