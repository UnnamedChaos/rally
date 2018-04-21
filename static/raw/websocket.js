function Websocket() {

    var stompClient = null;
    var connected = false;

    this.connect = function(greeting,generate) {
        var socket = new SockJS('http://chaosclub.ddns.net:7000/stomp');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            connected = true;
            stompClient.subscribe('/ws/greetings', greeting);
            stompClient.subscribe('/ws/generate', generate);
        });
    }

    this.stompClient = function(){
        return stompClient;
    }
    this.connected = function (){
        return connected;
    }

    this.disconnect = function() {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        connected = false;
        console.log("Disconnected");
    }

    this.generate = function(value) {
        stompClient.send("/app/coin", {}, JSON.stringify({ 'value': value }));
    }

    this.sendName = function() {
        stompClient.send("/app/hello", {}, JSON.stringify({ 'name': "lol" }));
    }
}