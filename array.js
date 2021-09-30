const namaMantan = ["komang", "made", "ketut", "wayan galuh"];

// namaMantan.forEach(function (item, index, array) {
//     console.log(item, index);
// })

namaMantan.push("dewi"); // 'push' tambah array

// console.log(namaMantan);
// -----------------------------------------------------------------------------------------------------
// namaMantan.pop(); // 'pop' menghapus elemen array terakhir

// console.log(namaMantan);

// namaMantan.shift(); // 'shift' menghapus elemen array awal

// console.log(namaMantan);

// console.log(namaMantan.indexOf("made") + 1); // 'indexOf' mencari nomor index dari sebuah elemen array
// -------------------------------------------------------------------------------------------------------
// const indexKetut = namaMantan.indexOf("ketut");
// console.log(indexKetut);
// namaMantan.splice(indexKetut, 1) // 'splice' menghapus elemen berdasar posisi index

// console.log(namaMantan);
//--------------------------------------------------------------------------------------------------------
// const namaMantanLama = namaMantan.slice(); // 'slice' duplikat array

// namaMantan.pop();

// console.log("Nama mantan:", namaMantan);
// console.log("Nama mantan lama:", namaMantanLama);
//--------------------------------------------------------------------------------------------------------
// for (let index = 0; index < namaMantan.length; index++) {
//     const element = namaMantan[index];
//     console.log(element);
// }

// let index = 0;
// while (index < namaMantan.length) {
//     const element = namaMantan[index];
//     console.log(element);
//     index++;
// }
//--------------------------------------------------------------------------------------------------------
console.log(
    namaMantan
    .filter( function(mantan, ke) {
    // return mantan != "made";
    return mantan == "made";
    })
    .map( function(mantan, ke) {
        return `${mantan} adalah mantan ke ${ke+1}`;
    })
);

// console.log(
//     namaMantan
//         .reduce( function(acc, mantan, ke) {
//             acc[mantan] = `Mantan ke ${ke + 1}`;

//             return acc;
//         }, {})["wayan galuh"]
// )
//--------------------------------------------------------------------------------------------------------