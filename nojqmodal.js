/*
This is supposed to be a modal dialog you can use in a widget
or some other environment where you don't control the main page
and therefore don't have access to jquery or some other library
*/

var njm_body = document.getElementsByTagName('body');
njm_body = njm_body[0];
njm_body.style.height = "100%";
njm_body.style.margin = "0";
njm_body.style.padding = "0";

var njm_code = "";
njm_code += "<div id=\"overlay\"";
njm_code += "style=\"";
njm_code += "visibility:hidden;position:absolute;";
njm_code += "left:0px;top:0px;width:100%;height:100%;text-align:center;";
njm_code += "z-index:1000;";
njm_code += "background-image:url(http://www.sellerwatch.com/background-trans.png);";
njm_code += "\">";
njm_code += "<div>";
njm_code += "<p>Content you want the user to see goes here.</p>";
njm_code += "</div>";
njm_code += "</div>";

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

