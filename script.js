const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

const toggle = document.querySelector(".toggle");

let selected = card2;

console.log(card2 === selected);

card1.addEventListener("click", () => {
    selected.classList.toggle("selected");

    card1.classList.toggle("selected");
    selected = card1;
});

card2.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card2.classList.toggle("selected");
    selected = card2;
});

card3.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card3.classList.toggle("selected");
    selected = card3;
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("serious");

    if (toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Bergen County Academies</h3>
                <p>
                    I am a student at Bergen County Academies and enjoyeth pursuing mine own studies in various scientific fields, especially:
                </p>
                <ul>
                    <li>Computer Science</li>
                    <li>Chemistry</li>
                    <li>Biology</li>
                </ul>
        `;
        card2.innerHTML = `
            <h3>6 string fretted instrument practice</h3>
                <p>
                    I enjoyeth playing the guitar in mine own free timeth and practiceth oft.  Some of the songs I am currently working on art:
                </p>
                    <iframe style="border-radius:12px; height:12vh;" src="https://open.spotify.com/embed/track/5QZ7TEd3h6OysmdMHm0Mfj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="song"></iframe>
                    <iframe style="border-radius:12px; height:12vh;" src="https://open.spotify.com/embed/track/6edhH1ReEB3qlocFz34kIO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="song"></iframe>
                    <iframe style="border-radius:12px; height:12vh;" src="https://open.spotify.com/embed/track/0ZAPlh9j5ixbKfaMFMN0be?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="song"></iframe>
        `;

        card3.innerHTML = `
        <h3>Scaling large rock faces</h3>
            <p>
                I has't been rocketh climbing for enjoyment since I wast a bawbling childe, but I recently did start training hard in order to doeth it competitively.
            </p>
    `;
    }

    if (!toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Bing Chilling Academies</h3>
                <p>
                    I fr go to bca nd ts is not tuff bruh. Ts school fr pmo icl.
                </p>
                <img src="https://media-hosting.imagekit.io//acfb66571bff4146/bingchillingacademies.png?Expires=1836574705&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PIHYa4yxOnc2DhGjJNvKej8StIV~HMkMQnrgAEqAvzTm6rrurwcJA2-aNnmqWQ7n9qlaikWnTsO363K3o~o~1HbdEcqcx75H~NOpwlnWW5Bd0v85Khv2wQBiwJcyyGio5RNs3VRNFhsTJGd2mrnBxNifaqaY~KkRQYLrLR8CHuJGTUxT5Tt6oIctPEp-TaCD0SclPQyO4Vf73gES0HpIff8N48IwBvTeLr8XgA0otiWh2CW1ewSY935dSPu6dlmmFdtMWZAqzsZY3zonIXIkp7yQuiA6dUiIva9W4IGsjjT9jrZubIu5S-eojnboS5s41oRf~VU3sRWuSmXr5vw5TA__" class="image" height="300vh">
                <p>BCA mascot</p>
        `;
        card2.innerHTML = `
            <h3>Grortario</h3>
                <p>
                    I like practicing guitar and playing cool sounds with it. Totally tubular
                </p>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/19791d29-abac-4196-ab73-1d1a1edd8f72/dg535qu-767d6dbf-44a0-4bb4-a058-94891821ad75.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5NzkxZDI5LWFiYWMtNDE5Ni1hYjczLTFkMWExZWRkOGY3MlwvZGc1MzVxdS03NjdkNmRiZi00NGEwLTRiYjQtYTA1OC05NDg5MTgyMWFkNzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.311TdQmyA7pXRj_3QjPoTDDJtwx8eu1WXru-I6CoLKc" class="image" height="300vh">
                <p>(Me playing the guitar)</p>
        `;

        card3.innerHTML = `
        <h3>Wall levitation</h3>
            <p>
                I go rock climbing in upper saddle river three times a week and its pretty rad dude.
            </p>
            <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2022/06/levitating-man.jpg" class="image" width="300vh">
            <p>(Me getting ready to levitate up a wall)</p>
    `;
        
    }
});

(() => {
    toggle.click();
})();