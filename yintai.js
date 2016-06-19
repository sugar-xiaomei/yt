$(function(){
   function one(){
	  	var dingwei1=document.querySelector(".daoone1");
	  	var weiding=document.querySelector(".weiding");
      var wewe=document.querySelector(".wewe");
	  	var daoone2=document.querySelector(".daoone2");
	  	var shouding=document.querySelector(".shouding");
      var jishou=document.querySelector(".jishou");
      var jsou=document.querySelector(".jsou");

      var dingwei3=document.querySelector("#dingwei3");
	  	var wdyt=document.querySelector(".wdyt");
	  	// console.log(dingwei3,wdyt)
	  	var gouwudai=document.querySelector(".gouwudai");
	  	var gouding=document.querySelector(".gouding");

	  	dingwei1.onmouseover=function(){
	  		weiding.style.display="block";
        wewe.style.display="block";
	  	}
	  	dingwei1.onmouseout=function(){
	  		weiding.style.display="none";
        wewe.style.display="none";
	  	}
	  	daoone2.onmouseover=function(){
	  		shouding.style.display="block";

        jsou.style.display="none";
        jishou.style.display="block";
	  	}
	  	daoone2.onmouseout=function(){
	  		shouding.style.display="none";
        jishou.style.display="none";
        jsou.style.display="block";
	  	}
	  	dingwei3.onmouseover=function(){
	  		wdyt.style.display="block";
	  	}
	  	dingwei3.onmouseout=function(){
	  		wdyt.style.display="none";
	  	}
	  	gouwudai.onmouseover=function(){
	  		gouding.style.display="block";
	  	}
	  	gouwudai.onmouseout=function(){
	  		gouding.style.display="none";
	  	}
   }one();
function two(){//选项卡
        var ta=document.querySelector('.jiao');
        console.log(ta)
        var ccz=document.querySelectorAll(".ccz");
        // console.log(ccz.length)
        var czt=document.querySelector(".czt");
        var chaozhi=document.querySelectorAll(".chaozhi");
        // console.log(chaozhi.length);
        var menmen=document.querySelectorAll(".menmen");
        var gezi=document.querySelectorAll(".gezi");
        var remen=document.querySelector('.remen');
        for(var i=0;i<ccz.length;i++){
          ccz[i].index=i;
          ccz[i].style.fontWeight="normal";
          ccz[i].style.borderColor="#333333";
          ccz[i].onmouseover=function(){
             ccz[this.index].style.fontWeight='bold';
             ccz[this.index].style.borderColor='#E5004F';
             for(var j=0;j<ccz.length;j++){
              chaozhi[j].style.display="none";
             }
            chaozhi[this.index].style.display="block";

            }
            ccz[i].onmouseout=function(){
              ccz[this.index].style.fontWeight="normal";
              ccz[this.index].style.borderColor="#333333";

            }
        }
         for(var i=0;i<menmen.length;i++){
        	menmen[i].index=i;
            menmen[i].onmouseover=function(){
              menmen[this.index].style.fontWeight='bold';
              menmen[this.index].style.borderColor="#e5004f"
            	for(var j=0;j<gezi.length;j++){
            		gezi[j].style.display="none";
            	}
            	gezi[this.index].style.display="block";
            }
            menmen[i].onmouseout=function(){
              menmen[this.index].style.fontWeight='normal';
              menmen[this.index].style.borderColor="#333"

            }
        }

}two();


//大轮播
function  lunbo(obj){
       var box=obj;
       var ssleft=$(".ssleft",obj)[0];
       var ssright=$(".ssright",obj)[0];
       var imgs=$(".imgs",obj);
       var dians=$(".dian",obj);
       var n=0;
       var next=n+1;
       var t=setInterval(move,2000);
       var w=parseInt(getStyle(imgs[0],"width"));
       function move(){
         next=n+1;
         if(next>=imgs.length){
           next=0;
         }
         for(var i=0;i<imgs.length;i++){
            dians[i].style.background="#6E6E6E";
          }
           dians[next].style.background=" #D9084F";
           imgs[next].style.left=w+"px";
           animate(imgs[n],{left:-w},500);
           animate(imgs[next],{left:0},500);
           n=next;
        }
       function move1(){
           next=n-1;
             if(next<=0){
              next=imgs.length-1;
             }
             for(var i=0;i<imgs.length;i++){
               dians[i].style.background="#6E6E6E";
             }
             dians[next].style.background="#D9084F";
             imgs[next].style.left=-w+"px";
             animate(imgs[n],{left:w},500);
             animate(imgs[next],{left:0},500);
             n=next;
       }
        box.onmouseover=function(){
           clearInterval(t);
        }
         box.onmouseout=function(){
          t=setInterval(move,2000);
        }
        for(var i=0;i<imgs.length;i++){
                 dians[i].index=i;
                  dians[i].onmouseover=function(){
                    if(this.index==n){
                        return;
                     }else if(this.index>n){
                         for(var j=0;j<imgs.length;j++){
                           dians[j].style.background="#6e6e6e";
                         } dians[this.index].style.background="#D9084F";
                          imgs[this.index].style.left=w+"px";
                          animate(imgs[n],{left:-w},300);
                          animate(imgs[this.index],{left:0},300);
                          n=this.index;
                        }else if(this.index<n){
                           for(var j=0;j<imgs.length;j++){
                           dians[j].style.background="#6e6e6e";
                         } dians[this.index].style.background="#D9084F";
                          imgs[this.index].style.left=-w+"px";  //设置需要的那张
                          animate(imgs[n],{left:w},300);
                          animate(imgs[this.index],{left:0},300);
                           n=this.index;
                       }
                  }
          }
     ssleft.onclick=function(){
          move();
      }
      ssright.onclick=function(){
          move();
      }
}
var box=$(".shitu");
for(var i=0;i<box.length;i++){
  lunbo(box[i]);
}

//小轮播
function  xlunbo(obj){
       var box1=obj;
       var shileft=$(".shileft");
       var shiright=$(".shiright");
       var tupp=$(".tupp ",obj);
       var n=0;
       var next=n+1;
       var t=setInterval(move,5000);
       var w=parseInt(getStyle(tupp[0],"width"));
       var kaiguan=true;
       function move(){
         kaiguan=false;
         next=n+1;
         if(next>=tupp.length){
           next=0;
         }
         tupp[next].style.left=w+"px";
         animate(tupp[n],{left:-w},1000);
         animate(tupp[next],{left:0},1000,function(){kaiguan=true; });
         n=next;
        }
       function move1(){
           kaiguan=false;
           next=n-1;
             if(next<=0){
              next=tupp.length-1;
             }
             tupp[next].style.left=-w+"px";
             animate(tupp[n],{left:w},1000);
             animate(tupp[next],{left:0},1000,function(){
              kaiguan=true;
             });
             n=next;
       }
        box1.onmouseover=function(){
          clearInterval(t);
        }
         box1.onmouseout=function(){
          t=setInterval(move,5000);
        }
        shileft.onclick=function(){
               move();
        }
        shiright.onclick=function(){
             move1();
        }
}
var box1=$(".xiaoshishang");
for(var i=0;i<box1.length;i++){
   xlunbo(box1[i]);
}

function three(){//banner 透明度轮播
        var bannerbox=document.querySelector(".bannerbox");
        var banner=document.getElementsByClassName("banner");
        console.log(banner.length)
        var circle=document.querySelector(".circle");
        var lis=document.querySelectorAll(".lis");
        var boxright=document.querySelector(".boxright");
        var boxleft=document.querySelector(".boxleft");
        var n=0;
        var next=0;
        var t=setInterval(move,2000);
        function move(){
          flag=false;
          next=n+1;
          if(next>=banner.length){
            next=0;
          }
          for(var i=0;i<banner.length;i++){
            lis[i].style.background="#211616";
          }lis[next].style.background=" #E5004F";
          banner[next].style.opacity=0;
          animate(banner[n],{opacity:0},500);
          animate(banner[next],{opacity:1},500);
          n=next;
        }
        function move1(){
            next=n-1;
            if(next<=0){
              next=banner.length-1;
            }
            for(var i=0;i<banner.length;i++){
             lis[i].style.background="#211616";
          }  lis[next].style.background="#E5004F";
             banner[next].style.opacity=0;
             animate(banner[n],{opacity:0},500);
             animate(banner[next],{opacity:1},500);
             n=next;
        }
        bannerbox.onmouseover=function(){
          clearInterval(t);
        }
        bannerbox.onmouseout=function(){
          t=setInterval(move,2000);
        }
        boxleft.onclick=function(){        //右点击事件
            move1();
        }
        boxright.onclick=function(){
              move();
        }
        //小圆点轮播
        for(var i=0;i<lis.length;i++){
          lis[i].index=i;
          lis[i].onmouseover=function(){
            if(this.index==n){
              return;
            }else if(this.index>n){
                for(var j=0;j<lis.length;j++){
                    lis[j].style.background="#211616";
                }
                lis[this.index].style.background="#E5004F";
                banner[next].style.opacity=0;
                animate(banner[n],{opacity:0},500);
                animate(banner[this.index],{opacity:1},500);
                n=this.index;
            }else if(this.index<n){
                for(var j=0;j<lis.length;j++){
                    lis[j].style.background="#211616";
                }
                 lis[this.index].style.background="#E5004F";
                 banner[next].style.opacity=0;
                 animate(banner[n],{opacity:0},500);
                 animate(banner[this.index],{opacity:1},500);
                 n=this.index;
            }
          }
        }
}three();
 function re(){
   $('.ar').onmouseover=function(){
      $('.minhui').style.display="block";
      $('.minhui2').style.display="block";
   }
 }
re();
// 楼层跳转
function tiaozhuan(){
    var box=$(".floor-nav")[0];
    var floor=$(".oppo");
    var lis=$(".opp");
    // console.log(lis.length)
    var width=document.documentElement.clientWidth;
    var height=document.documentElement.clientHeight;
    var bh=box.offsetHeight;  //获取box本身的高度
    //获取楼梯到body的高度
    box.style.top=(height-bh)/2+"px";
    //通过js给楼层的高度，让楼梯居中
    var sign=true;
    for(var i=0;i<lis.length;i++){
      lis[i].index=i;
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      //给当前所在楼层做标记
      lis[i].onclick=function(){//点击box内部的楼层
      sign=false;
      var top=floor[this.index].offsetTop;  //当前楼的高度距包含元素即文本的高度
       obj.scrollTop=top;
      //当前页面的高度赋给滚动条
      // 滚动条的高度 //兼容性
      animate(document.documentElement,{scrollTop:top},300,function(){
        sign=true;
      })
        ;
      animate(document.body,{scrollTop:top},300,function(){
        sign=true;
      });
      for(var i=0;i<lis.length;i++){
         lis[i].style.background='transparent';
         lis[i].style.innerHTML='';
        }
        lis[this.index].style.background="#E5004F";
        var aa=lis[this.index].getAttribute('nn');
        lis[this.index].innerHTML=aa;
       }
       //滑过的时候
        lis[i].onmouseover=function(){
          for(var i=0;i<lis.length;i++){
            lis[i].style.background='transparent';
            lis[i].innerHTML='';
          }
          lis[this.index].style.background='#E5004F';
          lis[this.index].style.color="#fff";
          var xx=lis[this.index].getAttribute('nn');
          lis[this.index].innerHTML=xx;
        }
    }

    /////点击返回顶部
     $('#w10').onclick=function(){
       var obj=document.documentElement.scrollTop?document.documentElement:document.body; //当前楼的高度距包含元素即文本的高度
        obj.scrollTop=0;
     }
        // 滚动事件 滚动到楼梯时楼梯变色  兼容性 滚动条的高度=box-窗口的高度 开关控制它的出现于消失
    var flag=true; //向下划是开关
    var flag1=true;  //向上划是开关
    window.onscroll=function(){
      if(!sign){
        return;
      }
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      //兼容性
      for(var i=0;i<floor.length;i++){
        //判断滚动条等于什么时页面应该出现
        if(obj.scrollTop>=floor[i].offsetTop-height+100){
          // alert(obj.scrollTop);
          for(var j=0;j<lis.length;j++){
            lis[j].style.background="transparent";
            lis[j].style.color="#fff";
            lis[j].innerHTML='';
          }
          var dd=lis[i].getAttribute('nn');
          lis[i].innerHTML=dd;
          lis[i].style.background='#E5004F';
        }
        if(obj.scrollTop>=floor[0].offsetTop-height+100){
          if(flag){
            flag=false;
            animate(box,{opacity:1},300,function(){
              flag1=true;
            });
            }
        }else{
          if(flag1){
          flag1=false;
          animate(box,{opacity:0},300,function(){
            flag=true;

          })
            }
          }
      }
    }
}
   tiaozhuan();

})
