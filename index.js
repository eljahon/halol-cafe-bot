const express = require('express');
const token ='7258357556:AAH6t_5ZRRge0p3IHsc3eQLEH1wmuWcCNeU'
const TelegramBot = require('node-telegram-bot-api');
const app = express();

const bot = new TelegramBot(token, { polling: true });

const bootstrap = async () => {
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const message = msg.text;
        if (message === '/start') {
            bot.sendMessage(chatId, 'Hello, welcome to the Halol Cafe Bot!', {
                reply_markup: {
                    keyboard: [
                       [
                        {
                            text: 'Open Website',
                            web_app: {
                                url: 'https://hahol-cafe.vercel.app/'
                            }
                           }
                       ]
                    ]
                }   
            });
        }
        console.log(msg);
    });
}

bootstrap();