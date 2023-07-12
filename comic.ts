const enter = document.getElementById("enter") as HTMLParagraphElement;

const time = document.getElementById("time") as HTMLParagraphElement;


const notice = document.getElementById("notice") as HTMLParagraphElement;


const button = document.getElementById("button") as HTMLButtonElement;

const img = document.getElementById("img") as HTMLImageElement;

const title = document.getElementById("title") as HTMLHeadingElement;




const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('input') as HTMLInputElement;
const messages = document.getElementById('messages') as HTMLUListElement;

async function getId() {
    var id;
    await fetch(`https://fwd.innopolis.university/api/hw2?email=${input.value}`)
        .then(response => response.json())
        .then((data) => {
            id = data;
        })
        .catch(() => {
            notice.classList.remove("wrapped");
            setTimeout(() => {
                notice.classList.add("wrapped");
            }, 2000);
        });
    return id;
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

async function getComic() {
    await fetch(`https://fwd.innopolis.university/api/comic?id=${await getId()}`)
        .then(response => response.json())
        .then((data) => {
            img.src = data["img"]
            title.textContent = data["safe_title"]
            img.alt = data["alt"]
            time.textContent = new Date(data["year"], data["month"], data["day"]).toLocaleDateString(undefined)
        })
}

button?.addEventListener('click', function handleClick(event) {
    console.log('button clicked');
    console.log(event);
    console.log(event.target);
});
