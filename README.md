# Onther Core Dev Korea Univ Mentoring (infra)

## Docker

### Run application with Docker

![docker](./assets/docker.png)

## Kubernetes

This tutorial is progressed in a minikube.

### Run application with k8s

#### image build

```bash
eval $(minikube docker-env)
cd server
docker build -t kube-mern-server .
cd ../client
mv Dockerfile_node Dockerfile
docker build -t kube-mern-client .
mv Dockerfile Dockerfile_node
```

#### deploy

```bash
kubectl apply -f mongodb-pvc.yml
kubectl apply -f database.yml
kubectl apply -f backend.yml
kubectl apply -f frontend.yml
```

#### external access

```bash
minikube service frontend-service --url
```

---

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
minikube service grafana --url
```

#### uninstall

```bash
helm uninstall grafana
helm uninstall prometheus
```
