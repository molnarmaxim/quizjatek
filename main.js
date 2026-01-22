let url = window.location.search;

if(url.includes("?")){
    let params = new URLSearchParams(url);

    if(params.get("q1") === "Python")
    {
        document.getElementById("kerdes1").innerHTML = "I.Melyik programnyelvben íródott ez a kód? - <span style='color:green'>Helyes válasz</span>";
    } else if(params.get("q1")) 
    {
        document.getElementById("kerdes1").innerHTML = "I.Melyik programnyelvben íródott ez a kód? - <span style='color:red'>Helytelen válasz</span>";
    }

    let masodikvalasz = params.get("q2");
        if(masodikvalasz){
            masodikvalasz = masodikvalasz.toLowerCase().trim();
            if(masodikvalasz === "javaskript" || masodikvalasz === "javascript" || masodikvalasz === "js"){
                document.getElementById("kerdes2").innerHTML = "II. Melyik nyelvben használjuk ez a arancsot? - <span style='color:green'>Helyes válasz</span>";
            } else {
                document.getElementById("kerdes2").innerHTML = "II. Melyik nyelvben használjuk ez a arancsot? - <span style='color:red'>Helytelen válasz (helyes: javescript)</span>";
            }
        }
    

    let harmadikvalszvalues = params.getAll("q3");
        if(szakmaValues.length > 0){
            let helyes = 0;
            let rossz = 0;
            for(let q3 of harmadikvalszvalues){
                if(q3 === "Adatbázis kezelése" || q3 ===  "Webfejlesztés" || q3 === "Mobilalkalmazás fejlesztés" || q3 === "Játékfejlesztés"){
                    helyes++;
                } 
            }
            
            if(helyes === 1){
                document.getElementById("kerdes2").innerHTML = ">III. Melyik területeken használjuk a JavaScriptet? - <span style='color:red'>Csak egyet találtál el, de jó az összes</span>";
            } 
            if(helyes === 2 || helyes === 3){
                document.getElementById("kerdes2").innerHTML = ">III. Melyik területeken használjuk a JavaScriptet? - <span style='color:red'>Csak egyet találtál el, de jó az összes</span>";
            } 
            if(helyes === 4){
                document.getElementById("kerdes2").innerHTML = ">III. Melyik területeken használjuk a JavaScriptet? - <span style='color:red'>Csak egyet találtál el, de jó az összes</span>";
            } 

            
        }






}


function resi() {
    window.location.href = "index.html";
}