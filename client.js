if (window.DeviceOrientationEvent) {
 console.log("DeviceOrientation is supported");
}

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', deviceMotionHandler, false);

} else {
  document.getElementByClass("body")[0].innerHTML = "Device Motion Not Supported."
}

function deviceMotionHandler(eventData) {

  var acceleration = eventData.acceleration;
  var accelerationGravity = eventData.accelerationIncludingGravity;
  var rotation = eventData.rotationRate;

  document.getElementByClass("acX")[0].innerHTML = acceleration.x;
  document.getElementByClass("acY")[0].innerHTML = acceleration.y;
  document.getElementByClass("acZ")[0].innerHTML = acceleration.z;

  document.getElementByClass("acGX")[0].innerHTML = accelerationGravity.x;
  document.getElementByClass("acGY")[0].innerHTML = accelerationGravity.y;
  document.getElementByClass("acGZ")[0].innerHTML = accelerationGravity.z;

  document.getElementByClass("alpha")[0].innerHTML = rotation.alpha;
  document.getElementByClass("beta")[0].innerHTML = rotation.beta;
  document.getElementByClass("gamma")[0].innerHTML = rotation.gamma;


  // var info, xyz = "[X, Y, Z]";
  //
  // // Grab the acceleration from the results
  // var acceleration = eventData.acceleration;
  // info = xyz.replace("X", acceleration.x);
  // info = info.replace("Y", acceleration.y);
  // info = info.replace("Z", acceleration.z);
  // document.getElementById("moAccel").innerHTML = info;
  //
  // // Grab the acceleration including gravity from the results
  // acceleration = eventData.accelerationIncludingGravity;
  // info = xyz.replace("X", acceleration.x);
  // info = info.replace("Y", acceleration.y);
  // info = info.replace("Z", acceleration.z);
  // document.getElementById("moAccelGrav").innerHTML = info;
  //
  // // Grab the rotation rate from the results
  // var rotation = eventData.rotationRate;
  // info = xyz.replace("X", rotation.alpha);
  // info = info.replace("Y", rotation.beta);
  // info = info.replace("Z", rotation.gamma);
  // document.getElementById("moRotation").innerHTML = info;
  //
  // // // Grab the refresh interval from the results
  // info = eventData.interval;
  // document.getElementById("moInterval").innerHTML = info;
}
