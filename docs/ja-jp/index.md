# Top Page

![App Icon](../assets/images/sample.png)

> [!CAUTION]  
> [Test Page](page.md) に移動

> [!IMPORTANT]  
> 問題を回避するために、ユーザーの即時の注意が必要な緊急情報。

## Pages !!!!

<ul>
  {% for a_page in site.html_pages %}
    {% if a_page.title != page.title %}
      <li>
        <a href="{{ site.github.url }}{{ a_page.url }}">{{ a_page.title }} | {{ a_page.url }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

### TOC

- [コマンドライン オプション](commandline-options.html)
- [スクリプト マニュアル](script-manual.html)
- [検索オプション](search-options.html)
- [メイン メニュー](main-menu.html)
- [コマンド一覧](command-list.html)

### github alert

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.


### code embedded
This is a `green` pen.

### code block 
```
#include <stdio.h>
printf("Hello, World!);
```
```c
#include <stdio.h>
printf("Hello, World!);
```
``` for (int i=0; i<100; i++) { Debug.WriteLine(i); } ```

### quote block
> 引用  
> ですよね？