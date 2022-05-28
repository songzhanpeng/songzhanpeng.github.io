import{_ as n,e as s}from"./app.de48b5db.js";const a={},e=s(`<h1 id="blocktype-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#blocktype-\u7C7B\u578B" aria-hidden="true">#</a> BlockType \u7C7B\u578B</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> BlockType <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Boolean reporter with hexagonal shape
     */</span>
    <span class="token constant">BOOLEAN</span><span class="token operator">:</span> <span class="token string">&#39;Boolean&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6761\u4EF6\u79EF\u6728 \u5C16\u62EC\u53F7\u7684\u90A3\u79CD \u51FD\u6570\u8FD4\u56DE\u503C\u5FC5\u987B\u662Fboolean</span>

    <span class="token doc-comment comment">/**
     * A button (not an actual block) for some special action, like making a variable
     */</span>
    <span class="token constant">BUTTON</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6309\u94AE\u5F62\u72B6\u7684\u79EF\u6728 \u6682\u65F6\u7528\u4E0D\u5230</span>

    <span class="token doc-comment comment">/**
     * Command block
     */</span>
    <span class="token constant">COMMAND</span><span class="token operator">:</span> <span class="token string">&#39;command&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u51C6\u79EF\u6728 \u6CA1\u6709\u8FD4\u56DE\u503C \u53EA\u6709\u6267\u884C\u7684\u51FD\u6570</span>

    <span class="token doc-comment comment">/**
     * Specialized command block which may or may not run a child branch
     * The thread continues with the next block whether or not a child branch ran.
     */</span>
    <span class="token constant">CONDITIONAL</span><span class="token operator">:</span> <span class="token string">&#39;conditional&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6761\u4EF6\u79EF\u6728 \u6682\u65F6\u7528\u4E0D\u5230</span>

    <span class="token doc-comment comment">/**
     * Specialized hat block with no implementation function
     * This stack only runs if the corresponding event is emitted by other code.
     */</span>
    <span class="token constant">EVENT</span><span class="token operator">:</span> <span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E8B\u4EF6\u79EF\u6728 \u6682\u65F6\u7528\u4E0D\u5230</span>

    <span class="token doc-comment comment">/**
     * Hat block which conditionally starts a block stack
     */</span>
    <span class="token constant">HAT</span><span class="token operator">:</span> <span class="token string">&#39;hat&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u76D1\u542C\u79EF\u6728</span>

    <span class="token doc-comment comment">/**
     * Specialized command block which may or may not run a child branch
     * If a child branch runs, the thread evaluates the loop block again.
     */</span>
    <span class="token constant">LOOP</span><span class="token operator">:</span> <span class="token string">&#39;loop&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6682\u65F6\u7528\u4E0D\u5230</span>

    <span class="token doc-comment comment">/**
     * General reporter with numeric or string value
     * \u53D8\u91CF
     */</span>
    <span class="token constant">REPORTER</span><span class="token operator">:</span> <span class="token string">&#39;reporter&#39;</span> <span class="token comment">// \u53D8\u91CF\u79EF\u6728 \u8FD4\u56DE \u5BF9\u5E94\u7684\u503C</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="blocktype-\u7C7B\u578B2" tabindex="-1"><a class="header-anchor" href="#blocktype-\u7C7B\u578B2" aria-hidden="true">#</a> BlockType \u7C7B\u578B2</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> BlockType <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Boolean reporter with hexagonal shape
     */</span>
    <span class="token constant">BOOLEAN</span><span class="token operator">:</span> <span class="token string">&#39;Boolean&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6761\u4EF6\u79EF\u6728 \u5C16\u62EC\u53F7\u7684\u90A3\u79CD \u51FD\u6570\u8FD4\u56DE\u503C\u5FC5\u987B\u662Fboolean</span>

    <span class="token doc-comment comment">/**
     * A button (not an actual block) for some special action, like making a variable
     */</span>
    <span class="token constant">BUTTON</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6309\u94AE\u5F62\u72B6\u7684\u79EF\u6728 \u6682\u65F6\u7528\u4E0D\u5230</span>

    <span class="token doc-comment comment">/**
     * Command block
     */</span>
    <span class="token constant">COMMAND</span><span class="token operator">:</span> <span class="token string">&#39;command&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u51C6\u79EF\u6728 \u6CA1\u6709\u8FD4\u56DE\u503C \u53EA\u6709\u6267\u884C\u7684\u51FD\u6570</span>

    <span class="token doc-comment comment">/**
     * Specialized command block which may or may not run a child branch
     * The thread continues with the next block whether or not a child branch ran.
     */</span>
    <span class="token constant">CONDITIONAL</span><span class="token operator">:</span> <span class="token string">&#39;conditional&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6761\u4EF6\u79EF\u6728 \u6682\u65F6\u7528\u4E0D\u5230</span>

    <span class="token doc-comment comment">/**
     * Specialized hat block with no implementation function
     * This stack only runs if the corresponding event is emitted by other code.
     */</span>
    <span class="token constant">EVENT</span><span class="token operator">:</span> <span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E8B\u4EF6\u79EF\u6728 \u6682\u65F6\u7528\u4E0D\u5230</span>

    <span class="token doc-comment comment">/**
     * Hat block which conditionally starts a block stack
     */</span>
    <span class="token constant">HAT</span><span class="token operator">:</span> <span class="token string">&#39;hat&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u76D1\u542C\u79EF\u6728</span>

    <span class="token doc-comment comment">/**
     * Specialized command block which may or may not run a child branch
     * If a child branch runs, the thread evaluates the loop block again.
     */</span>
    <span class="token constant">LOOP</span><span class="token operator">:</span> <span class="token string">&#39;loop&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6682\u65F6\u7528\u4E0D\u5230</span>

    <span class="token doc-comment comment">/**
     * General reporter with numeric or string value
     * \u53D8\u91CF
     */</span>
    <span class="token constant">REPORTER</span><span class="token operator">:</span> <span class="token string">&#39;reporter&#39;</span> <span class="token comment">// \u53D8\u91CF\u79EF\u6728 \u8FD4\u56DE \u5BF9\u5E94\u7684\u503C</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function i(c,l){return e}var o=n(a,[["render",i],["__file","BlockType.html.vue"]]);export{o as default};
