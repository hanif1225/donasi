var app = angular.module('app',[]);
app.controller('isi', function($scope, $http, $window) {

    // Menampilkan data
    
    $scope.setData = function() {
        $scope.dataisidonatur = {        // berfungsi untuk menampilkan data apa saja yang ingin di munculkan 
          id_donatur    : "",
          tgl_transaksi : "",
          no_referensi  : "",
          akad_donasi   : "",
          nama          : "",
          tipe_transaksi: "",
          jumlah_donasi : "",
          transfer      : "",
          gambar        : "",
          gambarold     : ""
        };
      }
      
    // Menampilkan data
      $scope.setData();
      $scope.isidonatur = [];     
  
      $scope.getIsidonatur = function() {
        console.log(https);
  
          let dataisidonatur = $scope.dataisidonatur;
          $http.get(https + "isidonatur", {data: dataisidonatur})
          .then(function(response) {
            
            var data = JSON.parse(response.data.data);
  
            console.log(data);
            $scope.isidonatur = data;
            console.log("get_isidonatur success");
  
          });
      };
      
      $scope.getIsidonatur();
    // EndMenampilkan data

    // Menyimpan data
    $scope.saveIsidonatur = function() {
      alert('Terimakasih Atas Donasinya');
      console.log($scope.dataisidonatur);
      let dataisidonatur = $scope.dataisidonatur;
    //  NProgress.start();
      if(dataisidonatur.id_donatur != ""){
//          $scope.upadteIsidonatur();
         console.log("tidak ada");
      } else{
        $http.post(https + "tambah_donatur", dataisidonatur)
        .then(function(response) {
          $scope.setData();
         // NProgress.done();
        });
      }            
  };

  $scope.addIsi_inventarisir = function() {
    $scope.setData();
  };
    // End Menyimpan data

    //   $scope.saveIsidonatur = function() {
        
    //     let dataisidonatur = $scope.dataisidonatur;
    //   //  NProgress.start();
    //     if(dataisidonatur.id_donatur != ""){
    //         $scope.upadteIsidonatur();
    //     } else{
    //       $http.post(https + "isidonatur", dataisidonatur)
    //       .then(function(response) {
    //         document.querySelector('#closeadd').click();
    //         $scope.getIsidonatur();
    //         $scope.setData();
    //        // NProgress.done();
    //       });
    //     }
        
    // };

    // $scope.addIsidonatur = function() {
    //   $scope.setData();
    // };



 //edit data

//  $scope.editIsidonatur = function(isidonatur) {
//   console.log(isidonatur);

//   $scope.dataisidonatur = isidonatur;
//   var gambar = isidonatur.gambar;
//   var gambar2 = gambar.replace(php + 'donatur/','');
//   $scope.dataisidonatur.gambarold = gambar2;
//   // $scope.dataisidonatur.password2 = isidonatur.password;
//   console.log($scope.dataisidonatur);

// };
// $scope.upadteIsidonatur = function() {

// let dataisidonatur = $scope.dataisidonatur;
// // NProgress.start();

// $http.post(https + "isidonatur/update", dataisidonatur)
// .then(function(response) {
//   document.querySelector('#closeadd').click();
//   $scope.getIsidonatur();

//   $scope.setData();

 
//   //NProgress.done();
// });
// };
    
    //delete data masih error
  //   $scope.delete = function(id_donatur,gambar) {
  //   var gambar2 = '';
  //   console.log(gambar);
  //   gambar2 = gambar.replace(php + 'donatur/','');
  //   console.log(gambar2);
  //   //  NProgress.start();
  //   console.log(id_donatur);
  //     var r = confirm("Hapus Isidonatur?");
  //     if (r == true) {
  //       $http.post(https + "isidonatur/delete", { id_donatur:id_donatur, gambar:gambar2 })
  //       .then(function(response) {
  //         $scope.getIsidonatur();
  //         console.log("delete success");
  //         //NProgress.done();
  //       });
  //     } else{
  //     //  NProgress.done();
  //     console.log("delete gagal");
  //     }
      
  // };
});

// coba tambah gambar
app.directive("selectNgFiles2", function($http) {
  return {
    require: "ngModel",
    scope: false,
    link: function postLink(scope,elem,attrs,ngModel) {
      elem.on("change", function(e) {

          console.log("start upload");
          var files = elem[0].files[0];
          //console.log(files);
          ngModel.$setViewValue(files);
          
           var fd = new FormData();
           fd.append('file', files);
           $http.post(php + 'upload.php', fd, {
              //transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
           })
           .then(function(callback){
              console.log("file uploaded");
              console.log(callback.data);
              console.log(php + 'upload/' + callback.data);
              var image=php + 'upload/' + callback.data;
              let dataisidonatur = scope.dataisidonatur;
              dataisidonatur.gambar=image;
              scope.$apply();
           });

      })
    }
  }
});