# 第二周学习总结
## 编程语言通识
### 形式语言(乔姆斯基谱系)
* 0型 无限制文法
* 1型 上下文相关文法
* 2型 上下文无关文法
* 3型 正则文法
### 重点理解 产生式(BNF)
**1) 定义数字** 
```
<Number> ::= "0" | "1" | "2" | ... | "9"
```

**2) 10进制数**
```
<DecimalNumber> ::= "0" | (("1" | "2" | ... | "9") <Number>*)
```

**3) 定义加法表达式(加法支持连加)**
```
<AdditiveExpression> ::= <DecimalNumber> | <AdditiveExpression> "+" <DecimalNumber>
```

**4) 定义乘法&除法表达式(乘法支持连乘)**

```
<MultiplicativeExpression> ::= <MultiplicativeExpression> |
  <MultiplicativeExpression> "*" <DecimalNumber> |
  <MultiplicativeExpression> "/" <DecimalNumber>
```

**5)支持加法、减法**
```
<AdditiveExpression> ::= <MultiplicativeExpression> | 
  <AdditiveExpression> "+" <MultiplicativeExpression> |
  <AdditiveExpression> "-" <MultiplicativeExpression>
```

**5)带括号, 括号的优先级高于乘法**
```
<PrimaryExpression> ::= <DecimalNumber> | "(" <LogicalExpression> ")"
<MultiplicativeExpression> ::= <MultiplicativeExpression> |
  <MultiplicativeExpression> "*" <PrimaryExpression> |
  <MultiplicativeExpression> "/" <PrimaryExpression>
```


## 正则表达式
## ASCII，Unicode 和 UTF-8
## Javascript运行时类型
* Number
* String
* Boolean
* Null
* Undefined
* Object
* Symbol
