'use strict';
var response = require('./res');
var connection = require('./conn');
const fs = require('fs');
const { request } = require('http');

//--> Untuk Menampilkan data donatur <--//
exports.isidonatur = function(req, res) {
    //console.log(req);
    var search = req.query.search;
    console.log(search);
    connection.query('SELECT * FROM donatur where (nama like "%'+search+'%" or akad_donasi like "%'+search+'%" or no_referensi like "%'+search+'%")', function (error, rows, fields){
        if(error){
//console.log(error)
        } else{
           // console.log(rows);
            res.setHeader('Content-Type', 'application/json');
            res.send({
                success: 'true',
                message: 'data retrieved successfully',
                data: JSON.stringify(rows),
              });
        }
    });
    };

// End Menampilkan data donatur

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
 };
 
 exports.findIsidonatur = function(req, res) {
     
     var id_donatur = req.params.id_donatur;
 
     connection.query('SELECT * FROM donatur where id_donatur = ?',
     [ id_donatur ], 
     function (error, rows, fields){
         if(error){
             console.log(error)
         } else{
             response.ok(rows, res)
         }
     });
 };


//--> Menambah data donatur <--//
exports.create_donatur = function(req, res) {
    //  console.log(req.body);
        var tgl_transaksi   = req.body.tgl_transaksi;
        var no_referensi    = req.body.no_referensi;
        var akad_donasi     = req.body.akad_donasi;
        var nama            = req.body.nama;
        var tipe_transaksi  = req.body.tipe_transaksi;
        var jumlah_donasi   = req.body.jumlah_donasi;
        var transfer        = req.body.transfer;
        var gambar          = req.body.gambar;

            connection.query('INSERT INTO donatur (tgl_transaksi, no_referensi, akad_donasi, nama, tipe_transaksi, jumlah_donasi, transfer, gambar) values (?,?,?,?,?,?,?,?)',
        [tgl_transaksi, no_referensi, akad_donasi, nama, tipe_transaksi, jumlah_donasi, transfer, gambar], 
            function (error, rows, fields){
                if(error){
                    console.log(error)
                } else{
                    response.ok("Berhasil menambahkan nama barang!", res)
                }
            });
            };
//End Menambah data donatur

//-->Hapus Donatur Permanen<--//
 exports.delete_donatur_permanen = function(req, res) {
    
    console.log('start delete');
    var id_donatur = req.body.id_donatur;
    var gambar = req.body.gambar;
    
    console.log(id_donatur);
    console.log('end id_donatur');
    connection.query(`DELETE FROM donatur WHERE id_donatur = '`+id_donatur+`' `,
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            try {
                fs.unlinkSync('./isi/php/upload/'+gambar);
                //file removed
                console.log('ok');
              } catch(err) {
                console.error(err)
              }
            res.setHeader('Content-Type', 'application/json');
            response.ok("Berhasil menghapus isi!", res)
 
        }
    });
};
//Hapus Donatur Permanen

   //--> update data donatur <--//

   exports.updateIsidonatur = function(req, res) {
    var id_donatur      = req.body.id_donatur;
    var no_referensi    = req.body.no_referensi;
    var akad_donasi     = req.body.akad_donasi;
    var nama            = req.body.nama;
    var tipe_transaksi  = req.body.tipe_transaksi;
    var jumlah_donasi   = req.body.jumlah_donasi;
    var transfer        = req.body.transfer;
    var gambar          = req.body.gambar;
    var gambarold       = req.body.gambarold;

    console.log("berhasil update");
    connection.query(`UPDATE donatur SET 
    no_referensi        = '` + no_referensi + `',
    akad_donasi         = '` + akad_donasi + `',
    nama                = '` + nama + `',
    tipe_transaksi      = '` + tipe_transaksi + `',
    jumlah_donasi       = '` + jumlah_donasi + `',
    transfer            = '` + transfer + `',
    gambar              = '` + gambar + `'
    WHERE id_donatur    = '` + id_donatur + `'`,
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            try {
                fs.unlinkSync('./isi/php/upload/'+gambarold);
                //file removed
                console.log('ok');
              } catch(err) {
                console.error(err)
              }
            response.ok("Berhasil merubah isi donatur!", res)
        }
    });
};

    //end update data donatur


// exports.index = function(req, res) {
//    response.ok("Hello from the Node JS RESTful side!", res)
// };

// exports.findIsidonatur = function(req, res) {
    
//     var id_donatur = req.params.id_donatur;

//     connection.query('SELECT * FROM donatur where id_donatur = ?',
//     [ id_donatur ], 
//     function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok(rows, res)
//         }
//     });
// };

// exports.createIsidonatur = function(req, res) {
    
//     var jenis = req.body.jenis;
//     var kategori = req.body.kategori;
//     var nama = req.body.nama;
//     var nomor = req.body.nomor;
//     var nominal = req.body.nominal;
//     var gambar = req.body.gambar;

//     connection.query('INSERT INTO donatur (jenis, kategori, nama, nomor, nominal, gambar) values (?,?,?,?,?,?)',
//     [ jenis, kategori, nama, nomor, nominal, gambar ], 
//     function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok("Berhasil menambahkan donatur!", res)
//         }
//     });
//     };

// exports.updateIsidonatur = function(req, res) {
    
//     var id_donatur = req.body.id_donatur;
//     var jenis = req.body.jenis;
//     var kategori = req.body.kategori;
//     var nama = req.body.nama;
//     var nomor = req.body.nomor;
//     var gambar = req.body.gambar;
//     var gambarold = req.body.gambarold;

//     connection.query(`UPDATE donatur SET 
//         jenis = '` + jenis + `',
//         nama = '` + nama + `',
//         nomor = '` + nomor + `',
//         kategori = '` + kategori + `',
//         gambar = '` + gambar + `'
//         WHERE id_donatur = '` + id_donatur + `'`,
//     function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             try {
//                 fs.unlinkSync('./isi/php/donatur/'+gambarold);
//                 //file removed
//                 console.log('ok');
//               } catch(err) {
//                 console.error(err)
//               }
//             response.ok("Berhasil merubah isi donatur!", res)
//         }
//     });
// };
// exports.deleteIsidonatur = function(req, res) {
    
//     console.log('start delete');
//     var id_donatur = req.body.id_donatur;
//     var gambar = req.body.gambar;
    
//     console.log(id_donatur);
//     console.log('end id_donatur');
//     connection.query(`DELETE FROM donatur WHERE id_donatur = '`+id_donatur+`' `,
//     function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             try {
//                 fs.unlinkSync('./isi/php/donatur/'+gambar);
//                 //file removed
//                 console.log('ok');
//               } catch(err) {
//                 console.error(err)
//               }
//             res.setHeader('Content-Type', 'application/json');
//             response.ok("Berhasil menghapus isi donatur!", res)
 
//         }
//     });
// };