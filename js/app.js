$(document).ready(function(){
 
    
$('#guide').click(function(e){
  e.preventDefault()
  $('#overlay').removeClass("hidden")
  $("#content1").removeClass("hidden")
  $("#content2").addClass("hidden")
  $("#content3").addClass("hidden")
})
$('#guide2').click(function(e){
  e.preventDefault()
  $('#overlay2').removeClass("hidden")
  $("#content1").removeClass("hidden")
  $("#content2").addClass("hidden")
  $("#content3").addClass("hidden")
})

$("#determine_bahr").click(function(e){
  e.preventDefault()
  $('#overlay').removeClass("hidden")
  $("#content1").addClass("hidden")
  $("#content2").removeClass("hidden")
  $("#content3").addClass("hidden")
})


$("#close").click(function(e){
  e.preventDefault()
  $("#overlay").addClass("hidden")
})
$("#close2").click(function(e){
  e.preventDefault()
  $("#overlay2").addClass("hidden")
})

$("#button").click(function(e){
  e.preventDefault();
  if($("#sadr").val()=="" || $("#ajoz").val()==""){
    alert("  املأ الخانة الفارغة :أو أنظر إلى كيفية الاستعمال !!");
    e.preventDefault();
    $("#overlay2").removeClass("hidden");
  $("#overlay2").addClass("block");
  }else{
      const e1 = send($("#sadr").val());
      const e2 = send($("#ajoz").val(),true);
      console.log(e1,e2)
      if((!e1.found ||!e2.found) || e1.c!==e2.c){
        alert("الكتابة العروضية او الشكل غير صحيح")  
      }else{
        $("#bayt1").text($("#sadr").val())
        $("#bayt2").text($("#ajoz").val())
        $("#ta9ti31").text((e1.a.split(".")).reverse().join(" "))
        $("#ta9ti32").text((e2.a.split(".")).reverse().join(" "))
        $("#taf3ila1").text(e1.b)
        $("#taf3ila2").text(e2.b)
        $("#zi7af1").text(e1.e)
        $("#zi7af2").text(e2.e)
        $("#darb").text(e1.d)
        $("#3ard").text(e2.d)
        $("#9afia").text(e2.f+"----"+e2.j)
        $("#bahr").text(e1.c)

        $("#content1").addClass("hidden")
        $("#content2").addClass("hidden")
        $("#content3").removeClass("hidden")
      }
  }
})
})



//[1575,1608,1610].includes(elm[0])&&elm[1]==1618)||
let charCodeArray = []
function send(input,kafia=false){
  const charcode = input.split("").filter(elm =>elm.charCodeAt(0)!==32&&elm.charCodeAt(0)!==0&&elm.charCodeAt(0)!==10).map(elm => elm.charCodeAt(0))
  //kitaba 3arodia
  // console.log("3arodia : ",charcode)
  //rule 1 :
  //tanwin dam 1612 => dam 1615+  none sakina 1606 + 1618
  //tanwin fat7 1611  => fat7 1614+  none sakina 1606 + 1618
  //tanwin kasr 1613  => kasr 1616+  none sakina 1606 + 1618
  charcode.map(
    (elm,index) => 
    {
    charCodeArray.push(elm)
    if(![1614,1615,1616,1618].includes(elm) && ![1614,1615,1616,1618].includes(charcode[index+1])){
      charCodeArray.push(1618)
    }
    })
  var chunks = charCodeArray.map((elm,index)=>{if(index%2==0){return charCodeArray.slice(index,index+2)}}).filter(elm => elm!==undefined)
  var harakat = chunks.map(elm => {
    if(elm[1]==1618){return "0"}
    else{return "|"}
  }).filter(elm=>elm!==undefined)
  var mot=harakat.join(".")
  var dvfdvfd = ba7rs.filter(elm => elm.a==mot);
  if(kafia){
    let kafia_code = []
    let kafia_ta9ti3 = []
    let cnt1=0
    let cnt2=0
     const reversed_array = charCodeArray.reverse();
     const reversed_array_ta9ti3 = harakat.reverse();
     for(let i=0;i<reversed_array.length;i++){
        kafia_code.push(reversed_array[i])
        if(reversed_array[i]==1618){
          cnt1++;
        }
        if(cnt1==2){
          kafia_code.push(reversed_array[i+1])
          kafia_code.push(reversed_array[i+2])
          kafia_code.push(reversed_array[i+3])
          break;
        }
     }
     for(let i =0;i<reversed_array_ta9ti3.length;i++){
         kafia_ta9ti3.push(reversed_array_ta9ti3[i])
         if(reversed_array_ta9ti3[i]=="0"){
          cnt2++;
         }
         if(cnt2==2){
          kafia_ta9ti3.push(reversed_array_ta9ti3[i+1])
          break;
        }
     }
     const kafia = kafia_code.reverse().map(elm => String.fromCharCode(elm)).join("")
     dvfdvfd = [{...dvfdvfd[0],f:kafia,j:kafia_ta9ti3.reverse().join(".")}]
  }
  charCodeArray=[]
  if(dvfdvfd.length>0){
    
    return {...dvfdvfd[0], found:true}
  }else{
    return {found:false}
  }
}





