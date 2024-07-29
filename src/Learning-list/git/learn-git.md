# 学习git

## 《Pro Git》是相当好的教程

[Pro Git 中文版（第二版）](https://www.progit.cn/) 

::: tip
中文版的内容已经在2014年之后停止更新，建议搭配翻译软件使用原文进行阅读
:::

## 希望轻松入门？快速使用而不先纠结于深层理解？

[Git教程 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600)

适合需要在2天甚至1天内学会git好早日参加团队合作的同学。

## 还有细节难以理解？查看官方技术文档

git官方网站：[Git (git-scm.com)](https://git-scm.com/)

技术文档：[Git - Reference (git-scm.com)](https://git-scm.com/docs)

## 恼人的小细节：

github无法访问\git pull/push 出现port 443：

[GitHub无法访问、443 Operation timed out的解决办法 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904193170341896)

::: warning 严重警告⚠
不要在任何国内网站上提及一些特殊的工具，真的有必要请联系CIC-CoreStaff寻求帮助

如果出现一系列的Github相关网络问题，请关注[FastGit项目组](https://fastgit.org)获取最新镜像地址即可。
:::

### 笔者在学习git时的困惑

#### 如何理解.gitignore文件“递归地应用到整个仓库中”？

暂时解答：`.gitignore`文件不涉及文件夹操作的正则表达式对于每个没有`.gitignore`文件的文件夹生效

#### 暂存区实际上是一个二进制index文件

指的是 .git/index  git官方文档中常表示为index

## git add:

​`git add *` 提交所有文件

## git diff:

​`git diff` 显示worktree（工作目录）和 staged（也就是index）之间的diff

`git diff --staged`(或者`--cached`) 查看已经暂存起来的变化 （暂存区和本地最新版本之间的差别）

## 快速提交：

​`git commit -a`：add所有文件并提交

## git rm:

​`git rm` 有一些功能：
* ​记录移除文件的操作，或者说，将文件从tracked list 中删除 并且 将文件从工作目录（worktree）中删除
* `​git rm -f`：删除已经修改过或者已经放到暂存区的文件，使用强制删除
* ​当你只想将文件从 tracked list 中删除，而不想删除工作目录时，使用：`git rm --cached <filename>`
* ​也可以使用 glob模式 惊醒递归的、批量的删除

## git mv
在git中对文件进行改名:`git mv file_from file_to`

使用gitstatus能发现：
> renamed: file_from -> file_to

相当于运行：
> mv file_from file_to<br/>
> git rm file_from<br/>
> git add file_file_to

## git log
-p/--patch

## 撤销操作
`git commit --amend` 提交所有修改并代替latest commit

`git reset`:
* `git reset HEAD README.md`
* HEAD 上一次提交的快照，下一次提交的父节点，是当前分支引用的指针
* index 预期的下一次提交的快照
* working directory 沙盒
* 索引(index)是你预期的下一次提交，我们在之前已经多次提到
* 工作目录、工作区、沙盒这三个词是同一个意思

![image-20220423180451048](https://cdn.jsdelivr.net/gh/OnePiePi/Picbed/202204231804184.png)

`git reset HEAD~`: 将HEAD指向前一个版本 这时如果你再进行修改和git commit 以上操作就相当于 `git commit --amend`

`git reset --soft`:相当于撤销了一次commit操作，index 和 working directory都没有改变

`git reset --mixed`(默认操作)：将index更新为HEAD指向的快照

`git reset --hard`:	危险的行为，会将working directory 也更新为快照内容

​仔细想想 git reset file.txt 有 取消暂存文件的效果：将index文件file.txt恢复为latest快照版本

## 压缩提交
就是将head移动到你认为有必要保留的最旧一个提交然后将暂存区最新的版本commit

## reset 与 checkout 的区别
`checkout`会移动 HEAD 自身来指向另一个分支，而`reset`仅会改变分支指向commit的指向

## git push & git pull
`git push <远程仓库名> <远程分支名>:<本地分支名>`

`git pull <远程仓库名> <远程分支名>:<本地分支名>`

如果设置了 refspec 则后面都不用加