import{_ as p,o as f,c as b,b as i,w as d,a as e,d as r,r as t}from"./app.4aac5194.js";const m={},u=e("h1",{id:"notes-local-timeline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-local-timeline","aria-hidden":"true"},"#"),r(),e("code",null,"notes/local-timeline")],-1),y=e("p",null,"\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3 (LTL) \u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u5185\u306E\u5168\u3066\u306E\u30D1\u30D6\u30EA\u30C3\u30AF\u306A\u30CE\u30FC\u30C8\u304C\u542B\u307E\u308C\u307E\u3059\u3002",-1),_=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),r(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),h=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),r(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),E=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),r(" \u30A8\u30E9\u30FC")],-1),N=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),r(" \u30EA\u30BD\u30FC\u30B9")],-1);function D(L,I){const s=t("MkApiConsole"),a=t("ClientOnly"),n=t("MkSchemaViewerItemObject"),o=t("MkSchemaViewer"),c=t("MkApiErrors"),l=t("MkApiResources");return f(),b("div",null,[u,y,i(a,null,{default:d(()=>[i(s,{name:"notes/local-timeline",def:{summary:"\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3 (LTL) \u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",description:"\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3 (LTL) \u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u5185\u306E\u5168\u3066\u306E\u30D1\u30D6\u30EA\u30C3\u30AF\u306A\u30CE\u30FC\u30C8\u304C\u542B\u307E\u308C\u307E\u3059\u3002",tags:["notes"],requireCredential:!1,req:{type:"object",properties:{withFiles:{type:"boolean",default:!1,description:"true\u306B\u3059\u308B\u3068\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},fileType:{type:"array",items:{type:"string"},description:"\u6307\u5B9A\u3055\u308C\u305F\u7A2E\u985E\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u6295\u7A3F\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},excludeNsfw:{type:"boolean",default:!1,description:"true\u306B\u3059\u308B\u3068\u3001CW\u304C\u4ED8\u4E0E\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3068\u3001NSFW\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3092\u9664\u5916\u3057\u307E\u3059\u3002fileType\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u6709\u52B9\u3067\u3059\uFF08\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u306A\u3044CW\u4ED8\u304D\u306E\u30CE\u30FC\u30C8\u306F\u9664\u5916\u3055\u308C\u307E\u305B\u3093\uFF09\u3002"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CE\u30FC\u30C8\u306E\u6700\u5927\u6570\u3002"},sinceId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5927\u304D\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},untilId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5C0F\u3055\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},sinceDate:{type:"integer",description:"\u30A8\u30DD\u30C3\u30AF\u79D2\u3067\u65E5\u6642\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u65E5\u6642\u3088\u308A\u5F8C\u306B\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},untilDate:{type:"integer",description:"\u30A8\u30DD\u30C3\u30AF\u79D2\u3067\u65E5\u6642\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u65E5\u6642\u3088\u308A\u524D\u306B\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},errors:{"45a6eb02-7695-4393-b023-dd3be9aaaefd":{id:"45a6eb02-7695-4393-b023-dd3be9aaaefd",code:"LTL_DISABLED",description:"\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002"}}}},null,8,["def"])]),_:1}),_,i(a,null,{default:d(()=>[i(n,{schema:{type:"object",properties:{withFiles:{type:"boolean",default:!1,description:"true\u306B\u3059\u308B\u3068\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},fileType:{type:"array",items:{type:"string"},description:"\u6307\u5B9A\u3055\u308C\u305F\u7A2E\u985E\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u6295\u7A3F\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},excludeNsfw:{type:"boolean",default:!1,description:"true\u306B\u3059\u308B\u3068\u3001CW\u304C\u4ED8\u4E0E\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3068\u3001NSFW\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3092\u9664\u5916\u3057\u307E\u3059\u3002fileType\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u6709\u52B9\u3067\u3059\uFF08\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u306A\u3044CW\u4ED8\u304D\u306E\u30CE\u30FC\u30C8\u306F\u9664\u5916\u3055\u308C\u307E\u305B\u3093\uFF09\u3002"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CE\u30FC\u30C8\u306E\u6700\u5927\u6570\u3002"},sinceId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5927\u304D\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},untilId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5C0F\u3055\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},sinceDate:{type:"integer",description:"\u30A8\u30DD\u30C3\u30AF\u79D2\u3067\u65E5\u6642\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u65E5\u6642\u3088\u308A\u5F8C\u306B\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},untilDate:{type:"integer",description:"\u30A8\u30DD\u30C3\u30AF\u79D2\u3067\u65E5\u6642\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u65E5\u6642\u3088\u308A\u524D\u306B\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"}},required:[]}})]),_:1}),h,i(a,null,{default:d(()=>[i(o,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),E,i(a,null,{default:d(()=>[i(c,{errors:{"45a6eb02-7695-4393-b023-dd3be9aaaefd":{id:"45a6eb02-7695-4393-b023-dd3be9aaaefd",code:"LTL_DISABLED",description:"\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002"}},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),N,i(a,null,{default:d(()=>[i(l,{def:{summary:"\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3 (LTL) \u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",description:"\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3 (LTL) \u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u5185\u306E\u5168\u3066\u306E\u30D1\u30D6\u30EA\u30C3\u30AF\u306A\u30CE\u30FC\u30C8\u304C\u542B\u307E\u308C\u307E\u3059\u3002",tags:["notes"],requireCredential:!1,req:{type:"object",properties:{withFiles:{type:"boolean",default:!1,description:"true\u306B\u3059\u308B\u3068\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},fileType:{type:"array",items:{type:"string"},description:"\u6307\u5B9A\u3055\u308C\u305F\u7A2E\u985E\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u6295\u7A3F\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},excludeNsfw:{type:"boolean",default:!1,description:"true\u306B\u3059\u308B\u3068\u3001CW\u304C\u4ED8\u4E0E\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3068\u3001NSFW\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3092\u9664\u5916\u3057\u307E\u3059\u3002fileType\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u6709\u52B9\u3067\u3059\uFF08\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u306A\u3044CW\u4ED8\u304D\u306E\u30CE\u30FC\u30C8\u306F\u9664\u5916\u3055\u308C\u307E\u305B\u3093\uFF09\u3002"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CE\u30FC\u30C8\u306E\u6700\u5927\u6570\u3002"},sinceId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5927\u304D\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},untilId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5C0F\u3055\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},sinceDate:{type:"integer",description:"\u30A8\u30DD\u30C3\u30AF\u79D2\u3067\u65E5\u6642\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u65E5\u6642\u3088\u308A\u5F8C\u306B\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},untilDate:{type:"integer",description:"\u30A8\u30DD\u30C3\u30AF\u79D2\u3067\u65E5\u6642\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u65E5\u6642\u3088\u308A\u524D\u306B\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},errors:{"45a6eb02-7695-4393-b023-dd3be9aaaefd":{id:"45a6eb02-7695-4393-b023-dd3be9aaaefd",code:"LTL_DISABLED",description:"\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002"}}}},null,8,["def"])]),_:1})])}var T=p(m,[["render",D],["__file","local-timeline.html.vue"]]);export{T as default};
