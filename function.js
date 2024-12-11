let url = 'https://docs.google.com/spreadsheets/d/1Fj6Z5nuC92XoZaOwy1ltMnku15khJXTQqJ4sG4uOuD8/gviz/tq?';
const query = encodeURIComponent('Select A');
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep =>{
    const data = JSON.parse(rep.substr(47).slice(0, -2));
    console.log(data);
    const row01 = document.createElement('tr');
    Speler1.append(row01);
    const row02 = document.createElement('tr');
    Speler2.append(row01);
    const row03 = document.createElement('tr');
    Speler3.append(row01);
    const row04 = document.createElement('tr');
    Speler4.append(row01);
    const row05 = document.createElement('tr');
    Speler5.append(row01);
    const row06 = document.createElement('tr');
    Speler6.append(row01);
    const row07 = document.createElement('tr');
    Speler7.append(row01);
    const row08 = document.createElement('tr');
    Speler8.append(row01);

    data.table.cols.forEach((heading) => {
        const cell = document.createElement('option');
        cell.textContent = heading.label;
    
    row01.append(cell);
    row02.append(cell);
    row03.append(cell);
    row04.append(cell);
    row05.append(cell);
    row06.append(cell);
    row07.append(cell);
    row08.append(cell);
    })

    data.table.rows.forEach((main)=>{
        const container1 = document.createElement('option');
        Speler1.append(container1);
        const container2 = document.createElement('option');
        Speler2.append(container2);
        const container3 = document.createElement('option');
        Speler3.append(container3);
        const container4 = document.createElement('option');
        Speler4.append(container4);
        const container5 = document.createElement('option');
        Speler5.append(container5);
        const container6 = document.createElement('option');
        Speler6.append(container6);
        const container7 = document.createElement('option');
        Speler7.append(container7);
        const container8 = document.createElement('option');
        Speler8.append(container8);

    main.c.forEach((element)=> {
        const cell1 = document.createElement('option');
        cell1.textContent = element.v;
        const cell2 = document.createElement('option');
        cell2.textContent = element.v;
        const cell3 = document.createElement('option');
        cell3.textContent = element.v;
        const cell4 = document.createElement('option');
        cell4.textContent = element.v;
        const cell5 = document.createElement('option');
        cell5.textContent = element.v;
        const cell6 = document.createElement('option');
        cell6.textContent = element.v;
        const cell7 = document.createElement('option');
        cell7.textContent = element.v;
        const cell8 = document.createElement('option');
        cell8.textContent = element.v;

    container1.append(cell1);
    container2.append(cell2);
    container3.append(cell3);
    container4.append(cell4);
    container5.append(cell5);
    container6.append(cell6);
    container7.append(cell7);
    container8.append(cell8);

})
})
})


/* Win Function */

const Result00 = document.getElementById("resultaat0");
{
    const Res01 = document.getElementById("resultaat1");
    const Res02 = document.getElementById("resultaat2");

    const Name01 = document.getElementById("Speler1");
    const Name02 = document.getElementById("Speler2");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Speler9").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Speler9").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Speler9").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Speler9").innerHTML = "";            
        }
    })

}

{
    const Res01 = document.getElementById("resultaat3");
    const Res02 = document.getElementById("resultaat4");

    const Name01 = document.getElementById("Speler3");
    const Name02 = document.getElementById("Speler4");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Speler10").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Speler10").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Speler10").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Speler10").innerHTML = "";            
        }
    })

}

{
    const Res01 = document.getElementById("resultaat5");
    const Res02 = document.getElementById("resultaat6");

    const Name01 = document.getElementById("Speler5");
    const Name02 = document.getElementById("Speler6");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Speler11").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Speler11").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Speler11").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Speler11").innerHTML = "";            
        }
    })

}

{
    const Res01 = document.getElementById("resultaat7");
    const Res02 = document.getElementById("resultaat8");

    const Name01 = document.getElementById("Speler7");
    const Name02 = document.getElementById("Speler8");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Speler12").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Speler12").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Speler12").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Speler12").innerHTML = "";            
        }
    })

}

{
    const Res01 = document.getElementById("resultaat9");
    const Res02 = document.getElementById("resultaat10");

    const Name01 = document.getElementById("Speler9");
    const Name02 = document.getElementById("Speler10");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Speler13").innerHTML = Name01.innerHTML;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Speler13").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Speler13").innerHTML = Name02.innerHTML;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Speler13").innerHTML = "";            
        }
    })

}

{
    const Res01 = document.getElementById("resultaat11");
    const Res02 = document.getElementById("resultaat12");

    const Name01 = document.getElementById("Speler11");
    const Name02 = document.getElementById("Speler12");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Speler14").innerHTML = Name01.innerHTML;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Speler14").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Speler14").innerHTML = Name02.innerHTML;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Speler14").innerHTML = "";            
        }
    })

}