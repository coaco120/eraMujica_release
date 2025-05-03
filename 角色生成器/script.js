// 素质、能力、装着物、曲目等下拉或多选列表数据  
const talentList = [  
    "处女","童贞","母性","扶她","胆怯","反抗的","刚毅","坦率","成熟","自尊心高",
    "自大","自尊心低","自制的","冲动的","无关心","好奇心","缺乏感情","感情丰富","乐观的","悲观的",
    "不越过底线","渴望关注","贞操观念","不在意贞操","压抑","解放","羞涩","无耻","好色","清楚",
    "怕疼","耐痛","易湿","不易湿","习得快","习得慢","舌使","猫舌","调合知识","着衣PLAY喜欢",
    "药毒耐性","灵巧的指尖","擅长捆绑","道具使","自慰し容易","污臭钝感","污臭敏感","献身的","脏污无視","被动",
    "腰使","承认快感","否定快感","淫核／淫茎","淫壶","淫尻","淫乳","淫乱","虐待狂","抖Ｍ",
    "倒错的","双性恋","恐男","慎重","急躁","坏心眼","好心眼","幼稚",
    "疯狂","威压感","魅惑","亲近容易","难以接近","Ｃ敏感","Ｃ钝感","Ｖ敏感","Ｖ钝感","Ａ敏感",
    "Ａ钝感","Ｂ敏感","Ｂ钝感","貧乳","巨乳","矮小","高大","回复快","回复慢","母乳体質",
    "漏尿癖","治疗","美脚","早泄","迟漏","男人","精力绝伦","恋慕","妊娠",
    "精力薄弱","主人","隶属","读心能力","撮影技能","人魚","不死","讨厌日光"
    
];  
const abilityList = [  
    "顺从","欲望","技巧","Ｃ感觉","Ｖ感觉","Ａ感觉","Ｂ感觉","奉仕精神",  
    "露出癖","百合气质","ＢＬ气质","受虐气质","自慰中毒","精液中毒","百合中毒",  
    "痛苦中毒","捆绑中毒","会话","爱抚","道具","性交","羞耻","奉仕","施虐","异常","奴役"  
];  
// 只能选1~5整数  
const abilityRange = [0,1,2,3,4,5];  

const bgmNameNoList =['１','２','３','４','５','６'];

const equipMeta = [  
    { key: "配饰", items: ["黑色鸭舌帽","墨镜","发带","华丽的黑金披肩","红色发带","领带","面具","细腰带","红色贝雷帽","黑色金边领带"] },  
    { key: "袜子", items: ["短袜","红色长筒过膝袜","过膝袜","分趾袜","吊帶丝袜","黑色长丝袜"] },  
    { key: "下半身内衣", items: ["衬裤","白色内裤","黑色内裤","连裤袜","缠腰布","短裤"] },  
    { key: "上半身内衣", items: ["胸罩","吊带背心","裹胸布","Ｔ衬衫"] },  
    { key: "下半身外套", items: ["长裙","格仔裙","双排扣短裤","裤子","深色的月之森百摺裙","羽丘的绿色格仔裙","高腰长裙","红黑拼接金边裙裤","白色阔腿裤","灰色半身裙"] },  
    { key: "上半身外套", items: ["白色T衫","丝带蝶结外衣","马甲及衬衣","月之森制服外套","羽丘灰色制服外套","荷叶边短袖上衣","红黑复古短斗篷","米黄马甲拼接黑色T恤","白色系带蝴蝶结长袖衬衫"] },  
    { key: "全身外套", items: ["Oblivionis全身服","Doloris全身服","可爱的红白色连衣裙","花咲川学生校服","Mortis全身服","Timoris全身服","Amoris全身服","sumimi活动制服","格纹长袖连衣裙","和服","全套西装","私服","过宽的白色衬衣",] }  
];  

const songList = [  
    "KiLLKiSS","黒のバースデイ","ふたつの月 Deep Into The Forest","Choir 'S' Choir","神さま、バカ",
    "Mas?uerade Rhapsody Re?uest","Ave Mujica","素晴らしき世界 でも どこにもない場所","Georgette Me, Georgette You","Imprisoned XII",
    "Crucifix X","八芒星ダンス","顔","天球(そら)のMúsica","Angles",
    "Symbol I : △","Symbol II : Air","Symbol III : ▽","Symbol IV : Earth","Ether",
    "人間になりたいうた","キリトリセン","ないばいたりてぃ","栞","TEENAGE RIOT青春暴动",
    "君の神様になりたい","春日影 (MyGO!!!!! ver.)","春日影 (CRYCHIC ver.)","輪符雨","詩超絆",
    "迷星叫","影色舞","焚音打","Here, the world!","Sweet Escape"
];  

