page_title = document.getElementById('page_title').getAttribute("value");

/* Posture tracker alert system */
if (page_title == "tracker"){

  var log_text = document.getElementById('log_text');
  var log_box = document.getElementById('log_box');
  var audio_alert = document.getElementById("audio_alert");
  var checkbox_popup = document.getElementById("checkbox_popup");
  var checkbox_sound = document.getElementById("checkbox_sound");


  // Submit the form containing the current posture information in tracker.html
  $(document).ready(function() {
    $('#form').ajaxForm(function(data) {
      // get timestamp for the log
      var date = new Date();
      var timestamp = "[" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "]"
      if(data == "posture_fail"){
        closePopupIfOpen('window_alert_user')
        alertUser();
        // prepare the information to write in the log
        log_text.innerHTML += timestamp + ' posture fail <br>';
      }
      else if (data == "posture_pass"){
        closePopupIfOpen('window_alert_user')
        // prepare the information to write in the log
        log_text.innerHTML += timestamp + ' posture pass <br>'
      }
      else if (data == "eyes_not_detected"){
        closePopupIfOpen('window_alert_user')
        // prepare the information to write in the log
        log_text.innerHTML += timestamp + ' eyes not detected <br>'
      }
      else if (data == "no_image_recieved"){
        closePopupIfOpen('window_alert_user')
        // prepare the information to write in the log
        log_text.innerHTML += timestamp + ' no image recieved <br>'
      }
      log_box.scrollTop = log_box.scrollHeight;
    });
  });

  // Function to alert the user if they are slouching
  function alertUser() {
    var hostname = window.location.hostname;
    if (checkbox_popup.checked == true){
      window_alert_user = window.open( "/alertUser" , "window_alert_user", "height = 200, width = 200, left = 200 top = 200");
    }
    if (checkbox_sound.checked == true){
      audio_alert.play();
    }
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
