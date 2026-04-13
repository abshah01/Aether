const quotes = [
    // --- PASTE MONTHS 1-6 HERE ---
    { title: "The Sovereign Architect", text: "Stop waiting for a map to be handed to you when you are the one holding the ink." },
    
    // --- MONTH 7: THE ALCHEMIST’S EXPANSION ---
    { title: "The Architecture of Choice", text: "You are the architect of your own gravity. Every choice you make today pulls the future toward you or pushes it away." },
    { title: "The Kinetic Mirror", text: "Stop looking at where you are and start looking at where you are going. Today is the sunrise of a new kingdom—claim it." },
    { title: "The Obsidian Shield", text: "Indifference is a superpower. When the world tries to distract you with petty noise, remain like obsidian." },
    { title: "The Ghost of Average", text: "Kill the mediocrity today so the legend can live tomorrow." },
    { title: "The Solar Forge", text: "You are not meant to fit in; you are meant to burn so brightly that the world has no choice but to adjust its eyes." },
    
    // --- MONTH 8: THE SOVEREIGN’S SURGE ---
    { title: "The Velocity of Virtue", text: "Doing the right thing is always the fastest way to peace. Shortcuts in character always lead to long delays in destiny." },
    { title: "The Stoic’s Garden", text: "Guard your mind like a fortress. Not every thought deserves a seat at your table." },

    // --- MONTH 9: THE KINETIC MASTERY ---
    { title: "The Velocity of Vision", text: "See it clearly before you do it. The mental rehearsal is just as important as the physical practice." },
    { title: "The Stoic’s Armor", text: "Don't let small minds convince you that your dreams are too big. Their limits are not yours." },

    // --- MONTH 10: THE TITAN’S HARVEST ---
    { title: "The Harvest of Habit", text: "You are now reaping what you sowed in the first six months. If the harvest is good, keep planting." },
    { title: "The 300 Mark", text: "300 days of discipline. You are in the top 1% of the 1%." },

    // --- MONTH 11: THE LEGACY FORGE ---
    { title: "The Weight of Legacy", text: "What will people remember? Not your words, but how you made them feel and what you built." },

    // --- MONTH 12: THE ETERNAL RETURN ---
    { title: "The Winter’s Fire", text: "As the year ends, let your internal fire burn even hotter. The cold is just a backdrop for your warmth." },
    { title: "The Sovereign’s Crown", text: "Day 365. You did it. You lived 365 days of purpose and relentless energy. The crown is yours—you forged it." }
];

function runRitual() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // This logic pulls the exact day from the calendar
    const index = (dayOfYear - 1) % quotes.length;
    const today = quotes[index];

    const hour = now.getHours();
    let greet = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

    document.getElementById('greeting-text').innerText = `${greet}, Masnoon`;
    document.getElementById('quote-title').innerText = today.title;
    document.getElementById('quote-body').innerText = `"${today.text}"`;

    setTimeout(() => { document.getElementById('ritual-container').style.opacity = '1'; }, 500);
    setTimeout(() => { document.getElementById('ritual-container').style.opacity = '0'; }, 20500);
}

function toggleLike() {
    const btn = document.querySelector('.heart');
    btn.innerHTML = btn.innerHTML === '♡' ? '♥' : '♡';
}

window.onload = runRitual;
