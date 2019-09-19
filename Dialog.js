////////////////////////////////////Dialog
function Dialog(mainDiv,d,draw,showDialogId){
    var the = this;
    
    var mX = 820;
    var mY = 740;
    
    var dialogWindow;
    var drawD;
    var bg;
    var nextD;
    var txt;
    
    this.nowDialog;
    this.show = d[0].isShow;
    this.option;
    
    this.showDialog = -1;
    this.showDialogOnce = false;
    
    this.doneItem = false;
    
    var showOnce = false;
    var unshowOnce = false;
    
    this.optionLine = [];
    this.options = [];
    
    this.dialogDone = false;
    
    this.isClicked = [];
    
    for(var i=0;i<d.length;i++){
        if(d[i].action.haveToCheck){
            the.isClicked.push({dialog:d[i].text,isClicked:false});
        }
    }
    
    this.checkAct = function(){
        var dialog_count = 0;
        for(var i=0;i<the.isClicked.length;i++){
            if(!the.isClicked[i].isClicked){
                break;
            }
            dialog_count++;
        }

        if(the.isClicked.length&&(dialog_count==the.isClicked.length)){
            the.show = true;
            the.dialogDone = true;
        }

        if(the.dialogDone){
            the.removeDialog();
            the.dialogDone = false;
            
            for(var j=0;j<the.isClicked.length;j++){
                the.isClicked[j] = false;
            }
            
            the.nowDialog = d[showDialogId];
            
            the.option = the.nowDialog.isOption;
            the.show = the.nowDialog.isShow;
            showOnce = true;
            var newDrawD = redrawDialogBG(the.nowDialog);
            drawText(newDrawD,the.nowDialog);
            
            if(the.nowDialog.next!=-1){
                nextD = newDrawD.image('image/item/next_1.png').move(mX,mY);
                nextD.on('mouseover',nextMouseover);
            }else{
                if(!this.option){
                    nextD = newDrawD.image('image/item/close_1.png').move(mX,mY);
                    nextD.on('mouseover',closeMouseover);
                }
            }
            if(!this.option){
                nextD.on('click',the.next);
            }

            if(this.option){
                optionCheck();
            }
        }else if(this.show){
            if(!showOnce){
                if(the.showDialog!=-1){
                    the.nowDialog = d[the.showDialog];
                }else{
                    the.nowDialog = d[0];
                }
                
                the.option = the.nowDialog.isOption;
                
                var newDrawD = redrawDialogBG(the.nowDialog);
                
                drawText(newDrawD,the.nowDialog);
                
                if(the.nowDialog.next!=-1){
                    nextD = newDrawD.image('image/item/next_1.png').move(mX,mY);
                    nextD.on('mouseover',nextMouseover);
                }else{
                    if(!this.option){
                        nextD = newDrawD.image('image/item/close_1.png').move(mX,mY);
                        nextD.on('mouseover',closeMouseover);
                    }
                }
                if(!this.option){
                    nextD.on('click',the.next);
                }
                 
                if(this.option){
                    optionCheck();
                }
                
                showOnce = true;
                unshowOnce = false;
            }
        }else if(txt){
            if(!unshowOnce){
                removeDialogBG();
                removeDialogTXT();
                
                unshowOnce = true;
                showOnce = false;
            }
        }
    }
    
    this.next = function(e){
        e.stopPropagation();
        
        for(var i=0;i<the.isClicked.length;i++){
            if(the.nowDialog.text==the.isClicked[i].dialog){
                the.isClicked[i].isClicked = true;
            }
        }
        if(the.options.length){
            the.options = [];
        }
        if(the.optionLine.length){
            the.optionLine = [];
        }
        if(the.nowDialog.next!=-1){
            
            the.nowDialog = d[the.nowDialog.next];
            
            the.show = the.nowDialog.isShow;
            the.option = the.nowDialog.isOption;
            
            var newDrawD = redrawDialogBG(the.nowDialog);
           
            drawText(newDrawD,the.nowDialog);
            
            nextD = newDrawD.image('image/item/next_1.png').move(mX,mY);
            nextD.on('mouseover',nextMouseover);

            if(the.nowDialog.next==-1&&!the.option){
                if(the.option){
                    nextD.off();
                    nextD.remove();
                }else{
                    nextD.off();
                    nextD.remove();
                    nextD = drawD.image('image/item/close_1.png').move(mX,mY);
                    nextD.on('mouseover',closeMouseover);
                }
            }
            if(the.option){
                optionCheck();
            }
        }else{
            if(the.nowDialog.action.doneItem){
                the.doneItem = true;
                the.show = false;
                the.removeDialog();
            }
            if(the.nowDialog.action.gt!=''){
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,the.nowDialog.action.gt,draw));
            }
            if(the.nowDialog.action.gtDialog!=-1){
                the.showDialogOnce = false;
                the.nowDialog = d[the.nowDialog.action.gtDialog];
                
                the.option = the.nowDialog.isOption;
                the.show = the.nowDialog.isShow;
                
                the.doneItem = true;
                
                the.removeDialog();
            }
        }
    }
    
    function optionCheck(){
        splitOption(the.nowDialog.text);
        if(the.optionLine.length>=1){
            txt.remove();
            for(var i=0;i<the.optionLine.length;i++){
                var tempO = new Option(drawD,the.optionLine[i],the.nowDialog.action.next[i],i,the.optionLine.length,the.nowDialog.action.next[i],the.nowDialog.action.gt);
                the.options.push(tempO);
            }
        }else{
            txt.on('mouseover',mouseoverShow);
            txt.on('mouseout',mouseoutShow);
            txt.on('click',choose);
        }
        if(nextD){
            nextD.off();
            nextD.remove();
        }
    }
    
    function mouseoverShow(){
        txt.fill({color:'grey'});
    }
    
    function mouseoutShow(){
        txt.fill({color:'white'});
    }
    
    function choose(){
        if(the.nowDialog.action.gt!=''){
            var temp = scenes.pop();
            temp.removeScene();
            scenes.push(new Scene(mainDiv,the.nowDialog.action.gt,draw));
        }
    }
    
    function nextMouseover(){
        nextD.remove();
        nextD = drawD.image('image/item/next_0.png').move(mX,mY);
        nextD.on('mouseout',nextMouseout);
        nextD.on('click',the.next);
    }
    
    function closeMouseover(){
        nextD.remove();
        nextD = drawD.image('image/item/close_0.png').move(mX,mY);
        nextD.on('mouseout',closeMouseout);
        nextD.on('click',the.next);
    }
    
    function nextMouseout(){
        nextD.remove();
        nextD = drawD.image('image/item/next_1.png').move(mX,mY);
        nextD.on('mouseover',nextMouseover);
    }
    
    function closeMouseout(){
        nextD.remove();
        nextD = drawD.image('image/item/close_1.png').move(mX,mY);
        nextD.on('mouseover',closeMouseover);
    }
    
    this.removeDialog = function(){
        if(dialogWindow){
            if(scenes[scenes.length-1]){
                scenes[scenes.length-1].showNurse = true;
                scenes[scenes.length-1].showNephew = true; 
            }
            mainDiv.removeChild(dialogWindow);
            dialogWindow = '';
        }
        removeDialogBG();
        removeDialogTXT();
    }
    
    function removeDialogBG(){
        if(bg){
            bg.off();
            bg.remove();
        }
        if(nextD){
            nextD.off();
            nextD.remove();
        }
    }
    
    function removeDialogTXT(){
        if(txt){
            txt.off();
            txt.remove();
        }
    }
    
    function redrawDialogBG(nDialog){
        the.removeDialog();
        dialogWindow = document.createElement('div');    

        if(the.nowDialog.whichSay=='Zero'){
            scenes[scenes.length-1].showNurse = false;
            scenes[scenes.length-1].showNephew = false;
            dialogWindow.setAttribute('id','dialogWindow');
            mainDiv.appendChild(dialogWindow);
            drawD = SVG('dialogWindow').size(1024,791);
            bg = drawD.image('image/frame_zero.png').opacity(1);
        }
        if(the.nowDialog.whichSay=='Ben'){
            scenes[scenes.length-1].showNurse = false;
            scenes[scenes.length-1].showNephew = false;
            dialogWindow.setAttribute('id','dialogWindow');
            mainDiv.appendChild(dialogWindow);
            drawD = SVG('dialogWindow').size(1024,791);
            bg = drawD.image('image/frame_ben.png').opacity(1);
        }
        if(the.nowDialog.whichSay=='nurse'){
            scenes[scenes.length-1].showNurse = true;
            scenes[scenes.length-1].showNephew = false;
            dialogWindow.setAttribute('id','dialogWindow');
            mainDiv.appendChild(dialogWindow);
            drawD = SVG('dialogWindow').size(1024,791);
            bg = drawD.image('image/frame_nurse.png').opacity(1);
        }
        if(the.nowDialog.whichSay=='nephew'){
            scenes[scenes.length-1].showNurse = false;
            scenes[scenes.length-1].showNephew = true;
            dialogWindow.setAttribute('id','dialogWindow');
            mainDiv.appendChild(dialogWindow);
            drawD = SVG('dialogWindow').size(1024,791);
            bg = drawD.image('image/frame_nephew.png').opacity(1);
        }
        if(the.nowDialog.whichSay==''){
            scenes[scenes.length-1].showNurse = true;
            scenes[scenes.length-1].showNephew = true;
            dialogWindow.setAttribute('id','dialogWindow');
            mainDiv.appendChild(dialogWindow);
            drawD = SVG('dialogWindow').size(1024,791);
            bg = drawD.image('image/frame_blank.png').opacity(1);
        }
        return drawD;
    }
    
    function drawText(drawT,thisDialog){
        var w = drawT.width();
        var h = drawT.height();

        txt = drawT.text(thisDialog.text).fill({color:'white'}).opacity(1).font({family:'Arial Narrow',size:20});
        txt.move(w/2-txt.length()/2,300+h/2-txt.font('size')/2);
    }
    
    function Option(drawD,line,next,i,num,nex,gt){
        var theOption = this;
        
        this.icon = drawD.image('image/option.png').opacity(1);
        
        this.line = drawD.text(line).fill({color:'#aaaaaa'}).opacity(1).font({family:'Arial Narrow',size:18});
        
        var h = drawD.height();
        var gap = 9;
        var allH = this.line.font('size')*num+gap*(num-1);
        
        this.icon.move(165-this.line.font('size'),(308+(h/2-allH/2)+i*(this.line.font('size')+gap)));
        this.line.move(180,(305+(h/2-allH/2)+i*(this.line.font('size')+gap)));
        
        this.next = next;
        
        this.line.on('mouseover',optionMouseover);
        this.line.on('mouseout',optionMouseout);
        this.line.on('click',optionClick);
        
        function optionMouseover(){
            theOption.line.fill({color:'#fefefe'});
        }
        
        function optionMouseout(){
            theOption.line.fill({color:'#aaaaaa'});
        }
        
        function optionClick(){
            for(var i=0;i<the.options.length;i++){
                the.options[i].line.off();
                 the.options[i].line.remove();
            }
            
            if(nex==-1){
                var temp = scenes.pop();
                beenScene = [];
                console.log(beenScene);
                temp.removeScene();
                scenes.push(new Scene(mainDiv,s13_accident));
            }else if(nex==-2){
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,s10_outdoor));
            }else if(gt==''){
                 the.nowDialog = d[theOption.next];
            
                var newDrawD = redrawDialogBG(the.nowDialog);

                var w = newDrawD.width();
                var h = newDrawD.height();

                txt = newDrawD.text(the.nowDialog.text).fill({color:'white'}).opacity(1).font({family:'Arial Narrow',size:20});
                txt.move(w/2-txt.length()/2,300+h/2-txt.font('size')/2);

                if(the.nowDialog.next!=-1&&!the.nowDialog.isOption){
                    nextD = newDrawD.image('image/item/next_1.png').move(mX,mY);
                    nextD.on('mouseover',nextMouseover);
                }
                if(the.nowDialog.next==-1&&!the.nowDialog.isOption){
                    nextD = newDrawD.image('image/item/close_1.png').move(mX,mY);
                    nextD.on('mouseover',closeMouseover);
                }
            }else if(gt!=''){
                var temp = scenes.pop();
                temp.removeScene();
                scenes.push(new Scene(mainDiv,gt));
            }
        }
    }
    
    function splitOption(t){
        var temp = t.split('%!%');
        for(var i =0;i<temp.length;i++){
            the.optionLine.push(temp[i]);
        }
    }
    
}
////////////////////////////////////Dialog