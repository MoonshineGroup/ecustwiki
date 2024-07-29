# OpenGL（C++）

>    本教程需要读者至少具有C语言基础，并对C++有一定了解，部分语言上的难点会进行标注，部分计算专有名词请自行查阅。

## OpenGL的简介

**OpenGL具有多种语言的实现，包括C++，python等，本文讲述的是C++版本的OpenGL**

&emsp;&emsp;OpenGL意为Open Graphics Library，即开放图形库，是当前最常用的图形库之一，广泛应用于游戏，影视，医学等领域，与另外两个广泛使用的图形库（Vulkan，DirectX）相比，**OpenGL是跨平台的，更为简单的，尽管OpenGL性能不及其余两个库，但OpenGL更容易入门**，入门后其使用到的概念也能很快迁移到其余两个库当中，故图形学入门推荐使用OpenGL。

&emsp;&emsp;通常OpenGL被认为是一套API接口，包含了一系列函数，但事实上OpenGL本身只是一个由委员会制定并维护的规范，具体实现由OpenGL库的作者来实现，实际上使用的OpenGL库由各显卡制造商来实现，在这里我们所使用的库为GLFW，是最为流行的OpenGL库之一，**且支持Window及MacOS**。

[OpenGL官方网站](https://opengl.org)

学习网站:

[GitHub mirror](https://learnopengl-cn.github.io)

[Source](https://learnopengl.com/)

## OpenGL的安装
    以Visual Studio 2019为示例

### GLFW的下载

&emsp;&emsp;下载[GLFW库](https://www.glfw.org/download.html)文件，GLFW已经为我们提供了Visual Studio预编译好的版本，故请直接根据自身需求下载32_bit / 64_bit版本。

&emsp;&emsp;下载解压完后文件目录如下  
<center><img src="https://cdn.jsdelivr.net/gh/Ioding/OGLPictures/repForOGLIns/GLFWlist.png"></center>

### 配置Visual Studio


 &emsp;&emsp;首先创建一个Visual Studio C\++空项目并新建一个.cpp文件（否则属性页不会出现 **C/C++** 一栏），然后在属性页中找到 **C/C++** 中的**常规/附加包含目录**一栏，将GLFW中的include添加到其中。
 <center><img src="https://cdn.jsdelivr.net/gh/Ioding/OGLPictures/repForOGLIns/includeContent.png"><img src="https://cdn.jsdelivr.net/gh/Ioding/OGLPictures/repForOGLIns/includeContentDetails.png"></center>

&emsp;&emsp;同样在属性页的**链接器/常规/附加库目录**里，根据自己的Visual Studio版本选择对应lib文件夹，添加进去。
<center><img src="https://cdn.jsdelivr.net/gh/Ioding/OGLPictures/repForOGLIns/libContent.png"><img src="https://cdn.jsdelivr.net/gh/Ioding/OGLPictures/repForOGLIns/libContentDetails.png"></center>

在**链接器/输入/附加依赖项**中添加两个字段
>    opengl32.lib;glfw3.lib
<center><img src="https://cdn.jsdelivr.net/gh/Ioding/OGLPictures/repForOGLIns/libFile.png"></center>

接下来我们配置GLAD库，该库用于简化访问在GLFW中已经实现的接口（函数）的流程。
请在GLAD的[在线服务](https://glad.dav1d.de/)网站里下载，Language选择**C/C++**，gl选择**3.3以上**版本（之前版本所使用API有所不同），Profile选择**core**，Options勾选**Generate a Loader**，然后点击**GENERATE**跳转网页后下载glad.zip文件。

<center><img src="https://cdn.jsdelivr.net/gh/Ioding/OGLPictures/repForOGLIns/gladDownload.png"></center>

&emsp;&emsp;解压后将include文件夹中的文件按上文本节第一步所述添加到附加包含目录内，将./src内的glad.c文件复制到你的工程当中。
<center><img src="https://cdn.jsdelivr.net/gh/Ioding/OGLPictures/repForOGLIns/glad.png"></center>

如果所有步骤都正确的完成了，现在你已经可以在本项目内使用OpenGL编程了，但在别的项目内仍要重复这些步骤，当然你也可也一劳永逸的把这些配置设置成Visual Studio的默认配置，具体操作请自行查阅相关资料。

&emsp;&emsp;将下述代码复制到main.cpp文件中并编译运行，如果你看到了一个深绿色的程序框且没有出现任何错误，那么就成功配置上述两个库了。

``` C/C++
    #include <glad/glad.h>
    #include <GLFW/glfw3.h>
    #include <iostream>
    
    int main()
    {
    
        glfwInit();
        glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
        glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
        glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
    #ifdef __APPLE__
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
    #endif
        GLFWwindow* window = glfwCreateWindow(800, 600, "OpenGL", NULL, NULL);
        if (window == NULL)
        {
            std::cout << "Failed to create GLFW window" << std::endl;
            glfwTerminate();
            return -1;
        }
        glfwMakeContextCurrent(window);
    
        if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
        {
            std::cout << "Failed to initialize GLAD" << std::endl;
            return -1;
        }
        while (!glfwWindowShouldClose(window))
        {
            glClearColor(0.0f, 0.3f, 0.3f, 1.0f);
            glClear(GL_COLOR_BUFFER_BIT);
    
            glfwSwapBuffers(window);
            glfwPollEvents();
        }
    
        glfwTerminate();
        return 0;
    }
```