const quizzes = [
    {
        title: "Անտառի կանոններ",
        icon: "🏕️",
        questions: [
            { q: "1. Որտե՞ղ է թույլատրվում խարույկ վառել:", options: ["Հատուկ առանձնացված և մաքրված վայրերում", "Ցանկացած ծառի տակ", "Չոր խոտի վրա"], ans: 0 },
            { q: "2. Ի՞նչ անել առաջացած աղբի հետ:", options: ["Վերցնել մեզ հետ և նետել աղբաման", "Թաքցնել թփերի տակ", "Այրել խարույկի մեջ"], ans: 0 },
            { q: "3. Կարելի՞ է արդյոք բարձր երաժշտություն միացնել:", options: ["Ոչ, դա խանգարում է վայրի կենդանիներին", "Այո, եթե ցերեկ է", "Միայն հանգստյան օրերին"], ans: 0 },
            { q: "4. Ի՞նչ ճյուղեր պետք է օգտագործել խարույկի համար:", options: ["Կտրել կանաչ ճյուղեր ծառերից", "Միայն գետնին ընկած չոր ճյուղեր", "Պոկել մանր թփեր"], ans: 1 },
            { q: "5. Կարելի՞ է մեքենան կայանել անտառի խորքում:", options: ["Այո, եթե այն ամենագնաց է", "Ոչ, միայն դրա համար նախատեսված կայանատեղիներում", "Միայն գիշերը"], ans: 1 },
            { q: "6. Կարելի՞ է ծխախոտի մնացորդը գցել գետնին:", options: ["Ոչ, այն կարող է հրդեհ առաջացնել և աղտոտում է բնությունը", "Այո, այն արագ քայքայվում է", "Միայն թաց եղանակին"], ans: 0 },
            { q: "7. Եթե գտել եք անծանոթ սունկ կամ բույս, ի՞նչ պետք է անել:", options: ["Տրորել այն, որ չթունավորվեն ուրիշները", "Անմիջապես ուտել", "Չդիպչել և թողնել այնպես, ինչպես կա"], ans: 2 },
            { q: "8. Ինչպե՞ս մարել խարույկը հեռանալուց առաջ:", options: ["Թողնել, որ ինքն իրեն հանգչի", "Առատ ջրով և ծածկել հողով՝ մինչև ծխի անհետանալը", "Ծածկել չոր տերևներով"], ans: 1 },
            { q: "9. Կարելի՞ է պոկել Կարմիր գրքում գրանցված ծաղիկներ:", options: ["Խստիվ արգելվում է", "Այո, եթե տանում եք տուն որպես հուշ", "Միայն մեկ հատ"], ans: 0 },
            { q: "10. Ինչպե՞ս պետք է տեղաշարժվել անտառում:", options: ["Հիմնականում առկա արահետներով՝ բույսերը չտրորելու համար", "Անընդհատ նոր ճանապարհներ բացելով", "Միայն վազելով"], ans: 0 }
        ]
    },
    {
        title: "Կենդանական աշխարհ",
        icon: "🐻",
        questions: [
            { q: "1. Ո՞ր կենդանին է գրանցված կարմիր գրքում և հազվադեպ է հանդիպում Հայաստանում:", options: ["Սկյուռ", "Կովկասյան ընձառյուծ", "Աղվես"], ans: 1 },
            { q: "2. Ինչո՞վ են հիմնականում սնվում գորշ արջերը բնության մեջ:", options: ["Հատապտուղներով, մրգերով և մեղրով", "Միայն խոտով", "Բացառապես մսով"], ans: 0 },
            { q: "3. Ի՞նչ անել, եթե հանդիպում եք վայրի կենդանու ձագի:", options: ["Փորձել շոյել նրան", "Տանել տուն խնամելու համար", "Անմիջապես հեռանալ առանց դիպչելու"], ans: 2 },
            { q: "4. Ո՞ր կենդանին է հաճախ համարվում անտառի «սանիտար»:", options: ["Արջը", "Նապաստակը", "Գայլը"], ans: 2 },
            { q: "5. Ո՞ր թռչունն է ծառերի բնով փորում՝ վնասատուներ գտնելու համար:", options: ["Արծիվը", "Փայտփորիկը", "Բուն"], ans: 1 },
            { q: "6. Կարելի՞ է արդյոք կերակրել վայրի կենդանիներին մարդկային սննդով:", options: ["Ոչ, դա վնասակար է նրանց առողջության համար", "Այո, հատկապես քաղցրավենիքով", "Այո, նրանք միշտ սոված են"], ans: 0 },
            { q: "7. Ինչու՞ են արու եղջերուները թափում իրենց եղջյուրները:", options: ["Դա հիվանդության նշան է", "Դա բնական գործընթաց է, որը տեղի է ունենում ամեն տարի", "Որովհետև դրանք ծանր են նրանց համար"], ans: 1 },
            { q: "8. Ո՞ր թունավոր օձն է հաճախ հանդիպում Հայաստանի ժայռոտ անտառներում:", options: ["Անակոնդա", "Լորտու", "Գյուրզա (Տափաստանային իժ)"], ans: 2 },
            { q: "9. Ինչպե՞ս են վարվում ոզնիները վտանգի դեպքում:", options: ["Արագ վազում են", "Կծկվում են և պաշտպանվում փշերով", "Բարձրանում են ծառի վրա"], ans: 1 },
            { q: "10. Ինչու՞ է կարևոր պահպանել թռչունների բները:", options: ["Որովհետև նրանք վերահսկում են վնասատու միջատների քանակը", "Դրանք գեղեցիկ են", "Որպեսզի երեխաները խաղան դրանցով"], ans: 0 }
        ]
    },
    {
        title: "Բուսական աշխարհ",
        icon: "🌳",
        questions: [
            { q: "1. Ո՞ր ծառն ունի լայն տարածում Հայաստանի անտառներում:", options: ["Բաոբաբ", "Կաղնի", "Արմավենի"], ans: 1 },
            { q: "2. Ի՞նչ է անում սոճին օդի հետ:", options: ["Հարստացնում է ֆիտոնցիդներով (բուժիչ նյութերով)", "Աղտոտում է այն", "Չորացնում է"], ans: 0 },
            { q: "3. Կարելի՞ է արդյոք պոկել անտառային հազվագյուտ ծաղիկներ:", options: ["Այո, եթե շատ գեղեցիկ են", "Միայն կարմիրները", "Ոչ, խստիվ արգելվում է"], ans: 2 },
            { q: "4. Ի՞նչ կարևոր նշանակություն ունեն ծառերի արմատները հողի համար:", options: ["Ոչ մի նշանակություն չունեն", "Պաշտպանում են հողը էրոզիայից և սողանքներից", "Քայքայում են հողը"], ans: 1 },
            { q: "5. Ո՞ր վայրի հատապտուղն է հաճախ հանդիպում մեր անտառներում:", options: ["Մոշը", "Բանանը", "Կիվին"], ans: 0 },
            { q: "6. Ծառի ո՞ր մասն է արտադրում թթվածին:", options: ["Արմատները", "Բունը", "Տերևները (կամ ասեղնատերևները)"], ans: 2 },
            { q: "7. Քանի՞ տարի կարող է ապրել առողջ կաղնին:", options: ["10-20 տարի", "Մինչև 50 տարի", "Հարյուրավոր տարիներ (երբեմն ավելի քան 500)"], ans: 2 },
            { q: "8. Ո՞ր ծառի կեղևն է ունի ընդգծված սպիտակ գույն:", options: ["Բարդի", "Կեչի", "Հացենի"], ans: 1 },
            { q: "9. Ինչպե՞ս են սնվում և աճում բույսերը:", options: ["Ուտելով հողը", "Ֆոտոսինթեզի միջոցով", "Միայն անձրևաջրերով"], ans: 1 },
            { q: "10. Ի՞նչ վտանգ են ներկայացնում ապակյա շշերը բուսականության համար:", options: ["Կարող են որպես ոսպնյակ կենտրոնացնել արևը և հրդեհ առաջացնել", "Ստվեր են գցում", "Ներծծում են ամբողջ ջուրը"], ans: 0 }
        ]
    },
    {
        title: "Սպառնալիքներ",
        icon: "🔥",
        questions: [
            { q: "1. Ո՞րն է անտառային հրդեհների գլխավոր պատճառը:", options: ["Մարդկային անփութությունը (խարույկ, ծխախոտ)", "Կայծակը", "Ուժեղ քամին"], ans: 0 },
            { q: "2. Ինչի՞ է հանգեցնում ապօրինի ծառահատումը:", options: ["Օդի մաքրմանը", "Հողի էրոզիայի և կենդանիների անհետացման", "Նոր ծառերի աճին"], ans: 1 },
            { q: "3. Ինչպե՞ս է պլաստիկը վնասում անտառին:", options: ["Քայքայվում է հարյուրավոր տարիներ և թունավորում էկոհամակարգը", "Պարարտացնում է հողը", "Ապահովում է կենդանիներին բնակատեղիով"], ans: 0 },
            { q: "4. Ո՞ր գլոբալ գործոնն է ուժեղացնում անտառային հրդեհների վտանգը:", options: ["Գլոբալ տաքացումը և երկարատև երաշտը", "Շատ անձրևները", "Ձմռան ցուրտը"], ans: 0 },
            { q: "5. Ի՞նչ ազդեցություն ունի օդի աղտոտվածությունը ծառերի վրա:", options: ["Արագացնում է նրանց աճը", "Դանդաղեցնում է նրանց աճը և թուլացնում դիմադրողականությունը", "Անում է նրանց ավելի գեղեցիկ"], ans: 1 },
            { q: "6. Ինչու՞ է վտանգավոր անվերահսկելի ճանապարհաշինությունը անտառի միջով:", options: ["Որովհետև այն մասնատում է էկոհամակարգը և խանգարում կենդանիների տեղաշարժին", "Որովհետև ասֆալտը թանկ է", "Դա ընդհանրապես վտանգավոր չէ"], ans: 0 },
            { q: "7. Ինչպե՞ս են ազդում ինվազիվ (օտարածին) վնասատու միջատները մեր անտառների վրա:", options: ["Նրանք օգնում են ծառերին", "Նրանք արագ ոչնչացնում են տեղական ծառերը, քանի որ չունեն բնական թշնամիներ", "Նրանք պարարտացնում են հողը"], ans: 1 },
            { q: "8. Ի՞նչ է տեղի ունենում գլոբալ մասշտաբով, երբ անտառները վերանում են:", options: ["Ածխաթթու գազի (CO2) մակարդակը մթնոլորտում բարձրանում է", "Օդը դառնում է ավելի մաքուր", "Երկիրը սառչում է"], ans: 0 },
            { q: "9. Ի՞նչն է ամենաշատը աղտոտում անտառային գետերն ու աղբյուրները:", options: ["Ձկների առատությունը", "Մարդկանց թողած կենցաղային աղբը և քիմիական նյութերը", "Թափվող տերևները"], ans: 1 },
            { q: "10. Ինչպե՞ս կարող է յուրաքանչյուր մարդ պայքարել այս սպառնալիքների դեմ:", options: ["Պահպանելով կանոնները, խնայելով ռեսուրսները և մասնակցելով ծառատունկերին", "Աղբը նետելով միայն գետի մեջ", "Շարունակելով անտեսել խնդիրները"], ans: 0 }
        ]
    }
];

