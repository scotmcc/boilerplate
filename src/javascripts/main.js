/* globals document console */

import $ from './jquery';
import io from 'socket.io-client';

$( document ).ready(function() {

    const socket = io('ws://localhost:3000');

    console.log('init');

    socket.on('connect', onConnect);
    socket.on('news', onMessage);

    function onConnect(){
        console.log('connect ', socket.id);
        socket.emit('foo', {
            foo: 'bar'
        });
    }

    function onMessage(message){
        console.log('news ', message);
    }
});
