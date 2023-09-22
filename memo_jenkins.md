# Jenkins

## Download Jenkins docker image
    docker pull jenkins/jenkins

## Install
    mkdir jenkins_data

## Start
    docker run \
    --name jenkins \
    --rm \
    -d \
    -p 8080:8080 -p 50000:50000 \
    -v /home/tony/project/jenkins/jenkins_data:/var/jenkins_home \
    jenkins/jenkins

## First time to Use Jenkins
    http://localhost:8080 

    等一段時候之後，jenkins 就會要求輸入預設管理員密碼，畫面上提示 /var/jenkins_home/secrets/initialAdminPassword，但是我們有將容器的 /var/jenkins_home 對映到 host 的 /data/jenkins，所以我們可以在 /home/tony/project/jenkins/jenkins_data/secrets/initialAdminPassword 找到預設密碼

## 將 jenkins 預設 shell 從 sh 變成 bash
    Manage Jenkins > Configure System > Shell > Shell executable

## 單純 Build Job 設定

1. Add **Option** type Variable `$Choose_Steps`

        All
        Kill_Container
        Remove_Images

2. Shell Script

        echo Parameter : $Choose_Steps

        if [[ "$Choose_Steps" == "All" ]] || [[ "$Choose_Steps" == "Kill_Container" ]] || [[ "$Choose_Steps" == "Remove_Images" ]]; then
	        echo "停止 Docker Container"
	        if [ -n "$(docker ps -f "name=mysql_test01" -f "status=running" -q )" ]; then
    	        docker kill mysql_test01
	        fi

	        if [ -n "$(docker ps -f "name=fullstack_lab01_nodejs" -f "status=running" -q )" ]; then
    	        docker kill fullstack_lab01_nodejs
	        fi

	        if [ -n "$(docker ps -f "name=fullstack_lab01_react" -f "status=running" -q )" ]; then
    	        docker kill fullstack_lab01_react
	        fi
        fi

        if [[ "$Choose_Steps" == "All" ]] || [[ "$Choose_Steps" == "Remove_Images" ]]; then
	        echo 刪除 Docker image : fullstack_lab01_nodejs, fullstack_lab01_react ...
	        if [ -n "$(docker images -f "reference=tonyhhc/fullstack_lab01_nodejs" -q )" ]; then
    	        docker image rm tonyhhc/fullstack_lab01_nodejs
	        fi

	        if [ -n "$(docker images -f "reference=tonyhhc/fullstack_lab01_react" -q )" ]; then
    	        docker image rm tonyhhc/fullstack_lab01_react
	        fi
        fi

        if [[ "$Choose_Steps" == "All" ]]; then
	        echo "Build Image ..."
    
            cd /home/tony/project/react/fullstack_lab_01/server_nodejs
            docker build . -t tonyhhc/fullstack_lab01_nodejs
    
            cd /home/tony/project/react/fullstack_lab_01/client_ad_rect
            docker build . -t tonyhhc/fullstack_lab01_react
        fi

        if [[ "$Choose_Steps" == "All" ]]; then
	        echo Start MySQL ...
	        docker run --name mysql_test01 --rm -e MYSQL_ROOT_PASSWORD=sa -d -v /home/tony/project/react/fullstack_lab_01/mysql_data:/var/lib/mysql -p 8816:3306 mysql

	        echo Start NodeJS ...
	        docker run --name fullstack_lab01_nodejs --rm -p 8800:8800 -d tonyhhc/fullstack_lab01_nodejs

	        echo Start React ...
	        docker run --name fullstack_lab01_react --rm -p 80:80 -d tonyhhc/fullstack_lab01_react
        fi
