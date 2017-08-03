page_title = document.getElementById('page_title').getAttribute("value");

/* Tracker functionality */
if (page_title == "tracker"){
    var audio_alert = document.getElementById("audio_alert");
    $(document).ready(function() {
        $('#form').ajaxForm(function(data) {
            console.log(data)
            if(data == "posture_fail"){
              closePopupIfOpen('window_alert_user')
              alertUser();
            }
            else {
              closePopupIfOpen('window_alert_user')
            }
        });
    });

    // Alert the user if they are slouching
    function alertUser() {
      var hostname = window.location.hostname;
      audio_alert.play();
      window_alert_user = window.open( "/alertUser" , "window_alert_user", "height = 200, width = 200" );
    }

    // Close the popup alert
    function closePopupIfOpen(popupName){
      try {
        if(typeof(window[popupName]) != 'undefined' && !window[popupName].closed){
          window[popupName].close();
        }
      }
      catch(err){
        console.log("Please allow popups")
      }
    }

}
