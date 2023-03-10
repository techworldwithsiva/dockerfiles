### ENTRYPOINT

ENTRYPOINT is also used to run the container just like CMD. But there are few differences.
1. We cant override ENTRYPOINT, but we can override CMD.
2. We can't override ENTRYPOINT, if you try to do so it will go and append to the ENTRYPOINT command.


