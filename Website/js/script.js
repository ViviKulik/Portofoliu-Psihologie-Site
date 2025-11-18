document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatDisplay = document.getElementById('chat-display');

    if (sendBtn) { // Verifică dacă elementul există (doar pe pagina AI)
        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Funcția care gestionează interacțiunea
    function sendMessage() {
        const userText = userInput.value.trim();
        if (userText === '') return;

        // Adaugă mesajul utilizatorului
        appendMessage(userText, 'user-msg');
        userInput.value = '';

        // Obține și adaugă răspunsul AI (simulat)
        const aiResponse = getAIResponse(userText);
        setTimeout(() => {
            appendMessage(aiResponse, 'ai-msg');
        }, 800);
    }

    // Funcția pentru a adăuga mesajul în fereastra de chat
    function appendMessage(text, className) {
        const msgElement = document.createElement('p');
        msgElement.textContent = text;
        msgElement.className = className;
        chatDisplay.appendChild(msgElement);
        // Scroll la ultimul mesaj
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    // Logica simplă de răspuns asistată de AI
    function getAIResponse(message) {
        const lowerCaseMsg = message.toLowerCase();

        if (lowerCaseMsg.includes('proiecte') || lowerCaseMsg.includes('portofoliu') || lowerCaseMsg.includes('cercetare')) {
            return "Proiectele mele includ studii de caz despre TCC, lucrări de cercetare despre stresul academic și inițiativa mea de informare pe Instagram. Vă invit pe pagina Portofoliu!";
        } else if (lowerCaseMsg.includes('tcc') || lowerCaseMsg.includes('cognitiv') || lowerCaseMsg.includes('comportamentala')) {
            return "Terapia Cognitiv-Comportamentală (TCC) este una dintre principalele mele arii de interes. Mă concentrez pe modul în care gândurile, emoțiile și comportamentele interacționează.";
        } else if (lowerCaseMsg.includes('anxietate') || lowerCaseMsg.includes('stres')) {
            return "Managementul stresului și al anxietății este vital. Printre tehnicile studiate se numără relaxarea musculară progresivă și restructurarea cognitivă.";
        } else if (lowerCaseMsg.includes('psiholog') || lowerCaseMsg.includes('terapeut') || lowerCaseMsg.includes('student')) {
            return "Sunt Kulik Robert-Vivian, student la Psihologie. Sunt pe cale de formare și nu ofer servicii de terapie, dar sunt deschis pentru colaborări academice!";
        } else if (lowerCaseMsg.includes('contact') || lowerCaseMsg.includes('colaborare')) {
            return "Pentru discuții despre proiecte sau colaborări academice, accesați pagina de Contact. Aștept cu interes să vorbim!";
        } else if (lowerCaseMsg.includes('salut') || lowerCaseMsg.includes('buna')) {
            return "Salutări! Întrebați-mă despre studiile mele, despre TCC sau despre proiectele mele de cercetare!";
        } else {
            return "Interesant! Acesta este un chatbot simplu bazat pe reguli și nu poate înțelege această întrebare. Încercați termeni cheie ca 'TCC', 'anxietate' sau 'cercetare'.";
        }
    }
});