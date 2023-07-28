import{_ as s,c as n,o as a,V as l}from"./chunks/framework.3bce2be7.js";const E=JSON.parse('{"title":"什么是nginx","description":"day1","frontmatter":{"title":"什么是nginx","description":"day1","date":"2023-07-28T00:00:00.000Z","tags":["nginx"]},"headers":[],"relativePath":"posts/nginx/什么是nginx.md"}'),p={name:"posts/nginx/什么是nginx.md"},o=l(`<h2 id="什么是-nginx" tabindex="-1">什么是 Nginx？ <a class="header-anchor" href="#什么是-nginx" aria-label="Permalink to &quot;什么是 Nginx？&quot;">​</a></h2><p>Nginx（发音为 &quot;engine-x&quot;）是一款高性能的开源Web服务器和反向代理服务器，也被称为HTTP服务器。由于其高性能、稳定性和低资源消耗，Nginx在当前互联网服务领域广泛应用，特别是在高并发环境下。它最初由Igor Sysoev开发，并于2004年首次公开发布。</p><h2 id="nginx的主要特点" tabindex="-1">Nginx的主要特点 <a class="header-anchor" href="#nginx的主要特点" aria-label="Permalink to &quot;Nginx的主要特点&quot;">​</a></h2><ol><li><p>高性能：Nginx采用异步非阻塞事件驱动的架构，可以处理大量并发连接而不会产生高额的内存和CPU开销。</p></li><li><p>负载均衡：Nginx可以作为反向代理服务器，实现负载均衡，将客户端请求分发给多个后端服务器，提高系统的稳定性和可扩展性。</p></li><li><p>高度可定制：Nginx提供丰富的模块化支持，用户可以根据自己的需求定制和扩展功能。</p></li><li><p>热部署：Nginx支持在运行时更新配置文件和升级，无需重启服务，避免了中断服务。</p></li><li><p>支持反向代理、正向代理、TCP/UDP代理等多种代理模式。</p></li><li><p>强大的缓存功能：Nginx支持静态文件缓存、反向代理缓存等，提高访问速度和减轻后端服务器负载。</p></li><li><p>SSL/TLS支持：Nginx支持安全套接层和传输层安全协议，可以实现HTTPS协议的加密传输。</p></li><li><p>可靠性和稳定性：Nginx被广泛应用于一些高访问量和高可用性的场景，如大型网站、应用程序负载均衡、内容分发网络（CDN）等。</p></li></ol><h2 id="补充资料" tabindex="-1">补充资料 <a class="header-anchor" href="#补充资料" aria-label="Permalink to &quot;补充资料&quot;">​</a></h2><p>Nginx的官方网站：<a href="https://nginx.org/" target="_blank" rel="noreferrer">https://nginx.org/</a></p><p>总结：Nginx是一款高性能、稳定性强、低资源消耗的Web服务器和反向代理服务器，支持负载均衡、热部署和丰富的定制功能，被广泛应用于高并发场景。</p><h2 id="设置全局配置-工作进程数与最大连接数" tabindex="-1">设置全局配置，工作进程数与最大连接数 <a class="header-anchor" href="#设置全局配置-工作进程数与最大连接数" aria-label="Permalink to &quot;设置全局配置，工作进程数与最大连接数&quot;">​</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">worker_processes </span><span style="color:#A6ACCD;">auto</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 自动设置工作进程数，可根据 CPU 核心数自动调整</span></span>
<span class="line"><span style="color:#C792EA;">events</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> worker_connections </span><span style="color:#A6ACCD;">1024</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 单个工作进程的最大连接数</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">http</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">mime.types</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 包含 MIME 类型配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 定义日志格式，详细记录访问信息</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> log_format </span><span style="color:#A6ACCD;">detailed </span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#C3E88D;"> - </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_user</span><span style="color:#C3E88D;"> [</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">time_local</span><span style="color:#C3E88D;">] &quot;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#C3E88D;">&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">status</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">body_bytes_sent</span><span style="color:#C3E88D;"> &quot;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_referer</span><span style="color:#C3E88D;">&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#C3E88D;">&#39;&quot;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_user_agent</span><span style="color:#C3E88D;">&quot; &quot;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_for</span><span style="color:#C3E88D;">&quot;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 设置访问日志的路径与格式</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> access_log </span><span style="color:#A6ACCD;">/var/log/nginx/access.log detailed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 设置错误日志的路径与级别</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> error_log </span><span style="color:#A6ACCD;">/var/log/nginx/error.log</span><span style="color:#89DDFF;"> warn;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 配置服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 监听80端口</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">example.com</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 服务器域名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">/var/www/example</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 服务器根目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 开启gzip压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> gzip </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> gzip_types </span><span style="color:#A6ACCD;">text/plain text/css application/javascript application/json</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 配置首页</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;">index.html</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 默认访问index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 配置静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/static </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> alias </span><span style="color:#A6ACCD;">/var/www/example/static</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 静态资源目录</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> expires </span><span style="color:#A6ACCD;">7d</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 设置缓存过期时间为7天</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 反向代理到后端应用</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/api </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:8000</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 后端应用地址</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 处理 Vue.js 前端路由</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> try_files $</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 尝试匹配静态文件，否则返回index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 配置 SSL</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_certificate /etc/nginx/ssl/example.com.crt;  # SSL 证书路径</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_certificate_key /etc/nginx/ssl/example.com.key;  # SSL 证书密钥路径</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_protocols TLSv1.2 TLSv1.3;  # 支持的 SSL 协议版本</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_ciphers &#39;ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384&#39;;  # 加密套件</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_prefer_server_ciphers on;  # 优先使用服务器端密码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 安全配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># add_header Strict-Transport-Security &quot;max-age=31536000; includeSubDomains&quot; always;  # 强制启用 HSTS，将来自 HTTP 的请求自动重定向到 HTTPS</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 防止点击劫持</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># add_header X-Frame-Options SAMEORIGIN;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 防止跨站点脚本攻击</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># add_header X-XSS-Protection &quot;1; mode=block&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 防止内容嗅探器嗅探 MIME 类型</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># add_header X-Content-Type-Options nosniff;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 取消注释以下配置，开启 HTTP/2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># listen 443 ssl http2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_certificate /etc/nginx/ssl/example.com.crt;  # SSL 证书路径</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_certificate_key /etc/nginx/ssl/example.com.key;  # SSL 证书密钥路径</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_protocols TLSv1.2 TLSv1.3;  # 支持的 SSL 协议版本</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_ciphers &#39;ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384&#39;;  # 加密套件</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_prefer_server_ciphers on;  # 优先使用服务器端密码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 开启 HTTP/2 的同时开启 Brotli 压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># brotli on;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># brotli_comp_level 6;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># brotli_types text/plain text/css application/javascript application/json;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 配置限速</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># limit_req_zone $binary_remote_addr zone=api:10m rate=1r/s;  # 针对/api接口每秒限制请求次数为1次</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># limit_req_status 429;  # 请求频繁返回 429 错误</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 配置缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m;  # 配置缓存路径与大小</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># proxy_cache my_cache;  # 使用名为my_cache的缓存</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 配置 SSL 证书缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_session_cache shared:SSL:10m;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># ssl_session_timeout 10m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,9),e=[o];function t(c,r,i,y,C,A){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{E as __pageData,F as default};
