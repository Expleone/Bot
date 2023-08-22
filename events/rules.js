const { Events, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, } = require('discord.js');
const { rules } = require('./eventConfig.json');

module.exports = {
    name: Events.MessageCreate,
    on: true,
    async execute(message) {
        //console.log(message)
        if(message.channelId === rules && message.content === "правила1"){
            //message.channel.send("# Правила Квадратної Республіки");
            message.delete();
            const chatRulesBlock = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(`Правила текстових каналів`)
                //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
            //message.channel.send({ embeds: [chatRulesBlock] });

            const rule1 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 1. Заборонено ображати співрозмовників та інших користувачів.\u200b`)
                .setDescription(' **1.1. Заборонена ксенофобія та расизм проти громадян всіх країн в будь-яких проявах, за винятком осіб, які підтримують війну московїї(рф) проти Україні, та інших країн, та/або є громадянами московії (рф).**')
            //message.channel.send({ embeds: [rule1] });

            const rule2 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 2. Заборонено надсилати рекламу та запрошення до дискорд серверів без дозволу на те від адміністрації.\u200b`)
                .setDescription(' **2.1. Заборонено використання учасників сервера для піару сторонніх проєктів та надсилання іншої реклами в приватні повідомлення.\n2.2. Заборонено поширення скам посилань/ресурсів з шахрайським вмістом на сервері та в приватних повідомленнях.**')
            //message.channel.send({ embeds: [rule2] });
             
            const rule3 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 3. Основна мова цього сервера — українська, проте спілкування на інших мовах не заборонено.\u200b`)
                .setDescription('** *Виняток: спілкування московитською (російською) мовою ЗАБОРОНЕНО! за винятком каналу <#954353335081783296>* **')

            const rule4 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 4. Заборонено проявляти токсичну поведінку.\u200b`)
                .setDescription( ' **4.1. Заборонено влаштовувати "срач" \n"Срач" — діалог з іншим учасником або спілкування декількох осіб яке переросло в суперечку з образами один одного.\n*Примітка: Ображає одна особа — правило 4. Ображають один одного — 4.1.* **')
            const rule5 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 5. Заборонений контент з вмістом NSFW (вміст сексуального/жорстокого характеру).\u200b`)
                .setDescription('** 5.1. У випадку трансляції фільму/серіалу/аніме, або ж любих інших матеріалів які можуть містити еротичні чи 18+ елементи потрібно ставити NSFW відмітку на голосовому каналі. **')
            const rule6 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 6. Суперечки на тему релігії заборонені.\u200b`)
            const rule7 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 7. Заборонений спам та флуд смайлами, словами, літерами, реакціями, тегами, повторючимися чи безглуздими повідомленнями, а також надмірне використання ВЕРХНЬОГО РЕЄСТРУ (CAPS) та заголовків (#, ##, ###).\u200b`)
                .setDescription('** 7.1. Масовий психоз або попередня організація/змова що призведуть до дій описаних вище в пункті 7 є забороненим. **')
            const rule8 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 8. Користування альтернативними акаунтами з метою обходу покарання заборонено.\u200b`)
            const rule9 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 9. Заборонена пропаганда негативного характеру.\u200b`)
                .setDescription('** 9.1. Заборонена пропаганда фашизму, нацизму, рашизму та всіх його складових: імперіалізм та більшовизм − комунізму та анархізму.\n9.2. Заборонена пропаганда расизму, селфхарму або самогубства та релігійна пропаганда. **')
            
            
            
            
           
            
            message.channel.send({ content: "# Правила Квадратної Республіки", embeds: [chatRulesBlock, rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9]});

        }

        if(message.channelId === rules && message.content === "правила2"){
            message.delete();
            const rule10 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 10. Заборонено використання аватарки/банера/ніка профілю відповідно матеріалам з пунктів правил 5 і 9, та всіх їх під-пунктів.\u200b`)

            const rule11 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 11. Оффтоп або ж використання каналів не за їх призначенням (призначення кожного з каналів можна знайти в його описі) заборонено.\u200b`)
                .setDescription('** 11.1. Всі обговорення в каналах у яких в описі зазначено що обговорення мають бути тільки в гілках, без винятків повинні бути в гілках. **')
            
            const rule12 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 12. При відмові користувача впродовж дня видаляти свої повідомлення що порушують правила серверу адміністрація має право видати додатковий мут на тиждень!\u200b`)
            
            const rule13 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 13. Заборонено обходити, перекручувати та дуже конкретизувати правила в свою вигоду або оману інших.\u200b`)

            const rule14 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 14. Заборонене поширення закритих персональних даних учасників без їх згоди.\u200b`)

            const rule15 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 15. Заборонено використовувати @пінг якщо користувач сервера проти і він вам це написав ДО пінгу.\u200b`)

            const rule16 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 16. Використання тегів або пінгів адмінів/модерів без потреби або поважної на те причини — мут на день. \u200b`)
            
            const rule17 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 17. Заборонена публікація крінжі.\u200b`)
                .setDescription('**  17.1. Заборонено кидати будь які файли з скрімерами та стогонами.  \n17.2. Заборонено кидати будь які файли які крашать дискорд та пристрої інших користувачів.\n17.3. Є дуже не бажаним публікація файлів які стосується правила 9 і підпунктів які не спрямовані на пропаганду. В залежності від обставин адміністрація на свій розсуд має право надання короткотривалого муту. \n17.4. Заборонена публікація легкої еротики або ж персон які є напівоголеними.\nВиняток з 17.4: <#1132746776475090964> - Пошук фулів. **')
            
            const rule18 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 18. Заборонено обговорювати, планувати та закликати робити "рейди" та/або інші негативні дії проти дискорд серверів.\u200b`)

            const rule19 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 19. Заборонено закликати виходити з сервера Квадратна Республіка та інших дискорд серверів. \u200b`)
                .setDescription('** 19.1. Заборонено закликати виходити з сервера з метою досягнення певних вимог від адміністрації. **')
             message.channel.send({ embeds: [ rule10, rule11, rule12, rule13, rule14, rule15, rule16, rule17, rule18, rule19]});
        }

        if(message.channelId === rules && message.content === "правила3"){
            message.delete();
            const rule20 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 20. Заборонено замовчувати факт порушення правил іншими учасниками сервера.\u200b`)
            
            const rule21 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 21. Заборонено підбурювати учасників сервера на порушення правил та вводити їх в оману щодо правил чи інших речей пов'язаних з сервером.\u200b`)
            
            const rule22 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 22. Також заборонено навмисне розповсюдження неправдивої інформації стосовно цього сервера.\u200b`)

            const rule23 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 23. Заборонене необ'єктивне критикування сервера та його адміністрації/модерації.\u200b`)
                .setDescription(`**  *Примітка: Об'єктивна критика: „Модератори працюють погано тому що покарали людину не по правилах. Ось факти цього”.\nНеоб'єктивна критика: „Хто адмін вашої параші?”, „Адміни дурні малолітки і це є факт”.* **`)
            
            const rule24 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(` 24. Заборонено здійснювати наклеп на учасників сервера.\u200b`)
            

            const voiceChatRulesBlock = new EmbedBuilder()
                .setColor(0x00FF9A)
                .setTitle(`Правила голосових каналів`)
            
            const ruleGK1 = new EmbedBuilder()
                .setColor(0x00FF9A)
                .setTitle(` ГК-1. Користування голосовим каналом дозволено з погано налаштованим мікрофоном з/або зайвим шумом якщо це не заважає спілкуванню. \u200b`)
            
            const ruleGK2 = new EmbedBuilder()
                .setColor(0x00FF9A)
                .setTitle(` ГК-2. Заборонено заважати спілкуванню. \u200b`)

            const ruleGK3 = new EmbedBuilder()
                .setColor(0x00FF9A)
                .setTitle(` ГК-3. Не перебивайте адміністратора коли він виконує свою роботу. \u200b`)

            const ruleGK4 = new EmbedBuilder()
                .setColor(0x00FF9A)
                .setTitle(` ГК-4. Неадекватна чи образлива поведінка в голосовому каналі заборонена. \u200b`)
            message.channel.send({ embeds: [ rule20, rule21, rule22, rule23, rule24, voiceChatRulesBlock, ruleGK1, ruleGK2, ruleGK3, ruleGK4]});
        }

        if(message.channelId === rules && message.content === "правила4"){
            message.delete();
            const ruleGK5 = new EmbedBuilder()
                .setColor(0x00FF9A)
                .setTitle(` ГК-5. Не видавайте зайвих чи неприємних звуків, не кричіть без згоди інших людей у голосовому каналі. \u200b`)
            
            const ruleGK6 = new EmbedBuilder()
                .setColor(0x00FF9A)
                .setTitle(` ГК-6. Не використовуйте соундпад та не співайте без згоди інших людей у голосовому каналі. \u200b`)
            
            const adminBlock = new EmbedBuilder()
                .setColor(0xF3FF7D)
                .setTitle(` Правила адміністрації.\u200b`)

            const ruleA1 = new EmbedBuilder()
                .setColor(0xF3FF7D)
                .setTitle(` ПА-1. Адміністрація повинна протидіяти порушенню правил та карати тих хто порушує їх, тим самим зберігаючи правопорядок на сервері. \u200b`)

            const ruleA2 = new EmbedBuilder()
                .setColor(0xF3FF7D)
                .setTitle(` ПА-2. Заборонена видача покарання не у відповідності до правил або без вагомої на то причини. \u200b`)
                .setDescription("**Виключення: користувач <@744984156194340895>**")

            const ruleA3 = new EmbedBuilder()
                .setColor(0xF3FF7D)
                .setTitle(` ПА-3. Адміністрація мусить дотримуватись "Кодексу порушень". \u200b`)
                .setDescription(`** "Кодекс порушень" — список термінів покарань за порушення кожного правила.**`)
            
            const ruleA4 = new EmbedBuilder()
                .setColor(0xF3FF7D)
                .setTitle(`ПА-4. Заборонене розповсюдження "державної" або ж "серверної"/"адміністраторської" таємниці Квадратної Республіки на сервері та поза його межами без узгодження цього з іншими адміністраторами.`)

            const ruleA5 = new EmbedBuilder()
                .setColor(0xF3FF7D)
                .setTitle(` ПА-5. Адміністрація мусить повідомити користувача про порушення правил та видачу попередження або покарання в каналі <#1132845374168645693>`)
            
            const ruleA6 = new EmbedBuilder()
                .setColor(0xF3FF7D)
                .setTitle(` ПА-6. Адміністрація повинна мати докази порушення правил.`)
                .setDescription(`**ПА-6.1. Якщо покараний користувач подасть запит на надання доказу порушення ним правила в приватні повідомлення адміністратору/модератору сервера який видав покарання, адміністратор/модератор зобов'язаний надати доказ в приватні повідомлення впродовж тиждня з моменту подачі запиту.\n Якщо цього не відбулося, користувач має право написати скаргу у #скарги на адміністратора/модератора та в ній зробити повторний запит на надання доказів порушення правил в приватні повідомлення.**`)

            const ruleA7 = new EmbedBuilder()
                .setColor(0xF3FF7D)
                .setTitle(` ПА-7. Адміністрація мусить повідомляти користувачів сервера про зміну правил в каналі ⁠<#954340830662000642> з пінгом еveryone.`)

            message.channel.send({ embeds: [ruleGK5, ruleGK6, adminBlock, ruleA1, ruleA2, ruleA3, ruleA4, ruleA5, ruleA6, ruleA7]});
        }
        if(message.channelId === rules && message.content === "правила5"){
            message.delete();
            const DPBlock = new EmbedBuilder()
                .setColor(0xFF8F7D)
                .setTitle(` Додаткові правила`)
            
            const ruleDP1 = new EmbedBuilder()
                .setColor(0xFF8F7D)
                .setTitle(` ДП-1. В каналі <#1129089160091811890> є опис кожного каналу. Вони є/містять додаткову частину правил які користувачі мусять дотримуватися.`)
            
            const ruleDP2 = new EmbedBuilder()
                .setColor(0xFF8F7D)
                .setTitle(` ДП-2. В голосових каналах також діють правила текстових каналів. `)

            const ruleDP3 = new EmbedBuilder()
                .setColor(0xFF8F7D)
                .setTitle(` ДП-3. Незнання правил не звільняє від відповідальності. `)
            
            const button = new ButtonBuilder()
	            .setCustomId(`rulesAgree`)
	            .setLabel('Прийняти')
	            .setStyle(ButtonStyle.Primary)
	            .setEmoji('✅');
            
            const row = new ActionRowBuilder()
                .addComponents(button);

            message.channel.send({ embeds: [DPBlock, ruleDP1, ruleDP2, ruleDP3], components: [row]});
        }
        if(message.channelId === "1132848252266487899" && message.content === "вітання"){
            const welcome = new EmbedBuilder()
                .setColor(0xFFFFFF)
                .setTitle(`Вітаємо!:wave:`)
                .setDescription(`**Інвайт на цей сервер: https://discord.gg/TtvThXdKAP\nТелеграм-канал: https://t.me/+XHAB2Tnwqa4yMDMy **\n\n• Ознайомитися з правилами можна тут: ⁠<#1123558261120057425>\n• На сервері працюють системи рейтингу та репутації. Аби переглянути свою картку користувача, пропишіть /rank у каналі <#954372799672250409>\n• Ви можете впливати на репутацію інших користувачів, ставлячи реакції :rep: та :unrep: на їхні повідомлення для збільшення та зменшення репутації відповідно`)
            
                message.channel.send({ embeds: [welcome]});
        }
    },
};
//}