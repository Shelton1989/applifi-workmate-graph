set-dev-project:
	gcloud config set project workmate-ai

docker-build-dev:
	docker build --build-arg BUILD_TYPE=":dev" -t gcr.io/workmate-ai/applifi-workmate-graph .

docker-push-dev:
	docker push gcr.io/workmate-ai/applifi-workmate-graph

deploy-dev:
	gcloud run deploy applifi-workmate-graph --image gcr.io/workmate-ai/applifi-workmate-graph:latest --platform managed --region europe-west1 --allow-unauthenticated

set-prod-project:
	gcloud config set project workmate-ai

docker-build-prod:
	docker build --build-arg BUILD_TYPE="" -t gcr.io/workmate-ai/applifi-workmate-graph .

docker-push-prod:
	docker push gcr.io/workmate-ai/applifi-workmate-graph
	