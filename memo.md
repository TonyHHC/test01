# Memo
## Install Docker
Please reference Docker website :
https://docs.docker.com/engine/install/ubuntu/

## Docker 常用 Commands
* docker ps -a
* docker rm

## Install MySQL
### `Download MySQL Docker image`
    docker pull mysql

### `Prepare local data volume for store MySql data`
    mkdir mysql_data

### `Start MySQL container`
    docker run --name mysql_test01 --rm -e MYSQL_ROOT_PASSWORD=sa -d -v /home/tony/project/react/test01/mysql_data:/var/lib/mysql -p 8816:3306 mysql
* 將會在 /home/tony/project/react/test01/mysql_data 看到 MySql 的資料，未來 container 重啟資料會依然保存著
* mysql container 的 3306 port 會 export 到本機的 8816 port，所以 mysql client 可以透過連線至本機的 8816 來存取 mysql

### `Stop MySQL container`
    docker rm mysql_test01

## Install MySQL WorkBench

### `Install`
    apt update
    sudo snap install mysql-workbench-community

### `Start MySQL workbench`
    mysql-workbench-community

### `commandline connect to MySQL docker image`
    docker exec -it mysql_test01 bash
    mysql -u root -p

### `aaa`
    ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';
    -- or
    CREATE USER 'foo'@'%' IDENTIFIED WITH mysql_native_password BY 'bar';

# git
## "Help, I keep getting a 'Permission Denied (publickey)' error when I push!"
This means, on your local machine, you haven't made any SSH keys. Not to worry. Here's how to fix:

1. cd ~/.ssh. This will take you to the root directory for Git (Likely C:\Users\[YOUR-USER-NAME]\.ssh\ on Windows)
2. Within the .ssh folder, there should be these two files: id_rsa and id_rsa.pub. These are the files that tell your computer how to communicate with GitHub, BitBucket, or any other Git based service. Type ls to see a directory listing. If those two files don't show up, proceed to the next step. NOTE: Your SSH keys must be named id_rsa and id_rsa.pub in order for Git, GitHub, and BitBucket to recognize them by default.
3. To create the SSH keys, type ssh-keygen -t rsa -C "your_email@example.com". This will create both id_rsa and id_rsa.pub files.
Now, go and open id_rsa.pub in your favorite text editor (you can do this via Windows Explorer or the OSX Finder if you like, typing open . will open the folder).
Copy the contents--exactly as it appears, with no extra spaces or lines--of id_rsa.pub and paste it into GitHub and/or BitBucket under the Account Settings > SSH Keys. NOTE: I like to give the SSH key a descriptive name, usually with the name of the workstation I'm on along with the date.
4. Now that you've added your public key to Github and/or BitBucket, try to git push again and see if it works. It should!