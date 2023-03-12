mkdir a
touch ./a/aurel && chmod 400 ./a/aurel
touch ./a/ilios && chmod 400 ./a/ilios
touch ./a/kevin && chmod 400 ./a/kevin

mkdir b
touch ./b/hard-ilios && chmod 400 ./b/hard-ilios
ln -s ./a/aurel ./b/soft-aurel

