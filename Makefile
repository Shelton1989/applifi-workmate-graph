set-project:
	gcloud config set project graph-prod-356609 

docker-build:
	docker build -t eu.gcr.io/graph-prod-356609/unparel-graph .

docker-push:
	docker push eu.gcr.io/graph-prod-356609/unparel-graph
	