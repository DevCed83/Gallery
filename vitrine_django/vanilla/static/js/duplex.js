the_header()
header_content()
the_footer()
footer_content()
the_article()
duplex_intro()
duplex_body()
kraken_websocket_client()

// var ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
// ws.onopen = function(){
//   ws.send(JSON.stringify({"event":"subscribe", "channel":"ticker", "pair":"BTCEUR"}))
// };
// ws.onmessage = function(msg){
//   var response = JSON.parse(msg.data);
//   var hb = response[1];
//   if(hb !== "hb"){
//     document.getElementById("btc").innerHTML = "$" + response[1][0];
//   }
// };