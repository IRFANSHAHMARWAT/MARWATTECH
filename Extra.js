    // ----------------this JS writted by Irfan shah marwat and its timer for download button--------------// 
(function(){
           var message = "%d seconds before download link appears";
           // seconds before download link becomes visible
           var count = 30;
           var countdown_element = document.getElementById("countdown");
           var download_link = document.getElementById("download_link");
           var promo_code = document.getElementById("promo_code");
           var timer = setInterval(function(){
              // if countdown equals 0, the next condition will evaluate to false and the else-construct will be executed
              if (count) {
                  // display text
                  countdown_element.innerHTML = "You have to wait %d seconds.".replace("%d", count);
                  // decrease counter
                  count--;
              } else {
                  // stop timer
                  clearInterval(timer);
                  // hide countdown
                  countdown_element.style.display = "none";
                  // show download link
                  download_link.style.display = "";
                  promo_code.style.display = "";
                  promo_code.style.display = "";
              }
           }, 1000);
        })();
        // ----------------this JS writted by Irfan shah marwat and its social lock for susbcription and likes --------------//
        (function() {
	var sl = document.querySelector(&quot;#sociallocker&quot;);
	var slc = document.querySelector(&quot;#sociallocker-content&quot;);
	if (!sl) return;
	var old_slc_html = slc.innerHTML;
	slc.innerHTML = slc.innerHTML.replace(/(href=&quot;)(.*)(\&quot;)/g, &quot;href=\&quot;#\&quot;&quot;);
	sl.querySelectorAll(&quot;#sociallocker-links a&quot;).forEach(function(ele) {
		ele.onclick = function(e) {
			var web_window = window.open(this.href, &#39;Share Link&#39;, &#39;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600,top=&#39; + (screen.height/2 - 300) + &#39;,left=&#39; + (screen.width/2 - 300));
			var check_window_close = setInterval(function() { 
				if (web_window.closed) {
					clearInterval(check_window_close);
					slc.innerHTML = old_slc_html;
					document.querySelector(&quot;#sociallocker-links&quot;).style.display = &quot;none&quot;;
					document.querySelector(&quot;#sociallocker-overlay&quot;).style.display = &quot;none&quot;; 
					document.querySelector(&quot;#sociallocker-content&quot;).style.top = &quot;0&quot;;
				}
			}, 1000);
			e.preventDefault();
		};
	});
})();
