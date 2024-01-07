const data = `
  else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِيلُنْ  '
     B.textContent=taweel
     K.textContent=kt1 
     Aala.textContent='العلة التي ذخلت على البيت هي :'+Kap
}
   else  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِيلُنْ  '
     B.textContent=taweel
     K.textContent=kt1
     Aala.textContent='العلة التي ذخلت على البيت هي :'+Kap
   }
   else  if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِيلُنْ  '
    B.textContent=taweel
    K.textContent=kt1
     Aala.textContent=Aila+Kap
   }
/*مقبوضة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُنْ  '
  B.textContent=taweel
  K.textContent=kt2 
}
else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُنْ  '
  B.textContent=taweel
  K.textContent=kt2 
  Aala.textContent=Aila+Kap
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِلُنْ  '
  B.textContent=taweel
  K.textContent=kt2
  Aala.textContent=Aila+Kap
}
else  if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
 D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِلُنْ  '
 B.textContent=taweel
 K.textContent=kt2
  Aala.textContent=Aila+Kap
}

/*محذوفة*/
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِي  '
  B.textContent=taweel
  K.textContent=kt3 
  Aala.textContent=Aila+Kap
}
else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِي  '
  B.textContent=taweel
  K.textContent=kt3 
  Aala.textContent=Aila+Kap
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِي  '
  B.textContent=taweel
  K.textContent=kt3
  Aala.textContent=Aila+Kap
}
else  if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
 D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِي  '
 B.textContent=taweel
 K.textContent=kt3
  Aala.textContent=Aila+Kap
}
      /*البسيط ------------------------------------------------------------------*/ 
       /*البسيط التام */
       /*عروضه صحيحة */
   if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=kt1
} 
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلٌنْ '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=kt1
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=kt1
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=kt1
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=kt1
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=kt1
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=kt1
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=kt1
        Aala.textContent=Aila+Aa
} 

  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Ab
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Ab
}
   else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Ab
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و '+Ac
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و '+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و '+Ac
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Ac
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+Ac
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+ Aa +' و '+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=kt1
     Aala.textContent=Aila+ Aa +' و '+Ac
}


 /*عروضه مخبونة */

 if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkhb
} 
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkhb
     Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkhb
     Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkhb
     Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkhb
     Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و'+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkhb
     Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkhb
     Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَعِلُنْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkhb
     Aala.textContent=Aila+Aa
} 

else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و'+Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و'+Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و'+Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و'+Ab
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و'+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و '+Ac
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و '+Ac
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و '+Ac
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Ac
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Ac
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+Ac
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+ Aa +' و '+Ac
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ '
  B.textContent=BAS +' '+'جاء هنا '+ Tam 
  K.textContent=mkhb
  Aala.textContent=Aila+ Aa +' و '+Ac
}

/*عروضه مقطوعة */
 if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = '  مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=mkta
} 
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=mkta
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=mkta
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=mkta
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=mkta
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=mkta
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلْ  '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=mkta
        Aala.textContent=Aila+Aa
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلْ  '
        B.textContent=BAS +' '+'جاء هنا '+ Tam 
        K.textContent=mkta
        Aala.textContent=Aila+Aa
} 

  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Ab
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Ab
}
   else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Ab
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و '+Ac
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و '+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و '+Ac
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Ac
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+Ac
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+ Aa +' و '+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  فَاعِلْ '
     B.textContent=BAS +' '+'جاء هنا '+ Tam 
     K.textContent=mkta
     Aala.textContent=Aila+ Aa +' و '+Ac
}
/*البسيط  المجزوء*/
  /*  1 عروضه صحيحة */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  '
    B.textContent=BAS +' '+'جاء هنا '+ Mj 
    K.textContent=kt1
}  
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  '
    B.textContent=BAS +' '+'جاء هنا '+ Mj 
    K.textContent=kt1
    Aala.textContent=Aila+Aa
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  '
    B.textContent=BAS +' '+'جاء هنا '+ Mj 
    K.textContent=kt1
    Aala.textContent=Aila+Aa
}
  else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  '
    B.textContent=BAS +' '+'جاء هنا '+ Mj 
    K.textContent=kt1
    Aala.textContent=Aila+Aa
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  '
    B.textContent=BAS +' '+'جاء هنا '+ Mj 
    K.textContent=kt1
    Aala.textContent=Aila+Aa+' و'+Ab
}
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){ 
    D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  '
    B.textContent=BAS +' '+'جاء هنا '+ Mj 
    K.textContent=kt1
    Aala.textContent=Aila+Ab
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  '
    B.textContent=BAS +' '+'جاء هنا '+ Mj 
    K.textContent=kt1
    Aala.textContent=Aila+Aa+' و '+Ac
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  '
    B.textContent=BAS +' '+'جاء هنا '+ Mj 
    K.textContent=kt1
    Aala.textContent=Aila+Ac
}
 /*  عروضه صحيحة  مذيل */
 if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=ShihM
}  
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=ShihM
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=ShihM
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
  D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=ShihM
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=ShihM
  Aala.textContent=Aila+Aa+' و'+Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){ 
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=ShihM
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=ShihM
  Aala.textContent=Aila+Aa+' و '+Ac
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=ShihM
  Aala.textContent=Aila+Ac
}
/*   عروضه مقطوعة  */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=mkta
}  
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=mkta
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=mkta
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=mkta
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=mkta
  Aala.textContent=Aila+Aa+' و'+Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){ 
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=mkta
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=mkta
  Aala.textContent=Aila+Aa+' و '+Ac
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=mkta
  Aala.textContent=Aila+Ac
}
/*  مخلع البسيط */
const MkB='مخلع البسيط'
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَاعِلُنْ فَعُولُنْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=MkB
}  
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ فَعُولُنْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=MkB
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ فَعُولُنْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=MkB
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ فَعُولُنْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=MkB
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ فَعُولُنْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=MkB
  Aala.textContent=Aila+Aa+' و'+Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.0'){ 
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ فَعُولُنْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=MkB
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ فَعُولُنْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=MkB
  Aala.textContent=Aila+Aa+' و '+Ac
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ فَعُولُنْ  '
  B.textContent=BAS +' '+'جاء هنا '+ Mj 
  K.textContent=MkB
  Aala.textContent=Aila+Ac
}
/*المديد------------------------------------------------------------------ */
/*صحيح  */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَاعِلُنْ فَاعِلَاتُنْ   '
  B.textContent=Madid
  K.textContent=kt1
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلَاتُنْ   '
  B.textContent=Madid
  K.textContent=kt1
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلَاتُنْ   '
  B.textContent=Madid
  K.textContent=kt1
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلَاتُنْ   '
  B.textContent=Madid
  K.textContent=kt1
  Aala.textContent=Aila+Kaf
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلَاتُنْ   '
  B.textContent=Madid
  K.textContent=kt1
  Aala.textContent=Aila+Kaf+' و '+Aa
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلَاتُنْ   '
  B.textContent=Madid
  K.textContent=kt1
  Aala.textContent=Aila+Aa
}
/*محذوفة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَاعِلُنْ فَاعِلٌنْ   '
  B.textContent=Madid
  K.textContent=kt3
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلٌنْ   '
  B.textContent=Madid
  K.textContent=kt3
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلٌنْ   '
  B.textContent=Madid
  K.textContent=kt3
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلٌنْ   '
  B.textContent=Madid
  K.textContent=kt3
  Aala.textContent=Aila+Kaf
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلٌنْ   '
  B.textContent=Madid
  K.textContent=kt3
  Aala.textContent=Aila+Kaf+' و '+Aa
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلٌنْ   '
  B.textContent=Madid
  K.textContent=kt3
  Aala.textContent=Aila+Aa
}
/*مقصورة  */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = 'فَاعِلَاتُنْ فَاعِلُنْ فَاعِلَاتْ   '
  B.textContent=Madid
  K.textContent=Mksora
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلَاتْ   '
  B.textContent=Madid
  K.textContent=Mksora
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلَاتْ   '
  B.textContent=Madid
  K.textContent=Mksora
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلَاتْ   '
  B.textContent=Madid
  K.textContent=Mksora
  Aala.textContent=Aila+Kaf
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلَاتْ   '
  B.textContent=Madid
  K.textContent=Mksora
  Aala.textContent=Aila+Kaf+' و '+Aa
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلَاتْ   '
  B.textContent=Madid
  K.textContent=Mksora
  Aala.textContent=Aila+Aa
}
/*مبثورة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'فَاعِلَاتُنْ فَاعِلُنْ فَعِلُنْ   '
  B.textContent=Madid
  K.textContent=Mabtora
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَعِلُنْ   '
  B.textContent=Madid
  K.textContent=Mabtora
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَعِلُنْ   '
  B.textContent=Madid
  K.textContent=Mabtora
  Aala.textContent=Aila+Aa
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَعِلُنْ   '
  B.textContent=Madid
  K.textContent=Mabtora
  Aala.textContent=Aila+Kaf
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَعِلُنْ   '
  B.textContent=Madid
  K.textContent=Mabtora
  Aala.textContent=Aila+Kaf+' و '+Aa
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَعِلُنْ   '
  B.textContent=Madid
  K.textContent=Mabtora
  Aala.textContent=Aila+Aa
}
/*الوافر------------------------------------------------------------------ */
/*تام */
if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلَتُنْ فَعُولُنْ  '
  B.textContent=Waf+' '+Tam
  K.textContent=Mktofa
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلَتُنْ فَعُولُنْ  '
  B.textContent=Waf+' '+Tam
  K.textContent=Mktofa
  Aala.textContent=Aila+Asp
}
else if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلْتُنْ فَعُولُنْ  '
  B.textContent=Waf+' '+Tam
  K.textContent=Mktofa
  Aala.textContent=Aila+Asp
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلْتُنْ فَعُولُنْ  '
  B.textContent=Waf+' '+Tam
  K.textContent=Mktofa
  Aala.textContent=Aila+Asp
}
/*مجزوء */
/*صحيحة  */
if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلَتُنْ   '
  B.textContent=Waf+' '+Mj
  K.textContent=kt1
}
else if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلَتُنْ   '
  B.textContent=Waf+' '+Mj
  K.textContent=kt1
  Aala.textContent=Aila+Asp
}
/*معصوبة */
if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلْتُنْ   '
  B.textContent=Waf+' '+Mj
  K.textContent=Maaso
}
else if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلْتُنْ   '
  B.textContent=Waf+' '+Mj
  K.textContent=Maaso
  Aala.textContent=Aila+Asp
}
/*الكامل------------------------------------------------------------------ */
  /*التام */
    /*عروضه صحيحة */
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=kt1
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab+' و '+Edmare
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab+' و '+Edmare
}
 /*-------- الضرب مقطوع -----*/
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=mkta
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Ab+' و '+Edmare
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Ab+' و '+Edmare
}
  /*-------- الضرب  أحذ مضمر -----*/
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتْفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=AHadd
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتْفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=AHadd
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتْفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=AHadd
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتْفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=AHadd
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتْفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=AHadd
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتْفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=AHadd
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتْفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=AHadd
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتْفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=AHadd
  Aala.textContent=Aila+Ab+' و '+Edmare
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتْفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=AHadd
  Aala.textContent=Aila+Ab+' و '+Edmare
}
/*-------- حذاء  -----*/
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=Hadaa
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=Hadaa
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=Hadaa
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=Hadaa
  Aala.textContent=Aila+Edmare
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=Hadaa
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=Hadaa
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=Hadaa
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=Hadaa
  Aala.textContent=Aila+Ab+' و '+Edmare
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَا   '
  B.textContent=Kamil+' '+Tam
  K.textContent=Hadaa
  Aala.textContent=Aila+Ab+' و '+Edmare
}
/*مجزوء  الكامل  */
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ    '
  B.textContent=Kamil+' '+Mj
  K.textContent=kt1
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ    '
  B.textContent=Kamil+' '+Mj
  K.textContent=kt1
  Aala.textContent=Aila+Edmare
}

else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ    '
  B.textContent=Kamil+' '+Mj
  K.textContent=kt1
  Aala.textContent=Aila+Ab
}
/*---الضرب مقطوع--- */
 if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ  مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Mj
  K.textContent=mkta
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ  مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Mj
  K.textContent=mkta
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ  مُتَفَاعِلْ   '
  B.textContent=Kamil+' '+Mj
  K.textContent=mkta
  Aala.textContent=Aila+Edmare
}
/*---الضرب مذيل--- */
 if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلَانْ   '
  B.textContent=Kamil+' '+Mj
  K.textContent=Moda
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلَانْ   '
  B.textContent=Kamil+' '+Mj
  K.textContent=Moda
  Aala.textContent=Aila+Edmare
}
if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلَانْ   '
  B.textContent=Kamil+' '+Mj
  K.textContent=Moda
  Aala.textContent=Aila+Ab
}
/*----الضرب مرفل--- */
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلَاتُنْ   '
  B.textContent=Kamil+' '+Mj
  K.textContent=Mora
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلَاتُنْ   '
  B.textContent=Kamil+' '+Mj
  K.textContent=Mora
  Aala.textContent=Aila+Edmare
}
if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلَاتُنْ   '
  B.textContent=Kamil+' '+Mj
  K.textContent=Mora
  Aala.textContent=Aila+Ab
}
/*الهزرج-------------------------------------*/
if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُنْ مَفَاعِيلُنْ   '
  B.textContent=Hazraj+' '+Mj
  K.textContent=kt1
}
else if(S.innerText==='|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُ مَفَاعِيلُنْ   '
  B.textContent=Hazraj+' '+Mj
  K.textContent=kt1
  Aala.textContent=Aila+Kaf
}
/*------*/
if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُنْ مَفَاعِي   '
  B.textContent=Hazraj+' '+Mj
  K.textContent=kt1
}
else if(S.innerText==='|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُ مَفَاعِي   '
  B.textContent=Hazraj+' '+Mj
  K.textContent=kt1
  Aala.textContent=Aila+Kaf
}
/*الرزج------------------------------------------------------------------------------*/
/*العروض  صحيحة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Aa
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Aa
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Aa
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ac
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ac
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ac
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab+' و '+Ac
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Ab+' و '+Ac
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Aa+' و '+Ab
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Aa+' و '+Ab
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Aa+' و '+Ac
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ '
  B.textContent=Rajaz+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+Aa+' و '+Ac
}
/*العروض  أو الضرب ذخلهما زحاف من زحافات الحشو */
/*الخبن */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Ab+' و '+Ac
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Ab+' و '+Ac
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa+' و '+Ab
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa+' و '+Ab
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa+' و '+Ac
  }
  else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa+' و '+Ac
  }
  /*الطي */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Ab+' و '+Ac
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Ab+' و '+Ac
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Aa+' و '+Ab
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Aa+' و '+Ab
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Aa+' و '+Ac
  }
  else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MatW
    Aala.textContent=Aila+Aa+' و '+Ac
  }
  /*الخبل */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Ab+' و '+Ac
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Ab+' و '+Ac
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Aa+' و '+Ab
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Aa+' و '+Ab
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Aa+' و '+Ac
  }
  else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=MakB
    Aala.textContent=Aila+Aa+' و '+Ac
  }
  /*مقطوعة */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Aa
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Ab
  }
  else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Ac
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Ab+' و '+Ac
  }
  else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Ab+' و '+Ac
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Aa+' و '+Ab
  }
  else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Aa+' و '+Ab
  }
  else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Aa+' و '+Ac
  }
  else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ '
    B.textContent=Rajaz+' '+Tam
    K.textContent=mkta
    Aala.textContent=Aila+Aa+' و '+Ac
  }
  /*المجزوء  */
  /*صحيحة */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=kt1
    Aala.textContent='  '
  }
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=kt1
    Aala.textContent=Aila+Ab
  }
  else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=kt1
    Aala.textContent=Aila+Ac
  }
  else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=kt1
    Aala.textContent=Aila+Aa
  }
  /*مخبونة */
  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=mkhb
  }
  else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=mkhb
    Aala.textContent=Aila+Ab
  }
  else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُتَفْعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=mkhb
    Aala.textContent=Aila+Ac
  }
  else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=mkhb
    Aala.textContent=Aila+Aa
  }
  /*مطوية */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=MatW
    Aala.textContent='  '
  }
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=MatW
    Aala.textContent=Aila+Ab
  }
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=MatW
    Aala.textContent=Aila+Ac
  }
  else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=MatW
    Aala.textContent=Aila+Aa
  }
  /*مخبولة */
  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=MakB
  }
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=MakB
    Aala.textContent=Aila+Ab
  }
  else if(S.innerText==='|.|.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=MakB
    Aala.textContent=Aila+Ac
  }
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ مُتَعِلُنْ    '
    B.textContent=Rajaz+' '+Mj
    K.textContent=MakB
    Aala.textContent=Aila+Aa
  }
  /*منهوك الرزج */
  if(S.innerText==='|.0.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ     '
    B.textContent=Rajaz+' '+ManHo
    K.textContent=kt1
  }
  /*الرمل -------------------------------------------------------------- */
    /*تام */
      /*العروض صحيحة */
      if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتُنْ   '
        K.textContent=kt1
        B.textContent=Ramal+' '+Tam
      }
      else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتُنْ   '
        K.textContent=kt1
        B.textContent=Ramal+' '+Tam
        Aala.textContent=Aila+Aa
      }
      else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتُنْ   '
        K.textContent=kt1
        B.textContent=Ramal+' '+Tam
        Aala.textContent=Aila+Aa
      }
      else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Aa
      }
  
      else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Kaf
      }
      else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Kaf
      }
      else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Kaf
      }
  
      else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+ Chakl
      }
      else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+ Chakl
      }
      else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُ فَعِلَاتُ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+ Chakl
      }
  
      else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Chakl+' و '+Aa
      }
      else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Chakl+' و '+Aa
      }
  
      else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Kaf+' و '+Aa
      }
      else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Kaf+' و '+Aa
      }
  
      else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Kaf+' و '+Chakl
      }
      else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt1
        Aala.textContent=Aila+Kaf+' و '+Chakl
      }
   /*العروض مخبونة */
   if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0'){
    D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0'){
    D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ    '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0.|.0'){
    D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa
  }
  else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0.|.0'){
    D.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Aa
  }
  
  else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0.|.0'){
    D.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Kaf
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0.|.0'){
    D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Kaf
  }
  else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.|.|.0.|.0'){
    D.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Kaf
  }
  
  else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0.|.0'){
    D.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Chakl
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0.|.0'){
    D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Chakl
  }
  else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.|.|.|.0.|.0'){
    D.textContent = ' فَعِلَاتُ فَعِلَاتُ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Chakl
  }
  
  else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0.|.|.|.0.|.0'){
    D.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Chakl+' و '+Aa
  }
  else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.|.|.0.|.0'){
    D.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Chakl+' و '+Aa
  }
  
  else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.|.0.|.0'){
    D.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Kaf+' و '+Aa
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0.|.0'){
    D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Kaf+' و '+Aa
  }
  
  else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.|.|.0.|.0'){
    D.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Kaf+' و '+Chakl
  }
  else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.|.|.|.0.|.0'){
    D.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَعِلَاتُنْ   '
    B.textContent=Ramal+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+Kaf+' و '+Chakl
  }
  
      /*العروض محذوفة */
      if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
      }
      else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Aa
      }
      else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Aa
      }
      else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Aa
      }
  
      else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Kaf
      }
      else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Kaf
      }
      else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Kaf
      }
  
      else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+ Chakl
      }
      else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+ Chakl
      }
      else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُ فَعِلَاتُ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+ Chakl
      }
  
      else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Chakl+' و '+Aa
      }
      else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Chakl+' و '+Aa
      }
  
      else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Kaf+' و '+Aa
      }
      else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Kaf+' و '+Aa
      }
  
      else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Kaf+' و '+Chakl
      }
      else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَاعِلُنْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=kt3
        Aala.textContent=Aila+Kaf+' و '+Chakl
      }
      /*العروض مقصورة */
      if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
        D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
      }
      else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
        D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Aa
      }
      else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
        D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Aa
      }
      else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
        D.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Aa
      }
  
      else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.0'){
        D.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Kaf
      }
      else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
        D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Kaf
      }
      else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.0'){
        D.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Kaf
      }
  
      else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.0'){
        D.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+ Chakl
      }
      else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.0'){
        D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+ Chakl
      }
      else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.|.0.|.|.0.0'){
        D.textContent = ' فَعِلَاتُ فَعِلَاتُ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+ Chakl
      }
  
      else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.0'){
        D.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Chakl+' و '+Aa
      }
      else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.0'){
        D.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Chakl+' و '+Aa
      }
  
      else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.0'){
        D.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Kaf+' و '+Aa
      }
      else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
        D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Kaf+' و '+Aa
      }
  
      else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0.0'){
        D.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Kaf+' و '+Chakl
      }
      else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.0'){
        D.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَاعِلَاتْ   '
        B.textContent=Ramal+' '+Tam
        K.textContent=Mksora
        Aala.textContent=Aila+Kaf+' و '+Chakl
      }
      /*مجزوء  الرمل */
      /*صحيحة */
      if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُنْ  فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=kt1
      }
      else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُنْ  فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=kt1
        Aala.textContent=Aila+Aa
      }
      else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُ  فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=kt1
        Aala.textContent=Aila+Kaf
      }
      else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُ  فَاعِلَاتُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=kt1
        Aala.textContent=Aila+ Chakl
      }
      /*مخبونة */
      if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُنْ  فَعِلَاتُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=mkhb
      }
      else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُنْ  فَعِلَاتُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=mkhb
        Aala.textContent=Aila+Aa
      }
      else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0'){
        D.textContent = ' فَاعِلَاتُ  فَعِلَاتُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=mkhb
        Aala.textContent=Aila+Kaf
      }
      else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0'){
        D.textContent = ' فَعِلَاتُ  فَعِلَاتُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=mkhb
        Aala.textContent=Aila+ Chakl
      }
      /*محذوفة */
      if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُنْ  فَاعِلُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=kt3
      }
      else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُنْ  فَاعِلُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=kt3
        Aala.textContent=Aila+Aa
      }
      else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَاعِلَاتُ  فَاعِلُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=kt3
        Aala.textContent=Aila+Kaf
      }
      else if(S.innerText==='|.|.|.0.|.|.0.|.|.0'){
        D.textContent = ' فَعِلَاتُ  فَاعِلُنْ   '
        B.textContent=Ramal+' '+Mj
        K.textContent=kt3
        Aala.textContent=Aila+ Chakl
      }
     /*مسبغ */
     if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.0'){
      D.textContent = ' فَاعِلَاتُنْ  فَاعِلَاتَانْ   '
      B.textContent=Ramal+' '+Mj
      K.textContent=Mosbak
    }
    else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.0'){
      D.textContent = ' فَعِلَاتُنْ  فَاعِلَاتَانْ   '
      B.textContent=Ramal+' '+Mj
      K.textContent=Mosbak
      Aala.textContent=Aila+Aa
    }
    else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.0'){
      D.textContent = ' فَاعِلَاتُ  فَاعِلَاتَانْ   '
      B.textContent=Ramal+' '+Mj
      K.textContent=Mosbak
      Aala.textContent=Aila+Kaf
    }
    else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.0'){
      D.textContent = ' فَعِلَاتُ  فَاعِلَاتَانْ   '
      B.textContent=Ramal+' '+Mj
      K.textContent=Mosbak
      Aala.textContent=Aila+ Chakl
    }
  /*السريع ------------------------------------------------------------------ */
  /*مطوية مكسوفة */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa+' '+Tam
    K.textContent=MtMk
  }
  else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Aa
  }
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Aa
  }
  else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Aa
  }
  
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Ab
  }
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Ab
  }
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Ab
  }
  
  else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Ac
  }
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Ac
  }
  else if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ مُتَعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Ac
  }
  
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Ac +' و '+Aa
  }
  else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Ac +' و '+Aa
  }
  
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Ac +' و '+Ab
  }
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Aa +' و '+Ab
  }
  
  else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Aa +' و '+Ab
  }
  else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   '
    B.textContent=Sariaa
    K.textContent=MtMk
    Aala.textContent=Aila+ Aa +' و '+Ab
  }
  
  /*أصلم */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = ' مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   '
    B.textContent=Sariaa
    K.textContent=Aslam
    }
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Aa
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Aa
}

else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Ab
}

else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Ac
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Ac
}
else if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Ac
}

else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Ac +' و '+Aa
}
else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Ac +' و '+Aa
}

else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Ac +' و '+Ab
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Aa +' و '+Ab
}

else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Aa +' و '+Ab
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُو   '
  B.textContent=Sariaa
  K.textContent=Aslam
  Aala.textContent=Aila+ Aa +' و '+Ab
}

/*مطوي موقوف */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Aa
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Aa
}

else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Ab
}

else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Ac
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Ac
}
else if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Ac
}

else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Ac +' و '+Aa
}
else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Ac +' و '+Aa
}

else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Ac +' و '+Ab
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Aa +' و '+Ab
}

else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Aa +' و '+Ab
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   '
  B.textContent=Sariaa
  K.textContent=MtMwkof
  Aala.textContent=Aila+ Aa +' و '+Ab
}

/*مخبولة مكسوفة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Aa
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Aa
}
else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Aa
}

else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Ab
}

else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Ac
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Ac
}
else if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Ac
}

else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Ac +' و '+Aa
}
else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Ac +' و '+Aa
}

else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Ac +' و '+Ab
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Aa +' و '+Ab
}

else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Aa +' و '+Ab
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   '
  B.textContent=Sariaa
  K.textContent=MkhMksofa
  Aala.textContent=Aila+ Aa +' و '+Ab
}

/*المنسرح ----------------------------------------------------------------- */
/*مطوية */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+ Aa +' و '+Ab
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+ Aa +' و '+Ac
}

else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+ Ab 
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+ Ab +' و '+Ac
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+ Ab +' و '+Ac
}

else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+ Ab 
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+ Ab 
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=MatW
  Aala.textContent=Aila+ Ab 
}

/*مقطوع */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+ Aa +' و '+Ab
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+ Aa +' و '+Ac
}

else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+ Ab 
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+Ab
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+ Ab +' و '+Ac
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+ Ab +' و '+Ac
}

else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+ Ac 
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+ Ac 
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    '
  B.textContent=Monsaih+' '+Tam
  K.textContent=mkta
  Aala.textContent=Aila+ Ac 
}

/*منهوك المنسرح */
/*موقوفة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مَفْعُولَاتْ  '
  B.textContent=Monsaih+' '+ManHo
  K.textContent=Mwkofa
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.0.0'){
  D.textContent = 'مُتَعِلُنْ مَفْعُولَاتْ  '
  B.textContent=Monsaih+' '+ManHo
  K.textContent=Mwkofa
  Aala.textContent=Aila+ Ac 
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.0.0'){
  D.textContent = 'مُسْتَعِلُنْ مَفْعُولَاتْ  '
  B.textContent=Monsaih+' '+ManHo
  K.textContent=Mwkofa
  Aala.textContent=Aila+ Ab 
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0.0'){
  D.textContent = 'مُتَفْعِلُنْ مَفْعُولَاتْ  '
  B.textContent=Monsaih+' '+ManHo
  K.textContent=Mwkofa
  Aala.textContent=Aila+ Aa 
}
/*مكسوفة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مَفْعُولُنْ  '
  B.textContent=Monsaih+' '+ManHo
  K.textContent=Mksofa
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مَفْعُولُنْ  '
  B.textContent=Monsaih+' '+ManHo
  K.textContent=Mksofa
  Aala.textContent=Aila+ Ac 
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مَفْعُولُنْ  '
  B.textContent=Monsaih+' '+ManHo
  K.textContent=Mksofa
  Aala.textContent=Aila+ Ab 
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مَفْعُولُنْ  '
  B.textContent=Monsaih+' '+ManHo
  K.textContent=Mksofa
  Aala.textContent=Aila+ Aa 
}
/* الخفيف تام ----------------------------------------------------*/
/*صحيحة*/
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt1
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Aa 
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Aa +' و '+Tachaite
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Tachaite
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Aa +' و '+Kaf
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Kaf
}

/*متشعثة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MTachaite
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MTachaite
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MTachaite
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MTachaite
  Aala.textContent=Aila+ Aa 
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MTachaite
  Aala.textContent=Aila+ Aa +' و '+Tachaite
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MTachaite
  Aala.textContent=Aila+ Tachaite
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MTachaite
  Aala.textContent=Aila+ Aa +' و '+Kaf
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MTachaite
  Aala.textContent=Aila+ Kaf
}

/*مخبونة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=mkhb
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=mkhb
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=mkhb
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=mkhb
  Aala.textContent=Aila+ Aa 
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=mkhb
  Aala.textContent=Aila+ Aa +' و '+Tachaite
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=mkhb
  Aala.textContent=Aila+ Tachaite
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=mkhb
  Aala.textContent=Aila+ Aa +' و '+Kaf
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=mkhb
  Aala.textContent=Aila+ Kaf
}
/*محذوفة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt3
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Aa 
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَاعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Aa +' و '+Tachaite
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَاعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Tachaite
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَاعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Aa +' و '+Kaf
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَاعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Kaf
}
/*محذوف مخبون */

if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MMkhbn
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MMkhbn
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MMkhbn
  Aala.textContent=Aila+ Aa 
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MMkhbn
  Aala.textContent=Aila+ Aa 
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MMkhbn
  Aala.textContent=Aila+ Aa +' و '+Tachaite
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MMkhbn
  Aala.textContent=Aila+ Tachaite
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MMkhbn
  Aala.textContent=Aila+ Aa +' و '+Kaf
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَعِلُنْ   '
  B.textContent=Khafif+' '+Tam
  K.textContent=MMkhbn
  Aala.textContent=Aila+ Kaf
}
/*الخفيف المجزوء */
/*صحيحة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ    '
  B.textContent=Khafif+' '+Mj
  K.textContent=kt1
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ    '
  B.textContent=Khafif+' '+Mj
  K.textContent=kt1
  Aala.textContent=Aila+ Aa 
}
/*مخبون */
if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ    '
  B.textContent=Khafif+' '+Mj
  K.textContent=mkhb
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ    '
  B.textContent=Khafif+' '+Mj
  K.textContent=mkhb
  Aala.textContent=Aila+ Aa 
}
/*مخبون مقصور */
if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لْ    '
  B.textContent=Khafif+' '+Mj
  K.textContent=MMksor
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لْ    '
  B.textContent=Khafif+' '+Mj
  K.textContent=MMksor
  Aala.textContent=Aila+ Aa 
}
/*المضارع ------------------------------------------------------------------ */
if(S.innerText==='|.|.0.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مَفَاعِيلُنْ فَاعِ لَاتُنْ   '
  B.textContent=Modariaa+' '+Mj
  K.textContent=kt1
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مَفَاعِلُنْ فَاعِ لَاتُنْ   '
  B.textContent=Modariaa+' '+Mj
  K.textContent=kt1
  Aala.textContent=Aila+Kap  
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = ' مَفَاعِيلُ فَاعِ لَاتُنْ   '
  B.textContent=Modariaa+' '+Mj
  K.textContent=kt1
  Aala.textContent=Aila+ Kaf 
}
/*المقتضب-------------------------------------------------------------------------- */
if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مَفْعُولَاتُ مُسْتَعِلُنْ  '
  B.textContent=Moktadib+' '+Mj
  K.textContent=MatW
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مَفَاعِيلُ مُسْتَعِلُنْ  '
  B.textContent=Moktadib+' '+Mj
  K.textContent=MatW
  Aala.textContent=Aila+ Aa 
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَعِلُنْ  '
  B.textContent=Moktadib+' '+Mj
  K.textContent=MatW
  Aala.textContent=Aila+ Ab 
}
/* المجتث-------------------------------------------------------------------------------- */
/*صحيحة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Moj+' '+Mj
  K.textContent=kt1
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   مُتَفْعِ لُنْ فَاعِلَاتُنْ   '
  B.textContent=Moj+' '+Mj
  K.textContent=kt1
  Aala.textContent=Aila+ Aa 
}
/*مخبونة */
if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   مُسْتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Moj+' '+Mj
  K.textContent=mkhb
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   مُتَفْعِ لُنْ فَعِلَاتُنْ   '
  B.textContent=Moj+' '+Mj
  K.textContent=mkhb
  Aala.textContent=Aila+ Aa 
}
/*متشعثة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = '   مُسْتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Moj+' '+Mj
  K.textContent=MTachaite
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = '   مُتَفْعِ لُنْ فَالَاتُنْ   '
  B.textContent=Moj+' '+Mj
  K.textContent=MTachaite
  Aala.textContent=Aila+ Aa 
}

/*المتقارب تام --------------------------------------------------------------------- */
/*صحيحة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولُنْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt1
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولُنْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولُنْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولُنْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Kap 
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولُنْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولُنْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعُولُنْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt1
  Aala.textContent=Aila+ Kap 
}

/*مقبوضة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعُولُنْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}

/*مقبوضة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.|'){
  D.textContent = ' فَعُولُ فَعُولُ فَعُولُنْ فَعُولُ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt2
  Aala.textContent=Aila+ Kap 
}

/*مقصور */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Mksora
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Mksora
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Mksora
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Mksora
  Aala.textContent=Aila+ Kap 
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Mksora
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Mksora
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعُولْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Mksora
  Aala.textContent=Aila+ Kap 
}

/*محذوفة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعَلْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt3
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعَلْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعَلْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعَلْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Kap 
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعَلْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعَلْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعَلْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=kt3
  Aala.textContent=Aila+ Kap 
}

/*أبتر */
/*محذوفة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Abtar
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Abtar
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Abtar
  Aala.textContent=Aila+ Kap 
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعْ   '
  B.textContent=Mot+' '+Tam
  K.textContent=Abtar
  Aala.textContent=Aila+ Kap 
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعْ   '
    B.textContent=Mot+' '+Tam
    K.textContent=Abtar
    Aala.textContent=Aila+ Kap 
  }
  else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعْ   '
    B.textContent=Mot+' '+Tam
    K.textContent=Abtar
    Aala.textContent=Aila+ Kap 
  }
  else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعْ   '
    B.textContent=Mot+' '+Tam
    K.textContent=Abtar
    Aala.textContent=Aila+ Kap 
  }
  
  /*المجزوء */
  /*محذوفة */
  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعُولُنْ فَعُولُنْ  فَعَلْ   '
    B.textContent=Mot+' '+Mj
    K.textContent=kt3
  }
  else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '    فَعُولُ فَعُولُ فَعَلْ   '
    B.textContent=Mot+' '+Mj
    K.textContent=kt3
    Aala.textContent=Aila+ Kap 
  }
  else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '    فَعُولُنْ فَعُولُ فَعَلْ   '
    B.textContent=Mot+' '+Mj
    K.textContent=kt3
    Aala.textContent=Aila+ Kap 
  }
  else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = '    فَعُولُ فَعُولُنْ فَعَلْ   '
    B.textContent=Mot+' '+Mj
    K.textContent=kt3
    Aala.textContent=Aila+ Kap 
  }
  /*أبتر */
  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَعُولُنْ فَعُولُنْ  فَعْ   '
    B.textContent=Mot+' '+Mj
    K.textContent=Abtar
  }
  else if(S.innerText==='|.|.0.|.|.|.0.|.|.0'){
    D.textContent = '    فَعُولُ فَعُولُ فَعْ   '
    B.textContent=Mot+' '+Mj
    K.textContent=Abtar
    Aala.textContent=Aila+ Kap 
  }
  else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.0'){
    D.textContent = '    فَعُولُنْ فَعُولُ فَعْ   '
    B.textContent=Mot+' '+Mj
    K.textContent=Abtar
    Aala.textContent=Aila+ Kap 
  }
  else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = '    فَعُولُ فَعُولُنْ فَعْ   '
    B.textContent=Mot+' '+Mj
    K.textContent=Abtar
    Aala.textContent=Aila+ Kap 
  }
  /*المتدارك--------------------------------------------------------------------------------- */
  /*تام */
  if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=Abtar
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Aa 
  }
  /*--*/
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.0.|.0.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.0.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  /*----*/
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite + ' و '+Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.0.|.0.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.0.|.0.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.|.0.|.0.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.0.|.0.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَاعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Tachaite 
  }
  /* */
  /*متشعثة */
  if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Aa 
  }
  /*--*/
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.0.|.0.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.0.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  /*----*/
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite + ' و '+Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.0.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.0.|.0.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.0.|.0.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.0.|.0.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَعْلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=MTachaite
    Aala.textContent=Aila+ Tachaite 
  }
  /*مخبونة */
  if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  /*--*/
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  /*----*/
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite + ' و '+Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=kt1
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Aa 
  }
  /*--*/
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  /*----*/
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite + ' و '+Aa 
  }
  else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
    D.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
    D.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  '       
    B.textContent=Motadarak+' '+Tam
    K.textContent=mkhb
    Aala.textContent=Aila+ Tachaite 
  }
  `;

module.exports = {data}