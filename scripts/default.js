window.theme = window.location.hash == "" ? "bootstrap" : window.location.hash.split("/")[1].replace("dark", "");
window.themeColor = ""; window.themeStyle = ""; window.themeVarient = "";
window.isOnline = (window.location.host == "tsjq.syncfusion.com") ? true : false;
isPopupOpened = false;
var previousSample, previousSubSample, showCaseSample, sampleUrl, mainSampleButton, subSampleButton, subSampleToolbarObjload,themeUrl;
var arr = [];
$(function () {
    window.htmlEditor = window.JSEditor = window.TSEditor = [];
    function generateURL() {
        var href = [];
        href = window.location.href.split("!");
        if (href.length > 1) {
            arr = href[1].split("/");
            if (arr[2] !== "Showcase"){
                sampleUrl = arr[1] + "/" + arr[2];
				 if(arr.length > 3){ sampleUrl = sampleUrl + "/" + arr[3] }
			}
            else{
                sampleUrl = arr[1];
			}
        }
        else {
			sampleUrl = "Showcase";
            windowsurl(sampleUrl);
        }
    }
    generateURL();
    initialRendering();
    resizeWindows();
	sourceCodeBorder();
    function initialRendering() {
		$("body").addClass(window.theme);
		$(".tsthemegallery").css({ display: (window.isOnline) ? "block" : "none" });
		if(window.isOnline){
		    bindUnbindDocClickEvents(true);		
		    themeButtonSelect();
		    pageReloadDarkTheme();
		}
        var toolbarObj = $("#toolbarmainsample").ejToolbar({ width: "100%" });
        toolbarObj.find('li').remove();
        for (var i = 0; i < GroupingList.length; i++) {
            var liElement = $("<li></li>");
            var controlID = GroupingList[i].replace(" ", "", "g");
            liElement.append($("<input id='" + controlID + "' type='checkbox' />"));
            liElement.append($("<label for='" + controlID + "'>Toggle</label>"));
            liElement.find("input#" + controlID).ejToggleButton({
                defaultText: GroupingList[i],
                showRoundedCorner: true,
                size: "normal"
            });
            toolbarObj.find("ul").append(liElement);
			   if (arr[2] === GroupingList[i]) {
                if (!$("#toolbarmainsample").find('ul>li').first().find('.e-btn').hasClass('e-active')) {
                    $("#toolbarmainsample").find('ul>li').first().find('.e-btn').addClass('e-active');
                    showCaseSample = $("#toolbarmainsample").find('ul>li').first().find('.e-btn');
                }
            }
        }
        subSampleToolbarObjload = $("#toolbarsubsample").ejToolbar({ width: "100%" });
        var tempSampleList = SamplesList;
        subSampleToolbarObjload.find("li").remove();
        $.each(tempSampleList[0], function (key, value) {
            var samples = value;
            for (var v = 0; v < samples.length; v++) {
                var subsample = samples[v].replace(" ", "", "g").replace(/[()]/g, '');
                if (arr[2] == subsample) {
                    for (var i = 0; i < samples.length; i++) {
                        var liElement = $("<li></li>");
                        liElement.append($("<button></button>").ejButton({ "text": samples[i],
                         showRoundedCorner: true,
						}));
                        subSampleToolbarObjload.find("ul").append(liElement);
                    }
                    var mainsampleBtn = $("#toolbarmainsample").find('ul li span button');
                    for (var m = 0; m < mainsampleBtn.length; m++) {
                        if (key == mainsampleBtn[m].innerHTML) {
                            mainSampleButton = mainsampleBtn[m];
                            $(mainSampleButton).addClass('e-active');
                        }
                    }
                    var subsamplebtn = $("#toolbarsubsample").find('ul li button');
                    for (var s = 0; s < subsamplebtn.length; s++) {
                        var subsamplebtns = subsamplebtn[s].innerHTML.replace(" ", "", "g").replace(/[()]/g, '');
                        if (arr[2] == subsamplebtns) {
                            subSampleButton = subsamplebtn[s];
                            $(subSampleButton).addClass('e-active');
							// Material/Office theme support button
							if(window.theme === "material"){
						        $(subSampleButton).addClass("materialActiveBtn");
					         }else if(window.theme === "office-365"){
						        $(subSampleButton).addClass("office365ActiveBtn");
					       }
                        }
                    }
                }
            }
        });
		 if ( arr.length != 0 && arr[2] !== "Showcase") {
            $("#showcasesample").css('display', 'none');
            $("#typescript").css('display', 'block');
            $("#toolbarsubsample").css('display', 'block');
            $("#sourceTab").css('display', 'block');
            $("#footer").css("display", 'block');
			$("#sourceText").css('display', 'block');
            sampleajaxrendering();
        }
        else {
            $("#showcasesample").css('display', 'block');
            $("#toolbarsubsample").css('display', 'none');
            $("#typescript").css('display', 'none');
            $("#sourceTab").css('display', 'none');
			$("#sourceText").css('display', 'none');
        }
    }
	
    function sampleajaxrendering() {
		var refeshHtml = arr[2] +"/" + arr[3];
		  $.get(refeshHtml + ".html", function (data) {
              $(".cols").html(data);
              document.getElementById("text").innerHTML = refeshHtml;
          });
		 var refHtml = arr[2] +"/" + arr[3] + ".html";
		 var refJs = arr[2] +"/" + arr[3] + ".js";
		 var refTs = arr[2] +"/" + arr[3] + ".ts";
         htmlContent(refHtml);
         tsContent(refTs);
         jsContent(refJs);
        windowsurl();
    }
    function windowsurl(url) {
		var tssburl;
        if (url === undefined){
            url = sampleUrl;
			tssburl = "" + "#!/" + url;
        if(window.location.hash != tssburl)
        window.location.hash = "" + "#!/" + window.theme + "/" + url;
           window.location.hash = tssburl;
		}else{
			window.location.hash = "" + "#!/" + window.theme + "/" + url;
		}
    }
    function htmlContent(htmlurl) {
        if (htmlurl === undefined) {
            htmlurl = sampleUrl + ".html";
        }
        ajaxGet({
            url: htmlurl,
            data: null,
            success: function (data) {
                $("#htmlsource .tab_content").text(data).html();
                contentLoaded();
            },
            dataType: "text"
        });
    }
    function tsContent(tsurl) {
        if (tsurl === undefined) {
            tsurl = sampleUrl + ".ts";
        }
        ajaxGet({
            url: tsurl,
            data: null,
            success: function (data) {
                $("#tssource .tab_content").html(data);
                tscontentLoaded();
            },
            dataType: "text"
        });
    }
    function jsContent(jsurl) {
        if (jsurl === undefined) {
            jsurl = sampleUrl + ".js";
        }
        ajaxGet({
            url: jsurl,
            data: null,
            success: function (data) {
                $("#jssource .tab_content").html(data);
                jscontentLoaded();
            },
            dataType: "text"
        });
    }
    function ajaxGet(settings) {
        $.ajax({
            url: settings.url,
            data: settings.data,
            success: settings.success,
            dataType: settings.dataType
        });
    }
    function contentLoaded() {
        var htmlContent = $("#htmlsource .tab_content").html();
        $("#htmlsource .tab_content").html('');
        $("#sourceTab #htmlsource").css('display', 'block');
        $("#sourceTab #jssource").css('display', 'none');
        $("#sourceTab #tssource").css('display', 'none');
        if ($("#htmlsource").find('.CodeMirror')) $("#htmlsource").find('.CodeMirror').remove();
        var html = htmlContent.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        window.htmlEditor.push(CodeMirror.fromTextArea($("#htmlsource .tab_content").val(html)[0], {
            lineNumbers: false,
            readOnly: true,
            mode: "text/html"
        }));
        $("#htmlsource").find($(".CodeMirror")).appendTo("#htmlsource");
        $("#sourceTab").ejTab('model.selectedItemIndex', 0);
    }
    function tscontentLoaded() {
        var tsContent = $("#tssource .tab_content").html();
        $("#tssource .tab_content").html('');
        $("#sourceTab #htmlsource").css('display', 'none');
        $("#sourceTab #jssource").css('display', 'none');
        $("#sourceTab #tssource").css('display', 'block');
        if ($("#tssource").find('.CodeMirror')) $("#tssource").find('.CodeMirror').remove();
        window.htmlEditor.push(CodeMirror.fromTextArea($("#tssource .tab_content").val(tsContent)[0], {
            lineNumbers: false,
            readOnly: true,
            mode: "javascript"
        }));
        $("#tssource").find($(".CodeMirror")).appendTo("#tssource");
        $("#sourceTab").ejTab('model.selectedItemIndex', 0);
    }
    function jscontentLoaded() {
        var jsContent = $("#jssource .tab_content").html();
        $("#jssource .tab_content").html('');
        $("#sourceTab #htmlsource").css('display', 'none');
        $("#sourceTab #tssource").css('display', 'none');
        $("#sourceTab #jssource").css('display', 'block');
        if ($("#jssource").find('.CodeMirror')) $("#jssource").find('.CodeMirror').remove();
        window.htmlEditor.push(CodeMirror.fromTextArea($("#jssource .tab_content").val(jsContent)[0], {
            lineNumbers: false,
            readOnly: true,
            mode: "javascript"
        }));
        $("#jssource").find($(".CodeMirror")).appendTo("#jssource");
        $("#sourceTab #tssource").css('display', 'none');
        $("#sourceTab #jssource").css('display', 'none');
        $("#sourceTab #htmlsource").css('display', 'block');
        $("#sourceTab").ejTab('model.selectedItemIndex', 0);
    }
    function typescriptshowcase(args) {
        $("#showcasesample").css('display', 'block');
        $("#toolbarsubsample").css('display', 'none');
        $("#typescript").css('display', 'none');
        $("#sourceTab").css('display', 'none');
		$("#sourceText").css('display', 'none');
        if (!$(args.target).hasClass("e-active"))
            $(args.target).addClass("e-active");
        if (previousSample && previousSample.innerHTML !== args.target.innerHTML)
            $(previousSample).removeClass("e-active");
        previousSample = args.target;
        if ($(mainSampleButton).hasClass("e-active")) {
            $(mainSampleButton).removeClass("e-active");
        }
        var showcaseurl = "Showcase";
        windowsurl(showcaseurl);
    }
    function resizeWindows(args) {
        $(window).bind("resize", function (e) {
            $("#showcasesample").css('min-height',($(window).height()-$("#footer").outerHeight(true)));
        })
    }
    function onMainSampleclick(args) {
        if ($(".e-ej2popup").position().top < 1)
            showEJ2PopUp();
        var tempSampleList = SamplesList;
        subSampleToolbarObjload.find("li").remove();
        if (args && args.target.innerHTML === "Showcase") {
            typescriptshowcase(args);
        }
        if (args.target.innerHTML !== null && args.target.innerHTML !== "Showcase" && args.target.nodeName === "BUTTON") {
            subSampleToolbarObjload.css('display', 'block');
            $.each(tempSampleList[0], function (key, value) {
                if (key === args.target.innerHTML) {
                    var tempsamples = value;
                    for (var j = 0; j < tempsamples.length; j++) {
                        var liElement = $("<li></li>");
                        liElement.append($("<button></button>").ejButton({ "text": tempsamples[j],
                        showRoundedCorner: true,
						}));
                        subSampleToolbarObjload.find("ul").append(liElement);
                    }
                    if (!$(args.target).hasClass("e-active"))
                        $(args.target).addClass("e-active");
                    if (previousSample && previousSample.innerHTML !== args.target.innerHTML)
                        $(previousSample).removeClass("e-active");
                    previousSample = args.target;

                    if ($(showCaseSample).hasClass("e-active")) {
                        $(showCaseSample).removeClass("e-active");
                    }
                    if (mainSampleButton && args.target.innerHTML !== mainSampleButton.innerHTML) {
                        if ($(mainSampleButton).hasClass("e-active")) {
                            $(mainSampleButton).removeClass("e-active");
                        }
                    }
                }
            });
        }
    }
    $("#toolbarmainsample").bind("click", onMainSampleclick);
    function onSubSampleClick(args) {
        if ($(".e-ej2popup").position().top < 1)
            showEJ2PopUp();
        var tempSampleLists = samplelists;
		if (args && args.target.innerHTML !== "Showcase") {
            $("#sourceText").css('display', 'block');
        }
        $.each(tempSampleLists[0], function (key, value) {
            if (key === args.target.innerHTML) {
                var samplekey = key.replace(" ", "", "g").replace(/[()]/g, '');
                var htmlpath = samplekey + "/" + value[0] + ".html";
                jQuery.ajax({
                    url: htmlpath,
                    success: function (data) {
                        $(".cols").html(data)
                        document.getElementById("text").innerHTML = key + "/" + value[0];
                    }
                });
                if (!$(args.target).hasClass("e-active")){
                    $(args.target).addClass("e-active");
					// Material/Office 365 theme support buttons
					if(window.theme === "material"){
						$(args.target).addClass("materialActiveBtn");
					}else if(window.theme === "office-365"){
						$(args.target).addClass("office365ActiveBtn");
					}
				}
                if (previousSubSample && previousSubSample.innerHTML !== args.target.innerHTML){
                    $(previousSubSample).removeClass("e-active");
					$(previousSubSample).removeClass("materialActiveBtn");
					$(previousSubSample).removeClass("office365ActiveBtn");
				}
                previousSubSample = args.target;
                if (subSampleButton && args.target.innerHTML !== subSampleButton.innerHTML) {
                    if ($(subSampleButton).hasClass("e-active")) {
                        $(subSampleButton).removeClass("e-active");
						$(subSampleButton).removeClass("materialActiveBtn");
					    $(subSampleButton).removeClass("office365ActiveBtn");
                    }
                }
                $("#showcasesample").css('display', 'none');
                $("#typescript").css('display', 'block');
                $("#sourceTab").css('display', 'block');
                var tspath = samplekey + "/" + value[0] + ".ts";
                var jspath = samplekey + "/" + value[0] + ".js";
                var url = samplekey + "/" + value[0];
                htmlContent(htmlpath);
                tsContent(tspath);
                jsContent(jspath);
                windowsurl(url);
                generateURL();
            }
        });
		sourceCodeBorder();
    };
    $("#toolbarsubsample").bind("click", onSubSampleClick);
	 $("#themebutton").ejMenu({
        fields: { dataSource: menuData },
        openOnClick: true,
        width: 62,
        cssClass: "e-custom-theme",
        click: "themebtnClick",
        isResponsive: false
    });
	 var browser = navigator.userAgent.match(/(msie) ([\w.]+)/i);
        if (!ej.isNullOrUndefined(browser) && browser[1].toLowerCase() == "msie" && browser[2] == 8) {
        		$(".res_header .e-custom-theme").addClass('e-hide');
        		$(".e-popup-first").css("font-size", "14px");
        		$(".e-popup-second").css("font-size", "14px");
        	}
    $("#ej2button").ejButton({
        size: "normal",
        width: 150,
        height: 30,
        cssClass: "ej2button",
        showRoundedCorner: true,
        prefixIcon: "e-icon ej2button-logo",
        contentType: "textandimage",
    });
    $("#learnmore").ejButton({
        size: "normal",
        width: 100,
        height: 28,
        cssClass: "learnmore",
        showRoundedCorner: true,
        contentType: "text",
        click: function (evt, args) {
            showEJ2PopUp();
        }
    });
    $("#popupclose").ejButton({
        size: "normal",
        width: 24,
        height: 30,
        cssClass: "popupclose",
        showRoundedCorner: true,
        prefixIcon: "e-icon ej2popupclose",
        contentType: "imageonly",
        click: function (evt, args) {
            showEJ2PopUp();
        }
    });
    
    Menu_obj = $("#themebutton").data("ejMenu");
    resizeMenu = function () {
        var resheader;
		var menu = $("#themebutton ul");
        menu.css("overflow-y", "scroll");
        var height_1 = window.innerHeight - $(".header").outerHeight();
        height_1 > 520 ? menu.height(height_1 - 10) : menu.height(height_1 - 10);
		//menu.height(height_1 - $(".res_header").outerHeight() - 10);
       // Menu_obj._closeAll();
    } 
   resizeMenu();
    $("#themebutton >li >a > .e-icon:first").addClass("bootstrap");
    $("#sbtooltipbox").ejDialog({ height: "86px", width: "176px", enableResize: false, showOnInit: false, showHeader: false, cssClass: "metroblue", allowKeyboardNavigation: false });
    var eleID = (window.themeStyle == "" ? "flat" : window.themeStyle) + window.themeColor + (window.themeVarient != "light" ? window.themeVarient : "");
    var menuObj = $("#themebutton").ejMenu('instance');
    var hiddenMenuObj = $("#themebutton").ejMenu('instance');
    jQuery.each(menuObj.element.find('li.e-list'), function (i, val) {
        if ($(val).attr('id') === eleID) $(val).addClass('e-active');
    });
    jQuery.each(hiddenMenuObj.element.find('li.e-list'), function (i, val) {
        if ($(val).attr('id') === eleID) $(val).addClass('e-active');
    });
	
	if (window.isOnline) {
        $("#sbtooltipbox").ejDialog("close");
           isloadLeft = true;
           $(".cols-iframe").show();
             showTooltipbox();
      }

});

