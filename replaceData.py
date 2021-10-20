import os
import sys
import fileinput
import shutil
from distutils.dir_util import copy_tree
import shutil

files_list = [
    '1-blagoevgrad',
    '2-burgas',
    '3-varna',
    '4-velikotarnovo',
    '5-vidin',
    '6-vraca',
    '7-gabrovo',
    '8-dobrich',
    '9-kardzhali',
    '10-kiustendil',
    '11-lovech',
    '12-montana',
    '13-pazardzhik',
    '14-pernik',
    '15-pleven',
    '16-plovdiv',
    '17-plovdivoblast',
    '18-razgrad',
    '19-ruse',
    '20-silistra',
    '21-sliven',
    '22-smolyan',
    '23-sofia',
    '24-sofia',
    '25-sofia',
    '26-sofiaoblast',
    '27-starazagora',
    '28-targovishte',
    '29-haskovo',
    '30-shumen',
    '31-yambol',
]
for i in range(len(files_list)):
    
    with open('main.dart.js', 'r') as file :
        filedata = file.read()

        filedata = filedata.replace('demo_data.json', 'data_' + str(i+1) + '.json')

    with open(files_list[i] + '/main.dart.js', 'w') as file:
        file.write(filedata)

    print('File' + files_list[i] + '/main.dart.js was overwritten - data id: ' + str(i+1))

    fromDirectory = 'assets'
    toDirectory = files_list[i] + '/assets'

    copy_tree(fromDirectory, toDirectory)

    shutil.copy('flutter_service_worker.js', files_list[i] + '/flutter_service_worker.js')

input("Press enter to exit ;)")