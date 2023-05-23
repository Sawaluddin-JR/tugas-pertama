let mahasiswa = {
    nama: "Sawaluddin",
    nim:"02032111041",
    email:"sawaluddinsrg472gmail.com"
};

let {nama,nim,email} = mahasiswa;
console.log(nama);
console.log(nim);
console.log(email);

const people1 = ["Ahmad Farhan ","Ahmad Faisal "];
const people2 = ["Farhan ","Reza "];
const people3 = ["Dede ","Anggi "];

let allPeople = [...people1,...people2,...people3];
console.log(allPeople);

