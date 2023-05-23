const hewanBuas = ["Harimau","Singa","Beruang","Serigala"];
const hewanJinak = ["Kucing","kelinci","Ayam"];

const mKesukaan = ["Ikan asin","Wortel","Beras"];

const x = () => [...hewanBuas,...hewanJinak];

const pemHewan = (hewan,makanan) => {
    const hasil = {};
    for (let a = 0; a < hewan.length;a++){
        hasil[hewan[a]] = makanan[a];
    }
    return hasil;
}

setTimeout(() => {
    console.log(pemHewan(hewanJinak,mKesukaan));
},5000);

console.log(x());