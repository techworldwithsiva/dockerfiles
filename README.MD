### Dockerfiles

Dockerfile is a declarative way of creating our own images. Docker will give us some syntax to create our own images.

File name should Dockerfile.

### How to build image from Dockerfile

```
docker build -t [docker-hub-URL]/[your-username]/[image-name]:version .
```

### How to push image to Dockerhub

```
docker push [docker-hub-URL]/[your-username]/[image-name]:version
```