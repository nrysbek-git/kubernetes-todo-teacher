# Teacher Guide

## Место в программе

Это промежуточная практика между Docker Compose и cloud capstone. Рекомендуемое
время — 12–18 часов, включая защиту. Она выполняется после изучения Pods,
Deployments, Services, configuration, storage и probes, но до EKS/Terraform.

## Checkpoints

1. Containers и localhost — 2–3 часа.
2. Основные Kubernetes resources — 5–7 часов.
3. Reliability, security и rollout — 3–5 часов.
4. Documentation и защита — 1–2 часа.

## Формат защиты

Студент показывает приложение через `kubectl port-forward`, затем:

```bash
kubectl -n kubernetes-todo get all
kubectl -n kubernetes-todo get pvc,configmap,secret
kubectl -n kubernetes-todo describe deployment backend
kubectl -n kubernetes-todo rollout history deployment/frontend
```

Попросите удалить один frontend и один backend Pod, проверить сохранность задач,
объяснить Service selectors, probes, Secret flow и StatefulSet/PVC.

## Границы задания

- cloud account, Terraform и managed database не требуются;
- domain и HTTPS не требуются;
- Helm необязателен;
- Ingress и HPA можно сделать advanced-частью при нехватке времени;
- готовые manifests из этого repository студентам не выдаются.
