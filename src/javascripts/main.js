/* globals document console */

import $ from './jquery';
import io from 'socket.io-client';

const socket = io('ws://localhost:3000');
socket.on('message', function (data) {
    $('#response').val(data);
});

socket.on('database', function (data) {
    $('#database').val(data);
});

socket.on('session', function (data) {
    console.log('session', data);
    $('#session').val(JSON.stringify(data));
});

$( document ).ready(function() { 
    $('#send').mousedown(function () {
        var message = $('#message').val();
        socket.emit('message', message);
    });
    $('#add').mousedown(function () {
        var message = $('#entry').val();
        socket.emit('database', message);
    });
    $('#fetch').mousedown(function () {
        socket.emit('session');
    });
    $('#setName').mousedown(function () {
        $.post('/session', {
            name: 'joe'
        }, function () {
            $.get('/session', function (data) {
                $('#session').val(data);
            })
        });
    })
});
