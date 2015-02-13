      
      var lat;
      var lng;

      $(document).ready(function() {
        getLocation();
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
          { x.innerHTML= "Geolocation is not supported by this browser."; }
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

            var infowindow = new google.maps.InfoWindow({
              content: "Content of their current status"
            });

            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map,marker);
            });

            $('#meButton').click(returnToCenter);
            console.log("initizliae");

            function returnToCenter(e){
                console.log("returned");
                map.panTo(marker.getPosition());
            }
        }

        google.maps.event.addDomListener(window, 'load', getLocation() );
