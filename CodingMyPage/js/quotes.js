const quotes = [
  {
    english: "The first duty of love is to listen.",
    korean: "사랑의 첫 번째 의무는 상대방에 귀기울이는 것이다.",
    author: "Paul Tillich"
  },
  {
    english:"Real love is a permanently self-enlarging experience.",
    korean: "진정한 사랑은 영원히 자신을 성장시키는 경험이다.",
    author: "M. Scott Peck"
  },
  {
    english: "A coward is incapable of exhibiting love; it is the prerogative of the brave.",
    korean: "겁쟁이는 사랑을 드러낼 능력이 없다. 사랑은 용기있는 자의 특권이다.",
    author: "Mahatma Gandhi"
  },
  {
    english: "Travel is only glamorous in retrospect.",
    korean: "여행은 되돌아 보았을 때에만 매력적이다.",
    author: "Paul Theroux"
  },
  {
    english: "At 20 years of age the will reigns, at 30 the wit, at 40 the judgment.",
    korean: "20대에는 의지, 30대에는 기지, 40대에는 판단이 지배한다.",
    author: "Benjamin Franklin"
  },
  {
    english: "I'm youth, I'm joy, I'm a little bird that has broken out of the egg.",
    korean: "나는 젊음이요, 나는 기쁨이요, 나는 알에서 갓 깬 작은 새다.",
    author: "James M. Barrie"
  },
  {
    english: "I'd rather be hated for who I am than be loved for who I'm not.",
    korean: "다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.",
    author: "Kurt Cobain"
  },
  {
    english: "If I have lost confidence in myself, I have the universe against me.",
    korean: "내 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 된다.",
    author: "Ralph Waldo Emerson"
  },
  {
    english: "No man is good enough to govern another man without that other's consent.",
    korean: "누구도 본인의 동의없이 남을 지배할 만큼 훌륭하지는 않다.",
    author: "Abraham Lincoln"
  },
  {
    english: "While there's life, there's hope.",
    korean: "삶이 있는 한 희망은 있다.",
    author: "Cicero"
  },
];

const englishQuote = document.querySelector("#quotes div:first-child");
const koreanQuote = document.querySelector("#quotes div:nth-child(2)")
const author = document.querySelector("#quotes div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

 englishQuote.innerText = todaysQuote.english;
 koreanQuote.innerText = todaysQuote.korean;
 author.innerText = todaysQuote.author;

