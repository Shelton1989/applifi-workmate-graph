set-project:
	gcloud config set project ar-auth-dev

docker-build:
	docker build -t eu.gcr.io/ar-auth-dev/cinn-graph-dev .

docker-push:
	docker push eu.gcr.io/ar-auth-dev/cinn-graph-dev
	