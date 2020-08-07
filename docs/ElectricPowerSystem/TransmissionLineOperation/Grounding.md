---
id: Grounding
title: 중성점 접지방식
---

## 종류
### 비접지 방식
### 직접접지 방식
### 저항 접지방식
### 소호리액터 접지 방식
$Z_n=j\omega X_L$
#### 소호리액터의 크기
1. 변압기의 리액턴스 $x_t$를 고려하지 않은 경우
$$
\omega L = \frac{1}{3\omega C_s}
$$
$$
L = \frac{1}{3\omega ^2C_s}
$$
2. 변압기의 리액턴스 $x_t$를 고려하는 경우
$$
\omega L = \frac{1}{3\omega C_s}-\frac{x_t}{3}
$$
$$
L = \frac{1}{3\omega ^2C_s}-\frac{L_t}{3}
$$
3. 계통이 진상운전 되는 것을 방지하기 위해서 10% 정도 과보상한다. $(I=1.1I_c)$
- 합조도 $P$
$$
P = \frac{I_L-I_C}{I_C} \times 100[\%]
$$
$$
I_L = \frac{E}{\omega L}, I_C = 3\omega C E
$$
$$
\omega L < \frac{1}{3\omega C} : \text{과보상, 합조도 +}
$$
$$
\omega L = \frac{1}{3\omega C} : \text{완전공진, 합조도 0}
$$
$$
\omega L > \frac{1}{3\omega C} : \text{부족보상, 합조도 -}
$$