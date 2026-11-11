// ============================================================
// CONFIGURAÇÃO — troque pelo número do WhatsApp da MAST
// Formato: código do país + DDD + número, só dígitos. Ex.: 5584999998888
// ============================================================
var WHATSAPP_NUMBER = "5500000000000";

(function () {
  var links = document.querySelectorAll("[data-wa]");
  for (var i = 0; i < links.length; i++) {
    var msg = links[i].getAttribute("data-wa") || "";
    links[i].href = "https://wa.me/" + WHATSAPP_NUMBER + (msg ? "?text=" + encodeURIComponent(msg) : "");
  }
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
