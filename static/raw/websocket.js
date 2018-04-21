function Websocket() {

    var stompClient = null;
    var connected = false;

    this.connect = function() {
        var socket = new SockJS('http://localhost:8080');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            connected = true;
            stompClient.subscribe('/topic/greetings', function (greeting) {
                console.log(JSON.parse(greeting.body).content);
            });
        });
    }

    this.disconnect = function() {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        connected = false;
        console.log("Disconnected");
    }

    this.sendName = function() {
        stompClient.send("/app/hello", {}, JSON.stringify({ 'name': $("#name").val() }));
    }
}