let url = window.location.search;

if(url.includes("?")){
    let params = new URLSearchParams(url);
    let score = 0;
    let maxScore = 10;

    if(params.get("q1") == "Python")
    {
        document.getElementById("kerdes1").innerHTML = "I.Melyik programnyelvben íródott ez a kód? - <span style='color:green'>Helyes válasz</span>";
        score++;
    } else if(params.get("q1")) 
    {
        document.getElementById("kerdes1").innerHTML = "I.Melyik programnyelvben íródott ez a kód? - <span style='color:red'>Helytelen válasz</span>";
    }

    let masodikvalasz = params.get("q2");
        if(masodikvalasz){
            masodikvalasz = masodikvalasz.toLowerCase().trim();
            if(masodikvalasz == "javaskript" || masodikvalasz == "javascript" || masodikvalasz == "js"){
                document.getElementById("kerdes2").innerHTML = "II. Melyik nyelvben használjuk ez a arancsot? - <span style='color:green'>Helyes válasz</span>";
                score++;
            } else {
                document.getElementById("kerdes2").innerHTML = "II. Melyik nyelvben használjuk ez a arancsot? - <span style='color:red'>Helytelen válasz (helyes: javescript)</span>";
            }
        }
    

    let harmadikvalszvalues = params.getAll("q3");
        if(harmadikvalszvalues.length > 0){
            let helyes = 0;
            for(let q3 of harmadikvalszvalues){
                if(q3 == "Adatbázis kezelése" || q3 ==  "Webfejlesztés" || q3 == "Mobilalkalmazás fejlesztés" || q3 == "Játékfejlesztés"){
                    helyes++;
                } 
            }
            if(helyes == 1){
                document.getElementById("kerdes3").innerHTML = "III. Melyik területeken használjuk a JavaScriptet? - <span style='color:red'>Csak egyet találtál el, de jó az összes</span>";
            } 
            if(helyes == 2){
                document.getElementById("kerdes3").innerHTML = "III. Melyik területeken használjuk a JavaScriptet? - <span style='color:orange'>Csak kettőt találtál el, de jó az összes</span>";
            } 
            if(helyes == 3){
                document.getElementById("kerdes3").innerHTML = "III. Melyik területeken használjuk a JavaScriptet? - <span style='color:orange'>Csak hármat találtál el, de jó az összes</span>";
            } 
            if(helyes == 4){
                document.getElementById("kerdes3").innerHTML = "III. Melyik területeken használjuk a JavaScriptet? - <span style='color:green'>Helyes válasz</span>";
                score++;
            } 

            
        }
    let negyedikvalasztas = params.get("q4");
        if(negyedikvalasztas){
            negyedikvalasztas = negyedikvalasztas.toLowerCase().trim();
            if(negyedikvalasztas == "color"){
                document.getElementById("kerdes4").innerHTML = "IV. Melyik CSS tulajdonsággal változtatjuk meg a szöveg színét? - <span style='color:green'>Helyes válasz</span>";
                score++;
            } else if(negyedikvalasztas == "bartabulcsu"||negyedikvalasztas == "bártabulcsú" || negyedikvalasztas == "bártabulcsu" || negyedikvalasztas == "bartabulcsú" || negyedikvalasztas == "bárta bulcsú" || negyedikvalasztas == "bárta bulcsu" || negyedikvalasztas == "barta bulcsú" || negyedikvalasztas == "barta bulcsu"|| negyedikvalasztas == "bartabulcsu"){
            document.getElementById("kerdes4").innerHTML = "IV. Melyik CSS tulajdonsággal változtatjuk meg a szöveg színét? - <span style='color:red'>Helytelen válasz (o egy meleg(szin), de nem jo valasz)</span>";
            } else {
            document.getElementById("kerdes4").innerHTML = "IV. Melyik CSS tulajdonsággal változtatjuk meg a szöveg színét? - <span style='color:red'>Helytelen válasz (helyes: color)</span>";
            }
        }

    let otodikvalasztas = params.get("q5"); 
        if (otodikvalasztas == "javascript") {
            document.getElementById("kerdes5").innerHTML = "V. Melyik fut közvetlenül a böngészőben? - <span style='color:green'>Helyes válasz</span>";
            score++;
        } else if (otodikvalasztas) {
            document.getElementById("kerdes5").innerHTML = "V. Melyik fut közvetlenül a böngészőben? - <span style='color:red'>Helytelen válasz</span>";
        }

        let hatodikvalasztas = params.get("q6");
        if (hatodikvalasztas == "js") {
            document.getElementById("kerdes6").innerHTML = "VI. Melyik fájlkiterjesztés tartozik Javascripthez? - <span style='color:green'>Helyes válasz</span>";
            score++;
        } else if (hatodikvalasztas) {
            document.getElementById("kerdes6").innerHTML = "VI. Melyik fájlkiterjesztés tartozik Javascripthez? - <span style='color:red'>Helytelen válasz (helyes: .js)</span>";
        }

    let hetedikvalasztas = params.get("q7");
    if (hetedikvalasztas == "hypertext") {
        document.getElementById("kerdes7").innerHTML = "VII. Mi a HTML rövidítése? - <span style='color:green'>Helyes válasz</span>";
        score++;
    } else if (hetedikvalasztas) {
        document.getElementById("kerdes7").innerHTML = "VII. Mi a HTML rövidítése? - <span style='color:red'>Helytelen válasz (helyes: HyperText Markup Language)</span>";
    }


    let nyolcadikvalasztas = params.get("q8");
    if (nyolcadikvalasztas == "dot" ) {
        document.getElementById("kerdes8").innerHTML = "VIII. Melyik karakterrel kezdődik egy CSS class? - <span style='color:green'>Helyes válasz</span>";
        score++;
    } else if (nyolcadikvalasztas) {
        document.getElementById("kerdes8").innerHTML = "VIII. Melyik karakterrel kezdődik egy CSS class? - <span style='color:red'>Helytelen válasz (helyes: .)</span>";
    }

    let kilencedikvalasztas = params.get("q9");
    if (kilencedikvalasztas == "css1") {
        document.getElementById("kerdes9").innerHTML = "IX. Mire használjuk a <\\link> taget HTML-ben? - <span style='color:green'>Helyes válasz</span>";
        score++;
    } else if (kilencedikvalasztas) {
        document.getElementById("kerdes9").innerHTML = "IX. Mire használjuk a <\\link> taget HTML-ben? - <span style='color:red'>Helytelen válasz (helyes: CSS fájlok csatolására)</span>";
    }

    let tizedikvalasztas = params.get("q10");
    if (tizedikvalasztas == "java") {   
        document.getElementById("kerdes10").innerHTML = "X. Melyik nyelvhez tartozik az alábbi kód? - <span style='color:green'>Helyes válasz</span>";
        score++;
    } else if (tizedikvalasztas) {
        document.getElementById("kerdes10").innerHTML = "X. Melyik nyelvhez tartozik az alábbi kód? - <span style='color:red'>Helytelen válasz (helyes: Java)</span>";
    }

    document.querySelector(".eredmeny h1").innerText = "Végső eredmény: " + score + "/" + maxScore;
}


function resi() {
    window.location.href = "index.html";
}

function validateForm() {
    let q3Checked = document.querySelectorAll('input[name="q3"]:checked').length;
    if (q3Checked == 0) {
        alert("Kérlek válassz legalább egyet a 3. kérdésnél!");
        return false;
    }
    return true;
}
