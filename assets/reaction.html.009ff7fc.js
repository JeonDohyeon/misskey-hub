import{_ as i,o as n,c,a as e,b as a,w as s,d as t,e as r,r as h}from"./app.4aac5194.js";const d={},l=e("h1",{id:"reaction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reaction","aria-hidden":"true"},"#"),t(" Reaction")],-1),u=t("This feature allows you to easily convey your reactions to other people's notes by adding emojis. To react in Misskey Web, click the + icon on the note to show the picker and select an emoji. You can also react using "),m=t("custom emoji"),_=t("."),p=r('<h2 id="customising-the-reaction-picker" tabindex="-1"><a class="header-anchor" href="#customising-the-reaction-picker" aria-hidden="true">#</a> Customising the Reaction Picker</h2><p>In Misskey Web you can choose which emojis should appear in the picker and change the order they should appear in. You can set this in the &quot;Reactions&quot; section of the settings.</p><h2 id="reactions-to-remote-posts" tabindex="-1"><a class="header-anchor" href="#reactions-to-remote-posts" aria-hidden="true">#</a> Reactions to Remote Posts</h2><p>Since Reactions are an original Misskey feature, most of the time the activity will be sent to other instances as a &quot;Like&quot; unless the remote instance supports them. Usually, ActivityPub&#39;s &quot;Like&quot; is implemented as a favorite.</p><h2 id="reactions-from-remote-instances" tabindex="-1"><a class="header-anchor" href="#reactions-from-remote-instances" aria-hidden="true">#</a> Reactions from remote instances</h2><p>Since Misskey does not have likes, a &quot;Like&quot; from a remote instance will be displayed as a &#39;\u{1F44D}&#39; reaction.</p>',6),f={class:"custom-container tip"},y=e("i",{class:"fas fa-info"},null,-1),k=t("Your instance administrator may change this to be displayed as a '\u2B50' reaction. If you are an admin, see "),b=t("here"),g=t("."),v=e("h2",{id:"see-a-list-of-all-your-reactions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-a-list-of-all-your-reactions","aria-hidden":"true"},"#"),t(" See a list of all your reactions")],-1),x=e("p",null,'In Misskey Web, you can see the list of all the reactions you have made by opening the "Reactions" tab on your profile page. You can also choose to make this list public in the settings.',-1);function R(q,w){const o=h("RouterLink");return n(),c("div",null,[l,e("p",null,[u,a(o,{to:"/zh-CN/docs/features/custom-emoji.html"},{default:s(()=>[m]),_:1}),_]),p,e("div",f,[y,e("p",null,[k,a(o,{to:"/zh-CN/docs/admin/default-reaction.html"},{default:s(()=>[b]),_:1}),g])]),v,x])}var j=i(d,[["render",R],["__file","reaction.html.vue"]]);export{j as default};
