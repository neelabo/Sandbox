# Top Page

## Main contents

- [English](en-us)
- [日本語](ja-jp)

## Test

## Title

ABCDE **ABCDE** *ABCDE* ~~ABCDE~~ __ABCDE__

# Sub x1
## Sub x2
### Sub x3
#### Sub x4
##### Sub x5

----

- [Test Html](test.html) is link
- [Test Html](test.html) is link
    - indent 1
    - indent 2

### Table


|a|b|c|
|---|---|---|
|テーブル|は|どうなる？|

> [!NOTE]
> ほげほげ

This is a `nice` pen.

```java:title
int i = 0; //コード
```

> aaa
>> bbb 
>> bbb2

<script>
    function redirectURL() {
      const language = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage;
      if (language.startsWith('ja')) {
        location.href = `/ja-jp/`;
      }
      else {
        location.href = `/en-us/`;
      }
    }

    redirectURL();
</script>

