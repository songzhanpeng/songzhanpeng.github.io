import{_ as n,c as s}from"./app.7f3f694b.js";const a={},p=s(`<h1 id="\u5EFA\u7ACB\u79EF\u6728" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u79EF\u6728" aria-hidden="true">#</a> \u5EFA\u7ACB\u79EF\u6728</h1><ol><li>\u79EF\u6728</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> extensionsConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">blocks</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u666E\u901A\u79EF\u6728</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">opcode</span><span class="token operator">:</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7C7B\u4F3C id \u4FDD\u6301\u552F\u4E00</span>
          <span class="token literal-property property">blockType</span><span class="token operator">:</span> <span class="token string">&#39;command&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u666E\u901A\u529F\u80FD\u79EF\u6728</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6253\u5F00\u8F66\u95E8&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u63CF\u8FF0\u6587\u6848</span>
          <span class="token literal-property property">callbackKey</span><span class="token operator">:</span> <span class="token string">&#39;unityOpenDoor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u56DE\u8C03\u51FD\u6570key</span>
          <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// \u53C2\u6570</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4E0B\u62C9\u79EF\u6728 \u4E00\u4E2A\u4E0B\u62C9</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">opcode</span><span class="token operator">:</span> <span class="token string">&#39;public1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7C7B\u4F3C id \u4FDD\u6301\u552F\u4E00</span>
          <span class="token literal-property property">blockType</span><span class="token operator">:</span> <span class="token string">&#39;command&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u666E\u901A\u529F\u80FD\u79EF\u6728</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6253\u5F00 [LIST]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u63CF\u8FF0\u6587\u6848</span>
          <span class="token literal-property property">callbackKey</span><span class="token operator">:</span> <span class="token string">&#39;unityOpenList&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u56DE\u8C03\u51FD\u6570key</span>
          <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token constant">LIST</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token comment">// type \u7C7B\u578B</span>
                  <span class="token literal-property property">menu</span><span class="token operator">:</span> <span class="token string">&#39;TYPE_1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94\u679A\u4E3E\u5217\u8868</span>
                  <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token comment">// \u9ED8\u8BA4\u4E0B\u6807 \u4ECE 1 \u5F00\u59CB</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token comment">// \u53C2\u6570</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4E0B\u62C9\u79EF\u6728 \u591A\u4E2A\u4E0B\u62C9</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">opcode</span><span class="token operator">:</span> <span class="token string">&#39;public1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7C7B\u4F3C id \u4FDD\u6301\u552F\u4E00</span>
          <span class="token literal-property property">blockType</span><span class="token operator">:</span> <span class="token string">&#39;command&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u666E\u901A\u529F\u80FD\u79EF\u6728</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;[ACTION] [LIST]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u63CF\u8FF0\u6587\u6848 \u53C2\u6570\u683C\u5F0F [ACTION] \u4E0E arguments \u4E00\u4E00\u5BF9\u5E94</span>
          <span class="token literal-property property">callbackKey</span><span class="token operator">:</span> <span class="token string">&#39;callbackKey&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u56DE\u8C03\u51FD\u6570key</span>
          <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token constant">LIST</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token comment">// type \u7C7B\u578B</span>
                  <span class="token literal-property property">menu</span><span class="token operator">:</span> <span class="token string">&#39;TYPE_1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94\u679A\u4E3E\u5217\u8868</span>
                  <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token comment">// \u9ED8\u8BA4\u4E0B\u6807 \u4ECE 1 \u5F00\u59CB</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token constant">ACTION</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token comment">// type \u7C7B\u578B</span>
                  <span class="token literal-property property">menu</span><span class="token operator">:</span> <span class="token string">&#39;ACTION_1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94\u679A\u4E3E\u5217\u8868</span>
                  <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token comment">// \u9ED8\u8BA4\u4E0B\u6807 \u4ECE 1 \u5F00\u59CB</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token comment">// \u53C2\u6570</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u53D8\u91CF\u79EF\u6728 \u65E0 callbackKey</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">opcode</span><span class="token operator">:</span> <span class="token string">&#39;temperature&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7C7B\u4F3C id \u4FDD\u6301\u552F\u4E00</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u7A7A\u8C03\u6E29\u5EA6 (\u2103)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u63CF\u8FF0\u6587\u6848</span>
          <span class="token literal-property property">blockType</span><span class="token operator">:</span> <span class="token string">&#39;reporter&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u53D8\u91CF \u7C7B\u578B</span>
          <span class="token literal-property property">variableKey</span><span class="token operator">:</span> <span class="token string">&#39;temperature&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u53D8\u91CF\u7C7B\u578Bkey</span>
          <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// \u65E0\u53C2\u6570</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5F53 \u3002\u3002\u3002 hat \u79EF\u6728</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">opcode</span><span class="token operator">:</span> <span class="token string">&#39;whenAuto&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">blockType</span><span class="token operator">:</span> <span class="token string">&#39;hat&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5F53\u63A5\u6536\u5230 [BOOLEAN]&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// callbackKey: &#39;callbackKey&#39;, // \u56DE\u8C03\u51FD\u6570key \u4E00\u4E2A [BOOLEAN] \u53EF\u4EE5\u4E0D\u4F20 callbackKey</span>
          <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token constant">BOOLEAN</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Boolean&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token boolean">false</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6761\u4EF6\u79EF\u6728</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">opcode</span><span class="token operator">:</span> <span class="token string">&#39;doorOpen&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u8F66\u95E8\u6253\u5F00&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">blockType</span><span class="token operator">:</span> <span class="token string">&#39;Blooean&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">callbackKey</span><span class="token operator">:</span> <span class="token punctuation">,</span>
          <span class="token literal-property property">arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">menus</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u679A\u4E3E\u96C6\u5408</span>
      <span class="token constant">ACTION_1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">acceptReporters</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u987B\u4E3A true</span>
          <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u4E0B\u62C9\u5217\u8868 text value</span>
              <span class="token punctuation">{</span>
                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6253\u5F00&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5173\u95ED&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token constant">TYPE_1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">acceptReporters</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u8F66\u95E8&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5929\u7A97&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u8F66\u706F&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5C5E\u6027</span>
      <span class="token literal-property property">doorStatus</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u8F66\u95E8\u72B6\u6001</span>
      <span class="token literal-property property">doorAngle</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u8F66\u95E8\u89D2\u5EA6</span>
      <span class="token literal-property property">temperature</span><span class="token operator">:</span> <span class="token number">26</span> <span class="token comment">// \u7A7A\u8C03\u6E29\u5EA6</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">unityInstance</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u56DE\u8C03\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">blocks</span><span class="token operator">:</span> extensionsConfig<span class="token punctuation">.</span>blocks<span class="token punctuation">,</span>
      <span class="token literal-property property">menus</span><span class="token operator">:</span> extensionsConfig<span class="token punctuation">.</span>menus<span class="token punctuation">,</span> <span class="token comment">// \u679A\u4E3E\u83DC\u5355</span>
      <span class="token literal-property property">variables</span><span class="token operator">:</span> extensionsConfig<span class="token punctuation">.</span>variables<span class="token punctuation">,</span> <span class="token comment">// \u5C5E\u6027</span>
      <span class="token comment">// \u5F00\u95E8</span>
      <span class="token function-variable function">unityOpenDoor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> runtime <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// runtime.attachCustomKey \u7ED1\u5B9A\u5C5E\u6027\u65B9\u6CD5</span>
          runtime<span class="token punctuation">.</span><span class="token function">attachCustomKey</span><span class="token punctuation">(</span><span class="token string">&#39;doorStatus&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u5F00\u95E8\u72B6\u6001</span>
          runtime<span class="token punctuation">.</span><span class="token function">attachCustomKey</span><span class="token punctuation">(</span><span class="token string">&#39;doorAngle&#39;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u5B9A\u8F66\u95E8\u89D2\u5EA6</span>
          unityInstance<span class="token punctuation">.</span><span class="token function">SendMessage</span><span class="token punctuation">(</span><span class="token string">&#39;\u53F3\u8F66\u95E8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;OnToggle&#39;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F00\u542Funity \u8F66\u95E8</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6253\u5F00 ... runtime =&gt; \u5B9E\u4F8B\u5BF9\u8C61 | args =&gt; \u53C2\u6570\u5BF9\u8C61 | realBlockInfo =&gt; \u5F53\u524D\u79EF\u6728\u5BF9\u8C61</span>
      <span class="token function-variable function">unityOpenList</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> runtime<span class="token punctuation">,</span> args<span class="token punctuation">,</span> realBlockInfo <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// ... \u7701\u7565\u903B\u8F91 \u81EA\u5DF1\u7EC4\u5408\u65B9\u6CD5 \u65E0return</span>

      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8F66\u95E8\u6253\u5F00 return \u5E03\u5C14\u503C ture || false</span>
      <span class="token function-variable function">doorOpen</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> runtime <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// runtime.getCustomKey \u83B7\u53D6\u5C5E\u6027\u65B9\u6CD5</span>
          <span class="token keyword">const</span> doorFlag <span class="token operator">=</span> runtime<span class="token punctuation">.</span><span class="token function">getCustomKey</span><span class="token punctuation">(</span><span class="token string">&#39;doorFlag&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> doorFlag
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function t(e,o){return p}var c=n(a,[["render",t],["__file","makeABlocks.html.vue"]]);export{c as default};
