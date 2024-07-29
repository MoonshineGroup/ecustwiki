# OpenGL窗口显示

&emsp;&emsp;在上节中我们成功的在Visual Studio中配置好了OpenGL,并通过一个示例代码显示出了一个窗口,本节我们将深入探讨上节中的代码。
&emsp;&emsp;让我们再次测试GLFW能否正常工作,新建一个<code>.cpp</code>文件,并把下面的代码粘贴到文件开头。

```c++
    #include <glad/glad.h>
    #include <GLFW/glfw3.h>
```

 注意<code>glad.h</code>文件必须放在所有其他OpenGL头文件之前,不仅在现在所使用的GLFW,未来所用的所有依赖于OpenGL的头文件中,<code>glad.h</code>都必须在开头。

 接下来我们创建<code>main</code>函数,并实例化GLFW窗口。

```c++
 int main()
{

    glfwInit();
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
#ifdef __APPLE__
glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
#endif

    return 0;
}
```

在main函数中首先需要使用<code>glfwInit()</code>函数初始化GLFW,、在调用绝大多数GLFW函数之前都需要初始化,接下来我们使用<code>glfwWindowHint(int hint, int value)</code>来配置GLFW,该函数第一个值为枚举值,代表所配置选项的名称,第二个值为这个选项的值,在上面的代码中我们配置了GLFW的主版本号和次版本号都为3,并配置了使用模式为核心模式(core_profile),通常我们所使用的都为核心模式,因为另一模式包含了许多旧OpenGL的特性用于历史兼容性。如果你所用系统为MacOS系统,还需要加上下面这行代码才能配置成功,也就是被<code>#ifdef</code>和<code>#endif</code>所处理的代码。

```c++
glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
```

&emsp;&emsp;初始化GLFW后我们就可以创建自己的窗口了。
&emsp;&emsp;通过<code>GLFWwindow* window = glfwCreatWindow(800, 600, "OpenGL", NULL, NULL);</code>
来创建窗口对象,<code>glfwCreatWindow(int width, int height, const char* title, GLFWmonitor* monitor, GLFWwindow* share)</code>函数前两个参数为窗口的宽和高,第三个参数为窗口的名称,后两个参数暂且忽略,设置为<code>NULL</code>或<code>nullptr</code>,该函数返回GLFWwindow对象。
&emsp;&emsp;最后我们通知GLFW将我们窗口的上下文(context)设置为当前线程的主上下文。

```c++
glfwMakeContextCurrent(window);
```

&emsp;&emsp;现在运行你的程序就可以显示出一个窗口,但是不能进行任何操作甚至包括关闭,只能通过任务栏关闭。

&emsp;&emsp;设置完GLFW后就轮到GLAD了,通过<code>gladLoadGLLoader((GLADloadproc)glfwGetProcAddress);</code>来初始化GLAD。

&emsp;&emsp;接下来到了渲染中至关重要的一步——渲染循环(Render Loop)了，通常一个最基本的渲染循环如下:

```c++
while(!glfwWindowShouldClose(window))
{
	glfwSwapBuffers(window);
    glfwPollEvents();
}
```

&emsp;&emsp;通过<code>glfwWindowShouleClose(GLFWwindow* window)</code>函数来判断GLFW是否退出，<code>glfwSwapBuffers(GLFWwindow* window)</code>负责交换颜色缓冲区，<code>glfwPollEvents()</code>负责检测是否有事件触发，窗口的状态更改，并调用对应回调函数。
&emsp;&emsp;这三部分是渲染循环的基本组成，在此之上我们进行具体的渲染操作。

&emsp;&emsp;让我们来尝试一个最简单的渲染操作，

```c++
glClearColor(0.0f, 0.3f, 0.3f, 1.0f);
glClear(GL_COLOR_BUFFER_BIT);
```

&emsp;&emsp;将这两行代码加到渲染循环中能看到一个深绿色的窗口，其中<code>glClearColor(0.0f, 0.3f, 0.3f, 1.0f)</code>负责设置屏幕的颜色，<code>glClear()</code>负责清空屏幕的颜色缓冲。

&emsp;&emsp;在程序的最后，别忘了调用<code>glfwTerminate()</code>释放掉所有之前分配的内存，这是个好习惯。

```c++
glfwTerminate();
return 0;
```

&emsp;&emsp;最后的效果应该是这样的

<img src="https://cdn.jsdelivr.net/gh/Ioding/OGLPictures/OGLfirstscreen/firstScreen.png">

完整代码

```c++
#include <glad/glad.h>
#include <GLFW/glfw3.h>

int main()
{

    glfwInit();
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
#ifdef __APPLE__
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
#endif

    GLFWwindow* window = glfwCreateWindow(800, 600, "opengl", nullptr, nullptr);
    
    glfwMakeContextCurrent(window);

    gladLoadGLLoader((GLADloadproc)glfwGetProcAddress);

    while (!glfwWindowShouldClose(window))
    {
        glClearColor(0.0f, 0.3f, 0.3f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT);

        glfwSwapBuffers(window);
        glfwPollEvents();
    }

    return 0;
}
```
本节涉及到的专有概念：**上下文(Context)**，**双缓冲(Double Buffer)**，**回调函数(Callback)**