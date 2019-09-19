//////////////////////////////////////Item
function Item(draw,it,itemWindowShow,name){
    var the = this;
    
    var doActOnce = false;
    var unActOnce = false;
    
    var item = draw.image(it.pic).move(it.x,it.y);
    
    var gif;
    var linePic;
    
    var itemWindow;
    var drawI;
    var itemWindowBG;
    var itemDitail;
    var itemWindowClose;
    
    this.clicked = false;
    
    this.showDialog = -1;
    
    this.isAct = it.isAct;
    this.isShow = true;
    this.pic = it.pic;
    
    this.checkAct = function(){
        if(the.isAct&&!itemWindowShow.isWShow){
            if(!doActOnce){
                item.on('mouseover',mouseOverShow);//move
                item.on('mouseout',mouseOutShow);//move
                
                
                var tempL = it.pic.split('_');

                if(tempL.length>1){
                    var tempIndex = it.pic.lastIndexOf('_');
                    linePic = it.pic.substring(0,tempIndex) + '_1.png';
                }else{
                    var pos = it.pic.indexOf('.');
                    linePic = it.pic.substring(0,pos);
                    linePic += '.gif';
                }

                doActOnce = true;
                unActOnce = false;
            }
        }else if(item||gif){
            if(!unActOnce){
                removeGif();
                item.off();
                item.opacity(1);
                unActOnce = true;
                doActOnce = false;
            }
        }
        if(!the.isShow){
            item.opacity(0);
        }else{
            item.opacity(1);
        }
    }
    
    function mouseOverShow(e){
        item.load(linePic);
        item.on('click',clickItem);
    }
    
    function mouseOutShow(e){
        item.load(it.pic);
        item.off('click',clickItem);
    }
    
    function clickItem(e){
        e.stopPropagation();
       if(it.action.gt!=''){
           console.log('gt');
           if(name=='s11_nephew'||name=='s12_nurse'||name=='s13_accident'){
               beenScene = [];
           }
            var temp = scenes.pop();
            temp.removeScene();
            scenes.push(new Scene(mainDiv,it.action.gt,draw));
        }else{
            if(it.action.doneDig!=-1){
                the.showDialog = it.action.doneDig;
            }
            if(it.itemWindow){
                itemWindow = document.createElement('div');
                itemWindow.setAttribute('id','itemWindow');
                mainDiv.appendChild(itemWindow);
                drawI = SVG('itemWindow').size(776,497);
                itemWindowBG = drawI.image('image/itemWindow_bg.png').opacity(1);
                itemWindowBG.on('click',itemWindowClick);

                itemDitail = drawI.image(it.itemWindow);
                itemDitail.move(0,0);
                itemDitail.on('click',itemWindowClick);
                
                itemWindowClose = drawI.image('image/item/close_1.png').opacity(1).move(776/2,496-50);
                itemWindowClose.on('mouseover',itemWindowCloseOver);
                itemWindowClose.on('mouseout',itemWindowCloseOut);
                itemWindowClose.on('click',itemWindowCloseClick);
                
                the.isAct = false;
                item.off();
                removeGif();
                item.opacity(1);
                document.addEventListener('click',outItemWindow);

                itemWindowShow.isWShow = true;
            }
        }
    }
    
    function itemWindowCloseOver(){
        itemWindowClose.load('image/item/close_0.png');
    }
    
    function itemWindowCloseOut(){
        itemWindowClose.load('image/item/close_1.png');
    }
    
    function itemWindowCloseClick(e){
        outItemWindow(e);
    }
    
    function outItemWindow(e){
        e.stopPropagation();
        item.load(it.pic);
        the.clicked = true;
        mainDiv.removeChild(itemWindow);
        itemWindowBG.off();
        itemWindowBG.remove();
        itemDitail.remove();
        drawI.remove();
        the.isAct = true;
        document.removeEventListener('click',outItemWindow);
        
        itemWindowShow.isWShow = false;
        
        if(it.action.doneGt!=''){
            var temp = scenes.pop();
            temp.removeScene();
            scenes.push(new Scene(mainDiv,it.action.doneGt,draw));
        }
        if(it.doneDig!=-1){
            //console.log('doneDig');
        }
    }
    
    this.removeItem = function(){
        removeItem();
        removeGif();
    }

    function removeItem(){
        if(item){
            item.off();
            item.remove(); 
        }
    }

    function removeGif(){
        if(gif){
            gif.off();
            gif.remove();
        }
    }
    
    function itemWindowClick(e){
        e.stopPropagation();
    }
    
        //------move
/*    item.on('click',clickItem);
    var dx;
    var dy;
    var isMove = false;
    function clickItem(e){
        e.stopPropagation();
        if(!isMove){
            dx = item.x() - e.pageX;
            dy = item.y() - e.pageY;
            document.addEventListener('mousemove',mousemove);
            isMove = true;
        }else{
            document.removeEventListener('mousemove',mousemove);
            isMove = false;
        }

    }
    function mousemove(e){
        item.move(e.pageX + dx,e.pageY + dy);
    }*/
    //-------move
}
//////////////////////////////////////Item