'use strict';

      var myCenter = new google.maps.LatLng(32.8799, -117.2358);
      var userArray = new Array();
      var infowindow = new google.maps.InfoWindow;
      var contentString;

      function showBorder(e){
            if(e != 'NULL')
            {
            document.getElementById(e).style.border="solid";
            }
      }

      function hideBorder(e){
            document.getElementById('emoji1').style.border="";
            document.getElementById('emoji2').style.border="";
            document.getElementById('emoji3').style.border="";
            document.getElementById('emoji4').style.border="";
            document.getElementById('emoji5').style.border="";
            document.getElementById('emoji6').style.border="";
            document.getElementById('emoji7').style.border="";
            document.getElementById('emoji8').style.border="";
            document.getElementById('emoji9').style.border="";
            document.getElementById('emoji10').style.border="";
            document.getElementById('emoji11').style.border="";
            document.getElementById('emoji12').style.border="";
            document.getElementById('emoji13').style.border="";
            document.getElementById('emoji14').style.border="";
            document.getElementById('emoji15').style.border="";
            document.getElementById('emoji16').style.border="";
            document.getElementById('emoji17').style.border="";
            document.getElementById('emoji18').style.border="";
            document.getElementById('emoji19').style.border="";
            document.getElementById('emoji20').style.border="";

            
            $.get("/user/", userCallBack);

            function userCallBack(result){
              
                userArray.push(result['user']);
                console.log(userArray[0]);

                    showBorder(e);
                    contentString = '<div class="myName">' + '<p><b>' + userArray[0]+ '</b></p>'+'</div>' + "<img width='30' height='30' src=/images/emoji/" + e + ".png>";

            }


            // var contentString = "<img width='30' height='30' src=/images/emoji/" + e + ".png>";
              

      }

      function initialize() {


          var mapProp = {
              center: myCenter,
              zoom: 17,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

          var marker = new google.maps.Marker({
              position: myCenter,
              icon: './images/pinkball.png'
          });

          marker.setMap(map);

          google.maps.event.addListener(marker, 'click', function() {
              map.setZoom(19);
              map.setCenter(marker.getPosition());
          });

          
          infowindow.open(map, marker);

          $.get("/user/", userCallBack);

            function userCallBack(result){

                userArray.push(result['user']);
                console.log(userArray[0]);
                contentString = '<div class="myName">' + '<p><b>' + userArray[0]+ '</b></h1>'+'</div>';
            }

          google.maps.event.addDomListener(document.getElementById('post'),
            'click', function(){
              infowindow.setContent(contentString + "   " + document.getElementById('inputStatus').value + "  ");
              console.log(document.getElementById('inputStatus').value);
            });

          /*var infowindow = new google.maps.InfoWindow({
          content:"Other people's status to show on click"
          });
      
          google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
          });
      
          reference here http://www.w3schools.com/googleAPI/google_maps_ref.asp
          */

      }


      google.maps.event.addDomListener(window, 'load', initialize);