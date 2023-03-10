### ENTRYPOINT

ENTRYPOINT is also used to run the container just like CMD. But there are few differences.
1. We cant override ENTRYPOINT, but we can override CMD.
2. We can't override ENTRYPOINT, if you try to do so it will go and append to the ENTRYPOINT command.
3. If you use CMD and ENTRYPOINT and dont give any command from terminal, CMD acts as argument provider to ENTRYPOINT.
4. CMD will supply default arguments to ENTRYPOINT.
5. You can always override CMD arguments from runtime.
6. You can stop misusing your image with other commands.



