# Onther Core Dev Korea Univ Mentoring (infra)

## Docker

### Run application with Docker 
client  Dockerfile
server / Dockerfile

## Kubernetes

This tutorial is progressed in a minikube.

### Run application with k8s

#### build image

```bash
eval $(minikube docker-env)
cd server
docker build -t kube-mern-server .
cd ../client
docker build -t kube-mern-client .
```

#### deploy image to k8s

```bash
cd kubernetes
kubectl apply -f mongo-secret.yaml
kubectl apply -f mongodb-pvc.yaml
kubectl apply -f mongo.yaml
kubectl apply -f mern-backend.yaml
kubectl apply -f frontend.yaml
```

#### external access

```bash
minikube service frontend-service --url
```
access application through url
---

### k8s Monitoring (prometheus & grafana)
Install all prometheus, grafana, helm


#### add repository

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
minikube service grafana --url
```

#### uninstall

```bash
helm uninstall grafana
helm uninstall prometheus
```
