export const characters = [
 {id:'01',name:'肥嘟嘟',tag:'人间嘴替',v:[5,4,4,3],quote:'这话我替你说了。',headline:'嘴巴先出门，勇气随后就到。',description:'有些话在别人心里排队，到你这里直接开麦。你在意的事，值得被好好说出来。直球里有脾气，也有替自己和朋友撑腰的底气。',quirk:'话已经发出去了，语气还在穿鞋。',tip:'保留你的直球，偶尔给语气加个软垫。'},
 {id:'02',name:'瘦嘟嘟',tag:'静音弹幕',v:[1,2,3,2],quote:'嘴没开，弹幕没停。',headline:'你很安静，但你的脑子没有。',description:'表面看起来没什么动静，心里已经观察了三轮。你有自己的判断，只是不会把每一个想法都现场播报。愿意加入的时候，你自然会挪出位置。',quirk:'脑内回复了三百字，最后发出去一个“好”。',tip:'碰到真想参与的事，先发一句“算我一个”。'},
 {id:'03',name:'奶娃',tag:'抽象圣体',v:[2,3,2,1],quote:'脑回路，自带岔路。',headline:'大家走主路，你发现了隐藏地图。',description:'你的快乐有自己的频道。一个奇怪的联想、一件不起眼的小事，都可能让你偷偷乐半天。不急着解释也没关系，这套脑回路本来就是限量发行。',quirk:'事情还没解决，你已经给它起好了外号。',tip:'偶尔把脑内小剧场放出来，可能会遇到同频观众。'},
 {id:'04',name:'奶龙',tag:'显眼包',v:[5,4,2,5],quote:'有我在，场子冷不了。',headline:'快乐到了你这里，会自动开群聊。',description:'你喜欢把小开心变成共同经历。看到有趣的东西，第一反应就是“你也来看看”。你给普通场面添了一点热闹，也让别人更容易加入。',quirk:'一份小开心，已经同步给了三位好友。',tip:'热场很棒，偶尔让安静的朋友按自己的节奏加入。'},
 {id:'05',name:'水豚噜噜',tag:'淡门掌门',v:[2,1,1,2],quote:'你们先急，我泡会儿。',headline:'事情有点复杂，先把自己照顾好。',description:'你愿意给生活留点余地。计划可以换，小事可以过，舒服一点并不耽误认真生活。别人忙着拧紧发条，你记得把肩膀放下来。',quirk:'“都行”的范围，有时大得像海。',tip:'随和之外，也可以大方说一次“我想要这个”。'},
 {id:'06',name:'牛来',tag:'犟种本种',v:[2,4,5,3],quote:'主打一个：我再试试。',headline:'话不一定多，这一步你还想再走。',description:'认准一件事之后，你很愿意继续往前推。你不一定负责热场，但常常是那个又试了一次的人。带点小倔强，也带着对在意之事的认真。',quirk:'近路都修好了，你还想把原路走通。',tip:'目标可以坚定，路线可以灵活。绕个弯也算前进。'}
];
// 每个维度恰好三题；选项顺序固定交错，答案映射与问卷版本一起保存。
export const questions = [
 {d:0,title:'看到一条离谱但无害的消息，你的第一反应是？',hint:'比如：有人宣布周一应该从日历里消失。',options:[['心里笑一下，这个提案我暗中支持。',1],['当场开麦：这事我必须说两句。',5],['先组织一下语言，等合适的时候再说。',2],['忍不住小声吐槽一句。',4]]},
 {d:1,title:'突然多出半小时，没人找你。你会？',hint:'恭喜，获得一小块自由时间。',options:[['先找件小事试试，边做边想。',4],['把几个想做的事过一遍再决定。',1],['立刻开始！先动起来再说。',5],['先看看状态，慢慢选一个。',2]]},
 {d:2,title:'心心念念的窗边座位没了。接下来？',hint:'没有标准答案，只有你的舒服坐姿。',options:[['正好换个角落，体验一下新风景。',1],['今天就是想看窗外，我愿意等一会儿。',5],['先问问还有没有别的窗边位置。',4],['附近找个舒服的位置，也挺好。',2]]},
 {d:3,title:'你发现一颗长得像在开会的土豆。',hint:'而且看起来还是它在主持。',options:[['发给几个朋友：蔬菜界也有管理层。',5],['自己欣赏，这段缘分暂不公开。',1],['找个熟人一起鉴定一下。',4],['先存着，有机会再给别人看。',2]]},
 {d:2,title:'小游戏同一关，已经卡了三次。你会？',hint:'屏幕上那个小东西还在挑衅你。',options:[['再研究一下，说不定差一个技巧。',4],['换个关卡，快乐又不是只有一种。',1],['今天和这关杠上了，再来。',5],['先换个玩法，之后想起来再说。',2]]},
 {d:0,title:'有人问你：“现在想干什么？”',hint:'这一刻，你的想法会怎么出场？',options:[['脑子里过一遍，挑个想法再开口。',2],['直接说出脑子里第一个念头。',5],['我得先想清楚，暂时不急着说。',1],['想到一个就先说一个。',4]]},
 {d:1,title:'按钮上写着：“按一下，会出现一声鸭叫。”',hint:'确定安全。鸭子是否上班，由你决定。',options:[['先看看别人按了是什么效果。',2],['立刻按，让鸭子上班。',5],['把说明看完，再决定要不要按。',1],['看眼周围，合适就试一下。',4]]},
 {d:3,title:'忙完一阵，终于可以给自己充电了。',hint:'这里的“找人”也包括线上聊天。',options:[['做点自己的事，晚些再和人聊。',2],['找熟人聊一会儿，电量回得快。',4],['开启独处模式，谁也不用陪。',1],['约人一起吃点、玩点、随便聊点。',5]]},
 {d:2,title:'原定的小计划临时泡汤了。',hint:'今天突然出现一条剧情分支。',options:[['先找替代办法，尽量完成原目标。',4],['直接改安排，说不定更好玩。',1],['那个目标对我很重要，再想想办法。',5],['保留喜欢的部分，其余随情况改。',2]]},
 {d:0,title:'刚完成一件自己很满意的小事。',hint:'大事小事都算，叠好一件衣服也算。',options:[['当场宣布：今天这波，漂亮。',5],['心里给自己鼓个掌，就够了。',1],['忍不住说一句：做得还不错。',4],['先记下这份满意，之后再提。',2]]},
 {d:1,title:'朋友突然提了个没试过的小点子。',hint:'比如，把散步路线交给抛硬币决定。',options:[['可以，先走出第一步再说。',5],['先问清楚具体怎么玩。',2],['稍微确认一下，就试一小段。',4],['先看看可能的安排，再决定加入。',1]]},
 {d:3,title:'有个有趣的新东西，你打算怎么看？',hint:'可以是一部片、一场展，或一小片晚霞。',options:[['自己按自己的节奏看，刚刚好。',1],['找个人一起，看完还能交换感想。',4],['先自己看，之后想聊了再聊。',2],['现在就约人，共同体验快乐加倍。',5]]}
];
export const VERSION='yellow-1.1';
export function calculate(answers){
 if(!Array.isArray(answers)||answers.length!==12||answers.some(x=>!Number.isInteger(x)||x<0||x>3))throw new Error('请完成全部 12 道题。');
 const vector=[0,0,0,0];questions.forEach((q,i)=>vector[q.d]+=q.options[answers[i]][1]/3);
 const ranking=characters.map(c=>({id:c.id,distance:c.v.reduce((sum,n,i)=>sum+(n-vector[i])**2,0)})).sort((a,b)=>a.distance-b.distance||a.id.localeCompare(b.id));
 const tied=ranking.filter(c=>Math.abs(c.distance-ranking[0].distance)<1e-8).map(c=>c.id);
 return {vector:vector.map(v=>+v.toFixed(4)),ranking,tied};
}
export function resultFrom(answers,chosen){const scored=calculate(answers);const id=chosen??scored.ranking[0].id;if(!scored.tied.includes(id))throw new Error('所选生物不在本次候选中。');return {character:id,vector:scored.vector,secondary:scored.ranking.find(x=>x.id!==id)?.id,mixed:scored.ranking[1].distance-scored.ranking[0].distance<=1.5,tied:scored.tied.length>1};}
export function validateSubmission(body){if(!body||body.version!==VERSION||!/^[a-f0-9-]{36}$/.test(body.id??''))throw new Error('记录格式不正确，请重新结算。');return {id:body.id,version:VERSION,answers:body.answers,...resultFrom(body.answers,body.chosen)};}
