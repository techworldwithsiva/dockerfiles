### ARG

ARG is used to supply few variables at the image creation.
* ARG is the only instruction you can use before FROM. ARG declared before cant be accessed after FROM.

### Using ENV and ARG for best results.
* Create one env variable and assign the value of ARG to that.
* Then we can access ARG values through ENV both in image and container.