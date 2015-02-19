'use strict';

     // var myCenter = new google.maps.LatLng(32.8799, -117.2358);
      var userArray = new Array();
      var contentString;
      var lat;
      var lng;
      var markerArray = [];
      var onlineUsers = new Array();

      $(document).ready(function() {
        //getLocation();
        console.log("Javascript connected.");
      })

      function getLocation(){
      {
          if (navigator.geolocation)
          {
              var options = {
                  enableHighAccuracy: true,
                  timeout: 5000,
                  maximumAge: 0
              };
              navigator.geolocation.getCurrentPosition(success, error,options);
          }
          else
          { x.innerHTML= "Geolocation is not supported by this browser. Default location set to UCSD Price Center."; }
            }
        }

        function error(e) {
          console.log("error code:" + e.code + ' message: ' + e.message );
          var myCenter = new google.maps.LatLng(32.8799, -117.2358);
          console.log("passing default into success");
          lat  = 32.8799;
          lng =  -117.2358;
          success(0);
        }


      function showBorder(e){
            /* show the emoji clicked */
            if(e != 'NULL')
            {
            document.getElementById(e).style.border="solid";
            }
      }

      function hideBorder(e){
            /* hide all the emoji's border */
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

            /* get the user name */
            $.get("/user/", userCallBack);

            function userCallBack(result){
              
                userArray.push(result['user']);
                console.log(userArray[0]);

                    showBorder(e);
                    contentString = '<div class="myName">' + '<p><b>' + userArray[0]+ '</b></p>'+'</div>' + "<img width='30' height='30' src=/images/emoji/" + e + ".png>";

            }


            // var contentString = "<img width='30' height='30' src=/images/emoji/" + e + ".png>              

      }
      
      function success(position) {

           if(position == 0){
              console.log("in success")
           }
           else{
             lat  = position.coords.latitude;
             lng =  position.coords.longitude;
           }


          var  myLocation =   new google.maps.LatLng(lat, lng);
           var mapOptions = {
                center: new google.maps.LatLng(myLocation.lat(),myLocation.lng()),
                zoom: 17,
                zoomControl:true,
                zoomControlOptions: {
                  style:google.maps.ZoomControlStyle.SMALL
                },
                mapTypeControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("googleMap"),
                    mapOptions);


            var marker = new google.maps.Marker({
                position: myLocation,
                map: map,
                /*icon: './images/ar.png',*/
                title:"you are here"
            });
            
          var infowindow = new google.maps.InfoWindow;
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
           

            addOtherMarkers();

            function addOtherMarkers(){
              createUserList();

              function createUserList(){
                //create array of javascript objects from length of json file

                $.getJSON("/status/", callbackData);
                //callback data can return an array?
              }

              function callbackData(result){
                for (var i = 0; i < result.length; i++){

                  var infowindow = new google.maps.InfoWindow({
                    content: result[i].currentStatus
                  });

                  var markerx = new google.maps.Marker({
                    position: new google.maps.LatLng(result[i].latitude, result[i].longitude),
                    map: map,
                    icon: {
                      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, //make into thosep eople icons
                      fillColor: "#FF369B",
                      fillOpacity: .7,
                      scale: 5,
                      strokeWeight: 1
                    },
                    title: "'sdfsdf'"

                  });

                  onlineUsers.push(result[1]);
                }

                  google.maps.event.addListener(markerx, 'click', function(){
                    infowindow.open(map, markerx);
                  });

              }
            }

            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map,marker);
            });

            $('#meButton').click(returnToCenter);
            console.log("Center initialized to user's location.");

            function returnToCenter(e){
                console.log("Returned you to center.");
                map.panTo(marker.getPosition());
            }
        }

        google.maps.event.addDomListener(window, 'load', getLocation() );
