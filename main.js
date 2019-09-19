var scenes = []


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s_empyt = {items:[],bg:'',dialogs:[],name:'s_empyt',showDialog:-1,next:''};
s_empyt.items.push({pic:'image/item/emptyItem.png',x:0,y:0,isAct:false,itemWindow:'image/item/detail.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});

s_empyt.bg = 'image/scene_empty.png';

s_empyt.dialogs = [];
s_empyt.dialogs.push({whichSay:'',text:"",next:-1,isShow:false,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s13_accident = {items:[],bg:'',dialogs:[],name:'s13_accident',showDialog:-1,next:''};
s13_accident.items.push({pic:'image/scene_accident/accident_0.png',x:130,y:590,isAct:true,itemWindow:'',action:{gt:s1_start,doneGt:'',doneDig:-1,haveToCheck:false}});

s13_accident.bg = 'image/scene_outside/scene_outside_0.png';

s13_accident.dialogs = [];
/*s12_fail.dialogs.push({whichSay:'',text:"you catch the wrong person!",next:-1,isShow:true,isOption:false,action:{doneItem:'image/item/back.png',gt:'',gtDialog:-1,next:[]}});*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s12_nurse = {items:[],bg:'',dialogs:[],name:'s12_nurse',showDialog:-1,next:''};
s12_nurse.items.push({pic:'image/scene_nurse/nurse_0.png',x:130,y:590,isAct:true,itemWindow:'',action:{gt:s1_start,doneGt:'',doneDig:-1,haveToCheck:false}});

s12_nurse.bg = 'image/scene_outside/scene_outside_0.png';

s12_nurse.dialogs = [];
/*s12_fail.dialogs.push({whichSay:'',text:"you catch the wrong person!",next:-1,isShow:true,isOption:false,action:{doneItem:'image/item/back.png',gt:'',gtDialog:-1,next:[]}});*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s11_newphew = {items:[],bg:'',dialogs:[],name:'s11_nephew',showDialog:-1,next:''};
s11_newphew.items.push({pic:'image/scene_nephew/newphew_0.png',x:130,y:590,isAct:true,itemWindow:'',action:{gt:s1_start,doneGt:'',doneDig:-1,haveToCheck:false}});
s11_newphew.bg = 'image/scene_outside/scene_outside_0.png';

s11_newphew.dialogs = [];
/*s11_win.dialogs.push({whichSay:'',text:"you catch the right person!",next:-1,isShow:true,isOption:false,action:{doneItem:'image/item/back.png',gt:'',gtDialog:-1,next:[]}});*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s10_outdoor = {items:[],bg:'',dialogs:[],name:'s10_outdoor',showDialog:42,next:''};
s10_outdoor.items.push({pic:'image/scene_outdoor/item_nephew_0.png',x:495,y:33,isAct:true,itemWindow:'',action:{gt:'',doneGt:'',doneDig:25,haveToCheck:true}});
s10_outdoor.items.push({pic:'image/scene_outdoor/item_nurse_0.png',x:74,y:137,isAct:true,itemWindow:'',action:{gt:'',doneGt:'',doneDig:0,haveToCheck:true}});

s10_outdoor.bg = 'image/scene_outdoor/scene_outside_0.png';

s10_outdoor.dialogs = [];
//---nurse
s10_outdoor.dialogs.push({whichSay:'nurse',text:"what question you want to ask?",next:1,isShow:false,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//0

//--option
s10_outdoor.dialogs.push({whichSay:'Ben',text:"Do you know anything else about the nephew?%!%Do you know that the deceased gave all his property to you after he die?%!%Did the deceased still smoke recently?%!%How is the relationship between the deceased and his nephew?%!%Do you have the door key?",next:-2,isShow:true,isOption:true,action:{doneItem:'',gt:'',next:[2,11,17,19,23],gtDialog:-1,haveToCheck:false}});//1
//--option

//-1
s10_outdoor.dialogs.push({whichSay:'nurse',text:"Actually",next:3,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//2
s10_outdoor.dialogs.push({whichSay:'nurse',text:"A few days ago",next:4,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"his nephew came to him to borrow money",next:5,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"At that time",next:6,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:" I was cooking",next:7,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:" Then they quarreled",next:8,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"Later",next:9,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:'the nephew said something like "I will kill you"',next:10,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"and then left",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:0,next:[],haveToCheck:true}});//10
//-1

//-2
s10_outdoor.dialogs.push({whichSay:'nurse',text:"(cry)no, I don’t know",next:12,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//11
s10_outdoor.dialogs.push({whichSay:'nurse',text:"Things were too sudden",next:13,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"Yesterday",next:14,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"I was still playing chess with him",next:15,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"I, I can’t believe…",next:16,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"My condolences",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:0,next:[],haveToCheck:true}});//16
//-2

//-3
s10_outdoor.dialogs.push({whichSay:'nurse',text:"No",next:18,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//17
s10_outdoor.dialogs.push({whichSay:'nurse',text:"the doctor said his lungs are not good and he can't smoke",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:0,next:[],haveToCheck:false}});//18
//-3

//-4
s10_outdoor.dialogs.push({whichSay:'nurse',text:"Not well",next:20,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//19
s10_outdoor.dialogs.push({whichSay:'nurse',text:"His nephew likes to gamble",next:21,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"Every time he loses",next:22,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"he finds him to borrow money",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:0,next:[],haveToCheck:true}});//22
//-4

//-5
s10_outdoor.dialogs.push({whichSay:'nurse',text:"Yes",next:24,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//23
s10_outdoor.dialogs.push({whichSay:'nurse',text:"I have a spare key",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:0,next:[],haveToCheck:true}});//24
//-5

//---nurse

//---nephew
s10_outdoor.dialogs.push({whichSay:'nephew',text:"what question you want to ask?",next:26,isShow:false,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//25

//--option
s10_outdoor.dialogs.push({whichSay:'Ben',text:"Do you know anything else about the nurse?%!%Do you know that the deceased gave all his property to nurse after he die?%!%Did you smoke?%!% How is the relationship between the deceased and his nurse?%!%Do you have the door key?",next:-2,isShow:true,isOption:true,action:{doneItem:'',gt:'',next:[27,29,33,36,40],gtDialog:-1,haveToCheck:false}});//26
//--option

//--1
s10_outdoor.dialogs.push({whichSay:'nephew',text:"Oh, yes!",next:28,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//27
s10_outdoor.dialogs.push({whichSay:'nephew',text:"She has a sick son and needs a lot of money to treat him",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:25,next:[],haveToCheck:true}});//28
//--1

//--2
s10_outdoor.dialogs.push({whichSay:'nephew',text:"what!",next:30,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//29
s10_outdoor.dialogs.push({whichSay:'nephew',text:"I am his nephew!",next:31,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nephew',text:"how could he gave his property to the nurse!",next:32,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"Calm down!",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:25,next:[],haveToCheck:true}});//32
//--2

//--3
s10_outdoor.dialogs.push({whichSay:'nephew',text:"Sometimes",next:34,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//33
s10_outdoor.dialogs.push({whichSay:'nephew',text:"Why you ask that?",next:35,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"nothing",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:25,next:[],haveToCheck:true}});//35
//--3

//--4
s10_outdoor.dialogs.push({whichSay:'nephew',text:"not well",next:37,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//36
s10_outdoor.dialogs.push({whichSay:'nephew',text:"He has a bad temper and I often see him scolding the nurse",next:38,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"really?",next:39,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nephew',text:"and he hadn't paid her wages for several months",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:25,next:[],haveToCheck:true}});//39
//--4

//--5
s10_outdoor.dialogs.push({whichSay:'nephew',text:"No",next:41,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//40
s10_outdoor.dialogs.push({whichSay:'nephew',text:" only the nurse has a spare key",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:25,next:[],haveToCheck:true}});//41
//--5
//---nephew
////////////////////////////////////////////////////////////////
//---Zero
s10_outdoor.dialogs.push({whichSay:'Zero',text:"Now, what you think of this case, ben?",next:43,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//42
//---Zero

//---Option
s10_outdoor.dialogs.push({whichSay:'Ben',text:"It is a murder%!%It is an accident",next:-1,isShow:true,isOption:true,action:{doneItem:'',gt:'',gtDialog:-1,next:[44,112],haveToCheck:false}});//43
//---Option

//--1
s10_outdoor.dialogs.push({whichSay:'Zero',text:"why it is a murder? do you find something, Ben?",next:45,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//44

s10_outdoor.dialogs.push({whichSay:'Ben',text:"left-hand scissor%!%face up%!%death time",next:-1,isShow:true,isOption:true,action:{doneItem:'',gt:'',gtDialog:-1,next:[46,50,52],haveToCheck:false}});//45

//-1
s10_outdoor.dialogs.push({whichSay:'Ben',text:"the hanger was in the right hand of the deceased",next:47,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//46
s10_outdoor.dialogs.push({whichSay:'Ben',text:"but the deceased was left-handed",next:48,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"Do you still remember the scissor we find in bed room?",next:49,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"It is a left-hand scissor!",next:54,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//49
//-1

//-2
s10_outdoor.dialogs.push({whichSay:'Ben',text:"people who fall from buildings generally face down",next:51,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//50
s10_outdoor.dialogs.push({whichSay:'Ben',text:"but the deceased was not",next:54,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//51
//-2

//-3
s10_outdoor.dialogs.push({whichSay:'Ben',text:"he dead died at two in the morning",next:53,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//52
s10_outdoor.dialogs.push({whichSay:'Ben',text:"Who would wash clothes at two in the morning?",next:54,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//53
//-3

//-zero5
s10_outdoor.dialogs.push({whichSay:'Zero',text:"Oh! yes",next:55,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//54
s10_outdoor.dialogs.push({whichSay:'Zero',text:"this is very strange!",next:56,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Zero',text:"so it might be a murder!",next:57,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Zero',text:" If so, who is the murderer you think, Ben?",next:58,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//57
//-zero5

//option
s10_outdoor.dialogs.push({whichSay:'Ben',text:"nurse%!%nephew",next:-1,isShow:true,isOption:true,action:{doneItem:'',gt:'',gtDialog:-1,next:[59,78],haveToCheck:false}});//58
//option

//1
s10_outdoor.dialogs.push({whichSay:'Ben',text:"I think the nurse is the murderer!",next:60,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//59
s10_outdoor.dialogs.push({whichSay:'nurse',text:"why! he is like my father! I have no reason to kill him!",next:61,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//60

//option
s10_outdoor.dialogs.push({whichSay:'Ben',text:"will%!%the wage",next:-1,isShow:true,isOption:true,action:{doneItem:'',gt:'',gtDialog:-1,next:[62,73],haveToCheck:false}});//61
//option

s10_outdoor.dialogs.push({whichSay:'Ben',text:"You killed him because you want to get the property!",next:63,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//62
s10_outdoor.dialogs.push({whichSay:'Ben',text:"The premise of the will's entry into force is that the old man must die.",next:64,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"But the condition of the elderly is getting better",next:65,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"so you want to kill the old man and get a legacy",next:66,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"Once you get the property, you can save your son!",next:67,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//66
s10_outdoor.dialogs.push({whichSay:'Zero',text:"but Ben, we need evidence!",next:68,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"the room is closed",next:69,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"the key belongs to the deceased was in the room",next:70,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"and she has the only key",next:71,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"So she must be the only one can achieve this murder!",next:72,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Zero',text:"OK! let’s catch her!",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:s12_nurse,gtDialog:-1,next:[],haveToCheck:false}});//72

s10_outdoor.dialogs.push({whichSay:'Ben',text:"the deceased didn't pay you the wages",next:74,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//73
s10_outdoor.dialogs.push({whichSay:'Ben',text:"maybe you have a quarrel, then you killed him.",next:75,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nurse',text:"That's ridiculous！who told you that! He paid me every month!",next:76,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Zero',text:"it seems like she is not the murderer. she has no murder reason.",next:77,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"So, it's an accident%!%OK, maybe I'll try to find more cluse",next:-1,isShow:true,isOption:true,action:{doneItem:'',gt:'',gtDialog:-1,next:[-1,-2],haveToCheck:false}});//77
//1

//2
s10_outdoor.dialogs.push({whichSay:'Ben',text:"You are the murderer!",next:79,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//78
s10_outdoor.dialogs.push({whichSay:'nephew',text:"what? why I kill my uncle?",next:80,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//79

//option
s10_outdoor.dialogs.push({whichSay:'Ben',text:"for the property%!%for the deceased didn't lend money",next:-1,isShow:true,isOption:true,action:{doneItem:'',gt:'',gtDialog:-1,next:[81,86],haveToCheck:false}});//80
//option

s10_outdoor.dialogs.push({whichSay:'Ben',text:"Because your uncle gave his property to the nurse, you hated him and killed him",next:82,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//81
s10_outdoor.dialogs.push({whichSay:'Ben',text:"Then you made the murder into closed room murder",next:83,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"The nurse who has the spare key is the only suspect",next:84,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"If the nurse was caught",next:85,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"you would be the sole heir to the property",next:87,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//85

s10_outdoor.dialogs.push({whichSay:'Ben',text:"Because your uncle didn't lend you money",next:87,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//86

s10_outdoor.dialogs.push({whichSay:'Zero',text:"It sounds make sense",next:88,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//87
s10_outdoor.dialogs.push({whichSay:'Zero',text:"but Ben, how could he kill the deceased without the room key?",next:89,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//88

s10_outdoor.dialogs.push({whichSay:'Ben',text:"Yes, I will show you how! after he killed his uncle",next:90,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//89
s10_outdoor.dialogs.push({whichSay:'Ben',text:"he first pulled the tape measure out of the room and then locked the door with the key",next:91,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"then the key was placed on the head of the measuring tape",next:92,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"The key was also brought back to the kit as the tape was retracted",next:93,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//92

//option
s10_outdoor.dialogs.push({whichSay:'Zero',text:"Very impressive reasoning! Ben, do you have any evidence?",next:94,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//93

s10_outdoor.dialogs.push({whichSay:'Ben',text:"the cigarette ash%!%phone fingerprint%!%the fingerprint on the measure tape",next:-1,isShow:true,isOption:true,action:{doneItem:'',gt:'',gtDialog:-1,next:[95,100,104],haveToCheck:false}});//94
//option

//1
s10_outdoor.dialogs.push({whichSay:'Ben',text:"the cigarette ash!",next:96,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//95
s10_outdoor.dialogs.push({whichSay:'Ben',text:"the deceased was not allowed to smoke",next:97,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"So the nephew was there yesterday!",next:98,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Zero',text:"But Ben! this is not enough",next:99,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Zero',text:"it just proves that he was in the apartment yesterday",next:94,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//99
//1

//2
s10_outdoor.dialogs.push({whichSay:'Ben',text:"the phone recording of the deceased's cellp hone has been deleted",next:101,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//100
s10_outdoor.dialogs.push({whichSay:'Ben',text:" if nephew was murder",next:102,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"there must be his fingerprint on the cell phone!",next:103,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nephew',text:"come on! I'm his nephew, my fingerprint on his cell phone is not strange!",next:107,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//103
//2

//3
s10_outdoor.dialogs.push({whichSay:'Ben',text:"if my reasoning is correct!",next:105,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//104
s10_outdoor.dialogs.push({whichSay:'Ben',text:"there must be his fingerprint on the measure tape!",next:106,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'nephew',text:"come on! I'm his nephew, my fingerprint on his measure tape is not strange!",next:107,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//106
//3

s10_outdoor.dialogs.push({whichSay:'Zero',text:"Ben, that's not enough!",next:108,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//107

s10_outdoor.dialogs.push({whichSay:'Ben',text:"Do you remember the receipt we find in the living room?",next:109,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//108
s10_outdoor.dialogs.push({whichSay:'Ben',text:"It says that the measure tape was bought yesterday! ",next:110,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"So it is not possible that the new measure tape has the nephew's fingerprint unless he is the murderer!",next:111,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//110

s10_outdoor.dialogs.push({whichSay:'Ben',text:"ok! let’s catch him!",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:s11_newphew,gtDialog:-1,next:[],haveToCheck:false}});//111

//--1

//--2
s10_outdoor.dialogs.push({whichSay:'Ben',text:"It is an accident",next:113,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//112

s10_outdoor.dialogs.push({whichSay:'Zero',text:"why it is an accident, Ben?",next:114,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//113

s10_outdoor.dialogs.push({whichSay:'Ben',text:"The deceased had a hanger in his hand ",next:115,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//114
s10_outdoor.dialogs.push({whichSay:'Ben',text:"The clothes were next to the body",next:116,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});
s10_outdoor.dialogs.push({whichSay:'Ben',text:"The deceased should accidentally fall down when hanging clothes on the balcony",next:117,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[],haveToCheck:false}});//116

//option
s10_outdoor.dialogs.push({whichSay:'Ben',text:"So, it's just an accident%!%Let's me think awhile",next:-1,isShow:true,isOption:true,action:{doneItem:'',gt:'',gtDialog:-1,next:[-1,-2],haveToCheck:false}});//117
//option
//--2

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s9_bedroom_back = {items:[],bg:'',dialogs:[],name:'s9_bedroom_back',showDialog:-1,next:s10_outdoor};
s9_bedroom_back.items.push({pic:'image/scene_bedroom/item_diary_0.png',x:850,y:629,isAct:true,itemWindow:'image/scene_bedroom/detailed_diary.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s9_bedroom_back.items.push({pic:'image/scene_bedroom/item_drawer1_0.png',x:633,y:464,isAct:true,itemWindow:'image/scene_bedroom/detailed_healthReport1.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s9_bedroom_back.items.push({pic:'image/scene_bedroom/item_drawer2_0.png',x:633,y:514,isAct:true,itemWindow:'image/scene_bedroom/detailed_healthReport2.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s9_bedroom_back.items.push({pic:'image/scene_bedroom/item_scissor_0.png',x:151,y:560,isAct:true,itemWindow:'image/scene_bedroom/detailed_scissor.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});

s9_bedroom_back.bg = 'image/scene_bedroom/scene_bedroom_0.png';

s9_bedroom_back.dialogs = [];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s9_bedroom = {items:[],bg:'',dialogs:[],name:'s9_bedroom',showDialog:-1,next:s10_outdoor};
s9_bedroom.items.push({pic:'image/scene_bedroom/item_diary_0.png',x:850,y:629,isAct:true,itemWindow:'image/scene_bedroom/detailed_diary.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s9_bedroom.items.push({pic:'image/scene_bedroom/item_drawer1_0.png',x:633,y:464,isAct:true,itemWindow:'image/scene_bedroom/detailed_healthReport1.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s9_bedroom.items.push({pic:'image/scene_bedroom/item_drawer2_0.png',x:633,y:514,isAct:true,itemWindow:'image/scene_bedroom/detailed_healthReport2.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s9_bedroom.items.push({pic:'image/scene_bedroom/item_scissor_0.png',x:151,y:560,isAct:true,itemWindow:'image/scene_bedroom/detailed_scissor.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});


s9_bedroom.bg = 'image/scene_bedroom/scene_bedroom_0.png';

s9_bedroom.dialogs = [];
s9_bedroom.dialogs.push({whichSay:'Zero',text:"That's all,let's go to ask nurse and nephew some question.",next:-1,isShow:false,isOption:true,action:{doneItem:'',gt:s10_outdoor,gtDialog:-1,next:[]}});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s8_livingroom_back = {items:[],bg:'',dialogs:[],name:'s8_livingroom_back',showDialog:-1,next:''};

s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_book_0.png',x:273,y:538,isAct:true,itemWindow:'image/scene_livingroom/detailed_books.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_bottle_0.png',x:420,y:427,isAct:true,itemWindow:'image/scene_livingroom/detailed_bottles.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_cellphone_0.png',x:539,y:575,isAct:true,itemWindow:'image/scene_livingroom/detailed_cellPhone.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_fu_0.png',x:339,y:143,isAct:true,itemWindow:'image/scene_livingroom/detailed_amulet.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_glasses_0.png',x:587,y:542,isAct:true,itemWindow:'image/scene_livingroom/detailed_glass.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_nephewphoto_0.png',x:407,y:172,isAct:true,itemWindow:'image/scene_livingroom/detailed_picture_nephew.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_newspaper_0.png',x:638,y:507,isAct:true,itemWindow:'image/scene_livingroom/detailed_newspaper.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_nursephoto_0.png',x:185,y:172,isAct:true,itemWindow:'image/scene_livingroom/detailed_picture_nurse.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_plant_0.png',x:805,y:297,isAct:true,itemWindow:'image/scene_livingroom/detailed_orchis.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_sticky_0.png',x:61,y:233,isAct:true,itemWindow:'image/scene_livingroom/detailed_notes.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_telephone_0.png',x:741,y:614,isAct:true,itemWindow:'image/scene_livingroom/detailed_phone.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s8_livingroom_back.items.push({pic:'image/scene_livingroom/item_toolbox_0.png',x:446,y:651,isAct:true,itemWindow:'image/scene_livingroom/detailed_kit.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});

s8_livingroom_back.bg = 'image/scene_livingroom/scene_livingroom_0.png';

s8_livingroom_back.dialogs = [];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s8_livingroom = {items:[],bg:'',dialogs:[],name:'s8_livingroom',showDialog:-1,next:s9_bedroom};

s8_livingroom.items.push({pic:'image/scene_livingroom/item_book_0.png',x:273,y:538,isAct:true,itemWindow:'image/scene_livingroom/detailed_books.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_bottle_0.png',x:420,y:427,isAct:true,itemWindow:'image/scene_livingroom/detailed_bottles.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_cellphone_0.png',x:539,y:575,isAct:true,itemWindow:'image/scene_livingroom/detailed_cellPhone.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_fu_0.png',x:339,y:143,isAct:true,itemWindow:'image/scene_livingroom/detailed_amulet.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_glasses_0.png',x:587,y:542,isAct:true,itemWindow:'image/scene_livingroom/detailed_glass.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_nephewphoto_0.png',x:407,y:172,isAct:true,itemWindow:'image/scene_livingroom/detailed_picture_nephew.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_newspaper_0.png',x:638,y:507,isAct:true,itemWindow:'image/scene_livingroom/detailed_newspaper.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_nursephoto_0.png',x:185,y:172,isAct:true,itemWindow:'image/scene_livingroom/detailed_picture_nurse.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_plant_0.png',x:805,y:297,isAct:true,itemWindow:'image/scene_livingroom/detailed_orchis.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_sticky_0.png',x:61,y:233,isAct:true,itemWindow:'image/scene_livingroom/detailed_notes.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_telephone_0.png',x:741,y:614,isAct:true,itemWindow:'image/scene_livingroom/detailed_phone.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s8_livingroom.items.push({pic:'image/scene_livingroom/item_toolbox_0.png',x:446,y:651,isAct:true,itemWindow:'image/scene_livingroom/detailed_kit.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});

s8_livingroom.bg = 'image/scene_livingroom/scene_livingroom_0.png';

s8_livingroom.dialogs = [];

s8_livingroom.dialogs.push({whichSay:'Zero',text:"It seems that things are not that simple and we may find some important clues in the bedroom.",next:-1,isShow:false,isOption:true,action:{doneItem:'',gt:s9_bedroom,gtDialog:-1,next:[]}});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s7_balcony_back = {items:[],bg:'',dialogs:[],name:'s7_balcony_back',showDialog:-1,next:''};

s7_balcony_back.items.push({pic:'image/scene_balcony/item_ash_0.png',x:450,y:662,isAct:true,itemWindow:'image/scene_balcony/detailed_cigarette_ash.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s7_balcony_back.items.push({pic:'image/scene_balcony/item_basket_0.png',x:92,y:432,isAct:true,itemWindow:'image/scene_balcony/detailed_basket.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s7_balcony_back.items.push({pic:'image/scene_balcony/item_chair_0.png',x:0,y:501,isAct:true,itemWindow:'image/scene_balcony/detailed_deckchair.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s7_balcony_back.items.push({pic:'image/scene_balcony/item_washer_0.png',x:279,y:364,isAct:true,itemWindow:'image/scene_balcony/detailed_washer.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});

s7_balcony_back.bg = 'image/scene_balcony/scene_balcony.png';

s7_balcony_back.dialogs = [];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s7_balcony = {items:[],bg:'',dialogs:[],name:'s7_balcony',showDialog:-1,next:s8_livingroom};

s7_balcony.items.push({pic:'image/scene_balcony/item_ash_0.png',x:450,y:662,isAct:true,itemWindow:'image/scene_balcony/detailed_cigarette_ash.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s7_balcony.items.push({pic:'image/scene_balcony/item_basket_0.png',x:92,y:432,isAct:true,itemWindow:'image/scene_balcony/detailed_basket.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s7_balcony.items.push({pic:'image/scene_balcony/item_chair_0.png',x:0,y:501,isAct:true,itemWindow:'image/scene_balcony/detailed_deckchair.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s7_balcony.items.push({pic:'image/scene_balcony/item_washer_0.png',x:279,y:364,isAct:true,itemWindow:'image/scene_balcony/detailed_washer.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});

s7_balcony.bg = 'image/scene_balcony/scene_balcony.png';

s7_balcony.dialogs = [];
s7_balcony.dialogs.push({whichSay:'Zero',text:"ok, there is no more things worth investing, let’s go to the living room.",next:-1,isShow:false,isOption:true,action:{doneItem:'',gt:s8_livingroom,gtDialog:-1,next:[]}});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s6_zero = {items:[],bg:'',dialogs:[],name:'s6_zero',showDialog:-1,next:s7_balcony};

s6_zero.bg = 'image/scene_outside/scene_outside_0.png';

s6_zero.dialogs = [];
s6_zero.dialogs.push({whichSay:'Zero',text:"let’s go to the balcony to find more clues.",next:-1,isShow:true,isOption:true,action:{doneItem:'',gt:s7_balcony,gtDialog:-1,next:[]}});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s5_deathreport_back = {items:[],bg:'',dialogs:[],name:'s5_deathreport_back',showDialog:-1,next:''};

s5_deathreport_back.items.push({pic:'image/scene_deathreport/cloth_0.png',x:138,y:195,isAct:true,itemWindow:'image/scene_deathreport/death_report_clothes.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s5_deathreport_back.items.push({pic:'image/scene_deathreport/deadman_0.png',x:116,y:398,isAct:true,itemWindow:'image/scene_deathreport/death_report_deceased.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});
s5_deathreport_back.items.push({pic:'image/scene_deathreport/hanger_0.png',x:340,y:328,isAct:true,itemWindow:'image/scene_deathreport/death_report_hanger.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});

s5_deathreport_back.bg = 'image/scene_deathreport/scene_deathreport.png';

s5_deathreport_back.dialogs = [];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s5_deathreport = {items:[],bg:'',dialogs:[],name:'s5_deathreport',showDialog:-1,next:s6_zero};

s5_deathreport.items.push({pic:'image/scene_deathreport/cloth_0.png',x:138,y:195,isAct:true,itemWindow:'image/scene_deathreport/death_report_clothes.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s5_deathreport.items.push({pic:'image/scene_deathreport/deadman_0.png',x:116,y:398,isAct:true,itemWindow:'image/scene_deathreport/death_report_deceased.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});
s5_deathreport.items.push({pic:'image/scene_deathreport/hanger_0.png',x:340,y:328,isAct:true,itemWindow:'image/scene_deathreport/death_report_hanger.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:true}});

s5_deathreport.bg = 'image/scene_deathreport/scene_deathreport.png';

s5_deathreport.dialogs = [];
s5_deathreport.dialogs.push({whichSay:'Ben',text:"Asked to go to the balcony",next:-1,isShow:false,isOption:true,action:{doneItem:'',gt:s6_zero,gtDialog:-1,next:[]}});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s4_outside_zero = {items:[],bg:'',dialogs:[],name:'s4_outside_zero',showDialog:-1,next:s5_deathreport};

s4_outside_zero.items.push({pic:'image/scene_deathreport_zero/item_deathreport_0.png',x:483,y:591,isAct:true,itemWindow:'',action:{gt:s5_deathreport,doneGt:'',doneDig:-1,haveToCheck:false}});
s4_outside_zero.bg = 'image/scene_deathreport_zero/scene_outside_zero.png';

s4_outside_zero.dialogs = [];

s4_outside_zero.dialogs.push({whichSay:'',text:"This is the death report, Ben.",next:-1,isShow:true,isOption:false,action:{doneItem:'image/item/deathreport.png',gt:'',gtDialog:-1,next:[]}});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s3_outside_back = {items:[],bg:'',dialogs:[],name:'s3_outside_back',showDialog:-1,next:''};

s3_outside_back.items.push({pic:'image/scene_outside/item_body_0.png',x:663,y:484,isAct:true,itemWindow:'image/scene_outside/detailed_deadbody.png',action:{gt:'',doneGt:'',doneDig:-1,haveToCheck:false}});

s3_outside_back.bg = 'image/scene_outside/scene_outside.png';

s3_outside_back.dialogs = [];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s3_outside = {items:[],bg:'',dialogs:[],name:'s3_outside',showDialog:-1,next:s4_outside_zero};

s3_outside.items.push({pic:'image/scene_outside/item_body_0.png',x:663,y:484,isAct:false,itemWindow:'image/scene_outside/detailed_deadbody.png',action:{gt:'',doneGt:s4_outside_zero,doneDig:-1,haveToCheck:false}});

s3_outside.bg = 'image/scene_outside/scene_outside.png';

s3_outside.dialogs = [];
s3_outside.dialogs.push({whichSay:'Zero',text:"So, this is our poor deceased.",next:1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[]}});
s3_outside.dialogs.push({whichSay:'Zero',text:"Let's do it in our old way.",next:2,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[]}});
s3_outside.dialogs.push({whichSay:'Zero',text:"You check the body's surounding.",next:-1,isShow:true,isOption:false,action:{doneItem:'image/scene_outside/item_body_0.png',gt:'',gtDialog:-1,next:[]}});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s2_instruction = {items:[],bg:'',dialogs:[],name:'s2_instruction',showDialog:-1,next:s3_outside};

s2_instruction.items.push({pic:'image/scene_outside/item_body_0.png',x:663,y:484,isAct:false,itemWindow:'image/scene_outside/detailed_deadbody.png',action:{gt:'',doneGt:s4_outside_zero,doneDig:-1,haveToCheck:false}});

s2_instruction.bg = 'image/scene_outside/scene_outside.png';

s2_instruction.dialogs = [];
s2_instruction.dialogs.push({whichSay:'',text:"You, Ben, and your partner are two detectives.",next:1,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[]}});
s2_instruction.dialogs.push({whichSay:'',text:"This day, you received a dispatch call to inspect a crime scene.",next:2,isShow:true,isOption:false,action:{doneItem:'image/item/back.png',gt:'',gtDialog:-1,next:[]}});
s2_instruction.dialogs.push({whichSay:'',text:" After 2 hours' driving.",next:3,isShow:true,isOption:false,action:{doneItem:'',gt:'',gtDialog:-1,next:[]}});
s2_instruction.dialogs.push({whichSay:'',text:" you arrived at the location of the crime.",next:-1,isShow:true,isOption:false,action:{doneItem:'',gt:s3_outside,gtDialog:-1,next:[]}});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var s1_start = {items:[],bg:'',dialogs:[],name:'s1_start',showDialog:-1,next:s2_instruction};

s1_start.items.push({pic:'image/item/cover_play_0.png',x:836,y:656,isAct:true,itemWindow:'',action:{gt:s2_instruction,doneGt:{},doneDig:-1,haveToCheck:false}});
s1_start.items.push({pic:'image/item/cover_credit_0.png',x:105,y:574,isAct:true,itemWindow:'',action:{gt:'',doneGt:{},doneDig:-1,haveToCheck:true}});

s1_start.bg = 'image/cover.png';
s1_start.dialogs = [];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////itemAction
s1_start.items[0].action.gt = s2_instruction;

s2_instruction.dialogs[3].action.doneGt = s3_outside;

//s3_outside.items[0].action.gt = s4_outside_zero;

s4_outside_zero.items[0].action.gt = s5_deathreport;

s5_deathreport.dialogs[0].action.gt = s6_zero;

s6_zero.dialogs[0].action.gt = s7_balcony;

s7_balcony.dialogs[0].action.gt = s8_livingroom;

s8_livingroom.dialogs[0].action.gt = s9_bedroom;

s9_bedroom.dialogs[0].action.gt = s10_outdoor;

/*s10_outdoor.dialogs[38].action.gt = s12_fail;
s10_outdoor.dialogs[53].action.gt = s11_win;*/

s11_newphew.items[0].action.gt = s1_start;

s12_nurse.items[0].action.gt = s1_start;

s13_accident.items[0].action.gt = s1_start;


/////////////////////////////////////////////////////////////itemAction

var beenScene = [];

var continueScene = '';

scenes.push(new Scene(mainDiv,s1_start));