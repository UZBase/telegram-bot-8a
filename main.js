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
        bot.sendMessage(chatId, `Здравствуйте <b>${name}</b>. Что вы хотите узнать?`, {
            parse_mode: 'HTML',
            reply_markup: keyboard
        })
    } else if (text == '8 "А" класс') {
        const keyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `Расписание уроков`
                    },
                    {
                        text: `Расписание звонков`
                    },
                    {
                        text: `На старт`
                    }
                ]
            ]
        }
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
        const keyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `Расписание уроков`
                    },
                    {
                        text: `Расписание звонков`
                    },
                    {
                        text: `На старт`
                    }
                ]
            ]
        }

        bot.sendMessage(chatId, `Вы вышли на главное меню. Что вы хотите узнать?`, {
            parse_mode: 'HTML',
            reply_markup: keyboard
        })
    } else if (text == 'Расписание звонков') {
        const dayskeyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `1-ый урок`
                    },
                    {
                        text: `2-ой урок`
                    },
                    {
                        text: `3-ий урок`
                    },
                ],
                [
                    {
                        text: `4-ый урок`
                    },
                    {
                        text: `5-ый урок`
                    },
                    {
                        text: `6-ой урок`
                    },
                ],
                [
                    {
                        text: `Расписание звонков пятница`
                    },
                ],
                [
                    {
                        text: `Главное`
                    }
                ]
            ]
        }
        bot.sendMessage(chatId, `Выберите урок`, {
            parse_mode: 'HTML',
            reply_markup: dayskeyboard
        })
    } else if (text == '1-ый урок') {
        await bot.sendPhoto(
            message.chat.id,
            'images/1.jpg', {
            caption: `1-ый урок\n\nНачало: 08:00 \nКонец: 08:45`
        })
    } else if (text == '2-ой урок') {
        await bot.sendPhoto(
            message.chat.id,
            'images/2.jpg', {
            caption: `2-ый урок\n\nНачало: 08:50 \nКонец: 09:35`
        })
    } else if (text == '3-ий урок') {
        await bot.sendPhoto(
            message.chat.id,
            'images/3.jpg', {
            caption: `3-ий урок\n\nНачало: 09:40 \nКонец: 10:25`
        })

    } else if (text == '4-ый урок') {
        await bot.sendPhoto(
            message.chat.id,
            'images/4.jpg', {
            caption: `4-ый урок\n\nНачало: 10:35 \nКонец: 11:20`
        })
    } else if (text == '5-ый урок') {
        await bot.sendPhoto(
            message.chat.id,
            'images/5.jpg', {
            caption: `5-ый урок\n\nНачало: 11:30 \nКонец: 12:15`
        })
    } else if (text == '6-ой урок') {
        await bot.sendPhoto(
            message.chat.id,
            'images/6.jpg', {
            caption: `6-ой урок\n\nНачало: 12:20 \nКонец: 13:05`
        })
    } else if (text == 'Расписание звонков пятница') {
        const dayskeyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `1-ый урок пятница`
                    },
                    {
                        text: `2-ой урок пятница`
                    },
                    {
                        text: `3-ий урок пятница`
                    },
                ],
                [
                    {
                        text: `4-ый урок пятница`
                    },
                    {
                        text: `5-ый урок пятница`
                    },
                    {
                        text: `6-ой урок пятница`
                    },
                    {
                        text: `7-ой урок пятница`
                    },
                ],
                [
                    {
                        text: `Главное`
                    }
                ]
            ]
        }
        bot.sendMessage(chatId, `Выберите урок (пятница)`, {
            parse_mode: 'HTML',
            reply_markup: dayskeyboard
        })
    } else if (text == '1-ый урок пятница') {
        await bot.sendPhoto(
            message.chat.id,
            'images/1-s.jpg', {
            caption: `1-ый урок\n\nНачало: 08:00 \nКонец: 08:30`
        })
    } else if (text == '2-ой урок пятница') {
        await bot.sendPhoto(
            message.chat.id,
            'images/2-s.jpg', {
            caption: `2-ый урок\n\nНачало: 08:35 \nКонец: 09:15`
        })
    } else if (text == '3-ий урок пятница') {
        await bot.sendPhoto(
            message.chat.id,
            'images/3-s.jpg', {
            caption: `3-ий урок\n\nНачало: 09:20 \nКонец: 10:00`
        })
    } else if (text == '4-ый урок пятница') {
        await bot.sendPhoto(
            message.chat.id,
            'images/4-s.jpg', {
            caption: `4-ый урок пятница\n\nНачало: 10:05 \nКонец: 10:45`
        })
    } else if (text == '5-ый урок пятница') {
        await bot.sendPhoto(
            message.chat.id,
            'images/5-s.jpg', {
            caption: `5-ый урок пятница\n\nНачало: 10:55 \nКонец: 11:35`
        })
    } else if (text == '6-ой урок пятница') {
        await bot.sendPhoto(
            message.chat.id,
            'images/6-s.jpg', {
            caption: `6-ой урок пятница\n\nНачало: 11:40 \nКонец: 12:20`
        })
    } else if (text == '7-ой урок пятница') {
        await bot.sendPhoto(
            message.chat.id,
            'images/7-s.jpg', {
            caption: `7-ой урок пятница\n\nНачало: 12:25 \nКонец: 13:05`
        })
    }
})
bot.on('callback_query', async query => {
    const { chat, message_id, text } = query.message
    switch (query.data) {
        case 'Расписание уроков':
            bot.deleteMessage(chat.id, message_id)
            const dayskeyboard = {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [
                    [
                        {
                            text: `Понедельник`
                        },
                        {
                            text: `Вторник`
                        },
                        {
                            text: `Среда`
                        },
                    ],
                    [
                        {
                            text: `Четверг`
                        },
                        {
                            text: `Пятница`
                        },
                        {
                            text: `Суббота`
                        },
                    ],
                    [
                        {
                            text: `Главное`
                        }
                    ]
                ]
            }
            bot.sendMessage(chat.id, `Выберите день недели`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Понедельник',
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

            if (text == `Понедельник`) {
                await bot.sendPhoto(
                    message.chat.id,
                    'images/Monday.jpg', {
                    caption: `Понедельник: \n\n1. Англ.яз \n2. История \n3. Биология \n4. Алгебра \n5. География \n6. Русский.яз`
                }
                );
            } else if (text == `Вторник`) {
                await bot.sendPhoto(
                    message.chat.id,
                    'images/Tuesday.jpg', {
                    caption: `Вторник: \n\n1. Химия \n2. История \n3. Гос.право \n4. Геометрия \n5. Литература \n6. Физкультура`
                })
            } else if (text == `Среда`) {
                await bot.sendPhoto(
                    message.chat.id,
                    'images/Wednesday.jpg', {
                    caption: `Среда: \n\n1. Англ.яз \n2. Алгебра \n3. Техналогия \n4. Узбекский.яз \n5. География \n6. Русский.яз`
                })
            } else if (text == `Четверг`) {
                await bot.sendPhoto(
                    message.chat.id,
                    'images/Thursday.jpg', {
                    caption: `Четверг: \n\n1. Физкультура \n2. История \n3. Биология \n4. Узбекский.яз \n5. Информатика \n6. Русский.яз`
                })
            } else if (text == `Пятница`) {
                await bot.sendPhoto(
                    message.chat.id,
                    'images/Friday.jpg', {
                    caption: `Пятница: \n\n1. Час.дух. \n2. Черчение \n3. Воспитание \n4. Алгебра \n5. Физика \n6. Химия \n7. Англ.яз`
                })
            } else if (text == `Суббота`) {
                await bot.sendPhoto(
                    message.chat.id,
                    'images/Saturday.jpg', {
                    caption: `Суббота: \n\n1. Эканомика \n2. Физкультура \n3. Узбекский.яз \n4. Алгебра`
                })
            }

    }
})