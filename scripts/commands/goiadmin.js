module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61556167296208") {
    var aid = ["61556167296208"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _পবিএ পাপী চুম্মা খোর বস এর মন ভালো নেই আস্কে-!💔🥀", "- মেনসন দিস না বালপাক্না পবিএ পাপী চুম্মা খোর তামান্না ময়াম এর সাথে বিজি", "মেনসন না দিয়ে নাম্বার দাও বস পবিএ পাপী চুম্মা খোর সিঙ্গেল","এত মেনশন না দিয়ে ইনবক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","মেনসন না দিয়ে বস পবিএ পাপী চুম্মা খোর কে রাতে ইউটিউবে ভিডিও কল দিও","পবিএ পাপী চুম্মা খোর বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল পবিএ পাপী চুম্মা খোর রে একটা জিএফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনসন দিস কেন বার বার দেকস না গাঁদা বস পবিএ পাপী চুম্মা খোর বিজি","Mantion_দিস না বাঁলপাঁক্না পবিত্র পাপী চুম্মা খোর প্রচুর বিজি 🥵🥀🤐","তাবিজ কইরা হলেও বস পবিএ পাপী চুম্মা খোর প্রেম একটা করবে তাতে জাই হয় হোক"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