window.onload = function() {  
    // 生成素质multi checkbox  
    const talentArea = document.getElementById('talentArea');  
    talentList.forEach(t=>{  
        const btn=document.createElement('button');  
        btn.className = 'talentBtn';  
        btn.type = "button";  
        btn.textContent = t;  
        btn.onclick = ()=>btn.classList.toggle('selected');  
        talentArea.appendChild(btn);  
    });  

    // 生成能力select  
    const abilityArea = document.getElementById('abilityArea');  
    abilityList.forEach((abl,i)=>{  
        abilityArea.innerHTML += `<label>${abl}</label>  
        <select id="abl_${i}">  
            ${abilityRange.map(v=>`<option value="${v}">${v}</option>`).join('')}  
        </select><br>`;  
    });  

    // 生成装着物单选按钮  
    document.getElementById('equipArea').innerHTML = equipMeta.map((eq, idx)=>{  
        return `  
        <label>${eq.key}</label>  
        <select id="equip_${idx}">  
            <option value="0">（无）</option>  
            ${eq.items.map((item, j)=>`<option value="${j+1}">${item}</option>`).join('')}  
        </select>  
        `;  
    }).join("<br>");  

    // 生成曲目输入 下拉  
    document.getElementById("songArea").innerHTML =  
        Array(6).fill(0).map((_,i)=>  
            `<label>曲${i+1}</label>  
                <select id='song${i+1}'>  
                <option value="">请选择</option>  
                ${songList.map(s=>`<option value="${s}">${s}</option>`).join("")}  
                </select><br>`  
        ).join('');  

    // 相性输入添加功能  
    document.getElementById('relationArea').appendChild(relationRow());  

    document.getElementById('addRelation').onclick = function(){  
        document.getElementById('relationArea').appendChild(relationRow());  
    };  

    // 生成 CSV 按钮  
    document.getElementById('generateBtn').onclick = function(){  
        // 依需求拼装csv文本  
        let csv = '\ufeff';  
        const v = id=>document.getElementById(id).value;  

        csv+=`番号,${v('charNo')}\r\n`;  
        csv+=`名前,${v('charName')}\r\n`;  
        csv+=`呼び名,${v('callName')}\r\n`;  
        csv+=`基礎,体力,${v('tairyoku')}\r\n基礎,气力,${v('kiryoku')}\r\n`;  
        // 素质  
        Array.from(document.getElementsByClassName('talentBtn')).forEach(btn=>{  
            if(btn.classList.contains('selected'))  
                csv+=`素質,${btn.textContent},\r\n`;  
        });  
        // 能力  
        abilityList.forEach((abl,i)=>{  
            csv+=`能力,${abl},${v("abl_"+i)}\r\n`;  
        });  
        // 经验  
        csv += `経験,自慰経験,${v('exp1')}\r\n経験,道具使用経験,${v('exp2')}\r\n`;  
        // 相性  
        Array.from(document.getElementById('relationArea').children).forEach(row=>{  
            const no = row.querySelector('.relNum').value;  
            const val = row.querySelector('.relVal').value;  
            if(no && val){  
                csv+=`相性,${no},${val},\r\n`;  
            }  
        });  
        // 装着物  
        equipMeta.forEach((eq,idx)=>{  
            csv+=`装着物,${eq.key},${v('equip_'+idx)},\r\n`;  
        });  
        // 角色情报  
        csv += `CSTR,外号,${v('nickname')}\r\n`;  
        csv += `CSTR,登场名,${v('displayName')}\r\n`;  
        csv += `CSTR,单词,${v('englishName')}\r\n`;  
        for(let i=1;i<=6;i++){  
            let sval = v('song'+i);  
            if(i==1 && !sval){  
                alert("必须选择“曲1”");  
                return;  
            }  
            csv += `CSTR,曲${bgmNameNoList[i-1]},${sval}\r\n`;  
        }  
        // 称呼列表  
        csv += `CSTR,称呼列表,${v('callList')}\r\n`;  
        
        // 生成文件并下载  
        let blob = new Blob([csv], {type: "text/csv"});  
        let url = URL.createObjectURL(blob);  
        let a = document.getElementById('downloadLink');  
        a.href = url;  
        a.download = `Chara${v('charNo')}_${v('charName')||'未命名'}.csv`;  
        a.style.display = '';  
        a.textContent = "点击下载CSV文件";  
        a.click();  
    };  
};  

function relationRow(){  
    let div = document.createElement('div');  
    div.innerHTML = `  
        <input type="number" class="relNum" placeholder="角色编号">  
        <input type="number" class="relVal" placeholder="相性值">  
        <button type="button" onclick="this.parentElement.remove()">删除</button>  
    `;  
    return div;  
}