/**
 * form-relay.js
 * Global script that intercepts <form> submit events.
 * Forms must have: data-form-name="<unique-id>"
 * Sets data-state on the form: "submitting" → "success" | "failed"
 * React components watch data-state via MutationObserver.
 */
(function () {
  "use strict";

  /** Serialize a form's fields into a plain object */
  function serializeForm(form) {
    var data = {};
    var elements = form.elements;
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      if (!el.name || el.disabled) continue;
      if (
        (el.type === "checkbox" || el.type === "radio") &&
        !el.checked
      )
        continue;
      data[el.name] = el.value;
    }
    return data;
  }

  document.addEventListener(
    "submit",
    function (event) {
      var form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      var formName = form.getAttribute("data-form-name");
      if (!formName) return; // not a relay-managed form

      event.preventDefault();

      // 1. Mark as submitting
      form.setAttribute("data-state", "submitting");

      var payload = {
        formName: formName,
        fields: serializeForm(form),
      };

      fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Server responded " + res.status);
          return res.json();
        })
        .then(function () {
          form.setAttribute("data-state", "success");
        })
        .catch(function () {
          form.setAttribute("data-state", "failed");
        });
    },
    true /* capture phase so we run before any React handlers */
  );
})();