function showEJ2PopUp() {
    $("#popupclose").hide();
    $("#ej2popup").slideUp("slow", function () {
        $("#ej2popup").hide();
    });
}

function prepareTheme() {
    var themeName = "";
    if (window.location.hash.indexOf('dark') != -1 && window.themeVarient != 'light')
        window.themeVarient = "dark";
    if (window.location.hash.indexOf('gradient') != -1 && window.themeStyle != 'flat')
        window.themeStyle = "gradient";
    if (window.themeVarient == "dark") {
        if (window.themeStyle == "gradient")
            themeName = window.themeStyle + window.themeColor + window.themeVarient;
        else
            themeName = (window.themeColor != "") ? window.themeColor + window.themeVarient : window.themeStyle + window.themeVarient;

    }
    else {
        if (window.themeStyle == "gradient")
            themeName = window.themeStyle + window.themeColor;
        else
            themeName = (window.themeColor != "") ? window.themeColor : window.themeStyle;
    }
    if (window.theme.indexOf("bootstrap") != -1) {
        themeName = window.theme;
        window.themeStyle = "flat";
        window.themeVarient = "light";
    }
    if (window.theme.indexOf("high-contrast-01") != -1) {
        themeName = window.theme;
        window.themeStyle = "flat";
        window.themeVarient = "dark";
    }
    if (window.theme.indexOf("high-contrast-02") != -1) {
        themeName = window.theme;
        window.themeStyle = "flat";
        window.themeVarient = "dark";
    }
    if (window.theme.indexOf("material") != -1) {
        themeName = window.theme;
        window.themeStyle = "flat";
        window.themeVarient = "light";
    }
    if (window.theme.indexOf("office-365") != -1) {
        themeName = window.theme;
        window.themeStyle = "flat";
        window.themeVarient = "light";
    }
    window.theme = themeName;
}

