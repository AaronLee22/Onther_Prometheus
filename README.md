# Onther Core Dev Korea Univ Mentoring (infra)

## Docker

### Run application with Docker

![docker](./assets/docker.png)

## Kubernetes

This tutorial is progressed in a minikube.

### k8s Monitoring (prometheus & grafana)

#### repository add

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
```

#### deploy

```bash
helm install prometheus prometheus-community/prometheus -f values-prometheus.yml
helm install grafana grafana/grafana -f values-grafana.yml
```

#### external access

```bash
minikube service -n prometheus grafana --url
```

#### uninstall

```bash
helm uninstall grafana
helm uninstall prometheus
```
