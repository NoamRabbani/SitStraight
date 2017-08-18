page_title = document.getElementById('page_title').getAttribute("value");

/* Posture tracker alert system */
if (page_title == "tracker"){
  var log_text = document.getElementById('log_text');
  var log_box = document.getElementById('log_box');
  var audio_alert = document.getElementById("audio_alert");
  $(document).ready(function() {
    $('#form').ajaxForm(function(data) {
      console.log(data)
      // get timestamp
      var date = new Date();
      var timestamp = "[" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "]"
      if(data == "posture_fail"){
        closePopupIfOpen('window_alert_user')
        alertUser();
        log_text.innerHTML += timestamp + ' posture fail <br>';
        log_box.scrollTop = log_box.scrollHeight;
      }
      else if (data == "posture_pass"){
        closePopupIfOpen('window_alert_user')
        log_text.innerHTML += timestamp + ' posture pass <br>'
        log_box.scrollTop = log_box.scrollHeight;
      }
      else if (data == "eyes_not_detected"){
        closePopupIfOpen('window_alert_user')
        log_text.innerHTML += timestamp + ' eyes not detected <br>'
        log_box.scrollTop = log_box.scrollHeight;
      }
      else if (data == "no_image_recieved"){
        closePopupIfOpen('window_alert_user')
        log_text.innerHTML += timestamp + ' no image recieved <br>'
        log_box.scrollTop = log_box.scrollHeight;
      }
    });
  });

  // Function to alert the user if they are slouching
  function alertUser() {
    var hostname = window.location.hostname;
    audio_alert.play();
    window_alert_user = window.open( "/alertUser" , "window_alert_user", "height = 200, width = 200" );
  }

  // Function to close the popup alert
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
