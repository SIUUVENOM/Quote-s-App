function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 5);
  return randomNumber;
}
function showQoute() {
  var randomNumber = getRandomNumber();
  var qoutes = [
    {
      qoute: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
      author:`--Dr. Seuss`
    },
    {
      qoute: `“Be yourself; everyone else is already taken.”`,
      author:`--Oscar Wilde`
    },
    {
      qoute: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to
      handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
      author:`--Marilyn Monroe`
    },
    {
      qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
      author:`--Albert Einstein`
    },
    {
      qoute: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
      author:`--Bernard M. Baruch`
    }
  ];

  if (randomNumber == 0) {
    document.getElementById("qoute").innerHTML = `<p>${qoutes[0].qoute}</p><p>${qoutes[0].author}</p>`;
  } else if (randomNumber == 1) {
    document.getElementById("qoute").innerHTML = `<p>${qoutes[1].qoute}</p><p>${qoutes[1].author}</p>`;
  } else if (randomNumber == 2) {
    document.getElementById("qoute").innerHTML = `<p>${qoutes[2].qoute}</p><p>${qoutes[2].author}</p>`;
  } else if (randomNumber == 3) {
    document.getElementById("qoute").innerHTML = `<p>${qoutes[3].qoute}</p><p>${qoutes[3].author}</p>`;
  } else if (randomNumber == 4) {
    document.getElementById("qoute").innerHTML = `<p>${qoutes[4].qoute}</p><p>${qoutes[4].author}</p>`;
  }
}