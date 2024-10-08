import{r as i,l as x,c as b,a as s,b as _,w as m,m as n,p as k,q as y,s as C,t as P,j as V,x as A,i as B,d as I,F as D,u as G,o as g}from"./index-BctBQjQS.js";import{g as j}from"./imageLoader-CAYlq8YK.js";import{a as $}from"./axios-CCb-kr4I.js";const z={class:"wrapper"},F={class:"section-authentication-cover"},H={class:""},K={class:"row g-0"},L={class:"col-12 col-xl-7 col-xxl-8 auth-cover-left align-items-center justify-content-center d-none d-xl-flex"},R={class:"card shadow-none bg-transparent shadow-none rounded-0 mb-0"},J={class:"card-body"},O=["src"],W={class:"col-12 col-xl-5 col-xxl-4 auth-cover-right bg-dark bg-opacity-10 align-items-center justify-content-center"},Q={class:"card rounded-0 m-3 shadow-none bg-transparent mb-0"},X={class:"card-body p-sm-5"},Y={class:""},Z={class:"mb-3 text-center"},ss=["src"],es={class:"form-body"},ts={class:"col-12"},ls={class:"col-12"},is={class:"col-12"},os={class:"input-group",id:"show_hide_password_1"},as=["type"],ns={key:0,class:"text-danger"},rs={class:"col-12"},ds={class:"input-group",id:"show_hide_password_2"},cs=["type"],us={key:0,class:"text-danger"},ps={class:"col-12"},ms={class:"form-check form-switch"},hs={class:"col-12"},vs={class:"text-center"},bs={class:"mb-0"},_s={__name:"signUp",setup(gs){const h=i(""),v=i(""),r=i(""),d=i(""),f=G(),c=i(!1),u=i(!1),U=x(()=>c.value?"bx bx-show":"bx bx-hide"),E=x(()=>u.value?"bx bx-show":"bx bx-hide"),o=i(""),a=i(""),p=i(!1);console.log(p.value);function w(t){t===1?c.value=!c.value:u.value=!u.value}function M(){r.value.length<8?o.value="Password must be at least 8 characters long.":o.value=""}function T(){d.value!==r.value?a.value="Passwords do not match.":a.value=""}const N="http://danganhtu.id.vn";async function S(){if(a.value!=="")alert("Mật khẩu không trùng khớp");else if(o.value!=="")alert("Mật khẩu không đúng định dạng");else if(!p.value)alert("Hãy chấp nhận điều khoản và điều kiện");else try{const t=await $.post(`${N}/api/auth/register`,{email:v.value,password:d.value,fullname:h.value},{headers:{Accept:"*/*","Content-Type":"application/json"}});console.log(t),f.push("/singIn")}catch(t){if(t.response&&t.response.status===422){const e=t.response.data.errors;console.log(e),alert(t.response.data.message)}else console.error("Có lỗi xảy ra:",t);console.error("Login error:",t),alert("Đăng kí không thành công. Vui lòng kiểm tra lại thông tin.")}}function q(){f.push("/signIn")}return(t,e)=>(g(),b(D,null,[s("div",z,[s("div",F,[s("div",H,[s("div",K,[s("div",L,[s("div",R,[s("div",J,[s("img",{src:_(j)("login-images/register-cover.svg"),class:"img-fluid auth-img-cover-login",width:"550",alt:""},null,8,O)])])]),s("div",W,[s("div",Q,[s("div",X,[s("div",Y,[s("div",Z,[s("img",{src:_(j)("logo-icon.png"),width:"60",alt:""},null,8,ss)]),e[14]||(e[14]=s("div",{class:"text-center mb-4"},[s("h5",{class:""},"Dashcube Admin"),s("p",{class:"mb-0"},"Please fill the below details to create your account")],-1)),s("div",es,[s("form",{class:"row g-3",onSubmit:m(S,["prevent"])},[s("div",ts,[e[7]||(e[7]=s("label",{for:"inputUsername",class:"form-label"},"Tên tài khoản ",-1)),n(s("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>h.value=l),class:"form-control",id:"inputUsername",name:"username",placeholder:"Jhon",required:""},null,512),[[k,h.value]])]),s("div",ls,[e[8]||(e[8]=s("label",{for:"inputEmailAddress",class:"form-label"},"Địa chỉ Email ",-1)),n(s("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>v.value=l),type:"email",class:"form-control",id:"inputEmailAddress",name:"email",placeholder:"example@user.com",required:""},null,512),[[k,v.value]])]),s("div",is,[e[9]||(e[9]=s("label",{for:"inputPassword",class:"form-label"},"Mật Khẩu ",-1)),s("div",os,[n(s("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>r.value=l),type:c.value?"text":"password",class:"form-control border-end-0",id:"inputPassword",name:"password",placeholder:"Enter Password",required:"",onInput:M},null,40,as),[[y,r.value]]),s("a",{href:"javascript:;",onClick:e[3]||(e[3]=m(l=>w(1),["prevent"])),class:"input-group-text bg-transparent"},[s("i",{class:C(U.value)},null,2)])]),o.value?(g(),b("span",ns,P(o.value),1)):V("",!0)]),s("div",rs,[e[10]||(e[10]=s("label",{for:"inputConfirmPassword",class:"form-label"},"Nhập lại mật khẩu ",-1)),s("div",ds,[n(s("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>d.value=l),type:u.value?"text":"password",class:"form-control border-end-0",id:"inputConfirmPassword",name:"confirm_password",placeholder:"Confirm Password",required:"",onInput:T},null,40,cs),[[y,d.value]]),s("a",{href:"javascript:;",onClick:e[5]||(e[5]=m(l=>w(2),["prevent"])),class:"input-group-text bg-transparent"},[s("i",{class:C(E.value)},null,2)])]),a.value?(g(),b("span",us,P(a.value),1)):V("",!0)]),s("div",ps,[s("div",ms,[n(s("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>p.value=l),class:"form-check-input",type:"checkbox",id:"flexSwitchCheckChecked",name:"terms",required:""},null,512),[[A,p.value]]),e[11]||(e[11]=s("label",{class:"form-check-label",for:"flexSwitchCheckChecked"}," I read and agree to Terms & Conditions ",-1))])]),e[13]||(e[13]=s("div",{class:"col-12"},[s("div",{class:"d-grid"},[s("button",{type:"submit",class:"btn btn-light"},"Đăng Kí")])],-1)),s("div",hs,[s("div",vs,[s("p",bs,[e[12]||(e[12]=B(" Bạn đã có tài khoản? ")),s("a",{href:"#",onClick:m(q,["prevent"])},"Đăng nhập tại đây")])])])],32)]),e[15]||(e[15]=I('<div class="login-separater text-center mb-5"><span>OR SIGN UP WITH EMAIL</span><hr></div><div class="list-inline contacts-social text-center"><a href="javascript:;" class="list-inline-item bg-light text-white border-0 rounded-3"><i class="bx bxl-facebook"></i></a><a href="javascript:;" class="list-inline-item bg-light text-white border-0 rounded-3"><i class="bx bxl-twitter"></i></a><a href="javascript:;" class="list-inline-item bg-light text-white border-0 rounded-3"><i class="bx bxl-google"></i></a><a href="javascript:;" class="list-inline-item bg-light text-white border-0 rounded-3"><i class="bx bxl-linkedin"></i></a></div>',2))])])])])])])])]),e[16]||(e[16]=I('<div class="switcher-wrapper"><div class="switcher-btn"><i class="bx bx-cog bx-spin"></i></div><div class="switcher-body"><div class="d-flex align-items-center"><h5 class="mb-0 text-uppercase">Theme Customizer</h5><button type="button" class="btn-close ms-auto close-switcher" aria-label="Close"></button></div><hr><p class="mb-0">Gaussian Texture</p><hr><ul class="switcher"><li id="theme1"></li><li id="theme2"></li><li id="theme3"></li><li id="theme4"></li><li id="theme5"></li><li id="theme6"></li></ul><hr><p class="mb-0">Gradient Background</p><hr><ul class="switcher"><li id="theme7"></li><li id="theme8"></li><li id="theme9"></li><li id="theme10"></li><li id="theme11"></li><li id="theme12"></li><li id="theme13"></li><li id="theme14"></li><li id="theme15"></li></ul></div></div>',1))],64))}};export{_s as default};
