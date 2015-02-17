
      var myCenter = new google.maps.LatLng(32.8799, -117.2358);

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

          var infowindow = new google.maps.InfoWindow;

          google.maps.event.addDomListener(document.getElementById('post'),
            'click', function(){
              infowindow.setContent(document.getElementById('inputStatus').value);
              console.log(document.getElementById('inputStatus').value);
            });

          infowindow.open(map, marker);

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