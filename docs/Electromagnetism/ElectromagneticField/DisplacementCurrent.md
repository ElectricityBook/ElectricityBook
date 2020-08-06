---
id: DisplacementCurrent
title: 변위전류
sidebar_label: 변위전류
---

## 변위 전류 밀도
암페르의 주회법칙을 생각해보자.
$$
\nabla \times \mathbf{H} = \mathbf{J}
$$
임의의 벡터의 회전의 발산은 언제나 0이므로,
$$
\nabla \cdot (\nabla \times \mathbf{H}) = 0 = \nabla \cdot \mathbf{J}
$$
그러나, 전류의 연속성에 의해
$$
\nabla \cdot \mathbf{J} = - \frac{\partial \rho_v}{\partial t}
$$
이는 시간이 변하는 조건에서는 0이 될 수 없다. 그러므로 암페르의 주회법칙에 $J_d$를 추가하면
$$
\nabla \times \mathbf{H} = \mathbf{J} + \mathbf{J_d}
$$
$$
\nabla \cdot (\nabla \times \mathbf{H}) = 0 = \nabla \cdot \mathbf{J} + \nabla \cdot \mathbf{J_d}
$$
$$
\nabla \cdot \mathbf{J_d}
= -\nabla \cdot \mathbf{J}
= \frac{\partial \rho_v}{\partial t}
= \frac{\partial}{\partial t}(\nabla \cdot \mathbf{D})
= \nabla \cdot \frac{\partial \mathbf{D}}{\partial t}
$$
$$
\mathbf{J_d} = \frac{\partial \mathbf{D}}{\partial t}
$$
그러므로, 수정한 암페르의 주회법칙은 다음과 같다.
$$
\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}
$$
여기서, $J_d=\partial\mathbf{D}/\partial t$를 변위 전류 밀도(displacement current density)라 한다.

## 변위전류
변위 전류 밀도에서, 바로 변위 전류 $I_d$를 정의할 수 있다.
$$
I_d=\int \mathbf{J}_d\cdot d\mathbf{S} = \int \frac{\partial \mathbf D}{\partial t} \cdot d \mathbf{S}
$$

- 변위 전류 밀도는 전속 밀도의 시간에 따른 변화에 의해 나타난다.
- 이를 자유 공간에서 맥스웰의 전파 방정식 이론의 토대이다.