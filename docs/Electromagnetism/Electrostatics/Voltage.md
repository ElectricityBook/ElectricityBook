---
id: Voltage
title: 전위
---

## 푸아송 방정식
가우스의 법칙에 의해서
$$
\nabla \cdot \mathbf{D}=\nabla \cdot \epsilon \mathbf{E} = \rho_v
$$
그리고 전계는 전위의 기울기 연산이므로
$$
\mathbf{E} = -\nabla V
$$
두 식을 합치면
$$
\nabla \cdot (-\epsilon\nabla V)=\rho_v
$$
그러므로
$$
\nabla^2V=-\frac{\rho_v}{\epsilon}
$$
이를 푸아송 방정식이라 한다.
## 라플라스의 방정식
라플라스 방정식은 전하가 없는 영역$(\rho_v=0)$에서의 푸아송 방정식이다.
$$
\nabla^2V=0
$$
### 라플라스 방정식의 유일성 정리
어떤 경계조건을 만족하는 라플라스 방정식의 해가 존재하면, 그 해는 유일하다.