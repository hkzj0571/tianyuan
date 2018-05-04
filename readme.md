##1.申请阿里云ssl证书

<p align="center"><img src="https://lccdn.phphub.org/uploads/images/201804/16/19875/spA1bAQfIr.png?imageView2/2/w/1240/h/0"></p>

回到管理页面补全信息&添加域名解析,<br>
等待几分钟，证书状态变为“已签发”后证书就申请成功了。

##2.下载证书&上传证书

<p align="center"><img src="https://lccdn.phphub.org/uploads/images/201804/16/19875/ayAnkzVX82.png?imageView2/2/w/1240/h/0"></p>

进入下载页面，找到ngin页签中nginx配置信息，并“下载证书 for Nginx”：

<p align="center"><img src="https://lccdn.phphub.org/uploads/images/201804/16/19875/NcCXfYbHFN.png?imageView2/2/w/1240/h/0"></p>

下载的文件有两个：

1，214593789770361.pem

2，214593789770361.key

登录到服务器：
```shell
$ apt-get update // 更新软件
```
```shell
$ apt-get install nginx // 安装nginx
```
```shell
$ mkdir /etc/nginx/cert // 创建cert文件夹，把刚刚下载的两个文件上传到cert/文件夹中。
```

##3.配置Nginx

进入nginx配置文件 路径为 `/etc/nginx/sites-available`

```shell
$ vim default // 进入配置文件
```
在配置文件中添加：

````
server {
    listen 443;
    server_name your-domain.com; // 你的域名
    ssl on;
    root /var/www/html; // 前台文件存放文件夹，可改成别的
    index index.html index.htm;// 上面配置的文件夹里面的index.html
    ssl_certificate  cert/214292799730473.pem;// 改成你的证书的名字
    ssl_certificate_key cert/214292799730473.key;// 你的证书的名字
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    location / {
        index index.html index.htm;
    }
}
server {
    listen 80;
    server_name your-domain.com;// 你的域名
    rewrite ^(.*)$ https://$host$1 permanent;// 把http的域名请求转成https
}
````

配置完成后，检查一下nginx配置文件是否可用，有successful表示可用。

```shell
$ nginx -t // 检查nginx配置文件
```

配置正确后，重新加载配置文件使配置生效：
```shell
$ nginx -s reload // 使配置生效
```

至此，nginx的https访问就完成了，并且通过rewrite方式把所有http请求也转成了https请求，更加安全。

如需重启nginx，用以下命令：

```shell
$ service nginx stop // 停止
$ service nginx start // 启动
$ service nginx restart // 重启
```
##配置成功YEP:smile: 
<p align="center"><img src="https://lccdn.phphub.org/uploads/images/201804/16/19875/N32wWIRZlC.png?imageView2/2/w/1240/h/0"></p>

<p align="center" style="
                      text-align: center;
                  "><img src="https://lccdn.phphub.org/uploads/images/201804/16/19875/kSZVlihflH.jpg?imageView2/2/w/1240/h/0"></p>
:8ball: :8ball: 



