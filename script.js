document.addEventListener("DOMContentLoaded", function () {
  const qr = qrcode(0, "M");
  const downloadUrl =
    "https://github.com/recyclemania/RecycleManiaAPK/releases/download/downloadAPK/recyclemania.apk";
  qr.addData(downloadUrl);
  qr.make();

  document.getElementById("qrcode").innerHTML = qr.createImgTag(10);

  document.getElementById("qrcodeLarge").innerHTML = qr.createImgTag(10);

  document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "recyclemania.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  const qrContainer = document.getElementById("qrcode");
  const popup = document.getElementById("qrPopup");
  const closeBtn = document.querySelector(".close-popup");

  qrContainer.addEventListener("click", function () {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popup.style.display === "block") {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
