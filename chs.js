/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "% to next level": "% 到下一级",
    "10% energy regen speed (+": "10% 能量回复速度 (+",
    "2 - Consume vanilla honey": "2 - 食用香草蜂蜜",
    "1 - Consume honey": "1 - 食用蜂蜜",
    "A - Attack": "A - 攻击",
    "All blood production is doubled": "所有的血液产量都翻倍",
    "All blood production is multiplied by 10": "所有血液产量乘以10",
    "All blood production is tripled": "所有血液产量增加三倍",
    "Altar": "祭坛",
    "Attack": "攻击",
    "Attack damage": "攻击伤害",
    "Big spider": "大蜘蛛",
    "blood gems": "血宝石",
    "Blood gems": "血宝石",
    "Blue rune": "蓝色符文",
    "Blue* rune": "蓝色*符文",
    "Cocoa bars": "可可棒",
    "dark bar": "黑条",
    "Dark bar (not unlocked": "黑条（未解锁",
    "Dark bars": "黑条",
    "dark orb": "黑球",
    "Dark orbs": "黑球",
    "Dark orbs massively increase tier 6 XP gain": "黑暗球体大大增加了第 6 层 经验 的增益",
    "Dark orbs multiply blood production": "黑暗球体使血液产量成倍增加",
    "Double cocoa honey gain": "双倍可可蜂蜜增益",
    "Double cocoa honey gain again": "可可蜂蜜再次双倍增长",
    "Reset all progress for": "重置所有进度",
    "Return to stairwell": "返回楼梯间",
    "star bar": "星条",
    "Unlock": "解锁",
    "Vanilla honey": "香草蜂蜜",
    "Vanilla honey multiplies cocoa honey gain": "香草蜂蜜乘以可可蜂蜜增益",
    "Vanilla honey multiplies honeyplasm gain": "香草蜂蜜乘以蜜浆增益",
    "What's up? I'm Benji B. Smith. I'll happily smith": "这是怎么回事？ 我是本吉·B·史密斯。 我会很高兴地锻造",
    "Which gives multiple large boosts/bonuses": "这提供了多个大的提升/奖金",
    "Woah-oah my GOD, a CUSTOMER! Welcome, welcome! I have things! PLEASE BUY SOMETHING!!!!!!!": "哇哦我的上帝，一个客户！ 欢迎欢迎！ 我有东西！ 请买东西！！！！！！！",
    "You acquired": "你获得了",
    "You are in a seemingly endless stairwell. The stairs are carpeted in beige, and the walls are warm and bright. The landings are lit by continuous windows with nothing but white on the other side.": "你在一个看似没有尽头的楼梯间。 楼梯铺着米色的地毯，墙壁温暖而明亮。 楼梯平台被连续的窗户照亮，另一边只有白色。",
    "You are on": "你在",
    "You died!": "你凉了！",
    "You feel safe to go up, but a paralyzing fear sets in when you try to go below the ground floor.": "你觉得上去很安全，但是当你试图去到一楼以下时，一种瘫痪的恐惧就会出现。",
    "You have beaten": "你打败了",
    "You've lost some of your XP.": "您丢失了一些 经验。",
    "Call upon the power of your SICK ASS GUNS to multiply golden honey gain by 25,000": "召唤你的 恶心的枪 的力量，将黄金蜂蜜增益乘以 25,000",
    "Enter this floor": "进入这个楼层",
    "Erase ALL PROGRESS to gain a": "擦除所有进度以获得",
    "Forge the": "锻造",
    "Flee (": "逃跑 (",
    "Hard reset": "硬复位",
    "Health": "生命值",
    "Honey": "蜂蜜",
    "Honeyplasm": "蜜浆",
    "Golden upgrades": "金色升级",
    "Golden honey": "金色蜂蜜",
    "Green rune": "绿色符文",
    "Green* rune": "绿色*符文",
    "Go up a floor": "往上一层",
    "Go down a floor": "往下一层",
    "giving you": "给了你",
    "Time until attack": "攻击前的时间",
    "Tip": "提示",
    "Tip history": "历史提示",
    "To ground floor": "到一层",
    "Total XP": "总计经验",
    "Turn all of your cocoa honey into a": "把你所有的可可蜂蜜变成",
    "Up arrow - Go up a floor": "上箭头 - 往上一层楼",
    "This game uses": "这个游戏使用了",
    "This box is way too big for this message.": "这个框对于这条消息来说太大了。",
    "super blood gem": "超级血宝石",
    "Right arrow - Enter floor": "向右箭头 - 进入楼层",
    "Right arrow - Explore new room": "右箭头 - 探索新房间",
    "Requires": "需要",
    "Remove XP softcap": "移除经验软上限",
    "Reinhardt's House": "莱因哈特之家",
    "Red* rune": "红色*符文",
    "Red rune": "红色符文",
    "P - Prestige": "P - 声望",
    "None": "无",
    "Next requires": "下一个需要",
    "Monsters killed": "杀死的怪物",
    "Monster blood upgrades": "怪物血升级",
    "Level": "等级",
    "levels": "等级",
    "Loosely inspired by": "灵感来自",
    "monster blood": "怪物血",
    "Monster blood production is massively increased, but lose all producers,": "怪物血产量大幅增加，但失去所有生产者，",
    "Monster blood production is pentated by 2, but lose all producers,": "怪物血产量减2，但失去所有生产者，",
    "Monster blood production is squared": "怪物血产量平方",
    "Monster blood production is squared": "怪物血产量再次平方",
    "Monster blood production is tetrated by 2": "怪物血量减少 2",
    "Craft the": "制作",
    "Created by Demonin": "作者：Demonin",
    "Current bonuses": "当前奖励",
    "Damage": "伤害",
    "Damn, okay": "该死的，好吧",
    "Down arrow - Go down a floor": "下箭头 - 往下一层",
    "End": "终点",
    "Enemies past floor 100 drop honey": "超过楼层 100 的敌人会掉落蜂蜜",
    "Enemies' first attack takes 4.5s": "敌人的第一次攻击需要 4.5 秒",
    "Energy": "能量",
    "Enter another room": "进入另一个房间",
    "F - Flee": "F - 逃跑",
    "Floor difficulty multiplies golden honey gain": "楼层难度乘以金色蜂蜜增益",
    "Forge your hyper gem into a star gem": "将您的超级宝石锻造成一颗星星宝石",
    "Forge your lucky ring into a shadow ring": "将你的幸运戒指锻造成暗影戒指",
    "Gain more buttons for easy travelling": "获得更多按钮，轻松旅行",
    "gem eels,": "宝石鳗鱼，",
    "Golden eel": "金色鳗鱼",
    "HP is set to max HP when killing an enemy": "杀死敌人时HP设置为最大HP",
    "hyper gem": "超级宝石",
    "hyperplasm": "超浆",
    "Hyperplasm": "超浆",
    "Hyperplasm (not unlocked": "超浆 (未解锁",
    "Hyperplasm gain is far greater, but so is the cost": "超浆增益要大得多，但成本也是如此",
    "and producer cost goes up dramatically": "生产者成本急剧上升",
    "Blood gems increase tier 7 XP gain": "血宝石增加第 7 层 经验 的增益",
    "Blood gems increase tier 7 XP gain again": "血宝石再次增加第 7 层 经验 的增益",
    "Blood gems multiply golden honey gain": "血宝石成倍增加金色蜂蜜增益",
    "Buy another gun (you can never be too loaded": "再买一把枪（你永远不会装得太满",
    "Buy the shark sapphire": "购买鲨鱼蓝宝石",
    "cocoa bar": "可可棒",
    "Cocoa bar milestones": "可可棒里程碑",
    "cocoa honey": "可可蜂蜜",
    "cocoa honey, multiplying XP gain by": "可可蜂蜜，将 经验 增益乘以",
    "combination": "组合",
    "Combinator": "组合器",
    "Consume": "消耗",
    "Cool": "酷",
    "Continue": "继续",
    "Info": "信息",
    "If you'd like to keep up with future updates, why not join the": "如果你想跟上未来的更新，为什么不加入",
    "It seems these rooms have monsters in them. Killing them will give you XP, which will make you stronger. Try to get as strong as possible! If you travel further, the monsters will become tougher and it'll take longer to get back.": "这些房间里似乎有怪物。 杀死他们会给你 经验，这会让你变得更强大。 尝试变得尽可能强大！ 如果你走得更远，怪物会变得更强壮，而且需要更长的时间才能回来。",
    "Keep flee button on reset": "重置时保留逃跑按钮",
    "Keep vanilla honey on reset": "重置时保留香草蜂蜜",
    "Keep one-time items on reset": "重置时保留一次性物品",
    "Keep honey on reset": "重置时保留蜂蜜",
    "Left arrow - Return to stairwell": "左箭头 - 返回楼梯间",
    "Log(golden honey) multiplies golden honey gain": "Log(金色蜂蜜) 乘以金色蜂蜜增益",
    "Monster blood production is squared again": "怪物血生产再次平方",
    "some permanent runes for you.": "一些永久的符文给你。",
    "some temporary runes for you.": "一些临时符文给你。",
    "Star bar (not unlocked": "星条（未解锁",
    "Star bars": "星条",
    "Star bars cost 3 less dark bars": "星条的成本减少 3 黑条",
    "Star bars increase honey and honeyplasm gain": "星条增加蜂蜜和蜜浆增益",
    "Star bars increase tier 6 XP gain": "星条增加第 6 层 经验 增益",
    "the ground floor": "一层",
    "Tier 5 enemies drop large amounts of honey and honeyplasm": "第 5 层敌人会掉落大量蜂蜜和蜜浆",
    "Tier 6 enemies have a chance of dropping dark bars": "第 6 层敌人有几率掉落黑条",
    "Tier 6 enemies may drop multiple dark bars": "第 6 层敌人可能会掉落多个黑条",
    "Tier 6 enemy health is no longer capped": "第 6 层敌人的生命值不再有上限",
    "Tier 8 enemies always drop golden honey": "第 8 层敌人总是掉落金色蜂蜜",
    "You are in a seemingly endless stairwell.": "你在一个看似没有尽头的楼梯间。",
    "be able to find some runes to use at it?": "能找到一些符文来使用吗？",
    "This floor has a door leading to a variety of rooms.": "这层楼有一扇通往各种房间的门。",
    "This floor has some kind of smithing area. Maybe you'll": "这层楼有某种锻造区。 也许你会",
    "5% XP gain (+": "5% 经验 获得 (+",
    "75% attack damage + XP gain": "75% 攻击力 + 经验 增益",
    "75% energy regen speed": "75% 能量回复速度",
    "Attacking uses your energy. Attacking too fast uses lots of energy! If it hits 0 you'll have to wait to recover it!": "攻击会消耗你的能量。 攻击太快会消耗大量能量！ 如果它达到 0，您将不得不等待恢复它！",
    "Congrats on winning the battle! You can heal by consuming honey or returning to the stairwell. If you're low on energy, try a vanilla honey. Items like honey and rune fragments are more common further out.": "恭喜你赢得这场战斗！ 您可以通过食用蜂蜜或返回楼梯间来治愈。 如果你精力不足，试试香草蜂蜜。 蜂蜜和符文碎片等物品在更远的地方更常见。",
    "This room contains an item!": "这个房间里有一个物品！",
    "This room has a monster!": "这个房间里有一个怪物！",
    "You are in an endless expanse of rooms.": "你在无边无际的房间里。",
    "You are in an endless expanse of rooms. They all contain the same beige carpet, and are sparingly littered with furniture. It feels like something's in here with you...": "你在无边无际的房间里。 它们都包含相同的米色地毯，并且很少摆放家具。 感觉好像有什么东西在你身边......",
    "Your rune fragments will be very useful, for both temporary and permanent boosts.": "您的符文碎片对于临时和永久增强都非常有用。",
    "Skeleton": "骷髅",
    "Since this is your first time, you won't be punished. But next time you'll lose XP, so be careful!": "因为这是你第一次，你不会受到惩罚。 但下次你会失去 经验，所以要小心！",
    "Flying eel": "飞鳗",
    "Shadow monster": "暗影怪物",
    "blue door": "蓝色的门",
    "The temporary runes will give you some helpful 45-second buffs. Watch out, they go into effect immediately! Crafting the same rune again stacks the total time.": "临时符文会给你一些有用的 45 秒增益。 当心，它们立即生效！ 再次制作相同的符文会叠加总时间。",
    "This floor has a": "这层楼有",
    "with a keyhole. It is locked. Maybe if you become stronger you'll be able to gain the key?": "带钥匙孔。 它被锁定。 说不定你变强了就可以拿到钥匙了？",
    "You are in a seemingly endless stairwell. Going any higher leads you right back to floor 50. You may have to do something to be able to travel further...": "你在一个看似没有尽头的楼梯间。 再往上走，你就会回到 50 层。你可能需要做点什么才能走得更远......",
    "if you're having trouble, you can heal any time by consuming honey or returning to the stairwell. Also try using some rune buffs to your advantage!": "如果您遇到麻烦，您可以随时通过食用蜂蜜或返回楼梯间来治愈。 还可以尝试使用一些符文增益对您有利！",
    "You may notice enemies take 3 seconds for their first attack, instead of their usual 1.5. Use that to get more hits in.": "您可能会注意到敌人的第一次攻击需要 3 秒，而不是通常的 1.5 秒。 使用它来获得更多点击。",
    "It seems you'll need some more strength (maybe... level 15?) before you can get access to a helpful one-time item. Keep in mind that all items are more common further out from the stairwell.": "在获得有用的一次性物品之前，您似乎需要更多的力量（也许……15 级？）。 请记住，所有物品都在远离楼梯间的地方更常见。",
    "What could be behind that door on floor 49...?": "49楼那扇门的后面会是什么……？",
    "Cocoa bars give a massive boost to your cocoa honey gain. You'll need multiple if you hope to defeat any of the tier 4 enemies.": "可可棒可以极大地促进可可蜂蜜的增加。 如果您希望击败任何 4 阶敌人，则需要多个。",
    "Congrats on resetting! You'll get back to where you were in no time.": "恭喜重置！ 你很快就会回到原来的地方。",
    "Dark bar": "黑条",
    "enter": "进入",
    "Even gaining just 1 cocoa honey will make a big difference after you reset.": "即使只获得 1 个可可蜂蜜也会在您重置后产生很大的不同。",
    "Infinity": "无限",
    "Star bar": "星条",
    "You are at the top of a non-endless stairwell.": "你在一个没有尽头的楼梯间的顶部。",
    "You step out of the doorway into a large, uninhabited forest. Mountains stretch into the distance, and the air smells fresher than anywhere in the stairwell. The long journey is over.": "你走出门口，进入一片无人居住的大森林。 山脉一直延伸到远处，空气比楼梯间的任何地方都更新鲜。 漫长的旅程结束了。",
    "*Dead noises*": "*死寂*",
    "The stairs below are now open to you.": "下面的楼梯现在对你开放。",
    "This floor has some kind of sacrificial altar.": "这层楼有某种祭坛。",
    "This floor has some kind of upgrade shop.": "这层楼有某种升级商店。",
    "with a keyhole. It seems you have the key for it.": "带钥匙孔。 看来你有它的钥匙。",
    "You are in a seemingly endless stairwell. The landings above are indented and filled ankle-deep with water. The walls are covered in tiles.": "你在一个看似没有尽头的楼梯间。 上面的平台是锯齿状的，水充满了脚踝深。 墙壁上覆盖着瓷砖。",
    "You are in a seemingly endless stairwell. The stairs above appear cold and grey, like an old office.": "你在一个看似没有尽头的楼梯间。 上面的楼梯显得寒冷而灰暗，就像一个旧办公室。",
    "Desert snake": "沙漠蛇",
    "Giant ant": "巨蚁",
    "Tendrils": "卷须",
    "This floor has an enormous dark room, dimly lit with candles all around. In the middle sits a large, unknown machine.": "这层楼有一个巨大的黑暗房间，四周烛火昏暗。 中间是一台未知的大型机器。",
    "You are in an endless expanse of rooms. They contain a variety of office furniture, with some bland paintings on the walls.": "你在无边无际的房间里。 它们包含各种办公家具，墙上有一些平淡的画作。",
    "Arcane eel": "奥术鳗鱼",
    "Cocoa bar effect is much stronger": "可可棒效果要强很多",
    "Cocoa honey gain is pentated by 2": "可可蜂蜜增益为 2",
    "Coyote": "郊狼",
    "Crimson hellspawn": "猩红地狱之子",
    "Dark drake": "黑暗幼龙",
    "Enemies above floor 150 drop more XP based on cocoa bars": "基于可可棒，150 层以上的敌人会掉落更多 经验",
    "Forge your shadow ring into a cobalt ring": "将你的暗影戒指锻造成钴戒指",
    "Gain access to": "获得访问权限到",
    "Infinity/Infinity": "无限/无限",
    "Multiply cocoa honey gain by 1.000F10": "将可可蜂蜜增益乘以 1.000F10",
    "Something important may drop on floor 49, but it's not an easy floor...": "重要的东西可能会掉在 49 楼，但这不是一个容易的楼层......",
    "Soon you'll have access to a wide variety of new things!": "很快您就可以接触到各种各样的新事物！",
    "": "",
    "The shadow ring allows you instantly regain energy in the stairwell, as well as greatly reducing the flee cooldown. It also allows access to even higher floors...": "暗影环可以让你在楼梯间立即恢复能量，并大大减少逃跑的冷却时间。 它还允许进入更高的楼层......",
    "This floor has some kind of ingot forge.": "这层楼有某种铸锭。",
    "This lucky ring allows you to flee battles, with a cooldown. It also allows access to something new...": "这个幸运戒指可以让你逃离战斗，并有冷却时间。 它还允许访问新的东西......",
    "Those altar upgrades do take away your cocoa honey! Beware of that!": "那些祭坛升级确实带走了你的可可蜂蜜！ 当心！",
    "Tier 6 enemies drop far more XP": "第 6 层敌人会掉落更多 经验",
    "Tier 6 enemies drop slightly more XP": "第 6 层敌人掉落的 经验 稍微多一点",
    "to repeat a button you've just pressed.": "重复您刚刚按下的按钮。",
    "XP is set to cocoa boost amount on cocoa honey resets and cocoa bar resets": "经验 设置为可可蜂蜜重置和可可棒重置时的可可提升量",
    "You are in a seemingly endless stairwell. The stairs above are lined with plush carpet, with warm lighting giving the stairwell a comforting atmosphere.": "你在一个看似没有尽头的楼梯间。 上面的楼梯铺着毛绒地毯，温暖的灯光为楼梯间营造出舒适的氛围。",
    "You are in an endless expanse of rooms. Every room contains knee-deep water with stairs to the doors, and blue tiled walls.": "你在无边无际的房间里。 每个房间都有齐膝深的水，通往门的楼梯和蓝色瓷砖墙壁。",
    "You are in an endless expanse of rooms. The place resembles an empty apartment, with various scattered windows giving a view high above some vast city at night. The windows are seemingly unbreakable.": "你在无边无际的房间里。 这个地方就像一个空荡荡的公寓，各种分散的窗户在晚上可以看到一些巨大的城市。 窗户似乎牢不可破。",
    "You can gain honeyplasm by killing enemies above floor 100. Going further out and entering more difficult floors gives you a higher chance.": "您可以通过杀死 100 层以上的敌人来获得蜂蜜。越往外走，进入更困难的楼层，您的机会就越大。",
    "You're doing a lot of floor switching and room exploring there. In case you don't know, you can hold": "你在那里做了很多楼层切换和房间探索。 如果你不知道，你可以拿着",
    "Burning eye": "燃烧的眼睛",
    "Glittery moth": "闪光飞蛾",
    "Golden drake": "黄金幼龙",
    "Ice drake": "冰霜幼龙",
    "Reaper": "死神",
    "Slime worm": "史莱姆蠕虫",
    "Super Saiyan eel": "超级赛亚人鳗鱼",
    "Winged demon": "有翼恶魔",
    "You are in a seemingly endless stairwell. The stairs above are a loose dark wood, with weak bulbs hanging above. A cold breeze fills the atmosphere.": "你在一个看似没有尽头的楼梯间。 上面的楼梯是一块松散的深色木头，上面挂着微弱的灯泡。 一股冷风弥漫在空气中。",
    "You are in a seemingly endless stairwell. The stairwell above appears high-class, with detailed wooden walls and smooth marble floors.": "你在一个看似没有尽头的楼梯间。 上面的楼梯间看起来很高档，有细致的木墙和光滑的大理石地板。",
    "You are in an endless expanse of rooms. Instead of rooms, the stairwell's doors open up to a field and paths at night, dotted with street lights and filled with a thick fog. Trees create circles around fields resembling the rooms of the floors below.": "你在无边无际的房间里。 楼梯间的门不是房间，而是在晚上通向田野和小径，街灯点缀着浓雾。 树木在田野周围形成圆圈，类似于下面楼层的房间。",
    "You are in an endless expanse of rooms. These rooms are beautifully decorated, with rich dark wooden walls and smooth marble floors. Various seats, tables and carpets line the spaces.": "你在无边无际的房间里。 这些客房装饰精美，拥有丰富的深色木墙和光滑的大理石地板。 各种座椅、桌子和地毯排列在空间内。",
    "Golden ant": "金色蚂蚁",
    "Golden deity": "金色神祇",
    "Golden moth": "金色飞蛾",
    "You are in an endless expanse of rooms. The rooms are completely covered in gold, to the point that it hurts your eyes.": "你在无边无际的房间里。 房间完全被黄金覆盖，以至于它会伤害你的眼睛。",
    "Cocoa bars increase honey and vanilla honey gain": "可可棒增加蜂蜜和香草蜂蜜的摄入量",
    "Congrats on gaining a dark orb! You'll get back to where you were in no time.": "恭喜你获得了一个黑球！ 你很快就会回到原来的地方。",
    "Every extra dark orb adds more bonuses, so it's always worth it!": "每一个额外的黑球都会增加更多的奖励，所以它总是值得的！",
    "Cocoa bars are more powerful": "可可棒更强大",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Double golden honey gain (": "双倍金色蜂蜜增益（",
    "Endless Stairwell": "无尽的楼梯间",
    "Combinator upgrades": "组合器升级",
    "Tier 6 enemies drop more XP (": "第 6 层敌人会掉落更多 经验 (",
    "Tier 7 enemies drop far more XP (": "第 7 层敌人会掉落更加多 经验 (",
    "Final time: ": "最后时间：",
    "Flee cooldown: ": "逃跑冷却：",
    "floor -": "层 -",
    "Enemies above floor 150 drop more XP (": "高于 150 层的敌人会掉落更多 经验 (",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^获得 (.+)$/,
    /^双倍 (.+)$/,
    /^需要 (.+)$/,
    /^购买 (.+)$/,
    /^第 (.+)$/,
    /^到楼层 (.+)$/,
    /^成本 (.+)$/,
    /^(.+) PM$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^J([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Gain floor (.+) teleport button$/, '获得 $1 层传送按钮'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Gain (.+) free tier (.+) producers$/, '获得 $1 个免费的 $2 阶生产者'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+)$/, '$1e$2'],
    [/^G([\d\.]+)e([\d\.,]+)$/, 'G$1e$2'],
    [/^K([\d\.]+)e([\d\.,]+)\/Infinity$/, 'K$1e$2\/无限'],
    [/^([\d\.,]+) honey$/, '$1 蜂蜜'],
    [/^([\d\.,]+) cocoa bar$/, '$1 可可棒'],
    [/^([\d\.,]+) cocoa bars$/, '$1 可可棒'],
    [/^([\d\.,]+) blue rune fragment$/, '$1 蓝色符文碎片'],
    [/^([\d\.,]+) green rune fragment$/, '$1 绿色符文碎片'],
    [/^([\d\.,]+) red rune fragment$/, '$1 红色符文碎片'],
    [/^([\d\.,]+) vanilla honey$/, '$1 香草蜂蜜'],
    [/^floor ([\d\.,]+)$/, '层 $1'],
    [/^To floor ([\d\.,]+)$/, '到楼层 $1'],
    [/^Buy a tier ([\d\.,]+) blood producer$/, '购买 $1 阶血液生产商'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^(.+) item find chance$/, '$1 物品找到机会'],
    [/^(.+) item find chance (.+)$/, '$1 物品找到机会 $2'],
    [/^You have explored (.+) room. You are (.+) room away from the stairwell. This floor\'s difficulty is (.+), tier (.+).$/, '您已探索 $1 个房间。 您距离楼梯间只有 $2 个房间。 这层楼的难度是 $3，$4阶。'],
    [/^You have explored (.+) room. You are (.+) room away from the stairwell. This floor\'s difficulty is (.+).$/, '您已探索 $1 个房间。 您距离楼梯间只有 $2 个房间。 这层楼的难度是 $3。'],
    [/^You have explored (.+) rooms. You are (.+) rooms away from the stairwell. This floor\'s difficulty is (.+), tier (.+).$/, '您已探索 $1 个房间。 您距离楼梯间只有 $2 个房间。 这层楼的难度是 $3，$4阶。'],
    [/^You have explored (.+) rooms. You are (.+) rooms away from the stairwell. This floor\'s difficulty is (.+).$/, '您已探索 $1 个房间。 您距离楼梯间只有 $2 个房间。 这层楼的难度是 $3。'],
    [/^You have explored (.+) rooms. You are (.+) room away from the stairwell. This floor\'s difficulty is (.+).$/, '您已探索 $1 个房间。 您距离楼梯间只有 $2 个房间。 这层楼的难度是 $3。'],
    [/^Costs (.+) cocoa honey$/, '成本 $1 可可蜂蜜'],
    [/^Costs (.+) honeyplasm$/, '成本 $1 蜜浆'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^(.+)x honey gain \(all types$/, '$1x 蜂蜜增益（所有类型'],
    [/^(.+)x XP gain$/, '$1x 经验值增益'],
    [/^Cocoa bar limit is (.+) higher$/, '可可棒上限 \+$1'],
    [/^Tier (.+) enemies drop more XP$/, '第 $1 层敌人会掉落更多 经验'],
    [/^Requires (.+) star bars$/, '需要 $1 星条'],
    [/^Requires (.+) star bar$/, '需要 $1 星条'],
    [/^Requires (.+) blood gems$/, '需要 $1 血宝石'],
    [/^Requires (.+) hyperplasm$/, '需要 $1 超浆'],
    [/^Requires (.+) cocoa honey$/, '需要 $1 可可蜂蜜'],
    [/^Requires (.+) cocoa honey and (.+) dark orbs$/, '需要 $1 可可蜂蜜 和 $2 黑暗球体'],
    [/^Tier (.+) enemies drop hyperplasm$/, '第 $1 层敌人掉落 超浆'],
    [/^Keep (.+) XP on reset$/, '重置时保留 $1 经验'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);