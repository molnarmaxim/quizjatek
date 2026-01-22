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
    

    let szakmaValues = params.getAll("q3");
        if(szakmaValues.length > 0){
            let helyes = 0;
            let rossz = 0;
            for(let q3 of szakmaValues){
                if(szakm === "programozas" || szakma === "gepeszet"){
                    helyes++;
                } else {
                    rossz++;
                }
            }
            
            if(helyes === 2 && rossz === 0){
                document.getElementById("kerdes2").innerHTML = "2.milyen szakmak vannak a pg-ben - <span style='color:green'>helyes valasz</span>";
            } else {
                document.getElementById("kerdes2").innerHTML = "2.milyen szakmak vannak a pg-ben - <span style='color:orange'>reszben helyes (" + helyes + "/2 helyes)</span>";
            }
        }






}


function resi() {
    window.location.href = "index.html";
}