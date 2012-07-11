Hi,这是一个消息弹出层的jQuery插件，外观样式使用了QQ空间中的消息弹出层样式，简单方便实用


###Usage

1.  引用 msgbox.js

2.  引用 msgbox.css

3.  通过下面的方法调用来弹出消息提示:

    <pre>
    &lt;script type="text/javascript"&gt;
        jQuery(function($){
            $('#success').click(function(){
                jQuery.msgbox({
                    //这里可以根据你的需求设置参数列表，可以不填采用默认效果
                });
            });
        })
    &lt;/script&gt;
    </pre>

4.  参数说明
        type: 'success',
        msg: '发表成功',
        delay: 1200
    <pre>
    参数        类型      默认值       功能                     备注
    type       字符串     'success'    设置提示框类型     success:成功 error:错误 warn:提示 clear:普通文本提示
    msg        字符串     '提交成功'   提示的内容    
    url        字符串     null         提示之后自动跳转到指定url    
    delay      数字       1200         消息框在页面中显示的时间     
    </pre>


###Change Log

=========【2012.7.11】MsgBox 1.0 =========

【添加】添加提示之后自动跳转到指定url功能

=========【2012.7.10】MsgBox 1.0 =========

【发布】MsgBox1.0发布


###Project Tree

    |--msgbox
        |--msgbox.js // msgbox核心源代码，保留了注释
        |--msgbox.css // msgbox样式文件
        |--medesky_tip_layer.png
        |--medesky_tip_layer_ie6.png
        |--index.html // 一个简单的演示


###Contact Me

* website: www.yunsunweb.com www.medesky.me
* weibo: <a href="http://weibo.com/100306120">weibo.com/100306120</a>
* QQ: me@medesky.me
* email: me@medesky.me
