#!/usr/bin/env node

let amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1
    }
    let queue = 'hello'
    let msg = 'Hello World'

    channel.assertQueue(queue, {
      durable: false
    })

    channel.sendToQueue(queue, Buffer.from(msg))
    console.log(`[x] Sent ${msg}`)
  })
  
  setTimeout(() => {
    connection.close()
    process.exit(0)
  }, 500);
})
