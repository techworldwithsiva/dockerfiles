FROM almalinux
RUN yum install nginx -y
CMD ["nginx", "-g", "daemon off;"]
# CMD ["sleep", "20"] there should be only one CMD instruction. if we give multiple the last one will be considered 