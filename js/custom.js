// $(document).ready(function(){
//  var url='http://localhost:8888/api/webworker/getmember';
//  $.ajax({
//    url:url,
//    dataType:'jsonp',
//    processData: false,
//    type:'get',
//    success:function(data){
//      // alert(data[0][id].name);
//      console.log(data);
//    },
//     error: function (xhr, err, exception) {
//         console.log(err);
//         $("#msg").html(err);
//     }
//   });
// });

// $(document).ready(function () {

//  $.ajax({
//         url: "http://localhost:8888/api/webworker/getmember",
//         type: "get",
//         dataType: "jsonp",
//         contentType: "application/json",
//         success: function (res) {
//             if (typeof res === 'string') {
//                 res = JSON.parse(res);
//             }
//              console.log(res);
//         },
//         error: function (xhr, err, exception) {
//             console.log(err);
//             $("#msg").html(err);
//         }
//     });

// })