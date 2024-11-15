document.addEventListener("DOMContentLoaded", function () {
  // Generate QR Code with direct GitHub download link
  const qr = qrcode(0, "M");
  const downloadUrl =
    "https://github.com/recyclemania/RecycleManiaAPK/releases/download/downloadAPK/recyclemania.apk";
  qr.addData(downloadUrl);
  qr.make();

  document.getElementById("qrcode").innerHTML = qr.createImgTag(10);

  // Download button functionality
  document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "recyclemania.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
