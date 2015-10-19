define(["app", "marionette", "backbone", "jquery"],
  function (app, Marionette, Backbone, $) {

    app.on("template-extensions-render", function (context) {
      //
      var contentView = context.view.contentView;
      var originalMode = contentView.contentEditor.getSession().getMode();

      function setAceMode() {
        //wait for default mode to be set
        setTimeout(function() {
          if (contentView.model.get("engine") === "jade") {
            contentView.contentEditor.getSession().setMode("ace/mode/jade");
          }
        }, 0);
      }

      contentView.model.on("change:engine", setAceMode);
      contentView.on("dom:refresh", setAceMode);
    });
  });
