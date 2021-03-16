var $status = document.getElementById("status");
function requestPermission() {
  if (!("Notification" in window)) {
    alert("Notification API not supported!");
    return;
  }

  Notification.requestPermission(function (result) {
    if ((result.value = "granted"))
      $status.innerText = "Bildirishnomalar yoqilgan 🙂";
  });
}
