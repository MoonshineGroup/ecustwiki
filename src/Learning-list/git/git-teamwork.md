# git小团队合作指南

现有队长a，队员b，队员c

队长创建主仓库A，仓库上有main dev feature 等分支

队员在 github （远程仓库）上fork一份，得到一份相同的但是属于自己的远程仓库B

队员在本地 clone 自己的远程仓库B，这样就有了本地仓库C

队员在设置 upstream 也就是主仓库A，每次开发前都先pull一下 upstream 的 main（或者dev，即你需要merge的分支）分支代码（并及时push到自己的远程仓库B上），确保自己在最新的分支上合并、解决冲突

队员开发一个功能（也就是在feature-1上开发），开发过程中适时上传到自己的远程仓库B上，做好数据备份

功能开发完成，进行git merge（一般merge到dev分支）,解决冲突和 bug

git merge 后一切正常，原本分支不会消失，这时git push feature分支 到 自己的repo 然后将自己的dev分支pull request（发起拉取请求）到主仓库A，由队长决定是否拉取 merge 入 dev

队长拉取，功能开发完毕

队长或者其他人查看dev分支是否已经开发到了一个阶段，是则merge dev 入 main，解决冲突和bug，适时打上tag 