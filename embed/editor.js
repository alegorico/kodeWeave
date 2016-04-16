// Clear Input Values - JQuery Plugin
(function($) {
  $.fn.clear = function() {
    $(this).val("")
  }
}) (jQuery);

var myarray = [],
    current = 1,
    checkedLibs = function() {
      if ( $("#alertify").is(":checked") ) {
        $('.alertifyjs').clear()
        download_to_textbox('../editor/libraries/alertifyjs/css/alertify.min.css', $('.alertifyjs1'))
        download_to_textbox('../editor/libraries/alertifyjs/css/themes/default.min.css', $('.alertifyjs2'))
        download_to_textbox('../editor/libraries/alertifyjs/alertify.min.js', $('.alertifyjs3'))
        download_to_textbox('../editor/libraries/alertifyjs/css/alertify.rtl.min.css', $('.alertifyjs4'))
        download_to_textbox('../editor/libraries/alertifyjs/css/themes/bootstrap.min.css', $('.alertifyjs5'))
        download_to_textbox('../editor/libraries/alertifyjs/css/themes/bootstrap.rtl.min.css', $('.alertifyjs6'))
        download_to_textbox('../editor/libraries/alertifyjs/css/themes/default.rtl.min.css', $('.alertifyjs7'))
        download_to_textbox('../editor/libraries/alertifyjs/css/themes/semantic.min.css', $('.alertifyjs8'))
        download_to_textbox('../editor/libraries/alertifyjs/css/themes/semantic.rtl.min.css', $('.alertifyjs9'))

        $(".alertifyzip").val("zip.file('../editor/libraries/alertifyjs/css/alertify.min.css', $(\".alertifyjs1\").val());\n    zip.file('../editor/libraries/alertifyjs/css/themes/default.min.css', $(\".alertifyjs2\").val());\n    zip.file('../editor/libraries/alertifyjs/alertify.min.js', $(\".alertifyjs3\").val());\n    zip.file('../editor/libraries/alertifyjs/css/alertify.rtl.min.css', $(\".alertifyjs4\").val());\n    zip.file('../editor/libraries/alertifyjs/css/themes/bootstrap.min.css', $(\".alertifyjs5\").val());\n    zip.file('../editor/libraries/alertifyjs/css/themes/bootstrap.rtl.min.css', $(\".alertifyjs6\").val());\n    zip.file('../editor/libraries/alertifyjs/css/themes/default.rtl.min.css', $(\".alertifyjs7\").val());\n    zip.file('../editor/libraries/alertifyjs/css/themes/semantic.min.css', $(\".alertifyjs8\").val());\n    zip.file('../editor/libraries/alertifyjs/css/themes/semantic.rtl.min.css', $(\".alertifyjs9\").val());")
      } else {
        $('.alertifyjs, .alertifyzip').clear()
      }

      if ( $("#angular").is(":checked") ) {
        $('.angularjs').clear()
        download_to_textbox('../editor/libraries/angular/angular.min.js', $('.angularjs'))
        $(".angularzip").val("zip.file('../editor/libraries/angular/angular.min.js', $(\".angularjs\").val());")
      } else {
        $('.angularjs, .angularzip').clear()
      }

      if ( $("#bootstrap").is(":checked") ) {
        $('.bootstrap').clear()
        download_to_textbox('../editor/libraries/bootstrap/bootstrap.css', $('.bootstrap1'))
        download_to_textbox('../editor/libraries/bootstrap/bootstrap.js', $('.bootstrap2'))
        $('.bootstrap1, .bootstrap2').trigger("change")
        $(".bootstrapzip").val("zip.file('../editor/libraries/bootstrap/bootstrap.css', $('.bootstrap1').val());\n  zip.file('../editor/libraries/bootstrap/bootstrap.js', $('.bootstrap2').val());")
      } else {
        $('.bootstrap, .bootstrapzip').clear()
      }

      if ( $("#chartjs").is(":checked") ) {
        $('.chartjs').clear()
        download_to_textbox('../editor/libraries/chartjs/chart.min.js', $('.chartjs'))
        $('.chartjs').trigger("change")
        $(".chartjszip").val("zip.file('../editor/libraries/chartjs/chart.min.js', $('.chartjs').val());")
      } else {
        $('.chartjs, .chartjszip').clear()
      }
      if ( $("#codemirror").is(":checked") ) {
        $('.codemirror').clear()

        download_to_textbox('../editor/libraries/codemirror/lib/codemirror.css', $('.codemirror1'))
        download_to_textbox('../editor/libraries/codemirror/addon/fold/foldgutter.css', $('.codemirror2'))
        download_to_textbox('../editor/libraries/codemirror/lib/codemirror.js', $('.codemirror3'))
        download_to_textbox('../editor/libraries/codemirror/javascripts/code-completion.js', $('.codemirror4'))
        download_to_textbox('../editor/libraries/codemirror/javascripts/css-completion.js', $('.codemirror5'))
        download_to_textbox('../editor/libraries/codemirror/javascripts/html-completion.js', $('.codemirror6'))
        download_to_textbox('../editor/libraries/codemirror/mode/javascript/javascript.js', $('.codemirror7'))
        download_to_textbox('../editor/libraries/codemirror/mode/xml/xml.js', $('.codemirror8'))
        download_to_textbox('../editor/libraries/codemirror/mode/css/css.js', $('.codemirror9'))
        download_to_textbox('../editor/libraries/codemirror/mode/htmlmixed/htmlmixed.js', $('.codemirror10'))
        download_to_textbox('../editor/libraries/codemirror/addon/edit/closetag.js', $('.codemirror11'))
        download_to_textbox('../editor/libraries/codemirror/addon/edit/matchbrackets.js', $('.codemirror12'))
        download_to_textbox('../editor/libraries/codemirror/addon/selection/active-line.js', $('.codemirror13'))
        download_to_textbox('../editor/libraries/codemirror/addon/fold/foldcode.js', $('.codemirror14'))
        download_to_textbox('../editor/libraries/codemirror/addon/fold/foldgutter.js', $('.codemirror15'))
        download_to_textbox('../editor/libraries/codemirror/addon/fold/brace-fold.js', $('.codemirror16'))
        download_to_textbox('../editor/libraries/codemirror/addon/fold/xml-fold.js', $('.codemirror17'))
        download_to_textbox('../editor/libraries/codemirror/addon/fold/comment-fold.js', $('.codemirror18'))
        download_to_textbox('../editor/libraries/codemirror/addon/search/search.js', $('.codemirror19'))
        download_to_textbox('../editor/libraries/codemirror/addon/search/searchcursor.js', $('.codemirror20'))
        download_to_textbox('../editor/libraries/codemirror/addon/dialog/dialog.js', $('.codemirror21'))
        download_to_textbox('../editor/libraries/codemirror/addon/hint/show-hint.js', $('.codemirror22'))
        download_to_textbox('../editor/libraries/codemirror/addon/hint/xml-hint.js', $('.codemirror23'))
        download_to_textbox('../editor/libraries/codemirror/addon/hint/html-hint.js', $('.codemirror24'))
        download_to_textbox('../editor/libraries/codemirror/addon/hint/css-hint.js', $('.codemirror25'))
        download_to_textbox('../editor/libraries/codemirror/addon/hint/javascript-hint.js', $('.codemirror26'))
        download_to_textbox('../editor/libraries/codemirror/addon/search/match-highlighter.js', $('.codemirror27'))
        download_to_textbox('../editor/libraries/codemirror/htmlhint.js', $('.codemirror28'))
        download_to_textbox('../editor/libraries/codemirror/csslint.js', $('.codemirror29'))
        download_to_textbox('../editor/libraries/codemirror/jshint.js', $('.codemirror30'))
        download_to_textbox('../editor/libraries/codemirror/addon/lint/lint.js', $('.codemirror31'))
        download_to_textbox('../editor/libraries/codemirror/addon/lint/html-lint.js', $('.codemirror32'))
        download_to_textbox('../editor/libraries/codemirror/addon/lint/css-lint.js', $('.codemirror33'))
        download_to_textbox('../editor/libraries/codemirror/addon/lint/javascript-lint.js', $('.codemirror34'))
        download_to_textbox('../editor/libraries/codemirror/inlet.min.js', $('.codemirror35'))
        download_to_textbox('../editor/libraries/codemirror/inlet.css', $('.codemirror36'))
        download_to_textbox('../editor/libraries/codemirror/emmet.js', $('.codemirror37'))
        download_to_textbox('../editor/libraries/codemirror/addon/lint/lint.css', $('.codemirror38'))
        download_to_textbox('../editor/libraries/codemirror/addon/dialog/dialog.css', $('.codemirror39'))
        download_to_textbox('../editor/libraries/codemirror/addon/hint/show-hint.css', $('.codemirror40'))
        download_to_textbox('../editor/libraries/codemirror/addon/search/goto-line.js', $('.codemirror41'))
        download_to_textbox('../editor/libraries/codemirror/markdown.js', $('.codemirror42'))
        download_to_textbox('../editor/libraries/codemirror/continuelist.js', $('.codemirror43'))
        download_to_textbox('../editor/libraries/codemirror/mode/haml/haml.js', $('.codemirror44'))
        download_to_textbox('../editor/libraries/codemirror/mode/jade/jade.js', $('.codemirror45'))
        download_to_textbox('../editor/libraries/codemirror/mode/sass/sass.js', $('.codemirror46'))
        download_to_textbox('../editor/libraries/codemirror/mode/livescript/livescript.js', $('.codemirror47'))
        download_to_textbox('../editor/libraries/codemirror/mode/coffeescript/coffeescript.js', $('.codemirror48'))
        download_to_textbox('../editor/libraries/codemirror/mode/ruby/ruby.js', $('.codemirror49'))
        download_to_textbox('../editor/libraries/codemirror/coffee-script.js', $('.codemirror50'))
        download_to_textbox('../editor/libraries/codemirror/coffeelint.js', $('.codemirror51'))
        download_to_textbox('../editor/libraries/codemirror/addon/lint/coffeescript-lint.js', $('.codemirror52'))

        // var grabCodemirror = [
        //   "zip.file('../editor/libraries/codemirror/lib/codemirror.css', $('.codemirror1').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/fold/foldgutter.css', $('.codemirror2').val());\n",
        //   "zip.file('../editor/libraries/codemirror/lib/codemirror.js', $('.codemirror3').val());\n",
        //   "zip.file('../editor/libraries/codemirror/javascripts/code-completion.js', $('.codemirror4').val());\n",
        //   "zip.file('../editor/libraries/codemirror/javascripts/css-completion.js', $('.codemirror5').val());\n",
        //   "zip.file('../editor/libraries/codemirror/javascripts/html-completion.js', $('.codemirror6').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/javascript/javascript.js', $('.codemirror7').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/xml/xml.js', $('.codemirror8').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/css/css.js', $('.codemirror9').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/htmlmixed/htmlmixed.js', $('.codemirror10').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/edit/closetag.js', $('.codemirror11').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/edit/matchbrackets.js', $('.codemirror12').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/selection/active-line.js', $('.codemirror13').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/fold/foldcode.js', $('.codemirror14').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/fold/foldgutter.js', $('.codemirror15').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/fold/brace-fold.js', $('.codemirror16').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/fold/xml-fold.js', $('.codemirror17').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/fold/comment-fold.js', $('.codemirror18').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/search/search.js', $('.codemirror19').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/search/searchcursor.js', $('.codemirror20').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/dialog/dialog.js', $('.codemirror21').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/hint/show-hint.js', $('.codemirror22').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/hint/xml-hint.js', $('.codemirror23').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/hint/html-hint.js', $('.codemirror24').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/hint/css-hint.js', $('.codemirror25').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/hint/javascript-hint.js', $('.codemirror26').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/search/match-highlighter.js', $('.codemirror27').val());\n",
        //   "zip.file('../editor/libraries/codemirror/htmlhint.js', $('.codemirror28').val());\n",
        //   "zip.file('../editor/libraries/codemirror/csslint.js', $('.codemirror29').val());\n",
        //   "zip.file('../editor/libraries/codemirror/jshint.js', $('.codemirror30').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/lint/lint.js', $('.codemirror31').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/lint/html-lint.js', $('.codemirror32').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/lint/css-lint.js', $('.codemirror33').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/lint/javascript-lint.js', $('.codemirror34').val());\n",
        //   "zip.file('../editor/libraries/codemirror/inlet.min.js', $('.codemirror35').val());\n",
        //   "zip.file('../editor/libraries/codemirror/inlet.css', $('.codemirror36').val());\n",
        //   "zip.file('../editor/libraries/codemirror/emmet.js', $('.codemirror37').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/lint/lint.css', $('.codemirror38').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/dialog/dialog.css', $('.codemirror39').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/hint/show-hint.css', $('.codemirror40').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/search/goto-line.js', $('.codemirror41').val());\n",
        //   "zip.file('../editor/libraries/codemirror/markdown.js', $('.codemirror42').val());\n",
        //   "zip.file('../editor/libraries/codemirror/continuelist.js', $('.codemirror43').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/haml/haml.js', $('.codemirror44').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/jade/jade.js', $('.codemirror45').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/sass/sass.js', $('.codemirror46').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/livescript/livescript.js', $('.codemirror47').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/coffeescript/coffeescript.js', $('.codemirror48').val());\n",
        //   "zip.file('../editor/libraries/codemirror/mode/ruby/ruby.js', $('.codemirror49').val());\n",
        //   "zip.file('../editor/libraries/codemirror/coffee-script.js', $('.codemirror50').val());\n",
        //   "zip.file('../editor/libraries/codemirror/coffeelint.js', $('.codemirror51').val());\n",
        //   "zip.file('../editor/libraries/codemirror/addon/lint/coffeescript-lint.js', $('.codemirror52').val());\n"
        // ];

        var grabCodemirror = "zip.file('../editor/libraries/codemirror/lib/codemirror.css', $('.codemirror1').val());\n\n      zip.file('../editor/libraries/codemirror/addon/fold/foldgutter.css', $('.codemirror2').val());\n\n      zip.file('../editor/libraries/codemirror/lib/codemirror.js', $('.codemirror3').val());\n\n      zip.file('../editor/libraries/codemirror/javascripts/code-completion.js', $('.codemirror4').val());\n\n      zip.file('../editor/libraries/codemirror/javascripts/css-completion.js', $('.codemirror5').val());\n\n      zip.file('../editor/libraries/codemirror/javascripts/html-completion.js', $('.codemirror6').val());\n\n      zip.file('../editor/libraries/codemirror/mode/javascript/javascript.js', $('.codemirror7').val());\n\n      zip.file('../editor/libraries/codemirror/mode/xml/xml.js', $('.codemirror8').val());\n\n      zip.file('../editor/libraries/codemirror/mode/css/css.js', $('.codemirror9').val());\n\n      zip.file('../editor/libraries/codemirror/mode/htmlmixed/htmlmixed.js', $('.codemirror10').val());\n\n      zip.file('../editor/libraries/codemirror/addon/edit/closetag.js', $('.codemirror11').val());\n\n      zip.file('../editor/libraries/codemirror/addon/edit/matchbrackets.js', $('.codemirror12').val());\n\n      zip.file('../editor/libraries/codemirror/addon/selection/active-line.js', $('.codemirror13').val());\n\n      zip.file('../editor/libraries/codemirror/addon/fold/foldcode.js', $('.codemirror14').val());\n\n      zip.file('../editor/libraries/codemirror/addon/fold/foldgutter.js', $('.codemirror15').val());\n\n      zip.file('../editor/libraries/codemirror/addon/fold/brace-fold.js', $('.codemirror16').val());\n\n      zip.file('../editor/libraries/codemirror/addon/fold/xml-fold.js', $('.codemirror17').val());\n\n      zip.file('../editor/libraries/codemirror/addon/fold/comment-fold.js', $('.codemirror18').val());\n\n      zip.file('../editor/libraries/codemirror/addon/search/search.js', $('.codemirror19').val());\n\n      zip.file('../editor/libraries/codemirror/addon/search/searchcursor.js', $('.codemirror20').val());\n\n      zip.file('../editor/libraries/codemirror/addon/dialog/dialog.js', $('.codemirror21').val());\n\n      zip.file('../editor/libraries/codemirror/addon/hint/show-hint.js', $('.codemirror22').val());\n\n      zip.file('../editor/libraries/codemirror/addon/hint/xml-hint.js', $('.codemirror23').val());\n\n      zip.file('../editor/libraries/codemirror/addon/hint/html-hint.js', $('.codemirror24').val());\n\n      zip.file('../editor/libraries/codemirror/addon/hint/css-hint.js', $('.codemirror25').val());\n\n      zip.file('../editor/libraries/codemirror/addon/hint/javascript-hint.js', $('.codemirror26').val());\n\n      zip.file('../editor/libraries/codemirror/addon/search/match-highlighter.js', $('.codemirror27').val());\n\n      zip.file('../editor/libraries/codemirror/htmlhint.js', $('.codemirror28').val());\n\n      zip.file('../editor/libraries/codemirror/csslint.js', $('.codemirror29').val());\n\n      zip.file('../editor/libraries/codemirror/jshint.js', $('.codemirror30').val());\n\n      zip.file('../editor/libraries/codemirror/addon/lint/lint.js', $('.codemirror31').val());\n\n      zip.file('../editor/libraries/codemirror/addon/lint/html-lint.js', $('.codemirror32').val());\n\n      zip.file('../editor/libraries/codemirror/addon/lint/css-lint.js', $('.codemirror33').val());\n\n      zip.file('../editor/libraries/codemirror/addon/lint/javascript-lint.js', $('.codemirror34').val());\n\n      zip.file('../editor/libraries/codemirror/inlet.min.js', $('.codemirror35').val());\n\n      zip.file('../editor/libraries/codemirror/inlet.css', $('.codemirror36').val());\n\n      zip.file('../editor/libraries/codemirror/emmet.js', $('.codemirror37').val());\n\n      zip.file('../editor/libraries/codemirror/addon/lint/lint.css', $('.codemirror38').val());\n\n      zip.file('../editor/libraries/codemirror/addon/dialog/dialog.css', $('.codemirror39').val());\n\n      zip.file('../editor/libraries/codemirror/addon/hint/show-hint.css', $('.codemirror40').val());\n\n      zip.file('../editor/libraries/codemirror/addon/search/goto-line.js', $('.codemirror41').val());\n\n      zip.file('../editor/libraries/codemirror/markdown.js', $('.codemirror42').val());\n\n      zip.file('../editor/libraries/codemirror/continuelist.js', $('.codemirror43').val());\n\n      zip.file('../editor/libraries/codemirror/mode/haml/haml.js', $('.codemirror44').val());\n\n      zip.file('../editor/libraries/codemirror/mode/jade/jade.js', $('.codemirror45').val());\n\n      zip.file('../editor/libraries/codemirror/mode/sass/sass.js', $('.codemirror46').val());\n\n      zip.file('../editor/libraries/codemirror/mode/livescript/livescript.js', $('.codemirror47').val());\n\n      zip.file('../editor/libraries/codemirror/mode/coffeescript/coffeescript.js', $('.codemirror48').val());\n\n      zip.file('../editor/libraries/codemirror/mode/ruby/ruby.js', $('.codemirror49').val());\n\n      zip.file('../editor/libraries/codemirror/coffee-script.js', $('.codemirror50').val());\n\n      zip.file('../editor/libraries/codemirror/coffeelint.js', $('.codemirror51').val());\n\n      zip.file('../editor/libraries/codemirror/addon/lint/coffeescript-lint.js', $('.codemirror52').val());\n"

        $('.codemirror').trigger("change")
        $(".codemirrorzip").val(grabCodemirror)
      } else {
        $('.codemirror, .codemirrorzip').clear()
      }
      if ( $("#createjs").is(":checked") ) {
        $('.createjs').clear()
        download_to_textbox('../editor/libraries/createjs/createjs.min.js', $('.createjs1'))
        download_to_textbox('../editor/libraries/createjs/easeljs.min.js', $('.createjs2'))
        download_to_textbox('../editor/libraries/createjs/tweenjs.min.js', $('.createjs3'))
        download_to_textbox('../editor/libraries/createjs/soundjs.min.js', $('.createjs4'))
        download_to_textbox('../editor/libraries/createjs/preloadjs.min.js', $('.createjs5'))
        $('.createjs').trigger("change")
        $(".createjszip").val("zip.file('../editor/libraries/createjs/createjs.min.js', $('.createjs1').val());\nzip.file('../editor/libraries/createjs/easeljs.min.js', $('.createjs2').val());\nzip.file('../editor/libraries/createjs/tweenjs.min.js', $('.createjs3').val());\nzip.file('../editor/libraries/createjs/soundjs.min.js', $('.createjs4').val());\nzip.file('../editor/libraries/createjs/preloadjs.min.js', $('.createjs5').val());")
      } else {
        $('.createjs, .createjszip').clear()
      }
      if ( $("#d3").is(":checked") ) {
        $('.d3').clear()
        download_to_textbox('../editor/libraries/d3/d3.js', $('.d3'))
        $('.d3').trigger("change")
        $(".d3zip").val("zip.file('../editor/libraries/d3/d3.js', $(\".d3\").val());")
      } else {
        $('.d3, .d3zip').clear()
      }
      if ( $("#dojo").is(":checked") ) {
        $('.dojo').clear()
        download_to_textbox('../editor/libraries/dojo/dojo.js', $('.dojo'))
        $('.dojo').trigger("change")
        $(".dojozip").val("zip.file('../editor/libraries/dojo/dojo.js', $(\".dojo\").val());")
      } else {
        $('.dojo, .dojozip').clear()
      }
      if ( $("#fabric").is(":checked") ) {
        $('.fabric').clear()
        download_to_textbox('../editor/libraries/fabric/fabric.min.js', $('.fabric'))
        $('.fabric').trigger("change")
        $(".fabriczip").val("zip.file('../editor/libraries/fabric/fabric.min.js', $(\".fabric\").val());")
      } else {
        $('.fabric, .fabriczip').clear()
      }
      if ( $("#jquery").is(":checked") ) {
        $('.jquery').clear()
        download_to_textbox('../editor/libraries/jquery/jquery.js', $('.jquery'))
        $('.jquery').trigger("change")
        $(".jqueryzip").val("zip.file('../editor/libraries/jquery/jquery.js', $(\".jquery\").val());")
      } else {
        $('.jquery, .jqueryzip').clear()
      }
      if ( $("#jqueryui").is(":checked") ) {
        $('.jqueryui').clear()
        download_to_textbox('../editor/libraries/jqueryui/jqueryui.css', $('.jqueryui1'))
        download_to_textbox('../editor/libraries/jqueryui/jqueryui.min.js', $('.jqueryui2'))
        download_to_textbox('../editor/libraries/jqueryui/jquery.ui.touch-punch.min.js', $('.jqueryui3'))
        $('.jqueryui').trigger("change")
        $(".jqueryuizip").val("zip.file('../editor/libraries/jqueryui/jqueryui.css', $(\".jqueryui1\").val());\nzip.file('../editor/libraries/jqueryui/jqueryui.min.js', $(\".jqueryui2\").val());\nzip.file('../editor/libraries/jqueryui/jquery.ui.touch-punch.min.js', $(\".jqueryui3\").val());")
      } else {
        $('.jqueryui, .jqueryuizip').clear()
      }
      if ( $("#jquerytools").is(":checked") ) {
        $('.jquerytools').clear()
        download_to_textbox('../editor/libraries/jquerytools/jquery.tools.min.js', $('.jquerytools'))
        $('.jquerytools').trigger("change")
        $(".jquerytoolszip").val("zip.file('../editor/libraries/jquerytools/jquery.tools.min.js', $(\".jquerytools\").val());")
      } else {
        $('.jquerytools, .jquerytoolszip').clear()
      }
      if ( $("#jszip").is(":checked") ) {
        $('.jszip').clear()
        download_to_textbox('../editor/libraries/jszip/jszip.min.css', $('.jszip1'))
        download_to_textbox('../editor/libraries/jszip/jszip-utils.js', $('.jszip2'))
        download_to_textbox('../editor/libraries/jszip/FileSaver.js', $('.jszip3'))
        download_to_textbox('../editor/libraries/jszip/Blob.js', $('.jszip4'))
        $('.jszip').trigger("change")
        $(".jszipzip").val("zip.file('../editor/libraries/jszip/jszip.min.js', $(\".jszip1\").val());\nzip.file('../editor/libraries/jszip/jszip-utils.js', $(\".jszip2\").val());\nzip.file('../editor/libraries/jszip/FileSaver.js', $(\".jszip3\").val());\nzip.file('../editor/libraries/jszip/Blob.js', $(\".jszip4\").val());")
      } else {
        $('.jszip, .jszipzip').clear()
      }
      if ( $("#jqxsplitter").is(":checked") ) {
        $('.jqxsplitter').clear()

        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.base.css', $('.jqwidgets1'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.android.css', $('.jqwidgets2'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.arctic.css', $('.jqwidgets3'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.black.css', $('.jqwidgets4'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.blackberry.css', $('.jqwidgets5'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.bootstrap.css', $('.jqwidgets6'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.classic.css', $('.jqwidgets7'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.darkblue.css', $('.jqwidgets8'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.energyblue.css', $('.jqwidgets9'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.fresh.css', $('.jqwidgets10'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.highcontrast.css', $('.jqwidgets11'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.metro.css', $('.jqwidgets12'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.metrodark.css', $('.jqwidgets13'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.mobile.css', $('.jqwidgets14'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.office.css', $('.jqwidgets15'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.orange.css', $('.jqwidgets16'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.shinyblack.css', $('.jqwidgets17'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.summer.css', $('.jqwidgets18'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.ui-darkness.css', $('.jqwidgets19'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.ui-le-frog.css', $('.jqwidgets20'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.ui-lightness.css', $('.jqwidgets21'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.ui-overcast.css', $('.jqwidgets22'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.ui-redmond.css', $('.jqwidgets23'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.ui-smoothness.css', $('.jqwidgets24'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.ui-start.css', $('.jqwidgets25'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.ui-sunny.css', $('.jqwidgets26'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.web.css', $('.jqwidgets27'))
        download_to_textbox('../editor/libraries/jqwidgets/styles/jqx.windowsphone.css', $('.jqwidgets28'))
        download_to_textbox('../editor/libraries/jqwidgets/jqxcore.js', $('.jqwidgets29'))
        download_to_textbox('../editor/libraries/jqwidgets/jqxsplitter.js', $('.jqwidgets30'))

        // var jqxsplitter = [
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.base.css', $('.jqwidgets1').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.android.css', $('.jqwidgets2').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.arctic.css', $('.jqwidgets3').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.black.css', $('.jqwidgets4').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.blackberry.css', $('.jqwidgets5').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.bootstrap.css', $('.jqwidgets6').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.classic.css', $('.jqwidgets7').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.darkblue.css', $('.jqwidgets8').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.energyblue.css', $('.jqwidgets9').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.fresh.css', $('.jqwidgets10').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.highcontrast.css', $('.jqwidgets11').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.metro.css', $('.jqwidgets12').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.metrodark.css', $('.jqwidgets13').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.mobile.css', $('.jqwidgets14').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.office.css', $('.jqwidgets15').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.orange.css', $('.jqwidgets16').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.shinyblack.css', $('.jqwidgets17').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.summer.css', $('.jqwidgets18').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-darkness.css', $('.jqwidgets19').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-le-frog.css', $('.jqwidgets20').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-lightness.css', $('.jqwidgets21').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-overcast.css', $('.jqwidgets22').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-redmond.css', $('.jqwidgets23').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-smoothness.css', $('.jqwidgets24').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-start.css', $('.jqwidgets25').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-sunny.css', $('.jqwidgets26').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.web.css', $('.jqwidgets27').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/styles/jqx.windowsphone.css', $('.jqwidgets28').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/jqxcore.js', $('.jqwidgets29').val());\n",
        //   "zip.file('../editor/libraries/jqwidgets/jqxsplitter.js', $('.jqwidgets30').val());\n"
        // ];

        var jqxsplitter = "zip.file('../editor/libraries/jqwidgets/styles/jqx.base.css', $('.jqwidgets1').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.android.css', $('.jqwidgets2').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.arctic.css', $('.jqwidgets3').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.black.css', $('.jqwidgets4').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.blackberry.css', $('.jqwidgets5').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.bootstrap.css', $('.jqwidgets6').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.classic.css', $('.jqwidgets7').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.darkblue.css', $('.jqwidgets8').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.energyblue.css', $('.jqwidgets9').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.fresh.css', $('.jqwidgets10').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.highcontrast.css', $('.jqwidgets11').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.metro.css', $('.jqwidgets12').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.metrodark.css', $('.jqwidgets13').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.mobile.css', $('.jqwidgets14').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.office.css', $('.jqwidgets15').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.orange.css', $('.jqwidgets16').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.shinyblack.css', $('.jqwidgets17').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.summer.css', $('.jqwidgets18').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-darkness.css', $('.jqwidgets19').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-le-frog.css', $('.jqwidgets20').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-lightness.css', $('.jqwidgets21').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-overcast.css', $('.jqwidgets22').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-redmond.css', $('.jqwidgets23').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-smoothness.css', $('.jqwidgets24').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-start.css', $('.jqwidgets25').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.ui-sunny.css', $('.jqwidgets26').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.web.css', $('.jqwidgets27').val());\n\n      zip.file('../editor/libraries/jqwidgets/styles/jqx.windowsphone.css', $('.jqwidgets28').val());\n\n      zip.file('../editor/libraries/jqwidgets/jqxcore.js', $('.jqwidgets29').val());\n\n      zip.file('../editor/libraries/jqwidgets/jqxsplitter.js', $('.jqwidgets30').val());\n"

        $('.jqxsplitter').trigger("change")
        $(".jqxsplitterzip").val(jqxsplitter)
      } else {
        $('.jqxsplitter, .jqxsplitterzip').clear()
      }
      if ( $("#kinetic").is(":checked") ) {
        $('.kinetic').clear()
        download_to_textbox('../editor/libraries/kinetic/kinetic.js', $('.kinetic'))
        $('.kinetic').trigger("change")
        $(".kineticzip").val("zip.file('../editor/libraries/kinetic/kinetic.js', $(\".kinetic\").val());")
      } else {
        $('.kinetic, .kineticzip').clear()
      }
      if ( $("#knockout").is(":checked") ) {
        $('.knockout').clear()
        download_to_textbox('../editor/libraries/knockout/knockout.js', $('.knockout'))
        $('.knockout').trigger("change")
        $(".knockoutzip").val("zip.file('../editor/libraries/knockout/knockout.js', $(\".knockout\").val());")
      } else {
        $('.knockout, .knockoutzip').clear()
      }
      if ( $("#modernizer").is(":checked") ) {
        $('.modernizer').clear()
        download_to_textbox('../editor/libraries/modernizer/modernizer.js', $('.modernizer'))
        $('.modernizer').trigger("change")
        $(".modernizerzip").val("zip.file('../editor/libraries/modernizer/modernizer.js', $(\".modernizer\").val());")
      } else {
        $('.modernizer, .modernizerzip').clear()
      }
      if ( $("#mootools").is(":checked") ) {
        $('.mootools').clear()
        download_to_textbox('../editor/libraries/mootools/mootools-yui-compressed.js', $('.mootools'))
        $('.mootools').trigger("change")
        $(".mootoolszip").val("zip.file('../editor/libraries/mootools/mootools-yui-compressed.js', $(\".mootools\").val());")
      } else {
        $('.mootools, .mootoolszip').clear()
      }
      if ( $("#normalize").is(":checked") ) {
        $('.normalize').clear()
        download_to_textbox('../editor/libraries/normalize/normalize.css', $('.normalize'))
        $('.normalize').trigger("change")
        $(".normalizezip").val("zip.file('../editor/libraries/normalize/normalize.css', $(\".normalize\").val());")
      } else {
        $('.normalize, .normalizezip').clear()
      }
      if ( $("#paperjs").is(":checked") ) {
        $('.paperjs').clear()
        download_to_textbox('../editor/libraries/paperjs/paperjs.js', $('.paperjs'))
        $('.paperjs').trigger("change")
        $(".paperjszip").val("zip.file('../editor/libraries/paperjs/paperjs.js', $(\".paperjs\").val());")
      } else {
        $('.paperjs, .paperjszip').clear()
      }
      if ( $("#polyui").is(":checked") ) {
        $('.polyui').clear()
        download_to_textbox('../editor/libraries/polyui/polyui.css', $('.polyui'))
        $('.polyui').trigger("change")
        $(".polyuizip").val("zip.file('../editor/libraries/polyui/polyui.css', $(\".polyui\").val());")
      } else {
        $('.polyui, .polyuizip').clear()
      }
      if ( $("#processingjs").is(":checked") ) {
        $('.processingjs').clear()
        download_to_textbox('../editor/libraries/processingjs/processingjs.js', $('.processingjs'))
        $('.processingjs').trigger("change")
        $(".processingjszip").val("zip.file('../editor/libraries/processingjs/processingjs.js', $(\".processingjs\").val());")
      } else {
        $('.processingjs, .processingjsszip').clear()
      }
      if ( $("#prototypejs").is(":checked") ) {
        $('.prototypejs').clear()
        download_to_textbox('../editor/libraries/processingjs/prototypejs.js', $('.prototypejs'))
        $('.prototypejs').trigger("change")
        $(".prototypejszip").val("zip.file('../editor/libraries/prototypejs/prototypejs.js', $(\".prototypejs\").val());")
      } else {
        $('.prototypejs, .prototypejszip').clear()
      }
      if ( $("#qooxdoo").is(":checked") ) {
        $('.qooxdoo').clear()
        download_to_textbox('../editor/libraries/qooxdoo/qooxdoo.js', $('.qooxdoo'))
        $('.qooxdoo').trigger("change")
        $(".qooxdooszip").val("zip.file('../editor/libraries/qooxdoo/qooxdoo.js', $(\".qooxdoo\").val());")
      } else {
        $('.qooxdoo, .qooxdooszip').clear()
      }
      if ( $("#raphael").is(":checked") ) {
        $('.raphael').clear()
        download_to_textbox('../editor/libraries/raphael/raphael.js', $('.raphael'))
        $('.raphael').trigger("change")
        $(".raphaelzip").val("zip.file('../editor/libraries/raphael/raphael.js', $(\".raphael\").val());")
      } else {
        $('.raphael, .raphaelzip').clear()
      }
      if ( $("#requirejs").is(":checked") ) {
        $('.requirejs').clear()
        download_to_textbox('../editor/libraries/require/require.js', $('.requirejs'))
        $('.requirejs').trigger("change")
        $(".requirejszip").val("zip.file('../editor/libraries/require/require.js', $(\".requirejs\").val());")
      } else {
        $('.requirejs, .requirejszip').clear()
      }
      if ( $("#showdown").is(":checked") ) {
        $('.showdown').clear()
        download_to_textbox('../editor/libraries/showdown/Showdown.min.js', $('.showdown'))
        $('.showdown').trigger("change")
        $(".showdownzip").val("zip.file('../editor/libraries/showdown/Showdown.min.js', $(\".showdown\").val());")
      } else {
        $('.showdown, .showdownzip').clear()
      }
      if ( $("#scriptaculous").is(":checked") ) {
        $('.scriptaculous').clear()
        download_to_textbox('../editor/libraries/scriptaculous/scriptaculous.js', $('.scriptaculous'))
        $('.scriptaculous').trigger("change")
        $(".scriptaculouszip").val("zip.file('../editor/libraries/scriptaculous/scriptaculous.js', $(\".scriptaculous\").val());")
      } else {
        $('.scriptaculous, .scriptaculouszip').clear()
      }
      if ( $("#snapsvg").is(":checked") ) {
        $('.snapsvg').clear()
        download_to_textbox('../editor/libraries/snap-svg/snap-svg.js', $('.snapsvg'))
        $('.snapsvg').trigger("change")
        $(".snapsvgzip").val("zip.file('../editor/libraries/snap-svg/snap-svg.js', $(\".snapsvg\").val());")
      } else {
        $('.snapsvg, .snapsvgzip').clear()
      }
      if ( $("#svgjs").is(":checked") ) {
        $('.svgjs').clear()
        download_to_textbox('../editor/libraries/svg-svg/svg-svg.js', $('.svgjs'))
        $('.svgjs').trigger("change")
        $(".svgjszip").val("zip.file('../editor/libraries/svg-svg/svg-svg.js', $(\".svgjs\").val());")
      } else {
        $('.svgjs, .svgjszip').clear()
      }
      if ( $("#threejs").is(":checked") ) {
        $('.threejs').clear()
        download_to_textbox('../editor/libraries/threejs/three.min.js', $('.threejs'))
        $('.threejs').trigger("change")
        $(".threejszip").val("zip.file('../editor/libraries/threejs/three.min.js', $(\".threejs\").val());")
      } else {
        $('.threejs, .threejszip').clear()
      }
      if ( $("#underscorejs").is(":checked") ) {
        $('.underscorejs').clear()
        download_to_textbox('../editor/libraries/underscore/underscore.js', $('.underscorejs'))
        $('.underscorejs').trigger("change")
        $(".underscorejszip").val("zip.file('../editor/libraries/underscore/underscore.js', $(\".underscorejs\").val());")
      } else {
        $('.underscorejs, .underscorejszip').clear()
      }
      if ( $("#webfontloader").is(":checked") ) {
        $('.webfontloader').clear()
        download_to_textbox('../editor/libraries/webfont/webfont.js', $('.webfontloader'))
        $('.webfontloader').trigger("change")
        $(".webfontloaderzip").val("zip.file('../editor/libraries/webfont/webfont.js', $(\".webfontloader\").val());")
      } else {
        $('.webfontloader, .webfontloaderzip').clear()
      }
      if ( $("#yui").is(":checked") ) {
        $('.yui').clear()
        download_to_textbox('../editor/libraries/yui/yui.js', $('.yui'))
        $('.yui').trigger("change")
        $(".yuizip").val("zip.file('../editor/libraries/yui/yui.js', $(\".yui\").val());")
      } else {
        $('.yui, .yuizip').clear()
      }
      if ( $("#zepto").is(":checked") ) {
        $('.zepto').clear()
        download_to_textbox('../editor/libraries/zepto/zepto.js', $('.zepto'))
        $('.zepto').trigger("change")
        $(".zeptozip").val("zip.file('../editor/libraries/zepto/zepto.js', $(\".zepto\").val());")
      } else {
        $('.zepto, .zeptozip').clear()
      }

      // Update JSZip (Applied dynamically from HTML div )
      $("[data-action=ziplibs]").val(function() {
        return $.map($(".jszipcode"), function (el) {
          return el.value
        }).join("")
      })
    },
    download_to_textbox = function (url, el) {
      return $.get(url, null, function (data) {
        el.val(data)
      }, "text")
    },
    download_to_editor = function (url, el) {
      return $.get(url, null, function (data) {
        el.setValue(data)
      }, "text")
    }

// Load Embeded Weave
var hash = window.location.hash.substring(1)
if (window.location.hash) {
  function loadgist(gistid) {
    $.ajax({
      url: "https://api.github.com/gists/" + gistid,
      type: "GET",
      dataType: "jsonp",
      jsonp: "callback"
    }).success(function(gistdata) {
      var htmlVal        = gistdata.data.files["index.html"]
      var jadeVal        = gistdata.data.files["index.jade"]
      var cssVal         = gistdata.data.files["index.css"]
      var jsVal          = gistdata.data.files["index.js"]
      var coffeeVal      = gistdata.data.files["index.coffee"]
      var mdVal      = gistdata.data.files["README.md"]
      var libraries  = gistdata.data.files["libraries.json"].content
      var jsonLibs   = JSON.parse(libraries)

      // Return libraries from json
      $.each(jsonLibs, function(name, value) {
        $(".ldd-submenu #" + name).prop("checked", value).trigger("keyup")
      })

      // Set checked libraries into preview
      $("#jquery").trigger("keyup")

      // Return the editor's values
      if (!mdVal) {
        mdEditor.setValue("")
      } else {
        mdEditor.setValue(mdVal.content)
      }
      if (!htmlVal) {
        if (!jadeVal) {
          htmlEditor.setValue("")
        } else {
          htmlEditor.setValue(jadeVal.content)
          $("#html-preprocessor").val("jade").change()
        }
      } else {
        htmlEditor.setValue(htmlVal.content)
        $("#html-preprocessor").val("none").change()
      }
      if (!jadeVal) {
        if (!htmlVal) {
          htmlEditor.setValue("")
        } else {
          htmlEditor.setValue(htmlVal.content)
          $("#html-preprocessor").val("none").change()
        }
      } else {
        htmlEditor.setValue(jadeVal.content)
        $("#html-preprocessor").val("jade").change()
      }
      if (!cssVal) {
        cssEditor.setValue("")
      } else {
        cssEditor.setValue(cssVal.content)
      }
      if (!jsVal) {
        if (!coffeeVal) {
          jsEditor.setValue("")
        } else {
          jsEditor.setValue(coffeeVal.content)
          $("#js-preprocessor").val("coffeescript").change()
        }
      } else {
        jsEditor.setValue(jsVal.content)
        $("#js-preprocessor").val("none").change()
      }
      if (!coffeeVal) {
        if (!jsVal) {
          jsEditor.setValue("")
        } else {
          jsEditor.setValue(jsVal.content)
          $("#js-preprocessor").val("none").change()
        }
      } else {
        jsEditor.setValue(coffeeVal.content)
        $("#js-preprocessor").val("coffeescript").change()
      }
    }).error(function(e) {
      // ajax error
      console.warn("Error: Could not load weave!", e)
      alertify.error("Error: Could not load weave!")
    })
  }

  loadgist(hash)
}

// Setup Preprocessors
$(".settings").on("click", function() {
  $(".preprocessor").addClass("hide")
  if ($(this).hasClass("htmlSetting")) {
    $(".html-preprocessor").removeClass("hide")
  } else if ($(this).hasClass("cssSetting")) {
    $(".css-preprocessor").removeClass("hide")
  } else if ($(this).hasClass("jsSetting")) {
    $(".js-preprocessor").removeClass("hide")
  }
  if ($("#html-preprocessor").val() == "none") {
    if (!htmlEditor.getValue) {
      $(".html-preprocessor-convert").addClass("hide")
    }
  } else if ($("#html-preprocessor").val() == "jade") {
    if (!htmlEditor.getValue) {
      $(".html-preprocessor-convert").addClass("hide")
    }
  }
  if ($("#js-preprocessor").val() == "none") {
    if (!jsEditor.getValue) {
      $(".js-preprocessor-convert").addClass("hide")
    }
  } else if ($("#js-preprocessor").val() == "coffeescript") {
    if (!jsEditor.getValue) {
      $(".js-preprocessor-convert").addClass("hide")
    }
  }
  $("[data-action=preprocessors]").fadeIn()
})
// Preprocessors (Doesn't compile to preview)
$("#html-preprocessor").on("change", function() {
  var valueSelected = this.value
  if ( valueSelected == "none") {
    htmlEditor.setOption("mode", "text/html")
    htmlEditor.setOption("gutters", ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"])
    // htmlEditor.refresh()
  } else if ( valueSelected == "jade") {
    htmlEditor.setOption("mode", "text/x-jade")
    htmlEditor.setOption("gutters", ["CodeMirror-linenumbers", "CodeMirror-foldgutter"])
    // htmlEditor.refresh()
  } else {
    htmlEditor.setOption("mode", "text/html")
    htmlEditor.setOption("gutters", ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"])
    // htmlEditor.refresh()
  }
  updatePreview()
}).trigger("change")
$("#js-preprocessor").on("change", function() {
  var valueSelected = this.value
  if ( valueSelected == "none") {
    jsEditor.setOption("mode", "text/javascript")
    jsEditor.setOption("lint", false)
    jsEditor.setOption("lint", true)
    // jsEditor.refresh()
    $(".jsvalidator").show()
  } else if ( valueSelected == "coffeescript") {
    jsEditor.setOption("mode", "text/x-coffeescript")
    jsEditor.setOption("lint", false)
    jsEditor.setOption("lint", true)
    // jsEditor.refresh()
  } else {
    $(".jsvalidator").show()
    jsEditor.setOption("mode", "text/javascript")
    jsEditor.setOption("lint", false)
    jsEditor.setOption("lint", true)
    // jsEditor.refresh()
  }
  updatePreview()
}).trigger("change")

// Save Checked Libraries for LocalStorage
var textarea = $("[data-action=library-code]")

// Add/Remove Libraries
$("[data-action=check]").on("change keyup", function() {
  var value = $(this).parent().nextAll("div").children(".libsources:first").val() + "\n"
  checkedLibs()

  var libsTextarea = $("[data-action=libstextarea]")

  if ( $(this).prop("checked") === true ) {
    textarea.val( textarea.val() + value )
  } else {
    textarea.val( textarea.val().replace( value, "") )
  }

  updatePreview()

  var checked = $("[type=checkbox].check:checked")
  var lsChecked = [];
  for (var i = 0, iLen = checked.length; i < iLen; i++) {
    lsChecked.push($(checked[i]).attr('id'))
  }
})
$("#jquery").trigger("keyup")

checkedLibs()