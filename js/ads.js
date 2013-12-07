var timer = setTimeout(addBanner, 0);

function addBanner() {
    clearTimeout(timer)
    document.write("<div style='height:100px; background:red; color:#fff; margin:10px'>Ad created by document.write<script>document.write(addInnerBanner)</script></div>");
}

function addInnerBanner() {
    document.write("<div style='height:100px; background:blue; color:#fff; margin:10px'>Ad created by document.write inside the Ad above<script>document.write(addSelfLinkBanner)</script></div>");
}

function addSelfLinkBanner() {
    document.write("<div style='height:100px; background:black; color:#fff; margin:10px'>Ad with link target=_self <br/><a href='http://google.co.il' target='_self'>Link to google</a></div>");
}


