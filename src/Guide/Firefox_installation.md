---
title: How to use Flash in Nowadays
lang: zh-CN
author: CIC-Corestaff
---

# Flash安装教程

Adobe Flash虽然被淘汰了，但是China Gov很多component都还在使用flash，国内的依赖性极强，为此特地遗留了一个余毒：中国特供版Flash，夹杂着大量的广告和奇奇怪怪的内容。

为此，CIC-CoreStaff特地找了破解地区限制的国际版Adobe Flash给大家，防止大家的电脑被喂💩。然而，绝大多数的浏览器都已经不再支持Adobe Flash，很多同学不得不安装360安全浏览器（~~毒王全家桶~~）。实际上，还有一个不知名的开源浏览器仍在支持，__Firefox-esr__！

## 简介

Firefox-ESR全名为firefox-extend-support-release，对于一部分的遗弃特性提供了支持，其中就包括Flash。同时，Firefox也是Mozilla基金会旗下最大的开源项目Gecko的一部分，保证其代码以及组件中没有恶意的内容和过于频繁的广告（有一点点推广）。

Flash是Adobe公司早年推出的一款互联网交互应用运行工具，在那个JS尚且不完善，WASM远远没有出现的年代，要想开发一个网页小游戏或者是在网页上嵌入视频或者交互式内容，唯一可以使用的工具就是Flash。

经历了这么多年之后，互联网上积累了大量的用Flash编写的应用程序。在HTML5出现之后，大部分的商业内容都转换到了HTML5平台，放弃了对于Flash的支持，Adobe公司也在2020年彻底放弃了对于Adobe的安全性支持。

商业服务是转换了，但是政府平台以及一些非盈利多媒体平台都无力转换这些积累下来的Flash资。为此，国内的Flash版本由重橙网络继续提供支持~~就是垃圾罢了，有的时候就改一个版本号~~。我校的线上实验平台正是这些线上非盈利多媒体平台中的一个。

由于国内版本的Flash组件会自带Flash大厅这一个垃圾狗皮膏药，而我们能够获得的原生国际版安装包会检测用户的IP地址是否为中国区，这也迫使大多数的中国用户不得不喂自己的电脑吃

在本文中，CIC-CoreStaff将会向您介绍如何配置好一个2022年的Flash运行环境：

## 下载软件

我们需要下载的软件有以下几个：

1. [Firefox-ESR v78.15.0-esr](https://ftp.mozilla.org/pub/firefox/releases/78.15.0esr/win64/zh-CN/Firefox%20Setup%2078.15.0esr.msi)
2. Adobe Flash Player 最终国际版
3. (Optional) CleanFlash
4. (Optional) Ruffle
::: info 关于Firefox-esr的版本选择
并不是所有的esr版本都是支持Flash的，目前仍然在维护中的92-esr就是不支持Flash的，最后一个支持flash的大版本是78。虽然理论上在78之前的版本都可以选择，但是过老的版本在安全性上有着较大的漏洞，对于JS的实现也是有一定不同的，建议不选择68-esr之前的版本。
:::

## 配置过程

### 方案一

使用现有的浏览器，添加Ruffle插件即可，会有编码显示问题以及兼容性问题，大致上可以正常使用，推荐手残人群使用。

### 方案二

> 使用Firefox-ESR配合最后一个版本的国际版

1. 安装Firefox-ESR，并不要勾选立即启动，否则会导致Firefox自动更新至最新的92-esr版本

2. 更改注册表中的值，阻止Firefox的自动更新，命令如下：

``` batch
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Mozilla\Firefox" /v DisableAppUpdate /t REG_DWORD /d 1 /f
```

3. 安装CoreStaff提供的Flash最终版即可（PPAPI&NPAPI），或者直接安装CleanFlash也可以（基于国内版修改）

### 方案三

> 如果电脑上还有IE，可以直接安装Flash安装包，不需要安装Firefox。
> 接下来正常打开网页即可。