/* Tracker functionality */
page_title = document.getElementById('page_title').getAttribute("value");

if (page_title == "tracker"){
  // Alert user if they are slouching
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

    function alertUser() {
      audio_alert.play();
      window_alert_user = window.open( "http://localhost:8000/alertUser", "window_alert_user", "height = 200, width = 200" );
    }

    function closePopupIfOpen(popupName){
      if(typeof(window[popupName]) != 'undefined' && !window[popupName].closed){
        window[popupName].close();
      }
    }
}
