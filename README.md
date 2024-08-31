## Build and run docker image

```sh
docker build -t test-lambda:1 . && docker run -p 9000:8080 test-lambda:1
```

## Trigger the lambda

```sh
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{
  "length": 6,
  "width": 7
}'
```
