//es sera el que genere todo lo que hagamos en puppeteer
//entender que todo puppeteer funciona de forma asincrona, para poder hacer todas las peticiones asincronas vamos a hacer una funcion autoejecutada
const puppeteer=require('puppeteer');

(async ()=>{
    console.log('lanzamos navegador')
    //como lanzamos un navegador? asi const browser=await puppeteer.launch(), pero para poder verlo entonces..
    //esto lo que le va a decir es chromium lanzate pero no te lances sin ver
    const browser=await puppeteer.launch({headless: false});

    //vamos a abrir una pagina
    const page=await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    //ya sabemos que la pagina se nos abre, ahora vamos a ejecutar un script
    var titulo1= await page.evaluate(()=>{
        const h1=document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(titulo1)

    //antes que nada cerramos porque sino se queda muerto
    console.log('cerramos navegador...');
    browser.close();
    console.log('navegador cerrado');
})();