let currentQuiz = null;
let currentQIndex = 0;
let score = 0;

function initQuizzes() {
    const sel = document.getElementById('quiz-selection');
    if(!sel) return;
    
    // Clear in case of re-init
    sel.innerHTML = '';
    
    quizzes.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `<div style="font-size:4rem; margin-bottom:1rem;">${q.icon}</div>
                          <h3>${q.title}</h3>
                          <p style="color:var(--text-light); margin-top:0.5rem;">Հարցեր: ${q.questions.length}</p>`;
        card.onclick = () => startQuiz(idx);
        sel.appendChild(card);
    });
}

function startQuiz(idx) {
    currentQuiz = quizzes[idx];
    currentQIndex = 0;
    score = 0;
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-interface').style.display = 'block';
    renderQuestion();
}

function renderQuestion() {
    const ui = document.getElementById('quiz-interface');
    const q = currentQuiz.questions[currentQIndex];
    
    let html = `<h2 style="color:var(--text-light); font-size:1rem; margin-bottom:1rem; font-weight:500;">
                  ${currentQuiz.title} — Հարց ${currentQIndex + 1}/${currentQuiz.questions.length}
                </h2>`;
    html += `<div class="quiz-question">${q.q}</div>`;
    html += `<div class="quiz-options">`;
    q.options.forEach((opt, i) => {
        html += `<button class="quiz-btn" onclick="checkAnswer(${i}, this)">${opt}</button>`;
    });
    html += `</div>`;
    html += `<div class="quiz-footer">
                <button class="btn" style="background:#9ca3af; box-shadow:none;" onclick="quitQuiz()">Ավարտել</button>
                <button class="btn" id="next-btn" style="display:none; transform:none;" onclick="nextQuestion()">Հաջորդը ➜</button>
             </div>`;
    
    ui.innerHTML = html;
}

