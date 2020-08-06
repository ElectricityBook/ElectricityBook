---
id: MaxwellEquation
title: 맥스웰 방정식
sidebar_label: 맥스웰 방정식
---

## 가우스 법칙
### 미분형
$$
\nabla \cdot \mathbf{D}=\rho
$$
전속 밀도 $\mathbf{D}$(Electric Flux Density)의 근원을 검출하면, 그 값은 전하 밀도 $\rho$(Electric Charge Density)가 된다.
### 적분형
$$
\oint_S \mathbf{D} \cdot \,d \mathbf{S}=\int_v \rho \, dv=Q
$$
## 자기력에서의 가우스 법칙
### 미분형
$$
\nabla \cdot \mathbf{B}=0
$$
자속 밀도 $\mathbf{B}$(Magnetic Flux Density)의 근원을 검출하면, 그 값은 항상 0이다.
### 적분형
$$
\oint_S \mathbf{B} \cdot \,d \mathbf{S}=0
$$
## 페러데이의 유도 법칙
### 미분형
$$
\nabla \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t}
$$
전기장 $\mathbf{E}$(Electric Field)의 회전을 검출하면, 그 값은 자속 밀도 $\mathbf{B}$의 시간적 감소와 같다.
### 적분형
$$
\oint_c \mathbf{E} \cdot \,d \mathbf{l}=-\int_S\frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S}
$$
## 앙페르의 회로 법칙
### 미분형
$$
\nabla \times \mathbf{H}=\mathbf{J}+\frac{\partial \mathbf{D}}{\partial t}
$$
자기장 $\mathbf{H}$(Magnetic Field)의 회전을 검출하면, 그 값은 전류 밀도 $\mathbf{J}$(Electric Current Density)와 전속 밀도 $\mathbf{D}$의 시간적 증가의 합과 같다.
### 적분형
$$
\oint_c \mathbf{H} \cdot \,d \mathbf{l}=I+\int_S\frac{\partial \mathbf{D}}{\partial t} \cdot d\mathbf{S}
$$