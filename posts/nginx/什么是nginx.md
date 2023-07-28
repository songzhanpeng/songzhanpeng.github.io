---
title: 什么是nginx
description: day1
date: 2023-07-28
tags:
  - nginx
---

## 什么是 Nginx？

Nginx（发音为 "engine-x"）是一款高性能的开源Web服务器和反向代理服务器，也被称为HTTP服务器。由于其高性能、稳定性和低资源消耗，Nginx在当前互联网服务领域广泛应用，特别是在高并发环境下。它最初由Igor Sysoev开发，并于2004年首次公开发布。

## Nginx的主要特点

1. 高性能：Nginx采用异步非阻塞事件驱动的架构，可以处理大量并发连接而不会产生高额的内存和CPU开销。

2. 负载均衡：Nginx可以作为反向代理服务器，实现负载均衡，将客户端请求分发给多个后端服务器，提高系统的稳定性和可扩展性。

3. 高度可定制：Nginx提供丰富的模块化支持，用户可以根据自己的需求定制和扩展功能。

4. 热部署：Nginx支持在运行时更新配置文件和升级，无需重启服务，避免了中断服务。

5. 支持反向代理、正向代理、TCP/UDP代理等多种代理模式。

6. 强大的缓存功能：Nginx支持静态文件缓存、反向代理缓存等，提高访问速度和减轻后端服务器负载。

7. SSL/TLS支持：Nginx支持安全套接层和传输层安全协议，可以实现HTTPS协议的加密传输。

8. 可靠性和稳定性：Nginx被广泛应用于一些高访问量和高可用性的场景，如大型网站、应用程序负载均衡、内容分发网络（CDN）等。

## 补充资料

Nginx的官方网站：[https://nginx.org/](https://nginx.org/)

总结：Nginx是一款高性能、稳定性强、低资源消耗的Web服务器和反向代理服务器，支持负载均衡、热部署和丰富的定制功能，被广泛应用于高并发场景。

## 设置全局配置，工作进程数与最大连接数

```nginx
worker_processes auto;  # 自动设置工作进程数，可根据 CPU 核心数自动调整
events {
    worker_connections 1024;  # 单个工作进程的最大连接数
}

http {
    include mime.types;  # 包含 MIME 类型配置文件

    # 定义日志格式，详细记录访问信息
    log_format detailed '$remote_addr - $remote_user [$time_local] "$request" '
                        '$status $body_bytes_sent "$http_referer" '
                        '"$http_user_agent" "$http_x_forwarded_for"';
    
    # 设置访问日志的路径与格式
    access_log /var/log/nginx/access.log detailed;

    # 设置错误日志的路径与级别
    error_log /var/log/nginx/error.log warn;

    # 配置服务器
    server {
        listen 80;  # 监听80端口

        server_name example.com;  # 服务器域名

        root /var/www/example;  # 服务器根目录

        # 开启gzip压缩
        gzip on;
        gzip_types text/plain text/css application/javascript application/json;

        # 配置首页
        location / {
            index index.html;  # 默认访问index.html
        }

        # 配置静态资源
        location /static {
            alias /var/www/example/static;  # 静态资源目录
            expires 7d;  # 设置缓存过期时间为7天
        }

        # 反向代理到后端应用
        location /api {
            proxy_pass http://127.0.0.1:8000;  # 后端应用地址
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        # 处理 Vue.js 前端路由
        location / {
            try_files $uri $uri/ /index.html;  # 尝试匹配静态文件，否则返回index.html
        }

        # 配置 SSL
        # ssl_certificate /etc/nginx/ssl/example.com.crt;  # SSL 证书路径
        # ssl_certificate_key /etc/nginx/ssl/example.com.key;  # SSL 证书密钥路径
        # ssl_protocols TLSv1.2 TLSv1.3;  # 支持的 SSL 协议版本
        # ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384';  # 加密套件
        # ssl_prefer_server_ciphers on;  # 优先使用服务器端密码

        # 安全配置
        # add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;  # 强制启用 HSTS，将来自 HTTP 的请求自动重定向到 HTTPS

        # 防止点击劫持
        # add_header X-Frame-Options SAMEORIGIN;

        # 防止跨站点脚本攻击
        # add_header X-XSS-Protection "1; mode=block";

        # 防止内容嗅探器嗅探 MIME 类型
        # add_header X-Content-Type-Options nosniff;

        # 取消注释以下配置，开启 HTTP/2
        # listen 443 ssl http2;
        # ssl_certificate /etc/nginx/ssl/example.com.crt;  # SSL 证书路径
        # ssl_certificate_key /etc/nginx/ssl/example.com.key;  # SSL 证书密钥路径
        # ssl_protocols TLSv1.2 TLSv1.3;  # 支持的 SSL 协议版本
        # ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384';  # 加密套件
        # ssl_prefer_server_ciphers on;  # 优先使用服务器端密码

        # 开启 HTTP/2 的同时开启 Brotli 压缩
        # brotli on;
        # brotli_comp_level 6;
        # brotli_types text/plain text/css application/javascript application/json;

        # 配置限速
        # limit_req_zone $binary_remote_addr zone=api:10m rate=1r/s;  # 针对/api接口每秒限制请求次数为1次
        # limit_req_status 429;  # 请求频繁返回 429 错误

        # 配置缓存
        # proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m;  # 配置缓存路径与大小
        # proxy_cache my_cache;  # 使用名为my_cache的缓存

        # 配置 SSL 证书缓存
        # ssl_session_cache shared:SSL:10m;
        # ssl_session_timeout 10m;
    }
}

```