function updateTheme(selcolor) {
    prepareTheme();
    replaceBg(window.themeVarient == "dark");
    replaceTheme();
}
var themes = {
    "flat": "content/ejthemes/default-theme/ej.web.all.min.css",
    "flatdark": "content/ejthemes/flat-azure-dark/ej.web.all.min.css",
    "azure": "content/ejthemes/default-theme/ej.web.all.min.css",
    "azuredark": "content/ejthemes/flat-azure-dark/ej.web.all.min.css",
    "lime": "content/ejthemes/flat-lime/ej.web.all.min.css",
    "limedark": "content/ejthemes/flat-lime-dark/ej.web.all.min.css",
    "saffron": "content/ejthemes/flat-saffron/ej.web.all.min.css",
    "saffrondark": "content/ejthemes/flat-saffron-dark/ej.web.all.min.css",
    "gradient": "content/ejthemes/gradient-azure/ej.web.all.min.css",
    "gradientdark": "content/ejthemes/gradient-azure-dark/ej.web.all.min.css",
    "gradientazure": "content/ejthemes/gradient-azure/ej.web.all.min.css",
    "gradientazuredark": "content/ejthemes/gradient-azure-dark/ej.web.all.min.css",
    "gradientlime": "content/ejthemes/gradient-lime/ej.web.all.min.css",
    "gradientlimedark": "content/ejthemes/gradient-lime-dark/ej.web.all.min.css",
    "gradientsaffron": "content/ejthemes/gradient-saffron/ej.web.all.min.css",
    "gradientsaffrondark": "content/ejthemes/gradient-saffron-dark/ej.web.all.min.css",
    "bootstrap": "content/ejthemes/bootstrap-theme/ej.web.all.min.css",
    "high-contrast-01": "content/ejthemes/high-contrast-01/ej.web.all.min.css",
    "high-contrast-02": "content/ejthemes/high-contrast-02/ej.web.all.min.css",
    "material": "content/ejthemes/material/ej.web.all.min.css",
    "office-365": "content/ejthemes/office-365/ej.web.all.min.css"
};
function updateLinkTag() {
    var links = $(document.head || document.getElementsByTagName('head')[0]).find("link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("ej.web.all.min.css") != -1)
            links[i].href = themes[theme];
    }
   // theme == "material" || theme == "office-365" ? document.styleSheets[1].disabled = true : document.styleSheets[1].disabled = false;
}
function replaceTheme() {
    if ((window.theme.indexOf("lime") != -1) && window.themeColor != 'azure' && window.themeColor != "saffron")
        window.themeColor = 'lime';
    else if ((window.theme.indexOf('saffron') != -1) && window.themeColor != 'azure' && window.themeColor != 'lime')
        window.themeColor = 'saffron';
    else if ((window.theme.indexOf('high-contrast-01') != -1))
        window.themeColor = 'high-contrast-01';
    else if ((window.theme.indexOf('high-contrast-02') != -1))
        window.themeColor = 'high-contrast-02';
    else if ((window.theme.indexOf('material') != -1))
        window.themeColor = 'material';
    else if ((window.theme.indexOf('office-365') != -1))
        window.themeColor = 'office-365';
    else if (window.theme.indexOf('azure') != -1)
        window.themeColor = "azure";
    else if (window.theme.indexOf('bootstrap') != -1)
        window.themeColor = "bootstrap";
    var selcolor = (window.themeColor == "") ? "bootstrap" : window.themeColor;
   $("body").attr("class",selcolor);
   if(window.themeVarient == "dark"){
	   $("body").addClass("darktheme");
	   $(text).removeClass();
	   $(sourceText).removeClass();
	   if(window.themeColor == "high-contrast-01" || window.themeColor == "high-contrast-02"){		   
		   $(text).addClass(window.themeColor+"dark");
		    $(sourceText).addClass(window.themeColor+"dark");
	   }else{
	      $(text).addClass(window.theme);
		   $(sourceText).addClass(window.theme);
	   }
   }else{
	   $(text).removeClass();
	   $(sourceText).removeClass();
	   $(text).addClass("textbcolor");
	   $(sourceText).addClass("textbcolor");
   }
   var subSampleThemeButton;
   if(window.theme === "material" || window.theme === "office-365"){
	   var subsamplebtn = $("#toolbarsubsample").find('ul li button');
                    for (var s = 0; s < subsamplebtn.length; s++) {
                        var subsamplebtns = subsamplebtn[s].innerHTML.replace(" ", "", "g").replace(/[()]/g, '');
                        if (arr[2] == subsamplebtns) {
                            subSampleThemeButton = subsamplebtn[s];
                            $(subSampleThemeButton).addClass('e-active');
							// Material/Office theme support button
							if(window.theme === "material"){
						        $(subSampleThemeButton).addClass("materialActiveBtn");
								if($(subSampleThemeButton).hasClass("office365ActiveBtn")){
									$(subSampleThemeButton).removeClass("office365ActiveBtn");
								}
					         }else if(window.theme === "office-365"){
						        $(subSampleThemeButton).addClass("office365ActiveBtn");
								if($(subSampleThemeButton).hasClass("materialActiveBtn")){
									$(subSampleThemeButton).removeClass("materialActiveBtn");
								}
					       }
                        }
                    }
   }else{
	   $(subSampleThemeButton).removeClass("materialActiveBtn");
	   $(subSampleThemeButton).removeClass("office365ActiveBtn");
	   $(subSampleButton).removeClass("office365ActiveBtn");
	   $(subSampleButton).removeClass("materialActiveBtn");
	   $(previousSubSample).removeClass("materialActiveBtn");
	   $(previousSubSample).removeClass("office365ActiveBtn");
   }
    sourceCodeBorder();
    updateLinkTag();
    if (window.currentSamplepage) {
        var querystring = "";
        if (window.theme != "flat") {
            querystring = "?theme=" + window.theme;
        }
        $("#iframecontent").attr('src', currentSamplepage + querystring);


        $("#newsamplewindow").attr('href', currentSamplepage);
    }
     if (window.location.hash === "")
         window.location.hash = "#!/" + window.theme;
        window.location.hash = window.location.hash.replace(/(#!\/[^\/]+)/, "!/" + window.theme);
}
function themebtnClick(args) {
	refreshDataVizComponents();
    if (!isPopupOpened) bindUnbindDocClickEvents(true);
    isPopupOpened = $(args.element).hasClass("e-haschild");
    if (args.event) args.event.stopPropagation();
    var color;
    if (args.ID == 1) {
    //    var $btnelement = $(window).width() <= 979 ? $("#res_themebutton") : $("#themebutton");
		var $btnelement = $("#themebutton");
		resizeMenu();
        var pos = $btnelement.offset();
        var left = $btnelement.width() - $(".e-custom-tstheme .e-horizontal .e-list>ul").width();
        $(".e-custom-tstheme .e-horizontal .e-list>ul").css('left', left);
    } else {
        if ($(".e-ej2popup").position().top < 1)
            showEJ2PopUp();
        this.element.find('li.e-active').removeClass('e-active');
        var _themeName = (args.text).toLowerCase();
        if (_themeName.indexOf("gradient") !== -1) window.themeStyle = "gradient";
        else window.themeStyle = "flat";
        if (_themeName.indexOf("dark") !== -1) window.themeVarient = "dark";
        else window.themeVarient = "light";
        if (_themeName.indexOf("azure") !== -1) window.themeColor = window.theme = "azure";
        else if (_themeName.indexOf("lime") !== -1) window.themeColor = window.theme = "lime";
        else if (_themeName.indexOf("saffron") !== -1) window.themeColor = window.theme = "saffron";
        else if (_themeName.indexOf("office-365") !== -1) window.themeColor = window.theme = "office-365";
        else if (_themeName.indexOf("material") !== -1) window.themeColor = window.theme = "material";
        else if (_themeName.indexOf("high-contrast-02") !== -1) window.themeColor = window.theme = "high-contrast-02";
        else if (_themeName.indexOf("high-contrast-01") !== -1) window.themeColor = window.theme = "high-contrast-01";
        else if (_themeName.indexOf("bootstrap") !== -1) window.themeColor = window.theme = "bootstrap";
        color = window.themeColor;
        updateTheme(color);
        $(args.element).addClass("e-active");
    }
}
function showTooltipbox() {
    var $btnelement = $("#themebutton");
    var pos = $btnelement.offset();
    var left = pos.left - $("#sbtooltipbox").width() + 30;
    window.theme == "material" || window.theme == "office-365" ? 
	$("#sbtooltipbox").ejDialog("option", "position", { X: left + ($(window).width() <= 979 ? 0 : 10), Y: pos.top + 63 }):
    $("#sbtooltipbox").ejDialog("option", "position", { X: left + ($(window).width() <= 979 ? 0 : 10), Y: pos.top + $btnelement.height() })
	$("#sbtooltipbox").ejDialog("open");
       setTimeout(function () {
          $("#sbtooltipbox").ejDialog("close");
       }, 3000);
}

function themeButtonSelect() {
    if ((window.theme.indexOf("lime") != -1) || (window.location.hash.indexOf('lime') != -1)) window.themeColor = 'lime';
    else if ((window.theme.indexOf("saffron") != -1) || (window.location.hash.indexOf('saffron') != -1)) window.themeColor = 'saffron';
    else if ((window.theme.indexOf("azure") != -1) || (window.location.hash.indexOf('azure') != -1)) window.themeColor = 'azure';
    else if ((window.theme.indexOf("high-contrast-01") != -1) || (window.location.hash.indexOf('high-contrast-01') != -1)) window.themeColor = 'high-contrast-01';
    else if ((window.theme.indexOf("high-contrast-02") != -1) || (window.location.hash.indexOf('high-contrast-02') != -1)) window.themeColor = 'high-contrast-02';
    else if ((window.theme.indexOf("material") != -1) || (window.location.hash.indexOf('material') != -1)) window.themeColor = 'material';
    else if ((window.theme.indexOf("office-365") != -1) || (window.location.hash.indexOf('office-365') != -1)) window.themeColor = 'office-365';
    else window.themeColor = 'bootstrap';
    if ((window.location.hash.indexOf("gradient") !== -1)) window.themeStyle = "gradient";
    else window.themeStyle = "flat";
    if ((window.location.hash.indexOf("dark") !== -1)) window.themeVarient = "dark";
    else window.themeVarient = "light";
    theme = (themeStyle == "flat" ? "" : themeStyle) + themeColor + (themeVarient == "light" ? "" : themeVarient);
    updateLinkTag();
}

function bindUnbindDocClickEvents(isOpened) {
    if (!isOpened) $(document).unbind("click");
    else
        $(document).bind("click", function (evt) {
            if ($("#sbtooltipbox").ejDialog("isOpened"))
                $("#sbtooltipbox").ejDialog("close");    
            var resMenu_obj = $("#themebutton").data("ejMenu");
            resMenu_obj._closeAll();			
            if (!$(evt.target).hasClass("sbheading") && evt.target.nodeName != "INPUT")
                bindUnbindDocClickEvents(false);
            else
                isPopupOpened = true;
            isPopupOpened = false;
            evt.stopPropagation();
        });
}

function replaceBg(enable) {
    if (enable){
        $("body").addClass("darktheme");
	}
    else{
        $("body").removeClass("darktheme");
	}
}

function pageReloadDarkTheme() {
	if(window.themeVarient == "dark" || window.themeColor == "high-contrast-01" || window.themeColor == "high-contrast-02"){
	   $("body").addClass("darktheme");
	   $(text).removeClass();
	   $(sourceText).removeClass();
	   if(window.themeColor == "high-contrast-01" || window.themeColor == "high-contrast-02"){		   
		   $(text).addClass(window.themeColor+"dark");
		    $(sourceText).addClass(window.themeColor+"dark");
	   }else{
	      $(text).addClass(window.theme);
		   $(sourceText).addClass(window.theme);
	   }
   }else{
	   $(text).removeClass();
	   $(sourceText).removeClass();
	   $(text).addClass("textbcolor");
	   $(sourceText).addClass("textbcolor");
   }
}

function sourceCodeBorder(){
	 if(window.theme === "material" || window.theme === "office-365"){
		 $("#sourceTab").css('border', '1px solid #D9DEDD');
	 }else{
		 $("#sourceTab").css('border', 'none');
	 }
}

function loadTheme(sender) {
	if (sender) {  
	 var theme = window.themeStyle + window.themeColor + window.themeVarient; 
      sender.model.theme = theme;
    }
}

function refreshDataVizComponents() {
		var refeshHtml = arr[2] +"/" + arr[3];
		  $.get(refeshHtml + ".html", function (data) {
              $(".cols").html(data);
              document.getElementById("text").innerHTML = refeshHtml;
          });      
    }
	
window.menuData = [{ id: 1, text: "", parentId: null, spriteCssClass: "e-icon" },
                    { id: "flatazure", text: "Flat-Azure", parentId: 1, spriteCssClass: "SB-theme SB-flat-azure" },
                    { id: "flatazuredark", text: "Flat-Azure-Dark", parentId: 1, spriteCssClass: "SB-theme SB-flat-azure-dark" },
                    { id: "flatlime", text: "Flat-Lime", parentId: 1, spriteCssClass: "SB-theme SB-flat-lime" },
                    { id: "flatlimedark", text: "Flat-Lime-Dark", parentId: 1, spriteCssClass: "SB-theme SB-flat-lime-dark" },
                    { id: "flatsaffron", text: "Flat-Saffron", parentId: 1, spriteCssClass: "SB-theme SB-flat-saffron" },
                    { id: "flatsaffrondark", text: "Flat-Saffron-Dark", parentId: 1, spriteCssClass: "SB-theme SB-flat-saffron-dark" },
                    { id: "gradientazure", text: "Gradient-Azure", parentId: 1, spriteCssClass: "SB-theme SB-gradient-azure" },
                    { id: "gradientazuredark", text: "Gradient-Azure-Dark", parentId: 1, spriteCssClass: "SB-theme SB-gradient-azure-dark" },
                    { id: "gradientlime", text: "Gradient-Lime", parentId: 1, spriteCssClass: "SB-theme SB-gradient-lime" },
                    { id: "gradientlimedark", text: "Gradient-Lime-Dark", parentId: 1, spriteCssClass: "SB-theme SB-gradient-lime-dark" },
                    { id: "gradientsaffron", text: "Gradient-Saffron", parentId: 1, spriteCssClass: "SB-theme SB-gradient-saffron" },
                    { id: "gradientsaffrondark", text: "Gradient-Saffron-Dark", parentId: 1, spriteCssClass: "SB-theme SB-gradient-saffron-dark" },
                    { id: "flatbootstrap", text: "Bootstrap", parentId: 1, spriteCssClass: "SB-theme SB-bootstrap" },
					{ id: "highcontrast01", text: "High-Contrast-01", parentId: 1, spriteCssClass: "SB-theme SB-high-contrast-01" },
					{ id: "highcontrast02", text: "High-Contrast-02", parentId: 1, spriteCssClass: "SB-theme SB-high-contrast-02" },
					{ id: "material", text: "Material", parentId: 1, spriteCssClass: "SB-theme SB-material" },
					{ id: "office365", text: "Office-365", parentId: 1, spriteCssClass: "SB-theme SB-office365" }

];