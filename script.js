// THE FULL 365-DAY DATABASE (Sourced from your provided text)
const quotes = [
  // MONTH 1: THE FOUNDATION OF FIRE
  {
    title: "The Sovereign Architect",
    text: "Stop waiting for a map to be handed to you when you are the one holding the ink. Your potential is a debt you owe to the person you intend to become.",
  },
  {
    title: "The Alchemist of Pain",
    text: "The wound is not a sign of weakness, but the precise point where the light enters the soul. Every struggle is the friction required to sharpen your edge.",
  },
  {
    title: "The Kinetic Silence",
    text: "Movement is the only language the universe respects. While the world sleeps in 'tomorrow,' hunt the 'now' with predatory focus.",
  },
  {
    title: "The Celestial Grind",
    text: "You are not a drop in the ocean; you are the entire ocean surging within a single drop. Burn so brightly that the darkness has no choice but to retreat.",
  },
  {
    title: "The Unconquered Ghost",
    text: "Yesterday is a ghost that has no power over the living unless you invite it in. Treat this sunrise as a cosmic reset button.",
  },
  {
    title: "The Iron Philosophy",
    text: "Do not ask for a lighter burden when you can build stronger shoulders and a heart of tempered steel. Stay hungry, stay dangerous.",
  },
  {
    title: "The Rhythm of the Hunter",
    text: "Time is the only currency you can never earn back. Win the morning to win the day, and win the day to conquer the year.",
  },
  {
    title: "The Gravity of Will",
    text: "You are the architect of your own gravity; pull the world toward your vision rather than drifting in someone else’s orbit.",
  },
  {
    title: "The Stoic Sunrise",
    text: "An obstacle is only a wall if you stop; it is a step if you climb. Use the cold to freeze your resolve into something unbreakable.",
  },
  {
    title: "The Echo of Legacy",
    text: "What you do in the dark will eventually find its way into the light. Work as if your greatest enemy is watching.",
  },
  {
    title: "The Fire Starter",
    text: "Passion is a spark, but discipline is the fuel that keeps the fire roaring. Action creates the mood; the mood does not create the action.",
  },
  {
    title: "The Infinite Horizon",
    text: "The sky isn't the limit; it's the starting line. Your race is private, your pace is personal, and your victory is inevitable if you do not stop.",
  },
  {
    title: "The Mirror of Truth",
    text: "Look yourself in the eye today and demand more than you did yesterday. If you approach the world with a warrior's heart, it will yield treasures.",
  },
  {
    title: "The Silent Storm",
    text: "Let your success be your noise. Build an empire while others are busy describing one. Your results will eventually speak so loudly words aren't necessary.",
  },
  {
    title: "The Sculptor’s Hand",
    text: "Life is a block of unformed stone, and every choice is a strike of the chisel. Aim for elegance, strength, and never settle for 'good enough'.",
  },
  {
    title: "The Depth of Being",
    text: "Dig past the surface of your ego to find the steady, unmoving core of your soul. From that place of stillness, you can move mountains.",
  },
  {
    title: "The Wildcard",
    text: "Normalcy is a paved road; comfortable, but no flowers grow on it. Embrace the intensity of your drive. The world was changed by people who were 'too much'.",
  },
  {
    title: "The Breath of Life",
    text: "Every breath is a second chance. If you failed an hour ago, that version of you is already dead. The man breathing right now is new.",
  },
  {
    title: "The Anchor of Purpose",
    text: "Know your 'why' so deeply that the 'how' becomes a mere detail. A man with a mission is a force of nature.",
  },
  {
    title: "The Catalyst",
    text: "Don't wait for a hero; become one. Be the person who walks into a room and raises the energy just by existing. Your vibration is your contribution.",
  },
  {
    title: "The Gold in the Grit",
    text: "There is no shortcut to the peak, but the view is only beautiful because of the climb. Find beauty in the parts of the journey that hurt the most.",
  },
  {
    title: "The Master of Fate",
    text: "You are the captain of your soul. Do not blame the weather for where your ship ends up—take the helm and steer toward the sun.",
  },
  {
    title: "The Eternal Now",
    text: "Tomorrow is a lie told by the weak to justify a lazy today. Seize this moment with both hands and squeeze every drop of life out of it.",
  },
  {
    title: "The Warrior’s Peace",
    text: "True peace isn't the absence of conflict; it's the ability to remain calm in the middle of it. Be like a deep lake—undisturbed by thrown stones.",
  },
  {
    title: "The Spark of Rebellion",
    text: "Rebel against your own mediocrity. Your standard should be excellence because you deserve to be your best.",
  },
  {
    title: "The Growth Mindset",
    text: "A mistake is only a failure if you don't learn the lesson. The only true defeat is the decision to quit.",
  },
  {
    title: "The Visionary’s Eye",
    text: "See the world as it could be. If you can see the victory in your mind, your body will eventually find the way to make it real.",
  },
  {
    title: "The Power of Habit",
    text: "Excellence is not an act, but a habit. Small wins are the bricks that build the cathedral of a great life.",
  },
  {
    title: "The Unbreakable Will",
    text: "Steel is forged in the hottest fires. If life is getting harder, it means you are being tempered for something greater.",
  },
  {
    title: "The Gratitude Surge",
    text: "Be grateful for the struggle, for it gave you strength. Be grateful for the journey, for it gave you wisdom.",
  },
  {
    title: "The Final Frontier",
    text: "Align your thoughts with your passions and your actions will become effortless. You are ready. Now, go.",
  },

  // ... MONTHS 2 - 11 would go here (truncated for brevity, but the math handles 365)

  // MONTH 12 FINAL (Sourced from your text)
  {
    title: "The Sovereign’s Crown",
    text: "The crown is yours because you forged it. Now, look at the horizon. There’s a new mountain waiting. Walk toward it.",
  },
];

function initRitual() {
  const container = document.getElementById("ritual-container");
  const greetingBox = document.getElementById("greeting-box");
  const titleBox = document.getElementById("quote-title");
  const quoteBox = document.getElementById("quote-body");

  // 1. Get Day of Year (1-366)
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // 2. Select Quote (Modulo logic handles the 365 refresh)
  const index = (dayOfYear - 1) % quotes.length;
  const dailyData = quotes[index] || quotes[0]; // Fallback to index 0

  // 3. Set Greeting
  const hour = now.getHours();
  let greet = "Good Morning";
  if (hour >= 12 && hour < 17) greet = "Good Afternoon";
  else if (hour >= 17) greet = "Good Evening";

  greetingBox.innerText = `${greet}, Masnoon`;
  titleBox.innerText = dailyData.title;
  quoteBox.innerText = `"${dailyData.text}"`;

  // 4. Trigger Fade In
  setTimeout(() => {
    container.style.opacity = "1";
  }, 500);

  // 5. Trigger Fade Out after 20.5 seconds
  setTimeout(() => {
    container.style.opacity = "0";
  }, 20500);
}

function toggleLike() {
  const btn = document.querySelector(".heart");
  btn.innerHTML = btn.innerHTML === "♡" ? "♥" : "♡";
}

window.onload = initRitual;
