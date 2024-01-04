// console.log ('Hello,World')
// alert('Hello World')

// //untuk membuat list
// console.table(["Apple" ,"Banana","Grape"])

// //console error digunakan ketika ada error
// console.error("Kalo Ada Error")

// //console warn digunakan ketika ada code yg warning bukan bug tapi kodenya ada yg kurang bener
// console.warn("Kodenya Gakbener")

// let nama = "data bisa berubah ubah" //mendeklarasikan variabel
// nama = "rafa" //merubah isi variabel
// console.log(nama); //menampilkan data variabel

// const alamat = "jln sendirian" // data yg tdk bisa diubah lagi
// console.log(alamat);

// let nama = "Rafa Rajendra"
// let umur = ''
// let alamat ="jalan Nitikan"
// let kelas = "XI RPL"
// const sekolah = "Smk Muhi"
// console.log(nama,alamat,kelas,sekolah);
// console.log(`nama saya ${nama}  saya tinggal di ${alamat} dan umur saya ${umur} dan sekolah saya di ${sekolah}`);
// alert(`nama saya ${nama}`);
//  let Name = prompt(`Hallo Siapa Namamu ?`)
//  let kelass = prompt(`Kamu Kelas Berapa?`)
//  let School = prompt(`Kamu Sekolah Dimana?`)
//  let address = prompt(`Alamatmu Dimana ?`)
//  let hobi = prompt(`Hobimu Apa?`)
//  alert(`Terimakasih Telah Mengisi Nama: ${Name} , Kelas ${kelass} , Sekolah ${School} , Alamat ${address} , Hobi ${hobi} `)

// if else contoh
//  const nilai = 75

//  let nama = prompt (`Masukkan Nama Mu! `)
//  let score = prompt(`(Masukkan Nilai mu!`)
//  alert (` ${nama} Nilai Mu ${score} ` )

//  if(score > nilai){
//      alert(`Selamat ${nama} Anda Lulus`)
//  }

//  else{
//      alert(`Maaf ${nama} Anda Tidak Lulus`)
//  }

// Tugas 1

//  let nama = prompt (`Masukkan Nama Mu! `)
//  let usia= prompt(`(Masukkan usia mu!`)

//  if(usia < 20){
//      alert(`${nama} Anda Masih Remaja`)
//  }

//  else if (usia < 30){
//     alert(`${nama} Anda Sudah Dewasa`)
//  }

//  else {
//     alert(`${nama} Anda Sudah Lansia`)
//  }

//  document.title = 'JS'

//  const body = document.body
//  body.append('mengisi Body')

// const h1 = document.createElement('h1')
// h1.textContent = 'Rafa Rajendra'
// body.append(h1)

// const h2 = document.createElement('h2')
// h2.innerHTML = '<marquee>Rafa Rajendra</marquee>'
// body.append(h2)

// const h3 = document.createElement('h3')
// h3.innerHTML = '<marquee>Rafa Rajendra</marquee>'
// body.append(h3)

// const h3 = document.createElement('h3')
// h3.innerHTML = '<marquee>Rafa Rajendra</marquee>'
// body.append(h3)

// function konfirmasi(){
//     var konfirmasi = confirm ("Apakah anda yakin untuk menghapus data ini?");
//     if (konfirmasi){
//         alert('Data Terhapus');
//     }
//     else{
//         alert('Tidak Jadi Dihapus');
//     }
// }

// function pindahHalaman() {
//      // Tentukan URL halaman yang ingin dimuat
//      const url = "http://127.0.0.1:1010/HTML/index2.html";

//      // Muat halaman baru
//      window.location.href = url;
//    }

//    // Panggil fungsi pindahHalaman()
//    document.querySelector("button").addEventListener("click", pindahHalaman);

// const day = ["Senin","Selasa","Rabu"]
// console.log(day[0])
// console.log(day.join('-'));
// day.push("kamis");
// console.log(day);
// day.pop()
// console.log(day);





// // No 1
// const nama = ["Rafa", "Ezi", "Syafiq", "Ronald", "Majid", "Dirga", "Hafidz"];

// console.log(nama);
// document.write(nama);

// // no 2
// const joinName = nama.join("-");
// console.log(joinName);

// // no 3
// console.log(nama[2]);
// console.log(nama[6]);



// // fungsi sort
// let number = [1,2,4,6,5,8,7,10,9];
// number.sort();
// console.log(number);


// let angka = number.map(function(a){
//     return a * 3;
// });

// console.log(angka);


//object literal
let siswa_1 = {
    nama : "Rafa Rajendra",
    sekolah : "SMK Muhi",
    absen : "26",
    umur : "18",
    kelas : "XI RPL",
    alamat : {
        jalan: "Jl.Glagahsari",
        kota : "Yogyakarta",
        provinsi : "Daerah Istimewa Yogyakarta",

    }
    
    
};