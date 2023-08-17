document.querySelectorAll('a[href^="#]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollintoview({
            behavior:"smooth"
        });
    });
})


const alasinput = document.getElementById('alasinput')
const tinggiinput = document.getElementById('tinggiinput')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
const reset = document.getElementById('reset')
hitung.addEventListener('click', function(){
    let a = alasinput.value 
    let t = tinggiinput.value 
    let l = 0.5*a*t
    output.innerHTML = `Luas segitiga dari alas ${a} cm dan tinggi ${t} cm adalah ${l}`
})

reset.addEventListener('click', function() {
    tinggiinput.value = '';
    alasinput.value = '';
    output.innerHTML = '';
});

hitungkeliling.addEventListener('click', function() {
    let a = parseFloat(sisi1input.value); // Konversi nilai sisi menjadi angka (float)
    let b = parseFloat(sisi2input.value);
    let c = parseFloat(sisi3input.value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        hasilkeliling.innerHTML = "masukkan angka pada semua sisi";
    } else {
        let keliling = a + b + c;
        hasilkeliling.innerHTML = `Keliling segitiga dari sisi1 ${a} cm, sisi2 ${b} cm dan sisi3 ${c} adalah ${keliling} cm`;
    }
});

resetkeliling.addEventListener('click', function() {
    sisi1input.value = '';
    sisi2input.value = '';
    sisi3input.value = '';
    hasilkeliling.innerHTML ='';
});

