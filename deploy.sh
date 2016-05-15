#/bin/bash

# Compile javascript
webpack

# Make sure 'howmuchlonger' is in ~/.ssh/config
scp -r ./public/* howmuchlonger:/data/www
scp ./nginx.conf howmuchlonger:/home/ubuntu/
ssh howmuchlonger <<EOF
sudo cp /home/ubuntu/nginx.conf /etc/nginx/sites-enabled/howmuchlonger.conf
sudo nginx -s reload
EOF