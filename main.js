const TelegramBot = require("node-telegram-bot-api")

const TOKEN = `2048632800:AAGCgjdxflFaSeheBmfts-7sSs44tUI8R78`
const bot = new TelegramBot(TOKEN, {
    polling: true,
    updates: {
        enabled: true,
        get_interval: 1000
    }
});
bot.on('message', async message => {
    const chatId = message.chat.id
    const name = message.from.first_name
    const text = message.text
    if (text == '/start' || text == 'start' || text == 'начать') {
        bot.sendMessage(chatId, `Здравствуйте <b>${name}</b>. Что вы хотите узнать?`, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: `8 "А" класс`,
                            callback_data: `8 "А" класс`
                        }
                    ]
                ]
            }
        })
    } else if (text == '8 "А" класс') {
        bot.sendMessage(chatId, `Здесь вы можете найти расписание уроков и звонков! Выберите ниже 👇`, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Расписание уроков',
                            callback_data: "Расписание уроков"
                        }
                    ],
                    [
                        {
                            text: 'Расписание звонков',
                            callback_data: "Расписание звонков"
                        }
                    ],
                    [
                        {
                            text: 'На старт',
                            callback_data: "На старт"
                        }
                    ]
                ]
            }
        })
    } else if (text == `На старт`) {
        const keyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `8 "А" класс`
                    }
                ]
            ]
        }
        bot.sendMessage(chatId, `<b>${name}</b>. Что вы хотите узнать?`, {
            parse_mode: 'HTML',
            reply_markup: keyboard
        })
    } else if (text == `Главное`) {
        bot.sendMessage(chatId, `Вы вышли на главное меню. Что вы хотите узнать?`, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Расписание уроков',
                            callback_data: "Расписание уроков"
                        }
                    ],
                    [
                        {
                            text: 'Расписание звонков',
                            callback_data: "Расписание звонков"
                        }
                    ],
                    [
                        {
                            text: 'На старт',
                            callback_data: "На старт"
                        }
                    ]
                ]
            }
        })
    } else if (text == 'Расписание звонков') {
        const dayskeyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: '1-ый урок',
                            callback_data: "1-ый урок"
                        }
                    ],
                    [
                        {
                            text: '2-ый урок',
                            callback_data: "2-ый урок"
                        }
                    ],
                    [
                        {
                            text: `3-ий урок`,
                            callback_data: "3-ий урок"
                        }
                    ],
                    [
                        {
                            text: `4-ый урок`,
                            callback_data: "4-ый урок"
                        }
                    ],
                    [
                        {
                            text: `5-ый урок`,
                            callback_data: "5-ый урок"
                        }
                    ],
                    [
                        {
                            text: `6-ой урок`,
                            callback_data: "6-ой урок"
                        }
                    ],
                    [
                        {
                            text: `Расписание звонков пятница`,
                            callback_data: "Расписание звонков пятница"
                        }
                    ],
                    [
                        {
                            text: `Главное`,
                            callback_data: "Главное"
                        }
                    ],
                ]
            }
        }
        bot.sendMessage(chatId, `Выберите урок`, {
            parse_mode: 'HTML',
            reply_markup: dayskeyboard
        })
    }
})
bot.on('callback_query', async query => {
    const { chat, message_id, text } = query.message
    switch (query.data) {
        case 'Расписание уроков':
            bot.sendMessage(chat.id, `Выберите день недели`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Понедельник',
                                callback_data: "Понедельник"
                            }
                        ],
                        [
                            {
                                text: 'Вторник',
                                callback_data: "Вторник"
                            }
                        ],
                        [
                            {
                                text: 'Среда',
                                callback_data: "Среда"
                            }
                        ],
                        [
                            {
                                text: 'Четверг',
                                callback_data: "Четверг"
                            }
                        ],
                        [
                            {
                                text: 'Пятница',
                                callback_data: "Пятница"
                            }
                        ],
                        [
                            {
                                text: 'Суббота',
                                callback_data: "Суббота"
                            }
                        ],
                        [
                            {
                                text: `Главное`,
                                callback_data: "Главное"
                            }
                        ],
                    ]
                }
            })
            break
        case 'Расписание звонков':
        case 'Расписание звонков пятница':
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `Выберите звонков (пятница)`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: '1-ый урок пятница',
                                callback_data: "1-ый урок пятница"
                            }
                        ],
                        [
                            {
                                text: '2-ой урок пятница',
                                callback_data: "2-ой урок пятница"
                            }
                        ],
                        [
                            {
                                text: '3-ий урок пятница',
                                callback_data: "3-ий урок пятница"
                            }
                        ],
                        [
                            {
                                text: '4-ый урок пятница',
                                callback_data: "4-ый урок пятница"
                            }
                        ],
                        [
                            {
                                text: '5-ый урок пятница',
                                callback_data: "5-ый урок пятница"
                            }
                        ],
                        [
                            {
                                text: '6-ой урок пятница',
                                callback_data: "6-ой урок пятница"
                            }
                        ],
                        [
                            {
                                text: `7-ой урок пятница`,
                                callback_data: "7-ой урок пятница"
                            }
                        ],
                    ]
                }
            })
            break
        case 'Главное':
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `Вы вышли на главное меню. Что вы хотите узнать?`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Расписание уроков',
                                callback_data: "Расписание уроков"
                            }
                        ],
                        [
                            {
                                text: 'Расписание звонков',
                                callback_data: "Расписание звонков"
                            }
                        ],
                        [
                            {
                                text: 'На старт',
                                callback_data: "На старт"
                            }
                        ]
                    ]
                }
            })
            break
        case 'На старт':
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `Что вы хотите узнать?`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: `8 "А" класс`,
                                callback_data: `8 "А" класс`
                            }
                        ]
                    ]
                }
            })
            break
        case '8 "А" класс':
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `Здесь вы можете найти расписание уроков и звонков! Выберите ниже 👇`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Расписание уроков',
                                callback_data: "Расписание уроков"
                            }
                        ],
                        [
                            {
                                text: 'Расписание звонков',
                                callback_data: "Расписание звонков"
                            }
                        ],
                        [
                            {
                                text: 'На старт',
                                callback_data: "На старт"
                            }
                        ]
                    ]
                }
            })
            break
        case 'Понедельник':
            bot.deleteMessage(chat.id, message_id)
            await bot.sendPhoto(
                chat.id,
                'images/Monday.jpg', {
                caption: `Понедельник: \n\n1. Англ.яз \n2. История \n3. Биология \n4. Алгебра \n5. География \n6. Русский.яз`
            })
            break
        case 'Вторник':
            bot.deleteMessage(chat.id, message_id)
            await bot.sendPhoto(
                chat.id,
                'images/Tuesday.jpg', {
                caption: `Вторник: \n\n1. Химия \n2. История \n3. Гос.право \n4. Геометрия \n5. Литература \n6. Физкультура`
            })
            break
        case 'Среда':
            bot.deleteMessage(chat.id, message_id)
            await bot.sendPhoto(
                chat.id,
                'images/Wednesday.jpg', {
                caption: `Среда: \n\n1. Англ.яз \n2. Алгебра \n3. Техналогия \n4. Узбекский.яз \n5. География \n6. Русский.яз`
            })
            break
        case 'Четверг':
            await bot.sendPhoto(
                chat.id,
                'images/Thursday.jpg', {
                caption: `Четверг: \n\n1. Физкультура \n2. История \n3. Биология \n4. Узбекский.яз \n5. Информатика \n6. Русский.яз`
            })
            break
        case 'Пятница':
            await bot.sendPhoto(
                chat.id,
                'images/Friday.jpg', {
                caption: `Пятница: \n\n1. Час.дух. \n2. Черчение \n3. Воспитание \n4. Алгебра \n5. Физика \n6. Химия \n7. Англ.яз`
            })
            break
        case 'Суббота':
            await bot.sendPhoto(
                chat.id,
                'images/Saturday.jpg', {
                caption: `Суббота: \n\n1. Эканомика \n2. Физкультура \n3. Узбекский.яз \n4. Алгебра`
            })
            break
        case '1-ый урок':
            await bot.sendPhoto(
                message.chat.id,
                'images/1.jpg', {
                caption: `1-ый урок\n\nНачало: 08:00 \nКонец: 08:45`
            })
            break
        case '2-ой урок':
            await bot.sendPhoto(
                message.chat.id,
                'images/2.jpg', {
                caption: `2-ый урок\n\nНачало: 08:50 \nКонец: 09:35`
            })
            break
        case '3-ий урок':
            await bot.sendPhoto(
                message.chat.id,
                'images/3.jpg', {
                caption: `3-ий урок\n\nНачало: 09:40 \nКонец: 10:25`
            })
            break
        case '4-ый урок':
            await bot.sendPhoto(
                message.chat.id,
                'images/4.jpg', {
                caption: `4-ый урок\n\nНачало: 10:35 \nКонец: 11:20`
            })
            break
        case '5-ый урок':
            await bot.sendPhoto(
                message.chat.id,
                'images/5.jpg', {
                caption: `5-ый урок\n\nНачало: 11:30 \nКонец: 12:15`
            })
            break
        case '6-ой урок':
            await bot.sendPhoto(
                message.chat.id,
                'images/6.jpg', {
                caption: `6-ой урок\n\nНачало: 12:20 \nКонец: 13:05`
            })
            break
        case '1-ый урок пятница':
            await bot.sendPhoto(
                chat.id,
                'images/1-s.jpg', {
                caption: `1-ый урок\n\nНачало: 08:00 \nКонец: 08:30`
            })
            break
        case '2-ой урок пятница':
            await bot.sendPhoto(
                chat.id,
                'images/2-s.jpg', {
                caption: `2-ый урок\n\nНачало: 08:35 \nКонец: 09:15`
            })
            break
        case "3-ий урок пятница":
            await bot.sendPhoto(
                chat.id,
                'images/3-s.jpg', {
                caption: `3-ий урок\n\nНачало: 09:20 \nКонец: 10:00`
            })
            break
        case "4-ый урок пятница":
            await bot.sendPhoto(
                chat.id,
                'images/4-s.jpg', {
                caption: `4-ый урок пятница\n\nНачало: 10:05 \nКонец: 10:45`
            })
            break
        case "5-ый урок пятница":
            await bot.sendPhoto(
                chat.id,
                'images/5-s.jpg', {
                caption: `5-ый урок пятница\n\nНачало: 10:55 \nКонец: 11:35`
            })
            break
        case "6-ой урок пятница":
            await bot.sendPhoto(
                chat.id,
                'images/6-s.jpg', {
                caption: `6-ой урок пятница\n\nНачало: 11:40 \nКонец: 12:20`
            })
            break
        case "7-ой урок пятница":
            await bot.sendPhoto(
                chat.id,
                'images/7-s.jpg', {
                caption: `7-ой урок пятница\n\nНачало: 12:25 \nКонец: 13:05`
            })
            break
    }
})