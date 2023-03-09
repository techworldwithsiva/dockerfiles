FROM centos:8
RUN yum install epel-release -y
RUN yum install nginx -y
RUN rm -rf /usr/share/nginx/html/index.html
COPY qi /usr/share/nginx/html/