window.checkAnswer = function(idx, btnEl) {
    const btns = document.querySelectorAll('.quiz-btn');
    if(btns[0].disabled) return; // already answered
    
    btns.forEach(b => b.disabled = true);
    
    const correctIdx = currentQuiz.questions[currentQIndex].ans;
    if (idx === correctIdx) {
        btnEl.classList.add('correct');
        score++;
    } else {
        btnEl.classList.add('wrong');
        btns[correctIdx].classList.add('correct');
    }
    
    document.getElementById('next-btn').style.display = 'block';
};

window.nextQuestion = function() {
    currentQIndex++;
    if (currentQIndex < currentQuiz.questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    const ui = document.getElementById('quiz-interface');
    
    if (score === currentQuiz.questions.length) {
        ui.innerHTML = `
            <div class="success-message" style="display:block;">
                <h2>Շնորհակալություն! 💚</h2>
                <div style="font-size:6rem; margin:1rem 0; animation: bounce 2s infinite;">🏆</div>
                <p style="font-size:1.3rem; color:var(--text-color); margin-bottom:2rem; max-width:500px; margin-left:auto; margin-right:auto;">
                    Դուք ճիշտ պատասխանեցիք բոլոր ${currentQuiz.questions.length} հարցերին: Բնությունը շնորհակալ է ձեզ ձեր գիտելիքների և հոգատարության համար:
                </p>
                <button class="btn" onclick="quitQuiz()">Վերադառնալ ցանկ</button>
            </div>
            <style>
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
            </style>
        `;
    } else {
        ui.innerHTML = `
            <div class="success-message" style="display:block;">
                <h2 style="color:var(--text-color);">Արդյունք: ${score}/${currentQuiz.questions.length}</h2>
                <div style="font-size:5rem; margin:1rem 0;">📚</div>
                <p style="font-size:1.2rem; margin-bottom:2rem;">Կարող եք կրկին փորձել կամ կարդալ ավելին մեր տեղեկատվական բաժիններում:</p>
                <button class="btn" onclick="startQuiz(${quizzes.indexOf(currentQuiz)})">Կրկին փորձել</button>
                <button class="btn" style="background:#9ca3af; box-shadow:none; margin-left:1rem;" onclick="quitQuiz()">Ցանկ</button>
            </div>
        `;
    }
}

window.quitQuiz = function() {
    document.getElementById('quiz-interface').style.display = 'none';
    document.getElementById('quiz-selection').style.display = 'grid';
};

document.addEventListener('DOMContentLoaded', initQuizzes);
