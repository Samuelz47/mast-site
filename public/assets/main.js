// ============================================================
// CONFIGURAÇÃO — troque pelo número do WhatsApp da MAST
// Formato: código do país + DDD + número, só dígitos. Ex.: 5584999998888
// ============================================================
var WHATSAPP_NUMBER = "5500000000000";

(function () {
  // Origem do visitante: use links como seusite.com/?ref=instagram (ex.: na bio)
  // e a origem vai junto na mensagem do WhatsApp.
  var ref = "";
  try {
    ref = (new URLSearchParams(location.search).get("ref") || sessionStorage.getItem("mast_ref") || "").slice(0, 40);
    if (ref) sessionStorage.setItem("mast_ref", ref);
  } catch (e) {}

  function waUrl(msg) {
    if (ref) msg += " [origem: " + ref + "]";
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
  }

  var links = document.querySelectorAll("[data-wa]");
  for (var i = 0; i < links.length; i++) {
    links[i].href = waUrl(links[i].getAttribute("data-wa") || "Olá!");
  }

  var form = document.getElementById("qf");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var msg = "Olá! Meu nome é " + f.nome.value.trim() + ", tenho um negócio de " +
      f.negocio.value.trim() + " e preciso de: " + f.servico.value + ".";
    window.open(waUrl(msg), "_blank", "noopener");
  });

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
