let questions = [
    {
        "question":"面試的時候，問你的性格是內向還是外向，你會覺得？",
        "answers":[
            ["很容易回答，直接給出答案",1],
            ["很難啊!有時候是內向，有時候是外向，但是面試的時候好像又不說一半一半",2],
        ]
    },
    {
        "question":"你在家裡的客廳看電視的時候，聽到家人回來開門的聲音，你會？",
        "answers":[
            ["家人進來後，很快點個頭，在繼續看電視",1],
            ["跳起身，跑到門口，給他打打一個擁抱，說：你回來啦！",2],
        ]
    },
    {
        "question":"如果可以給你選擇，你會比較喜歡和哪一類人做朋友？",
        "answers":[
            ["有藝術氣息，帶點個性，有些怪的人做朋友，生活才不會悶，也可以加點色彩",1],
            ["沉穩，有義氣，簡單，直接的人，工作時打交道已經給你夠累的了，私人生活還是簡單點比較好",2],
        ]
    },
    {
        "question":"放假時，你會一個人找個地方，在家也好，到戶外也或者安靜的吃飯，一個人看看書，發發呆，休息一下午",
        "answers":[
            ["放假當然是見朋友啦，一個人有什麼好的？會悶的",2],
            ["這就是我的生活寫照，太充實了",1],
        ]
    },
    {
        "question":"叮噹很喜歡爬到屋頂上坐著，在黃昏時間看日落，晚上看星星，如果你可以去他的世界，你會",
        "answers":[
            ["爬到屋頂，坐在他旁邊與他一起看天空",1],
            ["站在地面，舉頭看著他，不時的也看看天空，替他的舒坦感到高興",2],
        ]
    },
    {
        "question":"在下班後的朋友聚會中，你的角色通常是",
        "answers":[
            ["坐在一角，看朋友互動，偶爾插一句嘴，不時的欣賞窗外風光",1],
            ["互動小隊長，不會太強風頭，和每個人都聊幾句，十分合群互動",2],
        ]
    },
    {
        "question":"你有否想過自己是外星人，對生活中很多事情感到抽離，覺得與你無關？",
        "answers":[
            ["外星人？發夢嗎？怎麼可能，是太空人有可能的",2],
            ["對，我是外星人，被你發現了。我就是看地球人不爽，好像身邊發生的事情都與我沒關",1],
        ]
    },
    {
        "question":"老闆給你一個新工作，但工作內容和性質都不是你所喜歡做的，你會？",
        "answers":[
            ["照樣接受，繼續工作，懷著不願意的心情，把工作完成",2],
            ["當聽不到，老闆在吩咐時，才告訴他不喜歡新工作的任務",1],
        ]
    },
    {
        "question":"你喜歡和兩三歲的，在身邊不行轉，大叫大哭，又不斷要和你互動的小朋友玩耍嗎？",
        "answers":[
            ["很喜歡，小朋友就是這樣的，如果他們靜下來不動，就是有病了",2],
            ["不多說，地球太危險，請把他們帶到我看不見的地方",1],
        ]
    },
    {
        "question":"認識多年的朋友遇到了苦難，需要幫助，而你又有能力的話，你會",
        "answers":[
            ["毫不猶豫，兩肋插刀，義不容辭不問原因，馬上就出手幫忙",2],
            ["先想想他為什麼有問題他不早說，為什麼找自己幫忙，在看看其他人的舉動，才考慮幫不幫他",1],
        ]
    }
    
];

let finalAnswers={
        "A":["100% 貓","喜歡自由的生活，給人不善於交際和內向的感覺，嫉妒心理強，不允許他人把注意力轉到別的地方去。你認為自己就是世界中心，遇到不喜歡或者不合意的，會不作一聲的拂袖而去。如果世界只有你，你的生活應該是很開心，但現實是你的朋友面對你這樣的性格會很痛苦，現在就去和他們說聲感謝吧。"],
        "B":["80% 貓","你外表給人很冷漠、偏激但又矜持的感覺。雖生性不和群，但在有需要時，還是可以鑽到人群中，過一個安靜的群體生活，優雅、自負，忠於自己是你希望別人看到的你。藏在內心的那份熱情，只等待適當的人和時間發揮出來，但好像等了很久也沒遇到對的人和事。偶爾把自己固有的行為和熱度改變一下，可能有不錯的結果。"],
        "C":["50% 貓","乾淨、衛生是你的名字，你很在意自己的房間，辦公室的廚房。好奇心很強，對於周圍發生的變化都很在意，你比較喜歡孤獨，不喜歡把自己的感情表露出來，可以選擇的話，你比較喜歡一個人或一兩個朋友的活動。"],
        "D":["20% 貓","個性隨和，遇到不如意的事情，也常常很容易便會遷就他人，是被指使和被安排工作的層級，給人有人情味和爽朗的感覺。外表敏捷和直率，給人可以信任的印象。自律甚嚴，會跟著規則行事，開心、不開心都會放在臉上，從不掩飾，坦率的性格，並無不妥，但生活在社會上，有時候要適當的調節，使生活和工作順暢一點。"],
        "E":["00% 貓","是盲目服從權力和領袖的一群，上司的吩咐你做的，想也不想照著做。個性外向，能快速的和族群打成一片，跟著大部隊工作，完全埋沒了個性，不是說你有錯，而是應該也要有個性，你可以選擇不同的工作，不同的生活環境，不要做沒頭沒腦的人。"]
};