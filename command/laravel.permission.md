sudo chown -R $USER:www-data storage
sudo chown -R $USER:www-data bootstrap/cache
Then use the following to set proper directory access

chmod -R 775 storage
chmod -R 775 bootstrap/cache
