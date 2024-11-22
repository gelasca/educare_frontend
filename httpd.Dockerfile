FROM httpd
COPY ./fonts \
    ./images \
    ./scripts \
    ./styles \
    ./dashboard.html \
    ./home_discente.html \
    ./home_docente.html \
    ./login.html \
    ./pos_questionario.html \
    ./pre_questionario.html \
    ./questionario.html \
    /usr/local/apache2/htdocs/
EXPOSE 80