/////////////////////////////////////Scene
function Scene(mainDiv,s){
    var the = this;
    var S = s;
     
    if(beenScene.indexOf(s.name)==-1){
        var tempS = sceneTail(s.name);
        if(tempS!='_back'){
            beenScene.push(s.name);
        }
    }
   
    function sceneTail(t){
        var tempIndex = t.lastIndexOf('_');
        var tempS = t.slice(tempIndex);
        return tempS;
    }
    
    var oldNode = mainDiv.childNodes;
    if(oldNode.length){
        mainDiv.innerHTML = '';
    }
    
    var mainDiv = document.getElementById('mainDiv');
    var draw = SVG('mainDiv').size(1024,768);
    var the = this;
    
    var bgImg = document.createElement('img');
    bgImg.setAttribute('src',s.bg);
    bgImg.setAttribute('id','bgImg');
    bgImg.style.position = 'absolute';
    bgImg.style.top = '0px';
    bgImg.style.bottom = '0px';
    bgImg.style.left = '0px';
    bgImg.style.right = '0px';
    bgImg.style.height = '768px';
    bgImg.style.width = '100%';
    bgImg.style.margin = 'auto';
    bgImg.style.zIndex = -1;
    mainDiv.appendChild(bgImg);
    
    if(s.name!='s11_nephew'&&s.name!='s12_nurse'&&s.name!='s13_accident'){
        the.zeroButton = draw.image('image/button_zero_0.png');

        the.zeroButton.on('mouseover',zeroMouseover);
        the.zeroButton.on('mouseout',zeroMouseoout);
        the.zeroButton.on('click',zeroClick);
    }
    
    var items = [];
    var dialogs;
    
    var itemWindowShow = {isWShow:false};
    
    var setItemActOnce = false;
    
    var haveToItem = [];
    
    var zDiv = '';
    var zD;
    var zeroBG;
    var zeroOption = [];
    var zeroOpNext;
    var zeroOptionT = [];
    
    this.showNephew = true;
    this.showNurse = true;
    
    function zeroMouseover(){
        the.zeroButton.load('image/button_zero_1.png');
    }
    
    function zeroMouseoout(){
        the.zeroButton.load('image/button_zero_0.png');
    }
    
    function zeroClick(e){
        e.stopPropagation();
        if((!dialogs||(dialogs&&!dialogs.show))&&!zDiv){
            showZeroDialog();
            //document.addEventListener('click',outZeroDialog);
        }
    }
    
    function showZeroDialog(){
        
        zDiv = document.createElement('div');
        zDiv.setAttribute('id','dialogWindow');
        mainDiv.appendChild(zDiv);
        
        zD = SVG('dialogWindow').size(1024,791);
        zeroBG = zD.image('image/frame_ben.png').opacity(1);
        zeroBG.on('click',zeroBGClick);
        
        if(zeroOption.length){
            zeroOption = [];
        }
        
        if(beenScene.length<=9&&(beenScene.indexOf('s10_outdoor')==-1)&&s.next!=''){
            zeroOption.push({text:"I'm ready to go to next scene.",scene:'next'});
        }
        for(var i=0;i<beenScene.length;i++){
            if((beenScene[i] == 's3_outside')&&(beenScene[i]!=s.name)&&(s.name!='s3_outside_back')&&(continueScene.name!=beenScene[i])){
                zeroOption.push({text:'I want to see the dead',scene:'s3_outside'});
                continue;
            }
            else if((beenScene[i] == 's5_deathreport')&&(beenScene[i]!=s.name)&&(s.name!='s5_deathreport_back')&&(continueScene.name!=beenScene[i])){
                zeroOption.push({text:'I want to see the death report',scene:'s5_deathreport'});
            }
            else if((beenScene[i] == 's7_balcony')&&(beenScene[i]!=s.name)&&(s.name!='s7_balcony_back')&&(continueScene.name!=beenScene[i])){
                zeroOption.push({text:'I want to go to balcony',scene:'s7_balcony'});
            }
            else if((beenScene[i] == 's8_livingroom')&&(beenScene[i]!=s.name)&&(s.name!='s8_livingroom_back')&&(continueScene.name!=beenScene[i])){
                zeroOption.push({text:'I want to go to livingroom',scene:'s8_livingroom'});
            }
            else if((beenScene[i] == 's9_bedroom')&&(beenScene[i]!=s.name)&&(s.name!='s9_bedroom_back')&&(continueScene.name!=beenScene[i])){
                zeroOption.push({text:'I want to go to bedroom',scene:'s9_bedroom'});
            }
            else if((beenScene[i] == 's10_outdoor')&&(beenScene[i]!=s.name)&&(s.name!='s10_outdoor_back')&&(continueScene.name!=beenScene[i])){
                zeroOption.push({text:'I want to go to ask the two suspects',scene:'s10_outdoor'});
            }
        }
        if(continueScene!=''){
            zeroOption.push({text:'I want to continue my detection',scene:'continueScene'});
        }
        if(dialogs&&dialogs.showDialog!=-1){
            zeroOption.push({text:'Now, I think we can talk about this case!',scene:'case'});
        }
        
        zeroOption.push({text:"nothing",scene:'back'});
        muchNext = Math.floor(zeroOption.length/3);
        if(!(zeroOption.length%3)){
            muchNext--;
        }
        drawZeroOption();
    }
    
    var whichNext = 0;
    var muchNext = 0;
    function drawZeroOption(){
        if(s.name=='s10_outdoor'){
            the.showNephew = false;
            the.showNurse = false;
        }
        for(var i=0;i<zeroOptionT.length;i++){
            zeroOptionT[i].remove();
        }
        zeroOptionT = [];
        if(Math.floor(zeroOption.length/4)){
            drawZeroOpNext();
        }
        var tempOption = zeroOption.slice(whichNext*3);
        var tempEnd = (tempOption.length>=3)?3:tempOption.length;
        for(var i=0;i<tempEnd;i++){
            zeroOptionT.push(new ZeroOption(zD,tempOption[i].text,tempOption[i].scene,250,40*i+650));
        }
    }
    
    function ZeroOption(D,t,scene,x,y){
        var zeroThe = this;
        this.scene = scene;
        this.t = D.text(t).move(x,y).fill('white');
        
        this.t.on('mouseover',zeroOptionOver);
        this.t.on('mouseout',zeroOptionOut);
        this.t.on('click',zeroOptionClick);
        
        function zeroOptionOver(){
            zeroThe.t.fill('#aaaaaa');
        }
        
        function zeroOptionOut(){
            zeroThe.t.fill('#f1f1f1');
        }
        
        function zeroOptionClick(e){
            e.stopPropagation();
            if(zeroThe.scene=='next'){
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,s.next));
            }
            if(zeroThe.scene=='s3_outside'){
                var tempS = sceneTail(s.name);
                if(tempS!='_back'){
                     continueScene = s;
                }
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,s3_outside_back));
            }
            if(zeroThe.scene=='s5_deathreport'){
                var tempS = sceneTail(s.name);
                if(tempS!='_back'){
                     continueScene = s;
                }
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,s5_deathreport_back));
            }
            if(zeroThe.scene=='s7_balcony'){
                var tempS = sceneTail(s.name);
                if(tempS!='_back'){
                     continueScene = s;
                }
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,s7_balcony_back));
            }
            if(zeroThe.scene=='s8_livingroom'){
                var tempS = sceneTail(s.name);
                if(tempS!='_back'){
                     continueScene = s;
                }
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,s8_livingroom_back));
            }
            if(zeroThe.scene=='s9_bedroom'){
                var tempS = sceneTail(s.name);
                if(tempS!='_back'){
                     continueScene = s;
                }
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,s9_bedroom_back));
            }
            if(zeroThe.scene=='s10_outdoor'){
                var tempS = sceneTail(s.name);
                if(tempS!='_back'){
                     continueScene = s;
                }
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,s10_outdoor));
            }
            if(zeroThe.scene=='continueScene'){
                var temp = continueScene;
                continueScene = '';
                var tempS = scenes.pop();
                tempS.removeScene();
                scenes.push(new Scene(mainDiv,temp));
            }
            if(zeroThe.scene=='case'){
                removeZeroDialog();
                //dialogs.show = true;
                dialogs.dialogDone = true;
            }
            if(zeroThe.scene=='back'){
                console.log('back');
                if(s.name=='s10_outdoor'){
                    console.log('back_');
                    the.showNephew = true;
                    the.showNurse = true;
                }
               removeZeroDialog();
            }
        }
        
        this.remove = function(){
            zeroThe.t.off();
            zeroThe.t.remove();
        }
    }
    
    function drawZeroOpNext(){
        zeroOpNext = zD.image('image/item/next_0.png').move(700,700);
        zeroOpNext.on('mouseover',zeroOpNextMOver);
        zeroOpNext.on('mouseout',zeroOpNextMOut);
        zeroOpNext.on('click',zeroOpNextClick);
    }
    
    function zeroOpNextClick(e){
        e.stopPropagation();
        whichNext = (++whichNext)%(muchNext+1);
        drawZeroOption();
    }
    
    function zeroOpNextMOver(){
        zeroOpNext.load('image/item/next_1.png');
    }
    
    function zeroOpNextMOut(){
        zeroOpNext.load('image/item/next_0.png');
    }
    
    function outZeroDialog(){
        removeZeroDialog();
        document.removeEventListener('click',outZeroDialog);
    }
    
    function zeroBGClick(e){
        //e.stopPropagation();
    }
    
    function removeZeroDialog(){
        if(zDiv!=''){
            zeroBG.remove();
            zD.remove();
            mainDiv.removeChild(zDiv);
            zDiv = '';
        }
    }
    
    if(s.items.length){
        for(var i=0;i<s.items.length;i++){
            items.push(new Item(draw,s.items[i],itemWindowShow,s.name));
            if(s.items[i].action.haveToCheck){
                haveToItem.push(items[i]);
            }
        }
    }
    
    if(s.dialogs.length){
        dialogs = new Dialog(mainDiv,s.dialogs,draw,s.showDialog);
    }
    
    var intervalNum = setInterval(action,10);
    
    var addZeroButtonOnce = true;
    var showNephewOnce = false;
    var showNurseOnce = false;
    function action(){
        for(var i=0;i<items.length;i++){
            if(items[i].showDialog!=-1){
                if(!dialogs.showDialogOnce){
                    dialogs.showDialog = items[i].showDialog;
                    dialogs.show = true;
                    dialogs.showDialogOnce = true;
                    items[i].showDialog = -1;
                    break;
                }else{
                    break;
                }
            }
        }
        
        for(var i=0;i<items.length;i++){
            items[i].checkAct();
        }
        
        var count = 0;
        for(var i=0;i<haveToItem.length;i++){
            if(!haveToItem[i].clicked){
                break;
            }
            count++;
        }
        if(haveToItem.length&&(count==haveToItem.length)){
            dialogs.show = true;
            for(var i=0;i<items.length;i++){
                items[i].isAct = false;
            }
            haveToItem = [];
        }
        
        if(s.dialogs.length){
            dialogs.checkAct();
            if(dialogs.doneItem){
                   for(var i=0;i<items.length;i++){
                        items[i].isAct = true;
                    }
                    setItemActOnce = true;
                dialogs.doneItem = false;
            }
        }

        if(s.dialogs.length){
            if(dialogs.show){
                for(var i=0;i<items.length;i++){
                    items[i].isAct = false;
                }
            }
        }
        
        if(s.name=='s10_outdoor'){
            console.log(showNephewOnce,the.showNephew);
            if(!showNephewOnce&&the.showNephew){
                for(var k=0;k<items.length;k++){
                    console.log(items);
                    if(items[k].pic == 'image/scene_outdoor/item_nephew_0.png'){
                        items[k].isShow = true;
                        showNephewOnce = true;
                    }
                }
            }
            if(showNephewOnce&&!the.showNephew){
                for(var k=0;k<items.length;k++){
                    if(items[k].pic == 'image/scene_outdoor/item_nephew_0.png'){
                        items[k].isShow = false;
                        showNephewOnce = false;
                    }
                }
            }
            if(!showNurseOnce&&the.showNurse){
                for(var k=0;k<items.length;k++){
                    console.log(items);
                    if(items[k].pic == 'image/scene_outdoor/item_nurse_0.png'){
                        items[k].isShow = true;
                        showNurseOnce = true;
                    }
                }
            }
            if(showNurseOnce&&!the.showNurse){
                for(var k=0;k<items.length;k++){
                    if(items[k].pic == 'image/scene_outdoor/item_nurse_0.png'){
                        items[k].isShow = false;
                        showNurseOnce = false;
                    }
                }
            }
        }
        
        if(s.name!='s11_newphew'&&s.name!='s12_nurse'&&s.name!='s13_accident'){
            if((!dialogs||dialogs&&!dialogs.show)&&s.name!='s4_outside_zero'&&s.name!='s1_start'){
                if(!addZeroButtonOnce){
                    the.zeroButton.opacity(1);
                    the.zeroButton.on('mouseover',zeroMouseover);
                    the.zeroButton.on('mouseout',zeroMouseoout);
                    the.zeroButton.on('click',zeroClick);
                    addZeroButtonOnce = true;
                }
            }else{
                if(addZeroButtonOnce){
                    the.zeroButton.opacity(0);
                    the.zeroButton.off();
                    addZeroButtonOnce = false;
                }
            }
        }
    }
    
    this.removeScene = function(){
        clearInterval(intervalNum);
        var num = items.length;
        for(var i=0;i<num;i++){
            var temp = items.pop();
            temp.removeItem();
        }
        if(dialogs){
            dialogs.removeDialog();
        }
        mainDiv.removeChild(bgImg);
    }
}
/////////////////////////////////////Scene