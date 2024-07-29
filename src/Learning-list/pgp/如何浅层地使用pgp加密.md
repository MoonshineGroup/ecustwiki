# 如何浅层地使用pgp加密

## 1.原理

a 和 b 需要加密通信，有这么一种办法：a 准备自己的公钥(a_public)和私钥(a_secret)，b 准备自己的公钥(b_public)和私钥(b_secret), a 和 b 都把公钥公布到网上（交换公钥）。a 写信给 b，用b的公钥加密，只有b的私钥能够解开（RSA算法），并在结尾附上自己的公钥和写信时间日期以及信的哈希值作为签名说明自己是a，这样就实现了通信加密。

## 2.如何快速开始

a.获得pgp软件

​	[GnuPG - Download](https://www.gnupg.org/download/)

![image-20220420154809387](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201909880.png)

往下拉就能发现支持windows的版本，点击下载gpg4win

b.打开exe安装程序，一路next（在安装位置可以改成自己喜欢的路径）

c.打开“最近添加”里的kleopatra软件，这时 全部证书 处应该不存在任何记录

![image-20220420155028523](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201909826.png)

d.点击左上角文件，新建密钥对，创建你的公钥和私钥

e.创建完成后可以选择 导出 备份公钥，选择 备份私钥 导出 私钥

![](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201909994.png)

保存后应当出现如此的两个.asc文件

![image-20220420155452928](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201910789.png)

f.不妨来试一下自己给自己写加密信（用自己公钥加密），然后用自己私钥解密

​	创建txt文件里面随便写几句话

​	点击左上角签名加密 选择文件加密，会生成一个.gpg文件，这就是加密文件

​	![image-20220420155705128](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201909133.png)

​	回到kleopatra点击解密校验

![image-20220420155803906](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201909851.png)

​	解密成功

g.现在来给五号橙写一封加密文件

​	下载五号橙的公钥 .asc文件（tg群自取）

​	在kleopatra里选择左上角的导入，选择文件导入即可

​	![image-20220420160108361](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201909843.png)

​	这时就会出现五号橙的证书

​	在记事本上写一些奇怪的东西

![image-20220420160333754](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201909578.png)

​	在收件人处选择 为他人加密 选择wu2305……（会自动跳出）

​	![image-20220420160429669](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201909047.png)

​	点击签名/加密 记事本内容即可

![image-20220420160547196](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed@main/202204201909169.png)

​	把加密内容发给五号橙，他就能通过自己的私钥解密了

h.以上就是点对点pgp加密方法，可知加密消息只有收件人才能通过自己的私钥解开，在写加密邮件（文件）时别忘记选择收件人