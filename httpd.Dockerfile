FROM httpd
WORKDIR /usr/local/apache2/htdocs
COPY fonts/ ./fonts/
COPY images/ ./images/
COPY scripts/ ./scripts/
COPY styles/ ./styles/
COPY dashboard.html \
    ./home_discente.html \
    ./home_docente.html \
    ./login.html \
    ./pos_questionario.html \
    ./pre_questionario.html \
    ./questionario.html \
    ./
RUN sed -i 's/DirectoryIndex index.html/DirectoryIndex login.html/g' /usr/local/apache2/conf/httpd.conf
EXPOSE 80