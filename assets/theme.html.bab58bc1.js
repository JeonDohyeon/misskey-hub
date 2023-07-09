import{_ as a,o as e,c as n,e as s}from"./app.4aac5194.js";const o={},t=s(`<h1 id="motyw" tabindex="-1"><a class="header-anchor" href="#motyw" aria-hidden="true">#</a> Motyw</h1><p>Mo\u017Cesz zmieni\u0107 motyw kolorystyczny Misskey zgodnie z w\u0142asnym gustem.</p><h2 id="ustawienia-motywow" tabindex="-1"><a class="header-anchor" href="#ustawienia-motywow" aria-hidden="true">#</a> Ustawienia motyw\xF3w</h2><p>Ustawienia &gt; Motywy</p><h2 id="tworzenie-motywow" tabindex="-1"><a class="header-anchor" href="#tworzenie-motywow" aria-hidden="true">#</a> Tworzenie motyw\xF3w</h2><p>Motywy s\u0105 pisane za pomoc\u0105 JSON5. Motywy maj\u0105 obiekty tak jak ten przyk\u0142ad:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;17587283-dd92-4a2c-a22c-be0637c9e22a&#39;</span><span class="token punctuation">,</span>

 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Danboard&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&#39;syuilo&#39;</span><span class="token punctuation">,</span>

 <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span>

 <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">accent</span><span class="token operator">:</span> <span class="token string">&#39;rgb(218, 141, 49)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bg</span><span class="token operator">:</span> <span class="token string">&#39;rgb(218, 212, 190)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fg</span><span class="token operator">:</span> <span class="token string">&#39;rgb(115, 108, 92)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">panel</span><span class="token operator">:</span> <span class="token string">&#39;rgb(236, 232, 220)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">renote</span><span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mention</span><span class="token operator">:</span> <span class="token string">&#39;@accent&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hashtag</span><span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&#39;rgba(239, 227, 213, 0.75)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">navBg</span><span class="token operator">:</span> <span class="token string">&#39;rgb(216, 206, 182)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inputBorder</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.1)&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>id</code> ... ID Motywu. UUID jest rekomendowane.</li><li><code>name</code> ... Nazwa motywu</li><li><code>author</code> ... Autor motywu</li><li><code>desc</code> ... Opis motywu (Object)</li><li><code>base</code> ... tryb jasny czy ciemny? <ul><li>U\u017Cyj <code>light</code> dla jasnego i <code>dark</code> dla ciemnego trybu.</li><li>Motyw u\u017Cywa bazy wyspecyfikowanej.</li></ul></li><li><code>props</code> ... Definicje stylu motywu. Wyt\u0142umacznone w nast\u0119puj\u0105cych punktach.</li></ul><h3 id="definicje-stylow-motywu" tabindex="-1"><a class="header-anchor" href="#definicje-stylow-motywu" aria-hidden="true">#</a> Definicje styl\xF3w motywu</h3><p>Definiuj style motyw\xF3w z <code>props</code>. Warto\u015Bci to nazwy warto\u015Bci CSS i one ustawiaj\u0105 materia\u0142y.The Poza tym <code>props</code> pobiera dane z bazowego motywu. Bazowy motyw to <a href="https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_light.json5" target="_blank" rel="noopener noreferrer">_light.json5</a> je\u015Bli <code>base</code> motywu jest <code>light</code> i <a href="https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_dark.json5" target="_blank" rel="noopener noreferrer">_dark.json5</a> je\u015Bli <code>dark</code>. Je\u015Bli nie ma warto\u015Bci <code>props</code> nazwanej <code>panel</code> w motywie, to b\u0119dzie u\u017Cyta warto\u015B\u0107 <code>panel</code> z bazowego motywu.</p><h4 id="sk\u0142adnia-wartosci" tabindex="-1"><a class="header-anchor" href="#sk\u0142adnia-wartosci" aria-hidden="true">#</a> Sk\u0142adnia warto\u015Bci</h4><ul><li>Kolory w formacie <code>#rrggbb</code><ul><li>Na przyk\u0142ad: <code>#00ff00</code></li></ul></li><li>Kolory w formacie <code>rgb(r, g, b)</code><ul><li>Na przyk\u0142ad: <code>rgb(0, 255, 0)</code></li></ul></li><li>kolory w warto\u015Bciach alfa/przezroczysto\u015B\u0107 w formacie <code>rgb(r, g, b, a)</code><ul><li>przyk\u0142ad: <code>rgba(0, 255, 0, 0.5)</code></li></ul></li><li>Inne warto\u015Bci <ul><li><code>@{key name}</code> Nazwa warto\u015Bci z innego klucza. Zamie\u0144 <code>{key name}</code> z nazw\u0105 klucza do kt\xF3rego chcesz nawi\u0105za\u0107.</li><li>example: <code>@panel</code></li></ul></li><li>Zmienne: <ul><li><code>\${constant name}</code> nawi\u0105zuje do sta\u0142ej. Zamie\u0144 <code>{constant name}</code> z naw\u0105 sta\u0142ej do kt\xF3rej chcesz nawi\u0105za\u0107.</li><li>przyk\u0142ad: <code>$main</code></li></ul></li><li>Funkcje: <ul><li><code>:{nazwa funkcji}&lt;{argumenty}}&lt;{kod}</code></li></ul></li></ul><h4 id="sta\u0142e" tabindex="-1"><a class="header-anchor" href="#sta\u0142e" aria-hidden="true">#</a> Sta\u0142e</h4><p>Sta\u0142e s\u0105 przydatne kiedy masz warto\u015Bci kt\xF3rych nie chcesz wy\u015Bwietla\u0107 jako zmienn\u0105 CSS, ale chcesz u\u017Cy\u0107 ich jako warto\u015Bci dla innych zmiennych CSS.</p><h4 id="funkcje" tabindex="-1"><a class="header-anchor" href="#funkcje" aria-hidden="true">#</a> Funkcje</h4><p>WIP (TODO)</p>`,16),i=[t];function r(p,l){return e(),n("div",null,i)}var d=a(o,[["render",r],["__file","theme.html.vue"]]);export{d as default};
