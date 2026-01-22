let url = window.location.search;

if(url.includes("?")){
    let params = new URLSearchParams(url);

    if(params.get("q1") === "q1")
        {
        document.getElementById("kerdes1").innerHTML = "I.Melyik programnyelvben íródott ez a kód? - <span style='color:green'>helyes valasz</span>";
        } 
        else if(params.get("q1"))
        {
        document.getElementById("kerdes1").innerHTML = "I.Melyik programnyelvben íródott ez a kód? - <span style='color:red'>helyes valasz</span>";
        }








}