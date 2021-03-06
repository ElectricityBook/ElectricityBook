---
id: Corona
title: 코로나 현상
---
## 개요
전선 주위의 공기 절연이 국부적으로 파괴되어 낮은 소리나 엷은 빛을 내면서 방전하게 되는 현상을 코로나 또는 코로나 방전이라고 한다.

## 파열극한 경위경도
- DC : $30[kV/cm]$
- AC : $21[kV/cm]$

## 코로나의 영향
1. 전력손실
2. 코로나 잡음
3. 전선 부식
4. 통신선 장애

## 코로나 방지 대책
코로나 임계전압 $E_0$를 크게 한다.
$$
E_0=24.3*m_0*m_1*\delta *d*log_{10}\frac{D}{r}[kV]
$$
- $\delta$ : 상대공기밀도 $\delta=\frac{0.386b}{273+t}$
- $m_0$ : 전선 표면계수
- $m_1$ : 기후에 관한 계수
- $r$ : 전선의 반지름
- $D$ : 선간거리$[m]$

1. 전선의 지름을 크게 한다.
2. 복도체를 사용한다.
3. 가선 금구를 개량한다.

## 코로나 손실
Peek 식
$$
P=\frac{241}{\delta}(f+25)\sqrt{\frac{d}{2D}}(E-E_0)^2\times10^{-5}[kW/km/line]
$$

- $\delta$ : 상대공기밀도 $\delta=\frac{0.386b}{273+t}$
- $f$ : 주파수$[Hz]$
- $d$ : 전선의 지름$[cm]$
- $D$ : 선간거리$[m]$
- $E$ : 전선의 대지전압$[kV]$
- $E_0$ : 코로나 임계전압$[kV]$
