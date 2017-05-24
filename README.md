# MarkdownToHTML
マークダウンをHTMLにするよ！

## 仕様書

input 内の .md ファイルを全て output に HTML で出力!

cmd で mdtohtml.js を実行する感じ♪

オレオレスクリプトなんで汎用性はなし！


```
---
title: タイトル
date: 2017-05-20
tags:
- "タグ1"
author: "書いた人"
id: "ファイル名"
---
# h1
## h2
### h3
#### h4
##### h5
###### h6

This is paragraph !

```
this is code !
```

_イタリック体_

*イタリック体*

__太字__

**太字**

```

これを下のように変換 output には指定したファイル名で出力


```
<h1>タイトル</h1>
<ul>
  <li>タグ1</li>
</ul>
<p>書いた人 shioleap</p>
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
<p>This is paragraph !</p>
<pre><code>
this is code !
</code></pre>
<em>イタリック体</em>
<em>イタリック体</em>
<strong>太字</strong>
<strong>太字</strong>

```
