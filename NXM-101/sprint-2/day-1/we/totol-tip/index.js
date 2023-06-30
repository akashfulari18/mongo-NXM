// left
let leftBt= document.querySelector("#lft")
leftBt.addEventListener("mouseover",()=>{
    console.log("inside hover")
    document.querySelector(".tool_tip").style.display="block"   
    document.querySelector("#lft~.lft_inner").style.display="block"   
})

leftBt.addEventListener("mouseout",()=>{
    console.log("inside hover")
    document.querySelector(".tool_tip").style.display="none"   
    document.querySelector("#lft~.lft_inner").style.display="none"   
})

// right
let rgtBt= document.querySelector("#rgt")
rgtBt.addEventListener("mouseover",()=>{
    console.log("inside hover")
    document.querySelector("#rgt+.tool_tip").style.display="block"   
    document.querySelector("#rgt~.rgt_inner").style.display="block"   
})

rgtBt.addEventListener("mouseout",()=>{
    console.log("inside hover")
    document.querySelector("#rgt+.tool_tip").style.display="none"   
    document.querySelector("#rgt~.rgt_inner").style.display="none"   
})

// bottom
let btmBt= document.querySelector("#btm")
btmBt.addEventListener("mouseover",()=>{
    console.log("inside hover")
    document.querySelector("#btm+.tool_tip").style.display="block"   
    document.querySelector("#btm~.btm_inner").style.display="block"   
})
btmBt.addEventListener("mouseout",()=>{
    console.log("inside hover")
    document.querySelector("#btm+.tool_tip").style.display="none"   
    document.querySelector("#btm~.btm_inner").style.display="none"   
})

// top
let topBt= document.querySelector("#top")
topBt.addEventListener("mouseover",()=>{
    console.log("inside hover")
    document.querySelector("#top+.tool_tip").style.display="block"   
    document.querySelector("#top~.top_inner").style.display="block"   
})
topBt.addEventListener("mouseout",()=>{
    console.log("inside hover")
    document.querySelector("#top+.tool_tip").style.display="none"   
    document.querySelector("#top~.top_inner").style.display="none"   
})