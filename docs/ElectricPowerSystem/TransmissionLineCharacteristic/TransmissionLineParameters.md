---
id: TransmissionLineParameters
title: 선로정수
---
## 전선의 표피효과
$$
\delta = \sqrt {\frac{1}{\pi f \sigma \mu}}[m]
$$
- $\delta$ : 표피 두께
- $f$ : 주파수
- $\sigma$ : 도전율
- $\mu$ : 투자율  

굵기가 굵을 수록, 주파수가 높을 수록 표피 효과가 크다.
## 저항(R)
## 인덕턴스(L)
경동선 기준
$$
L = 0.05+0.4605\log _{10} \frac{D}{r}[mH/km]
$$
- $D$ : 등가선간 거리
- $r$ : 전선의 반지름
## 복도체
$$
r_e = \sqrt[n]{rs^{n-1}}
$$
- $n$ : 소도체 수
- $r$ : 소도체 반지름
- $s$ : 소도체간 거리
## 충전전류
$$
I_C = 2\pi fCl \frac{V}{\sqrt{3}}
$$
$$
I_C = 2\pi f(C_s+3C_m)l \frac{V}{\sqrt{3}}
$$
- $C_s$ : 대지 정전용량
- $C_m$ : 전선간의 상호 정전 용량

