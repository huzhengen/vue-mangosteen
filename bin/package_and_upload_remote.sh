user=ubuntu

function title {
  echo
  echo "###############################################################################"
  echo "## $1"
  echo "###############################################################################"
  echo
}

title '解压前端包'
cd /home/$user
rm -rf ./distskvue
mkdir ./distskvue
tar xf distskvue.tar.gz --directory=./distskvue
rm -rf distskvue.tar.gz
rm -rf package_and_upload_remote.sh
cd -

title '上传及解压前端包-执行完毕'